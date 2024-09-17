gsap.to("#circle1", {
    x: 300,
    scale: 1.5,
    backgroundColor: "#ffcc00",
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    repeat: -1,
    yoyo: true
  });
  
gsap.from("#circle2", {
    x: -200,
    duration: 2,
    ease: "bounce.out",
    repeat: -1,
    yoyo: true
  });
  
gsap.fromTo("#circle3", 
    { x: 0, y: 0, opacity: 0.5 },
    { x: 200, y: 200, opacity: 1, duration: 2, ease: "expo.inOut", repeat: -1, yoyo: true }
  );
  
document.querySelectorAll('.circle').forEach(box => {
    box.addEventListener('mouseover', () => {
      gsap.to(box, { scale: 1.5, duration: 0.5 });
    });
    box.addEventListener('mouseout', () => {
      gsap.to(box, { scale: 1, duration: 0.5 });
    });
  });
  