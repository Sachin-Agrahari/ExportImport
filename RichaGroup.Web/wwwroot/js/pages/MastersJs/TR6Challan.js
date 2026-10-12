$(document).ready(function () {

    showLoader("Loading TR6 Challan...");
    bindTR6ChallanData();
    initTR6Challan();

    setTimeout(function () {
        hideLoader();
    }, 500);

});
// PAGE INITIALIZATION

function initTR6Challan() {
        // Select2
        $(
            "#ddlSurrenderType, " +
            "#ddlPort, " +
            "#ddlBank, " +
            "#ddlROSCTLLicenseNo"
        ).select2({
            width: "100%",
            dropdownAutoWidth: false
        });
        // Flatpickr
        //$("#txtTR6Date").flatpickr({
        //    dateFormat: "d-m-Y",
        //    allowInput: true,
        //    defaultDate:"today"
        //});


        //$("#txtDDChequeDate").flatpickr({
        //    dateFormat: "d-m-Y",
        //    allowInput: true,
        //      defaultDate:"today"
        //});


        //$("#txtLicenceDate").flatpickr({
        //    dateFormat: "d-m-Y",
        //    allowInput: true,
        //      defaultDate:"today"
        //});
        // Add

        //$("#btnAdd").on("click", function () {

        //    window.location.href = "/Master/viewTR6Challan";

        //});
        // Back

        //$("#btnBack").on("click", function () {

        //    window.location.href = "/Master/TR6Challan";

        //});


    $("#btnSave").on("click", function () {

        const surrenderType =
            $("#ddlSurrenderType").val();

        const challanNo =
            ($("#txtTR6ChallanNo").val() || "").trim();

        const date =
            ($("#txtTR6Date").val() || "").trim();

        const port =
            $("#ddlPort").val();

        const challanAmount =
            ($("#txtTR6ChallanAmount").val() || "").trim();

        const interestAmount =
            ($("#txtInterestAmount").val() || "").trim();

        const bank =
            $("#ddlBank").val();


        if (!surrenderType) {

            showWarning(
                "Surrender Type Required",
                "Please select Surrender Type."
            );

            return;
        }


        if (!challanNo) {

            showWarning(
                "TR6 Challan No Required",
                "Please enter TR6 Challan No."
            );

            return;
        }


        if (!date) {

            showWarning(
                "Date Required",
                "Please select Date."
            );

            return;
        }


        if (!port) {

            showWarning(
                "Port Required",
                "Please select Port."
            );

            return;
        }


        const data = {

            surrenderType: surrenderType,
            challanNo: challanNo,
            date: date,
            port: port,
            challanAmount: challanAmount,
            interestAmount: interestAmount,
            bank: bank,

            ddChequeNo:
                ($("#txtDDChequeNo").val() || "").trim(),

            ddChequeDate:
                ($("#txtDDChequeDate").val() || "").trim(),

            surrenderYear:
                ($("#txtSurrenderYear").val() || "").trim(),

            rosctlLicenseNo:
                $("#ddlROSCTLLicenseNo").val(),

            licenceDate:
                ($("#txtLicenceDate").val() || "").trim()

        };


        console.log(
            "[TR6Challan] Save:",
            data
        );


        showLoader("Saving TR6 Challan...");


        setTimeout(function () {

            hideLoader();

            showSuccess(
                "Saved Successfully",
                "TR6 Challan saved successfully."
            );

        }, 500);

    });
    // Cancel

    $("#btnCancel").on("click", function () {

        showWarning(
            "Are you sure?",
            "Do you want to cancel all the changes?",
            {
                confirmButtonText: "Yes, Cancel",
                cancelButtonText: "No"
            }
        ).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }

            showLoader("Cancelling TR6 Challan...");

            clearTR6Form();

            setTimeout(function () {

                hideLoader();

                showSuccess(
                    "Cancelled Successfully",
                    "All TR6 Challan changes have been cancelled."
                );

            }, 500);

        });

    });


    // Initial table
  /*  initTR6ChallanDataTable();*/

}
// STATIC DATA

