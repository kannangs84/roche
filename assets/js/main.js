;
(function ($) {
    "use strict";
    jQuery(document).ready(function () {

        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Search Bar== //
        if ($('.search-icon').length) {
            $('.search-icon').on('click', function () {
                $('.search-form').toggleClass('show');
            });
        }

        // == Hero Slider== //
        if ($('.hero-slider').length) {
            var swiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.slide-content h1, .slide-content p, .slide-content a').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Testimonial Slider== //
        if ($('.test-slider').length) {
            var swiper = new Swiper('.test-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 1200,
                loop: true,
                pagination: {
                    el: '.test-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.testimonials .test-img, .testimonials h5, .testimonials span, .testimonials p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".test-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

         // Porfolio isotope and filter
        $(window).on('load', function () {
            var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
            });
            $('#portfolio-flters li').on( 'click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
        
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
            });
        });

        // == Clients Slider== //
        if ($('.clients-slider').length) {
            var swiper = new Swiper('.clients-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                slidesPerView: 5,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 1
                    }
                }
            });

            $(".clients-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Light Gallery== //
        // if ($('#lightgallery').length) {
        //     $("#lightgallery").lightGallery();
        // }

        // jQuery counterUp
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });

        //---------------------------------------------
        //Nivo slider
        //---------------------------------------------
        $('#ensign-nivoslider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 12,
            boxRows: 8,
            animSpeed: 500,
            pauseTime: 5000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false,
        });
    });

    jQuery(window).on('load', function () {
        // == Animate loader off screen == //
        $(".css-loader").fadeOut("slow");
        AOS.init({
            disable: 'mobile'
        });

    });
})(jQuery)