$(document).ready(function () {

    initDutyPaymentRequest();
    //help to open a modal entry help 
    $("#btnEntryNo").on("click", function () {
        $('#addMenuModalEntryHelp').modal('show')
    })
    //for the help 
    bindLCHelpDutyPaymentTable();
    //click of add button open a modal
    $("#btnAddItem_DutyPaymentRequest").on("click", function () {
        $('#addMenuModalAdd').modal('show')
    })

});
/*DATA */

let dutyPaymentData = [

    {
        item: "FABRIC",
        style: "SACH12",
        invoiceNo: "INV-1001",
        invoiceDate: "12-04-2024",
        boe: "BOE-2547",
        boeDate: "25-04-2024",
        amount: "9806.00",
        unit: "PCS"
    },

    {
        item: "FABRIC",
        style: "SACH12",
        invoiceNo: "INV-1002",
        invoiceDate: "18-04-2024",
        boe: "BOE-2548",
        boeDate: "28-04-2024",
        amount: "12500.00",
        unit: "PCS"
    },

    {
        item: "FABRIC",
        style: "SACH12",
        invoiceNo: "INV-1003",
        invoiceDate: "22-04-2024",
        boe: "BOE-2549",
        boeDate: "02-05-2024",
        amount: "8750.00",
        unit: "MTR"
    },

    {
        item: "FABRIC",
        style: "SACH12",
        invoiceNo: "INV-1004",
        invoiceDate: "02-05-2024",
        boe: "BOE-2550",
        boeDate: "10-05-2024",
        amount: "15200.00",
        unit: "PCS"
    },

    {
        item: "FABRIC",
        style: "SACH12",
        invoiceNo: "INV-1005",
        invoiceDate: "10-05-2024",
        boe: "BOE-2551",
        boeDate: "18-05-2024",
        amount: "11250.00",
        unit: "KGS"
    }

];
/*INITIALIZATION */

