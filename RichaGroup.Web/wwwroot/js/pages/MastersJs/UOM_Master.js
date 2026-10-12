$(document).ready(function () {

    initUOMMaster();

});

// Page Initialization

function initUOMMaster() {

    // Refresh Button
    $("#btnRefresh_UOMMaster").on("click", function () {

        showWarning(
             "Are you sure?",
            "Do you want to refresh the UOM Master?",
           
        ).then(function (result) {

            if (result.isConfirmed) {
                refreshUOMMaster();
            }

        });

    });

    // Add Button
    $("#btnAdd_UOMMaster").on("click", function () {

        if (selectedUOMIndex === null) {
            addUOM();
        } else {
            updateUOM();
        }

    });
    //initUOMMasterDataTable();
    bindUOMMasterData();

}

// Static UOM Data

const UOMMasterData = [

    {
        unitMsr: "BADGE",
        description: "BADGE",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "BLANK",
        description: "NA",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "BOX",
        description: "BOX",
        volumeWt: "999.00000000",
        volumeCBM: "999.00000000"
    },

    {
        unitMsr: "CMS",
        description: "CENTIMETERS",
        volumeWt: "6000.00000000",
        volumeCBM: "1.00000000"
    },

    {
        unitMsr: "CONE",
        description: "CONE",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "DOZ",
        description: "Dozen",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "FEET",
        description: "FEET",
        volumeWt: "0.21180500",
        volumeCBM: "283.46456600"
    },

    {
        unitMsr: "FOLDE",
        description: "FOLDER",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "GROSS",
        description: "GROSS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "INCH",
        description: "INCHES",
        volumeWt: "366.00000000",
        volumeCBM: "16.38706400"
    },

    {
        unitMsr: "JOB",
        description: "JOB",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "KGS",
        description: "KILOGRAMS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "MTR",
        description: "METERS",
        volumeWt: "0.00650000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "NOS.",
        description: "NUMBERS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "P/100",
        description: "PER 100",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "P1000",
        description: "PER 1000",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "PAIR",
        description: "PAIR",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "PCS",
        description: "Pieces",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "PKTS",
        description: "PACKETS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "POUND",
        description: "POUNDS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "PPACK",
        description: "",
        volumeWt: "",
        volumeCBM: ""
    },

    {
        unitMsr: "ROLTS",
        description: "ROLLS",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "SET",
        description: "Sets",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "SME",
        description: "SQUARE METER",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "SQM",
        description: "SQUARE METER",
        volumeWt: "0.00000000",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "YDS",
        description: "Yards",
        volumeWt: "0.00784465",
        volumeCBM: "0.00000000"
    },

    {
        unitMsr: "YRDS",
        description: "Yards",
        volumeWt: "0.00784465",
        volumeCBM: "0.00000000"
    }

];

// DataTable Variable

let UOMMasterTable = null;

// Bind Data Into TBODY

function bindUOMMasterData() {

    const $tbody = $("#tblbodyUOM_Master");

    if (!$tbody.length) {

        console.error(
            "[UOMMaster] #tblbodyUOM_Master not found."
        );

        return;
    }

    $tbody.empty();

    $.each(UOMMasterData, function (index, item) {

        const row = `
            <tr>
             <td class="text-center">

                <button
                    type="button"
                    class="row-btn edit-btn btn-edit-uom"
                    data-index="${index}"
                    title="Edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>

                </td>
                <td>
                    ${item.unitMsr}
                </td>

                <td title="${item.description}">
                    ${item.description}
                </td>

                <td class="text-end">
                    ${item.volumeWt}
                </td>

                <td class="text-end">
                    ${item.volumeCBM}
                </td>

               

            </tr>
        `;

        $tbody.append(row);

    });

}

// Initialize DataTable

//function initUOMMasterDataTable() {

//    showLoader("Loading UOM Master...");

//    try {

//        if (UOMMasterTable) {

//            UOMMasterTable.destroy();

//            UOMMasterTable = null;
//        }

//        bindUOMMasterData();

