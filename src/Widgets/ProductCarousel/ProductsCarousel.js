export function ProductsCarousel(e) {
    const carousel = e.querySelector(".products-carousel");
    console.log(carousel);
    const carouselLeft = e.querySelector(".carousel-btn--left");
    const carouselRight = e.querySelector(".carousel-btn--right");

    carouselLeft.addEventListener("click", () => {
        carousel.scrollBy({left: -400, behavior: "smooth"});
    });
    carouselRight.addEventListener("click", () => {
        carousel.scrollBy({left: 400, behavior: "smooth"});
    });
}