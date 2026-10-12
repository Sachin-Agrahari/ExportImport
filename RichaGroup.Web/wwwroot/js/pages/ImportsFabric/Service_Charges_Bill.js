/*SERVICE CHARGES BILL */

let serviceChargesData = [
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03554",
        netAmount: "33583.00",
        billNo: "CC/CHN/SI30825",
        billDate: "13-07-2023",
        billAmount: "33583.00",
        assValue: "1078263.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03451",
        netAmount: "21051.00",
        billNo: "CC/CHN/SI35436",
        billDate: "27-03-2024",
        billAmount: "21051.00",
        assValue: "648761.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03452",
        netAmount: "783.00",
        billNo: "FF/CHN/SI35474",
        billDate: "27-03-2024",
        billAmount: "783.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03453",
        netAmount: "9901.00",
        billNo: "FF/CHN/SI35475",
        billDate: "27-03-2024",
        billAmount: "9901.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03450",
        netAmount: "18361.00",
        billNo: "FF/CHN/SI35437",
        billDate: "28-03-2024",
        billAmount: "18361.00",
        assValue: "431094.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03493",
        netAmount: "528.00",
        billNo: "FF/CHN/SI35580",
        billDate: "28-03-2024",
        billAmount: "528.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03494",
        netAmount: "7767.00",
        billNo: "FF/CHN/SI35581",
        billDate: "28-03-2024",
        billAmount: "7767.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03496",
        netAmount: "354.00",
        billNo: "FF/CHN/SI35587",
        billDate: "29-03-2024",
        billAmount: "354.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    },
    {
        company: "Gaurav",
        finalBillPass: "12-04-2024",
        billPass: "12-04-2024",
        grnNo: "RCPT23-09-03495",
        netAmount: "6316.00",
        billNo: "FF/CHN/SI35589",
        billDate: "28-03-2024",
        billAmount: "6316.00",
        assValue: "0.00",
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS"
    }
];

/*DOCUMENT READY */

$(document).ready(function () {

    initServiceChargesBill();

});

/*INITIALIZATION */

function initServiceChargesBill() {




    // Add
    $("#btnAdd_ServiceChargesBill").on("click", function () {

        addServiceChargesBill();

    });
    // Refresh
    $("#btnRefresh_ServiceChargesBill").on("click", function () {

        refreshServiceChargesBill();

    });

    // Main Save
    $("#btnSave_ServiceChargesBill").on("click", function () {

        saveServiceChargesBill();

    });

    // Table
    bindServiceChargesBillTable();

}
/*DATE PICKER */

function initServiceChargesDate(selector) {

    const element =
        document.querySelector(selector);

    if (!element) {
        return;
    }

    if (element._flatpickr) {
        return;
    }

    flatpickr(element, {

        dateFormat: "d-m-Y",
        allowInput: true

    });

}
/* BIND TABLE*/

function bindServiceChargesBillTable() {

    const $tbody =
        $("#tblbodyServiceChargesBill");

    $tbody.empty();


    serviceChargesData.forEach(function (item, index) {

        const row = `

    <tr data-index="${index}">

        <!-- Select -->
        <td class="text-center">
            <input type="checkbox"
                   class="form-check-input chkService"
                   data-index="${index}">
        </td>

        <!-- Company -->
        <td>
            ${escapeServiceHtml(item.company)}
        </td>

        <!-- Final Bill Pass -->
        <td>
            ${escapeServiceHtml(item.finalBillPass)}
        </td>

        <!-- Bill Pass -->
        <td>
            ${escapeServiceHtml(item.billPass)}
        </td>

        <!-- GRN No -->
        <td>
            ${escapeServiceHtml(item.grnNo)}
        </td>

        <!-- Net Amount -->
        <td class="text-end">
            ${escapeServiceHtml(item.netAmount)}
        </td>

        <!-- Bill Number -->
        <td>
            ${escapeServiceHtml(item.billNo)}
        </td>

        <!-- Bill Date -->
        <td>
            ${escapeServiceHtml(item.billDate)}
        </td>

        <!-- Bill Amount -->
        <td class="text-end">
            ${escapeServiceHtml(item.billAmount)}
        </td>

        <!-- Ass Value -->
        <td class="text-end">
            ${escapeServiceHtml(item.assValue)}
        </td>

        <!-- Party -->
        <td>
            ${escapeServiceHtml(item.party)}
        </td>

        <!-- Party Name -->
        <td>
            ${escapeServiceHtml(item.partyName)}
        </td>

    </tr>

`;
        $tbody.append(row);

    });
    /*DATATABLE*/

    if ($.fn.DataTable.isDataTable("#tblServiceChargesBill")) {

        $("#tblServiceChargesBill")
            .DataTable()
            .destroy();

    }


    $("#tblServiceChargesBill").DataTable({

        pageLength: 10,

        lengthChange: false,

        searching: true,

        ordering: true,

        info: true,

        autoWidth: false,

        scrollX: true,

        language: {

            emptyTable: "No Service Charges Bill found."

        }

    });

}
/* EDIT */

