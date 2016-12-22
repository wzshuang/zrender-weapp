
function WeCanvas(id) {
    return {
        nodeName: "CANVAS", // 固定写法，zrender里环境检测会用到
        id: id,
        context: null,
        getContext: function () {
            if (!this.context) {
                var ctx = wx.createCanvasContext();
                ctx.id = this.id;
                ctx.setTransform = function () { } // 微信暂不支持。定义个空方法防止代码报错
                ctx.measureText = {
                    width: 18
                } // 微信暂不支持
                this.context = ctx;
            }
            return this.context;
        }
    }
};

module.exports = WeCanvas