const tr6ChallanData = [

    {
        id: 1,
        challanNo: "TR02",
        date: "17/06/2021",
        surrenderType: "GST",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "Sach-123",
        licenceDate: "02/12/2016"
    },

    {
        id: 2,
        challanNo: "TR01",
        date: "17/06/2021",
        surrenderType: "GST",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "Sach-123",
        licenceDate: "02/12/2016"
    },

    {
        id: 3,
        challanNo: "11111fdesf",
        date: "12/09/2019",
        surrenderType: "GST",
        challanAmount: "333.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "Sach-123",
        licenceDate: "02/12/2016"
    },

    {
        id: 4,
        challanNo: "1111",
        date: "03/09/2019",
        surrenderType: "GST",
        challanAmount: "333.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 5,
        challanNo: "12",
        date: "03/09/2019",
        surrenderType: "DBK",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 6,
        challanNo: "13",
        date: "03/09/2019",
        surrenderType: "DBK",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 7,
        challanNo: "667",
        date: "03/09/2019",
        surrenderType: "GST",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 8,
        challanNo: "8",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "546.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 9,
        challanNo: "68",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "546.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 10,
        challanNo: "67",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "333.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 11,
        challanNo: "55",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 12,
        challanNo: "78",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "0.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 13,
        challanNo: "546",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "546.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 14,
        challanNo: "555",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "555.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 15,
        challanNo: "999",
        date: "02/09/2019",
        surrenderType: "GST",
        challanAmount: "333.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    },

    {
        id: 16,
        challanNo: "667",
        date: "02/09/2019",
        surrenderType: "DBK",
        challanAmount: "333.00",
        interestAmount: "0.00",
        port: "China-333",
        rosctlLicenseNo: "",
        licenceDate: ""
    }

];

// DATATABLE
let tr6ChallanTable = null;
// BIND TABLE

function bindTR6ChallanData() {

    const $tbody = $("#tblbodyTR6Challan");

    if (!$tbody.length) {

        console.error(
            "[TR6Challan] #tblbodyTR6Challan not found."
        );

        return;
    }

    $tbody.empty();


    $.each(tr6ChallanData, function (index, item) {

        const row = `
            <tr>

                
                   <!-- ACTION -->

                <td class="text-center">

                    <button type="button"
                            class="edit-btn btn-edit-tr6"
                            data-id="${item.id}"
                            data-row="${index + 1}"
                            title="Edit">

                        <i class="fa-solid fa-pen-to-square"></i>

                    </button>
                </td>

                <td  style="text-align:right !important;" >
                    ${index + 1}
                </td>

                <td>
                    ${item.challanNo}
                </td>

                <td>
                    ${item.date}
                </td>

                <td>
                    ${item.surrenderType}
                </td>

                <td  style="text-align:right !important;"  class="text-end">
                    ${item.challanAmount}
                </td>

                <td  style="text-align:right !important;"  class="text-end">
                    ${item.interestAmount}
                </td>

                <td>
                    ${item.port}
                </td>

                <td>
                    ${item.rosctlLicenseNo}
                </td>

                <td>
                    ${item.licenceDate}
                </td>
             

            </tr>
        `;

        $tbody.append(row);

    });

}
// INITIALIZE DATATABLE

//function initTR6ChallanDataTable() {

//    try {

//        if (tr6ChallanTable) {

//            tr6ChallanTable.destroy();

//            tr6ChallanTable = null;

//        }

//        bindTR6ChallanData();


//        tr6ChallanTable = new DataTable(
//            "#tblTR6Challan",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No TR6 Challan records found",

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
//            "[TR6Challan] DataTable initialization failed:",
//            error
//        );

//    }

//}
// VIEW

$("#tblbodyTR6Challan").on(
    "click",
    ".btn-view-tr6",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);
// EDIT

$("#tblbodyTR6Challan").on(
    "click",
    ".btn-edit-tr6",
    function () {

        const id =
            Number($(this).data("id"));

        const rowNo =
            Number($(this).data("row"));


        const item =
            tr6ChallanData.find(function (x) {

                return x.id === id;

            });


        if (!item) {

            showError(
                "Record Not Found",
                "Selected TR6 Challan record was not found."
            );

            return;
        }

        $('#addMenuModal').modal('show')
        //window.location.href =
        //    `/Master/viewTR6Challan?id=${id}&row=${rowNo}`;

    }
);
// DELETE

$("#tblbodyTR6Challan").on(
    "click",
    ".btn-delete-tr6",
    function () {

        const id =
            Number($(this).data("id"));


        const index =
            tr6ChallanData.findIndex(function (x) {

                return x.id === id;

            });


        if (index === -1) {

            showError(
                "Record Not Found",
                "Selected TR6 Challan record was not found."
            );

            return;
        }


        const item =
            tr6ChallanData[index];


        showConfirm(
            "Are you sure?",
            `Do you want to delete TR6 Challan ${item.challanNo}?`,
            {
                confirmButtonText: "Yes, Delete",
                cancelButtonText: "Cancel"
            }
        ).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }


            showLoader("Deleting TR6 Challan...");


            setTimeout(function () {

                tr6ChallanData.splice(index, 1);


                if (tr6ChallanTable) {

                    tr6ChallanTable.destroy();
                    tr6ChallanTable = null;

                }


                bindTR6ChallanData();


                tr6ChallanTable = new DataTable(
                    "#tblTR6Challan",
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
                    "TR6 Challan deleted successfully."
                );

            }, 500);

        });

    }
);


function clearTR6Form() {

    $("#ddlSurrenderType")
        .val("")
        .trigger("change");

    $("#txtTR6ChallanNo").val("");

    if ($("#txtTR6Date")[0]?._flatpickr) {
        $("#txtTR6Date")[0]._flatpickr.clear();
    }

    $("#ddlPort")
        .val("")
        .trigger("change");

    $("#txtTR6ChallanAmount").val("");
    $("#txtInterestAmount").val("");

    $("#ddlBank")
        .val("")
        .trigger("change");

    $("#txtDDChequeNo").val("");

    if ($("#txtDDChequeDate")[0]?._flatpickr) {
        $("#txtDDChequeDate")[0]._flatpickr.clear();
    }

    $("#txtSurrenderYear").val("");

    $("#ddlROSCTLLicenseNo")
        .val("")
        .trigger("change");

    if ($("#txtLicenceDate")[0]?._flatpickr) {
        $("#txtLicenceDate")[0]._flatpickr.clear();
    }

    $("#fileUpload").val("");
}


// Add
$("#btnAdd").on("click", function () {
   /* $("#addTr6frame").attr("src", "/Master/viewTR6Challan");*/
    $('#addMenuModal').modal('show')
});