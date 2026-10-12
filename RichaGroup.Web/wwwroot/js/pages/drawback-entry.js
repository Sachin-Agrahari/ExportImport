
const drawbackData = [
    {
        id: 1,
        invoiceNo: "RG/0016/13-14",
        gstInvoiceNo: "",
        relDate: "",
        shippingBillNo: "",
        shippingBillDate: "",
        mode: "By Sea",
        dbkRec: 0,
        epDate: "",
        dbkType: "DBK",
        location: "RichaCO Export"
    },
    {
        id: 2,
        invoiceNo: "ABC/SG/194/13.1/0008/13-14",
        gstInvoiceNo: "",
        relDate: "",
        shippingBillNo: "",
        shippingBillDate: "",
        mode: "By Air",
        dbkRec: 2000,
        epDate: "",
        dbkType: "DBK",
        location: "RichaCO Export"
    },
    {
        id: 3,
        invoiceNo: "INV/0006/13-14",
        gstInvoiceNo: "",
        relDate: "",
        shippingBillNo: "145GH",
        shippingBillDate: "11-09-2014",
        mode: "By Road",
        dbkRec: 0,
        epDate: "11-09-2014",
        dbkType: "DBK",
        location: "RichaCO Export"
    },
    {
        id: 4,
        invoiceNo: "RG/INV/0005/13-14",
        gstInvoiceNo: "",
        relDate: "",
        shippingBillNo: "145XYRGB",
        shippingBillDate: "16-02-2014",
        mode: "By Air",
        dbkRec: 5000,
        epDate: "16-02-2014",
        dbkType: "DBK",
        location: "RichaCO Export"
    },
    {
        id: 5,
        invoiceNo: "RG/INV/0004/13-14",
        gstInvoiceNo: "16-10-2014",
        relDate: "16-10-2014",
        shippingBillNo: "Chip",
        shippingBillDate: "",
        mode: "By Road",
        dbkRec: 0,
        epDate: "",
        dbkType: "DBK",
        location: "RichaCO Export"
    },
    {
        id: 6,
        invoiceNo: "INV/0003/13-14",
        gstInvoiceNo: "14-02-2014",
        relDate: "14-02-2014",
        shippingBillNo: "EWQE",
        shippingBillDate: "13-03-2014",
        mode: "By Sea",
        dbkRec: 15000,
        epDate: "13-03-2014",
        dbkType: "DBK",
        location: "RichaCO Export"
    }
];

const filingHistory = [
    {
        rowNo: 1,
        filedOn: "2008-01-25",
        sChq: "",
        chqDate: "",
        amount: 0.00,
        statDate: "",
        rlznDate: "",
        splValue: 14109.00,
        received: 1.00,
        rcvDate: "2012-02-06",
        remarks: "Write off"
    },
    {
        rowNo: 2,
        filedOn: "",
        sChq: "",
        chqDate: "",
        amount: 0.00,
        statDate: "",
        rlznDate: "",
        splValue: 0.00,
        received: 0.00,
        rcvDate: "",
        remarks: ""
    },
    {
        rowNo: 3,
        filedOn: "",
        sChq: "",
        chqDate: "",
        amount: 0.00,
        statDate: "",
        rlznDate: "",
        splValue: 0.00,
        received: 0.00,
        rcvDate: "",
        remarks: ""
    },
    {
        rowNo: 4,
        filedOn: "",
        sChq: "",
        chqDate: "",
        amount: 0.00,
        statDate: "",
        rlznDate: "",
        splValue: 0.00,
        received: 0.00,
        rcvDate: "",
        remarks: ""
    }
];

