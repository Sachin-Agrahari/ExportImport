/*COMMON MODAL */

function openCommonModal(options = {}) {

    const {
        title = "Modal",
        subtitle = "",
        body = "",
        footer = "",
        size = "md"
    } = options;


    const $overlay = $("#commonModalOverlay");
    const $modal = $("#commonModal");


    // Title
    $("#commonModalTitle").text(title);


    // Subtitle
    if (subtitle) {

        $("#commonModalSubtitle")
            .text(subtitle)
            .show();

    } else {

        $("#commonModalSubtitle")
            .text("")
            .hide();

    }


    // Body
    $("#commonModalBody")
        .html(body);


    // Footer
    $("#commonModalFooter")
        .html(footer);


    // Size
    $modal
        .removeClass("sm md lg xl")
        .addClass(size);


    // Open
    $overlay.addClass("on");
}


function closeCommonModal() {

    $("#commonModalOverlay")
        .removeClass("on");

    // Optional cleanup
    $("#commonModalBody").html("");
    $("#commonModalFooter").html("");
}