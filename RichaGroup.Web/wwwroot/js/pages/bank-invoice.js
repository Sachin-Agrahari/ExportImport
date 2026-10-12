
const invDtls = [
    {
        styleNo: "359D3449",
        poNo: "2685303",
        gstHsn: "Other",
        hsnFeed: "62044490",
        category: "OBA/NA",
        invoiceDesc: "Ladies Skirt",
        eInvoiceDesc: "Ladies skirt, 92% polyester / 8% elastane, polyknit lining",
        qty: 25,
        unit: "PCS",
        rate: 14.00,
        amount: 350.00,
        fobRate: 14.00,
        fabricValue: 350.00,
        weight: 0.250,
        wtPrint: "N"
    },
    {
        styleNo: "458A2210",
        poNo: "2685310",
        gstHsn: "Other",
        hsnFeed: "62044300",
        category: "OBA/NA",
        invoiceDesc: "Ladies Dress",
        eInvoiceDesc: "Ladies dress, 100% polyester",
        qty: 40,
        unit: "PCS",
        rate: 22.50,
        amount: 900.00,
        fobRate: 22.50,
        fabricValue: 720.00,
        weight: 0.480,
        wtPrint: "Y"
    },
    {
        styleNo: "782K1122",
        poNo: "2685321",
        gstHsn: "Other",
        hsnFeed: "62046290",
        category: "OBA/NA",
        invoiceDesc: "Ladies Trouser",
        eInvoiceDesc: "Ladies trouser, 98% cotton / 2% elastane",
        qty: 60,
        unit: "PCS",
        rate: 18.00,
        amount: 1080.00,
        fobRate: 18.00,
        fabricValue: 900.00,
        weight: 0.620,
        wtPrint: "Y"
    },
    {
        styleNo: "920B3345",
        poNo: "2685330",
        gstHsn: "Other",
        hsnFeed: "62064000",
        category: "OBA/NA",
        invoiceDesc: "Ladies Blouse",
        eInvoiceDesc: "Ladies blouse, polyester woven fabric",
        qty: 35,
        unit: "PCS",
        rate: 16.75,
        amount: 586.25,
        fobRate: 16.75,
        fabricValue: 480.00,
        weight: 0.310,
        wtPrint: "N"
    },
    {
        styleNo: "A1234567",
        poNo: "2685342",
        gstHsn: "Other",
        hsnFeed: "62063090",
        category: "OBA/NA",
        invoiceDesc: "Ladies Shirt",
        eInvoiceDesc: "Ladies shirt, cotton blend",
        qty: 50,
        unit: "PCS",
        rate: 15.25,
        amount: 762.50,
        fobRate: 15.25,
        fabricValue: 625.00,
        weight: 0.400,
        wtPrint: "Y"
    },
    {
        styleNo: "F8642097",
        poNo: "2685392",
        gstHsn: "Other",
        hsnFeed: "62044390",
        category: "OBA/NA",
        invoiceDesc: "Ladies Maxi Dress",
        eInvoiceDesc: "Ladies maxi dress, polyester fabric with lining",
        qty: 20,
        unit: "PCS",
        rate: 32.00,
        amount: 640.00,
        fobRate: 32.00,
        fabricValue: 510.00,
        weight: 0.850,
        wtPrint: "Y"
    }
];

const logDetailsData = [
    {
        invoiceNo: "RE/2145/23-24",
        officeSetRcvd: "20-09-2023",
        ic: "Y",
        sentForIc: null,
        icRcvd: null,
        customDocRcvd: null,
        docType: null,
        sentToBank: null,
        sentToBuyer: null,
        payMode: null,
        user: "Gaura",
        logDate: "20-09-2023",
        logTime: "14:07:33"
    },
    {
        invoiceNo: "RE/2145/23-24",
        officeSetRcvd: "20-09-2023",
        ic: "Y",
        sentForIc: null,
        icRcvd: null,
        customDocRcvd: null,
        docType: "Non LC",
        sentToBank: null,
        sentToBuyer: "20-09-2023",
        payMode: "Buyer",
        user: "Sanja",
        logDate: "18-10-2023",
        logTime: "11:55:44"
    },
    {
        invoiceNo: "RE/2145/23-24",
        officeSetRcvd: "20-09-2023",
        ic: "Y",
        sentForIc: "10-10-2023",
        icRcvd: "12-10-2023",
        customDocRcvd: "15-10-2023",
        docType: "Non LC",
        sentToBank: null,
        sentToBuyer: "20-09-2023",
        payMode: "Buyer",
        user: "Sanja",
        logDate: "18-10-2023",
        logTime: "16:46:31"
    },
    {
        invoiceNo: "RE/2188/23-24",
        officeSetRcvd: "22-09-2023",
        ic: "N",
        sentForIc: null,
        icRcvd: null,
        customDocRcvd: "18-10-2023",
        docType: "LC",
        sentToBank: "23-10-2023",
        sentToBuyer: null,
        payMode: "Bank",
        user: "Rakesh",
        logDate: "23-10-2023",
        logTime: "10:25:18"
    }
];
 
