$(document).ready(function () {

    initShippingBill();

});

// Page Initialization

function initShippingBill() {

    if ($("#txtShippingBillDate_ShippingBill").length) {

        flatpickr("#txtShippingBillDate_ShippingBill", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    if ($("#txtLEODate_ShippingBill").length) {

        flatpickr("#txtLEODate_ShippingBill", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    // Refresh Button

    $("#btnRefresh_ShippingBill").on("click", function () {

        showConfirm(
             "Are you sure?",
            "Do you want to refresh the Shipping Bill?",
            
        ).then(function (result) {

            if (result.isConfirmed) {

                refreshShippingBill();

            }

        });

    });
    // GST Detail Edit

    $("#btnGSTDetailEdit_ShippingBill").on("click", function () {

        openGSTDetailEdit();

    });

    // Add Button

    $("#btnAdd_ShippingBill").on("click", function () {

        addShippingBill();

    });

}

// Refresh Shipping Bill
function refreshShippingBill() {

    showLoader("Refreshing Shipping Bill...");

    try {

        $("#txtInvoiceNo_ShippingBill").val("");

        $("#txtShippingBillNo_ShippingBill").val("");

        $("#txtShippingBillDate_ShippingBill").val("");

        $("#txtEPRate_ShippingBill").val("");

        $("#txtAdjExchRate_ShippingBill").val("");

        $("#txtLEODate_ShippingBill").val("");

        $("#txtShippingBillFreight_ShippingBill").val("");

        $("#txtIGST_ShippingBill").val("");

        $("#txtDBKApplied_ShippingBill").val("");

        $("#txtDBKReceived_ShippingBill").val("");


        setTimeout(function () {

            hideLoader();

            showSuccess(
               "Refreshed",
              "Shipping Bill refreshed successfully.",
               
            );

        }, 500);

    }
    catch (error) {

        console.error(
            "[ShippingBill] Refresh failed:",
            error
        );

        hideLoader();

    }

}

// GST Detail Edit
function openGSTDetailEdit() {

    const fields = [
        "#txtShippingBillNo_ShippingBill",
        "#txtShippingBillDate_ShippingBill",
        "#txtEPRate_ShippingBill",
        "#txtAdjExchRate_ShippingBill",
        "#txtLEODate_ShippingBill",
        "#txtShippingBillFreight_ShippingBill",
        "#txtIGST_ShippingBill",
        "#txtDBKApplied_ShippingBill",
        "#txtDBKReceived_ShippingBill"
    ];

    $(".shipping-edit-highlight").removeClass(
        "shipping-edit-highlight"
    );

    fields.forEach(function (selector) {

        $(selector).addClass(
            "shipping-edit-highlight"
        );

    });

    $(document)
        .off(
            "focus.shippingBillEdit",
            ".shipping-edit-highlight"
        )
        .on(
            "focus.shippingBillEdit",
            ".shipping-edit-highlight",
            function () {

                $(this).removeClass(
                    "shipping-edit-highlight"
                );

            }
        );

    showInfo(
         "GST Detail-Edit",
        "GST related details are ready for editing.",
        
    );
}
// Add Shipping Bill

function addShippingBill() {

    const data = getShippingBillData();

    // Basic validation
    if (!data.invoiceNo) {

        showWarning(
           "Invoice Number Required",
          "Please enter Invoice Number."
        );

        $("#txtInvoiceNo_ShippingBill").focus();

        return;
    }

    if (!data.shippingBillNo) {

        showWarning(
            "Shipping Bill Number Required",
            "Please enter Shipping Bill Number."
        );

        $("#txtShippingBillNo_ShippingBill").focus();

        return;
    }


    // Save confirmation
    showWarning(
        "Are you sure?",
        "Do you want to add this Shipping Bill?",
        
    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Adding Shipping Bill...");

        try {

            console.log(
                "[ShippingBill] Added:",
                data
            );

            setTimeout(function () {

                hideLoader();

                // Remove GST edit highlights
                $(".shipping-edit-highlight").removeClass(
                    "shipping-edit-highlight"
                );

                Swal.fire({
                    icon: "success",
                    title: "Added Successfully",
                    text: "Shipping Bill added successfully.",
                    timer: 1200,
                    showConfirmButton: false
                });

            }, 500);

        }
        catch (error) {

            console.error(
                "[ShippingBill] Add failed:",
                error
            );

            hideLoader();

            showError(
               "Add Failed",
                "Unable to add Shipping Bill."
            );

        }

    });

}

// Get Shipping Bill Form Data

function getShippingBillData() {

    return {

        invoiceNo:
            $("#txtInvoiceNo_ShippingBill").val().trim(),

        shippingBillNo:
            $("#txtShippingBillNo_ShippingBill").val().trim(),

        shippingBillDate:
            $("#txtShippingBillDate_ShippingBill").val().trim(),

        epRate:
            $("#txtEPRate_ShippingBill").val().trim(),

        adjExchRate:
            $("#txtAdjExchRate_ShippingBill").val().trim(),

        leoDate:
            $("#txtLEODate_ShippingBill").val().trim(),

        shippingBillFreight:
            $("#txtShippingBillFreight_ShippingBill").val().trim(),

        igst:
            $("#txtIGST_ShippingBill").val().trim(),

        dbkApplied:
            $("#txtDBKApplied_ShippingBill").val().trim(),

        dbkReceived:
            $("#txtDBKReceived_ShippingBill").val().trim()

    };

}

