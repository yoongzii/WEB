
// gsap
gsap.registerPlugin(ScrollTrigger);

//---- home  ----//
const main = gsap.timeline()
main.to('.wrap_inner .txt_left', {
      xPercent: 400,
      textShadow : `4px 4px rgba(228,182,26,0.6)`,
      }, 'text')
      .to('.wrap_inner .txt_right', {
      xPercent: -300,
      textShadow : `4px 4px rgba(228,182,26,0.6)`,

         }, 'text')
      .to('.visual_pin .scroll', {
         display : 'none'
      },'text')
      .to('#wave_path_text',  {
         attr: {startOffset: "30%"},
      },'text')

   ScrollTrigger.create({
      animation: main,
      trigger: '#visual',
      start: `top top `,
      // end: `+=${greetHeight / 6} top`,
      end:'+=4000px',
      pin: true,
      scrub: true,
      markers: false,
   })



//-- Skill---//
let scrollBox = document.querySelector('.scroll_box')
let skillHeight = scrollBox.offsetHeight;

gsap.to('.skill_left', {
scrollTrigger: {
   trigger: '.skill_left',
   start: 'top top',
   end: `+=${skillHeight - 1000} top` ,
   pin: true,
   scrub: true,
   markers: false,
   }
})


//-- Circle Text --//
const circleBox = document.querySelector('#projectStart .circle_box')
let circlelHeight = circleBox.offsetHeight;

gsap.to('#projectStart .circle_box', {
   height: '100vh',
   scrollTrigger: {
      trigger: '#projectStart',
      start: `top top`,
      end:`+=${circlelHeight} top`,
      scrub: 1,
      pin: true,
      markers: false,

      }
 })

//----- 프로젝트 ---//
// let designPro = document.querySelector('.design_scroll')
// let designHeight = designPro.offsetHeight;

// gsap.to('.designPro_pin', {
// color:'#E9EAEC',
//    scrollTrigger: {
//       trigger: '.designPro_pin',
//       start: 'top top',
//       end: `+=${designHeight - 600} top`,
//       pin: true,
//       scrub: true,
//       markers: false,
//    }
// })





