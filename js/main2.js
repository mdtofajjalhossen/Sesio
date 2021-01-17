
  (function ($) {
    "use strict";
/*-------------------------------------------------------------------------------
    Dropdown Menu
-------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------
   appscreenshot slider
-------------------------------------------------------------------------------*/
    function Appscreenshot() {
        $('.testimonial_slider').slick({
            slidesToShow: 3,
                slidesToScroll: 1,
                speed: 2000,
                arrows: false,
                dots: true,
                // autoplay: true,
                infinite: true,
                centerMode: true,
                centerPadding: '0px',
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            
          });
    }
    Appscreenshot();

})(jQuery);
