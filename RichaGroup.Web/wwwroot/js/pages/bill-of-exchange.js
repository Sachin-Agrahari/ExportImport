/* ============================================================
   Bill of Exchange — static data (one JSON array per table)
   Replace these arrays with data from your API/controller.
   ============================================================ */

/* 1. VIEW 1 · BOE List --------------------------------------- */
const boeListData = [
    { boeNo: "RE/1933/23-24", date: "23-10-2023", amount: "55,522.68", sbNo: "—", cur: "—", bankRefNo: "—", lcttNumber: "0.00", bankName: "HDFC Bank" },
    { boeNo: "RE/1934/23-24", date: "24-10-2023", amount: "42,118.00", sbNo: "3976700", cur: "US$", bankRefNo: "522BC73233040010", lcttNumber: "0.00", bankName: "SBI" },
    { boeNo: "RE/1935/23-24", date: "25-10-2023", amount: "18,900.50", sbNo: "3976701", cur: "US$", bankRefNo: "522BC73233040011", lcttNumber: "0.00", bankName: "ICICI Bank" },
    { boeNo: "RE/1936/23-24", date: "26-10-2023", amount: "76,250.75", sbNo: "3976702", cur: "US$", bankRefNo: "522BC73233040012", lcttNumber: "0.00", bankName: "AXIS Bank" },
    { boeNo: "RE/1937/23-24", date: "27-10-2023", amount: "9,845.20", sbNo: "—", cur: "—", bankRefNo: "—", lcttNumber: "0.00", bankName: "HDFC Bank" },
    { boeNo: "RE/1938/23-24", date: "28-10-2023", amount: "1,15,600.00", sbNo: "3976703", cur: "US$", bankRefNo: "522BC73233040013", lcttNumber: "0.00", bankName: "SBI" }
];

/* 2. VIEW 2 · Tagged Invoices ---------------------------------*/
const taggedInvoicesData = [
    { invoiceNo: "RE/1810/25-26", invoiceDate: "01-07-2025", sbNo: "—", sbDate: "—", ebrc: "Y", ebrcOn: "—", terms: "—", amount: "—", paymentRcvd: "—", paymentAdvDate: "—", discount: "—", bankCreditAmt: "0.00",BankCreditAdvNo: "-", bankCreditDate: "—", bankCharges: "0.00", tt:"-",ttDt: "-", TtAmnt:"-", Lcno:"-",ircvd:"-" },
    { invoiceNo: "RE/1812/25-26", invoiceDate: "01-07-2025", sbNo: "—", sbDate: "—", ebrc: "Y", ebrcOn: "—", terms: "—", amount: "—", paymentRcvd: "—", paymentAdvDate: "—", discount: "—", bankCreditAmt: "0.00", BankCreditAdvNo: "-", bankCreditDate: "—", bankCharges: "0.00", tt: "-", ttDt: "-", TtAmnt: "-", Lcno: "-", ircvd: "-" },
    { invoiceNo: "RE/1817/25-26", invoiceDate: "01-07-2025", sbNo: "—", sbDate: "—", ebrc: "N", ebrcOn: "—", terms: "—", amount: "—", paymentRcvd: "—", paymentAdvDate: "—", discount: "—", bankCreditAmt: "0.00", BankCreditAdvNo: "-", bankCreditDate: "—", bankCharges: "0.00", tt: "-", ttDt: "-", TtAmnt: "-", Lcno: "-", ircvd: "-" },
    { invoiceNo: "RE/1820/25-26", invoiceDate: "02-07-2025", sbNo: "—", sbDate: "—", ebrc: "N", ebrcOn: "—", terms: "—", amount: "—", paymentRcvd: "—", paymentAdvDate: "—", discount: "—", bankCreditAmt: "0.00", BankCreditAdvNo: "-", bankCreditDate: "—", bankCharges: "0.00", tt: "-", ttDt: "-", TtAmnt: "-", Lcno: "-", ircvd: "-" },
    { invoiceNo: "RE/1890/25-26", invoiceDate: "09-07-2025", sbNo: "—", sbDate: "—", ebrc: "Y", ebrcOn: "—", terms: "—", amount: "—", paymentRcvd: "—", paymentAdvDate: "—", discount: "—", bankCreditAmt: "0.00", BankCreditAdvNo: "-", bankCreditDate: "—", bankCharges: "0.00", tt: "-", ttDt: "-", TtAmnt: "-", Lcno: "-", ircvd: "-" },
    { invoiceNo: "RE/1901/25-26", invoiceDate: "11-07-2025", sbNo: "3987011", sbDate: "12-07-2025", ebrc: "Y", ebrcOn: "20-08-2025", terms: "30 Days", amount: "22,450.00", paymentRcvd: "22,450.00", paymentAdvDate: "15-08-2025", discount: "0.00", bankCreditAmt: "22,450.00", BankCreditAdvNo: "4986", bankCreditDate: "16-08-2025", bankCharges: "125.00", tt: "-", ttDt: "-", TtAmnt: "-", Lcno: "-", ircvd: "-" }
];

