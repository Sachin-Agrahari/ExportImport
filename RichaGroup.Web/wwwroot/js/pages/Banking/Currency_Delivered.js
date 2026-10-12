$(document).ready(function () {

    initCurrencyDelivered();

    // select 2 init 

    $("#ddlCurrency_CurrencyDelivered").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select any of them..."
    });
    $("#ddlBank_CurrencyDelivered").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select any of them..."
    });
    bindCurrencyDeliverd();
    //help of table entry no 
    bindCurrencyDeliveredEntryHelp();

//help om click of entry help
    $("#btnentryNoHelp").on("click", function () {
        //open modal here
        $('#addMenuModalHelpEntryNo').modal('show')

 })

});
// Page Initialization

function initCurrencyDelivered() {

    // Date Pickers
    initCurrencyDeliveredDatePickers();


    // Save Button
    $("#btnAdd").on("click", function () {

         $('#addMenuModal').modal('show');

    });

     
    // Radio Change
    $("input[name='ExportImport_CurrencyDelivered']").on(
        "change",
        function () {

            const selectedValue = $(
                "input[name='ExportImport_CurrencyDelivered']:checked"
            ).val();

            console.log(
                "[CurrencyDelivered] Selected Type:",
                selectedValue
            );

        }
    );

}
// Date Pickers

