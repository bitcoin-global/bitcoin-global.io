// Typewriter
const instance = new Typewriter('#typewriter', {
    strings: ['everyone', 'businesses', 'individuals', 'miners', 'machines'],
    autoStart: true,
    loop: true
});

$(document).ready(function() {

    // Highlight
    hljs.initHighlighting();

    /* OwlCarousel2 Plugin */
    /* Ref: https://owlcarousel2.github.io/OwlCarousel2/ */
    $('.projects-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 2,
        center: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        
    });

    $('.tech-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        center: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 5
            },
            992: {
                items: 7
            },
        }
    });

    /* ======= Popover ======= */
    $('[data-toggle="popover"]').popover();
    $('.info-popover-trigger').popover({
        container: 'body',
        trigger: 'hover'
    });

    /* ======= FAQ accordion ======= */
    $('.card-toggle').on('click', function() {
        if ($(this).find('svg').attr('data-icon') == 'chevron-down') {
            $(this).find('svg').attr('data-icon', 'chevron-up');
        } else {
            $(this).find('svg').attr('data-icon', 'chevron-down');
        };
    });

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
});

$(document).on('submit', 'form.contact-form', function() {
    var subject = "[ROC] " + $("input#cname").val() + " - Contact form";
    var body = $("textarea#cmessage").val();

    window.open('mailto:glob@bitcoin-global.io?subject=' + subject + '&body=' + body);
});