/* 3. Payment & Adjustment · Advance lookup ---------------------*/
const advanceLookupData = [
    { advance: "5679", date: "01-09-2023", buyerCode: "ANN", buyerName: "Ann Taylor", cur: "US$", cnvRate: "82.64500", amount: "5.63", balance: "5.63", selected: true },
    { advance: "5692", date: "18-09-2023", buyerCode: "6048", buyerName: "Lucky Brand", cur: "US$", cnvRate: "83.06500", amount: "4,39,928", balance: "4,39,928", selected: false },
    { advance: "5702", date: "28-09-2023", buyerCode: "JILL", buyerName: "JILL", cur: "US$", cnvRate: "83.11500", amount: "1,034.81", balance: "1,034.81", selected: false },
    { advance: "5753", date: "29-11-2023", buyerCode: "Belk", buyerName: "Belk", cur: "US$", cnvRate: "82.82000", amount: "35,904.81", balance: "35,904.81", selected: false },
    { advance: "5768", date: "05-12-2023", buyerCode: "NORD", buyerName: "Nordstrom, Inc", cur: "US$", cnvRate: "83.02000", amount: "20,779.91", balance: "20,779.91", selected: false },
    { advance: "5790", date: "12-12-2023", buyerCode: "JCG", buyerName: "J. Crew Group, LLC", cur: "US$", cnvRate: "83.15000", amount: "13,829.91", balance: "13,829.91", selected: false }
];

/* 4. Payment & Adjustment · Currency booked lookup --------------*/
const currencyLookupData = [
    { trxNo: "4701", date: "25-09-2024", amount: "50,000", rate: "113.9450", fromDate: "01-08-2025", toDate: "29-09-2025", balance: "50,000.00", inr: "56,97,250.00", contractNo: "54479361", selected: true },
    { trxNo: "4862", date: "23-12-2024", amount: "2,50,000", rate: "86.3125", fromDate: "14-08-2025", toDate: "12-09-2025", balance: "1,50,000.00", inr: "2,15,78,125.00", contractNo: "57479962", selected: false },
    { trxNo: "4768", date: "02-09-2024", amount: "2,50,000", rate: "85.6275", fromDate: "02-09-2025", toDate: "30-09-2025", balance: "2,50,000.00", inr: "2,14,06,875.00", contractNo: "53639941", selected: false },
    { trxNo: "4820", date: "14-10-2024", amount: "1,00,000", rate: "84.1200", fromDate: "10-08-2025", toDate: "10-10-2025", balance: "1,00,000.00", inr: "84,12,000.00", contractNo: "55210087", selected: false },
    { trxNo: "4901", date: "30-11-2024", amount: "75,000", rate: "83.9800", fromDate: "01-09-2025", toDate: "01-11-2025", balance: "75,000.00", inr: "62,98,500.00", contractNo: "56100234", selected: false }
];

/* 5. Payment & Adjustment · PCFC lookup -------------------------*/
const pcfcLookupData = [
    { pcfcNo: "PCFC/2301", trxNo: "T-9001", amount: "3,00,000", rate: "82.4500", dueDate: "15-11-2025", balanceAmount: "3,00,000.00", selected: true },
    { pcfcNo: "PCFC/2302", trxNo: "T-9002", amount: "1,50,000", rate: "82.9800", dueDate: "20-11-2025", balanceAmount: "1,50,000.00", selected: false },
    { pcfcNo: "PCFC/2303", trxNo: "T-9003", amount: "2,20,000", rate: "83.1000", dueDate: "25-11-2025", balanceAmount: "2,20,000.00", selected: false },
    { pcfcNo: "PCFC/2304", trxNo: "T-9004", amount: "90,000", rate: "83.4200", dueDate: "01-12-2025", balanceAmount: "90,000.00", selected: false },
    { pcfcNo: "PCFC/2305", trxNo: "T-9005", amount: "4,10,000", rate: "83.6600", dueDate: "05-12-2025", balanceAmount: "4,10,000.00", selected: false }
];

