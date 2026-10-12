$(document).ready(function () {

    initPhysicalDeliveryTag();

});


/*  INITIALIZATION */

function initPhysicalDeliveryTag() {

    // FLATPICKR

    const dateFields = [
        "#txtfromDt_PhysicalDeliveryTag",
        "#txtToDt_PhysicalDeliveryTag",
        "#txtIMPDt_PhysicalDeliveryTag"
    ];


    dateFields.forEach(function (selector) {

        if ($(selector).length) {

            flatpickr(selector, {
                dateFormat: "d-m-Y",
                allowInput: true
            });

        }

    });

    // LOAD TABLE DATA

    bindPhysicalDeliveryTable();

    // SAVE

    $("#btnSave_PhysicalDeliveryTag").on("click", function () {

        savePhysicalDeliveryTag();

    });

    // REFRESH

    $("#btnRefresh_PhysicalDeliveryTag").on("click", function () {

        Swal.fire({

            title: "Are you sure?",

            text: "Do you want to refresh Physical Delivery Tag?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Yes, Refresh",

            cancelButtonText: "Cancel"

        }).then(function (result) {

            if (result.isConfirmed) {

                refreshPhysicalDeliveryTag();

            }

        });

    });

}


/* TABLE DATA*/

const physicalDeliveryData = [

    {
        item: "FABRIC",
        imp: "Y",
        qty: "2.360",
        valueInr: "0.00",
        boe: "2547",
        dated: "25-04-2024",
        boeQty: "2547",
        advLicDated: "05-11-2023",
        defcDated: "-",
        garDesc: "LADIES BLOUSE 100% POLYESTER DYED WOVEN FABRIC GSM :108+/-10%",
        normsNo: "SION J-290",
        importedQty: "15.00"
    }

];
/*BIND TABLE */

function bindPhysicalDeliveryTable() {

    const $tbody =
        $("#tblbodyPhysicalDeliveryTag");

    $tbody.empty();


    physicalDeliveryData.forEach(function (item) {

        const row = `

            <tr>

                <td>
                    ${escapePhysicalHtml(item.item)}
                </td>

                <td class="text-center">
                    ${escapePhysicalHtml(item.imp)}
                </td>

                <td class="text-end">
                    ${escapePhysicalHtml(item.qty)}
                </td>

                <td class="text-end">
                    ${escapePhysicalHtml(item.valueInr)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.boe)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.dated)}
                </td>

                <td class="text-end">
                    ${escapePhysicalHtml(item.boeQty)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.advLicDated)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.defcDated)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.garDesc)}
                </td>

                <td>
                    ${escapePhysicalHtml(item.normsNo)}
                </td>

                <td class="text-end">
                    ${escapePhysicalHtml(item.importedQty)}
                </td>

            </tr>

        `;

        $tbody.append(row);

    });

}
/* SAVE*/

function savePhysicalDeliveryTag() {

    Swal.fire({

        title: "Are you sure?",

        text: "Do you want to save Physical Delivery Tag?",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Save",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        const data = {

            fromDate:
                $("#txtfromDt_PhysicalDeliveryTag").val(),

            toDate:
                $("#txtToDt_PhysicalDeliveryTag").val(),

            companyName:
                $("#txtCompanyName_PhysicalDeliveryTag").val(),

            buyerName:
                $("#txtBuyerName_PhysicalDeliveryTag").val(),

            styleNo:
                $("#txtStyleNo_PhysicalDeliveryTag").val(),

            impNo:
                $("#txtIMPNo_PhysicalDeliveryTag").val(),

            impDate:
                $("#txtIMPDt_PhysicalDeliveryTag").val(),

            tableData:
                physicalDeliveryData

        };


        console.log(
            "[PhysicalDeliveryTag] Save Data:",
            data
        );


        showLoader("Saving Physical Delivery Tag...");


        // Demo/API call
        setTimeout(function () {

            hideLoader();


            Swal.fire({

                icon: "success",

                title: "Saved Successfully",

                text: "Physical Delivery Tag saved successfully.",

                timer: 1200,

                showConfirmButton: false

            });

        }, 500);

    });

}
/*REFRESH */

function refreshPhysicalDeliveryTag() {

    showLoader("Refreshing Physical Delivery Tag...");


    try {

        // Clear normal inputs
        $("#txtCompanyName_PhysicalDeliveryTag").val("");

        $("#txtBuyerName_PhysicalDeliveryTag").val("");

        $("#txtStyleNo_PhysicalDeliveryTag").val("");

        $("#txtIMPNo_PhysicalDeliveryTag").val("");


        // Clear Flatpickr
        const dateFields = [

            "#txtfromDt_PhysicalDeliveryTag",
            "#txtToDt_PhysicalDeliveryTag",
            "#txtIMPDt_PhysicalDeliveryTag"

        ];


        dateFields.forEach(function (selector) {

            const element =
                document.querySelector(selector);

            if (
                element &&
                element._flatpickr
            ) {

                element._flatpickr.clear();

            }

        });


        // Clear table
        $("#tblbodyPhysicalDeliveryTag")
            .empty();


        setTimeout(function () {

            hideLoader();


            Swal.fire({

                icon: "success",

                title: "Refreshed",

                text: "Physical Delivery Tag refreshed successfully.",

                timer: 1000,

                showConfirmButton: false

            });

        }, 500);

    }
    catch (error) {

        console.error(
            "[PhysicalDeliveryTag] Refresh failed:",
            error
        );


        hideLoader();


        Swal.fire({

            icon: "error",

            title: "Refresh Failed",

            text: "Unable to refresh Physical Delivery Tag."

        });

    }

}


/* HTML ESCAPE*/

function escapePhysicalHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}