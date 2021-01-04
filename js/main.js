;
(function ($) {
    "use strict";

    function menu_fixed() {
        var menusfixed = $('.Appily_header');

        function menu_scroll_fixed(e) {
            var windowTop = $(window).scrollTop();
            var adRecl = "fixedMenu";
            if (windowTop > 0) {
                e.addClass(adRecl);
            } else {
                e.removeClass(adRecl);
            }
        }
        menu_scroll_fixed(menusfixed);

        $(window).scroll(function () {
            menu_scroll_fixed(menusfixed);
        });
    }
    menu_fixed();

    /*-------------------------------------------------------------------------------
        Dropdown Menu
    -------------------------------------------------------------------------------*/
    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.Appily_header_menu ul li.nav-item > a.dropdown-toggle').on('click', function (event) {
                event.preventDefault();
                $(this).parent().find('.dropdown-menu').first().toggle(500);
                $(this).parent().siblings().find('.dropdown-menu').hide(500);
            });
        }
    }
    active_dropdown();

    /*-------------------------------------------------------------------------------
       Wow js
    -------------------------------------------------------------------------------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init();
    }
    wowAnimation();

    /*-------------------------------------------------------------------------------
       Parallax Effect
    -------------------------------------------------------------------------------*/
    function parallaxEffect() {
        if ($('.parallax-effect').length) {
            $('.parallax-effect').parallax();
        }
    }
    parallaxEffect();

    /*-------------------------------------------------------------------------------
       appscreenshot slider
    -------------------------------------------------------------------------------*/
    function Appscreenshot() {
        $('.testimonial_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            arrows: true,
            dots: false,
            // autoplay: true,
            infinite: true,
            centerMode: true,
            centerPadding: '0px',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }
    Appscreenshot();

    /*-------------------------------------------------------------------------------
       testimonial carousel
    -------------------------------------------------------------------------------*/
    function OurClientreview() {
        if ($('.our_client_say_slider').length > 0) {
            $('.our_client_say_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                speed: 1000,
                arrows: true,
                dots: true,
                pauseOnHover: true,
                centerMode: true,
                centerPadding: '0px',
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            arrows: false,
                        }
                    }
                ]
            });
        }
    }
    OurClientreview();

    /*-------------------------------------------------------------------------------
        video popup
    -------------------------------------------------------------------------------*/
    function videoPopup() {
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
            });
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    videoPopup();

    /*-------------------------------------------------------------------------------
        logo carousel
    -------------------------------------------------------------------------------*/
    function logocarosuel() {
        if ($('.logo_carosuel_wrapper').length > 0) {
            $('.logo_carosuel_wrapper').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                speed: 1000,
                arrows: false,
                dots: false,
                pauseOnHover: true,
                centerMode: true,
                centerPadding: '0px',
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        }
    }
    logocarosuel();

    /*-------------------------------------------------------------------------------
        Counter js
    -------------------------------------------------------------------------------*/
    function counting_data() {
        var counter = $(".counter");
        if (counter.length) {
            counter.counterUp({
                delay: 1,
                time: 2000
            });
        }
    }
    counting_data();

    /*-------------------------------------------------------------------------------
        tab slider
    -------------------------------------------------------------------------------*/
    function tab_slider() {
        if ($('.Appily_tab_mockup_slider').length > 0) {
            $('.Appily_tab_mockup_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 2000,
                arrows: false,
                dots: true,
                autoplay: false,
                pauseOnHover: false,
                fade: true,
                responsive: [{
                        breakpoint: 991,
                        settings: {

                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                        }
                    }
                ]
            });
        }
    }
    tab_slider();
    /*-------------------------------------------------------------------------------
        dropdown menu smooth
    -------------------------------------------------------------------------------*/
    function drop_down() {
        $(".dropdown-menu .dropdown-item").on("click", function () {
            $(".dropdown-menu .dropdown-item").removeClass("active");
            $(this).addClass("active");
        });
    }
    drop_down();
    
    // function filTeTiSotOp() {
    //     var $grid = $('.filter_items_section');
    //     if ($grid.length) {
    //         $grid.imagesLoaded(function () {
    //             $grid.isotope({
    //                 itemSelector: '.filter_items_section',
    //                 percentPosition: true,
    //                 layoutMode: 'masonry',
    //                 filter: "*",
    //                 animationOptions: {
    //                     duration: 1000
    //                 },
    //                 stagger: 0,
    //                 transitionDuration: '0.9s',
    //                 masonry: {
    //                     columnWidth: 1
    //                 }
    //             });
    //             $(".portfolio_menu button").on('click', function () {
    //                 $(".portfolio_menu button").removeClass("active");
    //                 $(this).addClass("active");
    //                 var selector = $(this).attr("data-filter");
    //                 $grid.isotope({
    //                     filter: selector,
    //                     animationOptions: {
    //                         animationDuration: 750,
    //                         easing: 'linear',
    //                         queue: false,
    //                     }
    //                 });
    //                 return false;
    //             });
    //         });
    //     }
    // }
    // filTeTiSotOp();

    // function filTeTiSotOp() {
    //     var $grid = $('.grid');
    //     if( $grid.length ){
    //         $grid.imagesLoaded( function() {
    //             $grid.isotope({
    //                 itemSelector: '.dnxte-msnary-item',
    //                 percentPosition: true,
    //                 layoutMode: 'masonry',
    //                 animationOptions :{
    //                     duration:1000
    //                 },
    //                 stagger: 0,
    //                 transitionDuration: '0.9s',
    //                 masonry: {
    //                     // use outer width of grid-sizer for columnWidth
    //                     columnWidth: 1,
    //                     // columnWidth: '.grid-sizer',
    //                     gutter: 30,
    //                     // horizontalOrder: false
    //                 }
    //             });
    //         });
    //     }
    // }
    // filTeTiSotOp();


    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 0,
        gutter: 0
        }
        });
        // filter items on button click
        $('.portfolio_menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        });
        });
        
        //for menu active class
        $('.portfolio_menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
        });


    // $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
    // $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    // $('body').delay(350).css({'overflow':'visible'});

    // $(".preloader-wrap").delay(1500).fadeOut('slow');



})(jQuery);

