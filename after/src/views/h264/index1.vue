<!-- 视频播放 -->
<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <div id="divPlugin" class="plugin"></div>
        <br />
        <div>
          <el-form :inline="true" :model="hkvInfo" class="demo-form-inline">
            <el-row>
              <el-col>
                <el-form-item label="ip">
                  <el-input v-model="hkvInfo.ip" placeholder="ip"></el-input>
                </el-form-item>
                <el-form-item label="port">
                  <el-input
                    v-model="hkvInfo.port"
                    placeholder="port"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <div>
                  <el-form-item label="username">
                    <el-input
                      v-model="hkvInfo.username"
                      placeholder="username"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="password">
                    <el-input
                      v-model="hkvInfo.password"
                      placeholder="password"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item>
                  <el-button
                    type="primary"
                    :loading="loginLoading"
                    @click="onLogin"
                    >登录</el-button
                  >
                  <el-button
                    type="primary"
                    :loading="startPlayLoading"
                    @click="clickStartRealPlay"
                    >开始预览</el-button
                  >
                  <el-button type="primary" @click="clickStopRealPlay"
                    >停止预览</el-button
                  >
                  <el-button type="primary" @click="onLogout">退出</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div>
          <label>数字通道列表: </label>
          <el-tag
            type="success"
            class="my-tag"
            v-for="(item, index) in hkvInfo.channels"
            :key="index"
            >{{ item }}</el-tag
          >
        </div>
      </el-col>
      <!-- <el-col :span="12">
        <div class="el-button-group ">
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(5)"
            @mouseup="mouseUpPTZControl"
          >
            左上
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(1)"
            @mouseup="mouseUpPTZControl"
          >
            向上
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(7)"
            @mouseup="mouseUpPTZControl"
          >
            右上
          </div>
        </div>
        <br />
        <div class="el-button-group ">
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(3)"
            @mouseup="mouseUpPTZControl"
          >
            向左
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(9)"
            @mouseup="mouseUpPTZControl"
          >
            自动
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(4)"
            @mouseup="mouseUpPTZControl"
          >
            向右
          </div>
        </div>
        <br />
        <div class="el-button-group ">
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(6)"
            @mouseup="mouseUpPTZControl"
          >
            左下
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(2)"
            @mouseup="mouseUpPTZControl"
          >
            向下
          </div>
          <div
            class="el-button primary"
            @mousedown="mouseDownPTZControl(8)"
            @mouseup="mouseUpPTZControl"
          >
            右下
          </div>
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import { WebVideoCtrl } from "../../utils/webVideoCtrl.js";