const ebrcData = [
    {
        ebrcNo: "245863044",
        date: "19-01-2024",
        amount: 27263.40
    },
    {
        ebrcNo: "245861030",
        date: "19-01-2024",
        amount: 915.24
    },
    {
        ebrcNo: "245859528",
        date: "19-01-2024",
        amount: 878.39
    },
    {
        ebrcNo: "245862294",
        date: "19-01-2024",
        amount: 1386.11
    }
];

const invoiceData = [
    {
        invoiceNo: "RE/1933/23-24",
        invoiceDate: "14-08-2023",
        grNo: null
    },
    {
        invoiceNo: "RE/1954/23-24",
        invoiceDate: "17-08-2023",
        grNo: null
    },
    {
        invoiceNo: "RE/2033/23-24",
        invoiceDate: "29-08-2023",
        grNo: null
    },
    {
        invoiceNo: "RE/2049/23-24",
        invoiceDate: "29-08-2023",
        grNo: null
    }
];

const invoiceListData = [
    {
        invoiceNumber: "RC/1027/14-15",
        invoiceDate: "01-04-2014",
        buyerName: "NORDSTROM PRODUCT",
        currency: "US$",
        amount: 6930.00,
        lcNo: "NA",
        sbNo: "2204757",
        initial: "CHNDR"
    },
    {
        invoiceNumber: "RC/1027/15-16",
        invoiceDate: "20-02-2016",
        buyerName: "AMERICAN EAGLE OUTFIT",
        currency: "US$",
        amount: 9027.34,
        lcNo: "NA",
        sbNo: "6275160",
        initial: "ROHAN"
    },
    {
        invoiceNumber: "RC/1027/20-21",
        invoiceDate: "11-08-2020",
        buyerName: "SEASALT LIMITED",
        currency: "UK£",
        amount: 2157.30,
        lcNo: "NA",
        sbNo: "4513111",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RC/1027/21-22",
        invoiceDate: "07-06-2021",
        buyerName: "AFH INTERNATIONAL",
        currency: "US$",
        amount: 288.00,
        lcNo: "NA",
        sbNo: "2824749",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/21-22",
        invoiceDate: "13-01-2022",
        buyerName: "PREMIUM BRANDS OPCO",
        currency: "US$",
        amount: 2330.56,
        lcNo: "NA",
        sbNo: "8633314",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/22-23",
        invoiceDate: "11-06-2022",
        buyerName: "BELK INTERNATIONAL",
        currency: "US$",
        amount: 136629.00,
        lcNo: "NA",
        sbNo: "2858907",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/23-24",
        invoiceDate: "23-05-2023",
        buyerName: "ABERCROMBIE & FITCH",
        currency: "US$",
        amount: 89334.00,
        lcNo: "NA",
        sbNo: "1281411",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/24-25",
        invoiceDate: "11-05-2024",
        buyerName: "SEASALT LIMITED",
        currency: "UK£",
        amount: 2215.95,
        lcNo: "NA",
        sbNo: "1443767",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/25-26",
        invoiceDate: "10-05-2025",
        buyerName: "AMERICAN EAGLE OUTFIT",
        currency: "US$",
        amount: 7349.17,
        lcNo: "NA",
        sbNo: "2024631",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RC/1028/07-08",
        invoiceDate: "25-02-2008",
        buyerName: "ETAM LINGERIE SAS",
        currency: "US$",
        amount: 17199.00,
        lcNo: "14001-0113978SAD",
        sbNo: "6093138",
        initial: "SB"
    }
];

