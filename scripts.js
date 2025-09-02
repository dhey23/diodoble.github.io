$(document).ready(function () {
            // Project slider init
            // $('.project-slider').slick({
            //     dots: true,
            //     arrows: true,
            //     slidesToShow: 3,
            //     slidesToScroll: 1,
            //     infinite: true,
            //     autoplay: true,
            //     autoplaySpeed: 4000,
            //     responsive: [
            //         { breakpoint: 992, settings: { slidesToShow: 2 } },
            //         { breakpoint: 576, settings: { slidesToShow: 1 } }
            //     ]
            // });
            $('.project-slider').slick({
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: '<button type="button" class="slick-prev custom-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
                nextArrow: '<button type="button" class="slick-next custom-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
                responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 576, settings: { slidesToShow: 1 } }
                ]
            });

        });