gsap.registerPlugin(ScrollTrigger);

gsap.from("#aboutme",{opacity:0,duration:10, 
  scrollTrigger: {
    trigger: "#aboutme", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    scrub: true,
    markers: true
  }});

gsap.to("#tecnologies", {
  scrollTrigger: {
    trigger: "#tecnologies",
    start: "top center",
    markers:true,
  },
  rotation: 360,
  duration: 3,
});