const advanceDrawbackInvoices = [
    {
        invoiceNo: "RE/2135/23-24",
        drawbackAmount: 4887.00,
        postedOn: "",
        drawbackRcvDate: ""
    },
    {
        invoiceNo: "RE/2136/23-24",
        drawbackAmount: null,
        postedOn: "",
        drawbackRcvDate: ""
    },
    {
        invoiceNo: "RE/2137/23-24",
        drawbackAmount: null,
        postedOn: "",
        drawbackRcvDate: ""
    },
    {
        invoiceNo: "RE/2138/23-24",
        drawbackAmount: null,
        postedOn: "",
        drawbackRcvDate: ""
    },
    {
        invoiceNo: "RE/2139/23-24",
        drawbackAmount: null,
        postedOn: "",
        drawbackRcvDate: ""
    },
    {
        invoiceNo: "RE/2140/23-24",
        drawbackAmount: null,
        postedOn: "",
        drawbackRcvDate: ""
    }
];

const ROSCTLData = [
    {
        desc: "Cotton Shirt",
        Qty: 100,
        TotalWeight: 250,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        RosctlslNo: "ROS001",
        RosctlAmt: 61.25
    },
    {
        desc: "Cotton T-Shirt",
        Qty: 150,
        TotalWeight: 320,
        Rate: 10.00,
        Amount: 1500.00,
        Discount: 30.00,
        RosctlslNo: "ROS002",
        RosctlAmt: 73.50
    },
    {
        desc: "Denim Jeans",
        Qty: 75,
        TotalWeight: 450,
        Rate: 22.50,
        Amount: 1687.50,
        Discount: 50.00,
        RosctlslNo: "ROS003",
        RosctlAmt: 81.88
    },
    {
        desc: "Formal Trousers",
        Qty: 80,
        TotalWeight: 380,
        Rate: 18.00,
        Amount: 1440.00,
        Discount: 40.00,
        RosctlslNo: "ROS004",
        RosctlAmt: 70.00
    },
    {
        desc: "Ladies Kurti",
        Qty: 120,
        TotalWeight: 280,
        Rate: 14.50,
        Amount: 1740.00,
        Discount: 35.00,
        RosctlslNo: "ROS005",
        RosctlAmt: 85.25
    },
    {
        desc: "Kids T-Shirt",
        Qty: 200,
        TotalWeight: 300,
        Rate: 8.50,
        Amount: 1700.00,
        Discount: 20.00,
        RosctlslNo: "ROS006",
        RosctlAmt: 84.00
    },
    {
        desc: "Men's Jacket",
        Qty: 60,
        TotalWeight: 520,
        Rate: 35.00,
        Amount: 2100.00,
        Discount: 75.00,
        RosctlslNo: "ROS007",
        RosctlAmt: 101.25
    },
    {
        desc: "Ladies Top",
        Qty: 110,
        TotalWeight: 230,
        Rate: 11.75,
        Amount: 1292.50,
        Discount: 25.00,
        RosctlslNo: "ROS008",
        RosctlAmt: 63.38
    },
    {
        desc: "Sports Shorts",
        Qty: 90,
        TotalWeight: 190,
        Rate: 9.50,
        Amount: 855.00,
        Discount: 15.00,
        RosctlslNo: "ROS009",
        RosctlAmt: 42.00
    },
    {
        desc: "Winter Sweater",
        Qty: 50,
        TotalWeight: 410,
        Rate: 28.00,
        Amount: 1400.00,
        Discount: 45.00,
        RosctlslNo: "ROS010",
        RosctlAmt: 67.75
    }
];

const meisData = [
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton Shirt",
        Qty: 100,
        Rate: 12.50,
        Amount: 1250.00,
        Discount: 25.00,
        ItChsCode: "62052000",
        MeisAmt: 61.25,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "62052000",
        f_Meis_Amt: 55.00,
        FPercentage: 4.5
    },
    {
        Desc: "Cotton T-Shirt",
        Qty: 150,
        Rate: 10.00,
        Amount: 1500.00,
        Discount: 30.00,
        ItChsCode: "61091000",
        MeisAmt: 73.50,
        MeisPercentage: 5,
        me_F: "F",
        F_ItChs: "61091000",
        f_Meis_Amt: 68.00,
        FPercentage: 4.5
    }
];

