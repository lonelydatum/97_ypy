(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _olg_confettiJs = require("./olg_confetti.js");

var _helpersHelpersJs = require("./helpers/helpers.js");

var _ypy_fxJs = require('./ypy_fx.js');

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var READ_COMPOSITE = { t1: 2.5, t2: 3 };
var READ_LIVEDEALERS = { t1: 1.6, t2: 3 };
var READ_GAMESHOW = { t1: 1.6, t2: 3.3 };

var READ_ALL = { composite: READ_COMPOSITE, gameshow: READ_GAMESHOW, livedealers: READ_LIVEDEALERS };

var read = READ_ALL[universalBanner.name];
var w = bannerSize.w;
var h = bannerSize.h;

function init(_ref) {
	var ypy = _ref.ypy;
	var device = _ref.device;
	var logoAnimateStart = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	TweenLite.to(".hero_on", { duration: 2, opacity: 1, yoyo: true, repeat: 0, repeatDelay: 0, ease: "back.out" });
	TweenLite.to(".phone", { duration: .8, opacity: .6, yoyo: true, repeat: 11, repeatDelay: 0, ease: "back.out" });
	tl.set(".frame0", { opacity: 1 });
	tl.from([".ypy_1_", ".ypy_2_", ".ypy_3_"], { duration: .3, opacity: 0, y: "-=200", stagger: .13 });
	tl.to(".frame0", { duration: .3, opacity: 0 }, "+=1");
	tl.set(".frame1", { opacity: 1 });

	tl.add(ypy);
	tl.add("t1", "+=.2");
	tl.from([".t1"], { duration: .3, opacity: 0 }, "t1");
	tl.from([".device"], { duration: .5, opacity: 0 }, "t1");
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + read.t1);

	tl.add("t2");
	if (device) {
		tl.add(device);
	}

	tl.from(".t2", { duration: .3, opacity: 0 }, "t2");
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + read.t2);
	tl.to([".frame1"], { duration: .3, opacity: 0 });
	tl.set(".frame2", { opacity: 1 }, "+=.4");
	// tl.from(".end_device", {duration:.3, opacity:0})
	tl.from(".end_url", { duration: .3, opacity: 0 }, "+=.3");
	tl.from(".end_ypy", { duration: .3, opacity: 0 }, "+=.1");
	tl.from(".end_cta", { duration: .3, opacity: 0, y: "+=50", opacity: 0 }, "+=.1");

	tl.add((0, _olg_confettiJs.olg)());
	return tl;
}

exports.init = init;
exports.olg = _olg_confettiJs.olg;
exports.bannerSize = bannerSize;
exports.read = read;

},{"./helpers/helpers.js":2,"./olg_confetti.js":3,"./ypy_fx.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    var time = 1;
    var tl_olg = new TimelineMax();
    // tl_olg.set("#svg_move", {opacity:1} )
    tl_olg.to("#svg_idle", { duration: .3, ease: "custom", y: "+=100", opacity: 0 });
    tl_olg.from("#svg_move #olg_bg", { transformOrigin: "0% 100%", duration: .6, ease: "custom", scale: 0 }, .3);
    tl_olg.from("#svg_move .svg_logo", { duration: .4, opacity: 0, y: "+=50" }, .5);
    tl_olg.from("#svg_move .con", { stagger: .06, duration: .8, rotation: "+=300", ease: "custom", x: "-=200", y: "+=200", opacity: 0 }, .2);
    return tl_olg;
}

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
    ease: "power2.out"
});

var w = bannerSize.w;
var h = bannerSize.h;
exports.olg = olg;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function initYPY() {
	var tl = new TimelineMax();
	// tl.set(".ypy-all", {opacity:0})
	for (var i = 1; i < 11; i++) {
		tl.set(".ypy-all .ypy_all_" + i + " img", { y: -220 });
	}
}
function ypyScroll() {
	var tl = new TimelineMax();

	// tl.set(".ypy-all", {opacity:0})
	tl.add("spin");
	tl.set(".hide-until", { visibility: "visible" }, "spin");
	for (var i = 1; i < 11; i++) {
		var y = i * 20;
		var duration = i / 11 * 1.6;

		tl.to(".ypy-all .ypy_all_" + i + " img", { ease: "back.inOut", y: (i - 1) * -20 - 2, duration: duration }, "spin");
	}
	return tl;
}

initYPY();

exports.initYPY = initYPY;
exports.ypyScroll = ypyScroll;

},{}],5:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var ypy = new TimelineMax();
ypy.from([".ypy_1", ".ypy_2", ".ypy_3"], { duration: .3, y: "-=200", stagger: .13 });

function init(_ref) {
	var ypy = _ref.ypy;
	var device = _ref.device;
	var logoAnimateStart = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	TweenLite.to(".hero_on", { duration: 2, opacity: 1, yoyo: true, repeat: 0, repeatDelay: 0, ease: "back.out" });
	TweenLite.to(".phone", { duration: .8, opacity: .6, yoyo: true, repeat: 11, repeatDelay: 0, ease: "back.out" });

	tl.set(".frame1", { opacity: 1 });
	// return
	tl.add(ypy);
	tl.add("t1", "+=.2");
	tl.from([".t1"], { duration: .3, opacity: 0 }, "t1");
	tl.from([".device"], { duration: .5, opacity: 0 }, "t1");
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + _commonJsCommonJs.read.t1);

	tl.add("t2");
	if (device) {
		tl.add(device);
	}

	tl.from(".t2", { duration: .3, opacity: 0 }, "t2");
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + _commonJsCommonJs.read.t2);
	tl.to([".frame1"], { duration: .3, opacity: 0 });
	tl.set(".frame2", { opacity: 1 }, "+=.4");
	tl.from(".end_device", { duration: .3, opacity: 0 });
	tl.from(".end_url", { duration: .3, opacity: 0 }, "+=.3");
	tl.from(".end_ypy", { duration: .3, opacity: 0 }, "+=.1");
	tl.from(".end_cta", { duration: .3, opacity: 0, y: "+=50", opacity: 0 }, "+=.1");

	tl.add((0, _commonJsCommonJs.olg)());
	return tl;
}

// olg()

init({ ypy: ypy });

},{"../../_common/js/common.js":1}]},{},[5])


//# sourceMappingURL=main.js.map
