$(document).ready(function () {

    showLoader("Loading TT Master...");

    initTTMaster();

    setTimeout(function () {
        hideLoader();
    }, 500);

});
// PAGE INITIALIZATION

function initTTMaster() {

    // Flatpickr
    //if ($("#txtDate").length) {

    //    flatpickr("#txtDate", {
    //        dateFormat: "d-m-Y",
    //        allowInput: true,
    //        defaultDate:"today"
    //    });

    //}


    // Select2
    $("#ddlbuyerName, #ddlLocation").select2({
        width: "100%",
        dropdownAutoWidth: false
    });


    // Save
    $("#btnSave").on("click", function () {

        saveTTMaster();

    });


    // Cancel
    $("#btnCancel").on("click", function () {

        showConfirm(
            "Are you sure?",
            "Do you want to clear the TT Master form?"
        ).then(function (result) {

            if (result.isConfirmed) {

                clearTTMasterForm();

            }

        });

    });


    // Initial Table
    /*initTTMasterDataTable();*/
    bindTTMasterData()
}
// STATIC DATA

const ttMasterData = [

    {
        id: 1,
        ttNo: "TT6",
        buyerName: "Anil Thakur",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "5000.00",
        adjustment: "0.00"
    },

    {
        id: 2,
        ttNo: "0112324",
        buyerName: "Anil",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "1233.00",
        adjustment: "0.00"
    },

    {
        id: 3,
        ttNo: "a12345",
        buyerName: "akshay",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "1233.00",
        adjustment: "0.00"
    },

    {
        id: 4,
        ttNo: "a1234",
        buyerName: "Anil Thakur",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "1233.00",
        adjustment: "0.00"
    },

    {
        id: 5,
        ttNo: "3",
        buyerName: "Manoj Rawat",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "200.00",
        adjustment: "0.00"
    },

    {
        id: 6,
        ttNo: "2",
        buyerName: "Anil",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "1000.00",
        adjustment: "0.00"
    },

    {
        id: 7,
        ttNo: "0123456",
        buyerName: "Anil",
        currency: "GBP",
        remarks: "",
        convRate: "10",
        amount: "1233.00",
        adjustment: "0.00"
    }

];
// DATATABLE VARIABLE

let ttMasterTable = null;
// BIND TABLE

function bindTTMasterData() {

    const $tbody = $("#tblbodyTTMaster");

    if (!$tbody.length) {

        console.error(
            "[TTMaster] #tblbodyTTMaster not found."
        );

        return;
    }

    $tbody.empty();


    $.each(ttMasterData, function (index, item) {

        const row = `
            <tr>

               

                <td class="text-center">

                    <button type="button"
                            class="edit-btn btn-edit-tt-master"
                            data-id="${item.id}"
                            title="Edit">

                       <i class="fa-solid fa-pen-to-square"></i>

                    </button>


                </td>

                <!-- S.No -->

                <td style="text-align:right !important;">
                    ${index + 1}
                </td>


                <!-- TT No -->

                <td>
                    ${item.ttNo || ""}
                </td>


                <!-- Buyer -->

                <td>
                    ${item.buyerName || ""}
                </td>


                <!-- Currency -->

                <td>
                    ${item.currency || ""}
                </td>


                <!-- Remarks -->

                <td>
                    ${item.remarks || ""}
                </td>


                <!-- Conversion Rate -->

                <td class="text-end">
                    ${item.convRate || ""}
                </td>


                <!-- Amount -->

                <td class="text-end">
                    ${item.amount || ""}
                </td>


                <!-- Adjustment -->

                <td class="text-end">
                    ${item.adjustment || ""}
                </td>


              


               

            </tr>
        `;

        $tbody.append(row);

    });

}
// DATATABLE

//function initTTMasterDataTable() {

//    try {

//        if (ttMasterTable) {

//            ttMasterTable.destroy();

//            ttMasterTable = null;

//        }


//        bindTTMasterData();


