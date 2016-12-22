var zrender = require('./zrender/zrender')
var CircleShape = require('./zrender/graphic/shape/Circle')
var ZText = require('./zrender/graphic/Text')
var BezierCurve = require('./zrender/graphic/shape/BezierCurve')
var WeCanvas = require('./zrender/WeCanvas')
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    var circle = new CircleShape({
      shape: {
        cx: 100,
        cy: 100,
        r: 50
      },
      style: {
        fill: '#ff0000'
      }
    });
    var text = new ZText({
      style: {
        x: 10,
        y: 50,
        text: 'zrender in\nwechat\n小程序',
        fill: '#ff0000',
        textFont: '18px Microsoft Yahei',
        textBaseline: 'top'
      },
      draggable: true
    });
    var curve = new BezierCurve({
      style: {
        lineDash: [5, 5],
        lineDashOffset: 0
      },
      shape: {
        x1: 100, y1: 100,
        x2: 100, y2: 500,
        x3: 500, y3: 100,
        x4: 500, y4: 500
      }
    });

    var firstCanvas = new WeCanvas("firstCanvas");
    var zr1 = zrender.init(firstCanvas);
    zr1.add(circle);

    var secondCanvas = new WeCanvas("secondCanvas");
    var zr2 = zrender.init(secondCanvas);
    zr2.add(text);
  }
})