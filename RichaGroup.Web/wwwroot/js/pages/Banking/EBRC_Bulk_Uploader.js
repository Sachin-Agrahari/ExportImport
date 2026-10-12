$(document).ready(function () {

    initEBRCBulkUploader();

});
/* INIT*/

function initEBRCBulkUploader() {
    /*SELECT2*/

    if ($("#ddlSearchOn_EBRCBulkUploader").length) {

        $("#ddlSearchOn_EBRCBulkUploader").select2({
            width: "100%",
            placeholder: "Select Search On",
            allowClear: true
        });

    }

    /*FILE SELECT */

    $("#fileXls_EBRCBulkUploader").on("change", function () {

        const file =
            this.files && this.files.length
                ? this.files[0]
                : null;


        if (!file) {

            resetSelectedEBRCFile();

            return;
        }


        /* File extension */

        const fileName =
            file.name;

        const extension =
            fileName
                .split(".")
                .pop()
                .toLowerCase();


        /* Validate extension */

        if (
            extension !== "xls" &&
            extension !== "xlsx"
        ) {

            Swal.fire({
                icon: "warning",
                title: "Invalid File",
                text: "Please select only .xls or .xlsx file."
            });


            this.value = "";

            resetSelectedEBRCFile();

            return;
        }


        /* Show file name */

        $("#ebrcFileDisplay_EBRCBulkUploader")
            .find(".ebrc-file-title")
            .text(fileName);


        /* Show type + size */

        $("#ebrcFileDisplay_EBRCBulkUploader")
            .find("small")
            .text(
                extension.toUpperCase() +
                " • " +
                formatEBRCFileSize(file.size)
            );


        /* Selected file info */

        $("#lblSelectedFile_EBRCBulkUploader")
            .text(fileName);


        $("#ebrcSelectedFileInfo")
            .removeClass("d-none");


        /* Tooltip */

        $("#ebrcFileDisplay_EBRCBulkUploader")
            .attr("title", fileName);

    });

    /* UPLOAD*/

    $("#btnUpload_EBRCBulkUploader").on("click", function () {

        uploadEBRCBulk();

    });

    /*REFRESH */

    $("#btnRefresh_EBRCBulkUploader").on("click", function () {

        Swal.fire({

            title: "Are you sure?",

            text:
                "Do you want to refresh EBRC Bulk Uploader?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Yes, Refresh",

            cancelButtonText: "Cancel"

        }).then(function (result) {

            if (result.isConfirmed) {

                refreshEBRCBulkUploader();

            }

        });

    });

}


/*UPLOAD */

function uploadEBRCBulk() {

    const fileInput =
        document.getElementById(
            "fileXls_EBRCBulkUploader"
        );


    const searchOn =
        $("#ddlSearchOn_EBRCBulkUploader")
            .val();


    const $button =
        $("#btnUpload_EBRCBulkUploader");


    /* FILE VALIDATION*/

    if (
        !fileInput ||
        !fileInput.files ||
        !fileInput.files.length
    ) {

        Swal.fire({

            icon: "warning",

            title: "File Required",

            text:
                "Please select an Excel file first."

        });

        return;
    }


    /*SEARCH ON VALIDATION*/

    if (!searchOn) {

        Swal.fire({

            icon: "warning",

            title: "Search On Required",

            text:
                "Please select Search On."

        });

        return;
    }


    const file =
        fileInput.files[0];


    /*PREVENT DOUBLE CLICK */

    if ($button.hasClass("is-uploading")) {

        return;

    }


    /*RESET OLD STATE */

    $button
        .removeClass(
            "is-success is-error"
        );


    /*START UPLOADING*/

    $button
        .addClass("is-uploading");


    /*
        Replace this setTimeout with
        your actual AJAX/API call.
    */

    setTimeout(function () {

        try {

            /*  SUCCESS */

            $button
                .removeClass("is-uploading")
                .addClass("is-success");


            /* Add uploaded file to table */

            addEBRCFileToTable(file);


            /*
                Keep success icon visible for 1.5 sec
            */

            setTimeout(function () {

                resetEBRCUploadButton();

            }, 1500);


        }
        catch (error) {

            console.error(
                "[EBRCBulkUploader] Upload failed:",
                error
            );


            /* ERROR */

            $button
                .removeClass("is-uploading")
                .addClass("is-error");


            setTimeout(function () {

                resetEBRCUploadButton();

            }, 1500);


            Swal.fire({

                icon: "error",

                title: "Upload Failed",

                text:
                    "Unable to upload the selected file."

            });

        }

    }, 2000);

}


/* RESET UPLOAD BUTTON */

function resetEBRCUploadButton() {

    const $button =
        $("#btnUpload_EBRCBulkUploader");


    $button
        .removeClass(
            "is-uploading is-success is-error"
        );

}


/* ADD FILE TO TABLE */