$(document).ready(function () {
    const tabBtns = [...document.querySelectorAll('.tabs button')];
    tabBtns.forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('on', p.id === b.dataset.tab));
        tabBtns.forEach(x => x.classList.toggle('on', x === b));
    }));

    bindInvoiceList(invoiceListData)
    bindInvDtls(invDtls)
    bindLogDetails(logDetailsData)
    bindInvoices(invoiceData)
    bindEBRC(ebrcData) 
})

//function bindInvDtls(data) {

//    const $tbody = $("#tblInvDtlBody");

//    if (!$tbody.length) {
//        console.error("#tblInvDtlBody not found.");
//        return;
//    }

//    $tbody.empty();

//    // Store original data reference
//    $tbody.data("inv-data", data);

//    $.each(data, function (index, item) {

//        const row = `
//            <tr class="invoice-edit-row"
//                data-index="${index}">
//                <td class="c  action-cell">
//                     <button type="button"
//                            class="row-btn edit-btn btn-edit-inv-row"
//                            data-index="${index}"
//                            title="Edit">
//                       <svg width="14" height="14"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round">
//                          <path d="M12 20h9"/>
//                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
//                      </svg>
//                    </button>

//                    <button type="button" id="btnSave_${item}"
//                            class="row-btn edit-btn btn-edit-inv-row"
//                            data-index="${index}"
//                            title="Edit">
//                       <svg width="14"
//                             height="14"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round">

//                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path>
//                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
//                            <polyline points="7 3 7 8 15 8"></polyline>

//                        </svg>
//                    </button>

//                </td>

//                <td class="c">
//                    ${index + 1}
//                </td>

//                <td class="c">
//                    <input type="checkbox"
//                           class="row-select"
//                           data-index="${index}"
//                           ${index === 0 ? "checked" : ""}>
//                </td>

//                <td class="mono">
//                    ${item.styleNo ?? ""}
//                </td>

//                <td class="mono">
//                    ${item.poNo ?? ""}
//                </td>

//                <td>
//                    ${item.gstHsn ?? ""}
//                </td>

//                <td class="mono">
//                    ${item.hsnFeed ?? ""}
//                </td>

//                <td>
//                    ${item.category ?? ""}
//                </td>

//                <td>
//                    ${item.invoiceDesc ?? ""}
//                </td>

//                <td>
//                    ${item.eInvoiceDesc ?? ""}
//                </td>

//                <td class="r num">
//                    ${item.qty ?? ""}
//                </td>

//                <td>
//                    ${item.unit ?? ""}
//                </td>

//                <td class="r num">
//                    ${Number(item.rate || 0).toFixed(2)}
//                </td>

//                <td class="r num">
//                    ${Number(item.amount || 0).toFixed(2)}
//                </td>

//                <!-- FOB RATE -->
//                <td class="r num fob-rate-cell">
//                    <input type="number" id="txtFobRate_${index}" value="${item.fobRate.toFixed()}"
//                    style="border-radius: 0px; width:100px" disabled>

//                </td>

//                <!-- FOB VALUE -->
//                <td class="r num fob-value-cell">
//                    <input type="number" id="txtFobValue_${index}" value="${item.fabricValue.toFixed()}"
//                     style="border-radius: 0px; width:100px" disabled>

//                </td>

//                <td class="r num">
//                    ${Number(item.weight || 0).toFixed(3)}
//                </td>

//                <td class="c">
//                    ${item.wtPrint ?? ""}
//                </td>

//            </tr>
//        `;

//        $tbody.append(row);
//    });
//}