const $views = $('.view');
const $viewBtns = $('.screen-switch button');

$(document).ready(function () {

    initDrawbackEntries(drawbackData)
    bindFilingHistory(filingHistory)
    initAdvanceDrawbackInvoices(advanceDrawbackInvoices) ;

    // on click a help to open a modal 
$("#btnInvNo, #btninvoiceNo").on("click", function () {
    $("#addMenuModalInvoiceHelp").modal("show");
    bindInvoiceHelp();
  
});
$("#btnEntryHelp").on("click", function () {
    $("#addMenuModalEntryHelp").modal("show");
    bindEntryHelp();
   
});
    //search functionality here table 
    $(document).on("input", "#txtSearchInvoiceHelp", function () {

    const searchText = $(this).val().toLowerCase().trim();

    $("#tblbodyInvoiceHelp tr").each(function () {
        const rowText = $(this).text().toLowerCase();
        $(this).toggle(rowText.includes(searchText));
    });
});
});


$('#btnBrowseExcel').on('click', function () {
    $('#excelFile').trigger('click')
})

function show(name) {

    $views.each(function () {
        $(this).toggleClass('on', this.id === 'view-' + name);
    });

    $viewBtns.each(function () {
        $(this).toggleClass('on', $(this).data('view') === name);
    });

    window.scrollTo({
        top: 0
    });
}
 
$(document).on('click', '.screen-switch button', function (e) { 
    e.preventDefault(); 
    show($(this).data('view'));
});
 
$('.segment').on('click', function (e) {

    const $btn = $(e.target).closest('button');

    if (!$btn.length) {
        return;
    }

    e.preventDefault(); 
    $(this).find('button').removeClass('on'); 
    $btn.addClass('on');
});

function initDrawbackEntries(data) {

    const $tbody = $("#tblbodyDrawbackEntries");
    $tbody.empty();

    if (!Array.isArray(data) || data.length === 0) {
        $tbody.append(`
            <tr>
                <td colspan="12" class="text-center text-muted">
                    No drawback entries found.
                </td>
            </tr>
        `);

        return;
    }

    $.each(data, function (index, row) {

        const dbkRec = parseFloat(row.dbkRec) || 0;

        $tbody.append(` <tr>
            <td class="c">

                <button type="button"
                        class="row-btn"
                        title="Landing"
                        data-code="${row.invoiceNo}">
                    &#128196;
                </button>

                <button type="button"
                        class="row-btn"
                        title="View"
                        data-code="${row.invoiceNo}">
                    &#128269;
                </button>

                <button type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditDrawback('${row.invoiceNo}')"
                        data-code="${row.invoiceNo}">
                    ✎
                </button>

                <button type="button"
                        class="row-btn danger"
                        title="Delete"
                        data-code="${row.invoiceNo}">
                    &#128465;
                </button>

            </td>

            <td class="mono">
                ${row.invoiceNo || "&mdash;"}
            </td>

            <td>
                ${row.gstInvoiceNo || "&mdash;"}
            </td>

            <td>
                ${row.relDate || "&mdash;"}
            </td>

            <td class="mono">
                ${row.shippingBillNo || "&mdash;"}
            </td>

            <td>
                ${row.shippingBillDate || "&mdash;"}
            </td>

            <td>
                ${row.mode || "&mdash;"}
            </td>

            <td class="r num">
                ${dbkRec.toLocaleString("en-IN")}
            </td>

            <td>
                ${row.epDate || "&mdash;"}
            </td>

            <td>
                <span class="tag">
                    ${row.dbkType || ""}
                </span>
            </td>

            <td>
                ${row.location || "&mdash;"}
            </td>
                 
        </tr>`);
    });
}

function EditDrawback(ID) {
    $('#DrawbackModal').modal('show')
}

