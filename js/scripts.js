gsap.registerPlugin(ScrollTrigger);

gsap.to("#aboutme", {
  scrollTrigger: {
    trigger: "#aboutme", // start the animation when ".box" enters the viewport (once)
    start: "top center",
  },
  x: -400,
});

gsap.to("#tecnologies", {
  scrollTrigger: {
    trigger: "#tecnologies",
    start: "top center",
  },
  rotation: 360,
  duration: 3,
});

gsap.to("#contact", {
  scrollTrigger: {
    trigger: "#contact", // start the animation when ".box" enters the viewport (once)
    start: "center",
  },
  x: 400,
});
