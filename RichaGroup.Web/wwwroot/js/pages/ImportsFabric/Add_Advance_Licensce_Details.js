$(document).ready(function () {

    initAddAdvLicDetails();

});


/* INITIALIZATION */

function initAddAdvLicDetails() {

    initAdvLicDatePickers();
    initAdvLicSelect2() 

    $("#btnSave_AddAdvLicDetails").on("click", function () {
        saveAddAdvLicDetails();
    });

    $("#btnRefresh_AddAdvLicDetails").on("click", function () {
        confirmRefreshAdvLicDetails();
    });

    $("#btnBack_AddAdvLicDetails").on("click", function () {
        window.history.back();
    });

}

/* Select2 */

function initAdvLicSelect2() {

    const selectFields = [
        "#ddlIGST_AddAdvLicDetails",
        "#ddlChip_AddAdvLicDetails",
        "#ddlNormsFixed_AddAdvLicDetails",
        "#ddlAdvFixationApplied_AddAdvLicDetails",
        "#ddlFixed_AddAdvLicDetails",
        "#ddlImportComplete_AddAdvLicDetails",
        "#ddlBalToBeShipped_AddAdvLicDetails",
        "#ddlDutyReadyPayment_AddAdvLicDetails",
        "#ddlDutyPaid_AddAdvLicDetails",
        "#ddlConfirmByMerchant_AddAdvLicDetails",
        "#ddlRedemptionFiled_AddAdvLicDetails",
        "#ddlRedemptionRcvd_AddAdvLicDetails",
        "#ddlBondRegistered_AddAdvLicDetails",
        "#ddlBondCancelFiled_AddAdvLicDetails",
        "#ddlBondCancelled_AddAdvLicDetails"
    ];

    selectFields.forEach(function (selector) {

        if ($(selector).length) {

            $(selector).select2({
                width: "100%",
                minimumResultsForSearch: Infinity
            });

        }

    });

}


/*FLATPICKR*/

function initAdvLicDatePickers() {

    const dateFields = [
        "#txtLicenseDate_AddAdvLicDetails",
        "#txtCLAFileDate_AddAdvLicDetails",
        "#txtNormsFixedDate_AddAdvLicDetails",
        "#txtDateApplied_AddAdvLicDetails",
        "#txtFixedDate_AddAdvLicDetails",
        "#txtImportCompleteDate_AddAdvLicDetails",
        "#txtLicenseRecdBackOn_AddAdvLicDetails",
        "#txtSurrFiledDate_AddAdvLicDetails",
        "#txtSurrRcvdDate_AddAdvLicDetails",
        "#txtDutyPaidOn_AddAdvLicDetails",
        "#txtMailSentDate_AddAdvLicDetails",
        "#txtRedemptionFiledDate_AddAdvLicDetails",
        "#txtRedemptionRcvdDate_AddAdvLicDetails",
        "#txtBondRegisteredDate_AddAdvLicDetails",
        "#txtBondCancelFiledDate_AddAdvLicDetails",
        "#txtBondCancelledDate_AddAdvLicDetails"
    ];

    dateFields.forEach(function (selector) {

        if ($(selector).length) {

            flatpickr(selector, {
                dateFormat: "d-m-Y",
                allowInput: true
            });

        }

    });

}

/*SAVE */

