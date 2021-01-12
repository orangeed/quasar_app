const _axios = require('axios')
// import md5 from 'md5'
const md5 = require('md5')


// _axios({
//   url: 'http://192.168.113.220:13027/device/platform/',
//   method: 'post',
//   data: {
//     password: "21232f297a57a5a743894a0e4a801fc3",
//     userName: "admin"
//   },
//   timeout: 2000,
// }).then(res => {
//   console.log(res);
// })



// _axios({
//   url: 'http://192.168.113.220:13011/zjg/2d/login/user',
//   method: 'post',
//   data: {
//     userName: "admin",
//     password: "21232f297a57a5a743894a0e4a801fc3"
//   },
//   timeout: 2000,
// }).then(res => {
//   console.log(res);
// })

// _axios({
//   url: 'http://192.168.113.251:13010/zjg_3s/version/',
//   method: 'get',
//   // data: {
//   //   password: "21232f297a57a5a743894a0e4a801fc3",
//   //   userName: "admin"
//   // },
//   timeout: 2000,
// }).then(res => {
//   console.log(res);
// })


// _axios({
//   url:"https://geo.datav.aliyun.com/areas/bound/geojson?code=100000_full",
//   method:'get',
//   timeout:2000
// }).then(res=>{
//   console.log(res);
// })

//网易云音乐api
// _axios({
//   url: 'https://api.imjad.cn/cloudmusic/',
//   method: 'get',
//   params: {
//     type: 'song',
//     id: '316686'
//     // type: 'search',
//     // search_type: '1',
//     // s: '重来'
//   }
// }).then(res => {
//   console.log(res.data);
// })

//随机一句一言API接口
// _axios({
//   url: 'https://api.vvhan.com/api/ian',
//   method: 'get',
//   params: {
//     type: 'json' // 不填为字符串输出，json为jsonn格式，js为js格式
//   }
// }).then(res => {
//   console.log(res);
// })

//随机笑话api
// _axios({
//   url: 'https://api.vvhan.com/api/xh',
//   method: 'get',
//   params: {
//     type: 'json' // 不填为字符串输出，json为jsonn格式，js为js格式
//   }
// }).then(res => {
//   console.log(res.data);
// })

//随机情话api
// _axios({
//   url: 'https://api.vvhan.com/api/love',
//   method: 'get',
//   params: {
//     type: 'json' // 不填为字符串输出，json为jsonn格式，js为js格式
//   }
// }).then(res => {
//   console.log(res.data);
// })

// 随机骚话api
// _axios({
//   url: 'https://api.vvhan.com/api/sao',
//   method: 'get',
//   params: {
//     type: 'json' // 不填为字符串输出，json为jsonn格式，js为js格式
//   }
// }).then(res => {
//   console.log(res.data);
// })

//随机生成一张风景图片
// _axios({
//   url: 'https://api.vvhan.com/api/view',
//   method: 'get',
//   params: {
//     type: 'json', //不填则直接输出一张图片
//   }
// }).then(res => {
//   console.log(res);
// })
// const nums = [8, 1, 2, 2, 3]
// const max = Math.max(...nums);
// const arr = new Array(max + 1).fill(0);
// nums.forEach(num => arr[num]++);
// let map = {
//   0: 0
// };
// for (let i = 1; i <= max; i++) {
//   map[i] = map[i - 1] + arr[i - 1];
// }
// console.log(nums.map(num => map[num]));
// return nums.map(num => map[num]);

// _axios({
//   url: 'http://192.168.1.88/zjg/4s/web/login/user',
//   method: 'post',
//   data: {
//     password: 'e10adc3949ba59abbe56e057f20f883e',
//     userName: 'admin'
//   }
// }).then(res => {
//   console.log(res);
// })
// const timestamp = new Date().getTime()
// const key = 'zxcvbnmasdfghjkl'
// const sign = md5(timestamp, 'jixin', key)
// console.log('timestamp', timestamp);
// console.log('sign', sign)
// const parasm = {
//   timestamp,
//   key,
//   sign,
// }
// _axios({
//   url: 'http://127.0.0.1:13001/doc/info',
//   method: 'get',
//   data: parasm
// }).then(res => {
//   console.log(res);
// })
// _axios({
//   url: 'http://183.134.197.66:13010/zjg_3s/version',
//   method: 'get',
//   params: {
//     code: '1',
//   },
// }).then(res => {
//   console.log(res);
// })

// _axios({
//   url: 'http://192.168.1.78:13015/static/help/asdas_1607328712.html',
//   method: 'get',
// }).then(res => {
//   console.log(res);
//   console.log(decodeURI(res.data));
// })

// h264视频流
_axios({
  url: 'https://www.sample-videos.com/video123/flv/720/big_buck_bunny_720p_1mb.flv',
  method: 'get',
}).then(res => {
  console.log(res);
})
