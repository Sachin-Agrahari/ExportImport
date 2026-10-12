// ==========================================
// Expense Master - Static Dummy Data
// ==========================================

let expenseID = null;

var expenseMasterData = [

    {
        serialNo: "EXP001",
        billNo: "BILL/2026/001",
        billDate: "19-09-2026",
        chaForwarder: "CHA0569",
        paymentDate: "19-09-2026",
        chequeNo: "CHQ100001",
        chequeDate: "20-09-2026",
        billAmount: "25000.00",
        expenseType: "CHA CHARGES"
    },

    {
        serialNo: "EXP002",
        billNo: "BILL/2026/002",
        billDate: "18-09-2026",
        chaForwarder: "CHA0570",
        paymentDate: "19-09-2026",
        chequeNo: "CHQ100002",
        chequeDate: "21-09-2026",
        billAmount: "37500.00",
        expenseType: "AIR FREIGHT DOMESTIC"
    },

    {
        serialNo: "EXP003",
        billNo: "BILL/2026/003",
        billDate: "17-09-2026",
        chaForwarder: "FORWARDER001",
        paymentDate: "18-09-2026",
        chequeNo: "CHQ100003",
        chequeDate: "20-09-2026",
        billAmount: "52000.00",
        expenseType: "OTHER"
    },

    {
        serialNo: "EXP004",
        billNo: "BILL/2026/004",
        billDate: "16-09-2026",
        chaForwarder: "CHA0569",
        paymentDate: "17-09-2026",
        chequeNo: "CHQ100004",
        chequeDate: "19-09-2026",
        billAmount: "18450.50",
        expenseType: "CHA CHARGES"
    },

    {
        serialNo: "EXP005",
        billNo: "BILL/2026/005",
        billDate: "15-09-2026",
        chaForwarder: "CHA0570",
        paymentDate: "16-09-2026",
        chequeNo: "CHQ100005",
        chequeDate: "18-09-2026",
        billAmount: "31500.75",
        expenseType: "AIR FREIGHT DOMESTIC"
    },

    {
        serialNo: "EXP006",
        billNo: "BILL/2026/006",
        billDate: "14-09-2026",
        chaForwarder: "FORWARDER001",
        paymentDate: "15-09-2026",
        chequeNo: "CHQ100006",
        chequeDate: "17-09-2026",
        billAmount: "14800.00",
        expenseType: "OTHER"
    },

    {
        serialNo: "EXP007",
        billNo: "BILL/2026/007",
        billDate: "13-09-2026",
        chaForwarder: "CHA0569",
        paymentDate: "14-09-2026",
        chequeNo: "CHQ100007",
        chequeDate: "16-09-2026",
        billAmount: "62500.00",
        expenseType: "CHA CHARGES"
    },

    {
        serialNo: "EXP008",
        billNo: "BILL/2026/008",
        billDate: "12-09-2026",
        chaForwarder: "CHA0570",
        paymentDate: "13-09-2026",
        chequeNo: "CHQ100008",
        chequeDate: "15-09-2026",
        billAmount: "45900.25",
        expenseType: "AIR FREIGHT DOMESTIC"
    },

    {
        serialNo: "EXP009",
        billNo: "BILL/2026/009",
        billDate: "11-09-2026",
        chaForwarder: "FORWARDER001",
        paymentDate: "12-09-2026",
        chequeNo: "CHQ100009",
        chequeDate: "14-09-2026",
        billAmount: "22800.00",
        expenseType: "OTHER"
    },

    {
        serialNo: "EXP010",
        billNo: "BILL/2026/010",
        billDate: "10-09-2026",
        chaForwarder: "CHA0569",
        paymentDate: "11-09-2026",
        chequeNo: "CHQ100010",
        chequeDate: "13-09-2026",
        billAmount: "78500.00",
        expenseType: "CHA CHARGES"
    }

];

var invoiceDetails = [
    {
        invoiceNo: "INV-1001",
        quantity: 10,
        invoiceAmount: 25000.00,
        amount: 25000.00
    },
    {
        invoiceNo: "INV-1002",
        quantity: 5,
        invoiceAmount: 12500.00,
        amount: 12000.00
    },
    {
        invoiceNo: "INV-1003",
        quantity: 20,
        invoiceAmount: 48000.00,
        amount: 47500.00
    },
    {
        invoiceNo: "INV-1004",
        quantity: 8,
        invoiceAmount: 20000.00,
        amount: 19500.00
    }
];


// ==========================================
// DOCUMENT READY
// ==========================================

$(document).ready(function () {

    renderExpenseMasterTable(expenseMasterData);
    bindInvoiceDetails(invoiceDetails)

});


// ==========================================
// RENDER EXPENSE MASTER TABLE
// ==========================================

function renderExpenseMasterTable(data) {

    const $tbody = $("#tblExpenseMasterBody");

    $tbody.empty();


    // No records
    if (!data || data.length === 0) {

        $("#tblExpenseMaster").addClass("d-none");

        $("#noRecordsFound_ExpenseMaster")
            .removeClass("d-none");

        return;
    }


    // Show table
    $("#tblExpenseMaster").removeClass("d-none");

    $("#noRecordsFound_ExpenseMaster")
        .addClass("d-none");


    // Bind rows
    $.each(data, function (index, row) {

        const tr = ` <tr>
             
            <td class="text-center">

                <button
                    type="button"
                    class="row-btn edit-btn"
                    title="Edit"
                    onclick="EditMaster('${row.serialNo}')"
                    data-code="${row.serialNo}"> 
                   <i class="fa-solid fa-pen-to-square"></i>
                </button> 
            </td>
             
            <td>

                <span class="badge btn-primary">
                    ${row.serialNo}
                </span> 
            </td>
             
            <td> ${row.billNo} </td> 
            <td> ${row.billDate} </td> 
            <td> ${row.chaForwarder} </td> 
            <td> ${row.paymentDate} </td> 
            <td> ${row.chequeNo} </td>
            <td> ${row.chequeDate} </td> 
            <td class="text-end"> ${formatAmount(row.billAmount)} </td> 
            <td> ${row.expenseType} </td> 
        </tr>`;

        $tbody.append(tr);

    });

}


// ==========================================
// FORMAT AMOUNT
// ==========================================

function formatAmount(value) {

    return Number(value || 0).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


// ==========================================
// EDIT EXPENSE
// ==========================================

function EditMaster(ID) {
 
    $("#addMenuModal").modal("show");

}


// ==========================================
// ADD EXPENSE
// ==========================================

$("#btnAdd").on("click", function () {
 
    $("#addMenuModal").modal("show");

});

function bindInvoiceDetails(data) { 

    var $tbody = $("#tblbodyInvoiceDetails");

    $tbody.empty();

    $.each(data, function (index, item) {

        var row = ` <tr> 
                <td class="text-center"> ${index + 1} </td> 
                <td> ${item.invoiceNo} </td> 
                <td class="text-end"> ${item.quantity} </td> 
                <td class="text-end"> ${formatAmount(item.invoiceAmount)} </td> 
                <td class="text-end"> ${formatAmount(item.amount)} </td>
        </tr>`;

        $tbody.append(row);
    });
}


function formatAmount(value) {
    return Number(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
 