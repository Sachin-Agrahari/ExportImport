$(document).ready(function () {

    initGenerateCarton();

});


/*INITIALIZATION */

function initGenerateCarton() {

    // Select2
    $(".select2-field").each(function () {

        if (!$(this).hasClass("select2-hidden-accessible")) {

            $(this).select2({
                width: "100%",
                dropdownAutoWidth: true,
                allowClear: false
            });

        }

    });


    // Save
    $("#btnSave_GenerateCarton").on("click", function () {

        saveGenerateCarton();

    });


    // Refresh
    $("#btnRefresh_GenerateCarton").on("click", function () {

        showConfirm(
             "Are you sure?",
                "Do you want to refresh Generate Carton?",

        ).then(function (result) {

            if (result.isConfirmed) {

                refreshGenerateCarton();

            }

        });

    });

}


/* GET FORM DATA*/

function getGenerateCartonData() {

    return {

        invoiceNo:
            ($("#txtInvoiceNo_GenerateCarton").val() || "").trim(),

        buyerName:
            ($("#txtBuyerName_GenerateCarton").val() || "").trim(),

        adi:
            ($("#txtAdi_GenerateCarton").val() || "").trim(),

        quantity:
            ($("#txtQuantity_GenerateCarton").val() || "").trim(),

        invoiceValue:
            ($("#txtInvoiceValue_GenerateCarton").val() || "").trim(),

        currency:
            ($("#ddlCurrency_GenerateCarton").val() || "").trim(),

        fob:
            ($("#txtFOB_GenerateCarton").val() || "").trim(),

        totalCtn:
            ($("#txtTotalCtn_GenerateCarton").val() || "").trim(),

        lot:
            ($("#txtLot_GenerateCarton").val() || "").trim(),

        from:
            ($("#txtFrom_GenerateCarton").val() || "").trim(),

        to:
            ($("#txtTo_GenerateCarton").val() || "").trim()

    };

}


/*VALIDATION */

function validateGenerateCarton() {

    const data =
        getGenerateCartonData();


    // Invoice
    if (!data.invoiceNo) {

        showWarning(
           "Invoice Required",
            "Please enter Invoice No."

        );

        $("#txtInvoiceNo_GenerateCarton").focus();

        return false;

    }


    // Buyer
    if (!data.buyerName) {

        showWarning(
          "Buyer Name Required",
         "Please enter Buyer Name."

        );

        $("#txtBuyerName_GenerateCarton").focus();

        return false;

    }


    // Quantity
    if (!data.quantity) {

        showWarning(
            "Quantity Required",
            "Please enter Quantity."

        );

        $("#txtQuantity_GenerateCarton").focus();

        return false;

    }


    // Invoice Value
    if (!data.invoiceValue) {

        showWarning(
           "Invoice Value Required",
             "Please enter Invoice Value."
        );

        $("#txtInvoiceValue_GenerateCarton").focus();

        return false;

    }


    // Currency
    if (!data.currency) {

       showWarning(
            "Currency Required",
                "Please select Currency."

        );

        $("#ddlCurrency_GenerateCarton")
            .select2("open");

        return false;

    }


    // FOB
    if (!data.fob) {

        showWarning(
            "FOB Required",

                "Please enter FOB."

        );

        $("#txtFOB_GenerateCarton").focus();

        return false;

    }


    // Total Cartons
    if (!data.totalCtn) {

        showWarning(
            "Total Ctn Required",
             "Please enter Total Ctn."

        );

        $("#txtTotalCtn_GenerateCarton").focus();

        return false;

    }


    // Lot
    if (!data.lot) {

        showWarning(
            "Lot Required",

                "Please enter Lot."

        );

        $("#txtLot_GenerateCarton").focus();

        return false;

    }


    // From
    if (!data.from) {

        showWarning(
           "From Required",

            
                "Please enter From."

        );

        $("#txtFrom_GenerateCarton").focus();

        return false;

    }


    // To
    if (!data.to) {

        showWarning(
             "To Required",
                "Please enter To."

        );

        $("#txtTo_GenerateCarton").focus();

        return false;

    }


    return true;

}


/*SAVE*/

function saveGenerateCarton() {

    if (!validateGenerateCarton()) {

        return;

    }


    const data =
        getGenerateCartonData();


    showConfirm(
             "Save Generate Carton?",
            "Do you want to save Generate Carton details?",
    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        showLoader(
            "Saving Generate Carton..."
        );


        setTimeout(function () {

            hideLoader();


            console.log(
                "[GenerateCarton] Saved Data:",
                data
            );


            showSuccess(
                "Saved Successfully",
               
                    "Generate Carton details saved successfully.",


            );

        }, 500);

    });

}
/* REFRESH*/

function refreshGenerateCarton() {

    showLoader(
        "Refreshing Generate Carton..."
    );


    try {

        // Clear text fields
        $(
            "#txtInvoiceNo_GenerateCarton," +
            "#txtBuyerName_GenerateCarton," +
            "#txtAdi_GenerateCarton," +
            "#txtQuantity_GenerateCarton," +
            "#txtInvoiceValue_GenerateCarton," +
            "#txtFOB_GenerateCarton," +
            "#txtTotalCtn_GenerateCarton," +
            "#txtLot_GenerateCarton," +
            "#txtFrom_GenerateCarton," +
            "#txtTo_GenerateCarton"
        ).val("");


        // Clear Currency
        $("#ddlCurrency_GenerateCarton")
            .val("")
            .trigger("change");


        setTimeout(function () {

            hideLoader();


            showSuccess(
                 "Refreshed",
                    "Generate Carton refreshed successfully.",


            );

        }, 500);

    }
    catch (error) {

        console.error(
            "[GenerateCarton] Refresh failed:",
            error
        );


        hideLoader();


        showError(
           "Refresh Failed",
            "Unable to refresh Generate Carton."

        );

    }

}