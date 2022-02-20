(function ($) {
    $(document).ready(function () {
        //aos animation
        AOS.init();

        //mobile menu click
        $(".navbar-toggler").click(function () {
            $(this).toggleClass("current");
            $("body").toggleClass("openMenu");
        });

        //    ("use strict"); // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $("a.page-scroll").bind("click", function (event) {
            var $anchor = $(this);
            $("html, body")
                .stop()
                .animate({
                        scrollTop: $($anchor.attr("href")).offset().top - 50
                    },
                    1250,
                    "easeInOutExpo"
                );
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $("body").scrollspy({
            target: ".navbar-fixed-top",
            offset: 116
        });
        //fixed-header on scroll
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 116) {
                $(".navbar-fixed-top").addClass("fixed");
            } else {
                $(".navbar-fixed-top").removeClass("fixed");
            }
        });

        //matchHeight js
        $(".matchHeight").matchHeight();
        $(".guide-section .guide-list ul li").matchHeight();
        $(".advantages-section .info-block ul li").matchHeight();

        //banner
        $(".banner").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 2000
        });

        //slick animation
        $('#slick-animate').slickAnimation();
    });
})(jQuery);
