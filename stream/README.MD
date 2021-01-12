## 1、http-server

运行一个服务器

``` 

http-server
```

## 2、jsmpeg

推流转发
进入文件夹
node websocket-relay.js 密钥 推流端口 拉流端口

``` 

node websocket-relay.js cj123456 8081 8082
```

## 3、ffmpeg

视频编码解码
给推流编码
ffmpeg -i "视频地址" -q 0 -f mpegts -codec:v mpeg1video -s 1366x768 推流地址

``` 

ffmpeg -i "rtsp://admin:cj123456@192.168.60.2/h264/ch1/main/av_stream" -q 0 -f mpegts -codec:v mpeg1video -s 1366x768 http://127.0.0.1:8081/cj123456
```
