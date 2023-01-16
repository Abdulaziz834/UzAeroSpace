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

var navBar = document.querySelector(".navbar"),
    nav = document.querySelector("nav");

const observer = new IntersectionObserver(entries => {
    nav.classList.toggle("stick", !entries[0].isIntersecting)
})

observer.observe(navBar)