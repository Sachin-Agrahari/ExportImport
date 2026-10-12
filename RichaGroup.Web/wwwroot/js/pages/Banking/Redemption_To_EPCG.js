$(document).ready(function () {

    initExportRedemptionEPCG();

});
// PAGE INITIALIZATION

function initExportRedemptionEPCG() {

    bindExportRedemptionEPCGData(exportRedemptionEPCGData);

    initEPCGDatePickers();

    initEPCGSelect2();

     


    initEPCGSave();

}

//on click of tag line button 
$("#btnTagLine").on("click", function() {
    $("#OpenMenuModalTagLine").modal("show");
})

//help in click of Lic to Tag help 
$(document).on("click", "#btnLicTpTag", function () {

    bindLicTagTable();

    const modalEl = document.getElementById(
        "OpenMenuModalLicTagHelp"
    );

    bootstrap.Modal
        .getOrCreateInstance(modalEl)
        .show();
});
// $("#btnLicTpTag").on("click", function(){
//     $("#OpenMenuModalLicTagHelp").modal("show");
//     bindLicTagTable();
// })
// FLATPICKR

function initEPCGDatePickers() {

    const dateIds = [

        "#txtFrom1_ExportRedemptionEPCG",
        "#txtTo1_ExportRedemptionEPCG",

        "#txtFrom2_ExportRedemptionEPCG",
        "#txtTo2_ExportRedemptionEPCG",

        "#txtFrom3_ExportRedemptionEPCG",
        "#txtTo3_ExportRedemptionEPCG"

    ];


    dateIds.forEach(function (selector) {

        if ($(selector).length) {

            // Prevent duplicate initialization
            if (
                document.querySelector(selector)._flatpickr
            ) {
                return;
            }


            flatpickr(selector, {

                dateFormat: "d-m-Y",

                allowInput: true

            });

        }

    });

}
//add button click event
 $("#btnAdd").on("click", function () {

          $('#addMenuModal').modal('show')   
    })
// SELECT2

