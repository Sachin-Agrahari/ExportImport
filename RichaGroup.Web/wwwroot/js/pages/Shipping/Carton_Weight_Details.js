$(document).ready(function () {

    /* initCartonWeightDetails();*/
    bindCartonWeightDetails();

    $("#btnGenerateCtn_CartonWeightDetails").on("click", function () {

        showInfo(
             "Generate Carton",
             "You are being redirected to the Generate Carton page.",
        ).then(function (result) {

            if (result.isConfirmed) {

                window.location.href = "/Shipping/Generate_Carton";

            }

        });

    });

});
/*INITIALIZATION*/

function initCartonWeightDetails() {

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

    //// Bind static data
    //bindCartonWeightDetails();

    // Refresh
    $("#btnRefresh_CartonWeightDetails").on(
        "click",
        function () {

            refreshCartonWeightDetails();

        }
    );

    // Save
    $("#btnSave_CartonWeightDetails").on(
        "click",
        function () {

            saveCartonWeightDetails();

        }
    );

}
/* STATIC DATA */

const cartonWeightDetailsData = [

    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "37.000",
        uom: "CMS",
        ctns: "331",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "3988.160",
        cartonNetWeight: "3319.360"
    },

    {
        cartonType: "199",
        length: "50.000",
        width: "38.000",
        height: "13.000",
        uom: "CMS",
        ctns: "21",
        cartonWeight: "0.000",
        grossWeight: "0.000",
        cartonGrossWeight: "0.000",
        cartonNetWeight: "0.000"
    }

];
/*BIND TABLE*/
function bindCartonWeightDetails() {

    const $tbody =
        $("#tblbodyCartonWeightDetails");

    $tbody.empty();


    cartonWeightDetailsData.forEach(function (item, index) {

        const row = `

            <tr>
             <!-- ACTION -->
                <td class="text-center">



                        <!-- EDIT -->
                        <button type="button"
                                class="edit-btn btn-sm btnEditCartonWeight"
                                data-index="${index}"
                                title="Edit">

                             <i class="fa-solid fa-pen-to-square"></i>

                        </button>

                        <button type="button" class="edit-btn btn-sm deleteButton"
                            style="border:1px solid #ea1a02; color: #ea1a02"
                            title="Delete">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"> 
                            <path d="M3 6h18"/> 
                            <path d="M8 6V4 a2 2 0 0 1 2-2h4 a2 2 0 0 1 2 2v2"/> 
                            <path d="M19 6v14 a2 2 0 0 1-2 2H7 a2 2 0 0 1-2-2V6"/> 
                            <line x1="10" y1="11" x2="10" y2="17"/> 
                            <line x1="14" y1="11" x2="14" y2="17"/> 
                         </svg>
                     </button>
                </td>
                <td>
                    ${escapeCartonHtml(item.cartonType)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.length)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.width)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.height)}
                </td>

                <td>
                    ${escapeCartonHtml(item.uom)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.ctns)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.cartonWeight)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.grossWeight)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.cartonGrossWeight)}
                </td>

                <td class="text-end">
                    ${escapeCartonHtml(item.cartonNetWeight)}
                </td>


               

            </tr>

        `;

        $tbody.append(row);

    });


  /*  initializeCartonDataTable();*/

    updateCartonWeightSummary();

}

/* DATATABLE */

let cartonWeightTable = null;


function initializeCartonDataTable() {

    if (cartonWeightTable) {

        cartonWeightTable.destroy();

        cartonWeightTable = null;

    }


    cartonWeightTable = new DataTable(
        "#tblCartonWeightDetails",
        {
            paging: true,
            searching: true,
            ordering: false,
            info: false,
            lengthChange: false,
            pageLength: 10,
            scrollX: true,

            language: {
                emptyTable:
                    "No carton weight records found",

                zeroRecords:
                    "No matching records found",

                search:
                    "Search:"
            }
        }
    );

}
/* SUMMARY */

function updateCartonWeightSummary() {


    $("#txtVolumeCBM_CartonWeightDetails")
        .val("23.790");

    $("#txtVolumeWeight_CartonWeightDetails")
        .val("3964.670");

    $("#txtGrossWeight_CartonWeightDetails")
        .val("3988.160");

    $("#txtNetWeight_CartonWeightDetails")
        .val("3319.360");

}
/*EDIT*/
$("#tblbodyCartonWeightDetails").on(
    "click",
    ".btnEditCartonWeight",
    function () {

        const index =
            Number($(this).data("index"));

        openCartonWeightEditModal(index);

    }
);
let selectedCartonWeightIndex = null;