function saveAddAdvLicDetails() {

    const data = {

        entryNo:
            $("#txtEntryNo_AddAdvLicDetails").val(),

        companyCode:
            $("#txtCompanyCode_AddAdvLicDetails").val(),

        diarySerialNo:
            $("#txtDiarySerialNo_AddAdvLicDetails").val(),

        licenseNo:
            $("#txtLicenseNo_AddAdvLicDetails").val(),

        igst:
            $("#ddlIGST_AddAdvLicDetails").val(),

        licenseDate:
            $("#txtLicenseDate_AddAdvLicDetails").val(),

        licenseType:
            $("#txtLicenseType_AddAdvLicDetails").val(),

        claFileNo:
            $("#txtCLAFileNo_AddAdvLicDetails").val(),

        claFileDate:
            $("#txtCLAFileDate_AddAdvLicDetails").val(),

        port:
            $("#txtPort_AddAdvLicDetails").val(),

        chaName:
            $("#txtCHAName_AddAdvLicDetails").val(),

        sionNorms:
            $("#txtSionNorms_AddAdvLicDetails").val(),

        chip:
            $("#ddlChip_AddAdvLicDetails").val(),

        normsFixed:
            $("#ddlNormsFixed_AddAdvLicDetails").val(),

        normsFixedDate:
            $("#txtNormsFixedDate_AddAdvLicDetails").val(),

        advFixationApplied:
            $("#ddlAdvFixationApplied_AddAdvLicDetails").val(),

        dateApplied:
            $("#txtDateApplied_AddAdvLicDetails").val(),

        fixed:
            $("#ddlFixed_AddAdvLicDetails").val(),

        fixedDate:
            $("#txtFixedDate_AddAdvLicDetails").val(),

        meetingNo:
            $("#txtMeetingNo_AddAdvLicDetails").val(),

        hqFileNo:
            $("#txtHQFileNo_AddAdvLicDetails").val(),

        licenseStatus:
            $("#txtLicenseStatus_AddAdvLicDetails").val(),

        importComplete:
            $("#ddlImportComplete_AddAdvLicDetails").val(),

        importCompleteDate:
            $("#txtImportCompleteDate_AddAdvLicDetails").val(),

        licenseRecdBackOn:
            $("#txtLicenseRecdBackOn_AddAdvLicDetails").val(),

        surrFiledDate:
            $("#txtSurrFiledDate_AddAdvLicDetails").val(),

        surrRcvdDate:
            $("#txtSurrRcvdDate_AddAdvLicDetails").val(),

        orderStatus:
            $("#txtOrderStatus_AddAdvLicDetails").val(),

        balToBeShipped:
            $("#ddlBalToBeShipped_AddAdvLicDetails").val(),

        dutyReadyPayment:
            $("#ddlDutyReadyPayment_AddAdvLicDetails").val(),

        excess:
            $("#txtExcess_AddAdvLicDetails").val(),

        dutyPaid:
            $("#ddlDutyPaid_AddAdvLicDetails").val(),

        dutyPaidOn:
            $("#txtDutyPaidOn_AddAdvLicDetails").val(),

        confirmByMerchant:
            $("#ddlConfirmByMerchant_AddAdvLicDetails").val(),

        mailSentDate:
            $("#txtMailSentDate_AddAdvLicDetails").val(),

        time:
            $("#txtTime_AddAdvLicDetails").val(),

        merchant:
            $("#txtMerchant_AddAdvLicDetails").val(),

        redemptionFiled:
            $("#ddlRedemptionFiled_AddAdvLicDetails").val(),

        redemptionFiledDate:
            $("#txtRedemptionFiledDate_AddAdvLicDetails").val(),

        deficiencyReason:
            $("#txtDeficiencyReason_AddAdvLicDetails").val(),

        redemptionRcvd:
            $("#ddlRedemptionRcvd_AddAdvLicDetails").val(),

        redemptionRcvdDate:
            $("#txtRedemptionRcvdDate_AddAdvLicDetails").val(),

        bondRegistered:
            $("#ddlBondRegistered_AddAdvLicDetails").val(),

        bondRegisteredDate:
            $("#txtBondRegisteredDate_AddAdvLicDetails").val(),

        bondCancelFiled:
            $("#ddlBondCancelFiled_AddAdvLicDetails").val(),

        bondCancelFiledDate:
            $("#txtBondCancelFiledDate_AddAdvLicDetails").val(),

        bondCancelled:
            $("#ddlBondCancelled_AddAdvLicDetails").val(),

        bondCancelledDate:
            $("#txtBondCancelledDate_AddAdvLicDetails").val(),

        bondStatus:
            $("#txtBondStatus_AddAdvLicDetails").val(),

        remarks:
            $("#txtRemarks_AddAdvLicDetails").val()

    };


    console.log(
        "[AddAdvanceLicense] Save Data:",
        data
    );


    showLoader("Saving Advance License Details...");


    setTimeout(function () {

        hideLoader();

        showSucess(
            "Saved Successfully",
            "Advance License details saved successfully.",
            
        );

    }, 500);

}
/*REFRESH CONFIRMATION */

function confirmRefreshAdvLicDetails() {

    showWarning(
           "Refresh?",
         "All entered data will be removed.",


    ).then(function (result) {

        if (result.isConfirmed) {

            refreshAddAdvLicDetails();

        }

    });

}
/*REFRESH*/

function refreshAddAdvLicDetails() {

    showLoader("Refreshing Advance License Details...");

    clearAdvLicForm();

    setTimeout(function () {

        hideLoader();

        showSuccess(
            "Refreshed",
            "Advance License details refreshed successfully.",
            
        );

    }, 400);

}
/*CLEAR FORM */