function initEPCGSelect2() {

    $(".select2-field").each(function () {

        if ($(this).hasClass("select2-hidden-accessible")) {
            return;
        }


        $(this).select2({

            width: "100%",

            dropdownAutoWidth: false,

            placeholder: "Currency",

            allowClear: true

        });

    });

}
// STATIC DATA
const exportRedemptionEPCGData = [

    {
        id: 1,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2434/23-24",
        shippingBill: "4843508",
        shippingBillDate: "18-10-2023",
        netFob: 2010.00,
        currency: "UK",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-001",
        currencyType: "USD",
        currencyRate: 83.25,
        netImp: 167325.00,
        usdRate: 83.25,
        netUsd: 2010.00,
        party: "ABC EXPORTS",
        co: "CO-1001",
        refNo: "REF-1001",
        refDate: "20-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-001",
        realizationDate: "25-10-2023",
        fob: 2010.00,
        cf: 20.10,
        brcAmount: 2010.00,
        realizationRate: 83.25,
        couCurrency: "USD",
        freeInr: 1500.00,
        insInr: 500.00,
        freeCurrency: 18.00,
        invoiceDate: "17-10-2023",
        insCurrency: "USD",
        discountCurrency: 10.00,
        discountInr: 832.50,
        remarks: "Export completed"
    },

    {
        id: 2,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2433/23-24",
        shippingBill: "4843503",
        shippingBillDate: "23-10-2023",
        netFob: 1430.00,
        currency: "UK",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-002",
        currencyType: "USD",
        currencyRate: 83.10,
        netImp: 118773.00,
        usdRate: 83.10,
        netUsd: 1430.00,
        party: "XYZ EXPORTS",
        co: "CO-1002",
        refNo: "REF-1002",
        refDate: "24-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-002",
        realizationDate: "28-10-2023",
        fob: 1430.00,
        cf: 14.30,
        brcAmount: 1430.00,
        realizationRate: 83.10,
        couCurrency: "USD",
        freeInr: 1200.00,
        insInr: 350.00,
        freeCurrency: 14.00,
        invoiceDate: "22-10-2023",
        insCurrency: "USD",
        discountCurrency: 8.00,
        discountInr: 664.80,
        remarks: "Realized"
    },

    {
        id: 3,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2617/23-24",
        shippingBill: "4857596",
        shippingBillDate: "25-10-2023",
        netFob: 195.60,
        currency: "US$",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-003",
        currencyType: "USD",
        currencyRate: 83.40,
        netImp: 16313.04,
        usdRate: 83.40,
        netUsd: 195.60,
        party: "PQR EXPORTS",
        co: "CO-1003",
        refNo: "REF-1003",
        refDate: "26-10-2023",
        bankAccountTransfer: "No",
        pp: "PP-003",
        realizationDate: "30-10-2023",
        fob: 195.60,
        cf: 2.00,
        brcAmount: 195.60,
        realizationRate: 83.40,
        couCurrency: "USD",
        freeInr: 150.00,
        insInr: 50.00,
        freeCurrency: 1.80,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 2.00,
        discountInr: 166.80,
        remarks: "Pending verification"
    },

    {
        id: 4,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2411/23-24",
        shippingBill: "4867221",
        shippingBillDate: "25-10-2023",
        netFob: 383.01,
        currency: "US$",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-004",
        currencyType: "USD",
        currencyRate: 83.55,
        netImp: 31996.49,
        usdRate: 83.55,
        netUsd: 383.01,
        party: "LMN EXPORTS",
        co: "CO-1004",
        refNo: "REF-1004",
        refDate: "27-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-004",
        realizationDate: "01-11-2023",
        fob: 383.01,
        cf: 3.83,
        brcAmount: 383.01,
        realizationRate: 83.55,
        couCurrency: "USD",
        freeInr: 300.00,
        insInr: 80.00,
        freeCurrency: 3.50,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 3.00,
        discountInr: 250.65,
        remarks: "Realized"
    },

    {
        id: 5,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2409/23-24",
        shippingBill: "4857409",
        shippingBillDate: "25-10-2023",
        netFob: 17867.77,
        currency: "US$",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-005",
        currencyType: "USD",
        currencyRate: 83.65,
        netImp: 1494620.00,
        usdRate: 83.65,
        netUsd: 17867.77,
        party: "DEF EXPORTS",
        co: "CO-1005",
        refNo: "REF-1005",
        refDate: "28-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-005",
        realizationDate: "03-11-2023",
        fob: 17867.77,
        cf: 178.68,
        brcAmount: 17867.77,
        realizationRate: 83.65,
        couCurrency: "USD",
        freeInr: 14000.00,
        insInr: 3500.00,
        freeCurrency: 165.00,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 25.00,
        discountInr: 2091.25,
        remarks: "Export realized"
    },

    {
        id: 6,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2410/23-24",
        shippingBill: "4867239",
        shippingBillDate: "25-10-2023",
        netFob: 700.63,
        currency: "US$",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-006",
        currencyType: "USD",
        currencyRate: 83.70,
        netImp: 58642.73,
        usdRate: 83.70,
        netUsd: 700.63,
        party: "GHI EXPORTS",
        co: "CO-1006",
        refNo: "REF-1006",
        refDate: "28-10-2023",
        bankAccountTransfer: "No",
        pp: "PP-006",
        realizationDate: "04-11-2023",
        fob: 700.63,
        cf: 7.01,
        brcAmount: 700.63,
        realizationRate: 83.70,
        couCurrency: "USD",
        freeInr: 550.00,
        insInr: 140.00,
        freeCurrency: 6.00,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 5.00,
        discountInr: 418.50,
        remarks: "Realized"
    },

    {
        id: 7,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2411/23-24",
        shippingBill: "4878899",
        shippingBillDate: "25-10-2023",
        netFob: 6790.50,
        currency: "US$",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-007",
        currencyType: "USD",
        currencyRate: 83.80,
        netImp: 568644.90,
        usdRate: 83.80,
        netUsd: 6790.50,
        party: "JKL EXPORTS",
        co: "CO-1007",
        refNo: "REF-1007",
        refDate: "29-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-007",
        realizationDate: "05-11-2023",
        fob: 6790.50,
        cf: 67.91,
        brcAmount: 6790.50,
        realizationRate: 83.80,
        couCurrency: "USD",
        freeInr: 5300.00,
        insInr: 1350.00,
        freeCurrency: 62.00,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 10.00,
        discountInr: 838.00,
        remarks: "Realized"
    },

    {
        id: 8,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2280/23-24",
        shippingBill: "4878896",
        shippingBillDate: "25-10-2023",
        netFob: 8356.50,
        currency: "UK",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-008",
        currencyType: "USD",
        currencyRate: 83.90,
        netImp: 701100.35,
        usdRate: 83.90,
        netUsd: 8356.50,
        party: "MNO EXPORTS",
        co: "CO-1008",
        refNo: "REF-1008",
        refDate: "29-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-008",
        realizationDate: "06-11-2023",
        fob: 8356.50,
        cf: 83.57,
        brcAmount: 8356.50,
        realizationRate: 83.90,
        couCurrency: "USD",
        freeInr: 6500.00,
        insInr: 1700.00,
        freeCurrency: 78.00,
        invoiceDate: "24-10-2023",
        insCurrency: "USD",
        discountCurrency: 12.00,
        discountInr: 1006.80,
        remarks: "Under process"
    },

    {
        id: 9,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2682/23-24",
        shippingBill: "4897862",
        shippingBillDate: "26-10-2023",
        netFob: 46.20,
        currency: "UK",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-009",
        currencyType: "USD",
        currencyRate: 84.00,
        netImp: 3880.80,
        usdRate: 84.00,
        netUsd: 46.20,
        party: "STU EXPORTS",
        co: "CO-1009",
        refNo: "REF-1009",
        refDate: "30-10-2023",
        bankAccountTransfer: "No",
        pp: "PP-009",
        realizationDate: "07-11-2023",
        fob: 46.20,
        cf: 0.46,
        brcAmount: 46.20,
        realizationRate: 84.00,
        couCurrency: "USD",
        freeInr: 35.00,
        insInr: 10.00,
        freeCurrency: 0.40,
        invoiceDate: "25-10-2023",
        insCurrency: "USD",
        discountCurrency: 1.00,
        discountInr: 84.00,
        remarks: "Pending"
    },

    {
        id: 10,
        x: "N",
        remForXcld: "--",
        prodExp: "R.M.G.",
        invoiceNo: "RE/2600/23-24",
        shippingBill: "4899000",
        shippingBillDate: "26-10-2023",
        netFob: 74.00,
        currency: "UK",
        f1: 0.00,
        dbkType: "DBK",
        tag1: "N",
        licenceNo: "",
        bank: "",
        remark: "",
        mExport: 0.00,
        type: "",

        licSNo: "LIC-SN-010",
        currencyType: "USD",
        currencyRate: 84.10,
        netImp: 6223.40,
        usdRate: 84.10,
        netUsd: 74.00,
        party: "VWX EXPORTS",
        co: "CO-1010",
        refNo: "REF-1010",
        refDate: "30-10-2023",
        bankAccountTransfer: "Yes",
        pp: "PP-010",
        realizationDate: "08-11-2023",
        fob: 74.00,
        cf: 0.74,
        brcAmount: 74.00,
        realizationRate: 84.10,
        couCurrency: "USD",
        freeInr: 55.00,
        insInr: 18.00,
        freeCurrency: 0.60,
        invoiceDate: "25-10-2023",
        insCurrency: "USD",
        discountCurrency: 1.50,
        discountInr: 126.15,
        remarks: "Realized"
    }

];
// NUMBER FORMAT

