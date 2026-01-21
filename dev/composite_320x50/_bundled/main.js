(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _proline = require("./proline");

var banner = document.getElementById("banner");
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

  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });

  TweenLite.to(".hero_on", { duration: 2, opacity: 1, yoyo: true, repeat: 0, repeatDelay: 0, ease: "back.out" });
  TweenLite.to(".phone", { duration: 0.8, opacity: 0.6, yoyo: true, repeat: 11, repeatDelay: 0, ease: "back.out" });
  tl.set(".frame0", { opacity: 1 });
  tl.from([".ypy_1_", ".ypy_2_", ".ypy_3_"], { duration: 0.3, opacity: 0, y: "-=200", stagger: 0.13 });
  tl.to(".frame0", { duration: 0.3, opacity: 0 }, "+=1");
  tl.set(".frame1", { opacity: 1 });

  tl.add(ypy);
  tl.add("t1", "+=.2");
  tl.from([".t1"], { duration: 0.3, opacity: 0 }, "t1");
  tl.from([".device"], { duration: 0.5, opacity: 0 }, "t1");
  tl.to(".t1", { duration: 0.3, opacity: 0 }, "+=" + read.t1);

  tl.add("t2");
  if (device) {
    tl.add(device);
  }

  tl.from(".t2", { duration: 0.3, opacity: 0 }, "t2");
  tl.to(".t2", { duration: 0.3, opacity: 0 }, "+=" + read.t2);
  tl.to([".frame1"], { duration: 0.3, opacity: 0 });
  tl.set(".frame2", { opacity: 1 }, "+=.4");
  // tl.from(".end_device", {duration:.3, opacity:0})
  tl.from(".end_url", { duration: 0.3, opacity: 0 }, "+=.3");
  tl.from(".end_ypy", { duration: 0.3, opacity: 0 }, "+=.1");
  tl.from(".end_cta", { duration: 0.3, opacity: 0, y: "+=50", opacity: 0 }, "+=.1");

  tl.to("._logo", { duration: 0.3, y: "+=90" });
  tl.add((0, _proline.olg)());
  return tl;
}

// olg()

exports.init = init;
exports.olg = _proline.olg;
exports.bannerSize = bannerSize;
exports.read = read;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });

    var tl = new TimelineMax({ onStart: function onStart() {
            TweenLite.set(".olg-static", { opacity: 0 });
        } });

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var ypy = new TimelineMax();
ypy.from([".ypy_1", ".ypy_2", ".ypy_3"], { duration: .3, y: "-=200", stagger: .13 });

function init(_ref) {
	var ypy = _ref.ypy;
	var device = _ref.device;

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	TweenLite.to(".hero_on", { duration: 2, opacity: 1, yoyo: true, repeat: 0, repeatDelay: 0, ease: "back.out" });

	TweenLite.to(".phone", { duration: .8, opacity: .6, yoyo: true, repeat: 11, repeatDelay: 0, ease: "back.out" });

	tl.set(".frame1", { opacity: 1 });
	tl.set(".end_device", { opacity: 0 });

	tl.add(ypy);

	tl.to(".ypy", { duration: .3, opacity: 0 }, "+=1");

	tl.add("t1", "+=.2");
	tl.from([".t1"], { duration: .3, y: "+=30", opacity: 0 }, "t1");

	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + _commonJsCommonJs.read.t1);

	tl.add("t2");

	tl.from(".t2", { duration: .3, opacity: 0 }, "t2");
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + _commonJsCommonJs.read.t2);

	// tl.to([  ".frame1"], {duration:.3, opacity:0} )

	tl.set(".frame2", { opacity: 1 }, "+=.3");

	tl.from([".device"], { duration: .5, opacity: 0 });
	tl.from(".end_url", { duration: .3, opacity: 0 }, "+=.3");
	tl.from(".end_ypy", { duration: .3, opacity: 0 }, "+=.3");
	tl.from(".end_cta", { duration: .3, opacity: 0, y: "+=50", opacity: 0 }, "+=.3");

	tl.add((0, _commonJsCommonJs.olg)());
	return tl;
}

init({ ypy: ypy });

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
