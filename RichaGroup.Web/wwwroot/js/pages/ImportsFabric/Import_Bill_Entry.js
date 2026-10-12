$(document).ready(function () {

    initImportBillEntry();

});
/*INITIALIZATION */

function initImportBillEntry() {

    initImportBillDate();

    bindDutyBillEntryTable();


    // Add Row
    $("#btnAdd_EntyImportPaymt").on("click", function () {

        // addNewDutyBillEntryRow();

        openDutyBillEntryModal();

    });


    // Main Save
    $("#btnSave_BOEAgainstFabric").on("click", function () {

        saveDutyBillEntry();

    });


    // Refresh
    $("#btnRefresh_DutyBillEntry").on("click", function () {

        refreshDutyBillEntry();

    });


    // Save newly added row
    $(document).on(
        "click",
        ".btnSaveDutyBillEntryRow",
        function () {

            const $row = $(this).closest("tr");

            saveDutyBillEntryRow($row);

        }
    );


    // Delete row
    $(document).on(
        "click",
        ".btnDeleteDutyBillEntryRow",
        function () {

            const $row = $(this).closest("tr");

            deleteDutyBillEntryRow($row);

        }
    ),

        $(document).on(
            "click",
            ".btnEditDutyBillEntryRow",
            function () {

                const index =
                    Number($(this).data("index"));

                openDutyBillEntryModal(index);
            }
        );

        // open a modal boe against fabric 
        $("#btnBOEDetails_EntyImportPaymt").on("click", function() {
             $('#addMenuModalBOEModal').modal('show')
        })
        $("#btnServiceBill_EntyImportPaymt").on("click", function() {
             $('#addMenuModalServiceBill').modal('show')
        })
        $("#btnEntryHelp").on("click", openEntryHelp);

}
function openEntryHelp() {
    $("#EntryNoModal").modal("show");
}

/*DATA */
const dutyBillEntryData = [

    {
        id: 1,
        supplier: "5660",
        invoiceNo: "IP231114011",
        invoiceDate: "18-10-2023",
        buyerName: "AEO",
        style: "2045",
        description: "52% LINEN 48% VISCOSE DYED WOVEN",
        qty: "23297.000",
        uom: "203",
        currency: "US$",
        price: "2.550",
        surcharge: "0.00",
        fobValue: "59407.35",
        awbNo: "SHIPSH23110911",
        awbDt: "18-10-2023",
        Kg:"2kg",
        Roll:"3",
        CBM:"-"
    },

    {
        id: 2,
        supplier: "5661",
        invoiceNo: "IP231114012",
        invoiceDate: "18-10-2023",
        buyerName: "AEO",
        style: "2046",
        description: "100% COTTON WOVEN FABRIC",
        qty: "12500.000",
        uom: "203",
        currency: "US$",
        price: "2.850",
        surcharge: "0.00",
        fobValue: "35625.00",
        awbNo: "SHIPSH23110912",
        awbDt: "19-10-2023",
         Kg:"6kg",
        Roll:"3",
        CBM:"-"
    },

    {
        id: 3,
        supplier: "5662",
        invoiceNo: "IP231114013",
        invoiceDate: "18-10-2023",
        buyerName: "AEO",
        style: "2047",
        description: "LADIES SKIRT FABRIC",
        qty: "18500.000",
        uom: "203",
        currency: "US$",
        price: "3.120",
        surcharge: "0.00",
        fobValue: "57720.00",
        awbNo: "SHIPSH23110913",
        awbDt: "20-10-2023",
         Kg:"1kg",
         Roll:"6",
         CBM:"-"
    },

    {
        id: 4,
        supplier: "5663",
        invoiceNo: "IP231114014",
        invoiceDate: "18-10-2023",
        buyerName: "AEO",
        style: "2048",
        description: "POLYESTER DYED WOVEN FABRIC",
        qty: "9800.000",
        uom: "203",
        currency: "US$",
        price: "2.950",
        surcharge: "0.00",
        fobValue: "28910.00",
        awbNo: "SHIPSH23110914",
        awbDt: "21-10-2023",
        Kg:"1kg",
         Roll:"6",
         CBM:"-" 
    },

    {
        id: 5,
        supplier: "5664",
        invoiceNo: "IP231114015",
        invoiceDate: "18-10-2023",
        buyerName: "AEO",
        style: "2049",
        description: "LINEN VISCOSE WOVEN FABRIC",
        qty: "15600.000",
        uom: "203",
        currency: "US$",
        price: "2.750",
        surcharge: "0.00",
        fobValue: "42900.00",
        awbNo: "SHIPSH23110915",
        awbDt: "22-10-2023",
        Kg:"1kg",
         Roll:"6",
         CBM:"-"
    }

];
/* DATE PICKER */

