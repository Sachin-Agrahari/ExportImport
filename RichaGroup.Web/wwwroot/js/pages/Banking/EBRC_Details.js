$(document).ready(function () {

    initEBRCDetails();
   

});

// Page Initialization

function initEBRCDetails() {

    // Flatpickr


    initEBRCDatePicker("#txtRealizationDate_EBRCDetails");
    initEBRCDatePicker("#txtBRCRcvdOn_EBRCDetails");

    initEBRCDatePicker("#txtEBRCDated1_EBRCDetails");
    initEBRCDatePicker("#txtEBRCDated2_EBRCDetails");
    initEBRCDatePicker("#txtEBRCDated3_EBRCDetails");

    initEBRCDatePicker("#txtSBDate_EBRCDetails");

    // Select2

    $("#ddlPaymentReceived_EBRCDetails").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select Payment Received",
        allowClear: true
    });


    $("#ddlPaymentType_EBRCDetails").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select Payment Type",
        allowClear: true
    });


    $("#ddlBRCReceived_EBRCDetails").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select B.R.C. Received",
        allowClear: true
    });
    //add 
    $("#btnAdd").on("click", function() {
       $('#addMenuModal').modal('show');
    })

    // Refresh

    // $("#btnRefresh_EBRCDetails").on("click", function () {

    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "Do you want to refresh the EBRC Details?",
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, Refresh",
    //         cancelButtonText: "Cancel"
    //     }).then(function (result) {

    //         if (result.isConfirmed) {

    //             refreshEBRCDetails();

    //         }

    //     });

    // });

    // Save

    $("#btnSave_EBRCDetails").on("click", function () {

        saveEBRCDetails();

    });
     bindEBRCDetailsTable();

}

// Flatpickr Helper

