
$(document).ready(function () {

    initBOEAgainstFabric();

});
/*INITIALIZATION */

function initBOEAgainstFabric() {

    /* Date Picker */

    if ($("#txtDt_BOEAgainstFabric").length) {
         flatpickr("#txtDt_BOEAgainstFabric", {
         dateFormat: "d-m-Y",
         allowInput: true

     });

    }
    /* Initial Table */
    bindBOEAgainstFabricTable();
    /* Add Row */

    $("#btnAdd_BOEAgainstFabric").on("click", function () {

        // addBOEAgainstFabricRow();
        openBOEAgainstFabricRow();

    });
    /* Delete Row */

    $(document).on(
        "click",
        ".btnDeleteBOEAgainstFabric",
        function () {

            deleteBOEAgainstFabricRow(this);

        }
    );
    /* Save */

    $("#btnSave_BOEAgainstFabric").on("click", function () {

        saveBOEAgainstFabric();

    });
    $("#tblbodyBOEAgainstFabric").on(
        "click",
        ".btnEditBOEAgainstFabric",
        function () {

            const index =
                Number($(this).data("index"));

            openBOEAgainstFabricRow(index);
        }
    );
    /* Refresh */

    $("#btnRefresh_BOEAgainstFabric").on("click", function () {

        refreshBOEAgainstFabric();

    });
}
/*STATIC DATA */

const initialBOEAgainstFabricData = [

    {
        // supplier: "5660",
        // invoiceNo: "IP23111011",
        boeNo: "3549948",
        boeDate: "18-05-2024",
        boeQty: "20974.000",
        advanceLicenceNo: "0511022077",
        advanceLicDate: "16-11-2023",
        // desc: "LADIES SKIRT",
        // qty: "69"
    },

    {
        // supplier: "5661",
        // invoiceNo: "IP23111012",
        boeNo: "3549949",
        boeDate: "20-05-2024",
        boeQty: "18096.000",
        advanceLicenceNo: "0511022078",
        advanceLicDate: "18-11-2023",
        // desc: "LADIES BLOUSE",
        // qty: "50"
    },

    {
        // supplier: "5662",
        // invoiceNo: "IP23111013",
        boeNo: "3549950",
        boeDate: "22-05-2024",
        boeQty: "15420.000",
        advanceLicenceNo: "0511022079",
        advanceLicDate: "20-11-2023",
        // desc: "COTTON FABRIC",
        // qty: "42"
    },

    {
        // supplier: "5663",
        // invoiceNo: "IP23111014",
        boeNo: "3549951",
        boeDate: "25-05-2024",
        boeQty: "12580.000",
        advanceLicenceNo: "0511022080",
        advanceLicDate: "22-11-2023",
        // desc: "POLYESTER FABRIC",
        // qty: "35"
    },

    {
        // supplier: "5664",
        // invoiceNo: "IP23111015",
        boeNo: "3549952",
        boeDate: "28-05-2024",
        boeQty: "9800.000",
        advanceLicenceNo: "0511022081",
        advanceLicDate: "25-11-2023",
        // desc: "WOVEN FABRIC",
        // qty: "28"
    }

];

let boeAgainstFabricData =
    [...initialBOEAgainstFabricData];
/*BIND TABLE */

function bindBOEAgainstFabricTable() {

    if ($.fn.DataTable.isDataTable("#tblBOEAgainstFabric")) {

        $("#tblBOEAgainstFabric")
            .DataTable()
            .destroy();

    }


    const $tbody =
        $("#tblbodyBOEAgainstFabric");

    $tbody.empty();


    boeAgainstFabricData.forEach(function (item, index) {

        const row = `

            <tr data-index="${index}">

                    <td class="text-center">

                        <div class="d-flex justify-content-center align-items-center gap-1">
                    
                            <!-- EDIT -->
                            <button type="button"
                                    class="btn edit-btn btnEditBOEAgainstFabric"
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
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    
                                </svg>
                    
                            </button>
                    
                    
                            <!-- DELETE -->
                              <button
                                        type="button"
                                        class="row-btn bg-danger text-white delete-btn btnDeleteBOEAgainstFabric"
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
                                           <path d="M8 6V4h8v2"></path>
                                           <path d="M19 6l-1 14H6L5 6"></path>
                                           <path d="M10 11v6"></path>
                                           <path d="M14 11v6"></path>
                                
                                 </svg>
                              </button>
                    
                        </div>
                    
                    </td>


                <td>
                    ${index + 1}
                </td>


                <td>
                    ${escapeBOEFabric(item.boeNo)}
                </td>

                <td>
                    ${escapeBOEFabric(item.boeDate)}
                </td>

                <td class="text-end">
                    ${escapeBOEFabric(item.boeQty)}
                </td>

                <td>
                    ${escapeBOEFabric(item.advanceLicenceNo)}
                </td>

                <td>
                    ${escapeBOEFabric(item.advanceLicDate)}
                </td>


        
            </tr>

        `;

        $tbody.append(row);

    });

            const table = $('#tblBOEAgainstFabric').DataTable({
            paging: false,
            searching: false    ,
            ordering: false,
            // scrollY: Scroll,
            scrollCollapse: true,
            info: false,
            autoWidth: false,
            fixedHeader: false,
            dom: '<"datatable-search"f>rt'
        });

        setTimeout(() => table.columns.adjust().draw(), 100);


    // $("#tblBOEAgainstFabric").DataTable({

    //     pageLength: 5,

    //     lengthChange: false,

    //     searching: false,

    //     ordering: false,

    //     info: true,

    //     autoWidth: false,

    //     scrollX: true,

    //     language: {

    //         emptyTable: "No BOE Details Found."

    //     }

    // });

}
/*ADD ROW*/

