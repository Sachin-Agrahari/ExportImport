$(document).ready(function () {

    initBOEImport();

});
/* INITIALIZATION */

function initBOEImport() {

    // Initial table
    bindBOEImportTable();


    // Add Item
    $("#btnAddItem_BOEImport").on("click", function () {

        // addBOEImportItem();

        //Modal Open 
        openBOEImportModal();

    });


    // Main Save
    $("#btnSave_BOEImport").on("click", function () {

        saveBOEImport();

    });


    // Refresh
    $("#btnRefresh_BOEImport").on("click", function () {

        refreshBOEImport();

    });


    // Edit
    $(document).on(
        "click",
        ".btnEditBOEImport",
        function () {

            const index =
                Number($(this).data("index"));

            // editBOEImportItem(index);
            openBOEImportModal(index);

        }
    );


    // Row Save
    $(document).on(
        "click",
        ".btnSaveBOEImportRow",
        function () {

            const index = $(this).data("index");

            saveBOEImportRow(index);

        }
    );


    // Delete
    $(document).on(
        "click",
        ".btnDeleteBOEImport",
        function () {

            const index = $(this).data("index");

            deleteBOEImportItem(index);

        }
    );

}
/*STATIC DATA */

let boeImportData = [

    {
        srNo: 1,
        boe: "BOE001",
        boeDate: "12-08-2026",
        boeAmount: "125000.00",
        terms: "FOB",
        invoiceNumber: "INV/001",
        invoiceDate: "10-08-2026",
        payRefNo: "0",
        isEditing: false
    },

    {
        srNo: 2,
        boe: "BOE002",
        boeDate: "15-08-2026",
        boeAmount: "98000.00",
        terms: "CIF",
        invoiceNumber: "INV/002",
        invoiceDate: "14-08-2026",
        payRefNo: "0",
        isEditing: false
    },

    {
        srNo: 3,
        boe: "BOE003",
        boeDate: "18-08-2026",
        boeAmount: "156500.00",
        terms: "FOB",
        invoiceNumber: "INV/003",
        invoiceDate: "17-08-2026",
        payRefNo: "0",
        isEditing: false
    },

    {
        srNo: 4,
        boe: "BOE004",
        boeDate: "20-08-2026",
        boeAmount: "75000.00",
        terms: "CIF",
        invoiceNumber: "INV/004",
        invoiceDate: "19-08-2026",
        payRefNo: "0",
        isEditing: false
    },

    {
        srNo: 5,
        boe: "BOE005",
        boeDate: "22-08-2026",
        boeAmount: "215000.00",
        terms: "FOB",
        invoiceNumber: "INV/005",
        invoiceDate: "21-08-2026",
        payRefNo: "0",
        isEditing: false
    },

    {
        srNo: 6,
        boe: "BOE006",
        boeDate: "24-08-2026",
        boeAmount: "87500.00",
        terms: "CIF",
        invoiceNumber: "INV/006",
        invoiceDate: "23-08-2026",
        payRefNo: "0",
        isEditing: false
    }

];


let initialboeImportData =
    [...boeImportData];

/* BIND TABLE */

