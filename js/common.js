// rem换算，参数size为设计图宽度尺寸（单位为像素）
function setRootSize(size) {
	document.documentElement.style.fontSize = screen.width*100 / size + 'px';
}
window.addEventListener('resize', function() {
	setRootSize(750);
}, false);
window.onload = function() {
	setRootSize(750);
};