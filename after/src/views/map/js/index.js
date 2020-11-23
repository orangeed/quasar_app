import AMapLoader from '@amap/amap-jsapi-loader'
import {
  citys
} from './city'
export default {
  _map() {
    AMapLoader.load({
      key: '9e04a9fdeac91953035385b142296c7f', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: [] // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      }
    })
      .then(AMap => {
        // 创建地图实例
        const map = new AMap.Map('container', {
          rotateEnable: true,
          pitchEnable: true,
          zoom: 17, // 设置地图显示的缩放级别
          pitch: 30, // 仰角
          rotation: -15,
          viewMode: '3D', // 开启3D视图,默认为关闭
          zooms: [2, 20],
          center: [116.333926, 39.997245], // 设置地图中心点坐标
          mapStyle: 'amap://styles/5b59f9b29bb6261d416ce7b61509c972' // 设置地图的显示样式
          // mapStyle: "amap://styles/grey"

        })
        var marker = new AMap.Marker({
          position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '北京'
        })
        // console.log('citys', citys);
        // for (let i = 0; i < citys.length; i++) {
        //   const city = citys[i];
        //   console.log(city);
        //   var marker = new AMap.Marker({
        //     position: city.lnglat
        //   })
        //   // 将创建的点标记添加到已有的地图实例：
        //   map.add(marker);
        // }
        // 将创建的点标记添加到已有的地图实例：
        map.add(marker)

        // // 移除已创建的 marker
        // map.remove(marker);
      })
      .catch(e => {
        console.log(e)
      })
  }
}
