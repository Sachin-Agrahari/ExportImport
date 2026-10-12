$(document).ready(function () {

    // ---- Select2 ----
    $("#ddlPortRegister_Add_LicenseMaster").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select port..."
    });

    // ---- Flatpickr  ----
    var dateFieldIds_Add_LicenseMaster = [
        "#txtDate_Add_LicenseMaster",
        "#txtLExp_Add_LicenseMaster",
        "#txtOExp_Add_LicenseMaster",
        "#txtBondDate_Add_LicenseMaster",
        "#txtEODApply_Add_LicenseMaster",
        "#txtInstCertRcvd_Add_LicenseMaster",
        "#txtFileRcvdOn_Add_LicenseMaster",
        "#txtReceivd_Add_LicenseMaster",
        "#txtRedmDate_Add_LicenseMaster"
    ];

    dateFieldIds_Add_LicenseMaster.forEach(function (id) {
        flatpickr(id, {
            dateFormat: "d-m-Y",
            allowInput: true
        });
    });
     
    $("#btnBack").on("click", function () {
        window.location.href = "/Banking/viewEPCGLicense";
    });
    // ---- Refresh button ----
    $("#btnRefresh_Add_LicenseMaster").on("click", function () {
        showWarning(
           "Are you sure?",
             "Do you want to refresh this form? Unsaved changes will be lost.",
             
        ).then((result) => {
            if (result.isConfirmed) {
                resetAddLicenseMasterForm();
            }
        });
    });

 

    // ---- Save button ----
    $("#btnSave_Add_LicenseMaster").on("click", function () {

        var licenceNo = $("#txtLicenceNo_Add_LicenseMaster").val().trim();

        if (!licenceNo) {
            showWarning(
               "Missing Licence #",
                "Please enter the Licence number before saving.",
             
             );
            $("#txtLicenceNo_Add_LicenseMaster").trigger("focus");
            return;
        }

        showInfo(
             "Save Licence?",
             "Do you want to save this License Master entry?",
            
         ).then((result) => {
            if (result.isConfirmed) {
                saveAddLicenseMaster();
            }
        });
    });

});

// Collect form data
function collectAddLicenseMasterData() {
    return {
        licenceNo: $("#txtLicenceNo_Add_LicenseMaster").val(),
        date: $("#txtDate_Add_LicenseMaster").val(),
        ly: $("#txtLY_Add_LicenseMaster").val(),
        lExp: $("#txtLExp_Add_LicenseMaster").val(),
        oy: $("#txtOY_Add_LicenseMaster").val(),
        oExp: $("#txtOExp_Add_LicenseMaster").val(),
        eoRs: $("#txtEORs_Add_LicenseMaster").val(),
        eoUsd: $("#txtEOUSD_Add_LicenseMaster").val(),
        cifRs: $("#txtCIFRs_Add_LicenseMaster").val(),
        cifUsd: $("#txtCIFUSD_Add_LicenseMaster").val(),
        portRegister: $("#ddlPortRegister_Add_LicenseMaster").val(),
        fileName: $("#fileUpload_Add_LicenseMaster")[0].files.length
            ? $("#fileUpload_Add_LicenseMaster")[0].files[0].name
            : null,
        dutySave: $("#txtDutySave_Add_LicenseMaster").val(),
        avgAmt: $("#txtAvgAmt_Add_LicenseMaster").val(),
        bondAmt: $("#txtBondAmt_Add_LicenseMaster").val(),
        bondDate: $("#txtBondDate_Add_LicenseMaster").val(),
        eodApply: $("#txtEODApply_Add_LicenseMaster").val(),
        instCertRcvd: $("#txtInstCertRcvd_Add_LicenseMaster").val(),
        fileRcvdOn: $("#txtFileRcvdOn_Add_LicenseMaster").val(),
        receivd: $("#txtReceivd_Add_LicenseMaster").val(),
        redmDate: $("#txtRedmDate_Add_LicenseMaster").val(),
        remarks: $("#txtRemarks_Add_LicenseMaster").val()
    };
}

// Save 

function saveAddLicenseMaster() {

    showLoader("Saving...");

    try {

        var payload = collectAddLicenseMasterData();
        console.log("License Master saved:", payload);

        setTimeout(function () {
            hideLoader();

            showSuccess(
              "Saved!",
                 "License Master entry has been saved successfully.",
              
            ).then(function () {
                window.location.href = "/Banking/EPCGLicense";
            });

        }, 800);

    }
    catch (err) {

        console.error(
            "[AddLicenseMaster] Save failed:",
            err
        );

        hideLoader();

        showError( 
             "Something went wrong while saving. Please try again.",
           "error"
         );
    }
}
// Reset form

function resetAddLicenseMasterForm() {
    $("#frmAdd_LicenseMaster")[0].reset();
    $("#ddlPortRegister_Add_LicenseMaster").val("").trigger("change");

    var $box = $("#uploadBox_Add_LicenseMaster");
    $("#fileUpload_Add_LicenseMaster").val("");
    $box.find(".upload-text_Add_LicenseMaster").text("Click or drop file to upload");
    $box.removeClass("has-file_Add_LicenseMaster");
    $box.find(".upload-remove_Add_LicenseMaster").addClass("d-none");
}