function bindFilingHistory(data) {

    const $tbody = $("#filingHistoryBody");

    $tbody.empty();

    $.each(data, function (index, item) {

        const row = `
            <tr>
                
                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${item.filedOn || ''}">
                </td>

                <td>
                    <input value="${item.sChq || ''}"
                           placeholder="—">
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${item.chqDate || ''}">
                </td>

                <td>
                    <input class="num"
                           value="${item.amount}">
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${item.statDate || ''}">
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${item.rlznDate || ''}">
                </td>

                <td>
                    <input class="num"
                           value="${item.splValue}">
                </td>

                <td>
                    <input class="num"
                           value="${item.received}">
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${item.rcvDate || ''}">
                </td>

                <td>
                    <input value="${item.remarks || ''}"
                           placeholder="—">
                </td>
            </tr>
        `;

        $tbody.append(row);
    });
     
    //initDatePickers();
}

function initAdvanceDrawbackInvoices(data) {

    const $tbody = $("#tblbodyAdvanceDrawbackInvoices");
    $tbody.empty();

    $.each(data, function (index, row) {

        const amount = row.drawbackAmount != null
            ? row.drawbackAmount.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            : "&mdash;";

        $tbody.append(`
            <tr>
                <td class="c">${index + 1}</td>

                <td class="mono">
                    ${row.invoiceNo}
                </td>

                <td class="r num">
                    ${amount}
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${row.postedOn || ""}"
                           data-index="${index}">
                </td>

                <td>
                    <input type="text"
                           class="form-Flatdate"
                           value="${row.drawbackRcvDate || ""}"
                           data-index="${index}">
                </td>
            </tr>
        `);
    });
}

function bindMeisDetails(data) {

    var $tbody = $("#tblbodyMeisDtls");
     
    $tbody.empty();

    $.each(data, function (index, item) {

        var row = `<tr>
            <td>${item.Desc}</td>
            <td class="num">${item.Qty}</td>
            <td class="num">${item.Rate}</td>
            <td class="num">${item.Amount}</td>
            <td class="num">${item.Discount}</td>
            <td>${item.ItChsCode}</td>
            <td class="num">${item.MeisAmt}</td>
            <td class="num">${item.MeisPercentage}</td>
            <td>${item.me_F}</td>
            <td>${item.F_ItChs}</td>
            <td class="num">${item.f_Meis_Amt}</td> 
            <td class="num">${item.FPercentage}</td> 
        </tr> `;

        $tbody.append(row);
    });
}
function bindRosctlDetails(data) {

    var $tbody = $("#tblbodyRosctlDtls");
     
    $tbody.empty();

    $.each(data, function (index, item) {

        var row = `<tr>
            <td>${item.desc}</td>
            <td class="num">${item.Qty}</td>
            <td class="num">${item.TotalWeight}</td>
            <td class="num">${item.Rate}</td>
            <td class="num">${item.Amount}</td>
            <td class="num">${item.Discount}</td>
            <td>
                <select class="w-100" style="border-radius: 0px;">
                    <option value="${item.RosctlslNo}">${item.RosctlslNo} </option>
                    <option value="${item.RosctlslNo}">${item.RosctlslNo} </option>
                    <option value="${item.RosctlslNo}">${item.RosctlslNo} </option>
                    <option value="${item.RosctlslNo}">${item.RosctlslNo} </option>
                </select>
            </td>
            <td class="num">${item.RosctlAmt}</td> 
        </tr> `;

        $tbody.append(row);
    });
}

$('#btnROCTL').on('click', function () {
    bindRosctlDetails(ROSCTLData)
    $('#DrawbackRoctlModal').modal('show');
})

$('#btnMEIS').on('click', function () {
    bindMeisDetails(meisData)
    $('#DrawbackMeisModal').modal('show');
})