function bindBOEImportTable() {

    const $tbody =
        $("#tblbodyBOEImport");

    $tbody.empty();


    boeImportData.forEach(function (item, index) {

        const isEditing =
            item.isEditing === true;


        const row = `

            <tr data-index="${index}">

                <!-- Sr No -->
                <td>
                    ${item.srNo}
                </td>


                <!-- BOE -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="boe"
                                   value="${escapeBOEAttribute(item.boe)}">
                          `

                : escapeBOEHtml(item.boe)

            }

                </td>


                <!-- BOE DATE -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="boeDate"
                                   value="${escapeBOEAttribute(item.boeDate)}">
                          `

                : escapeBOEHtml(item.boeDate)

            }

                </td>


                <!-- BOE AMOUNT -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input text-end"
                                   data-field="boeAmount"
                                   value="${escapeBOEAttribute(item.boeAmount)}">
                          `

                : escapeBOEHtml(item.boeAmount)

            }

                </td>


                <!-- TERMS -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="terms"
                                   value="${escapeBOEAttribute(item.terms)}">
                          `

                : escapeBOEHtml(item.terms)

            }

                </td>


                <!-- INVOICE NUMBER -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="invoiceNumber"
                                   value="${escapeBOEAttribute(item.invoiceNumber)}">
                          `

                : escapeBOEHtml(item.invoiceNumber)

            }

                </td>


                <!-- INVOICE DATE -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="invoiceDate"
                                   value="${escapeBOEAttribute(item.invoiceDate)}">
                          `

                : escapeBOEHtml(item.invoiceDate)

            }

                </td>


                <!-- PAY REF NO -->
                <td>

                    ${isEditing

                ? `
                            <input type="text"
                                   class="form-control form-control-sm boe-edit-input"
                                   data-field="payRefNo"
                                   value="${escapeBOEAttribute(item.payRefNo)}">
                          `

                : escapeBOEHtml(item.payRefNo)

            }

                </td>


                <!-- ACTION -->
                <td>

                    <div class="boe-action-buttons">

                        ${isEditing

                ?

                `
                            <!-- SAVE -->

                            <button type="button"
                                    class="btn btn-success edit-btn btnSaveBOEImportRow"
                                    data-index="${index}"
                                    title="Save">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="15"
                                     height="15"
                                     viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor"
                                     stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round">

                                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path>

                                    <polyline points="17 21 17 13 7 13 7 21"></polyline>

                                    <polyline points="7 3 7 8 15 8"></polyline>

                                </svg>

                            </button>
                            `

                :

                `
                            <!-- EDIT -->

                            <button type="button"
                                    class="edit-btn btnEditBOEImport"
                                    data-index="${index}"
                                    title="Edit">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="15"
                                     height="15"
                                     viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor"
                                     stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round">

                                    <path d="M12 20h9"></path>

                                    <path d="M16.5 3.5
                                             a2.121 2.121 0 0 1 3 3
                                             L7 19
                                             l-4 1
                                             1-4Z"></path>

                                </svg>

                            </button>
                            `
            }


                        <!-- DELETE -->

                           <button
                                type="button"
                                class="row-btn bg-danger text-white delete-btn btnDeleteBOEImport"
                                data-id="index${index}"
                                title="Delete">
                               <svg xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true">
                        
                                   <path d="M3 6h18"></path>
                                   <path d="M3 6h18"></path>
                                   <path d="M8 6V4h8v2"></path>
                                   <path d="M19 6l-1 14H6L5 6"></path>
                                   <path d="M10 11v6"></path>
                                   <path d="M14 11v6"></path>
                        
                        </svg>
                    </button>

                    </div>

                </td>

            </tr>

        `;


        $tbody.append(row);

    });

}

