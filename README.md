# zrender-weapp
本repo让zrender运行在微信小程序里。  
###用法：
```javascript
var circle = new CircleShape({
  shape: {
    cx: 100,
    cy: 100,
    r: 50
  }
});
var firstCanvas = new WeCanvas("firstCanvas");
var zr1 = zrender.init(firstCanvas);
zr1.add(circle);
```
###示例：
![示例](https://cloud.githubusercontent.com/assets/8585771/21485252/55d784f0-cbdb-11e6-8417-2cc830fc327a.png)

###canvas语法对比
| API        | 原生          | 小程序  |
| ------------- |:-------------:| -----:|
| setFillStyle      | 支持 | 支持 |
| setStrokeStyle      | 支持      |   支持 |
| rect      | 支持      |   支持 |
| setTransform      | 支持      |   不支持 |
