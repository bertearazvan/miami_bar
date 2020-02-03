$(window).on("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".mouse-scroll-container").fadeOut("slow");
    } else {
        $(".mouse-scroll-container").fadeIn("slow");
    }
});