let selectedBOEAgainstFabricIndex = null;

function openBOEAgainstFabricRow(index = null) {

    selectedBOEAgainstFabricIndex = index;

    const isEdit =
        index !== null &&
        boeAgainstFabricData[index];

    const item = isEdit
        ? boeAgainstFabricData[index]
        : {
            supplier: "",
            invoiceNo: "",
            boeNo: "",
            boeDate: "",
            boeQty: "",
            advanceLicenceNo: "",
            advanceLicDate: "",
            desc: "",
            qty: ""
        };


    const body = `

        <div class="row g-3">

            <!-- SUPPLIER -->
            <div class="col-md-4">
                <div class="field">
                    <label>Supplier</label>

                    <input type="text"
                           id="txtSupplier_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.supplier)}">
                </div>
            </div>


            <!-- INVOICE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>Invoice No</label>

                    <input type="text"
                           id="txtInvoiceNo_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.invoiceNo)}">
                </div>
            </div>


            <!-- BOE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>BOE No</label>

                    <input type="text"
                           id="txtBOENo_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.boeNo)}">
                </div>
            </div>


            <!-- BOE DATE -->
            <div class="col-md-4">
                <div class="field">
                    <label>BOE Date</label>

                    <input type="text"
                           id="txtBOEDate_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.boeDate)}">
                </div>
            </div>


            <!-- BOE QTY -->
            <div class="col-md-4">
                <div class="field">
                    <label>BOE Qty</label>

                    <input type="text"
                           id="txtBOEQty_BOEFabricModal"
                           class="form-control text-end"
                           value="${escapeBOEFabricAttribute(item.boeQty)}">
                </div>
            </div>


            <!-- ADVANCE LICENCE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>Advance Licence No</label>

                    <input type="text"
                           id="txtAdvanceLicenceNo_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.advanceLicenceNo)}">
                </div>
            </div>


            <!-- ADVANCE LIC DATE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Advance Lic Date</label>

                    <input type="text"
                           id="txtAdvanceLicDate_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.advanceLicDate)}">
                </div>
            </div>


            <!-- DESCRIPTION -->
            <div class="col-md-4">
                <div class="field">
                    <label>Description</label>

                    <input type="text"
                           id="txtDesc_BOEFabricModal"
                           class="form-control"
                           value="${escapeBOEFabricAttribute(item.desc)}">
                </div>
            </div>


            <!-- QTY -->
            <div class="col-md-4">
                <div class="field">
                    <label>Qty</label>

                    <input type="text"
                           id="txtQty_BOEFabricModal"
                           class="form-control text-end"
                           value="${escapeBOEFabricAttribute(item.qty)}">
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
                id="btnSaveBOEFabricModal">

            ${isEdit ? "Update" : "Add"}

        </button>

    `;


    openCommonModal({

        title: isEdit
            ? "Edit BOE Against Fabric"
            : "Add BOE Against Fabric",

        subtitle: isEdit
            ? "Update BOE details"
            : "Enter BOE details",

        size: "lg",

        body: body,

        footer: footer
    });


    /* DATE PICKERS */

    flatpickr("#txtBOEDate_BOEFabricModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });


    flatpickr("#txtAdvanceLicDate_BOEFabricModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });


    /* ADD / UPDATE */

    $("#btnSaveBOEFabricModal")
        .off("click.boeFabric")
        .on("click.boeFabric", function () {

            saveBOEAgainstFabricFromModal();

        });
}

function saveBOEAgainstFabricFromModal() {

    const item = {

        supplier:
            ($("#txtSupplier_BOEFabricModal").val() || "").trim(),

        invoiceNo:
            ($("#txtInvoiceNo_BOEFabricModal").val() || "").trim(),

        boeNo:
            ($("#txtBOENo_BOEFabricModal").val() || "").trim(),

        boeDate:
            ($("#txtBOEDate_BOEFabricModal").val() || "").trim(),

        boeQty:
            ($("#txtBOEQty_BOEFabricModal").val() || "").trim(),

        advanceLicenceNo:
            ($("#txtAdvanceLicenceNo_BOEFabricModal").val() || "").trim(),

        advanceLicDate:
            ($("#txtAdvanceLicDate_BOEFabricModal").val() || "").trim(),

        desc:
            ($("#txtDesc_BOEFabricModal").val() || "").trim(),

        qty:
            ($("#txtQty_BOEFabricModal").val() || "").trim()
    };


    /* VALIDATION */

    if (!item.supplier) {

        showWarning(
            "Supplier Required",
            "Please enter Supplier."
        );

        return;
    }


    if (!item.boeNo) {

        showWarning(
            "BOE Required",
            "Please enter BOE No."
        );

        return;
    }


    /* UPDATE */

    if (selectedBOEAgainstFabricIndex !== null) {

        boeAgainstFabricData[
            selectedBOEAgainstFabricIndex
        ] = item;

        bindBOEAgainstFabricTable();

        closeCommonModal();

        showSuccess(
            "Updated Successfully",
            "BOE details updated successfully."
        );

        return;
    }


    /* ADD */

    boeAgainstFabricData.push(item);

    bindBOEAgainstFabricTable();

    closeCommonModal();

    showSuccess(
        "Added Successfully",
        "BOE details added successfully."
    );
}
/*DELETE ROW */

function deleteBOEAgainstFabricRow(button) {

    const $row =
        $(button).closest("tr");


    /* New unsaved row */

    if ($row.hasClass("boe-fabric-new-row")) {

        bindBOEAgainstFabricTable();

        return;

    }


    const index =
        parseInt(
            $row.attr("data-index"),
            10
        );


    if (isNaN(index)) {
        return;
    }


    Swal.fire({

        title: "Delete Row?",

        text: "Do you want to delete this BOE row?",

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Yes, Delete",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        boeAgainstFabricData.splice(index, 1);


        bindBOEAgainstFabricTable();


        Swal.fire({

            icon: "success",

            title: "Deleted",

            text: "BOE row deleted successfully.",

            timer: 900,

            showConfirmButton: false

        });

    });

}
/*SAVE*/

function saveBOEAgainstFabric() {

    const entry =
        ($("#txtEntry_BOEAgainstFabric").val() || "")
            .trim();


    const date =
        ($("#txtDt_BOEAgainstFabric").val() || "")
            .trim();


    if (!entry) {

        Swal.fire({

            icon: "warning",

            title: "Entry Required",

            text: "Please enter Entry Number."

        });

        $("#txtEntry_BOEAgainstFabric").focus();

        return;

    }


    if (!date) {

        Swal.fire({

            icon: "warning",

            title: "Date Required",

            text: "Please select Date."

        });

        $("#txtDt_BOEAgainstFabric").focus();

        return;

    }


    Swal.fire({

        title: "Save Details?",

        text: "Do you want to save BOE details?",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Save",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        const data = {

            entry: entry,

            date: date,

            items: boeAgainstFabricData

        };


        console.log(
            "[BOE Against Fabric]",
            data
        );


        Swal.fire({

            icon: "success",

            title: "Saved Successfully",

            text: "BOE details saved successfully.",

            timer: 1200,

            showConfirmButton: false

        });

    });

}
/* REFRESH */

function refreshBOEAgainstFabric() {

    Swal.fire({

        title: "Refresh?",

        text: "All unsaved changes will be removed.",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Refresh",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        $("#txtEntry_BOEAgainstFabric").val("");


        const dateElement =
            document.getElementById(
                "txtDt_BOEAgainstFabric"
            );


        if (
            dateElement &&
            dateElement._flatpickr
        ) {

            dateElement._flatpickr.clear();

        }
        else {

            $("#txtDt_BOEAgainstFabric").val("");

        }


        /* Restore Static Data */

        boeAgainstFabricData =
            [...initialBOEAgainstFabricData];


        bindBOEAgainstFabricTable();


        Swal.fire({

            icon: "success",

            title: "Refreshed",

            text: "Form refreshed successfully.",

            timer: 900,

            showConfirmButton: false

        });

    });

}
/*HTML ESCAPE */

function escapeBOEFabric(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}

function escapeBOEFabricAttribute(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}