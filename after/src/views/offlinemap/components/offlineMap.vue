<!-- 离线地图 -->
<template>
  <div>
    <div id="chinaMap" ref="myEchart" class="map" />
    <!-- <div id="myChart" style="width: 100%;height:400px;"></div> -->
  </div>
</template>

<script>
// import echats from "echarts";
const echarts = require("echarts/lib/echarts");
const chinaJson = require("../json/china.json");
const zhejing = require("../json/province/330000.json");
const ningbo = require("../json/city/330200.json");
const fenghua = require("../json/area/330213.json");
// const usaJson = require("../json/usa.json");

// import "echarts/map/js/china"; // 引入中国地图数据
// require("echarts/map/js/world"); // 引入世界地图数据
export default {
  name: "OfflineMap",
  components: {},
  props: {},
  data() {
    return {
      myChart: null,
      chinaName: "china",
      chinaJson, // 中国的json数据
      zhejing,
      ningbo,
      fenghua,
      mapChartOption: {}, //  地图配置
      base: {},
      initOptions: {
        renderer: "canvas"
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("chinaJson", this.chinaJson);
  },
  mounted() {
    this.initMap();
    // this.chinamap();
  },
  methods: {
    // 初始化地图
    initMap() {
      const myEchart = this.$refs.myEchart;
      console.log("myEchart", myEchart);
      this.myChart = echarts.init(myEchart);
      this.registerAndsetOption(this.myChart, this.chinaName, this.chinaJson);
    },
    // 新建地图
    registerAndsetOption(myChart, name, mapJson) {
      // 把获取到的城市name和 城市地图json 用来注册地图
      echarts.registerMap(name, mapJson);
      console.log("this.myChart", this.myChart);
      this.mapChartOption = {
        backgroundColor: "#87CEFA", // 设置背景颜色
        title: {
          show: true,
          text: "中国地图",
          subtext: "made by orange",
          left: "center"
        },
        // 左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 10, end: 20 },
            { start: 6, end: 10 },
            { start: 0, end: 6 }
          ],
          color: ["#1E90FF", "#7FFFAA", "#F0E68C"]
        },
        // 鼠标划入
        tooltip: {
          trigger: "item"
        },
        // 配置属性
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.2,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false
              }
            }
          }
        ]
      };

      myChart.setOption(this.mapChartOption, true);
      // this.clickMap()
    },
    // 点击地图省份
    clickMap() {
      this.myChart.on("click", chinaParam => {
        // this.registerAndsetOption(this.myChart, 'zhejiang', this.zhejing)
        var option = this.myChart.getOption();
        console.log("option", option);
        option.series[0].map = chinaParam.name;
        option.series[0].mapType = chinaParam.name;
        console.log(chinaParam);
        this.myChart.clear();
        echarts.registerMap("zhejing", this.zhejing);
        this.myChart.setOption(option, true);
      });
    },
    // 鼠标滑入事件
    mouseMove() {
      myChart.on("mouseover", function(params) {
        var dataIndex = params.dataIndex;
        console.log(dataIndex);
      });
    },

    chinamap() {
      var myChart = echarts.init(document.getElementById("chinaMap"));
      window.addEventListener("resize", function() {
        myChart.resize();
      });
      var option = {
        backgroundColor: "#87CEFA", // 设置背景颜色
        title: {
          show: true,
          text: "标题--中国地图",
          subtext: "made by orange",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        // 左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 10, end: 20 },
            { start: 6, end: 10 },
            { start: 0, end: 6 }
          ],
          color: ["#1E90FF", "#7FFFAA", "#F0E68C"]
        },
        // 配置属性
        series: [
          {
            name: "数量",
            type: "map",

            map: "china",
            roam: false,
            zoom: 1.2,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false
              }
            },
            data: [
              { name: "北京", value: randomData() },
              { name: "天津", value: randomData() },
              { name: "上海", value: randomData() },
              { name: "重庆", value: randomData() },
              { name: "河北", value: randomData() },
              { name: "河南", value: randomData() },
              { name: "云南", value: randomData() },
              { name: "辽宁", value: randomData() },
              { name: "黑龙江", value: randomData() },
              { name: "湖南", value: randomData() },
              { name: "安徽", value: randomData() },
              { name: "山东", value: randomData() },
              { name: "新疆", value: randomData() },
              { name: "江苏", value: randomData() },
              { name: "浙江", value: randomData() },
              { name: "江西", value: randomData() },
              { name: "湖北", value: randomData() },
              { name: "广西", value: randomData() },
              { name: "甘肃", value: randomData() },
              { name: "山西", value: randomData() },
              { name: "内蒙古", value: randomData() },
              { name: "陕西", value: randomData() },
              { name: "吉林", value: randomData() },
              { name: "福建", value: randomData() },
              { name: "贵州", value: randomData() },
              { name: "广东", value: randomData() },
              { name: "青海", value: randomData() },
              { name: "西藏", value: randomData() },
              { name: "四川", value: randomData() },
              { name: "宁夏", value: randomData() },
              { name: "海南", value: randomData() },
              { name: "台湾", value: randomData() },
              { name: "香港", value: randomData() },
              { name: "澳门", value: randomData() }
            ]
          }
        ]
      };

      var count = -1;
      setInterval(function() {
        var curr = count % 34; // 数字为cityArr.length

        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: curr
        });

        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0, // 因为只有一组数据，所以此处应为0
          dataIndex: curr
        });
        count++;

        /*
    			if (index > cityArr.length - 1) {
    			  count = -1
    			}
    			*/
      }, 500);

      /**
       *  使用刚指定的配置项和数据显示图表。
       *  */
      myChart.setOption(option);
      // 获取随机数
      function randomData() {
        return Math.round(Math.random() * (12 - 1) + 1);
      }

      myChart.on("mouseover", function(params) {
        var dataIndex = params.dataIndex;
        console.log(dataIndex);
      });

      myChart.on("click", function(chinaParam) {
        if (
          chinaParam.name == "北京" ||
          chinaParam.name == "福建" ||
          chinaParam.name == "安徽" ||
          chinaParam.name == "新疆" ||
          chinaParam.name == "西藏"
        ) {
          var option = myChart.getOption();
          option.series[0].map = chinaParam.name;
          option.series[0].mapType = chinaParam.name;
          myChart.clear();
          console.log(chinaParam.name);
          myChart.setOption(option, true);
        } else {
          alert(chinaParam.name + "区域还未开通！");
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.map {
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