/* 6. Payment & Adjustment · Applied Adjustments ------------------*/
const appliedAdjustmentsData = [
    { convRate: "82.8257500", amount: "69,841.99", sunAmount:"-", date: "23-10-2023", inrAmount: "57,84,715.00", adjType: "Advance", required: "Y", number: "5679", date2: "23-10-2023", amount2: "69,841.99" },
    { convRate: "82.8259600", amount: "2,07,182.96", sunAmount: "-", date: "23-10-2023", inrAmount: "1,71,60,128", adjType: "Advance", required: "Y", number: "5692", date2: "23-10-2023", amount2: "2,07,182.96" },
    { convRate: "80.9800000", amount: "73,567.55", sunAmount: "-", date: "23-10-2023", inrAmount: "59,57,500.00", adjType: "Advance", required: "Y", number: "6702", date2: "23-10-2023", amount2: "73,567.55" },
    { convRate: "83.2600000", amount: "62,702.30", sunAmount: "-", date: "23-10-2023", inrAmount: "52,27,261.00", adjType: "Advance", required: "N", number: "5753", date2: "23-10-2023", amount2: "62,782.38" },
    { convRate: "83.2300000", amount: "20,779.91", sunAmount: "-", date: "23-10-2023", inrAmount: "17,29,512.00", adjType: "Advance", required: "Y", number: "5768", date2: "23-10-2023", amount2: "20,779.91" },
    { convRate: "83.2400000", amount: "13,829.91", sunAmount: "-", date: "23-10-2023", inrAmount: "11,51,141.00", adjType: "Advance", required: "N", number: "6754", date2: "23-10-2023", amount2: "4,148.52" }
];

/* 7. Modal · Buyer Lookup ----------------------------------------*/
const buyerLookupData = [
    { company: "Abercrombie & Fitch", alias: "Courier", code: "6112" },
    { company: "Abercrombie & Fitch Europe", alias: "Banking", code: "5214" },
    { company: "Abercrombie & Fitch Trading", alias: "Shipment (F)", code: "2021" },
    { company: "Abercrombie & Fitch Trading", alias: "Japan", code: "ABERCROMBI" },
    { company: "Aberco Netherlands Distribution", alias: "—", code: "2055" },
    { company: "Aberco Netherlands Distribution", alias: "Shipment (F)", code: "2055" }
];

/* 8. Modal · Select Bank ------------------------------------------*/
const bankDetailsData = [
    { refNo: "15117", refDate: "20-10-2023", buyerName: "J.Crew Group, LLC", amount: "3,98,054.31", bankRefNo: "522BC73233040009", paperless: "Yes" },
    { refNo: "15118", refDate: "20-10-2023", buyerName: "Abfico Netherlands Distribution B.V.", amount: "40,406.15", bankRefNo: "522BC73233040002", paperless: "Yes" },
    { refNo: "15119", refDate: "20-10-2023", buyerName: "Abercrombie & Fitch Trading", amount: "4,47,983.97", bankRefNo: "522BC73233040015", paperless: "Yes" },
    { refNo: "15120", refDate: "20-10-2023", buyerName: "Abercrombie & Fitch Trading", amount: "6,885.30", bankRefNo: "522BC73233040005", paperless: "Yes" },
    { refNo: "15121", refDate: "21-10-2023", buyerName: "Nordstrom, Inc", amount: "1,29,967.56", bankRefNo: "522BC73233040021", paperless: "Yes" },
    { refNo: "15122", refDate: "21-10-2023", buyerName: "Belk", amount: "35,904.81", bankRefNo: "522BC73233040022", paperless: "No" }
];

