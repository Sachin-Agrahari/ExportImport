$(document).ready(function () {

    showLoader("Loading TT Adjustment...");

    initTTAdjustment();

    setTimeout(function () {
        hideLoader();
    }, 500);

});
// INITIALIZATION
function initTTAdjustment() {

    // Date Picker
    if ($("#txtDate").length) {

        flatpickr("#txtDate", {
            dateFormat: "d-m-Y",
            allowInput: true,
            defaultDate:"today"
        });

    }


    // Select2
    $("#ddlbuyerName").select2({
        width: "100%",
        dropdownAutoWidth: false
    });


    // Save
    $("#btnSave").on("click", function () {

        saveTTAdjustment();

    });


    // Cancel
    $("#btnCancel").on("click", function () {

        clearTTAdjustmentForm();

    });


    // Initial Table
   /* initTTAdjustmentDataTable();*/
    bindTTAdjustmentData();
}

// STATIC DATA

const ttAdjustmentData = [

    {
        id: 1,
        ttNo: "TT6",
        buyerName: "Anil Thakur",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 2,
        ttNo: "0112324",
        buyerName: "Anil",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 3,
        ttNo: "a12345",
        buyerName: "Anil",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 4,
        ttNo: "a1234",
        buyerName: "Anil Thakur",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 5,
        ttNo: "3",
        buyerName: "ABC",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 6,
        ttNo: "2",
        buyerName: "XYZ",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    },

    {
        id: 7,
        ttNo: "0123456",
        buyerName: "WXYZ",
        currency: "GBP",
        convRate: "10",
        adjustment: "0"
    }

];
// DATATABLE

let ttAdjustmentTable = null;

// BIND TABLE

function bindTTAdjustmentData() {

    const $tbody = $("#tblbodyTTAdjustment");

    if (!$tbody.length) {

        console.error(
            "[TTAdjustment] #tblbodyTTAdjustment not found."
        );

        return;
    }

    $tbody.empty();


    $.each(ttAdjustmentData, function (index, item) {

        const row = `
            <tr>

              


                <!-- Action -->

                <td class="text-center">

                    <button type="button"
                            class="edit-btn btn-edit-tt-adjustment"
                            data-id="${item.id}"
                            title="Edit">

                       <i class="fa-solid fa-pen-to-square"></i>

                    </button>
                </td>
                <!-- S.No -->

                <td class="text-center">
                    ${index + 1}
                </td>

                <!-- TT No -->

                <td>
                    ${item.ttNo}
                </td>


                <!-- Buyer Name -->

                <td>
                    ${item.buyerName}
                </td>


                <!-- Currency -->

                <td>
                    ${item.currency}
                </td>


                <!-- Conversion Rate -->

                <td class="text-end">
                    ${item.convRate}
                </td>


                <!-- Adjustment -->

                <td class="text-end">
                    ${item.adjustment}
                </td>


              


            </tr>
        `;

        $tbody.append(row);

    });

}
// INITIALIZE DATATABLE
//function initTTAdjustmentDataTable() {

//    try {

//        if (ttAdjustmentTable) {

//            ttAdjustmentTable.destroy();

//            ttAdjustmentTable = null;

//        }

//        bindTTAdjustmentData();


//        ttAdjustmentTable = new DataTable(
//            "#tblTTAdjustment",
//            {
//                paging: true,
//                searching: true,
//                ordering: false,
//                info: false,
//                lengthChange: false,
//                pageLength: 10,

//                language: {
//                    emptyTable: "No TT Adjustment records found",
//                    zeroRecords: "No matching records found",
//                    search: "Search:"
//                }
//            }
//        );

//    }
//    catch (error) {

//        console.error(
//            "[TTAdjustment] DataTable initialization failed:",
//            error
//        );

//    }

//}