function initDutyPaymentRequest() {

    /* DATE PICKER */

    if ($("#txtDt_DutyPaymentRequest").length) {

        flatpickr("#txtDt_DutyPaymentRequest", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    /* ADD ITEM */

    $("#btnAddItem_DutyPaymentRequest").on("click", function () {

        // addDutyPaymentItem();
        openDutyPaymentItemModal();

    });


    /* TOP SAVE */

    $("#btnSave_DutyPaymentRequest").on("click", function () {

        saveDutyPaymentRequest();

    });


    /* REFRESH */

    $("#btnRefresh_DutyPaymentRequest").on("click", function () {

       showWarning(
         "Are you sure?",
            "Do you want to refresh Duty Payment Request?",


        ).then(function (result) {

            if (result.isConfirmed) {

                refreshDutyPaymentRequest();

            }

        });

    });


    /* INITIAL DATATABLE */

    bindDutyPaymentTable();

}
/*BIND DATATABLE */

function bindDutyPaymentTable() {

    const tableId = "#tblDutyPaymentRequest";


    /* Destroy old DataTable */

    if ($.fn.DataTable.isDataTable(tableId)) {

        $(tableId)
            .DataTable()
            .clear()
            .destroy();

    }


    const $tbody =
        $("#tblbodyDutyPaymentRequest");

    $tbody.empty();


    /* CREATE ROWS */

    dutyPaymentData.forEach(function (item, index) {

        const row = `

            <tr data-index="${index}">

                 <td class="text-center">

                    <div class="d-flex
                                justify-content-center
                                align-items-center
                                gap-1">

                        <!-- DELETE ONLY -->

                        <button type="button"
                                class="row-btn bg-danger text-white delete-btn
                                       btnDeleteDutyPayment"
                                data-index="${index}"
                                title="Delete">

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

                    </div>

                </td>


                <td>
                    ${escapeDutyHtml(item.item)}
                </td>
                <td>
                    ${escapeDutyHtml(item.style)}
                </td>
                <td>
                    ${escapeDutyHtml(item.invoiceNo)}
                </td>

                <td>
                    ${escapeDutyHtml(item.invoiceDate)}
                </td>

                <td>
                    ${escapeDutyHtml(item.boe)}
                </td>

                <td>
                    ${escapeDutyHtml(item.boeDate)}
                </td>

                <td class="text-end">
                    ${escapeDutyHtml(item.amount)}
                </td>

                <td>
                    ${escapeDutyHtml(item.unit)}
                </td>

               
            </tr>

        `;

        $tbody.append(row);

    });


    /* INITIALIZE DATATABLE */

    $(tableId).DataTable({

        pageLength: 10,

        lengthChange: false,

        searching: true,

        ordering: true,

        info: true,

        autoWidth: false,

        responsive: false,

        scrollX: true,

        scrollY: "300px",

        scrollCollapse: true,

        language: {

            emptyTable:
                "No Duty Payment data available",

            search:
                "Search:",

            zeroRecords:
                "No matching records found"

        }

    });

}
/*ADD NEW ITEM */

let selectedDutyPaymentIndex = null;

function openDutyPaymentItemModal(index = null) {

    selectedDutyPaymentIndex = index;

    const isEdit =
        index !== null &&
        dutyPaymentData[index];

    const item = isEdit
        ? dutyPaymentData[index]
        : {
            item: "",
            invoiceNo: "",
            invoiceDate: "",
            boe: "",
            boeDate: "",
            amount: "",
            unit: ""
        };

    const title = isEdit
        ? "Edit Duty Payment Item"
        : "Add Duty Payment Item";

    const subtitle = isEdit
        ? "Update duty payment item details"
        : "Enter duty payment item details";

    const body = `

        <div class="row g-3">

            <!-- ITEM -->
            <div class="col-md-6">
                <div class="field">
                    <label>Item</label>
                    <input type="text"
                           id="txtItem_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.item)}">
                </div>
            </div>

            <!-- INVOICE NO -->
            <div class="col-md-6">
                <div class="field">
                    <label>Invoice No</label>
                    <input type="text"
                           id="txtInvoiceNo_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.invoiceNo)}">
                </div>
            </div>

            <!-- INVOICE DATE -->
            <div class="col-md-6">
                <div class="field">
                    <label>Invoice Date</label>
                    <input type="text"
                           id="txtInvoiceDate_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.invoiceDate)}">
                </div>
            </div>

            <!-- BOE -->
            <div class="col-md-6">
                <div class="field">
                    <label>BOE</label>
                    <input type="text"
                           id="txtBOE_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.boe)}">
                </div>
            </div>

            <!-- BOE DATE -->
            <div class="col-md-6">
                <div class="field">
                    <label>BOE Date</label>
                    <input type="text"
                           id="txtBOEDate_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.boeDate)}">
                </div>
            </div>

            <!-- AMOUNT -->
            <div class="col-md-6">
                <div class="field">
                    <label>Amount</label>
                    <input type="text"
                           id="txtAmount_DutyPaymentModal"
                           class="form-control text-end"
                           value="${escapeDutyAttribute(item.amount)}">
                </div>
            </div>

            <!-- UNIT -->
            <div class="col-md-6">
                <div class="field">
                    <label>Unit</label>
                    <input type="text"
                           id="txtUnit_DutyPaymentModal"
                           class="form-control"
                           value="${escapeDutyAttribute(item.unit)}">
                </div>
            </div>

        </div>
    `;

    const footer = `

        <button type="button"
                class="btn btn-secondary btn-sm"
                onclick="closeCommonModal()">
            Cancel
        </button>

        <button type="button"
                class="btn btn-primary btn-sm"
                id="btnSaveDutyPaymentModal">
            ${isEdit ? "Update" : "Add"}
        </button>

    `;

    openCommonModal({
        title: title,
        subtitle: subtitle,
        size: "md",
        body: body,
        footer: footer
    });

    /* DATE PICKERS */

    flatpickr("#txtInvoiceDate_DutyPaymentModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });

    flatpickr("#txtBOEDate_DutyPaymentModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });

    /* SAVE */

    $("#btnSaveDutyPaymentModal")
        .off("click.dutyPayment")
        .on("click.dutyPayment", function () {

            saveDutyPaymentItemFromModal();

        });
}
function saveDutyPaymentItemFromModal() {

    const item =
        ($("#txtItem_DutyPaymentModal").val() || "").trim();

    const invoiceNo =
        ($("#txtInvoiceNo_DutyPaymentModal").val() || "").trim();

    const invoiceDate =
        ($("#txtInvoiceDate_DutyPaymentModal").val() || "").trim();

    const boe =
        ($("#txtBOE_DutyPaymentModal").val() || "").trim();

    const boeDate =
        ($("#txtBOEDate_DutyPaymentModal").val() || "").trim();

    const amount =
        ($("#txtAmount_DutyPaymentModal").val() || "").trim();

    const unit =
        ($("#txtUnit_DutyPaymentModal").val() || "").trim();


    /* VALIDATION */

    if (!item) {
        showWarning(
            "Item Required",
            "Please enter item."
        );
        return;
    }

    if (!invoiceNo) {
        showWarning(
            "Invoice No Required",
            "Please enter invoice number."
        );
        return;
    }

    if (!invoiceDate) {
        showWarning(
            "Invoice Date Required",
            "Please enter invoice date."
        );
        return;
    }


    const newItem = {

        item: item,

        invoiceNo: invoiceNo,

        invoiceDate: invoiceDate,

        boe: boe,

        boeDate: boeDate,

        amount: amount,

        unit: unit

    };


    /* ADD */

    showLoader("Adding Duty Payment Item...");

    setTimeout(function () {

        dutyPaymentData.push(newItem);

        bindDutyPaymentTable();

        hideLoader();

        closeCommonModal();

        showSuccess(
            "Added Successfully",
            "Duty payment item added successfully."
        );

    }, 500);
}

/*  DELETE ITEM */

$(document).on(
    "click",
    ".btnDeleteDutyPayment",
    function () {

        const index =
            Number($(this).data("index"));


        Swal.fire({

            title: "Delete Item?",

            text: "Do you want to delete this item?",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Yes, Delete",

            cancelButtonText: "Cancel",

            reverseButtons: true

        }).then(function (result) {

            if (!result.isConfirmed) {

                return;

            }


            dutyPaymentData.splice(index, 1);


            bindDutyPaymentTable();


            Swal.fire({

                icon: "success",

                title: "Deleted",

                text: "Item deleted successfully.",

                timer: 900,

                showConfirmButton: false

            });

        });

    }
);
//help data 
const lcHelpDutyPaymentData = [
    {
        id: 1,
        entryNo: "ENT-1001",
        entryDate: "01-09-2025",
        party: "ABC EXPORTS",
        paymentFor: "Import Duty"
    },
    {
        id: 2,
        entryNo: "ENT-1002",
        entryDate: "05-09-2025",
        party: "XYZ TEXTILES",
        paymentFor: "Custom Duty"
    },
    {
        id: 3,
        entryNo: "ENT-1003",
        entryDate: "10-09-2025",
        party: "GLOBAL FABRICS",
        paymentFor: "IGST"
    },
    {
        id: 4,
        entryNo: "ENT-1004",
        entryDate: "15-09-2025",
        party: "AEO SUPPLIERS",
        paymentFor: "Import Duty"
    },
    {
        id: 5,
        entryNo: "ENT-1005",
        entryDate: "20-09-2025",
        party: "BELK TRADERS",
        paymentFor: "Custom Duty"
    }
];

//bind table 
function bindLCHelpDutyPaymentTable() {

    const $tbody = $("#tblbodyLCHelpDutyPayment");

    if (!$tbody.length) {
        console.error("tblbodyLCHelpDutyPayment not found.");
        return;
    }

    $tbody.empty();

    $.each(lcHelpDutyPaymentData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkLCHelpDutyPayment"
                           data-index="${index}">
                </td>

                <td>
                    ${item.entryNo || "—"}
                </td>

                <td>
                    ${item.entryDate || "—"}
                </td>

                <td>
                    ${item.party || "—"}
                </td>

                <td>
                    ${item.paymentFor || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
/* TOP SAVE */
// function saveDutyPaymentRequest() {

//     Swal.fire({

//         title: "Save Duty Payment Request?",

//         text: "Do you want to save Duty Payment Request?",

//         icon: "question",

//         showCancelButton: true,

//         confirmButtonText: "Yes, Save",

//         cancelButtonText: "Cancel"

//     }).then(function (result) {

//         if (!result.isConfirmed) {

//             return;

//         }


//         const data = {

//             entryNo:
//                 $("#txtEntryNo_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             date:
//                 $("#txtDt_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             partyNo:
//                 $("#txtPartyNo_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             partyName:
//                 $("#txtPartyName_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             paymentFor:
//                 $("#txtPaymentFor_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             chaName:
//                 $("#txtCHAName_DutyPaymentRequest")
//                     .val()
//                     .trim(),

//             portName:
//                 $("#txtPort_PhysicalDeliveryTag")
//                     .val()
//                     .trim(),

//             items:
//                 dutyPaymentData

//         };


//         console.log(
//             "[DutyPaymentRequest] Save Data:",
//             data
//         );


//         showLoader(
//             "Saving Duty Payment Request..."
//         );


//         setTimeout(function () {

//             hideLoader();


//             Swal.fire({

//                 icon: "success",

//                 title: "Saved Successfully",

//                 text:
//                     "Duty Payment Request saved successfully.",

//                 timer: 1200,

//                 showConfirmButton: false

//             });

//         }, 500);

//     });

// }
/*REFRESH */

// function refreshDutyPaymentRequest() {

//     showLoader(
//         "Refreshing Duty Payment Request..."
//     );


//     try {

//         $("#txtEntryNo_DutyPaymentRequest").val("");

//         $("#txtPartyNo_DutyPaymentRequest").val("");

//         $("#txtPartyName_DutyPaymentRequest").val("");

//         $("#txtPaymentFor_DutyPaymentRequest").val("");

//         $("#txtCHAName_DutyPaymentRequest").val("");

//         $("#txtPort_PhysicalDeliveryTag").val("");


//         const dateElement =
//             document.querySelector(
//                 "#txtDt_DutyPaymentRequest"
//             );


//         if (
//             dateElement &&
//             dateElement._flatpickr
//         ) {

//             dateElement._flatpickr.clear();

//         }


//         /* CLEAR TABLE */

//         dutyPaymentData = [];


//         bindDutyPaymentTable();


//         setTimeout(function () {

//             hideLoader();


//             Swal.fire({

//                 icon: "success",

//                 title: "Refreshed",

//                 text:
//                     "Duty Payment Request refreshed successfully.",

//                 timer: 1000,

//                 showConfirmButton: false

//             });

//         }, 400);


//     }
//     catch (error) {

//         console.error(
//             "[DutyPaymentRequest] Refresh failed:",
//             error
//         );


//         hideLoader();


//         Swal.fire({

//             icon: "error",

//             title: "Refresh Failed",

//             text:
//                 "Unable to refresh Duty Payment Request."

//         });

//     }

// }
/* HTML ESCAPE*/

function escapeDutyHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}


function escapeDutyAttribute(value) {

    return String(
        value == null ? "" : value
    )
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}