/* 9. Modal · Add Invoice --------------------------------------------*/
const addInvoiceData = [
    { invoiceNo: "RE/1933/23-24", invoiceDate: "14-08-2023", sbNo: "3976693", sbDate: "16-09-2023", ebrc: "Y", ebrcNeedOn: "06-11-2023", amount: "55,522.68", iRcvd: "N" },
    { invoiceNo: "RE/1954/23-24", invoiceDate: "17-08-2023", sbNo: "3976271", sbDate: "16-09-2023", ebrc: "Y", ebrcNeedOn: "06-11-2023", amount: "15,770.24", iRcvd: "N" },
    { invoiceNo: "RE/1960/23-24", invoiceDate: "20-08-2023", sbNo: "3976300", sbDate: "18-09-2023", ebrc: "N", ebrcNeedOn: "10-11-2023", amount: "28,410.00", iRcvd: "N" },
    { invoiceNo: "RE/1972/23-24", invoiceDate: "22-08-2023", sbNo: "3976355", sbDate: "20-09-2023", ebrc: "Y", ebrcNeedOn: "12-11-2023", amount: "9,215.50", iRcvd: "Y" },
    { invoiceNo: "RE/1985/23-24", invoiceDate: "25-08-2023", sbNo: "3976402", sbDate: "22-09-2023", ebrc: "N", ebrcNeedOn: "15-11-2023", amount: "41,860.75", iRcvd: "N" }
];

/* 10. Modal · Log Details --------------------------------------------*/
const logDetailsData = [
    { refNo: "15119", bankRefNo: "-", bankRefDate: "-", fr: "N", rlzRate: "0.000000", rlzAmount: "0.00", yn1: "N", pfa: "-", dDate1: "-", logUser: "Gaura", logDate: "20-10-2023", logTime: "15:36:27" },
    { refNo: "15119", bankRefNo: "M", bankRefDate: "23-10-2023", fr: "N", rlzRate: "82.57500", rlzAmount: "9,841.99", yn1: "Y", pfa: "A", dDate1: "23-10-2023", logUser: "Sanja", logDate: "23-10-2023", logTime: "11:47:35" },
    { refNo: "15120", bankRefNo: "-", bankRefDate: "-", fr: "N", rlzRate: "0.000000", rlzAmount: "0.00", yn1: "N", pfa: "-", dDate1: "-", logUser: "Gaura", logDate: "20-10-2023", logTime: "15:41:02" },
    { refNo: "15120", bankRefNo: "M", bankRefDate: "24-10-2023", fr: "N", rlzRate: "82.98000", rlzAmount: "6,885.30", yn1: "Y", pfa: "F", dDate1: "24-10-2023", logUser: "Sanja", logDate: "24-10-2023", logTime: "10:15:11" },
    { refNo: "51309", bankRefNo: "M", bankRefDate: "03-04-2025", fr: "N", rlzRate: "83.10000", rlzAmount: "1,29,967.56", yn1: "Y", pfa: "F", dDate1: "03-04-2025", logUser: "Ritesh", logDate: "03-04-2025", logTime: "09:22:48" }
];

/* 11. Modal · BOE Summary ---------------------------------------------*/
const boeSummaryData = [
    { refNo: "51309", refDate: "03-04-2025", buyerName: "Nordstrom, Inc", amount: "1,29,967.56", bankRefNo: "572BC73251130001", paperless: "Yes", paymentRcvd: "1,29,967.56", bankCharge: "0.00", extraAmount: "0.00", brc: "Full" },
    { refNo: "51310", refDate: "03-04-2025", buyerName: "J. Crew Group, LLC", amount: "5,41,999.60", bankRefNo: "572BC73251130019", paperless: "Yes", paymentRcvd: "5,41,999.60", bankCharge: "20,514.29", extraAmount: "0.00", brc: "Full" },
    { refNo: "51311", refDate: "04-04-2025", buyerName: "Abercrombie & Fitch Trading", amount: "4,47,983.97", bankRefNo: "572BC73251130025", paperless: "Yes", paymentRcvd: "4,40,000.00", bankCharge: "1,250.00", extraAmount: "0.00", brc: "Partial" },
    { refNo: "51312", refDate: "05-04-2025", buyerName: "Belk", amount: "35,904.81", bankRefNo: "572BC73251130031", paperless: "No", paymentRcvd: "35,904.81", bankCharge: "0.00", extraAmount: "0.00", brc: "Full" },
    { refNo: "51313", refDate: "06-04-2025", buyerName: "Lucky Brand", amount: "4,39,928.00", bankRefNo: "572BC73251130044", paperless: "Yes", paymentRcvd: "4,39,928.00", bankCharge: "1,800.00", extraAmount: "0.00", brc: "Full" }
];