function initImportBillDate() {

    const dateElement =
        document.getElementById("txtDt_DutyBillEntry");

    if (!dateElement) {
        return;
    }


    flatpickr(dateElement, {

        dateFormat: "d-m-Y",

        allowInput: true

    });

}
/* BIND TABLE */

let dutyBillDataTable = null;


function bindDutyBillEntryTable() {

    if ($.fn.DataTable.isDataTable("#tblDutyBillEntry")) {

        $("#tblDutyBillEntry")
            .DataTable()
            .destroy();
    }

    const $tbody = $("#tblbodyDutyBillEntry");

    if (!$tbody.length) {
        console.error("#tblbodyDutyBillEntry not found.");
        return;
    }

    $tbody.empty();

    dutyBillEntryData.forEach(function (item, index) {

        const row = `
            <tr data-index="${index}">

                <!-- Action -->
                <td class="text-center">

                    <div class="d-flex justify-content-center align-items-center gap-1">

                        <!-- EDIT -->
                        <button type="button"
                                class="row-btn edit-btn btnEditDutyBillEntryRow"
                                data-index="${index}"
                                title="Edit">

                            <i class="fa-solid fa-pen-to-square"></i>

                        </button>

                        <!-- DELETE -->
                        <button type="button"
                                class="row-btn bg-danger text-white delete-btn btnDeleteDutyBillEntryRow"
                                data-id="${item.id}"
                                data-index="${index}"
                                title="Delete">

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </td>

                <!-- Sr No -->
                <td class="text-center">
                    ${index + 1}
                </td>

                <!-- Supplier -->
                <td>
                    ${escapeDutyBillHtml(item.supplier)}
                </td>

                <!-- Invoice No -->
                <td>
                    ${escapeDutyBillHtml(item.invoiceNo)}
                </td>
                <!-- Invoice Date -->
                <td>
                    ${escapeDutyBillHtml(item.invoiceDate)}
                </td>
                <!-- Buyer Name -->
                <td>
                    ${escapeDutyBillHtml(item.buyerName)}
                </td>

                <!-- Style -->
                <td>
                    ${escapeDutyBillHtml(item.style)}
                </td>

                <!-- Description -->
                <td title="${escapeDutyBillHtml(item.description)}">
                    ${escapeDutyBillHtml(item.description)}
                </td>

                <!-- Qty -->
                <td class="text-end">
                    ${escapeDutyBillHtml(item.qty)}
                </td>

                <!-- UOM -->
                <td class="text-end">
                    ${escapeDutyBillHtml(item.uom)}
                </td>

                <!-- Currency -->
                <td>
                    ${escapeDutyBillHtml(item.currency)}
                </td>

                <!-- Price -->
                <td class="text-end">
                    ${escapeDutyBillHtml(item.price)}
                </td>

                <!-- Surcharge -->
                <td class="text-end">
                    ${escapeDutyBillHtml(item.surcharge)}
                </td>

                <!-- FOB Value -->
                <td class="text-end">
                    ${escapeDutyBillHtml(item.fobValue)}
                </td>

                <!-- AWB No -->
                <td>
                    ${escapeDutyBillHtml(item.awbNo)}
                </td>

                <!-- AWB Date -->
                <td>
                    ${escapeDutyBillHtml(item.awbDt)}
                </td>
                <td>
                    ${item.Kg}
                </td>
                <td>
                    ${item.Roll}
                </td>
                <td>
                    ${item.CBM}
                </td>

            </tr>
        `;

        $tbody.append(row);

    });

    // DataTable
    dutyBillDataTable =
        $("#tblDutyBillEntry").DataTable({

            pageLength: 5,

            lengthChange: false,

            searching: false,

            ordering: false,

            info: true,

            autoWidth: false,

            scrollX: true,

            language: {
                emptyTable: "No Import Bill Entry Found."
            }

        });

}
// edit pa open a modal 
$(document).on("click", ".btnEditDutyBillEntryRow", function () {

    const index = $(this).data("index");

    // Selected row ka index save karna ho to
    selectedDutyBillEntryIndex = index;

    const modalElement = document.getElementById("addMenuModal");

    if (!modalElement) {
        console.error("#addMenuModal not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();

});
/*ADD NEW ROW */
let selectedDutyBillEntryIndex = null;

function openDutyBillEntryModal(index = null) {

    selectedDutyBillEntryIndex = index;

    const isEdit =
        index !== null &&
        dutyBillEntryData[index];

    const item = isEdit
        ? dutyBillEntryData[index]
        : {
            supplier: "",
            invoiceNo: "",
            invoiceDate: "",
            buyerName: "",
            style: "",
            description: "",
            qty: "",
            currency: "",
            price: "",
            surcharge: "",
            fobValue: "",
            awbNo: ""
        };


    const body = `

        <div class="row g-3">

            <!-- SUPPLIER -->
            <div class="col-md-4">
                <div class="field">
                    <label>Supplier</label>
                    <input type="text"
                           id="txtSupplier_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.supplier)}">
                </div>
            </div>

            <!-- INVOICE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>Invoice No</label>
                    <input type="text"
                           id="txtInvoiceNo_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.invoiceNo)}">
                </div>
            </div>

            <!-- INVOICE DATE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Invoice Date</label>
                    <input type="text"
                           id="txtInvoiceDate_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.invoiceDate)}">
                </div>
            </div>


            <!-- BUYER NAME -->
            <div class="col-md-4">
                <div class="field">
                    <label>Buyer Name</label>
                    <input type="text"
                           id="txtBuyerName_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.buyerName)}">
                </div>
            </div>


            <!-- STYLE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Style</label>
                    <input type="text"
                           id="txtStyle_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.style)}">
                </div>
            </div>


            <!-- DESCRIPTION -->
            <div class="col-md-4">
                <div class="field">
                    <label>Description</label>
                    <input type="text"
                           id="txtDescription_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.description)}">
                </div>
            </div>


            <!-- QTY -->
            <div class="col-md-4">
                <div class="field">
                    <label>Qty</label>
                    <input type="text"
                           id="txtQty_DutyBillModal"
                           class="form-control text-end"
                           value="${escapeDutyBillAttribute(item.qty)}">
                </div>
            </div>


            <!-- CURRENCY -->
            <div class="col-md-4">
                <div class="field">
                    <label>Currency</label>

                    <select id="txtCurrency_DutyBillModal"
                            class="form-select">

                        <option value="">Select</option>

                        <option value="US$"
                            ${item.currency === "US$" ? "selected" : ""}>
                            US$
                        </option>

                        <option value="INR"
                            ${item.currency === "INR" ? "selected" : ""}>
                            INR
                        </option>

                        <option value="EURO"
                            ${item.currency === "EURO" ? "selected" : ""}>
                            EURO
                        </option>

                    </select>
                </div>
            </div>


            <!-- PRICE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Price</label>
                    <input type="text"
                           id="txtPrice_DutyBillModal"
                           class="form-control text-end"
                           value="${escapeDutyBillAttribute(item.price)}">
                </div>
            </div>


            <!-- SURCHARGE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Surcharge</label>
                    <input type="text"
                           id="txtSurcharge_DutyBillModal"
                           class="form-control text-end"
                           value="${escapeDutyBillAttribute(item.surcharge)}">
                </div>
            </div>


            <!-- FOB VALUE -->
            <div class="col-md-4">
                <div class="field">
                    <label>FOB Value</label>
                    <input type="text"
                           id="txtFobValue_DutyBillModal"
                           class="form-control text-end"
                           value="${escapeDutyBillAttribute(item.fobValue)}">
                </div>
            </div>


            <!-- AWB -->
            <div class="col-md-4">
                <div class="field">
                    <label>AWB No</label>
                    <input type="text"
                           id="txtAwbNo_DutyBillModal"
                           class="form-control"
                           value="${escapeDutyBillAttribute(item.awbNo)}">
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
                id="btnSaveDutyBillModal">

            ${isEdit ? "Update" : "Add"}

        </button>

    `;


    openCommonModal({
        title: isEdit
            ? "Edit Import Bill Entry"
            : "Add Import Bill Entry",

        subtitle: isEdit
            ? "Update import bill details"
            : "Enter import bill details",

        size: "lg",

        body: body,

        footer: footer
    });


    /* INVOICE DATE */

    flatpickr("#txtInvoiceDate_DutyBillModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });


    /* SAVE / UPDATE */

    $("#btnSaveDutyBillModal")
        .off("click.dutyBill")
        .on("click.dutyBill", function () {

            saveDutyBillEntryFromModal();

        });
}

function saveDutyBillEntryFromModal() {

    const item = {

        supplier:
            ($("#txtSupplier_DutyBillModal").val() || "").trim(),

        invoiceNo:
            ($("#txtInvoiceNo_DutyBillModal").val() || "").trim(),

        invoiceDate:
            ($("#txtInvoiceDate_DutyBillModal").val() || "").trim(),

        buyerName:
            ($("#txtBuyerName_DutyBillModal").val() || "").trim(),

        style:
            ($("#txtStyle_DutyBillModal").val() || "").trim(),

        description:
            ($("#txtDescription_DutyBillModal").val() || "").trim(),

        qty:
            ($("#txtQty_DutyBillModal").val() || "").trim(),

        currency:
            ($("#txtCurrency_DutyBillModal").val() || "").trim(),

        price:
            ($("#txtPrice_DutyBillModal").val() || "").trim(),

        surcharge:
            ($("#txtSurcharge_DutyBillModal").val() || "").trim(),

        fobValue:
            ($("#txtFobValue_DutyBillModal").val() || "").trim(),

        awbNo:
            ($("#txtAwbNo_DutyBillModal").val() || "").trim()
    };


    /* VALIDATION */

    if (!item.supplier) {

        showWarning(
            "Supplier Required",
            "Please enter Supplier."
        );

        return;
    }


    if (!item.invoiceNo) {

        showWarning(
            "Invoice Required",
            "Please enter Invoice Number."
        );

        return;
    }


    if (!item.buyerName) {

        showWarning(
            "Buyer Name Required",
            "Please enter Buyer Name."
        );

        return;
    }


    if (!item.description) {

        showWarning(
            "Description Required",
            "Please enter Description."
        );

        return;
    }


    /* LOADER */

    showLoader(
        selectedDutyBillEntryIndex !== null
            ? "Updating Import Bill Entry..."
            : "Adding Import Bill Entry..."
    );


    setTimeout(function () {

        /* UPDATE */

        if (selectedDutyBillEntryIndex !== null) {

            item.srNo =
                dutyBillEntryData[selectedDutyBillEntryIndex].srNo;

            dutyBillEntryData[selectedDutyBillEntryIndex] =
                item;


            bindDutyBillEntryTable();

            hideLoader();

            closeCommonModal();

            showSuccess(
                "Updated Successfully",
                "Import bill entry updated successfully."
            );

            return;
        }


        /* ADD */

        item.srNo =
            dutyBillEntryData.length + 1;

        dutyBillEntryData.push(item);


        bindDutyBillEntryTable();

        hideLoader();

        closeCommonModal();

        showSuccess(
            "Added Successfully",
            "Import bill entry added successfully."
        );

    }, 400);
}
/*DELETE ROW */

function deleteDutyBillEntryRow($row) {

    Swal.fire({

        title: "Delete Row?",
        text: "Are you sure you want to delete this row?",
        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Yes, Delete",
        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        const index =
            $row.data("index");


        // New unsaved row
        if ($row.hasClass("duty-bill-new-row")) {

            $row.remove();

            updateDutyBillSerialNumbers();

            return;

        }


        // Existing row
        if (
            index !== undefined &&
            index !== null
        ) {

            dutyBillEntryData.splice(index, 1);

        }


        bindDutyBillEntryTable();


        Swal.fire({

            icon: "success",
            title: "Deleted",
            text: "Row deleted successfully.",
            timer: 900,
            showConfirmButton: false

        });

    });

}
/*SERIAL NUMBER */

function updateDutyBillSerialNumbers() {

    $("#tblbodyDutyBillEntry tr").each(function (index) {

        $(this)
            .find(".duty-bill-sr")
            .text(index + 1);

    });

}
/* MAIN SAVE */

function saveDutyBillEntry() {

            // showshowWarning(
            // "Warning",
            // "Do you want to create a GRN?"
            //   ).then((result) => {
            //       if (result.isConfirmed) {
            //           showSuccess(
            //               "Success",
            //               "Bill Tag Entry Save Successfully"
            //           )
            //       }
            //   });
            showWarning(
                "Warning",
                "Do you want to create a GRN?"
            )

    // const entry =
    //     ($("#txtEntry_DutyBillEntry").val() || "").trim();

    // const date =
    //     ($("#txtDt_DutyBillEntry").val() || "").trim();


    // if (!entry) {

    //     Swal.fire({

    //         icon: "warning",
    //         title: "Entry Required",
    //         text: "Please enter Entry Number."

    //     });

    //     $("#txtEntry_DutyBillEntry").focus();

    //     return;

    // }


    // if (!date) {

    //     Swal.fire({

    //         icon: "warning",
    //         title: "Date Required",
    //         text: "Please select Date."

    //     });

    //     $("#txtDt_DutyBillEntry").focus();

    //     return;

    // }


    // if (dutyBillEntryData.length === 0) {

    //     Swal.fire({

    //         icon: "warning",
    //         title: "No Data",
    //         text: "Please add at least one bill entry."

    //     });

    //     return;

    // }


    // const saveData = {

    //     entry: entry,

    //     date: date,

    //     items: dutyBillEntryData

    // };


    // console.log(
    //     "Duty Bill Entry:",
    //     saveData
    // );


    // Swal.fire({

    //     title: "Save Entry?",
    //     text: "Do you want to save this Import Bill Entry?",
    //     icon: "question",

    //     showCancelButton: true,

    //     confirmButtonText: "Yes, Save",
    //     cancelButtonText: "Cancel"

    // }).then(function (result) {

    //     if (!result.isConfirmed) {
    //         return;
    //     }


        /*
         * API call .
         *
         * Example:
         *
         * $.ajax({
         *     url: "/ImportsFabric/SaveDutyBillEntry",
         *     type: "POST",
         *     contentType: "application/json",
         *     data: JSON.stringify(saveData),
         *     success: function () {
         *
         *     }
         * });
         */


        // Swal.fire({

        //     icon: "success",
        //     title: "Saved Successfully",
        //     text: "Import Bill Entry saved successfully.",
        //     timer: 1200,
        //     showConfirmButton: false

        // });

    // });

}

/*  HTML ESCAPE*/

function escapeDutyBillHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}

function escapeDutyBillAttribute(value) {

    return String(
        value == null ? "" : value
    )
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

//help static data is here for help  style 
        const styleHelpData_DutyBillEntry = [
    {
        styleNo: "2045",
        orderNo: "ORD-1001",
        quantity: "23297"
    },
    {
        styleNo: "2046",
        orderNo: "ORD-1002",
        quantity: "12500"
    },
    {
        styleNo: "2047",
        orderNo: "ORD-1003",
        quantity: "18500"
    },
    {
        styleNo: "2048",
        orderNo: "ORD-1004",
        quantity: "9800"
    },
    {
        styleNo: "2049",
        orderNo: "ORD-1005",
        quantity: "15600"
    }
];
//bind style help table
        function bindStyleHelpTable_DutyBillEntry() {

    const $tbody =
        $("#tblbodyStyleHelp_DutyBillEntry");

    if (!$tbody.length) {
        console.error(
            "#tblbodyStyleHelp_DutyBillEntry not found."
        );
        return;
    }

    $tbody.empty();

    $.each(
        styleHelpData_DutyBillEntry,
        function (index, item) {

            $tbody.append(`
                <tr>

                    <td class="text-center">
                        <input type="checkbox"
                               class="form-check-input chkStyleHelp_DutyBillEntry"
                               data-index="${index}">
                    </td>

                    <td>${item.styleNo}</td>

                    <td>${item.orderNo}</td>

                    <td class="text-end">
                        ${item.quantity}
                    </td>

                </tr>
            `);

        }
    );
}

//open a modal
$(document).on(
    "click",
    "#btnStyleHelp_DutyBillEntry",
    function () {

        bindStyleHelpTable_DutyBillEntry();

        const modalElement =
            document.getElementById(
                "styleHelpModal_DutyBillEntry"
            );

        if (!modalElement) {
            console.error(
                "#styleHelpModal_DutyBillEntry not found."
            );
            return;
        }

        bootstrap.Modal
            .getOrCreateInstance(modalElement)
            .show();
    }
);
//select value
$(document).on(
    "change",
    ".chkStyleHelp_DutyBillEntry",
    function () {

        $(".chkStyleHelp_DutyBillEntry")
            .not(this)
            .prop("checked", false);

        if (!$(this).is(":checked")) {
            return;
        }

        const index =
            Number($(this).data("index"));

        const item =
            styleHelpData_DutyBillEntry[index];

        if (!item) {
            return;
        }

        $("#txtStyle_DutyBillEntry")
            .val(item.styleNo);

        bootstrap.Modal
            .getOrCreateInstance(
                document.getElementById(
                    "styleHelpModal_DutyBillEntry"
                )
            )
            .hide();
    }
);