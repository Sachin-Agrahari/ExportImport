$(document).ready(function () {

    initRateMaster();

});

// Page Initialization

function initRateMaster() {

    // Select2

    $("#ddlCodeFlying_Master, #ddlAirlineFlying_Master").select2({
        width: "100%",
        dropdownAutoWidth: false
    });

    // Refresh Button


    $("#btnRefresh_FlyingMaster").on("click", function () {

        showWarning(
           "Are you sure?",
            "Do you want to refresh the Flying Master?",
             
         ).then(function (result) {

            if (result.isConfirmed) {
                refreshFlyingMaster();
            }

        });

    });
    $("#tblbodyFlying_Master").on(
        "click",
        ".btn-edit-flying-master",
        function () {

            const index = Number($(this).data("index"));

            editTableRowAirline(index);
        }
    );

    $("#btnAdd_FlyingMaster").on("click", function () {

        if (selectedFlyingMasterIndex === null) {
            addFlyingMaster();
        } else {
            updateFlyingMaster();
        }

    });

    // Initial Table Load

    /*initFlyingMasterDataTable();*/
    bindFlyingMasterData();
}

// Static Data
const flyingMasterData = [

    {
        code: "001",
        airline: "Air India"
    },

    {
        code: "002",
        airline: "Emirates"
    },

    {
        code: "045",
        airline: "United Airlines"
    },

    {
        code: "021",
        airline: "British Airways"
    },

    {
        code: "064",
        airline: "Lufthansa"
    },

    {
        code: "086",
        airline: "Qatar Airways"
    },

    {
        code: "US$",
        airline: "American Airlines"
    },

    {
        code: "864",
        airline: "Virgin Atlantic"
    },

    {
        code: "646",
        airline: "Singapore Airlines"
    },

    {
        code: "675",
        airline: "Air France"
    },

    {
        code: "001",
        airline: "Delta Airlines"
    },

    {
        code: "006",
        airline: "British Airways"
    }
];

// DataTable Variable


let flyingMasterTable = null;
//variables
let selectedFlyingMasterIndex = null;

// Bind Data Into TBODY

function bindFlyingMasterData() {

    const $tbody = $("#tblbodyFlying_Master");

    if (!$tbody.length) {

        console.error(
            "[FlyingMaster] #tblbodyFlying_Master not found."
        );

        return;
    }

    $tbody.empty();


    // Bind rows
    $.each(flyingMasterData, function (index, item) {

        const row = `
            <tr>
             <td class="text-center">
                    <button
                        type="button"
                          class="row-btn edit-btn btn-edit-flying-master"
                         data-index="${index}"
                        title="Edit"
                       >
                          <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>${item.code}</td>
                <td>${item.airline}</td>
            </tr>
        `;

        $tbody.append(row);

    });
}

// Initialize DataTable

//function initFlyingMasterDataTable() {

//    showLoader("Loading Flying Master...");

//    try {
//        // Destroy existing DataTable

//        if (flyingMasterTable) {

//            flyingMasterTable.destroy();

//            flyingMasterTable = null;
//        }
//        // Bind data into tbody

//        bindFlyingMasterData();
//        // Initialize DataTable

//        flyingMasterTable = new DataTable("#tblFlyingMaster", {

//            paging: true,

//            searching: true,

//            ordering: false,

//            info: false,

//            lengthChange: false,

//            pageLength: 10,

//            language: {

//                emptyTable: "No Flying Master records found",

//                zeroRecords: "No matching records found",

//                search: "Search:"

//            }

//        });


//        hideLoader();

//    }
//    catch (error) {

//        console.error(
//            "[FlyingMaster] DataTable initialization failed:",
//            error
//        );

//        hideLoader();
//    }
//}

// Refresh Flying Master

function refreshFlyingMaster() {

    showLoader("Refreshing Flying Master...");

    try {
        // Destroy current DataTable

        if (flyingMasterTable) {

            flyingMasterTable.destroy();

            flyingMasterTable = null;
        }
        // Re-bind tbody

        bindFlyingMasterData();

        // Reinitialize DataTable

        flyingMasterTable = new DataTable("#tblFlyingMaster", {

            paging: true,

            searching: true,

            ordering: false,

            info: false,

            lengthChange: false,

            pageLength: 10,

            language: {

                emptyTable: "No Flying Master records found",

                zeroRecords: "No matching records found",

                search: "Search:"

            }

        });

        setTimeout(function () {

            hideLoader();

        }, 500);

    }
    catch (error) {

        console.error(
            "[FlyingMaster] Refresh failed:",
            error
        );

        hideLoader();
    }
}

//edit table row 
function editTableRowAirline(index) {

    const item = flyingMasterData[index];

    if (!item) return;

    selectedFlyingMasterIndex = index;

    $("#txtCodeFlying_Master").val(item.code);
    $("#txtAirlineFlying_Master").val(item.airline);

    $("#btnAdd_FlyingMaster").text("Update");
    $('#addAirineMasterModal').modal('show')
}
function addFlyingMaster() {

    const code = $("#txtCodeFlying_Master").val().trim();
    const airline = $("#txtAirlineFlying_Master").val().trim();

    if (!code || !airline) {

        showWarning(
            "Required",
            "Please enter Code and Airline."
        );

        return;
    }

    flyingMasterData.push({
        code: code,
        airline: airline
    });

    bindFlyingMasterData();

    $("#txtCodeFlying_Master").val("");
    $("#txtAirlineFlying_Master").val("");

    showSuccess(
        "Added Successfully",
        "Airline added successfully."
    );
}

function updateFlyingMaster() {

    if (selectedFlyingMasterIndex === null) return;

    const code = $("#txtCodeFlying_Master").val().trim();
    const airline = $("#txtAirlineFlying_Master").val().trim();

    if (!code || !airline) {

        showWarning(
            "Required",
            "Please enter Code and Airline."
        );

        return;
    }

    flyingMasterData[selectedFlyingMasterIndex].code = code;
    flyingMasterData[selectedFlyingMasterIndex].airline = airline;

    bindFlyingMasterData();

    selectedFlyingMasterIndex = null;

    $("#txtCodeFlying_Master").val("");
    $("#txtAirlineFlying_Master").val("");

    $("#btnAdd_FlyingMaster").text("Add");

    showSuccess(
        "Updated Successfully",
        "Airline updated successfully."
    );
}

// Add
$("#btnAdd").on("click", function () {
    $('#addAirineMasterModal').modal('show')
});