$(document).on(
    "click",
    ".service-edit-btn",
    function () {
                const index =
                    Number($(this).attr("data-index"));

                openServiceChargesEditModal(index);

    }
);

function openServiceChargesEditModal(index) {

    const item = serviceChargesData[index];

    if (!item) {
        showError(
            "Bill Not Found",
            "Selected Service Charges Bill was not found."
        );
        return;
    }


    const body = `

        <div class="common-modal-section">

            <div class="row g-3">

                <!-- Company -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Company
                        </label>

                        <input type="text"
                               id="txtCompany_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.company)}">

                    </div>

                </div>


                <!-- Final Bill Pass -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Final Bill Pass
                        </label>

                        <input type="text"
                               id="txtFinalBillPass_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.finalBillPass)}">

                    </div>

                </div>


                <!-- Bill Pass -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Bill Pass
                        </label>

                        <input type="text"
                               id="txtBillPass_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.billPass)}">

                    </div>

                </div>


                <!-- GRN No -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            GRN No
                        </label>

                        <input type="text"
                               id="txtGRNNo_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.grnNo)}">

                    </div>

                </div>


                <!-- Net Amount -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Net Amount
                        </label>

                        <input type="text"
                               id="txtNetAmount_ServiceChargesModal"
                               class="form-control text-end"
                               value="${escapeServiceAttribute(item.netAmount)}">

                    </div>

                </div>


                <!-- Bill Number -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Bill Number
                        </label>

                        <input type="text"
                               id="txtBillNumber_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.billNo)}">

                    </div>

                </div>


                <!-- Bill Date -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Bill Date
                        </label>

                        <input type="text"
                               id="txtBillDate_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.billDate)}">

                    </div>

                </div>


                <!-- Bill Amount -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Bill Amount
                        </label>

                        <input type="text"
                               id="txtBillAmount_ServiceChargesModal"
                               class="form-control text-end"
                               value="${escapeServiceAttribute(item.billAmount)}">

                    </div>

                </div>


                <!-- Ass Value -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Ass Value
                        </label>

                        <input type="text"
                               id="txtAssValue_ServiceChargesModal"
                               class="form-control text-end"
                               value="${escapeServiceAttribute(item.assValue)}">

                    </div>

                </div>


                <!-- Party -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Party
                        </label>

                        <input type="text"
                               id="txtParty_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.party)}">

                    </div>

                </div>


                <!-- Party Name -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            Party Name
                        </label>

                        <input type="text"
                               id="txtPartyName_ServiceChargesModal"
                               class="form-control"
                               value="${escapeServiceAttribute(item.partyName)}">

                    </div>

                </div>

            </div>

        </div>

    `;


    const footer = `

        <button type="button"
                class="btn btn-outline btn-sm"
                onclick="closeCommonModal()">

            Cancel

        </button>


        <button type="button"
                class="btn btn-primary btn-sm"
                id="btnUpdateServiceChargesModal">

            Update

        </button>

    `;


    // Open Common Modal
    openCommonModal({

        title: "Edit Service Charges Bill",

        subtitle: "Update service charges bill details",

        size: "lg",

        body: body,

        footer: footer

    });


    // Update button
    $("#btnUpdateServiceChargesModal")
        .off("click.serviceCharges")
        .on("click.serviceCharges", function () {

            updateServiceChargesFromModal(index);

        });

}

function updateServiceChargesFromModal(index) {

    const item = serviceChargesData[index];

    if (!item) {
        return;
    }


    item.company =
        ($("#txtCompany_ServiceChargesModal").val() || "").trim();

    item.finalBillPass =
        ($("#txtFinalBillPass_ServiceChargesModal").val() || "").trim();

    item.billPass =
        ($("#txtBillPass_ServiceChargesModal").val() || "").trim();

    item.grnNo =
        ($("#txtGRNNo_ServiceChargesModal").val() || "").trim();

    item.netAmount =
        ($("#txtNetAmount_ServiceChargesModal").val() || "").trim();

    item.billNo =
        ($("#txtBillNumber_ServiceChargesModal").val() || "").trim();

    item.billDate =
        ($("#txtBillDate_ServiceChargesModal").val() || "").trim();

    item.billAmount =
        ($("#txtBillAmount_ServiceChargesModal").val() || "").trim();

    item.assValue =
        ($("#txtAssValue_ServiceChargesModal").val() || "").trim();

    item.party =
        ($("#txtParty_ServiceChargesModal").val() || "").trim();

    item.partyName =
        ($("#txtPartyName_ServiceChargesModal").val() || "").trim();


    // Refresh table
    bindServiceChargesBillTable();


    // Close modal
    closeCommonModal();


    // Success
    showSuccess(
        "Updated Successfully",
        "Service Charges Bill updated successfully."
    );

}

