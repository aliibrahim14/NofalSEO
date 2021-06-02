// Partners Page
$(function () {
    "use strict";
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            // rtl: true,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                780: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
});