//help bind here in the Invoice No 
// Static Invoice Data
const invoiceHelpData = [
    {
        invoiceNo: "INV-2026-001",
        gstInvNo: "GST-1001",
        sbNo: "SB-45821",
        sbDate: "01-10-2026",
        dbkRcvd: "Yes"
    },
    {
        invoiceNo: "INV-2026-002",
        gstInvNo: "GST-1002",
        sbNo: "SB-45822",
        sbDate: "02-10-2026",
        dbkRcvd: "No"
    },
    {
        invoiceNo: "INV-2026-003",
        gstInvNo: "GST-1003",
        sbNo: "SB-45823",
        sbDate: "03-10-2026",
        dbkRcvd: "Yes"
    },
    {
        invoiceNo: "INV-2026-004",
        gstInvNo: "GST-1004",
        sbNo: "SB-45824",
        sbDate: "04-10-2026",
        dbkRcvd: "No"
    },
    {
        invoiceNo: "INV-2026-005",
        gstInvNo: "GST-1005",
        sbNo: "SB-45825",
        sbDate: "05-10-2026",
        dbkRcvd: "Yes"
    }
];

let invoiceHelpTable;
function bindInvoiceHelp() {

    const $table = $("#tblInvoiceHelp");
    const $tbody = $("#tblbodyInvoiceHelp");

    if (!$table.length || !$tbody.length) {
        console.error("[InvoiceHelp] Table not found.");
        return;
    }

    $tbody.empty();

    if (!invoiceHelpData.length) {
        $tbody.html(`
            <tr>
                <td colspan="6" class="text-center text-muted">
                    No invoice records found.
                </td>
            </tr>
        `);
        return;
    }

    // Bind static data
    $.each(invoiceHelpData, function (index, item) {

        const row = `
            <tr>
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkInvoiceHelp"
                           value="${item.invoiceNo}"
                           aria-label="Select ${item.invoiceNo}">
                </td>
                <td>${item.invoiceNo || "—"}</td>
                <td>${item.gstInvNo || "—"}</td>
                <td>${item.sbNo || "—"}</td>
                <td>${item.sbDate || "—"}</td>
                <td>${item.dbkRcvd || "—"}</td>
            </tr>
        `;

        $tbody.append(row);
    });
}

//on click of help entry no 
const EntryHelpData = [
    {
        invoiceNo: "INV-2026-001",
        invoiceDate: "01-10-2026",
        sbNo: "SB-45821",
        sbDate: "02-10-2026",
        dbkAmount: "₹12,500.00"
    },
    {
        invoiceNo: "INV-2026-002",
        invoiceDate: "03-10-2026",
        sbNo: "SB-45822",
        sbDate: "04-10-2026",
        dbkAmount: "₹8,750.00"
    },
    {
        invoiceNo: "INV-2026-003",
        invoiceDate: "05-10-2026",
        sbNo: "SB-45823",
        sbDate: "06-10-2026",
        dbkAmount: "₹15,200.00"
    },
    {
        invoiceNo: "INV-2026-004",
        invoiceDate: "07-10-2026",
        sbNo: "SB-45824",
        sbDate: "08-10-2026",
        dbkAmount: "₹9,800.00"
    },
    {
        invoiceNo: "INV-2026-005",
        invoiceDate: "09-10-2026",
        sbNo: "SB-45825",
        sbDate: "10-10-2026",
        dbkAmount: "₹11,400.00"
    }
];

function bindEntryHelp() {
    const $tbody = $("#tblbodyEntryHelp");
    $tbody.empty();
     
    $.each(EntryHelpData, function (index, item) {
        $tbody.append(`
            <tr>
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkInvoiceHelp"
                           value="${item.invoiceNo}">
                </td>
                <td>${item.invoiceNo}</td>
                <td>${item.invoiceDate}</td>
                <td>${item.sbNo}</td>
                <td>${item.sbDate}</td>
                <td class="text-end">${item.dbkAmount}</td>
            </tr>
        `);
    });
}



