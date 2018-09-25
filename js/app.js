// loader
$(window).on('load', function () {
    $('body').css('overflow-y', 'scroll');
    $('.loader').hide();
});

$(document).ready(function () {

    var activeTab = 'inmobi';


    // $(".owl-carousel owl-theme").owlCarousel();
    function windowResized() {
        $('.polygon').width($('body').innerWidth());

    }
    $(window).on('resize', windowResized);
    // partners
    $('.js-partners').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            320: {
                items: 2
            },
            480: {
                items: 2
            },
            552: {
                items: 4
            },
            768: {
                items: 5,
                margin: 20
            },
        }
    });

    // brands
    $('.js-brands').owlCarousel({
        autoplay: true,
        loop: true,
        dots: true,
        // nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            320: {
                items: 2
            },
            480: {
                items: 2
            },
            552: {
                items: 4
            },
            768: {
                items: 5,
                margin: 20
            },
            1000: {
                items: 6,
                margin: 20
            },
        }
    });

    // case studies
    $('.js-case-studies').owlCarousel({
        autoplay: true,
        loop: true,
        // margin: 10,
        nav: true,
        navContainerClass: 'owl-nav case-more-nav',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
                // margin: 20
            }
        }
    });

    $('.js-blog').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
                margin: 20
            }
        }
    });

    $('.js-team-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })

    $('.js-more').on('click', function (e) {
        e.preventDefault();
        $('.case-more-nav').find('.owl-next').click();
    });

    $(".js-get-in-touch-type").on('click', '.nav-link', function(e) {
        e.preventDefault();
        $(".js-get-in-touch-type").find('.nav-link').removeClass('active');
        $(this).addClass('active');
        $("#get-in-touch-type").val($(this).text());
    });

    $(".contact-tab").on('click', '.nav-link', function (e) {
        e.preventDefault();
        $(".contact-tab")
          .find(".nav-link")
          .removeClass("active");

        $(this).addClass('active');

        var formId = $(this).attr('data-form');

        $(".active-form").removeClass('active-form').hide();
        $("#" + formId).addClass('active-form').show();
    });

    // smooth scroll
    $("#topnav, .footer-nav").on('click', 'a', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            var tab = $(this).attr('data-tabselect');

            if (tab) {
                $('#' + tab).tab('show');
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } // end if
    });

    // init
    $('#career-form').hide();

    // scroll detection
    $(window).on('scroll', function() {
        var vScroll = $(window).scrollTop();

        if (vScroll > 50) {
            $('body').addClass('scrolled');

            var aboutSectionScroll = $('#who-are-we').offset().top;
            var solutionSectionScroll = $('#solutions').offset().top;


            // check if about section
            if (vScroll > aboutSectionScroll - $(window).height()/2) {
                console.log('about is visible');
                $(".who-are-we-big-image").addClass('animated fadeInLeft');
                $(".who-are-we-content").addClass("animated fadeInRight");
            }

            // check if solutions section
            if (vScroll > solutionSectionScroll - $(window).height() / 2) {
                console.log("solution is visible");
            }

        } else {
            $("body").removeClass("scrolled");
        }

        // 
        // section scroll detection
    })

    // scroll detection
    $(window).on('scroll', function () {
        var vScroll = $(window).scrollTop();

        if (vScroll > 50) {
            $('body').addClass('scrolled');

            var whatSectionScroll = $('#what-we-do').offset().top;
            var solutionSectionScroll = $('#solutions').offset().top;


            // check if about section
            if (vScroll > whatSectionScroll - $(window).height() / 2) {
                console.log('what we do is visible');
                $(".what-we-do-text").addClass('animated fadeInLeft');
                $(".what-we-do-image").addClass("animated fadeInRight");
            }

            // check if solutions section
            if (vScroll > solutionSectionScroll - $(window).height() / 2) {
                console.log("solution is visible");
            }

        } else {
            $("body").removeClass("scrolled");
        }

        // 
        // section scroll detection
    })

    $(window).on('scroll', function () {
        var vScroll = $(window).scrollTop();

        if (vScroll > 50) {
            $('body').addClass('scrolled');

            var solutionSectionScroll = $('#solutions').offset().top;


            // check if solution section
            if (vScroll > solutionSectionScroll - $(window).height() / 2) {
                console.log('solution is visible');
                $(".item").addClass('animated fadeInBottom');
            }

        } else {
            $("body").removeClass("scrolled");
        }

        // 
        // section scroll detection
    })

    // scrollspy
    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
        // do something…
        console.log($(this));
    })
});