var oHTML = document.querySelector('html');
var aWidth = oHTML.clientWidth;

// 设计稿: 375px 
// 默认字大小: 16px 
//一旦根节点html 定义的 font-size 变化，那么整个网页中运用到 rem的也会变化
oHTML.style.fontSize = (aWidth / 375) * 16 + 'px';



//resize 重新定義
window.onresize = function() {
    var oHTML = document.querySelector('html');
    var aWidth = oHTML.clientWidth;
    oHTML.style.fontSize = (aWidth / 375) * 16 + 'px';
};