function initEBRCDatePicker(selector) {

    if ($(selector).length) {

        flatpickr(selector, {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

}
//static data 
const paymentReceivedData = [
    {
        boExchange: "HDFC BANK",
        bankRefNo: "BR-0001",
        paymentReceived: "25,000.00",
        paymentType: "Advance",
        ifsc: "HDFC0001234",
        currency: "USD",
        sbNumber: "SB-2026-001",
        sbDated: "21-09-2026",
        portCode: "INNSA1",
        eBrcRemarks: "Payment received against export"
    },
    {
        boExchange: "ICICI BANK",
        bankRefNo: "BR-0002",
        paymentReceived: "18,500.50",
        paymentType: "Advance",
        ifsc: "ICIC0002456",
        currency: "EUR",
        sbNumber: "SB-2026-002",
        sbDated: "20-09-2026",
        portCode: "INNSA1",
        eBrcRemarks: "Advance payment received"
    },
    {
        boExchange: "AXIS BANK",
        bankRefNo: "BR-0003",
        paymentReceived: "32,750.00",
        paymentType: "Export",
        ifsc: "AXIS0003456",
        currency: "GBP",
        sbNumber: "SB-2026-003",
        sbDated: "19-09-2026",
        portCode: "INNSA1",
        eBrcRemarks: "Payment adjusted against SB"
    },
    {
        boExchange: "HDFC BANK",
        bankRefNo: "BR-0004",
        paymentReceived: "14,200.00",
        paymentType: "Export",
        ifsc: "HDFC0001234",
        currency: "USD",
        sbNumber: "SB-2026-004",
        sbDated: "18-09-2026",
        portCode: "INNSA1",
        eBrcRemarks: "Export payment received"
    },
    {
        boExchange: "ICICI BANK",
        bankRefNo: "BR-0005",
        paymentReceived: "9,850.75",
        paymentType: "Adjustment",
        ifsc: "ICIC0002456",
        currency: "USD",
        sbNumber: "SB-2026-005",
        sbDated: "17-09-2026",
        portCode: "INNSA1",
        eBrcRemarks: "Manual adjustment"
    }
];

//bind table here 

function bindEBRCDetailsTable() {

    const $tbody = $("#tblEBRCDetailsbody");

    if (!$tbody.length) { 
        console.error("[CurrencyBooked] #tblCurrencyBookedBody not found."); 
        return;
    }

    $tbody.empty(); 

    if (!paymentReceivedData.length) { 
        $("#noRecordsFound_EBRCDetails").removeClass("d-none"); 
        return; 
    } 

    $("#noRecordsFound_EBRCDetails").addClass("d-none"); 

    $.each(paymentReceivedData, function (index, item) {
        const row = `<tr> 
             <td>
                   <button
                      type="button"
                      class="row-btn edit-btn"
                      title="Edit"
                      onclick="EditMatser('${item.boExchange}')"
                      data-code="${item.boExchange}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>${item.boExchange}</td>
                  <td>${item.bankRefNo}</td>
                  <td>${item.paymentType}</td>
                  <td>${item.ifsc}</td>
                  <td>${item.currency}</td>
                  <td>${item.sbNumber}</td>
                  <td>${item.sbDated}</td>
                  <td>${item.portCode}</td>
                  <td>${item.eBrcRemarks}</td>
                  </tr>`;
                 
        $tbody.append(row);

    }
    )
}

//edit button 
function EditMatser(id) {
      $('#addMenuModal').modal('show')
}


// Save EBRC Details

function saveEBRCDetails() {

    const data = getEBRCDetailsData();
    // Validation

    if (!data.boExchangeNo) {

        Swal.fire({
            icon: "warning",
            title: "B.O. Exchange Required",
            text: "Please enter B.O. Exchange #."
        });

        $("#txtBOExchangeNo_EBRCDetails").focus();

        return;
    }


    if (!data.bankRefNo) {

        Swal.fire({
            icon: "warning",
            title: "Bank Reference Required",
            text: "Please enter Bank Ref. #."
        });

        $("#txtBankRefNo_EBRCDetails").focus();

        return;
    }


    if (!data.realizationDate) {

        Swal.fire({
            icon: "warning",
            title: "Realization Date Required",
            text: "Please select Realization Date."
        });

        $("#txtRealizationDate_EBRCDetails").focus();

        return;
    }


    if (!data.paymentReceived) {

        Swal.fire({
            icon: "warning",
            title: "Payment Received Required",
            text: "Please select Payment Received."
        });

        $("#ddlPaymentReceived_EBRCDetails")
            .select2("open");

        return;
    }

    // Confirmation

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to save this EBRC Details?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Save",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader("Saving EBRC Details...");


        setTimeout(function () {

            hideLoader();

            console.log(
                "[EBRCDetails] Saved Data:",
                data
            );


            Swal.fire({
                icon: "success",
                title: "Saved Successfully",
                text: "EBRC Details saved successfully.",
                timer: 1200,
                showConfirmButton: false
            });

        }, 500);

    });

}

// Get Form Data

// function getEBRCDetailsData() {

//     return {
//         // Basic Details

//         boExchangeNo:
//             getEBRCValue("#txtBOExchangeNo_EBRCDetails"),

//         bankRefNo:
//             getEBRCValue("#txtBankRefNo_EBRCDetails"),

//         realizationDate:
//             getEBRCValue("#txtRealizationDate_EBRCDetails"),
//         // Payment / BRC

//         paymentReceived:
//             getEBRCValue("#ddlPaymentReceived_EBRCDetails"),

//         paymentType:
//             getEBRCValue("#ddlPaymentType_EBRCDetails"),

//         brcReceived:
//             getEBRCValue("#ddlBRCReceived_EBRCDetails"),

//         brcReceivedOn:
//             getEBRCValue("#txtBRCRcvdOn_EBRCDetails"),

//         ifsc:
//             getEBRCValue("#txtIFSC_EBRCDetails"),

//         // EBRC 1

//         ebrcNo1:
//             getEBRCValue("#txtEBRCNo1_EBRCDetails"),

//         ebrcDated1:
//             getEBRCValue("#txtEBRCDated1_EBRCDetails"),

//         ebrcAmount1:
//             getEBRCValue("#txtEBRCAmount1_EBRCDetails"),

//         // EBRC 2

//         ebrcNo2:
//             getEBRCValue("#txtEBRCNo2_EBRCDetails"),

//         ebrcDated2:
//             getEBRCValue("#txtEBRCDated2_EBRCDetails"),

//         ebrcAmount2:
//             getEBRCValue("#txtEBRCAmount2_EBRCDetails"),
//         // EBRC 3

//         ebrcNo3:
//             getEBRCValue("#txtEBRCNo3_EBRCDetails"),

//         ebrcDated3:
//             getEBRCValue("#txtEBRCDated3_EBRCDetails"),

//         ebrcAmount3:
//             getEBRCValue("#txtEBRCAmount3_EBRCDetails"),
//         // Invoice / SB

//         invoiceAmount:
//             getEBRCValue("#txtInvoiceAmount_EBRCDetails"),

//         currency:
//             getEBRCValue("#txtCurrency_EBRCDetails"),

//         sbNumber:
//             getEBRCValue("#txtSBNumber_EBRCDetails"),

//         sbDate:
//             getEBRCValue("#txtSBDate_EBRCDetails"),
//         // Charges / Rates
 

//         commission:
//             getEBRCValue("#txtCommission_EBRCDetails"),

//         epRate:
//             getEBRCValue("#txtEPRate_EBRCDetails"),

//         discount:
//             getEBRCValue("#txtDiscount_EBRCDetails"),

//         fobINR:
//             getEBRCValue("#txtFOBINR_EBRCDetails"),

//         otherCharges:
//             getEBRCValue("#txtOtherCharges_EBRCDetails"),

//         frtINR:
//             getEBRCValue("#txtFrtINR_EBRCDetails"),

//         bankCharges:
//             getEBRCValue("#txtBankCharges_EBRCDetails"),

//         fobINR2:
//             getEBRCValue("#txtFOBINR2_EBRCDetails"),

//         portCode:
//             getEBRCValue("#txtPortCode_EBRCDetails"),

//         fobFCur:
//             getEBRCValue("#txtFOBFCur_EBRCDetails"),

//         ebrcRemarks:
//             getEBRCValue("#txtEBRCRemarks_EBRCDetails")

//     };

// }