/* 12. Modal · Inward Details --------------------------------------------*/
const inwardDetailsData = [
    { inwardNo: "1910230049904231", date: "18-10-2023", amount: "4,148.52", extraAmount: "0.00" },
    { inwardNo: "171023104990483", date: "16-10-2023", amount: "20,779.91", extraAmount: "0.00" },
    { inwardNo: "0510231049903751", date: "04-10-2023", amount: "73,567.55", extraAmount: "0.00" },
    { inwardNo: "1610231049905465", date: "13-10-2023", amount: "62,782.38", extraAmount: "0.00" },
    { inwardNo: "2210231049906120", date: "22-10-2023", amount: "1,29,967.56", extraAmount: "0.00" }
];

const adjustmentTableConfig = {

    advance: {
        columns: [
            { key: "sno", label: "S.NO", class: "c" },
            { key: "selected", label: "Pick", class: "c" },
            { key: "advance", label: "Advance", class: "r" },
            { key: "date", label: "Date" },
            { key: "buyerCode", label: "Buyer Code" },
            { key: "buyerName", label: "Buyer Name" },
            { key: "cur", label: "Cur." },
            { key: "cnvRate", label: "Cnv Rate", class: "r" },
            { key: "amount", label: "Amount", class: "r" },
            { key: "balance", label: "Balance", class: "r" }
        ],

        data: advanceLookupData
    },

    currency: {
        columns: [
            { key: "sno", label: "S.NO", class: "c" },
            { key: "selected", label: "Pick", class: "c" },
            { key: "trxNo", label: "Trx No", class: "r" },
            { key: "date", label: "Date" },
            { key: "amount", label: "Amount", class: "r" },
            { key: "rate", label: "Rate", class: "r" },
            { key: "fromDate", label: "From Date" },
            { key: "toDate", label: "To Date" },
            { key: "balance", label: "Balance", class: "r" },
            { key: "inr", label: "INR", class: "r" },
            { key: "contractNo", label: "Contract", class: "r" }
        ],

        data: currencyLookupData
    },

    pcfc: {
        columns: [
            { key: "sno", label: "S.NO", class: "c" },
            { key: "selected", label: "Pick", class: "c" },
            { key: "pcfcNo", label: "PCFC No." },
            { key: "trxNo", label: "Trx No." },
            { key: "amount", label: "Amount", class: "r" },
            { key: "rate", label: "Rate", class: "r" },
            { key: "dueDate", label: "Due Date" },
            { key: "balanceAmount", label: "BalanceAmount", class: "r" }
        ],

        data: pcfcLookupData
    }
};
 
const documentData = [
    {
        documentType: "Invoice",
        value1: 26,
        value2: 26
    },
    {
        documentType: "Tpt Document",
        value1: 0,
        value2: 20
    },
   
];

/* ============================================================
   Bill of Exchange — page script
   All tables are now built from the JSON arrays defined in
   bill-of-exchange-data.js and bound into the DOM with jQuery.
   ============================================================ */

$(document).ready(function () {

    renderBOEListTable();
    renderTaggedInvoicesTable();
    renderAdvanceLookupTable();
    renderCurrencyLookupTable();
    renderPCFCLookupTable();
    renderAppliedAdjustmentsTable();
    renderBankDetailsTable();
    renderAddInvoiceTable();
    renderLogDetailsTable();
    renderBoeSummaryTable();
    renderInwardDetailsTable();
    renderLetterToBank();
    renderAdjustmentTable('advance');
    // Buyer Lookup table is rendered on-demand when its modal opens (see below)

});

/* ============================================================
   1. VIEW 1 · BOE List
   ============================================================ */