//        ttMasterTable = new DataTable(
//            "#tblTTMaster",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No TT Master records found",

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
//            "[TTMaster] DataTable initialization failed:",
//            error
//        );

//    }

//}
// SAVE

function saveTTMaster() {

    const ttNo =
        ($("#txtTTNo").val() || "").trim();

    const date =
        ($("#txtDate").val() || "").trim();

    const buyerName =
        $("#ddlbuyerName").val();

    const amount =
        ($("#txtAmount").val() || "").trim();

    const currency =
        ($("#txtCurrency").val() || "").trim();

    const convRate =
        ($("#txtConvRate").val() || "").trim();

    const amountINR =
        ($("#txtAmountINR").val() || "").trim();

    const adjustment =
        ($("#txtAdjustment").val() || "").trim();

    const remarks =
        ($("#txtRemarks").val() || "").trim();

    const balanceAmount =
        ($("#txtBalanceAmount").val() || "").trim();

    const location =
        $("#ddlLocation").val();


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


    const data = {

        ttNo: ttNo,
        date: date,
        buyerName: buyerName,

        amount: amount,
        currency: currency,
        convRate: convRate,
        amountINR: amountINR,

        adjustment: adjustment,
        remarks: remarks,

        balanceAmount: balanceAmount,
        location: location

    };


    console.log(
        "[TTMaster] Save:",
        data
    );


    showLoader("Saving TT Master...");


    setTimeout(function () {

        hideLoader();

        showSuccess(
            "Saved Successfully",
            "TT Master saved successfully."
        );

        clearTTMasterForm();

    }, 500);

}
// VIEW

$("#tblbodyTTMaster").on(
    "click",
    ".btn-view-tt-master",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);
// EDIT

$("#tblbodyTTMaster").on(
    "click",
    ".btn-edit-tt-master",
    function () {

        const id =
            Number($(this).data("id"));


        const item =
            ttMasterData.find(function (x) {

                return x.id === id;

            });


        if (!item) {

            showError(
                "Record Not Found",
                "Selected TT Master record was not found."
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

        $("#txtAmount")
            .val(item.amount);

        $("#txtAdjustment")
            .val(item.adjustment);

        $("#txtRemarks")
            .val(item.remarks);

  
        $('#addTTMasterModal').modal('show')
    }
);
// DELETE

$("#tblbodyTTMaster").on(
    "click",
    ".btn-delete-tt-master",
    function () {

        const id =
            Number($(this).data("id"));


        const index =
            ttMasterData.findIndex(function (x) {

                return x.id === id;

            });


        if (index === -1) {

            showError(
                "Record Not Found",
                "Selected TT Master record was not found."
            );

            return;
        }


        const item =
            ttMasterData[index];


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


            showLoader("Deleting TT Master...");


            setTimeout(function () {

                ttMasterData.splice(index, 1);


                if (ttMasterTable) {

                    ttMasterTable.destroy();

                    ttMasterTable = null;

                }


                bindTTMasterData();


                ttMasterTable = new DataTable(
                    "#tblTTMaster",
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
                    "TT Master deleted successfully."
                );

            }, 500);

        });

    }
);
// CLEAR FORM

function clearTTMasterForm() {

    $("#txtTTNo").val("");

    $("#txtDate").val("");

    if ($("#txtDate")[0]?._flatpickr) {
        $("#txtDate")[0]._flatpickr.clear();
    }

    $("#ddlbuyerName")
        .val("")
        .trigger("change");

    $("#txtAmount").val("");

    $("#txtCurrency").val("");

    $("#txtConvRate").val("");

    $("#txtAmountINR").val("");

    $("#txtAdjustment").val("");

    $("#txtRemarks").val("");

    $("#txtBalanceAmount").val("");

    $("#ddlLocation")
        .val("")
        .trigger("change");

}


// Add
$("#btnAdd").on("click", function () {
    $('#addTTMasterModal').modal('show')
});