// loader
$(window).on('load', function () {
    $('body').css('overflow-y', 'scroll');
    $('.loader').hide();
});

$(document).ready(function () {


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
});