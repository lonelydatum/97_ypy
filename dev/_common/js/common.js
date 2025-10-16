import {olg} from "./olg_confetti.js"
import {origin} from "./helpers/helpers.js"
import {initYPY, ypyScroll} from './ypy_fx.js'
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const READ_COMPOSITE = { t1: 1.6, t2: 3 }
const READ_LIVEDEALERS = { t1: 1.6, t2: 3 }
const READ_GAMESHOW = { t1: 1.6, t2: 3.3 }


const READ_ALL = { composite: READ_COMPOSITE, gameshow: READ_GAMESHOW, livedealers:READ_LIVEDEALERS }

const read = READ_ALL[universalBanner.name]
const {w, h} = bannerSize
 

function init({ypy, device}, logoAnimateStart=false){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	
	TweenLite.to(".hero_on", {duration:2, opacity:1, yoyo:true, repeat:0, repeatDelay:0, ease:"back.out"})
	TweenLite.to(".phone", {duration:.8, opacity:.6, yoyo:true, repeat:11, repeatDelay:0, ease:"back.out"})
	tl.set(".frame0", {opacity:1})	 
	tl.from([".ypy_1_", ".ypy_2_", ".ypy_3_"], {duration:.3, opacity:0,  y:"-=200", stagger:.13})
	tl.to(".frame0", {duration:.3, opacity:0}, "+=1")
	tl.set(".frame1", {opacity:1})	 
 
	tl.add(ypy)
	tl.add("t1", "+=.2")
	tl.from([".t1"], {duration:.3, opacity:0}, "t1")
	tl.from([".device"], {duration:.5, opacity:0}, "t1")
	tl.to(".t1", {duration:.3, opacity:0}, `+=${read.t1}`)
 
	tl.add("t2")
	if(device){
		tl.add(device)	
	}
		
	tl.from(".t2", {duration:.3, opacity:0}, "t2")
	tl.to(".t2", {duration:.3, opacity:0}, `+=${read.t2}`)
	tl.to([  ".frame1"], {duration:.3, opacity:0} )
	tl.set(".frame2", {opacity:1}, "+=.4")
	tl.from(".end_device", {duration:.3, opacity:0})
	tl.from(".end_url", {duration:.3, opacity:0}, "+=.3")
	tl.from(".end_ypy", {duration:.3, opacity:0}, "+=.3")
	tl.from(".end_cta", {duration:.3, opacity:0, y:"+=50", opacity:0}, "+=.3")

	tl.add(olg())
	return tl
}


 

export { init, olg, bannerSize, read }