function renderBOEListTable() {

    const $tbody = $('#tblbodyBOEList').empty();

    boeListData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td>
                     <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        data-code="${row}">
                        ✎
                    </button>
                </td>
                <td class="mono">${row.boeNo}</td>
                <td>${row.date}</td>
                <td class="r num">${row.amount}</td>
                <td>${row.sbNo}</td>
                <td>${row.cur}</td>
                <td>${row.bankRefNo}</td>
                <td class="r num">${row.lcttNumber}</td>
                <td>${row.bankName}</td>
                 
            </tr>
        `);
    });
}

/* ============================================================
   2. VIEW 2 · Tagged Invoices
   ============================================================ */
function renderTaggedInvoicesTable() {

    const $tbody = $('#tblbodyTaggedInvoices').empty();

    taggedInvoicesData.forEach(function (row, i) {

        const ebrcPill = row.ebrc === 'Y'
            ? '<span class="pill">Y</span>'
            : '<span class="pill">N</span>';

        $tbody.append(`
            <tr>
                <td>
                     <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        data-code="${row}">
                        ✎
                    </button>
                </td>
                <td class="mono">${row.invoiceNo}</td>
                <td>${row.invoiceDate}</td>
                <td>${row.sbNo}</td>
                <td>${row.sbDate}</td>
                <td class="c">${ebrcPill}</td>
                <td>${row.ebrcOn}</td>
                <td>${row.terms}</td>
                <td class="r">${row.amount}</td>
                <td class="r">${row.paymentRcvd}</td>
                <td>${row.paymentAdvDate}</td>
                <td class="r">${row.discount}</td>
                <td class="r num">${row.bankCreditAmt}</td>
                <td class="r num">${row.BankCreditAdvNo}</td>
                <td>${row.bankCreditDate}</td>
                <td class="r num">${row.bankCharges}</td> 
                <td class="r num">${row.tt}</td> 
                <td class="r num">${row.ttDt}</td> 
                <td class="r num">${row.TtAmnt}</td> 
                <td class="r num">${row.Lcno}</td> 
                <td class="r num">${row.ircvd}</td> 
            </tr>
        `);
    });
}

/* ============================================================
   3. Payment & Adjustment · Advance lookup
   ============================================================ */
function renderAdvanceLookupTable() {

    const $tbody = $('#tblbodyAdvanceLookup').empty();

    advanceLookupData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td class="c">${i + 1}</td>
                <td class="c"><input type="checkbox" ${row.selected ? 'checked' : ''}></td>
                <td class="r num">${row.advance}</td>
                <td>${row.date}</td>
                <td class="mono">${row.buyerCode}</td>
                <td>${row.buyerName}</td>
                <td>${row.cur}</td>
                <td class="r num">${row.cnvRate}</td>
                <td class="r num">${row.amount}</td>
                <td class="r num">${row.balance}</td>
            </tr>
        `);
    });
}

/* ============================================================
   4. Payment & Adjustment · Currency booked lookup
   ============================================================ */
function renderCurrencyLookupTable() {

    const $tbody = $('#tblbodyCurrencyLookup').empty();

    currencyLookupData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td class="c">${i + 1}</td>
                <td class="c"><input type="checkbox" ${row.selected ? 'checked' : ''}></td>
                <td class="r num">${row.trxNo}</td>
                <td>${row.date}</td>
                <td class="r num">${row.amount}</td>
                <td class="r num">${row.rate}</td>
                <td>${row.fromDate}</td>
                <td>${row.toDate}</td>
                <td class="r num">${row.balance}</td>
                <td class="r num">${row.inr}</td>
                <td class="r num">${row.contractNo}</td>
            </tr>
        `);
    });
}

/* ============================================================
   5. Payment & Adjustment · PCFC lookup
   ============================================================ */
function renderPCFCLookupTable() {

    const $tbody = $('#tblbodyPCFCLookup').empty();

    pcfcLookupData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td class="c">${i + 1}</td>
                <td class="c"><input type="checkbox" ${row.selected ? 'checked' : ''}></td>
                <td>${row.pcfcNo}</td>
                <td>${row.trxNo}</td>
                <td class="r">${row.amount}</td>
                <td class="r">${row.rate}</td>
                <td>${row.dueDate}</td>
                <td class="r">${row.balanceAmount}</td>
            </tr>
        `);
    });
}

/* ============================================================
   6. Payment & Adjustment · Applied Adjustments
   ============================================================ */
function renderAppliedAdjustmentsTable() {

    let adjType = $('#ddlModalAdvance option:selected').text();
     
    const $tbody = $('#tblbodyAppliedAdjustments').empty();

    appliedAdjustmentsData.forEach(function (row, i) {

        const requiredPill = row.required === 'Y'
            ? '<span class="pill">Y</span>'
            : '<span class="pill">N</span>';

        $tbody.append(`
            <tr>
                <td>
                     <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit" 
                        data-code="${row}">
                        ✎
                    </button>
                </td>
                <td class="r num">${row.convRate}</td>
                <td class="r num">${row.amount}</td>
                <td class="r num">${row.sunAmount}</td>
                <td>${row.date}</td>
                <td class="r num">${row.inrAmount}</td>
                <td class="adj-label">${adjType}</td>
                <td class="c">${requiredPill}</td>
                <td class="r num">${row.number}</td>
                <td>${row.date2}</td>
                <td class="r num">${row.amount2}</td> 
            </tr>
        `);
    });
}