function initCurrencyDeliveredDatePickers() {

    if ($("#txtCancelDate_CurrencyDelivered").length) {

        flatpickr("#txtCancelDate_CurrencyDelivered", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    if ($("#txtEntryDate_CurrencyDelivered").length) {

        flatpickr("#txtEntryDate_CurrencyDelivered", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    if ($("#txtDueDate_CurrencyDelivered").length) {

        flatpickr("#txtDueDate_CurrencyDelivered", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    if ($("#txtToDate_CurrencyDelivered").length) {

        flatpickr("#txtToDate_CurrencyDelivered", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

}
//staic data
let transactionData = [
    {
        trxNo: "TRX-0001",
        code: "COMP01",
        currency: "USD",
        cancelDate: "05-10-2026",
        cancelAmount: "5,000.00",
        transactionAmount: "25,000.00",
        bookingRate: "83.45",
        currencyRate: "83.50",
        currencyINR: "2,087,500.00",
        masterTransactionNo: "MTRX-1001",
        contractNo: "CON-2026-001"
    },
    {
        trxNo: "TRX-0002",
        code: "COMP02",
        currency: "EUR",
        cancelDate: "06-10-2026",
        cancelAmount: "2,500.00",
        transactionAmount: "18,500.50",
        bookingRate: "98.25",
        currencyRate: "98.50",
        currencyINR: "1,822,299.25",
        masterTransactionNo: "MTRX-1002",
        contractNo: "CON-2026-002"
    },
    {
        trxNo: "TRX-0003",
        code: "COMP01",
        currency: "GBP",
        cancelDate: "07-10-2026",
        cancelAmount: "7,250.00",
        transactionAmount: "32,750.00",
        bookingRate: "115.60",
        currencyRate: "116.00",
        currencyINR: "3,799,000.00",
        masterTransactionNo: "MTRX-1003",
        contractNo: "CON-2026-003"
    },
    {
        trxNo: "TRX-0004",
        code: "COMP03",
        currency: "USD",
        cancelDate: "08-10-2026",
        cancelAmount: "1,200.00",
        transactionAmount: "14,200.00",
        bookingRate: "83.50",
        currencyRate: "83.60",
        currencyINR: "1,187,120.00",
        masterTransactionNo: "MTRX-1004",
        contractNo: "CON-2026-004"
    },
    {
        trxNo: "TRX-0005",
        code: "COMP02",
        currency: "USD",
        cancelDate: "09-10-2026",
        cancelAmount: "850.75",
        transactionAmount: "9,850.75",
        bookingRate: "83.58",
        currencyRate: "83.65",
        currencyINR: "823,014.14",
        masterTransactionNo: "MTRX-1005",
        contractNo: "CON-2026-005"
    }
];

//bind data here 
let currencyDeliveredTable = null;

// function bindCurrencyDeliverd() {

//     const $table = $("#tblCurrencyDelivered");
//     const $tbody = $("#tblCurrencyDeliveredBody");

//     if (!$table.length || !$tbody.length) {
//         console.error("[CurrencyDelivered] Table not found.");
//         return;
//     }

//     Existing DataTable destroy
//     if ($.fn.DataTable.isDataTable("#tblCurrencyDelivered")) {
//         $table.DataTable().destroy();
//     }

//     $tbody.empty();

//     if (!transactionData.length) {

//         $("#noRecordsFound_CurrencyDelivered").removeClass("d-none");

//         $tbody.html(`
//             <tr>
//                 <td colspan="11" class="text-center">
//                     No Currency Delivered Data Found.
//                 </td>
//             </tr>
//         `);

//         return;
//     }

//     $("#noRecordsFound_CurrencyDelivered").addClass("d-none");

//     $.each(transactionData, function (index, item) {

//         const row = `
//             <tr>

//                 <td class="text-center">
//                     <button type="button"
//                             class="row-btn edit-btn"
//                             title="Edit"
//                             onclick="EditMatser('${item.trxNo}')"
//                             data-code="${item.trxNo}">
//                         <i class="fa-solid fa-pen-to-square"></i>
//                     </button>
//                 </td>

//                 <td>${item.trxNo || "—"}</td>

//                 <td>${item.code || "—"}</td>

//                 <td>${item.currency || "—"}</td>

//                 <td>${item.entryNumber || "—"}</td>

//                 <td>${item.exportBondNumber || "—"}</td>

//                 <td class="text-end">
//                     ${item.amount || "—"}
//                 </td>

//                 <td class="text-end">
//                     ${item.conversionRate || "—"}
//                 </td>

//                 <td>${item.bank || "—"}</td>

//                 <td>${item.trxType || "—"}</td>

//                 <td>${item.remark || "—"}</td>

//             </tr>
//         `;

//         $tbody.append(row);
//     });

//     Initialize DataTable
//     currencyDeliveredTable = $table.DataTable({
//         paging: true,
//         pageLength: 5,
//         lengthChange: false,
//         searching: true,
//         ordering: false,
//         info: true,
//         autoWidth: false,
//         scrollX: true,

//         language: {
//             emptyTable: "No Currency Delivered Data Found.",
//             search: "Search:"
//         }
//     });
// }

function bindCurrencyDeliverd() {

    const $table = $("#tblCurrencyDelivered");
    const $tbody = $("#tblCurrencyDeliveredBody");

    if (!$table.length || !$tbody.length) {
        console.error("[CurrencyDelivered] Table or tbody not found.");
        return;
    }

    // Destroy existing DataTable
    if ($.fn.DataTable.isDataTable("#tblCurrencyDelivered")) {
        $table.DataTable().destroy();
    }

    $tbody.empty();

    if (!transactionData.length) {
        $("#noRecordsFound_CurrencyDelivered").removeClass("d-none");

        $tbody.html(`
            <tr>
                <td colspan="12" class="text-center">
                    No Currency Delivered Data Found.
                </td>
            </tr>
        `);

        return;
    }

    $("#noRecordsFound_CurrencyDelivered").addClass("d-none");

    $.each(transactionData, function (index, item) {

        const row = `
            <tr>
                <td class="text-center">
                    <button type="button"
                            class="row-btn edit-btn"
                            title="Edit"
                            onclick="EditMatser('${item.trxNo}')"
                            data-code="${item.trxNo}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${item.trxNo || "—"}</td>
                <td>${item.code || "—"}</td>
                <td>${item.currency || "—"}</td>
                <td>${item.cancelDate || "—"}</td>

                <td class="text-end">
                    ${item.cancelAmount || "—"}
                </td>

                <td class="text-end">
                    ${item.transactionAmount || "—"}
                </td>

                <td class="text-end">
                    ${item.bookingRate || "—"}
                </td>

                <td class="text-end">
                    ${item.currencyRate || "—"}
                </td>

                <td class="text-end">
                    ${item.currencyINR || "—"}
                </td>

                <td>${item.masterTransactionNo || "—"}</td>
                <td>${item.contractNo || "—"}</td>
            </tr>
        `;

        $tbody.append(row);
    });

    // Initialize DataTable
    currencyDeliveredTable = $table.DataTable({
        paging: true,
        pageLength: 5,
        lengthChange: false,
        searching: true,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,
        destroy: true,

        language: {
            emptyTable: "No Currency Delivered Data Found.",
            search: "Search:"
        }
    });
}


function EditMatser(id) {
     $('#addMenuModal').modal('show')
}

//modal help table bind here 
//static data here 
const currencyDeliveredEntryHelpData = [
    {
        trxNo: "TRX-1001",
        dt: "01-09-2025",
        amt: "15000.00",
        rate: "83.25",
        fromDt: "01-09-2025",
        toDt: "30-09-2025",
        inr: "1,248,750.00",
        contractNo: "CNT-1001"
    },
    {
        trxNo: "TRX-1002",
        dt: "05-09-2025",
        amt: "22000.00",
        rate: "83.40",
        fromDt: "05-09-2025",
        toDt: "05-10-2025",
        inr: "1,834,800.00",
        contractNo: "CNT-1002"
    },
    {
        trxNo: "TRX-1003",
        dt: "10-09-2025",
        amt: "18500.00",
        rate: "83.10",
        fromDt: "10-09-2025",
        toDt: "10-10-2025",
        inr: "1,537,350.00",
        contractNo: "CNT-1003"
    },
    {
        trxNo: "TRX-1004",
        dt: "15-09-2025",
        amt: "12500.00",
        rate: "83.55",
        fromDt: "15-09-2025",
        toDt: "15-10-2025",
        inr: "1,044,375.00",
        contractNo: "CNT-1004"
    },
    {
        trxNo: "TRX-1005",
        dt: "20-09-2025",
        amt: "30000.00",
        rate: "83.20",
        fromDt: "20-09-2025",
        toDt: "20-10-2025",
        inr: "2,496,000.00",
        contractNo: "CNT-1005"
    }
];

//bind table here 
function bindCurrencyDeliveredEntryHelp() {

    const $tbody = $("#tblCurrencyDeliveredEntryHelpBody");

    if (!$tbody.length) {
        console.error("tblCurrencyDeliveredEntryHelpBody not found.");
        return;
    }

    $tbody.empty();

    if (!currencyDeliveredEntryHelpData.length) {
        $("#noRecordsFound_CurrencyDelivered").removeClass("d-none");
        return;
    }

    $("#noRecordsFound_CurrencyDelivered").addClass("d-none");

    $.each(currencyDeliveredEntryHelpData, function (index, item) {

        const row = `
            <tr data-index="${index}">

               
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkCurrencyDeliveredHelp"
                           data-index="${index}">
                </td>

                <td>${item.trxNo || "—"}</td>

                <td>${item.dt || "—"}</td>

                <td class="text-end">${item.amt || "—"}</td>

                <td class="text-end">${item.rate || "—"}</td>

                <td>${item.fromDt || "—"}</td>

                <td>${item.toDt || "—"}</td>

                <td class="text-end">${item.inr || "—"}</td>

                <td>${item.contractNo || "—"}</td>

            </tr>
        `;

        $tbody.append(row);
    });
}
//select a check box 
$(document).on("change", ".chkCurrencyDeliveredHelp", function () {

    $(".chkCurrencyDeliveredHelp").not(this).prop("checked", false);

    if (!$(this).is(":checked")) {
        return;
    }

    const index = Number($(this).data("index"));
    const item = currencyDeliveredEntryHelpData[index];

    if (!item) {
        return;
    }

    console.log("Selected Currency Delivered:", item);
});
