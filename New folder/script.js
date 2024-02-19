




function hori(){
  
let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=4030",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 100) +
      "px",
    ease: "none",
    // duration: 1,
  })
 
}

hori();































function cloud(){
  const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'SWIFT', 'MONGOOSE', 'REACT',
    'PYTHON', 'SASS',
    'REACT JS', 'NODEJS', 'MONGODB',
    'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 270,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});


// Giving color to each text in sphere
// var color = 'red';
document.querySelector('.Sphere').style.color = "#212121 ";
}
cloud();





// function marquee(){
//   let currentScroll = 0;
// let isScrollingDown = true;

// let tween = gsap.to(".marquee__part", {xPercent: -140, repeat: -1, duration: 2, ease: "linear"}).totalProgress(.5);

// gsap.set(".marquee__inner", {xPercent: -60});

// window.addEventListener("scroll", function(){
  
//   if ( window.pageYOffset > currentScroll ) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }
   
//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1
//   });
  
//   currentScroll = window.pageYOffset
// });
// }

// marquee();






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
lenis();
// -------------------------------------------------------

// gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);








// let tl = gsap.timeLine({
//      default:{
//           ease:"none"
//      },
//      scrollTrigger:{
//           trigger:"#main",
//           pin:true,
//           scrub: true,
//           end: ()=> "+=" + "#main.offsetWidth",
//      }
// })


// tl.to(main ,{
//      xPercentage :-66
// })

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener('DOMContentLoaded', () => {

//     const sections = gsap.utils.toArray('section');

//     let scrollTween = gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//             trigger: '.wrapper',
//             pin: true,
//             scrub: 0.5,
//             snap: 1 / (sections.length - 1),
//             start: 'top top',
//             end: 3000,
//         }
//     })

// });