// SAVE
function saveTTAdjustment() {

    const ttNo =
        ($("#txtTTNo").val() || "").trim();

    const date =
        ($("#txtDate").val() || "").trim();

    const buyerName =
        $("#ddlbuyerName").val();

    const currency =
        ($("#txtCurrency").val() || "").trim();

    const convRate =
        ($("#txtConvRate").val() || "").trim();

    const amount =
        ($("#txtAmount").val() || "").trim();

    const adjustment =
        ($("#txtAdjustment").val() || "").trim();

    const balanceAmount =
        ($("#txtBalanceAmount").val() || "").trim();


    // Validation

    if (!date) {

        showWarning(
            "Date Required",
            "Please select Date."
        );

        return;
    }


    if (!currency) {

        showWarning(
            "Currency Required",
            "Please enter Currency."
        );

        return;
    }


    showLoader("Saving TT Adjustment...");


    const saveData = {

        ttNo: ttNo,
        date: date,
        buyerName: buyerName,
        currency: currency,
        convRate: convRate,
        amount: amount,
        adjustment: adjustment,
        balanceAmount: balanceAmount

    };


    console.log(
        "[TTAdjustment] Save:",
        saveData
    );


    setTimeout(function () {

        hideLoader();

        showSuccess(
            "Saved Successfully",
            "TT Adjustment saved successfully."
        );

        clearTTAdjustmentForm();

    }, 500);

}

// VIEW

$("#tblbodyTTAdjustment").on(
    "click",
    ".btn-view-tt-adjustment",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);

// EDIT
$("#tblbodyTTAdjustment").on(
    "click",
    ".btn-edit-tt-adjustment",
    function () {

        const id =
            Number($(this).data("id"));


        const item =
            ttAdjustmentData.find(function (x) {

                return x.id === id;

            });


        if (!item) {

            showError(
                "Record Not Found",
                "Selected TT Adjustment record was not found."
            );

            return;
        }


        $("#txtTTNo")
            .val(item.ttNo);

        $("#ddlbuyerName")
            .val(item.buyerName)
            .trigger("change");

        $("#txtCurrency")
            .val(item.currency);

        $("#txtConvRate")
            .val(item.convRate);

        $("#txtAdjustment")
            .val(item.adjustment);


        
        $('#addTTAdjustmentModal').modal('show')
    }
);
// DELETE

$("#tblbodyTTAdjustment").on(
    "click",
    ".btn-delete-tt-adjustment",
    function () {

        const id =
            Number($(this).data("id"));


        const index =
            ttAdjustmentData.findIndex(function (x) {

                return x.id === id;

            });


        if (index === -1) {

            showError(
                "Record Not Found",
                "Selected TT Adjustment record was not found."
            );

            return;
        }


        const item =
            ttAdjustmentData[index];


        showConfirm(
            "Are you sure?",
            `Do you want to delete TT No. ${item.ttNo}?`,
            {
                confirmButtonText: "Yes, Delete",
                cancelButtonText: "Cancel"
            }
        ).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }


            showLoader("Deleting TT Adjustment...");


            setTimeout(function () {

                ttAdjustmentData.splice(index, 1);


                if (ttAdjustmentTable) {

                    ttAdjustmentTable.destroy();

                    ttAdjustmentTable = null;

                }


                bindTTAdjustmentData();


                ttAdjustmentTable = new DataTable(
                    "#tblTTAdjustment",
                    {
                        paging: true,
                        searching: true,
                        ordering: false,
                        info: false,
                        lengthChange: false,
                        pageLength: 10
                    }
                );


                hideLoader();


                showSuccess(
                    "Deleted Successfully",
                    "TT Adjustment deleted successfully."
                );

            }, 500);


            
        });
      
    }
);
// CLEAR FORM
function clearTTAdjustmentForm() {

    $("#txtTTNo").val("");

    $("#txtDate").val("");

    if ($("#txtDate")[0]?._flatpickr) {
        $("#txtDate")[0]._flatpickr.clear();
    }

    $("#ddlbuyerName")
        .val("")
        .trigger("change");

    $("#txtCurrency").val("");

    $("#txtConvRate").val("");

    $("#txtAmount").val("");

    $("#txtAdjustment").val("");

    $("#txtBalanceAmount").val("");

}
// Add
$("#btnAdd").on("click", function () {
    $('#addTTAdjustmentModal').modal('show')
});