function openCartonWeightEditModal(index) {

    const item = cartonWeightDetailsData[index];

    if (!item) {
        showError(
            "Record Not Found",
            "Carton weight details not found."
        );
        return;
    }

    selectedCartonWeightIndex = index;

    const body = `

        <div class="row g-3">

            <!-- CARTON TYPE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Carton Type</label>

                    <input type="text"
                           id="txtCartonType_CartonWeightModal"
                           class="form-control"
                           value="${escapeCartonAttribute(item.cartonType)}">
                </div>
            </div>


            <!-- LENGTH -->
            <div class="col-md-4">
                <div class="field">
                    <label>Length</label>

                    <input type="text"
                           id="txtLength_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.length)}">
                </div>
            </div>


            <!-- WIDTH -->
            <div class="col-md-4">
                <div class="field">
                    <label>Width</label>

                    <input type="text"
                           id="txtWidth_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.width)}">
                </div>
            </div>


            <!-- HEIGHT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Height</label>

                    <input type="text"
                           id="txtHeight_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.height)}">
                </div>
            </div>


            <!-- UOM -->
            <div class="col-md-4">
                <div class="field">
                    <label>UOM</label>

                    <input type="text"
                           id="txtUom_CartonWeightModal"
                           class="form-control"
                           value="${escapeCartonAttribute(item.uom)}">
                </div>
            </div>


            <!-- CTNS -->
            <div class="col-md-4">
                <div class="field">
                    <label>CTNS</label>

                    <input type="text"
                           id="txtCtns_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.ctns)}">
                </div>
            </div>


            <!-- CARTON WEIGHT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Carton Weight</label>

                    <input type="text"
                           id="txtCartonWeight_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.cartonWeight)}">
                </div>
            </div>


            <!-- GROSS WEIGHT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Gross Weight</label>

                    <input type="text"
                           id="txtGrossWeight_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.grossWeight)}">
                </div>
            </div>


            <!-- CARTON GROSS WEIGHT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Carton Gross Weight</label>

                    <input type="text"
                           id="txtCartonGrossWeight_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.cartonGrossWeight)}">
                </div>
            </div>


            <!-- CARTON NET WEIGHT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Carton Net Weight</label>

                    <input type="text"
                           id="txtCartonNetWeight_CartonWeightModal"
                           class="form-control text-end"
                           value="${escapeCartonAttribute(item.cartonNetWeight)}">
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
                id="btnUpdateCartonWeightModal">

            Update

        </button>

    `;


    openCommonModal({

        title: "Edit Carton Weight",

        subtitle: "Update carton weight details",

        size: "lg",

        body: body,

        footer: footer

    });


    $("#btnUpdateCartonWeightModal")
        .off("click.cartonWeight")
        .on("click.cartonWeight", function () {

            updateCartonWeightFromModal();

        });
}
//update
function updateCartonWeightFromModal() {

    if (selectedCartonWeightIndex === null) {
        return;
    }

    const item =
        cartonWeightDetailsData[selectedCartonWeightIndex];

    if (!item) {
        return;
    }


    item.cartonType =
        ($("#txtCartonType_CartonWeightModal").val() || "").trim();

    item.length =
        ($("#txtLength_CartonWeightModal").val() || "").trim();

    item.width =
        ($("#txtWidth_CartonWeightModal").val() || "").trim();

    item.height =
        ($("#txtHeight_CartonWeightModal").val() || "").trim();

    item.uom =
        ($("#txtUom_CartonWeightModal").val() || "").trim();

    item.ctns =
        ($("#txtCtns_CartonWeightModal").val() || "").trim();

    item.cartonWeight =
        ($("#txtCartonWeight_CartonWeightModal").val() || "").trim();

    item.grossWeight =
        ($("#txtGrossWeight_CartonWeightModal").val() || "").trim();

    item.cartonGrossWeight =
        ($("#txtCartonGrossWeight_CartonWeightModal").val() || "").trim();

    item.cartonNetWeight =
        ($("#txtCartonNetWeight_CartonWeightModal").val() || "").trim();


    showLoader("Updating Carton Weight...");


    setTimeout(function () {

        bindCartonWeightDetails();

        hideLoader();

        closeCommonModal();

        selectedCartonWeightIndex = null;

        showSuccess(
            "Updated Successfully",
            "Carton weight details updated successfully."
        );

    }, 400);
}