function bindInvDtls(data) {

    const $tbody = $("#tblInvDtlBody");

    if (!$tbody.length) {
        console.error("#tblInvDtlBody not found.");
        return;
    }

    $tbody.empty();

    // Store original data reference
    $tbody.data("inv-data", data);

    $.each(data, function (index, item) {

        const row = `
            <tr class="invoice-edit-row"
                data-index="${index}">

                <td class="c action-cell">

                    <!-- EDIT BUTTON -->
                    <button type="button"
                            class="row-btn edit-btn btn-edit-inv-row"
                            data-index="${index}"
                            title="Edit">

                        <svg width="14" height="14"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="M12 20h9"/>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                        </svg>
                    </button>

                    <!-- SAVE BUTTON -->
                    <button type="button"
                            class="row-btn save-btn btn-save-inv-row"
                            data-index="${index}"
                            title="Save"
                            style="display:none;">

                        <svg width="14"
                             height="14"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">

                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>

                        </svg>
                    </button>

                </td>
 
                <td class="mono"> ${item.styleNo ?? ""}  </td>

                <td class="mono"> ${item.poNo ?? ""} </td>

                <td>
                    ${item.gstHsn ?? ""}
                </td>

                <td class="mono">
                    ${item.hsnFeed ?? ""}
                </td>

                <td>
                    ${item.category ?? ""}
                </td>

                <td>
                    ${item.invoiceDesc ?? ""}
                </td>

                <td>
                    ${item.eInvoiceDesc ?? ""}
                </td>

                <td class="r num">
                    ${item.qty ?? ""}
                </td>

                <td>
                    ${item.unit ?? ""}
                </td>

                <td class="r num">
                    ${Number(item.rate || 0).toFixed(2)}
                </td>

                <td class="r num">
                    ${Number(item.amount || 0).toFixed(2)}
                </td>

                <!-- FOB RATE -->
                <td class="r num fob-rate-cell">
                    <input type="number"
                           id="txtFobRate_${index}"
                           value="${Number(item.fobRate || 0).toFixed()}"
                           class="fob-input"
                           style="border-radius:0px; width:100px"
                           disabled>
                </td>

                <!-- FOB VALUE -->
                <td class="r num fob-value-cell">
                    <input type="number"
                           id="txtFobValue_${index}"
                           value="${Number(item.fabricValue || 0).toFixed()}"
                           class="fob-input"
                           style="border-radius:0px; width:100px"
                           disabled>
                </td>

                <td class="r num">
                    ${Number(item.weight || 0).toFixed(3)}
                </td>

                <td class="c">
                    ${item.wtPrint ?? ""}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
 
$(document).on("click", ".btn-edit-inv-row", function () {

    const $btn = $(this);
    const index = $btn.data("index");

    const $row = $btn.closest("tr");
     
    $row.find(".fob-input").prop("disabled", false); 
    $row.find(".btn-edit-inv-row").hide(); 
    $row.find(".btn-save-inv-row").show();
});
 
$(document).on("click", ".btn-save-inv-row", function () {

    const $btn = $(this);
    const index = $btn.data("index");
    const $row = $btn.closest("tr");
    const $tbody = $("#tblInvDtlBody");

    const fobRate = $row.find("#txtFobRate_" + index).val();
    const fobValue = $row.find("#txtFobValue_" + index).val();
     
    const data = $tbody.data("inv-data");

    if (data && data[index]) {
        data[index].fobRate = Number(fobRate || 0);
        data[index].fabricValue = Number(fobValue || 0);
    }
     
    $row.find(".fob-input").prop("disabled", true); 
    $row.find(".btn-save-inv-row").hide(); 
    $row.find(".btn-edit-inv-row").show();
});
  
//input change data update both field 
$(document).on("change", ".edit-fob-rate", function () {

    const $row = $(this).closest("tr");
    const index = Number($row.data("index"));

    const data = $("#tblInvDtlBody").data("inv-data");

    if (data[index]) {
        data[index].fobRate = $(this).val();
    }

});
$(document).on("change", ".edit-fob-value", function () {

    const $row = $(this).closest("tr");
    const index = Number($row.data("index"));

    const data = $("#tblInvDtlBody").data("inv-data");

    if (data[index]) {
        data[index].fabricValue = $(this).val();
    }

});

//save in row table 
$(document).on("click", ".btn-save-inv-row", function () {

    const $row = $(this).closest("tr");
    const index = Number($row.data("index"));

    const data = $("#tblInvDtlBody").data("inv-data");
    const item = data[index];

    if (!item) {
        showError("Error", "Invoice record not found.");
        return;
    }

    const fobRate = $row
        .find(".edit-fob-rate")
        .val()
        .trim();

    const fobValue = $row
        .find(".edit-fob-value")
        .val()
        .trim();

    if (!fobRate) {
        showWarning("FOB Rate Required", "Please enter FOB Rate.");
        return;
    }

    if (!fobValue) {
        showWarning("FOB Value Required", "Please enter FOB Value.");
        return;
    }

    // Update data
    item.fobRate = fobRate;
    item.fabricValue = fobValue;

    console.log("Updated Row:", item);

    // Rebind table
    bindInvDtls(data);

    showSuccess(
        "Updated",
        "FOB Rate and FOB Value updated successfully."
    );

});
function bindLogDetails(data) {

    const $tbody = $('#logDetailsBody');

    // Clear existing rows
    $tbody.empty();

    $.each(data, function (index, item) {

        const row = ` <tr> 
            <td class="c"> ${index + 1} </td> 
            <td class="mono"> ${item.invoiceNo || '—'} </td> 
            <td> ${item.officeSetRcvd || '—'} </td> 
            <td class="c">
                ${item.ic
                    ? `<span class="status-pill">${item.ic}</span>`
                    : '—'
                 }
            </td> 
            <td class="c"> ${item.sentForIc || '—'} </td> 
            <td> ${item.icRcvd || '—'} </td> 
            <td> ${item.customDocRcvd || '—'} </td> 
            <td> ${item.docType || '—'} </td> 
            <td> ${item.sentToBank || '—'} </td> 
            <td> ${item.sentToBuyer || '—'} </td> 
            <td> ${item.payMode || '—'} </td> 
            <td> ${item.user || '—'} </td> 
            <td> ${item.logDate || '—'} </td> 
            <td class="num"> ${item.logTime || '—'} </td> 
        </tr> `;

        $tbody.append(row);
    });
}

function bindEBRC(data) {

    const $tbody = $('#ebrcBody'); 
    $tbody.empty();

    $.each(data, function (index, item) {

        const amount = Number(item.amount || 0)
            .toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

        const row = `<tr> 
            <td class="text-center">
               <button type="button" class="edit-btn btn-edit-tt-adjustment"> 
                   <svg width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"> 
                       <path d="M12 20h9"></path> 
                       <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path> 
                   </svg> 
               </button>
               <button type="button" class="edit-btn btn-edit-tt-adjustment"> 
                   +
               </button>
            </td>
            <td class="mono"> ${item.ebrcNo || '—'} </td> 
            <td> ${item.date || '—'} </td> 
            <td class="r num"> ${amount} </td> 
        </tr>`;

        $tbody.append(row);
    });
}

function bindInvoices(data) {

    const $tbody = $('#invoiceBody');

    $tbody.empty();

    $.each(data, function (index, item) {

        const row = `<tr> 
            <td class="c"> ${index + 1} </td> 
            <td class="mono"> ${item.invoiceNo || '—'} </td> 
            <td> ${item.invoiceDate || '—'}  </td> 
            <td> ${item.grNo || '—'} </td> 
        </tr> `;

        $tbody.append(row);
    });
}

$('#btnEbrcHelp').on('click', function () {
    $('#ebrcHelp').modal('show')
})

$('#btnLogDtls').on('click', function () {
    $('#logDtls').modal('show')
})

function bindInvoiceList(data) {

    const $tbody = $('#invoiceListBody');

    $tbody.empty();

    $.each(data, function (index, item) {

        const row = `<tr> 
           <td class="text-center"> 
               <button type="button" class="edit-btn btn-edit-tt-adjustment" data-id="${item.invoiceNumber}" title="Edit" onclick="editBanckInv()"> 
                   <svg width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"> 
                       <path d="M12 20h9"></path> 
                       <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path> 
                   </svg> 
               </button>
            </td>
            <td class="mono"> ${item.invoiceNumber || '—'} </td> 
            <td> ${item.invoiceDate || '—'} </td> 
            <td> ${item.buyerName || '—'} </td> 
            <td> ${item.currency || '—'} </td> 
            <td class="r num"> ${item.amount} </td> 
            <td class="mono"> ${item.lcNo || '—'} </td> 
            <td class="mono"> ${item.sbNo || '—'} </td> 
            <td> ${item.initial || '—'} </td> 
        </tr>`;

        $tbody.append(row);
    });
}

function editBanckInv() {
    window.location.href = '/BankInvoice/Index'
}

$('#btnBack').on('click', function () {
    window.location.href = '/BankInvoice/viewBankInv'
})
 
$('#btnAdd').on('click', function () {
    window.location.href = '/BankInvoice/Index'
})
 