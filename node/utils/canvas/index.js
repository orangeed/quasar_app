// // 获取canvas的dom节点
// let canvas = document.getElementById('canvas')
// // 判断浏览器是否支持canvas
// if (canvas.getContext) {
//     // 如果支持，则创建2d画布
//     let ctx = canvas.getContext('2d')
//     console.log('ctx', ctx);
//     // 填充颜色，可以是颜色例如orange，可以是十六进制#ccc,可以是rgb,rgba,可以是渐变色等
//     ctx.fillStyle = "rgba(10,255,255,0.5)"
//     // 起始位置，分为是X轴的起始位置，Y轴的起始位置，宽度，高度
//     ctx.fillRect(10, 50, 200, 300)



//     ctx.fillStyle = "rgb(200,0,0)";
//     ctx.fillRect(10, 10, 55, 50);

//     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//     ctx.fillRect(30, 30, 55, 50);
// } else {
//     // 如果不知道，则执行下面
//     alert('您的浏览器暂不支持canvas')
// }

/**
 * 太阳系
 */
// var sun = new Image();
// var moon = new Image();
// var earth = new Image();

// function init() {
//     sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
//     moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
//     earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
//     window.requestAnimationFrame(draw);
// }

// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');

//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.clearRect(0, 0, 300, 300); // clear canvas

//     ctx.fillStyle = 'rgba(0,0,0,0.4)';
//     ctx.strokeStyle = 'rgba(0,153,255,0.4)';
//     ctx.save();
//     ctx.translate(150, 150);

//     // Earth
//     var time = new Date();
//     ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
//     ctx.translate(105, 0);
//     ctx.fillRect(0, -12, 50, 24); // Shadow
//     ctx.drawImage(earth, -12, -12);

//     // Moon
//     ctx.save();
//     ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
//     ctx.translate(0, 28.5);
//     ctx.drawImage(moon, -3.5, -3.5);
//     ctx.restore();

//     ctx.restore();

//     ctx.beginPath();
//     ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
//     ctx.stroke();

//     ctx.drawImage(sun, 0, 0, 300, 300);

//     window.requestAnimationFrame(draw);
// }

// init();