//        UOMMasterTable = new DataTable(
//            "#tblUOMMaster",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No UOM Master records found",

//                    zeroRecords:
//                        "No matching records found",

//                    search:
//                        "Search:"

//                }

//            }
//        );

//        hideLoader();

//    }
//    catch (error) {

//        console.error(
//            "[UOMMaster] DataTable initialization failed:",
//            error
//        );

//        hideLoader();

//    }

//}
// Refresh UOM Master

function refreshUOMMaster() {

    showLoader("Refreshing UOM Master...");

    try {

        if (UOMMasterTable) {

            UOMMasterTable.destroy();

            UOMMasterTable = null;
        }

        bindUOMMasterData();

        UOMMasterTable = new DataTable(
            "#tblUOMMaster",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No UOM Master records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );

        setTimeout(function () {

            hideLoader();

        }, 500);

    }
    catch (error) {

        console.error(
            "[UOMMaster] Refresh failed:",
            error
        );

        hideLoader();

    }

}
// Edit Button

$("#tblbodyUOM_Master").on(
    "click",
    ".btn-edit-uom",
    function () {

        const index = Number($(this).data("index"));

        const item = UOMMasterData[index];

        if (!item) return;

        selectedUOMIndex = index;

        $("#txtUnitMsrUOM_Master").val(item.unitMsr);
        $("#txtdescUOM_Master").val(item.description);
        $("#txtVolumnWtUOM_Master").val(item.volumeWt);
        $("#txtVolumnCBMUOM_Master").val(item.volumeCBM);

        $("#btnAdd_UOMMaster").text("Update");
        $('#addUomMasterModal').modal('show')
    }
);

function addUOM() {

    const unitMsr = $("#txtUnitMsrUOM_Master").val().trim();
    const description = $("#txtdescUOM_Master").val().trim();
    const volumeWt = $("#txtVolumnWtUOM_Master").val().trim();
    const volumeCBM = $("#txtVolumnCBMUOM_Master").val().trim();

    if (!unitMsr) {
        showWarning(
            "Unit of Msr Required",
            "Please enter Unit of Msr."
        );
        return;
    }

    if (!description) {
        showWarning(
            "Description Required",
            "Please enter description."
        );
        return;
    }

    UOMMasterData.push({
        unitMsr: unitMsr,
        description: description,
        volumeWt: volumeWt,
        volumeCBM: volumeCBM
    });

    reloadUOMMasterTable();

    clearUOMForm();

    showSuccess(
        "Added Successfully",
        "UOM added successfully."
    );
}
function updateUOM() {

    if (selectedUOMIndex === null) return;

    const unitMsr = $("#txtUnitMsrUOM_Master").val().trim();
    const description = $("#txtdescUOM_Master").val().trim();
    const volumeWt = $("#txtVolumnWtUOM_Master").val().trim();
    const volumeCBM = $("#txtVolumnCBMUOM_Master").val().trim();

    if (!unitMsr) {
        showWarning(
            "Unit of Msr Required",
            "Please enter Unit of Msr."
        );
        return;
    }

    if (!description) {
        showWarning(
            "Description Required",
            "Please enter description."
        );
        return;
    }

    UOMMasterData[selectedUOMIndex].unitMsr = unitMsr;
    UOMMasterData[selectedUOMIndex].description = description;
    UOMMasterData[selectedUOMIndex].volumeWt = volumeWt;
    UOMMasterData[selectedUOMIndex].volumeCBM = volumeCBM;

    // Existing function use karo
    refreshUOMMaster();

    selectedUOMIndex = null;

    clearUOMForm();

    $("#btnAdd_UOMMaster").text("Add");

    showSuccess(
        "Updated Successfully",
        "UOM updated successfully."
    );
}

function clearUOMForm() {

    $("#txtUnitMsrUOM_Master").val("");
    $("#txtdescUOM_Master").val("");
    $("#txtVolumnWtUOM_Master").val("");
    $("#txtVolumnCBMUOM_Master").val("");

}

// Add
$("#btnAdd").on("click", function () {
    $('#addUomMasterModal').modal('show')
});