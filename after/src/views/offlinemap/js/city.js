const _axios = require('axios')
const area = require('./area.js')
const fs = require('fs');


let url;

// 写入jison文件
const streamFile = (name, data, label) => {
  let w;
  // 写入到身份json文件夹
  // w = fs.createWriteStream(`../json/province/${name}.json`)
  // 写入到城市文件夹
  // w = fs.createWriteStream(`../json/city/${name}.json`)
  // 写入到区文件夹
  w = fs.createWriteStream(`../json/area/${name}.json`)

  data.pipe(w)
  return new Promise((resolve, reject) => {
    w.on('finish', () => {
      console.log('json下载完毕!');
      resolve()
    })
    w.on('error', (err) => {
      console.log(`${label}下载失败，${err}`);
      const path = '../json/area/error.txt'
      mdFile(path, label, err)
      reject()
    })
  })
}

// 写入错误信息
const mdFile = (path, label, err) => {
  if (path.split('/').includes('success.txt')) {
    fs.appendFile(path, `${label}下载成功。     `, (error) => {
      if (error) throw error;
      console.log(`成功已经写入${path}中！`);
    });
  } else {
    fs.appendFile(path, `${label}下载失败，${err}`, (error) => {
      if (error) throw error;
      console.log(`错误已经写入${path}中！`);
    });
  }
}

// 下载地图json
const dowload = (name, url, label) => {
  // console.log('url',url);
  _axios({
    method: 'get',
    url,
    // url:'https://geo.datav.aliyun.com/areas_v2/bound/451224.json',
    // url:'https://geo.datav.aliyun.com/areas_v2/bound/110000_full.json',
    responseType: 'stream'
  }).then(res => {
    console.log('let success = name + label', name + label);
    if (res.status === 200) {
      streamFile(name, res.data, label)
      const path = '../js/success.txt'
      let success = name + label
      mdFile(path, success, res)
    } else {
      const path = '../js/error.txt'
      let error = name + label
      console.log('失败！', error);
      mdFile(path, error, res)
    }
  })
}


// 遍历全国的区域代码获取下载链接
area.forEach(v => {
  // console.log(v);
  // 省份json数据
  // url = `https://geo.datav.aliyun.com/areas_v2/bound/${v.value}_full.json`
  // console.log('行政区域编码下载链接：', url);
  // dowload(v.value, url)
  // 城市json数据
  v.children.forEach(item => {
    // console.log('item', item.children);

    // url = `https://geo.datav.aliyun.com/areas_v2/bound/${item.value}_full.json`
    // console.log('行政区域编码下载链接：', url);
    // dowload(item.value, url)
    // 获取区数据
    item.children.forEach(val => {
      console.log(val);
      url = `https://geo.datav.aliyun.com/areas_v2/bound/${val.value}.json`
      console.log('行政区域编码下载链接：', url);
      dowload(val.value, url, val.label)
    })
  })
})
