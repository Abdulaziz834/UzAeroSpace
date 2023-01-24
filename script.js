var pictureBlock = document.querySelector(".picture"),
    images = document.querySelectorAll(".picture > img"),
    activeImgId = 0,
    imagesCount = images.length,
    sliderControllers = document.querySelectorAll(".btn-slider-controller"),
    sliderIndicators = document.querySelectorAll(".shown-indicator"),
    sliderInterval = setInterval(() => {
        sliderIndicators[activeImgId].classList.remove("active");
        images[activeImgId].classList.remove("active");
        activeImgId++;
        if (activeImgId == imagesCount) {
            activeImgId = 0;
        };
        pictureBlock.setAttribute("aria-img-shown", `${activeImgId}`)
        sliderIndicators[activeImgId].classList.add("active");
        images[activeImgId].classList.add("active");
}, 8000);


sliderControllers.forEach(controller => {
    controller.onclick = () => {
        sliderIndicators[activeImgId].classList.remove("active");
        images[activeImgId].classList.remove("active");
        if (controller.className.includes("next")) {
            activeImgId++;
            if (activeImgId == imagesCount) {
                activeImgId = 0;
            };
        }
        else {
            activeImgId--;
            if (activeImgId == -1) {
                activeImgId = imagesCount - 1;
            };
        }
        pictureBlock.setAttribute("aria-img-shown", `${activeImgId}`)
        sliderIndicators[activeImgId].classList.add("active");
        images[activeImgId].classList.add("active");
    }
})


function counter(elem, finalNum, wholeTime) {
    if (!finalNum) {
      finalNum = parseInt(elem.innerText);
    }
    let counts = setInterval(updated, wholeTime/finalNum);
    let upto = 0;
    elem.innerHTML = 0;
    function updated(){
        if (finalNum > 1000) {
            elem.innerHTML = upto + 3;
            upto += 3;
        }
        else {
            elem.innerHTML = ++upto;
        }
        if(upto > finalNum) {
            elem.innerHTML = upto + (finalNum - upto)
            clearInterval(counts);
        }
    }
}


var navBar = document.querySelector(".navbar"),
    nav = document.querySelector("nav"),
    exp = document.querySelector("#experience");

const observer = new IntersectionObserver(entries => {
    nav.classList.toggle("stick", !entries[0].isIntersecting)
}),
    counterObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll("span.year__num").forEach(year => {
                counter(year, undefined, 3000);
            })
            counterObserver.unobserve(exp);
        }
    });

observer.observe(navBar)
counterObserver.observe(exp)

function returnSlider() {
    setTimeout(() => {
        partnersContainer.style.transition = "translate 300ms ease";
    }, 1000);
}

var partners = document.querySelectorAll(".partners > *"),
    partnersContainer = document.querySelector(".partners"),
    partnersCount = partners.length - 3;
    partnersImgShown = 0,
    partnersInterval = setInterval(() => {
        partnersImgShown++;
        console.log(partnersImgShown);
        if (partnersImgShown >= partnersCount) {
            partnersImgShown = 0;
            partnersContainer.style.transition = "none";
            returnSlider()
            document.querySelector(".horizontal-scrollbar").scrollLeft = 0;
        }
        partnersContainer.style.translate = `calc(-25.75% * ${partnersImgShown}) 0`;
    }, 5000);

var newObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {partnersImgShown = partnersCount-1;}
})

newObserver.observe(partners[partners.length-1])