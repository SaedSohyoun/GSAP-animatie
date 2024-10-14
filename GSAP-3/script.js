function animateMain() {
    let main_tl = gsap.timeline({
        defaults: {
            ease: "power1.inOut",
            duration: 1
        }
    });

    main_tl
        .add(animatie1(Element1), 1)
        .add(animatie2(Element2), 1.5)
        .add(animatie3(Element3), 2)
        .add(animatie4(Element4), 2.5)
        .add(animatie5(Element5), 3)
        .add(animatie6(Element6), 3.5);

    return main_tl;
}

function animatie1() {
    let tl = gsap.timeline();
    tl.from("#element1", { x: -300, opacity: 0 });
    return tl;
}

function animatie2() {
    let tl = gsap.timeline();
    tl.from("#element2", { y: -300, opacity: 0 });
    return tl;
}

function animatie3() {
    let tl = gsap.timeline();
    tl.from("#element3", { scale: 0, opacity: 0 });
    return tl;
}

function animatie4() {
    let tl = gsap.timeline();
    tl.from("#element4", { rotation: 360, opacity: 0 });
    return tl;
}

function animatie5() {
    let tl = gsap.timeline();
    tl.from("#element5", { x: 300, opacity: 0 });
    return tl;
}

function animatie6() {
    let tl = gsap.timeline();
    tl.from("#element6", { y: 300, opacity: 0 });
    return tl;
}

let mainAnimation = animateMain();

document.getElementById("play").addEventListener("click", function () {
    mainAnimation.play();
});

document.getElementById("pause").addEventListener("click", function () {
    mainAnimation.pause();
});

document.getElementById("reverse").addEventListener("click", function () {
    mainAnimation.reverse();
});

document.getElementById("restart").addEventListener("click", function () {
    mainAnimation.restart();
});