/* ============================================================
   7. Modal · Buyer Lookup
   ============================================================ */
function renderBuyerLookupTable() {

    const $tbody = $('#tblbodyBuyerLookup').empty();

    buyerLookupData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td class="text-center">${i + 1}</td>
                <td>${row.company}</td>
                <td>${row.alias}</td>
                <td>${row.code}</td>
            </tr>
        `);
    });
}

function renderLetterToBank() {

    const $tbody = $('#letterToBank').empty();

    documentData.forEach(function (item, index) {

        $tbody.append(`
            <tr>
                <td>${item.documentType}</td>

                <td>
                    <input type="number" placeholder="${item.value1}" class="form-input w-100" id="txtValue1_${index}">
                </td>

                <td>
                    <input type="number"  placeholder="${item.value2}" class="form-input w-100" id="txtValue2_${index}">
                </td>
            </tr>
        `);
    });
}

/* ============================================================
   8. Modal · Select Bank
   ============================================================ */
function renderBankDetailsTable() {

    const $tbody = $('#tblbodyBankDetails').empty();

    bankDetailsData.forEach(function (row) {

        const paperlessBadge = row.paperless === 'Yes'
            ? '<span class="badge bg-success">Yes</span>'
            : '<span class="badge bg-secondary">No</span>';

        $tbody.append(`
            <tr>
                <td>${row.refNo}</td>
                <td>${row.refDate}</td>
                <td>${row.buyerName}</td>
                <td class="text-end">${row.amount}</td>
                <td>${row.bankRefNo}</td>
                <td class="text-center">${paperlessBadge}</td>
            </tr>
        `);
    });
}

/* ============================================================
   9. Modal · Add Invoice
   ============================================================ */
function renderAddInvoiceTable() {

    const $tbody = $('#tblbodyAddInvoice').empty();

    addInvoiceData.forEach(function (row, i) {

        const ebrcBadge = row.ebrc === 'Y'
            ? '<span class="badge bg-success">Y</span>'
            : '<span class="badge bg-secondary">N</span>';

        const iRcvdBadge = row.iRcvd === 'Y'
            ? '<span class="badge bg-success">Y</span>'
            : '<span class="badge bg-secondary">N</span>';

        $tbody.append(`
            <tr>
                <td>
                     <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        data-code="${row}">
                        ✎
                    </button>
                </td>
                <td class="text-center">${i + 1}</td>
                <td>${row.invoiceNo}</td>
                <td>${row.invoiceDate}</td>
                <td class="text-end">${row.sbNo}</td>
                <td>${row.sbDate}</td>
                <td class="text-center">${ebrcBadge}</td>
                <td>${row.ebrcNeedOn}</td>
                <td class="text-end">${row.amount}</td>
                <td class="text-center">${iRcvdBadge}</td>
                
            </tr>
        `);
    });
}

/* ============================================================
   10. Modal · Log Details
   ============================================================ */
function renderLogDetailsTable() {

    const $tbody = $('#tblbodyLogDetails').empty();

    logDetailsData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td>${i + 1}</td>
                <td>${row.refNo}</td>
                <td>${row.bankRefNo}</td>
                <td>${row.bankRefDate}</td>
                <td>${row.fr}</td>
                <td class="text-end">${row.rlzRate}</td>
                <td class="text-end">${row.rlzAmount}</td>
                <td>${row.yn1}</td>
                <td>${row.pfa}</td>
                <td>${row.dDate1}</td>
                <td>${row.logUser}</td>
                <td>${row.logDate}</td>
                <td>${row.logTime}</td>
            </tr>
        `);
    });
}

/* ============================================================
   11. Modal · BOE Summary
   ============================================================ */
function renderBoeSummaryTable() {

    const $tbody = $('#tblbodyBoeSummary').empty();

    boeSummaryData.forEach(function (row) {
        $tbody.append(`
            <tr>
                <td>${row.refNo}</td>
                <td>${row.refDate}</td>
                <td>${row.buyerName}</td>
                <td class="text-end">${row.amount}</td>
                <td>${row.bankRefNo}</td>
                <td class="text-center">${row.paperless}</td>
                <td class="text-end">${row.paymentRcvd}</td>
                <td class="text-end">${row.bankCharge}</td>
                <td class="text-end">${row.extraAmount}</td>
                <td class="text-center">${row.brc}</td>
            </tr>
        `);
    });
}

