<template>
  <div>
    <div>
      <el-button size="mini" type="primary" @click="backMap()" class="btn">返回概览</el-button>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
import $ from "jquery";
require("echarts/lib/chart/map");
require("echarts/map/js/china");

export default {
  name: "mapChart",
  data() {
    return {};
  },

  mounted() {
    // 初始化加载
    this.mapChart();
  },

  methods: {
    // 返回全国视图
    backMap() {
      this.$options.methods.mapChart();
    },

    // 配置渲染map
    mapChart() {
      let myChart = echarts.init(document.getElementById("container"));
      // let dataList = [
      //   { name: "南海诸岛", value: 0 },
      //   { name: "北京", value: 5 },
      //   { name: "天津", value: 7 },
      //   { name: "上海", value: 4 }
      // ];

      window.addEventListener("resize", () => {
        myChart.resize();
      });

      initEcharts("china");
      function initEcharts(map) {
        let option = {
          backgroundColor: "#87CEFA", // 设置背景颜色
          title: {
            show: true,
            text: "中国地图",
            subtext: "made by orange",
            left: "center"
          },
          geo: {
            map: map,
            // roam: false,
            scaleLimit: {
              min: 1.2,
              max: 3
            },
            zoom: 1.2,
            //图形上的文本标签，可用于说明图形的一些数据信息
            label: {
              normal: {
                show: true,
                fontSize: "10",
                color: "rgba(0,0,0,0.7)"
              }
            },
            //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
            itemStyle: {
              //normal 是图形在默认状态下的样式；
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)"
              },
              //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              emphasis: {
                areaColor: "#F3B329",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          series: [
            {
              name: "信息量",
              type: "map",
              //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
              mapType: map,
              geoIndex: 0
              // data: dataList
            }
          ]
        };

        myChart.setOption(option);
      }

      //定义全国省份的数组
      var provinces = {
        // 23个省
        台湾: "taiwan",
        河北: "hebei",
        山西: "shanxi",
        辽宁: "liaoning",
        吉林: "jilin",
        黑龙江: "heilongjiang",
        江苏: "jiangsu",
        浙江: "zhejiang",
        安徽: "anhui",
        福建: "fujian",
        江西: "jiangxi",
        山东: "shandong",
        河南: "henan",
        湖北: "hubei",
        湖南: "hunan",
        广东: "guangdong",
        海南: "hainan",
        四川: "sichuan",
        贵州: "guizhou",
        云南: "yunnan",
        陕西: "shanxi1",
        甘肃: "gansu",
        青海: "qinghai",
        // 5个自治区
        新疆: "xinjiang",
        广西: "guangxi",
        内蒙古: "neimenggu",
        宁夏: "ningxia",
        西藏: "xizang",
        // 4个直辖市
        北京: "beijing",
        天津: "tianjin",
        上海: "shanghai",
        重庆: "chongqing",
        // 2个特别行政区
        香港: "xianggang",
        澳门: "aomen"
      };

      // 市
      var cityMap = {
        杭州市: "330100",
        宁波市: "330200",
        温州市: "330300",
        嘉兴市: "330400",
        湖州市: "330500",
        绍兴市: "330600",
        金华市: "330700",
        衢州市: "330800",
        舟山市: "330900",
        台州市: "331000",
        丽水市: "331100"
      };
      // 区
      var areaMap = {
        江北区: "330205",
        北仑区: "330206",
        镇海区: "330211",
        鄞州区: "330212",
        奉化市: "330213",
        象山县: "330225",
        宁海县: "330226",
        余姚市: "330281",
        慈溪市: "330282"
      };

      var that = this;

      // 点击触发
      myChart.on("click", param => {

        console.log('param',param);
        if (param.name in provinces) {
          // 处理省模块
          let names = param.name;
          for (let key in provinces) {
            if (names == key) {
              showProvince(provinces[key], key);
              break;
            }
          }
        } else if (param.name in cityMap) {
          // 处理市模块
          let names = param.name;
          console.log("cityMap", names);
          for (let key in cityMap) {
            if (names == key) {
              showCitys(cityMap[key], key);
              break;
            }
          }
        } else if (param.name in areaMap) {
          // 处理区模块
          let names = param.name;
          console.log("areaMap", names);
          for (let key in areaMap) {
            if (names == key) {
              showAreas(areaMap[key], key);
              break;
            }
          }
        }
      });
      //展示对应的省
      function showProvince(eName, param) {
        console.log(eName, param);
        console.log('that',that);
        $.getJSON(`/map/province/${eName}.json`, data => {
          console.log("data", data);
          that.$echarts.registerMap(param, data);
          // alert("省");
          initEcharts(param);
        });
      }

      //展示对应市
      function showCitys(cName, param) {
        console.log("showCitys", cName, param);
        // 显示县级地图
        $.getJSON(`/map/city/${cName}.json`, data => {
          console.log("data", data);
          that.$echarts.registerMap(param, data);
          // alert("县");
          initEcharts(param);
        });
      }

      // 展示对应区
      function showAreas(cName, param) {
        console.log("showAreas", cName, param);
        // 显示县级地图
        $.getJSON(`/map/area/${cName}.json`, data => {
          console.log("data", data);
          that.$echarts.registerMap(param, data);
          // alert("县");
          initEcharts(param);
        });
      }
    }
  }
};
</script>

<style scoped>
#container {
  width: 600px;
  height: 600px;
  margin: 0px auto 0;
}
.btn {
  position: absolute;
  right: 10%;
  z-index: 999;
}
</style>