function formatEPCGNumber(value, decimals) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "";
    }


    const number = parseFloat(value);


    if (isNaN(number)) {
        return value;
    }


    return number.toLocaleString("en-IN", {

        minimumFractionDigits: decimals,

        maximumFractionDigits: decimals

    });

}
// BIND TABLE DATA

function bindExportRedemptionEPCGData(data) {

    const $tbody = $("#tblbodyExportRedemptionEPCG");

    if (!$tbody.length) {
        console.error(
            "[ExportRedemptionEPCG] Table body not found."
        );
        return;
    }

    $tbody.empty();

    $.each(data, function (index, item) {

        const row = `

            <tr>

                <!-- Action -->
                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        data-id="${item.id}"
                        title="Update License"
                        onclick="EditMaster(${item.id})">

                        <i class="fa-solid fa-pen-to-square"></i>

                    </button>
                </td>

                <!-- Select -->
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkAdvanceF"
                           id="chkAdvanceF_${item.id}"
                           data-id="${item.id}">
                </td>
                 
                <!-- Prod_Exp -->
                <td>${item.prodExp || ""}</td>

                <!-- Invoice No -->
                <td>${item.invoiceNo || ""}</td>

                <!-- Shipping Bill -->
                <td>${item.shippingBill || ""}</td>

                <!-- Shp_bill_Dt -->
                <td>${item.shippingBillDate || ""}</td>

                <!-- Net_Fob -->
                <td class="text-end">
                    ${formatEPCGNumber(item.netFob, 2)}
                </td>

                <!-- Currency -->
                <td>${item.currency || ""}</td>

                <!-- Flag -->
                <td>${item.x || ""}</td>

                <!-- Dbk_Type -->
                <td>${item.dbkType || ""}</td>

                <!-- Bank -->
                <td>${item.bank || ""}</td>

                <!-- Remark -->
                <td>${item.remark || ""}</td>

                <!-- M_Export -->
                <td class="text-end">
                    ${formatEPCGNumber(item.mExport, 2)}
                </td>

                <!-- Currency Type -->
                <td>${item.currencyType || ""}</td>

                <!-- Currency Rate -->
                <td class="text-end">
                    ${formatEPCGNumber(item.currencyRate, 4)}
                </td>

                <!-- Net Imp -->
                <td class="text-end">
                    ${formatEPCGNumber(item.netImp, 2)}
                </td>

                <!-- USD Rate -->
                <td class="text-end">
                    ${formatEPCGNumber(item.usdRate, 4)}
                </td>

                <!-- Net USD -->
                <td class="text-end">
                    ${formatEPCGNumber(item.netUsd, 2)}
                </td>

                <!-- Party -->
                <td>${item.party || ""}</td>

                <!-- CO -->
                <td>${item.co || ""}</td>

                <!-- Ref No -->
                <td>${item.refNo || ""}</td>

                <!-- Ref Date -->
                <td>${item.refDate || ""}</td>

                <!-- Bank Account Transfer -->
                <td>${item.bankAccountTransfer || ""}</td>

                <!-- PP -->
                <td>${item.pp || ""}</td>

                <!-- Realzation Date -->
                <td>${item.realizationDate || ""}</td>

                <!-- Fob -->
                <td class="text-end">
                    ${formatEPCGNumber(item.fob, 2)}
                </td>

                <!-- CF -->
                <td class="text-end">
                    ${formatEPCGNumber(item.cf, 2)}
                </td>

                <!-- BRC Amount -->
                <td class="text-end">
                    ${formatEPCGNumber(item.brcAmount, 2)}
                </td>

                <!-- Realization Rate -->
                <td class="text-end">
                    ${formatEPCGNumber(item.realizationRate, 4)}
                </td>

                <!-- Cou_Cuurency -->
                <td>${item.couCurrency || ""}</td>

                <!-- Free INR -->
                <td class="text-end">
                    ${formatEPCGNumber(item.freeInr, 2)}
                </td>

                <!-- INS INR -->
                <td class="text-end">
                    ${formatEPCGNumber(item.insInr, 2)}
                </td>

                <!-- Free Currency -->
                <td class="text-end">
                    ${formatEPCGNumber(item.freeCurrency, 2)}
                </td>

                <!-- Invoice Date -->
                <td>${item.invoiceDate || ""}</td>

                <!-- Ins Currency -->
                <td class="text-end">
                    ${formatEPCGNumber(item.insCurrency, 2)}
                </td>

                <!-- Discount Currency -->
                <td class="text-end">
                    ${formatEPCGNumber(item.discountCurrency, 2)}
                </td>

                <!-- Discount INR -->
                <td class="text-end">
                    ${formatEPCGNumber(item.discountInr, 2)}
                </td>

                <!-- Remarks -->
                <td>${item.remarks || ""}</td>

            </tr>
        `;

        $tbody.append(row);

    });
}
  
