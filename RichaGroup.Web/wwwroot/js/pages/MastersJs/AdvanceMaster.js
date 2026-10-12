$(document).ready(function () {
    //add button

    //back button
    $("#btnBack").on("click", function () {
        window.location.href = "/Master/AdvanceMaster";
    })
    //in initial time check 
    if ($("#rdoForwardYes").is(":checked")) {
        $("#adjustmentNoSection").show();
    } else {
        $("#adjustmentNoSection").hide();
    }
    //on chnage check
    $("#rdoForwardNo, #rdoForwardYes").on("change", function () {

        if ($("#rdoForwardYes").is(":checked")) {

            $("#adjustmentNoSection").slideDown(200);

        } else {

            $("#adjustmentNoSection").slideUp(200);

        }

    });

    if ($("#txtAdvanceDate").length) {

        flatpickr("#txtAdvanceDate", {
            dateFormat: "d-m-Y",
            allowInput: true,
            defaultDate:"today"
        });

    }
    // Select2

    $("#ddlBuyerName, #ddlCurrency, #ddlInvoiceDetail, #ddlLocation").select2({
        width: "100%",
        dropdownAutoWidth: false
    });

    showLoader("Loading Advance Master...");

    initAdvanceMaster();

    setTimeout(function () {
        hideLoader();
    }, 500);
})

//advance master js is start from here 
function initAdvanceMaster() {

   
    // Status Radio
    $("#rdoClosed, #rdoDebitNote").on("change", function () {

        const status = $("input[name='Status']:checked").val();

        console.log("Status:", status);

        bindAdvanceMasterData();

    });


  
    bindAdvanceMasterData();

}
// STATIC DATA

const advanceMasterData = [

    {
        id: 1,
        advanceNo: "8",
        buyerName: "Anil",
        amount: "1233.00",
        currency: "Dinar",
        location: "ABC Co Pvt Ltd",
        remarks: "test",
        adjustment: "Yes"
    },

    {
        id: 2,
        advanceNo: "4",
        buyerName: "akshay",
        amount: "1233.00",
        currency: "Dinar",
        location: "ABC Co Pvt Ltd",
        remarks: "",
        adjustment: "No"
    },

    {
        id: 3,
        advanceNo: "3",
        buyerName: "Manoj Rawat",
        amount: "25893.00",
        currency: "Dinar",
        location: "ABC Co Pvt Ltd",
        remarks: "",
        adjustment: "Yes"
    },

    {
        id: 4,
        advanceNo: "1",
        buyerName: "Anil",
        amount: "200.00",
        currency: "Dinar",
        location: "ABC Co Pvt Ltd",
        remarks: "",
        adjustment: "No"
    }

];

// DATATABLE VARIABLE

let advanceMasterTable = null;
// BIND TABLE

function bindAdvanceMasterData() {

    const $tbody = $("#tblbodyAdvMaster");

    if (!$tbody.length) {

        console.error(
            "[AdvanceMaster] #tblbodyAdvMaster not found."
        );

        return;
    }

    $tbody.empty();


    $.each(advanceMasterData, function (index, item) {

        const row = `
            <tr>
              <td class="text-center">

                    <button type="button"
                            class="edit-btn btn-edit-advance"
                            data-id="${item.id}"
                            data-row="${index + 1}"
                            title="Edit">
                             <i class="fa-solid fa-pen-to-square"></i>

                    </button>



                </td>
                <td style="text-align:right !important;">
                    ${index + 1}
                </td>

                <td style="text-align:right !important;">
                    ${item.advanceNo}
                </td>

                <td>
                    ${item.buyerName}
                </td>

                <td class="text-end">
                    ${item.amount}
                </td>

                <td>
                    ${item.currency}
                </td>

                <td>
                    ${item.location}
                </td>

                <td>
                    ${item.remarks}
                </td>

                <td class="text-center">
                    ${item.adjustment}
                </td>


                


            </tr>
        `;

        $tbody.append(row);

    });

}
//// DATATABLE

//function initAdvanceMasterDataTable() {

//    try {

//        if (advanceMasterTable) {

//            advanceMasterTable.destroy();

//            advanceMasterTable = null;

//        }

//        bindAdvanceMasterData();


//        advanceMasterTable = new DataTable(
//            "#tblAdvMaster",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No Advance Master records found",

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
//            "[AdvanceMaster] DataTable initialization failed:",
//            error
//        );

//    }

//}

//// EDIT

$("#tblbodyAdvMaster").on(
    "click",
    ".btn-edit-advance",
    function () {

        const id = Number($(this).data("id"));
        const rowNo = Number($(this).data("row"));

        const item = advanceMasterData.find(function (x) {

            return x.id === id;

        });


        if (!item) {

            showError(
                "Advance Not Found",
                "Selected Advance record was not found."
            );

            return;
        }


        console.log(
            "Edit Advance:",
            item
        );

        $("#addMenuModal").modal("show");


    }
);

// VIEW

$("#tblbodyAdvMaster").on(
    "click",
    ".btn-view-advance",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);

$("#btnAdd").on("click", function () {
    $("#addMenuModal").modal("show");
})