function clearAdvLicForm() {

    // Clear text inputs
    $(
        "#txtEntryNo_AddAdvLicDetails," +
        "#txtCompanyCode_AddAdvLicDetails," +
        "#txtDiarySerialNo_AddAdvLicDetails," +
        "#txtLicenseNo_AddAdvLicDetails," +
        "#txtLicenseDate_AddAdvLicDetails," +
        "#txtLicenseType_AddAdvLicDetails," +
        "#txtCLAFileNo_AddAdvLicDetails," +
        "#txtCLAFileDate_AddAdvLicDetails," +
        "#txtPort_AddAdvLicDetails," +
        "#txtCHAName_AddAdvLicDetails," +
        "#txtSionNorms_AddAdvLicDetails," +
        "#txtNormsFixedDate_AddAdvLicDetails," +
        "#txtDateApplied_AddAdvLicDetails," +
        "#txtFixedDate_AddAdvLicDetails," +
        "#txtMeetingNo_AddAdvLicDetails," +
        "#txtHQFileNo_AddAdvLicDetails," +
        "#txtLicenseStatus_AddAdvLicDetails," +
        "#txtImportCompleteDate_AddAdvLicDetails," +
        "#txtLicenseRecdBackOn_AddAdvLicDetails," +
        "#txtSurrFiledDate_AddAdvLicDetails," +
        "#txtSurrRcvdDate_AddAdvLicDetails," +
        "#txtOrderStatus_AddAdvLicDetails," +
        "#txtExcess_AddAdvLicDetails," +
        "#txtDutyPaidOn_AddAdvLicDetails," +
        "#txtMailSentDate_AddAdvLicDetails," +
        "#txtTime_AddAdvLicDetails," +
        "#txtMerchant_AddAdvLicDetails," +
        "#txtRedemptionFiledDate_AddAdvLicDetails," +
        "#txtDeficiencyReason_AddAdvLicDetails," +
        "#txtRedemptionRcvdDate_AddAdvLicDetails," +
        "#txtBondRegisteredDate_AddAdvLicDetails," +
        "#txtBondCancelFiledDate_AddAdvLicDetails," +
        "#txtBondCancelledDate_AddAdvLicDetails," +
        "#txtBondStatus_AddAdvLicDetails," +
        "#txtRemarks_AddAdvLicDetails"
    ).val("");


    // Clear selects
    $(
        "#ddlIGST_AddAdvLicDetails," +
        "#ddlChip_AddAdvLicDetails," +
        "#ddlNormsFixed_AddAdvLicDetails," +
        "#ddlAdvFixationApplied_AddAdvLicDetails," +
        "#ddlFixed_AddAdvLicDetails," +
        "#ddlImportComplete_AddAdvLicDetails," +
        "#ddlBalToBeShipped_AddAdvLicDetails," +
        "#ddlDutyReadyPayment_AddAdvLicDetails," +
        "#ddlDutyPaid_AddAdvLicDetails," +
        "#ddlConfirmByMerchant_AddAdvLicDetails," +
        "#ddlRedemptionFiled_AddAdvLicDetails," +
        "#ddlRedemptionRcvd_AddAdvLicDetails," +
        "#ddlBondRegistered_AddAdvLicDetails," +
        "#ddlBondCancelFiled_AddAdvLicDetails," +
        "#ddlBondCancelled_AddAdvLicDetails"
    ).val("");


    // Clear Flatpickr
    $(
        "#txtLicenseDate_AddAdvLicDetails," +
        "#txtCLAFileDate_AddAdvLicDetails," +
        "#txtNormsFixedDate_AddAdvLicDetails," +
        "#txtDateApplied_AddAdvLicDetails," +
        "#txtFixedDate_AddAdvLicDetails," +
        "#txtImportCompleteDate_AddAdvLicDetails," +
        "#txtLicenseRecdBackOn_AddAdvLicDetails," +
        "#txtSurrFiledDate_AddAdvLicDetails," +
        "#txtSurrRcvdDate_AddAdvLicDetails," +
        "#txtDutyPaidOn_AddAdvLicDetails," +
        "#txtMailSentDate_AddAdvLicDetails," +
        "#txtRedemptionFiledDate_AddAdvLicDetails," +
        "#txtRedemptionRcvdDate_AddAdvLicDetails," +
        "#txtBondRegisteredDate_AddAdvLicDetails," +
        "#txtBondCancelFiledDate_AddAdvLicDetails," +
        "#txtBondCancelledDate_AddAdvLicDetails"
    ).each(function () {

        if (this._flatpickr) {
            this._flatpickr.clear();
        }

    });


    // Restore default value
    $("#txtLicenseType_AddAdvLicDetails")
        .val("SPL.ADV.LIC.");

}
