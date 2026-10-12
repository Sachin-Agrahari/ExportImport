
import { initializeSelect2, initDatePicker } from './Utlity/Components.js'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.overlay').forEach(o => {
        o.addEventListener('click', e => { if (e.target === o) o.classList.remove('on'); });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.overlay.on').forEach(o => o.classList.remove('on'));
        }
    });
   
    document.querySelector('.sidebar-toggle')?.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            document.body.classList.toggle('sidebar-mobile-open');
        }
        else {
            document.body.classList.toggle('sidebar-collapsed');
        }
    });

    document.querySelector('.sidebar-backdrop')?.addEventListener('click', () => {
        document.body.classList.remove('sidebar-mobile-open');
    });

    $(".nav-group > .nav-toggle").on("mouseenter", function () {

        const $btn = $(this);
        const targetId = $btn.data("target");
        const $submenu = $("#" + targetId);

        if (targetId !== "submenu-master") return;

        const rect = this.getBoundingClientRect();

        $submenu.css({
            top: rect.top + "px"
        });
    });
     
    initSidebarAccordion()
    initGlobalLottieLoader()


    $(".form-Flatdate").flatpickr({
        dateFormat: "d-m-Y",
        allowInput: true,
        defaultDate:"today"
    });

   /* initializeSelect2('.form-select')*/
    $(`.form-select`).select2();

    $('.modal').attr('data-bs-backdrop', 'static');
    $('.modal').attr('data-bs-keyboard', 'false');

});



    

    $(document).on('shown.bs.modal', '.modal', function () {

        let modal = $(this);

        modal.find('select').each(function () {
            if ($(this).hasClass("select2-hidden-accessible")) {
                $(this).select2('destroy');
            }

            $(this).select2({
                dropdownParent: modal,
                minimumResultsForSearch: 0
            });

        });

    });


function initSidebarAccordion() {

    $(".nav-toggle") .off("click.sidebar") .on("click.sidebar", function (e) {

         e.preventDefault();

         const $btn = $(this);
         const $group = $btn.closest(".nav-group");
         const targetId = $btn.attr("data-target");
         const $submenu = $("#" + targetId);

         if (!$submenu.length) {
             console.warn("Submenu not found:", targetId);
             return;
         }

            const isOpen = $group.hasClass("open");


           // Same level ke groups close karo
            $group
                .siblings(".nav-group")
                .removeClass("open")
                .children(".nav-toggle")
                .removeClass("active")
                .attr("aria-expanded", "false")
                .siblings(".submenu")
                .stop(true, true)
                .slideUp(180);


           // Current group toggle
            if (isOpen) {

                $group.removeClass("open");

                $btn
                    .removeClass("active")
                    .attr("aria-expanded", "false");

                $submenu
                    .stop(true, true)
                    .slideUp(180);

            } else {

                $group.addClass("open");

                $btn
                    .addClass("active")
                    .attr("aria-expanded", "true");

                $submenu
                    .stop(true, true)
                    .slideDown(180);
            }

    });
}
 
let loaderTimer = null;
let globalLottieLoader = null;
 
function initGlobalLottieLoader() {

    const loaderElement = document.getElementById("globalLottieLoader");

    if (!loaderElement) {
        console.warn("Lottie loader element not found.");
        return;
    }

    if (typeof lottie === "undefined") {
        console.warn("Lottie library not loaded.");
        return;
    }

    globalLottieLoader = lottie.loadAnimation({ 
        container: loaderElement, 
        renderer: "svg", 
        loop: true, 
        autoplay: true, 
        path: "/Assets/Loader/loader.json" 
    });

}

window.showLoader = function (message, autoHideMs) {

    const $loader = $("#globalLoader");

    if (!$loader.length) {
        console.warn("Global loader element not found.");
        return;
    }

    $loader.addClass("on");

    $("#globalLoaderText").text(message || "Loading, please wait...");

    if (globalLottieLoader) {
        globalLottieLoader.play();
    }

    clearTimeout(loaderTimer);

    if (autoHideMs) {

        loaderTimer = setTimeout(function () {
            window.hideLoader();
        }, autoHideMs);

    }
};

window.hideLoader = function () { 
    clearTimeout(loaderTimer); 
    $("#globalLoader").removeClass("on"); 
    if (globalLottieLoader) {
        globalLottieLoader.stop();
    }
    $("#globalLoaderText").text( "Loading, please wait..." );
};

function ShowAlert(title, message, icon) {
    Swal.fire({
        title: `${title}`,
        text: `${message}`,
        icon: `${icon}`
    });
}