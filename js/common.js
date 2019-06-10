function navScrollTop(_navid, _top) {
	var _nav = $("#" + _navid);
	$(window).scroll(function () {
		var _now = $(window).scrollTop();
		if (_now >= _top) {
			_nav.css({ "position": "fixed", "top": "0" });
		} else {
			_nav.css({ "position": "absolute", "top": _top + "px" });
		}
	});
}

//导航下拉
function pcNavDown(boxid, _name, _hover, _down) {
	var _box = $(boxid);
	var _arr = _box.find(_name);
	var _index = _box.find("." + _hover).index();
	_arr.hover(function () {
		$(this).addClass(_hover).siblings().removeClass(_hover);
		if ($(this).find(_down).is(":animated")) {
			$(this).find(_down).stop(true, true);
		}
		$(this).find(_down).slideDown(300);
	}, function () {
		if ($(this).find(_down).is(":animated")) {
			$(this).find(_down).stop(true, true);
		}
		$(this).find(_down).slideUp(300);
	});
	_box.mouseleave(function () {
		_arr.eq(_index).addClass(_hover).siblings().removeClass(_hover);
	});
}

//通用悬停选项卡
function menuCheckShow(menuid, mname, sumid, sname, _hover, _starnum) {
	var _menu = $("#" + menuid).find(mname);
	var _arr = $("#" + sumid).find(sname);
	var _index = _starnum;
	_menu.eq(_index).addClass(_hover).siblings().removeClass(_hover);
	_arr.eq(_index).css("display", "block").siblings().css("display", "none");
	_menu.hover(function () {
		_index = $(this).index();
		_menu.eq(_index).addClass(_hover).siblings().removeClass(_hover);
		_arr.eq(_index).fadeIn(300).siblings().fadeOut(300);
	});
}

$(function () {

})