export default {
  data() {
    return {
      hkvInfo: {
        ip: "192.168.60.2", //海康威视摄像头/硬盘录像机的ip地址
        port: "80", //海康威视摄像头/硬盘录像机的端口
        username: "admin", //海康威视摄像头/硬盘录像机的用户名
        password: "cj123456", //海康威视摄像头/硬盘录像机的密码
        channels: [] //海康威视摄像头/硬盘录像机的通道
      },
      mySelectWnd: 0, //当前选中的窗口
      g_bPTZAuto: false,
      iProtocol: 1,
      loginLoading: false,
      startPlayLoading: false,
      iStreamType: 1,
      bZeroChannel: false,
      iRtspPort: 0
    };
  },
  created() {},
  mounted() {
    this.videoInitPlugin(); // 初始化video界面
    console.log("x2js", this.$x2js);
  },

  destroyed() {
    this.clickStopRealPlay();
    this.onLogout();
  },
  methods: {
    // 登录操作
    onLogin() {
      const that = this;
      that.loginLoading = true;

      // 登录设备
      WebVideoCtrl.I_Login(
        that.hkvInfo.ip,
        that.iProtocol,
        that.hkvInfo.port,
        that.hkvInfo.username,
        that.hkvInfo.password,
        {
          async: false,
          success: function(xmlDoc) {
            // console.log('xmlDoc2', xmlDoc);//不能删除
            //TODO 获取通道信息
            that.getChannelInfo();
            that.getDevicePort(that.hkvInfo.ip + "_" + that.hkvInfo.port);
            that.loginLoading = false;

            that.$message({
              showClose: true,
              message: "登录成功",
              type: "success"
            });
          },
          error: function() {
            that.loginLoading = false;
            that.$message({
              showClose: true,
              message: "登录失败",
              type: "error"
            });
          }
        }
      );
    },
    // 登出操作
    onLogout() {
      this.hkvInfo.channels = [];
      const szDeviceIdentify = this.hkvInfo.ip + "_" + this.hkvInfo.port;
      const iRet = WebVideoCtrl.I_Logout(szDeviceIdentify);
      if (0 == iRet) {
        this.$message({
          showClose: true,
          message: "退出成功",
          type: "success"
        });
      } else {
        this.$message({
          showClose: true,
          message: "退出失败",
          type: "error"
        });
      }
    },
    // 开始预览
    clickStartRealPlay() {
      // 开始预览
      const that = this;
      that.startPlayLoading = true;
      const szDeviceIdentify = that.hkvInfo.ip + "_" + that.hkvInfo.port;

      const j =
        that.hkvInfo.channels.length > 4 ? 4 : that.hkvInfo.channels.length;
      for (let i = 0; i < j; i++) {
        setTimeout(
          that.startRealPlay(szDeviceIdentify, i, that.hkvInfo.channels[i]),
          500
        );
      }
      that.startPlayLoading = false;
    },
    // 判断是否有插件
    videoInitPlugin() {
      const iRet = WebVideoCtrl.I_CheckPluginInstall();
      if (iRet === -1) {
        alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装");
        return;
      }
      this.initPlugin();
    },
    // 初始化插件
    initPlugin() {
      const that = this;

      WebVideoCtrl.I_InitPlugin(500, 300, {
        bWndFull: true, //是否支持单窗口双击全屏，默I_CheckPluginInstall
        iWndowType: 2,
        myCbSelWnd: function(xmlStr) {
          //自己新增的方法
          const jsonObj = that.$x2js.xml2js(xmlStr);
          that.mySelectWnd = jsonObj.RealPlayInfo.SelectWnd;
          const szInfo = "当前选择的窗口编号：" + that.mySelectWnd;
          console.log(szInfo);
        },
        cbInitPluginComplete() {
          WebVideoCtrl.I_InsertOBJECTPlugin("divPlugin");
          // 检查插件是否最新
          if (WebVideoCtrl.I_CheckPluginVersion() === -1) {
            alert(
              "检测到新的插件版本，双击开发包目录里的WebComponentsKit.exe升级！"
            );
            return;
          }
        }
      });
    },
    // 获取设备端口号
    getDevicePort(szDeviceIdentify) {
      const oPort = WebVideoCtrl.I_GetDevicePort(szDeviceIdentify);
      this.iRtspPort = oPort.iRtspPort;
    },
    // 播放
    startRealPlay(szDeviceIdentify, iWndIndex, iChannelID) {
      const that = this;
      WebVideoCtrl.I_StartRealPlay(szDeviceIdentify, {
        iRtspPort: that.iRtspPort,
        iWndIndex: iWndIndex,
        iStreamType: 1,
        iChannelID: iChannelID,
        bZeroChannel: that.bZeroChannel,
        success: function() {
          that.$notify({
            title: "成功",
            message: "开始预览通道" + iChannelID + "成功",
            type: "success"
          });
        },
        error: function(status, xmlDoc2) {
          console.log(xmlDoc2); //不能删除
          that.$notify({
            title: "失败",
            message: "开始预览通道" + iChannelID + "失败",
            type: "error"
          });
          if (status === 403) {
            console.log("szInfo 设备不支持Websocket取流！");
          } else {
            console.log("开始预览失败 ", status, xmlDoc2);
          }
        }
      });
    },
    // 停止预览
    clickStopRealPlay() {
      const j =
        this.hkvInfo.channels.length > 4 ? 4 : this.hkvInfo.channels.length;
      for (let i = 0; i < j; i++) {
        setTimeout(this.stopRealPlay(i), 1000);
      }
    },
    // 停止
    stopRealPlay(iWndIndex) {
      const that = this;
      WebVideoCtrl.I_Stop({
        iWndIndex: iWndIndex,
        success: function() {
          that.$notify({
            title: "成功",
            message: "停止预览窗口" + iWndIndex + "成功",
            type: "success"
          });
        },
        error: function() {
          that.$notify({
            title: "失败",
            message: "停止预览窗口" + iWndIndex + "失败",
            type: "error"
          });
        }
      });
    },
    // 获取通道，实际上可以根据自己的项目，获取数字通道，模拟通道，零通道中的一个或多个，不用全部获取（提高效率）
    getChannelInfo() {
      const that = this;
      const szDeviceIdentify = this.hkvInfo.ip + "_" + this.hkvInfo.port;
      // debugger
      // 数字通道
      that.hkvInfo.channels = [];
      WebVideoCtrl.I_GetDigitalChannelInfo(szDeviceIdentify, {
        async: false,
        mysuccess: function(xmlStr) {
          console.log("mysuccess I_GetDigitalChannelInfo: ", xmlStr);
          const jsonObj = that.$x2js.xml2js(xmlStr);
          const list =
            jsonObj.InputProxyChannelStatusList.InputProxyChannelStatus;
          for (let x = 0; x < list.length; x++) {
            that.hkvInfo.channels.push(list[x].id);
          }
        },
        success: function(xmlDoc) {},
        error: function(status, xmlDoc) {
          console.log("获取数字通道失败");
        }
      });
      // TODO 模拟通道
      // 模拟通道
      WebVideoCtrl.I_GetAnalogChannelInfo(szDeviceIdentify, {
        async: false,
        mysuccess(xmlStr) {
          const jsonObj = that.$x2js.xml2js(xmlStr);
          console.log("模拟通道mysuccess", xmlStr);
          // var list = jsonObj.VideoInputChannelList;
          // for (var x = 0; x < list.length; x++) {
          //   that.hkvInfo.channels.push(list[x].VideoInputChannel.id);
          // }
          const id = jsonObj.VideoInputChannelList.VideoInputChannel.id;
          that.hkvInfo.channels.push(id);
        },
        success(xmlStr) {
          console.log("模拟通道success", xmlStr);
        },
        error(status, xmlDoc) {
          console.log("模拟通道error", xmlDoc);
        }
      });
      // TODO 零通道
    },
    // PTZ控制 9为自动，1,2,3,4,5,6,7,8为方向PTZ
    mouseDownPTZControl(iPTZIndex) {
      const oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.mySelectWnd);

      if (oWndInfo !== null) {
        if (iPTZIndex === 9 && this.g_bPTZAuto) {
          iPTZSpeed = 0;
        } else {
          this.g_bPTZAuto = false;
        }

        WebVideoCtrl.I_PTZControl(iPTZIndex, false, {
          iPTZSpeed: 4,
          mysuccess(xmlStr) {
            console.log("I_PTZControl", xmlStr);
            if (iPTZIndex === 9 && this.g_bPTZAuto) {
              console.log(
                oWndInfo.szDeviceIdentify + " 停止云台成功！mouseDown"
              );
            } else {
              console.log(
                oWndInfo.szDeviceIdentify + " 开启云台成功！mouseDown"
              );
            }
            if (iPTZIndex === 9) {
              this.g_bPTZAuto = !this.g_bPTZAuto;
            }
          },
          error(status, xmlDoc) {
            console.log(
              oWndInfo.szDeviceIdentify + " 开启云台失败！mouseDown",
              status,
              xmlDoc
            );
          }
        });
      }
    },
    // 方向PTZ停止
    mouseUpPTZControl() {
      const oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.mySelectWnd);
      if (oWndInfo !== null) {
        WebVideoCtrl.I_PTZControl(1, true, {
          mysuccess(xmlStr) {
            console.log(
              oWndInfo.szDeviceIdentify + " 停止云台成功！mouseUp",
              xmlStr
            );
          },
          error(status, xmlDoc) {
            console.log(
              oWndInfo.szDeviceIdentify + " 停止云台失败！mouseUp",
              status,
              xmlDoc
            );
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.plugin {
  width: 500px;
  height: 300px;
}

.my-tag {
  margin-left: 3px;
}

.my-group-btn {
  margin-top: 5px;
}
</style>
