document.addEventListener("DOMContentLoaded", () => {

    const arrowLeft = document.querySelector("#arrowLeft");
    const arrowRight = document.querySelector("#arrowRight");
    const dots = document.querySelectorAll(".dot");
    const slides = document.querySelectorAll(".slide");
    let counter = 1;

    const accItems = document.querySelectorAll(".item__text-wrap");
    const headlines = document.querySelectorAll(".accordion__headline");
    const ul = document.getElementById("listWrap");
    console.log(ul);
   
    const textWrap = document.querySelectorAll(".head__text-wrap");
    const textContent = document.querySelectorAll(".section4__content-text");
    const x = document.querySelectorAll(".section4__head-text");
    // console.log(headText[0].children);

    const team = document.querySelector("#team");
    const hover = document.querySelector("#hover");

    // team.onmouseover = team.onmouseout = handler;
    // function handler() {
    //     console.log(1);
    //     hover.style.display = (hover.style.display == 'block') ? 'none' : 'block';
    // }


    // team.addEventListener("mouseenter", (event) => {
    //     hover.style.display = (hover.style.display == 'none') ? 'block' : 'none';
    // });
    


    arrowLeft.addEventListener("click", function () {
        if ( counter == 0 ) {
            counter = slides.length;
            deductSlide();
        }
        deductSlide();
        counter--;
        console.log(counter);
    });

    arrowRight.addEventListener("click", function () {
        if ( counter == slides.length-1 ) {
            counter = -1;
            plusSlide();
        }
        plusSlide();
        counter++;
        console.log(counter);
    });

    // window.setInterval(timeSlider, 7000);

    // function timeSlider() {
    //     if ( counter == slides.length-1 ) {
    //         counter = -1;
    //         plusSlide();
    //     }
    //     plusSlide();
    //     counter++;
    //     console.log(counter);
    // };
    

    function plusSlide() {
        let current = document.querySelector(".header__slide-active");
        let curDot = document.querySelector(".slider__dot-active");

        current.classList.remove("header__slide-active");
        current.classList.add("header__slide");
        slides[counter+1].classList.add("header__slide-active");
        slides[counter+1].classList.remove("header__slide");

        curDot.classList.remove("slider__dot-active");
        dots[counter+1].classList.add("slider__dot-active");
    }

    function deductSlide() {
        let current = document.querySelector(".header__slide-active");
        let curDot = document.querySelector(".slider__dot-active");

        curDot.classList.remove("slider__dot-active");
        dots[counter-1].classList.add("slider__dot-active");

        current.classList.remove("header__slide-active");
        current.classList.add("header__slide");
        slides[counter-1].classList.add("header__slide-active");
        slides[counter-1].classList.remove("header__slide");
    }

    ul.addEventListener("click", (e) => {
        let target = e.target;
        if (!target.classList.contains("accordion__headline-active")) {
            for (let i = 0; i < accItems.length; i++) {
                headlines[i].classList.remove("accordion__headline-active");
            }
            target.classList.add("accordion__headline-active");
        } else {
            target.classList.remove("accordion__headline-active");
        }
    });

    for ( let i = 0; i < textWrap.length; i++ ) {
        textWrap[i].addEventListener("mouseenter", (e) => {
            let el = e.target;
            let child = el.childNodes[1];
            let id = el.getAttribute("id");
            // console.log(id);

            if ( !child.classList.contains("team__head-active") ) {
                for ( let j =0; j < textWrap.length; j++ ) {
                    x[j].classList.remove("team__head-active");
                    textContent[j].classList.remove("team-active");
                }
                child.classList.add("team__head-active");
                textContent[id].classList.add("team-active");
            }
        });
    }

    document.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;
        console.log(scroll);
    });
    







});
