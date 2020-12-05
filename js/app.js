$(function () {

    const worksSlider = $('[data-slider="slick"]');

    /* Filter
    =====================*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });




/* Modalinis langas */
    let btns = document.querySelectorAll("*[data-modal-btn]");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let name = btns[i].getAttribute('data-modal-btn');
            let modal = document.querySelector("[data-modal-window='" + name + "']");
            modal.style.display = "block";
            let close = modal.querySelector(".close__modal__window");
            close.addEventListener('click', function () {
                modal.style.display = "none";
            })
        })
    }
    
    window.onclick = function (e) {
        if (e.target.hasAttribute('data-modal-window')) {
            let modals = document.querySelectorAll("*[data-modal-window]");
            for (let i = 0; i < modals.length; i++) {
                modals[i].style.display = "none";
            }
        }
    }
    

    /* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick('setPosition');
    });


    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function (event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });



    /* Slider: https://kenwheeler.github.io/slick/
    =====================*/

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
    });



    /* Mobile nav
    ==================*/

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});


// Create a JavaScript Date object for the current date and time, and set the desired options.
var date = new Date(),
options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

// Convert to locale string and add a locale and the options
date = date.toLocaleString( "en-US", options );

// Output the date to the above HTML element
document.getElementById("msg").innerHTML = date;