/* ============================================================
   12. Modal · Inward Details
   ============================================================ */
function renderInwardDetailsTable() {

    const $tbody = $('#tblbodyInwardDetails').empty();

    inwardDetailsData.forEach(function (row, i) {
        $tbody.append(`
            <tr>
                <td class="text-center">${i + 1}</td>
                <td>${row.inwardNo}</td>
                <td>${row.date}</td>
                <td class="text-end">${row.amount}</td>
                <td class="text-end">${row.extraAmount}</td>
            </tr>
        `);
    });
}

/* ============================================================
   View switching (tab bar)
   ============================================================ */
function switchView(name) {
    $('.view').each(function () {
        $(this).toggleClass('on', this.id === `view-${name}`);
    });

    $('.screen-switch button').each(function () {
        $(this).toggleClass('on', $(this).data('view') === name);
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

$(document).on('click', '.screen-switch button', function (event) {

    event.preventDefault();

    const viewName = $(this).data('view');

    if (!viewName) {
        console.warn('[BOE] Button has no data-view attribute');
        return;
    }

    switchView(viewName);
});

$('.segment').on('click', 'button', function (event) {

    event.preventDefault();

    const $segment = $(this).closest('.segment');

    $segment.find('button').removeClass('on');
    $(this).addClass('on');
});

/* ============================================================
   Modal open handlers — render (or refresh) that modal's table
   ============================================================ */
$('#btnAddInv').on('click', function () {
    renderAddInvoiceTable();
    $('#addInvoiceModal').modal('show');
});

$('#btnLogDtls').on('click', function () {
    renderLogDetailsTable();
    $('#logDetailsModal').modal('show');
});

$('#btnBillOfExchange').on('click', function () {
    renderBoeSummaryTable();
    $('#boeSummaryModal').modal('show');
});

$('#btnCalcAmt').on('click', function () {
    // No table to bind for this action yet.
});

$('#btnInwardDtls').on('click', function () {
    renderInwardDetailsTable();
    $('#inwardDetailsModal').modal('show');
});

$('#btnPaymentAdjustment').on('click', function () {
    //renderInwardDetailsTable();
    $('#appliedAdjustment').modal('show');
});

$('#btnAddPayment').on('click', function () {
    //renderInwardDetailsTable();
    $('#paymentAdjustment').modal('show');
});

// Buyer Lookup modal is opened from elsewhere in the page (e.g. a "Help"
// link next to Buyer Code); wire it up to render from buyerLookupData.
$(document).on('show.bs.modal', '#buyerLookupModal', function () {
    renderBuyerLookupTable();
});

// Select Bank modal: re-render from bankDetailsData whenever it opens,
// in case the bank filter dropdown should re-filter the data later.
$(document).on('show.bs.modal', '#selectBankModal', function () {
    renderBankDetailsTable();
});

function renderAdjustmentTable(type) {
     
    const config = adjustmentTableConfig[type];

    if (!config) {
        console.warn("Unknown adjustment type:", type);
        return;
    }

    const $thead = $('#tblAdjustmentLookupHead').empty();
    const $tbody = $('#tblAdjustmentLookupBody').empty();


    /* ---------- HEADER ---------- */

    let headerHtml = '<tr>';

    config.columns.forEach(function (column) {

        headerHtml += `
            <th class="${column.class || ''}">
                ${column.label}
            </th>
        `;

    });

    headerHtml += '</tr>';

    $thead.html(headerHtml);


    /* ---------- BODY ---------- */

    config.data.forEach(function (row, index) {

        let rowHtml = '<tr>';

        config.columns.forEach(function (column) {

            let value = '';

            if (column.key === 'sno') {

                value = index + 1;

            }
            else if (column.key === 'selected') {

                value = `
                    <input
                        type="checkbox"
                        class="adjustment-pick"
                        data-index="${index}"
                        ${row.selected ? 'checked' : ''}
                    >
                `;

            }
            else {

                value = row[column.key] ?? '';

            }

            rowHtml += `
                <td class="${column.class || ''}">
                    ${value}
                </td>
            `;

        });

        rowHtml += '</tr>';

        $tbody.append(rowHtml);

    });
}

$('#ddlModalAdvance').on('change', function () {

    const type = $(this).val();

    renderAdjustmentTable(type);
    renderAppliedAdjustmentsTable()
});