$(document).on(
    "click",
    "#service-delete-btn",
    function () {

        const index =
            Number($(this).attr("data-index"));

        deleteServiceChargesBill(index);

    }
);

function deleteServiceChargesBill(index) {

    const item =
        serviceChargesData[index];

    if (!item) {
        return;
    }


    showWarning(
          "Delete Bill?",
          "Do you want to delete this Service Charges Bill?",

       
     ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        serviceChargesData.splice(index, 1);


        bindServiceChargesBillTable();


         showSuccess( 
               "Deleted",
             "Bill deleted successfully.",
             
        );

    });

}

/* ADD */

function addServiceChargesBill() {

    const entry =
        ($("#txtEntry_ServiceChargesBill").val() || "").trim();

    const date =
        ($("#txtdate_ServiceChargesBill").val() || "").trim();

    const supplier =
        ($("#txtSupplier_ServiceChargesBill").val() || "").trim();

    const invoiceNo =
        ($("#txtInvNo_ServiceChargesBill").val() || "").trim();


    if (!entry) {

        showWarning( 
           "Entry Required",
              "Please enter Entry."
        );

        $("#txtEntry_ServiceChargesBill").focus();

        return;

    }


    if (!date) {

        showWarning( 
            "Date Required",
             "Please select Date."
        );

        $("#txtdate_ServiceChargesBill").focus();

        return;

    }


    if (!supplier) {

        showWarning( 
             "Supplier Required",
             "Please enter Supplier."
         );

        $("#txtSupplier_ServiceChargesBill").focus();

        return;

    }

    if (!invoiceNo) {

        showWarning( 
             "Invoice Required",
            "Please enter Invoice Number."
         );

        $("#txtInvNo_ServiceChargesBill").focus();

        return;

    }
    const newItem = {

        company: supplier,

        finalBillPass: date,

        billPass: date,

        grnNo: entry,

        netAmount: "0.00",

        billNo: invoiceNo,

        billDate: date,

        billAmount: "0.00",

        assValue: "0.00",

        party: "",

        partyName: supplier

    };


    serviceChargesData.push(newItem);


    bindServiceChargesBillTable();


    // Clear form
    $("#txtEntry_ServiceChargesBill").val("");
    $("#txtdate_ServiceChargesBill").val("");
    $("#txtSupplier_ServiceChargesBill").val("");
    $("#txtInvNo_ServiceChargesBill").val("");


    showSuccess( 
          "Added",
            "Service Charges Bill added successfully.",
         

    );

}
/*MAIN SAVE */

function saveServiceChargesBill() {

    if (!serviceChargesData.length) {

        showWarning( 
              "No Data",
              "There is no bill data to save."

         );

        return;
    }


    showWarning(
          "Save Bills?",
        "Do you want to save Service Charges Bills?",
 
     ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader("Saving Service Charges Bills...");


        setTimeout(function () {

            hideLoader();


            console.log(
                "Service Charges Bills:",
                serviceChargesData
            );

            showSuccess( 
                "Saved Successfully",
                 "Service Charges Bills saved successfully.",
                 
  );

        }, 700);

    });

}
/* REFRESH */

function refreshServiceChargesBill() {

    showWarning(
         "Are you sure?",
            "Do you want to refresh Service Charges Bill?",
 

     ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader("Refreshing Service Charges Bill...");


        setTimeout(function () {

            serviceChargesData = [];


            // Clear form
            $("#txtEntry_ServiceChargesBill").val("");
            $("#txtdate_ServiceChargesBill").val("");
            $("#txtSupplier_ServiceChargesBill").val("");
            $("#txtInvNo_ServiceChargesBill").val("");


            bindServiceChargesBillTable();


            hideLoader();


            showSuccess( 
                "Refreshed",
                  "Service Charges Bill refreshed successfully.",
                 
  );

        }, 500);

    });

}
/* TABLE INPUT*/

function createServiceInput(field, value) {

    return `
        <input type="text"
               class="service-table-input"
               data-field="${field}"
               value="${escapeServiceAttribute(value)}">
    `;

}
/*  HTML ESCAPE*/

function escapeServiceHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}
/* ATTRIBUTE ESCAPE */

function escapeServiceAttribute(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}