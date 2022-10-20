var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".work__allow-right",
        prevEl: ".work__allow-left",},
    loop:true,
    autoplay:{
        delay: 2000
    }
});