$(document).on("click", "#btnExportObligationAvg", function () {

    const $selected = $(".chkAdvanceF:checked");

    if (!$selected.length) {
        showWarning(
            "Selection Required",
            "Please select a record first."
        );
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("exportObligationDateModal")
        )
        .show();
});
//after ok then show a field
//$(document).on("click", "#btnExportObligationDateOK", function () {

//    const fromDate = $("#txtExportFromDate").val().trim();
//    const toDate = $("#txtExportToDate").val().trim();

//    if (!fromDate) {
//        showWarning("From Date Required", "Please select From Date.");
//        return;
//    }

//    if (!toDate) {
//        showWarning("To Date Required", "Please select To Date.");
//        return;
//    }

//    // Date modal close
//    const modalEl = document.getElementById(
//        "exportObligationDateModal"
//    );

//    bootstrap.Modal
//        .getOrCreateInstance(modalEl)
//        .hide();

//    // Show fields
//    $("#exportObligationResultFields")
//        .removeClass("d-none");

//    // Example values
//    $("#txtExportObligation").val("25,000.00");
//    $("#txtAvgAmount").val("5,000.00");
//});


$(document).on("click", "#btnExportObligationDateOK", function () {

    const fromDate = $("#txtExportFromDate").val().trim();
    const toDate = $("#txtExportToDate").val().trim();

    if (!fromDate) {
        showWarning("From Date Required", "Please select From Date.");
        return;
    }

    if (!toDate) {
        showWarning("To Date Required", "Please select To Date.");
        return;
    }

    // Parse dates
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (isNaN(from.getTime()) || isNaN(to.getTime())) {
        showWarning("Invalid Date", "Please select valid dates.");
        return;
    }

    if (to < from) {
        showWarning("Invalid Date Range", "To Date must be greater than or equal to From Date.");
        return;
    }

    // Calculate year difference
    let yearDiff = to.getFullYear() - from.getFullYear();

    // Date modal close (existing functionality)
    const modalEl = document.getElementById(
        "exportObligationDateModal"
    );

    bootstrap.Modal
        .getOrCreateInstance(modalEl)
        .hide();

    // Show fields (existing functionality)
    $("#exportObligationResultFields")
        .removeClass("d-none");

    // Existing example values
    $("#txtExportObligation").val("25,000.00");
    $("#txtAvgAmount").val("5,000.00");

    // Append Avg Amount designs
    const avgAmount = $("#txtAvgAmount").val();

    let html = "";

    for (let i = 1; i <= yearDiff; i++) {
        html += `
            <div class="field border border-success-subtle
                        bg-success bg-opacity-10 rounded-3
                        p-3 shadow-sm mb-3">

                <label class="form-label mb-2 fw-semibold text-success">
                    Avg Amount - Year ${i}:
                    <span>${avgAmount}</span>
                </label>

            </div>
        `;
    }

    $("#dvAvrageAmound").html(html);

});


