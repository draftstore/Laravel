(function($){

    /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Nice Select
        6. Mobile Menu
        7. Wow Js
        8. Article Hover
        9. Offcanvus
        10. Progressbar
        11. Preloader
        12. Header Sticky
        13. Counter Up
        14. Case Study Hover Function
        15. Magnific Popup
        16. Canvus Menu Toggle
        17. Canvus Menu
    */


    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    //2. Scroll top button
    $(window).on("scroll", function(){
        var scrollBar = $(this).scrollTop();
        if(scrollBar > 150 ) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function(){
        $("body,html").animate({
            scrollTop: 0
        });
    });


    //3. Offcanvus toggle
    $(".offcanvus-toggle").on("click", function () {
        $(".offcanvus-box").addClass("active");
    });

    $(".offcanvus-close").on("click", function(){
        $(".offcanvus-box").removeClass("active");
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".offcanvus-box");
  
        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
          $(".offcanvus-box").removeClass("active");
        }
    });

    //4. Theme Slider Functions
    $(".feedback-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 700,
        prevArrow: '<button class="prev-arrow"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 1.1875L1.06641 19.2227C0.75 19.5391 0.75 20.0664 1.06641 20.3828L18.9961 38.418C19.418 38.7344 19.9453 38.7344 20.2617 38.418C20.5781 38.1016 20.5781 37.4688 20.2617 37.1523L3.70312 20.6992H47.1562C47.6836 20.6992 48 20.2773 48 19.75C48 19.3281 47.6836 18.9062 47.1562 18.9062H3.70312L20.2617 2.45312C20.5781 2.13672 20.5781 1.50391 20.2617 1.1875C19.9453 0.871094 19.3125 0.871094 18.9961 1.1875Z" fill="white""/></svg></button>',
        nextArrow: '<button class="next-arrow"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0039 1.1875L46.9336 19.2227C47.25 19.5391 47.25 20.0664 46.9336 20.3828L29.0039 38.418C28.582 38.7344 28.0547 38.7344 27.7383 38.418C27.4219 38.1016 27.4219 37.4688 27.7383 37.1523L44.2969 20.6992H0.84375C0.316406 20.6992 0 20.2773 0 19.75C0 19.3281 0.316406 18.9062 0.84375 18.9062H44.2969L27.7383 2.45312C27.4219 2.13672 27.4219 1.50391 27.7383 1.1875C28.0547 0.871094 28.6875 0.871094 29.0039 1.1875Z" fill="white"/></svg></button>',
    });

     //feedback slider 2
     $(".cr2-feedback-slider").slick({
        slidesToShow: 4,
        vertical: true,
        arrows: false,
        autoplay: true,
        speed: 700,
        verticalSwiping: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    vertical: false, 
                    verticalSwiping: false,
                    slidesToShow: 2,
                    centerMode: false,
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 1,
                    vertical: false, 
                    verticalSwiping: false,
                    centerMode: false,
                }
            }
        ]
     });

     //portfolio slider 
     $(".cr-pf-slider").slick({
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
     });

    $(".cr2-footer-brand-slider").slick({
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        speed: 500,
        speed: 2000,
        autoplaySpeed: 0,
        pauseOnHover: true,
        pauseOnFocus: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                    cssEase: '',

                }
            },
            {
                breakpoint: 460, 
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".cr2-brand-slider").slick({
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 5,
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 4,
                }
            }, 
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    cssEase: '',
                }
            }

        ]
    });

    $(".hm2-service-slider").slick({
        slidesToShow: 3,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".bp-feature-image-slider").slick({
        slidesToShow: 1,
        autplay: true,
        speed: 700,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right"></i></button>'
    });

    $(".related-projects-slider").slick({
        slidesToShow: 3,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".crb-brand-slider").slick({
        slidesToShow: 5,
        speed: 700,
        prevArrow: '<button class="prev-btn"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-btn"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".hm2-team-slider").slick({
        slidesToShow: 4,
        loop: true,
        arrows: false,
        autoplay: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
        
    });

    //home 3 feedback slider
    $(".hm3-feedback-slider").slick({
        slidesToShow: 3,
        autoplay: true, 
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    //hm3 brand slider
    $(".hm3-brand-slider").slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 680, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450, 
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".hm4-brand-slider").slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450, 
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".hm5-brand-slider").slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 1800, 
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650, 
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    //hm4 feedback slider
    $(".hm4-feedback-slider").slick({
        slidesToShow: 2,
        prevArrow: '<button class="prev-btn"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 1.1875L1.06641 19.2227C0.75 19.5391 0.75 20.0664 1.06641 20.3828L18.9961 38.418C19.418 38.7344 19.9453 38.7344 20.2617 38.418C20.5781 38.1016 20.5781 37.4688 20.2617 37.1523L3.70312 20.6992H47.1562C47.6836 20.6992 48 20.2773 48 19.75C48 19.3281 47.6836 18.9062 47.1562 18.9062H3.70312L20.2617 2.45312C20.5781 2.13672 20.5781 1.50391 20.2617 1.1875C19.9453 0.871094 19.3125 0.871094 18.9961 1.1875Z" /></svg></button>',
        nextArrow: '<button class="next-btn"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0039 1.1875L46.9336 19.2227C47.25 19.5391 47.25 20.0664 46.9336 20.3828L29.0039 38.418C28.582 38.7344 28.0547 38.7344 27.7383 38.418C27.4219 38.1016 27.4219 37.4688 27.7383 37.1523L44.2969 20.6992H0.84375C0.316406 20.6992 0 20.2773 0 19.75C0 19.3281 0.316406 18.9062 0.84375 18.9062H44.2969L27.7383 2.45312C27.4219 2.13672 27.4219 1.50391 27.7383 1.1875C28.0547 0.871094 28.6875 0.871094 29.0039 1.1875Z" /></svg></button>',
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //5. Nice Select
    $('.nice_select').niceSelect();

    //6. Mobile Menu
    $(".mobile-menu-toggle").on("click", function () {
        $(".mobile-menu").addClass("active");
        $("body").addClass("overflow-hidden");
    });

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
        $("body").removeClass("overflow-hidden");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass("icon-rotate");
        });
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".mobile-menu");

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $(".mobile-menu").removeClass("active");
            $("body").removeClass("overflow-hidden");
        }
    }); 

    //7. wow js
    new WOW().init();

    //8. Article Hover
    $(".article-card").on("mouseover", function(){
        $(this).find("p.description").slideDown();
    });

    $(".article-card").on("mouseleave", function(){
        $(this).find("p.description").slideUp();
    });



    //9. Offcanvus Toggle
    $(".offcanvus-toggle").on("click", function () {
        $(".offcanvus-box").addClass("active");
    });

    $(".offcanvus-close").on("click", function(){
        $(".offcanvus-box").removeClass("active");
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".offcanvus-box");
  
        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
          $(".offcanvus-box").removeClass("active");
        }
    });

    //10. progressbar
    $(".cr-progress-bar").ProgressBar();

    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .5
    });

    //11. preloader 
    $(window).on("load", function(){
       $(".preloader").fadeOut();
    }); 


    //12. header sticky
    $(window).on("scroll", function(){
        var scrollbarPosition = $(this).scrollTop();

        if ( scrollbarPosition > 150 ) {
            $(".header-sticky").addClass("sticky-on");
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }
    });

    //13. counterup 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //14. case study hover function
    $(".case-study-single").each(function(){

        $(this).hover(function(){
            $(this).parents(".case-study-box").find(".case-study-single.active").removeClass("active");
            $(this).addClass("active");
            var case_active = $(this).data("case");
            
            $(".case-study-box img.active").removeClass("active");
            $(".case-study-box ." + case_active + "").addClass("active");
        });

    });

    //15. magnific popup
    $(".video-popup-btn").magnificPopup({
        type: 'iframe'
    });

    //16. canvus menu toggle 
    $(".canvus-menu-toggle").on("click", function(){
        $(".canvus-menu").toggleClass("active");
    }); 

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".canvus-menu");

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $(".canvus-menu").removeClass("active");
        }
    }); 


    //17. canvus menu
    $(".canvus-menu ul li.has-submenu").each(function () {
        $(this).on("click", function () {
            $(this).children('ul').slideToggle();
        });
    });

    $(".canvus-menu ul li a").each(function(){

        $(this).on("click", function(e){
            if (this.hash !== "") {
                e.preventDefault();

                var hash = this.hash;

                $("html, body").animate({
                    scrollTop: $(hash).offset().top - 300,
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    }); 

    //18. Color Switcher
    $(".color-switcher-btn").on("click", function(){
        $(this).removeClass("active");
        $(".theme-color-switch").addClass("active");
    });

    $(".theme-color-switch .close-switcher").on("click", function(){
        $(".theme-color-switch").removeClass("active");
        $(".color-switcher-btn").addClass("active");
    });

    $(".theme-color-switch .color-list li a:not(.primary)").each(function(){
        $(this).on("click", function(){
            var class_name = $(this).attr("class");

            $(":root").css({
                "--primary-color" : class_name,
            });

            //hero banner
            var hero_banner = 'assets/images/banner/hero-banner-' + class_name + '.jpg';
            var hm5_banner = 'assets/images/home-5/section-bg-' + class_name + '.jpg';

            $("body").removeAttr("class");
            $("body").addClass(class_name);

            $(".hero-section").css({
                "background-image" : "url(" + hero_banner +")",
            });

        }); 
    }); 
    

    $(".theme-color-switch a.primary").on("click", function(){

        $("body").removeAttr("class");

        $(":root").css({
            "--primary-color" : "#5044EB",
        });

        $(".hero-section").css({
            "background-image" : "url(assets/images/banner/hero-banner.jpg)",
        });
        
    });


    //19. Side Nagigation
    $(".hm5-sidebar-navigation li a").each(function(){

        $(this).on("click", function(event){
            event.preventDefault();
            $(this).parents(".hm5-sidebar-navigation").find("a.active").removeClass("active");
            $(this).addClass("active");

            var hash_value = $(this.hash);

            $(".hm5-box").removeClass("active");

            hash_value.addClass("active");

        });
       
    }); 

    //20. Index 4 header toggle
    $(".hm4-header-toggle").on("click", function(){
        $(".canvus-menu").toggleClass("active");
    });

    //21. cursor move function
    $("body").on("mousemove", function (n) {
        a.css({
            'left': n.clientX + "px"
        });
        a.css({
            'top': n.clientY + "px"
        });
        b.css({
            'left': n.clientX + "px"
        });
        b.css({
            'top': n.clientY + "px"
        });
        c.css({
            'left': n.clientX + "px"
        });
        c.css({
            'top': n.clientY + "px"
        });
    });
    var a = $("#cursor"),
        b = $("#cursor2"),
        c = $("#cursor3");
    function n(t) {
        b.addClass("hover");
        c.addClass("hover");
    }
    function s(t) {
        b.removeClass("hover");
        c.removeClass("hover");
    }
    s();
    $("a, button").on('mouseover', n);
    $("a, button").on('mouseout', s);

    $(".cursor-circle").on("click", function(e) {
        e.preventDefault();
        
        $(".cursor, .cursor2, .cursor3").css({
            "opacity" : "1",
        });
    });

    $(".cursor-normal").on("click", function(e) {
        e.preventDefault();
        
        $(".cursor, .cursor2, .cursor3").css({
            "opacity" : "0",
        });
    });

    //22. hm4 project filter
    var $project_grid = $('.hm4-grid').isotope({
        
    });
    $('.hm4-filter-btn-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $project_grid.isotope({ filter: filterValue });
    });

    $(".hm4-filter-btn-group button").each(function(){
        $(this).on("click", function(){
            $(this).parents(".hm4-filter-btn-group").find("button.active").removeClass("active"); 
            $(this).addClass("active");
        }); 
    });

})(jQuery)