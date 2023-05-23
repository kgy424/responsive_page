// menu bar
$(".tit .btn").click(function (eve) {
    eve.preventDefault();
    // $(".nav").fadeIn();
    // $(".nav").slideDown();
    $(".nav").slideToggle();
    $(".tit .btn").toggleClass("open");
    if ($(".tit .btn").hasClass("open")) {
        // A.attrB==>>A요소 안에 있는 속성B를 가져와라
        // A.attr(B,C)==>>A요소 안에 있는 속성B를 C오 바꿔라
        $(".tit .btn").find("i").attr("class", "fas fa-caret-up")
    } else {
        $(".tit .btn").find("i").attr("class", "fas fa-caret-down")
    }
})


//img-slide _ slick
$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
});

//   light gallary
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail]

});