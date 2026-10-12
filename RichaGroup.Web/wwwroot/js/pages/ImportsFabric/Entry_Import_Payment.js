$(document).ready(function () {

    initImportPayment();

    //table bind 
    bindBOEDetailsImportPaymentTable();

    //open help 
    $("#btnBnkRefNo").on("click", function () {
        $("#addMenuModalBnkRefNoHelp").modal("show")
    })

    //table bind here  for the help
    bindLCHelpDutyPaymentTable();

    //Click of add open modal
    $("#btnAddBOEDetails").on("click", function () {
        $("#addMenuModalAddEdit").modal("show");
    })

});


function initImportPayment() {

    /*SELECT2 */

    if ($("#ddlApprovBy_EntyImportPaymt").length) {

        $("#ddlApprovBy_EntyImportPaymt").select2({
            width: "100%",
            dropdownAutoWidth: false,
            allowClear: false
        });

    }


    if ($("#ddlCurrType_EntyImportPaymt").length) {

        $("#ddlCurrType_EntyImportPaymt").select2({
            width: "100%",
            dropdownAutoWidth: false,
            allowClear: false
        });

    }
    /*DATE PICKER */

    if ($("#txtDrftdate_EntyImportPaymt").length) {

        flatpickr("#txtDrftdate_EntyImportPaymt", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    if ($("#txtPOIDt_EntyImportPaymt").length) {

        flatpickr("#txtPOIDt_EntyImportPaymt", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    /* ADD BUTTON */

    $("#btnAdd_EntyImportPaymt").on("click", function () {

        Swal.fire({
            icon: "success",
            title: "Added",
            text: "Import Payment added successfully.",
            timer: 1000,
            showConfirmButton: false
        });

    });

    /*REFRESH*/

    $("#btnRefresh_EntyImportPaymt").on("click", function () {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to refresh this page?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Refresh",
            cancelButtonText: "Cancel"
        }).then(function (result) {

            if (result.isConfirmed) {

                location.reload();

            }

        });

    });

}

//on POI Select  field 
$(document).on("change", "#ddlPOI_EntyImportPaymt", function () {

    const selectedValue = $(this).val();

    // Non-Submitted / empty
    if (selectedValue !== "Submitted") {

        $("#paymentRequestField_EntyImportPaymt")
            .addClass("d-none");

        $("#txtPaymentRequestNo_EntyImportPaymt")
            .val("");

        return;
    }

    Swal.fire({
        title: "Payment Request",
        input: "text",
        inputLabel: "Payment Request No",
        inputPlaceholder: "Enter Payment Request No",
        inputAttributes: {
            autocomplete: "off"
        },
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",

        inputValidator: (value) => {

            if (!value || !value.trim()) {
                return "Payment Request No is required.";
            }

        }

    }).then((result) => {

        if (result.isConfirmed) {

            const paymentRequestNo = result.value.trim();

            console.log("Payment Request No:", paymentRequestNo);

            // Value set karo
            $("#txtPaymentRequestNo_EntyImportPaymt")
                .val(paymentRequestNo);

            // Field show karo
            $("#paymentRequestField_EntyImportPaymt")
                .removeClass("d-none");

        } else {

            // Cancel par POI reset
            $("#ddlPOI_EntyImportPaymt")
                .val("");

            $("#paymentRequestField_EntyImportPaymt")
                .addClass("d-none");

            $("#txtPaymentRequestNo_EntyImportPaymt")
                .val("");
        }

    });

});

//main tavble data bind here
const boeDetailsImportPaymentData = [
    {
        id: 1,
        boeNo: "BOE-1001",
        boeDate: "01-09-2025",
        boeAmount: "125000.00",
        terms: "FOB",
        invoiceNo: "INV-1001",
        invoiceDate: "01-09-2025",
        paymentRefNo: "PAY-1001",

        detailSrNo: 1,
        detailBoeNo: "BOE-1001",
        dtd: "05-09-2025",
        qty: "1500",
        pcs: "100"
    },
    {
        id: 2,
        boeNo: "BOE-1002",
        boeDate: "05-09-2025",
        boeAmount: "185500.00",
        terms: "CIF",
        invoiceNo: "INV-1002",
        invoiceDate: "05-09-2025",
        paymentRefNo: "PAY-1002",

        detailSrNo: 2,
        detailBoeNo: "BOE-1002",
        dtd: "09-09-2025",
        qty: "2200",
        pcs: "150"
    },
    {
        id: 3,
        boeNo: "BOE-1003",
        boeDate: "10-09-2025",
        boeAmount: "95000.00",
        terms: "FOB",
        invoiceNo: "INV-1003",
        invoiceDate: "10-09-2025",
        paymentRefNo: "PAY-1003",

        detailSrNo: 3,
        detailBoeNo: "BOE-1003",
        dtd: "14-09-2025",
        qty: "1100",
        pcs: "80"
    },
    {
        id: 4,
        boeNo: "BOE-1004",
        boeDate: "15-09-2025",
        boeAmount: "275000.00",
        terms: "CIF",
        invoiceNo: "INV-1004",
        invoiceDate: "15-09-2025",
        paymentRefNo: "PAY-1004",

        detailSrNo: 4,
        detailBoeNo: "BOE-1004",
        dtd: "19-09-2025",
        qty: "3000",
        pcs: "200"
    },
    {
        id: 5,
        boeNo: "BOE-1005",
        boeDate: "20-09-2025",
        boeAmount: "145750.00",
        terms: "FOB",
        invoiceNo: "INV-1005",
        invoiceDate: "20-09-2025",
        paymentRefNo: "PAY-1005",

        detailSrNo: 5,
        detailBoeNo: "BOE-1005",
        dtd: "24-09-2025",
        qty: "1750",
        pcs: "120"
    }
];

//bind table here 
function bindBOEDetailsImportPaymentTable() {

    const $tbody = $("#tblbodyBOEDteials_ImportPyament");

    if (!$tbody.length) {
        console.error("tblbodyBOEDteials_ImportPyament not found.");
        return;
    }

    $tbody.empty();

    $.each(boeDetailsImportPaymentData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <!-- Action -->
                <td class="text-center">
                    <button type="button"
                            class="row-btn edit-btn btnEditBOEImportPayment"
                            data-id="${item.id}"
                            onclick="EditMasterOpen(${item.id})"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <!-- Sr No -->
                <td class="text-center">
                    ${index + 1}
                </td>

                <!-- BOE -->
                <td>
                    ${item.boeNo || "—"}
                </td>

                <!-- BOE DT -->
                <td>
                    ${item.boeDate || "—"}
                </td>

                <!-- BOE Amount -->
                <td class="text-end">
                    ${item.boeAmount || "—"}
                </td>

                <!-- Terms -->
                <td>
                    ${item.terms || "—"}
                </td>

                <!-- Invoice No -->
                <td>
                    ${item.invoiceNo || "—"}
                </td>

                <!-- Invoice Date -->
                <td>
                    ${item.invoiceDate || "—"}
                </td>

                <!-- Payment Ref No -->
                <td>
                    ${item.paymentRefNo || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}

//open modal ok edit click 
function EditMasterOpen(id) {

    const item = boeDetailsImportPaymentData.find(x => x.id === Number(id));

    if (!item) {
        console.error("Record not found:", id);
        return;
    }

    console.log("Selected Record:", item);

    // Selected row ka data modal fields me bind
    $("#txtBOENo_ImportPayment").val(item.boeNo);
    $("#txtBOEDate_ImportPayment").val(item.boeDate);
    $("#txtBOEAmount_ImportPayment").val(item.boeAmount);
    $("#txtTerms_ImportPayment").val(item.terms);
    $("#txtInvoiceNo_ImportPayment").val(item.invoiceNo);
    $("#txtInvoiceDate_ImportPayment").val(item.invoiceDate);
    $("#txtPaymentRefNo_ImportPayment").val(item.paymentRefNo);

    $("#txtSrNo_ImportPayment").val(item.detailSrNo);
    $("#txtDetailBOENo_ImportPayment").val(item.detailBoeNo);
    $("#txtDTD_ImportPayment").val(item.dtd);
    $("#txtQty_ImportPayment").val(item.qty);
    $("#txtPCS_ImportPayment").val(item.pcs);

    // Open modal
    const modalEl = document.getElementById("addMenuModalAddEdit");

    if (!modalEl) {
        console.error("#addMenuModalAddEdit not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalEl)
        .show();
}

 //data bind here help 
// Static data
const lcHelpDutyPaymentData = [
    {
        id: 1,
        bankRefNo: "BR-1001",
        bankRefDate: "01-09-2025",
        favouring: "ABC EXPORTS",
        currency: "USD",
        amount: "25,000.00",
        paymentType: "Advance",
        paymentOf: "Import Duty",
        invoiceNo: "INV-1001",
        invoiceDate: "01-09-2025"
    },
    {
        id: 2,
        bankRefNo: "BR-1002",
        bankRefDate: "05-09-2025",
        favouring: "XYZ TEXTILES",
        currency: "EUR",
        amount: "18,500.00",
        paymentType: "Direct",
        paymentOf: "Custom Duty",
        invoiceNo: "INV-1002",
        invoiceDate: "05-09-2025"
    },
    {
        id: 3,
        bankRefNo: "BR-1003",
        bankRefDate: "10-09-2025",
        favouring: "GLOBAL FABRICS",
        currency: "USD",
        amount: "32,750.00",
        paymentType: "Advance",
        paymentOf: "IGST",
        invoiceNo: "INV-1003",
        invoiceDate: "10-09-2025"
    },
    {
        id: 4,
        bankRefNo: "BR-1004",
        bankRefDate: "15-09-2025",
        favouring: "AEO SUPPLIERS",
        currency: "GBP",
        amount: "14,200.00",
        paymentType: "Direct",
        paymentOf: "Import Duty",
        invoiceNo: "INV-1004",
        invoiceDate: "15-09-2025"
    },
    {
        id: 5,
        bankRefNo: "BR-1005",
        bankRefDate: "20-09-2025",
        favouring: "BELK TRADERS",
        currency: "USD",
        amount: "21,300.00",
        paymentType: "Advance",
        paymentOf: "Custom Duty",
        invoiceNo: "INV-1005",
        invoiceDate: "20-09-2025"
    }
];


// Bind table
function bindLCHelpDutyPaymentTable() {

    const $tbody = $("#tblbodyLCHelpDutyPayment");

    if (!$tbody.length) {
        console.error("tblbodyLCHelpDutyPayment not found.");
        return;
    }

    $tbody.empty();

    $.each(lcHelpDutyPaymentData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkLCHelpDutyPayment"
                           data-index="${index}">
                </td>

                <td>${item.bankRefNo || "—"}</td>

                <td>${item.bankRefDate || "—"}</td>

                <td>${item.favouring || "—"}</td>

                <td>${item.currency || "—"}</td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td>${item.paymentType || "—"}</td>

                <td>${item.paymentOf || "—"}</td>

                <td>${item.invoiceNo || "—"}</td>

                <td>${item.invoiceDate || "—"}</td>

            </tr>
        `;

        $tbody.append(row);
    });
}

$(document).on("change", ".chkLCHelpDutyPayment", function () {

    $(".chkLCHelpDutyPayment")
        .not(this)
        .prop("checked", false);

});