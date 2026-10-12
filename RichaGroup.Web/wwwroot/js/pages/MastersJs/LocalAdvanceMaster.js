$(document).ready(function () {

    showLoader("Loading Local Advance Master...");

   /* initLocalAdvanceMaster();*/

    setTimeout(function () {
        hideLoader();
    }, 500);
    bindLocalAdvanceData();
});
// INITIALIZATION

//function initLocalAdvanceMaster() {

//    // Select2
//    $("#ddlbuyerName, #ddlLocation").select2({
//        width: "100%",
//        dropdownAutoWidth: false
//    });


//    // Date Picker
//    if ($("#txtDate").length) {

//        flatpickr("#txtDate", {
//            dateFormat: "d-m-Y",
//            allowInput: true,
//            defaultDate:"today"
//        });

//    }

//    // Save
//    $("#btnSave").on("click", function () {

//        saveLocalAdvanceMaster();

//    });


//    // Cancel
//    $("#btnCancel").on("click", function () {

//        clearLocalAdvanceForm();

//    });


//    // Initial Table
//    initLocalAdvanceDataTable();

//}

// STATIC DATA

const localAdvanceData = [

    {
        id: 1,
        advanceNumber: "1",
        buyerName: "Anil",
        status: "Active",
        ManualAdjustment:"Adjust",
        InvoiceAdjustment:"Done",
        Remarks:"Sach"
    },

    {
        id: 2,
        advanceNumber: "2",
        buyerName: "Akshay",
        status: "Active",
        ManualAdjustment: "Adjust",
        InvoiceAdjustment: "Done",
        Remarks: "Akas"
    },

    {
        id: 3,
        advanceNumber: "3",
        buyerName: "Manoj Rawat",
        status: "Active",
        ManualAdjustment: "Adjust",
        InvoiceAdjustment: "Done",
        Remarks: "Vika"
    },

    {
        id: 4,
        advanceNumber: "4",
        buyerName: "Anil",
        status: "Inactive",
        ManualAdjustment: "Adjust",
        InvoiceAdjustment: "Done",
        Remarks: "Deep"
    },

    {
        id: 5,
        advanceNumber: "5",
        buyerName: "Anil Thakur",
        status: "Active",
        ManualAdjustment: "Adjust",
        InvoiceAdjustment: "Done",
        Remarks: "System"
    }

];

// DATATABLE

let localAdvanceTable = null;
// BIND TABLE

function bindLocalAdvanceData() {

    const $tbody = $("#tblbodyLocalMaster");

    if (!$tbody.length) {

        console.error(
            "[LocalAdvanceMaster] #tblbodyLocalMaster not found."
        );

        return;
    }

    $tbody.empty();


    $.each(localAdvanceData, function (index, item) {

        const row = `
            <tr>
                            <!-- ACTION -->

                <td class="text-center">

                    <button type="button"
                            class="edit-btn btn-edit-drawback-port"
                            data-id="${item.id}"
                            title="Edit">

                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>


                </td>

                <td style=" text-align:right; !important">
                    ${index + 1}
                </td>

                <td  style=" text-align:right; !important">
                    ${item.advanceNumber}
                </td>

                <td>
                    ${item.buyerName}
                </td>

                <td>
                    ${item.status}
                </td>

                 <td>
                    ${item.ManualAdjustment}
                </td> 
                <td>
                    ${item.InvoiceAdjustment}
                </td> 
                <td>
                    ${item.Remarks}
                </td>


            </tr>
        `;

        $tbody.append(row);

    });

}
// INITIALIZE DATATABLE

//function initLocalAdvanceDataTable() {

//    try {

//        if (localAdvanceTable) {

//            localAdvanceTable.destroy();
//            localAdvanceTable = null;

//        }

//        bindLocalAdvanceData();


//        localAdvanceTable = new DataTable(
//            "#tblLocalMaster",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No Local Advance records found",

//                    zeroRecords:
//                        "No matching records found",

//                    search:
//                        "Search:"

//                }

//            }
//        );

//    }
//    catch (error) {

//        console.error(
//            "[LocalAdvanceMaster] DataTable initialization failed:",
//            error
//        );

//    }

//}
// SAVE

function saveLocalAdvanceMaster() {

    const advanceNumber =
        $("#txtAdvanceNumber").val().trim();

    const date =
        $("#txtDate").val().trim();

    const buyerName =
        $("#ddlbuyerName").val();

    const accountNumber =
        $("#txtAccountNumber").val().trim();

    const manualAdjustment =
        $("#txtManualAdjustment").val().trim();

    const invoiceAdjustment =
        $("#txtInvoiceAdjustment").val().trim();

    const balanceAmount =
        $("#txtBalanceAmount").val().trim();

    const remarks =
        $("#txtremarks").val().trim();

    const location =
        $("#ddlLocation").val();


    if (!date) {

        showWarning(
            "Date Required",
            "Please select Date."
        );

        return;
    }


    if (!accountNumber) {

        showWarning(
            "Account Number Required",
            "Please enter Account Number."
        );

        return;
    }


    if (!location) {

        showWarning(
            "Location Required",
            "Please select Location."
        );

        return;
    }


    const saveData = {

        advanceNumber: advanceNumber,
        date: date,
        buyerName: buyerName,
        accountNumber: accountNumber,
        manualAdjustment: manualAdjustment,
        invoiceAdjustment: invoiceAdjustment,
        balanceAmount: balanceAmount,
        remarks: remarks,
        location: location

    };


    console.log(
        "[LocalAdvanceMaster] Save:",
        saveData
    );


    showLoader("Saving Local Advance Master...");


    setTimeout(function () {

        hideLoader();

        showSuccess(
            "Saved Successfully",
            "Local Advance Master saved successfully."
        );

        clearLocalAdvanceForm();

    }, 500);

}
// VIEW

$("#tblbodyLocalMaster").on(
    "click",
    ".btn-view-drawback-port",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);
// EDIT

$("#tblbodyLocalMaster").on(
    "click",
    ".btn-edit-drawback-port",
    function () {

        const id =
            Number($(this).data("id"));

        const item =
            localAdvanceData.find(function (x) {

                return x.id === id;

            });


        if (!item) {

            showError(
                "Record Not Found",
                "Selected Local Advance record was not found."
            );

            return;
        }


        console.log(
            "Edit Local Advance:",
            item
        );


        $("#txtAdvanceNumber")
            .val(item.advanceNumber);

        $("#ddlbuyerName")
            .val(item.buyerName)
            .trigger("change");


       
        $('#addLocalAdvanceModal').modal('show')
    }
);
// CLEAR FORM

function clearLocalAdvanceForm() {

    $("#txtAdvanceNumber").val("");

    $("#txtDate").val("");

    if ($("#txtDate")[0]?._flatpickr) {
        $("#txtDate")[0]._flatpickr.clear();
    }

    $("#ddlbuyerName")
        .val("")
        .trigger("change");

    $("#txtAccountNumber").val("");

    $("#txtManualAdjustment").val("");

    $("#txtInvoiceAdjustment").val("");

    $("#txtBalanceAmount").val("");

    $("#txtremarks").val("");

    $("#ddlLocation")
        .val("")
        .trigger("change");

}
// Add
$("#btnAdd").on("click", function () {
    $('#addLocalAdvanceModal').modal('show')
});