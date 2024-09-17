gsap.from("header", { duration: 1, opacity: 0, y: -50 });

gsap.from("section p", { duration: 1.5, opacity: 0, x: -100, delay: 0.5 });

gsap.from(".image-grid img", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.3,
    delay: 1
});

gsap.from("footer", { duration: 1, opacity: 0, y: 50, delay: 1.5 });