function openBOEImportModal(index = null) {

    selectedBOEImportIndex = index;


    const isEdit =
        index !== null &&
        boeImportData[index];


    const item = isEdit
        ? boeImportData[index]
        : {
            boe: "",
            boeDate: "",
            boeAmount: "",
            terms: "",
            invoiceNumber: "",
            invoiceDate: "",
            payRefNo: ""
        };


    const title =
        isEdit
            ? "Edit BOE Details"
            : "Add BOE Details";


    const subtitle =
        isEdit
            ? "Update selected BOE details"
            : "Enter BOE details";


    const body = `

        <div class="common-modal-section">

            <div class="row g-3">

                <!-- BOE -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            BOE <span class="req">*</span>
                        </label>

                        <input type="text"
                               id="txtBOE_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.boe)}"
                               placeholder="Enter BOE">

                    </div>

                </div>


                <!-- BOE DATE -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            BOE Date <span class="req">*</span>
                        </label>

                        <input type="text"
                               id="txtBOEDate_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.boeDate)}"
                               placeholder="DD-MM-YYYY">

                    </div>

                </div>


                <!-- BOE AMOUNT -->
                <div class="col-md-6">

                    <div class="field">

                        <label>
                            BOE Amount <span class="req">*</span>
                        </label>

                        <input type="text"
                               id="txtBOEAmount_BOEImport"
                               class="form-control text-end"
                               value="${escapeBOEAttribute(item.boeAmount)}"
                               placeholder="Enter amount">

                    </div>

                </div>


                <!-- TERMS -->
                <div class="col-md-6">

                    <div class="field">

                        <label>Terms</label>

                        <input type="text"
                               id="txtTerms_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.terms)}"
                               placeholder="Enter terms">

                    </div>

                </div>


                <!-- INVOICE NUMBER -->
                <div class="col-md-6">

                    <div class="field">

                        <label>Invoice Number</label>

                        <input type="text"
                               id="txtInvoiceNumber_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.invoiceNumber)}"
                               placeholder="Enter invoice number">

                    </div>

                </div>


                <!-- INVOICE DATE -->
                <div class="col-md-6">

                    <div class="field">

                        <label>Invoice Date</label>

                        <input type="text"
                               id="txtInvoiceDate_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.invoiceDate)}"
                               placeholder="DD-MM-YYYY">

                    </div>

                </div>


                <!-- PAY REF NO -->
                <div class="col-md-6">

                    <div class="field">

                        <label>Pay Ref No</label>

                        <input type="text"
                               id="txtPayRefNo_BOEImport"
                               class="form-control"
                               value="${escapeBOEAttribute(item.payRefNo)}"
                               placeholder="Enter payment reference">

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
                id="btnSaveBOEImportModal">
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


    // Date picker
    if ($("#txtBOEDate_BOEImport").length) {

        flatpickr("#txtBOEDate_BOEImport", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    if ($("#txtInvoiceDate_BOEImport").length) {

        flatpickr("#txtInvoiceDate_BOEImport", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    // Save / Update
    $("#btnSaveBOEImportModal")
        .off("click.boe")
        .on("click.boe", function () {

            saveBOEImportModal();

        });

}

/* SAVE CURRENT ROW */

function saveBOEImportModal() {

    const boe =
        ($("#txtBOE_BOEImport").val() || "").trim();

    const boeDate =
        ($("#txtBOEDate_BOEImport").val() || "").trim();

    const boeAmount =
        ($("#txtBOEAmount_BOEImport").val() || "").trim();

    const terms =
        ($("#txtTerms_BOEImport").val() || "").trim();

    const invoiceNumber =
        ($("#txtInvoiceNumber_BOEImport").val() || "").trim();

    const invoiceDate =
        ($("#txtInvoiceDate_BOEImport").val() || "").trim();

    const payRefNo =
        ($("#txtPayRefNo_BOEImport").val() || "").trim();


    // Validation

    if (!boe) {

        showWarning(
            "BOE Required",
            "Please enter BOE number."
        );

        return;
    }


    if (!boeDate) {

        showWarning(
            "BOE Date Required",
            "Please enter BOE date."
        );

        return;
    }


    if (!boeAmount) {

        showWarning(
            "BOE Amount Required",
            "Please enter BOE amount."
        );

        return;
    }


    const newItem = {

        srNo: 0,

        boe: boe,

        boeDate: boeDate,

        boeAmount: boeAmount,

        terms: terms,

        invoiceNumber: invoiceNumber,

        invoiceDate: invoiceDate,

        payRefNo: payRefNo,

        isEditing: false

    };


    // ==============================
    // EDIT
    // ==============================

    if (selectedBOEImportIndex !== null) {

        newItem.srNo =
            boeImportData[selectedBOEImportIndex].srNo;


        boeImportData[selectedBOEImportIndex] =
            newItem;


        bindBOEImportTable();

        closeCommonModal();


        showSuccess(
            "Updated Successfully",
            "BOE details updated successfully."
        );

        return;
    }


    // ==============================
    // ADD
    // ==============================

    newItem.srNo =
        boeImportData.length + 1;


    boeImportData.push(newItem);


    bindBOEImportTable();

    closeCommonModal();


    showSuccess(
        "Added Successfully",
        "BOE details added successfully."
    );

}

/*DELETE ITEM*/

function deleteBOEImportItem(index) {

    const item =
        boeImportData[index];


    if (!item) {

        return;

    }


    showWarning(
             "Delete Item?",
            "Do you want to delete this BOE item?",

    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        boeImportData.splice(index, 1);


        // Re-number Sr No
        boeImportData.forEach(
            function (item, i) {

                item.srNo = i + 1;

            }
        );


        bindBOEImportTable();


        showSuccess(
            "Deleted",
            "BOE item deleted successfully.",


        );

    });

}
/*  MAIN SAVE */

function saveBOEImport() {

    if (boeImportData.length === 0) {

        showWarning(
            "No Data",
            "There is no BOE data to save."

        );

        return;

    }


    // Check editing row
    const editingIndex =
        boeImportData.findIndex(
            function (item) {

                return item.isEditing === true;

            }
        );


    if (editingIndex !== -1) {

        showWarning(
           "Unsaved Row",
            "Please save the edited row before saving all BOE details."

        );

        return;

    }


    showWarning(
         "Save BOE Details?",
            "Do you want to save all BOE details?",

    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        console.log(
            "[BOEImport] Data:",
            boeImportData
        );


        /*
         * Yahan actual API/AJAX call
        
         */


       showSuccess(
            "Saved Successfully",
            "BOE details saved successfully.",

           

        );

    });

}
/* REFRESH */

function refreshBOEImport() {

    showWarning(
             "Refresh?",
            "All current changes will be refreshed.",


    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        // Reset Payment Request Numbers
        $(
            "#txtPaymentReqNo1_BOEImport, " +
            "#txtPaymentReqNo2_BOEImport, " +
            "#txtPaymentReqNo3_BOEImport, " +
            "#txtPaymentReqNo4_BOEImport, " +
            "#txtPaymentReqNo5_BOEImport"
        ).val("0");


        // Reset table to static data
        initialboeImportData =
            [...boeImportData];

        bindBOEImportTable();


        showSuccess(
             "Refreshed",
             "BOE Details refreshed successfully.",


        );

    });

}
/*HTML ESCAPE */

function escapeBOEHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}
/* ATTRIBUTE ESCAPE*/

function escapeBOEAttribute(value) {

    return String(value == null ? "" : value)

        .replace(/&/g, "&amp;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#39;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;");

}