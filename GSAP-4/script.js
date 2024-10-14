// scripts.js

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#calorieProgress", { width: "0%" }, {
    width: "70%",
    scrollTrigger: {
        trigger: "#calorie-tracker",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
    }
});

gsap.to("#stepCount", {
    innerText: 5000, 
    snap: { innerText: 1 },
    duration: 3,
    scrollTrigger: {
        trigger: "#step-tracker",
        start: "top 80%",
        scrub: true
    }
});

gsap.fromTo("#stepVisual", { scale: 0.5 }, {
    scale: 1.2,
    scrollTrigger: {
        trigger: "#step-tracker",
        start: "top 80%",
        scrub: true
    }
});

gsap.fromTo("#weightChart", { opacity: 0, y: 50 }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: "#weight-tracker",
        start: "top 80%",
        scrub: true
    }
});

gsap.from("#healthTip", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#health-tips",
        start: "top 80%",
        scrub: true
    }
});

document.getElementById("randomizeTipBtn").addEventListener("click", function () {
    gsap.to("#healthTip", { opacity: 0, x: 100, duration: 0.5, onComplete: updateTip });
});

function updateTip() {
    document.getElementById("healthTip").innerText = "Drink voldoende water!";
    gsap.fromTo("#healthTip", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
}