function addEBRCFileToTable(file) {

    if (!file) {
        return;
    }


    const fileName =
        file.name;


    const extension =
        fileName
            .split(".")
            .pop()
            .toUpperCase();


    const fileSize =
        formatEBRCFileSize(
            file.size
        );


    /* Prevent duplicate file */

    let duplicate = false;


    $("#tblbodyEBRCBulkUploader tr").each(
        function () {

            const existingFile =
                $(this)
                    .find("td:first")
                    .attr("data-file-name");


            if (
                existingFile &&
                existingFile.toLowerCase() ===
                fileName.toLowerCase()
            ) {

                duplicate = true;

                return false;
            }

        }
    );


    if (duplicate) {

        Swal.fire({

            icon: "info",

            title: "File Already Added",

            text:
                "This file is already present in the list."

        });

        return;
    }


    const row = `

        <tr>

            <!-- File Name -->

            <td data-file-name="${escapeEBRCHtml(fileName)}">

                <i class="fa-solid fa-file-excel me-2"></i>

                ${escapeEBRCHtml(fileName)}

            </td>


            <!-- Type -->

            <td>

                <span class="ebrc-file-type">

                    ${extension}

                </span>

            </td>


            <!-- Size -->

            <td>

                ${fileSize}

            </td>


            <!-- Action -->

            <td>

                <button type="button"
                        class="ebrc-file-action btnRemoveEBRCFile"
                        title="Remove">

                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="15"
                         height="15"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">

                        <path d="M3 6h18"></path>

                        <path d="M8 6V4h8v2"></path>

                        <path d="M19 6l-1 14H6L5 6"></path>

                        <path d="M10 11v5"></path>

                        <path d="M14 11v5"></path>

                    </svg>

                </button>

            </td>

        </tr>

    `;


    $("#tblbodyEBRCBulkUploader")
        .append(row);


    updateEBRCRecordCount();

}


/* REMOVE FILE */

$(document).on(
    "click",
    ".btnRemoveEBRCFile",
    function () {

        const $row =
            $(this).closest("tr");


        Swal.fire({

            title: "Remove File?",

            text:
                "Do you want to remove this file?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Yes, Remove",

            cancelButtonText: "Cancel"

        }).then(function (result) {

            if (result.isConfirmed) {

                $row.remove();

                updateEBRCRecordCount();

            }

        });

    }
);


/* RECORD COUNT */

function updateEBRCRecordCount() {

    const count =
        $("#tblbodyEBRCBulkUploader tr")
            .length;


    $("#lblRecordCount_EBRCBulkUploader")
        .text(count);

}


/* FILE SIZE */

function formatEBRCFileSize(bytes) {

    if (!bytes) {

        return "0 Bytes";

    }


    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];


    const i =
        Math.floor(
            Math.log(bytes) /
            Math.log(1024)
        );


    return (
        parseFloat(
            (
                bytes /
                Math.pow(1024, i)
            ).toFixed(2)
        ) +
        " " +
        units[i]
    );

}


/*RESET SELECTED FILE */

function resetSelectedEBRCFile() {

    $("#ebrcFileDisplay_EBRCBulkUploader")
        .find(".ebrc-file-title")
        .text("Choose Excel File");


    $("#ebrcFileDisplay_EBRCBulkUploader")
        .find("small")
        .text(".xls / .xlsx");


    $("#lblSelectedFile_EBRCBulkUploader")
        .text("-");


    $("#ebrcSelectedFileInfo")
        .addClass("d-none");


    $("#ebrcFileDisplay_EBRCBulkUploader")
        .removeAttr("title");

}


/* REFRESH */

function refreshEBRCBulkUploader() {

    showLoader(
        "Refreshing EBRC Bulk Uploader..."
    );


    try {

        /* Clear file input */

        $("#fileXls_EBRCBulkUploader")
            .val("");


        /* Reset file display */

        resetSelectedEBRCFile();


        /* Reset upload button */

        resetEBRCUploadButton();


        /* Clear Select2 */

        $("#ddlSearchOn_EBRCBulkUploader")
            .val("")
            .trigger("change");


        /* Clear table */

        $("#tblbodyEBRCBulkUploader")
            .empty();


        /* Update count */

        updateEBRCRecordCount();


        setTimeout(function () {

            hideLoader();


            Swal.fire({

                icon: "success",

                title: "Refreshed",

                text:
                    "EBRC Bulk Uploader refreshed successfully.",

                timer: 1000,

                showConfirmButton: false

            });

        }, 500);

    }
    catch (error) {

        console.error(
            "[EBRCBulkUploader] Refresh failed:",
            error
        );


        hideLoader();


        Swal.fire({

            icon: "error",

            title: "Refresh Failed",

            text:
                "Unable to refresh EBRC Bulk Uploader."

        });

    }

}


/* HTML ESCAPE*/

function escapeEBRCHtml(value) {

    return $("<div>")
        .text(value)
        .html();

}