var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        // markers: true,
    }
})

tl
.to("#circle #btm img", {
    rotate: "-180deg",
    scale: 0.51,
    stagger: .06,
    ease: Power1
}, "same")
.to("#circle #top img", {
    scale: 0.52,
    ease: Power1,
    duration:0.5
    
}, "same")

.to("#circle #btm img", {
   
    opacity:0,
    delay:-0.2,
    scale: 0,

},"a")

.to("#circle #top img", {
    // ease: Power1,
    scale: 0,
    opacity:0,
    delay:-0.2
    
}, "a")

.to("#gallery", {
    bottom: "-100%",
    ease: Power1
}, "same")

.to("#cimage img", {
    scale: 0,
    ease: Power1
}, "same")
.to("#centerimg h5", {
    opacity: 0,
    ease: Power1
}, "same")
.to("#circp", {
    top: "50%",
    scale: 2,
    ease: Power1
}, "same")
.to("#circp", {
    top: "50%",
    opacity:0,
    ease: Power1,

}, )
.to("#pink", {
        bottom: "0%",
        rotate: 0,
        ease: Power1,
        delay:-0.1,
        duration:3
    }, "same")
.to("#smcircle",{
    scale: 0,
    delay: 0.4,
    duration:2
},"same")

.to("#rect",{
    top:"   0%",
    duration:3
})
.to("#rect",{
    top:"-65%",
    duration:3
})

// ### second ####

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#second",
        start: "top top",
        scrub: 1,
        pin: true,
        // markers: true,
        
    }
})

tl2.
to(".circle",{
    top:"-10%",
    stagger:0.2,
    duration: 1,
    ease: Power1
})
.to(".circle", {
    left: "50%",
    duration: 1,
    ease: Power1
})
.to(".cone",{
    scale:0.9
},'b')
.to(".ctwo",{
    scale:0.9
},'b')
.to(".circle", {
    scale: 10,
    duration: 5,
    ease: Power1
})

                   .to("#no",{
                       top:"-40px",
                       duration:3
                   })

.to(".cone", {
    background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    duration: 5,
    ease: Power1
}, "a")
.to("#sectop h1", {
    left: "-160%",
    duration: 10,
    ease: Power1,
    bottom:"-14%"
}, "a")
                  .to("#no",{
                      top:"-85px",
                      duration:3
                  })
                

.to("#p2", {
    opacity: 0,
    duration: 3,
    ease: Power1
}, "a")
.to("#p1", {
    opacity: 1,
    delay: 2,
    duration: 3,
    ease: Power1
}, "a")

.to(".col",{
    top:"0%",
    stagger:0.3,
    duration:3,
},)

.to("#tiletop",{
    bottom:0,
    duration:3,  
    
},)
.to("#tiletop",{
    delay:1,
    left:"-10%",
    duration:1
})
.to("#tilebtm",{
    left:"-7%",
    duration:1,
    bottom:0
})


// ######### third ###########

// ############## foourth #########

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fourth",
        start: "top 80%",
        scrub: 1,
        // pin: true,
        // markers: true,
        
    }
})
tl4
.to("#centercircle",{
    rotate:"180deg",
      ease:"none"  
},)
page = document.querySelector('#fourth');
vari = document.querySelector('#cir111');
varii = document.querySelector('#cir112');

varii.addEventListener('mouseover', function() {
    //   vari.style.backgroundColor="#D5A7B4"
    page.style.backgroundColor="#DEF3ff"
    varii.style.backgroundColor="#DEF3ff"
    vari.style.backgroundColor="#DEF3ff"

});
varii.addEventListener('mouseleave', function() {
    //   vari.style.backgroundColor="#D5A7B4"
    page.style.backgroundColor="white"
    varii.style.backgroundColor="white"
    vari.style.backgroundColor="white"

});

vari.addEventListener('mouseover', function() {
    //   vari.style.backgroundColor="#D5A7B4"
      vari.style.backgroundColor="#794856"
      page.style.backgroundColor="#794856"
    varii.style.backgroundColor="#794856"

});
vari.addEventListener('mouseleave', function() {
    //   vari.style.backgroundColor="red"
    vari.style.backgroundColor="white"
      page.style.backgroundColor="white"
    varii.style.backgroundColor="white"


});

// ######### fifth ##########

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fifth",
        start: "top 100%",
        // end: 'top -80%',
        scrub: 1,
        // pin: true,
        // markers: true,  
    }
})

tl5.to("#textanim p",{
    left:"-100%",
    duration: 13, 
    ease: "none",
},'ray')

.to("#rayanim",{
    right:"-100%",
    duration:13,
    delay:3
},'ray')

// ##########  sixth ##############

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#sixth",
        start: "top 95%",
        // end: 'top 10%',
        scrub: 1,
        // pin: true,
        // markers: true,  
    }
})
tl6
.to(".head1",{
    left:"50%",
    duration:"0.6",
    xPercent:-50, 

},'head')
.to(".head2",{
    left:"50%",
    duration:"0.6",
    xPercent:-50, 

},'head')
.to(".head3",{
    left:"50%",
    duration:"0.6",
    xPercent:-50, 
},'head')

// ########### seventh #############

var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#seventh",
        start: "top 80%",
        // end: 'top -80%',
        scrub: 1,
        // pin: true,
        // markers: true,  
    }
})
tl7
.to("#seventhimg1 img",{
    top:"8%",
    duration:2,
    ease:"none"
},'img')
.to("#seventhimg2 img",{
    top:"10%",
    duration:2,
    ease:"none"
},'img')
.to("#seventhimg3 img",{
    top:"68%",
    duration:5,
    ease:"none"
},'img')

.to("#Pink-Flare",{
    left:"-50%",
    duration: 5,
    // delay:5,
     ease: "none" 
},'img')

var tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: "#eighth",
        start: "top 80%",
        // end: 'top -80%',
        scrub: 1,    
        // pin: true,
        // markers: true,  
    }
})
tl8
.to("#cover",{
    top:"-100%",
    scale:10,
    // duration:5
})