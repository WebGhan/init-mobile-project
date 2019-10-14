// rem/px换算，参数size为设计图宽度（单位为像素）
(function setRootSize(size) {
	var _doc = document.documentElement
	function setSize() {
		_doc.style.fontSize = _doc.clientWidth * 100 / size + 'px';
	};
	setSize();
	window.addEventListener('resize', function() {
		setSize();
	}, false);
})(750)

// 返回顶部
function backTop(btn) {
	var _btn = document.getElementById(btn);
	var scrollTimeout = null;
	if (!_btn) return;

	_btn.addEventListener('click', function() {
		var _currentScroll = window.scrollY;
		var _offset = _currentScroll / 15;
		function scrollToTop() {
			var _pos = window.scrollY;
			if ( _pos > 0 ) {
				window.scroll(0, _pos - _offset);
				// setTimeout(scrollToTop, 20);
				window.requestAnimationFrame(scrollToTop);
			}
		};
		scrollToTop();
	})

	window.addEventListener('scroll', function() {
		if (scrollTimeout) return;
		scrollTimeout = setTimeout(function () {
			if (window.scrollY > window.innerHeight) {
				_btn.style.display = 'block';
			} else {
				_btn.style.display = 'none';
			}
			scrollTimeout = null;
		}, 100);
	})
}