/* DELETE*/

$(document).on(
    "click",
    ".btnDeleteCartonWeight",
    function () {

        const index =
            parseInt(
                $(this).attr("data-index"),
                10
            );

        const item =
            cartonWeightDetailsData[index];

        if (!item) {
            return;
        }


        showWarning(
             "Delete Carton?",

                "Do you want to delete carton type " +
                item.cartonType +
                "?",

        ).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }


            // Remove record
            cartonWeightDetailsData.splice(
                index,
                1
            );


            // Re-bind table
            bindCartonWeightDetails();


            // Success message
            showSuccess(
               "Deleted",
               
                    "Carton details deleted successfully.",

            );

        });

    }
);
/* SAVE*/

function saveCartonWeightDetails() {

    showWarning(
             "Save Carton Details?",
            "Do you want to save carton weight details?",

    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        const data = {

            invoiceNo:
                $("#txtInvoiceNo_CartonWeightDetails")
                    .val(),

            buyerName:
                $("#txtBuyerName_CartonWeightDetails")
                    .val(),

            adi:
                $("#txtAdi_CartonWeightDetails")
                    .val(),

            quantity:
                $("#txtQuantity_CartonWeightDetails")
                    .val(),

            invoiceValue:
                $("#txtInvoiceValue_CartonWeightDetails")
                    .val(),

            currency:
                $("#ddlCurrency_CartonWeightDetails")
                    .val(),

            fob:
                $("#txtFOB_CartonWeightDetails")
                    .val(),

            transferInvoice:
                $("#ddlTransferInvoice_CartonWeightDetails")
                    .val(),

            plist:
                $("#ddlPlist_CartonWeightDetails")
                    .val(),

            totalCtn:
                $("#txtTotalCtn_CartonWeightDetails")
                    .val(),

            lot:
                $("#txtLot_CartonWeightDetails")
                    .val(),

            from:
                $("#txtFrom_CartonWeightDetails")
                    .val(),

            to:
                $("#txtTo_CartonWeightDetails")
                    .val(),

            volumeCBM:
                $("#txtVolumeCBM_CartonWeightDetails")
                    .val(),

            volumeWeight:
                $("#txtVolumeWeight_CartonWeightDetails")
                    .val(),

            grossWeight:
                $("#txtGrossWeight_CartonWeightDetails")
                    .val(),

            netWeight:
                $("#txtNetWeight_CartonWeightDetails")
                    .val(),

            cartonDetails:
                cartonWeightDetailsData

        };


        console.log(
            "[CartonWeight] Save Data:",
            data
        );


        showSuccess(
           "Saved Successfully",
                "Carton Weight Details saved successfully.",
 );

    });

}
/* REFRESH*/

function refreshCartonWeightDetails() {

    showWarning(
            "Are you sure?",

            "Do you want to refresh Carton Weight Details?",


    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader(
            "Refreshing Carton Weight Details..."
        );


        setTimeout(function () {

            // Clear fields

            $(
                "#txtInvoiceNo_CartonWeightDetails," +
                "#txtBuyerName_CartonWeightDetails," +
                "#txtAdi_CartonWeightDetails," +
                "#txtQuantity_CartonWeightDetails," +
                "#txtInvoiceValue_CartonWeightDetails," +
                "#txtFOB_CartonWeightDetails," +
                "#txtTotalCtn_CartonWeightDetails," +
                "#txtLot_CartonWeightDetails," +
                "#txtFrom_CartonWeightDetails," +
                "#txtTo_CartonWeightDetails"
            ).val("");


            // Select2 reset

            $(
                "#ddlCurrency_CartonWeightDetails," +
                "#ddlTransferInvoice_CartonWeightDetails," +
                "#ddlPlist_CartonWeightDetails"
            )
                .val("")
                .trigger("change");


            // Re-bind static data

            bindCartonWeightDetails();


            hideLoader();


            showSuccess(
               "Refreshed",
              "Carton Weight Details refreshed successfully.",


            );

        }, 500);

    });

}
/* HTML ESCAPE */
function escapeCartonHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}

function escapeCartonAttribute(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}