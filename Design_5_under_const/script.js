// loco

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });


function lenis(){
     const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)   


}

lenis()

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  // debbug:true,
});


Shery.makeMagnet(".mag" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  debbug:true,
});




// texteffect3

document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mousemove",function(dets){
    // console.log(dets);
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      easeIn: "power3",
      display:"block",

    })
    // gsap.to()
  })
  elem.addEventListener("mouseleave",function(dets){
    // console.log(dets);
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      easeIn: "power3",
      
    })
  })
})





gsap.registerPlugin(ScrollTrigger);

const marqueeAnimation = () => {
  const sections = document.querySelectorAll(".marquee");
  sections.forEach((section) => {
    const marqueeText = section.querySelector(".marquee-text");
    const w = marqueeText; // Assign marqueeText element to w


    const [x, xEnd] = ['0%', (w.scrollWidth - section.offsetWidth) * -1];

    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {

        trigger: section,
        scrub: 2
      }
    });
  });
};


marqueeAnimation() ;

const marqueeAnimation1 = () => {
  const sections = document.querySelectorAll(".marquee1");
  sections.forEach((section) => {
    const marqueeText = section.querySelector(".marquee-text1");
    const w = marqueeText; // Assign marqueeText element to w


    const [x, xEnd] = ['30%', (w.scrollWidth - section.offsetWidth) * -1];

    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {

        trigger: section,
        scrub: 5
      }
    });
  });
};


marqueeAnimation1() ;


// Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
//   color: ["red"] /*OR*/,
//   //videos: ["video1.mp4", "video2.mp4"],
// });
// hover_target.addEventListener("mousemove",function(dets){
//   gsap.to(Shery.mouseFollower,{
//     scale:4,

//   })
// })

// var circle = document.querySelector(".circle");

// window.addEventListener("mousemove",function(dets){
//   // console.log(dets);
//   // circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
//   gsap.to(circle,{
//     x:dets.clientX,
//     y:dets.clientY,
//   })
// })
Shery.hoverWithMediaCircle(".texttt" /* Element to target.*/, {
  images: ["11.jpg", "22.jpg", "33.jpg" ,"44.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});


Shery.imageMasker(".image1 img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "work",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  debug:true,
});

Shery.textAnimate(".text" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});







