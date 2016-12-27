var zrender = require('./zrender/zrender')
var CircleShape = require('./zrender/graphic/shape/Circle')
var PolylineShape = require('./zrender/graphic/shape/Polyline')
var PolygonShape = require('./zrender/graphic/shape/Polygon')
var ZText = require('./zrender/graphic/Text')
var StarShape = require('./zrender/graphic/shape/Star')
var WeCanvas = require('./zrender/WeCanvas')
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    var star = new StarShape({
      style: {
        lineDash: [5, 5],
        stroke: 'black'
      },
      shape: {
        n: 5,
        r: 50,
        cx: 50,
        cy: 80
      }
    });

    var ctx1 = new WeCanvas("canvas-1");
    var zr1 = zrender.init(ctx1);
    zr1.add(star);
    star.animate('style', true)
      .when(1000, {
        lineDashOffset: -5
      })
      .start();


    var text = new ZText({
      style: {
        x: 10,
        y: 50,
        text: 'zrender in\nwechat\n小程序',
        fill: '#ff0000',
        textFont: '20px Microsoft Yahei',
        textBaseline: 'top'
      },
      draggable: true
    });
    var ctx2 = new WeCanvas("canvas-2");
    var zr2 = zrender.init(ctx2);
    zr2.add(text);

    var circle = new CircleShape({
      shape: {
        cx: 60,
        cy: 80,
        r: 50
      },
      style: {
        fill: '#ff0000'
      }
    });
    var ctx3 = new WeCanvas("canvas-3");
    var zr3 = zrender.init(ctx3);
    zr3.add(circle);

    ////////////////////////////////////////////

    var smoothPolygon = new PolygonShape({
      style: {
        // smoothConstraint: [[-Infinity, -Infinity], [200, Infinity]],
        fill: 'rgba(220, 20, 60, 0.4)',
        stroke: "rgba(220, 20, 60, 1)",
        lineWidth: 2
      },

      shape: {
        points: [[50, 50], [130, 20], [100, 140], [50, 150], [10, 70]],
        smooth: 0.5
      }
    });
    var ctx4 = new WeCanvas("canvas-4");
    var zr4 = zrender.init(ctx4);
    zr4.add(smoothPolygon);
  }
})