//open modal to click a edit button in table 
function EditMaster(id) {

    const item = exportRedemptionEPCGData.find(x =>
        Number(x.id) === Number(id)
    );

    if (!item) {
        showWarning(
            "Record Not Found",
            "Export record not found."
        );
        return;
    }

    // Fill partial fields
    $("#txtX").val(item.x ?? "");
    $("#txtRemForXcld").val(item.remForXcld ?? "");
    $("#txtProdExp").val(item.prodExp ?? "");
    $("#txtInvoice").val(item.invoice ?? "");
    $("#txtShippingBill").val(item.shippingBill ?? "");
    $("#txtShpBillDt").val(item.shpBillDt ?? "");
    $("#txtNetFob").val(item.netFob ?? "");
    $("#txtCurrency").val(item.currency ?? "");
    $("#txtFlag").val(item.flag ?? "");
    $("#txtDbkType").val(item.dbkType ?? "");
    $("#txtTagLicencese").val(item.tagLicencese ?? "");
    $("#txtLicensceNo").val(item.licensceNo ?? "");
    $("#txtBank").val(item.bank ?? "");
    $("#txtMExport").val(item.mExport ?? "");
    $("#txtType").val(item.type ?? "");
    $("#txtRemark").val(item.remark ?? "");

    // Modal title
    $("#addMenuModalLabel").text("Update Export Details");

    // Same modal open
    const modalElement = document.getElementById("addMenuModal");

    if (!modalElement) {
        console.error("#addMenuModal not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();
}

// SAVE INITIALIZATION

function initEPCGSave() {

    $("#btnSave_ExportRedemptionEPCG").on(
        "click",
        function () {

            saveExportRedemptionEPCG();

        }
    );

}
// SAVE

function saveExportRedemptionEPCG() {

    const epcgNo =
        ($("#txtEPCGNo_ExportRedemptionEPCG").val() || "")
            .trim();


    // EPCG validation
    if (!epcgNo) {

        Swal.fire({

            icon: "warning",

            title: "EPCG Number Required",

            text:
                "Please enter EPCG Number."

        });


        $("#txtEPCGNo_ExportRedemptionEPCG")
            .focus();

        return;
    }


    // Date validation
    if (!validateEPCGDateRanges()) {
        return;
    }


    Swal.fire({

        title: "Are you sure?",

        text:
            "Do you want to save Export Redemption To EPCG?",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Save",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader(
            "Saving Export Redemption To EPCG..."
        );


        setTimeout(function () {

            hideLoader();


            Swal.fire({

                icon: "success",

                title: "Saved Successfully",

                text:
                    "Export Redemption To EPCG saved successfully.",

                timer: 1200,

                showConfirmButton: false

            });

        }, 500);

    });

}
//lic tag help data bind here 
const licTagData = [
    {
        id: 1,
        licenseNo: "LIC-1001",
        rsObligations: "₹ 12,50,000",
        date: "01-09-2025",
        usdObligation: "$ 15,000.00",
        averageAmount: "$ 5,000.00"
    },
    {
        id: 2,
        licenseNo: "LIC-1002",
        rsObligations: "₹ 18,75,000",
        date: "05-09-2025",
        usdObligation: "$ 22,500.00",
        averageAmount: "$ 7,500.00"
    },
    {
        id: 3,
        licenseNo: "LIC-1003",
        rsObligations: "₹ 9,50,000",
        date: "10-09-2025",
        usdObligation: "$ 11,400.00",
        averageAmount: "$ 3,800.00"
    },
    {
        id: 4,
        licenseNo: "LIC-1004",
        rsObligations: "₹ 25,00,000",
        date: "15-09-2025",
        usdObligation: "$ 30,000.00",
        averageAmount: "$ 10,000.00"
    },
    {
        id: 5,
        licenseNo: "LIC-1005",
        rsObligations: "₹ 15,60,000",
        date: "20-09-2025",
        usdObligation: "$ 18,750.00",
        averageAmount: "$ 6,250.00"
    }
];
//bind table 
function bindLicTagTable() {

    const $tbody = $("#tblbodyLicTag");

    if (!$tbody.length) {
        console.error("#tblbodyLicTag not found.");
        return;
    }

    $tbody.empty();

    $.each(licTagData, function (index, item) {

        $tbody.append(`
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkLicTag"
                           id="chkLicTag_${item.id}"
                           data-id="${item.id}">
                </td>

                <td>${item.licenseNo || "—"}</td>

                <td class="text-end">
                    ${item.rsObligations || "—"}
                </td>

                <td>${item.date || "—"}</td>

                <td class="text-end">
                    ${item.usdObligation || "—"}
                </td>

                <td class="text-end">
                    ${item.averageAmount || "—"}
                </td>

            </tr>
        `);
    });
}
//single check
$(document).on("change", ".chkLicTag", function () {

    $(".chkLicTag").not(this).prop("checked", false);

});
//save after selection 
$(document).on("click", "#btnSaveHelp", function () {

    const $selected = $(".chkLicTag:checked");

 
    if (!$selected.length) {
        showWarning(
            "Selection Required",
            "Please select a License."
        );
        return;
    }

    const selectedId = Number($selected.data("id"));

    const selectedLicense = licTagData.find(
        x => Number(x.id) === selectedId
    );

    if (!selectedLicense) {
        showError(
            "Error",
            "Selected License not found."
        );
        return;
    }

  
    $("#txtLicToTag").val(selectedLicense.licenseNo);

 
    showLoader("Loading Export Redemption Details...");

 
    const helpModalEl = document.getElementById(
        "OpenMenuModalLicTagHelp"
    );


    const tagLineModalEl = document.getElementById(
        "OpenMenuModalTagLine"
    );

    const helpModal = bootstrap.Modal.getOrCreateInstance(
        helpModalEl
    );

    const tagLineModal = bootstrap.Modal.getOrCreateInstance(
        tagLineModalEl
    );


    helpModal.hide();


    $(helpModalEl).one("hidden.bs.modal", function () {

        tagLineModal.hide();

   
        $(tagLineModalEl).one("hidden.bs.modal", function () {

          
            $("#exportRedemptionEPCGTableWrap")
                .removeClass("d-none");

            bindExportRedemptionEPCGData(
                exportRedemptionEPCGData
            );
 
            hideLoader();
        });
    });
});
