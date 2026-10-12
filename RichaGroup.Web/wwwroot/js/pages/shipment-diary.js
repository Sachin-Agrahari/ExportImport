(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const switchBtns = document.querySelectorAll('.screen-switch button');
        function show(name) {
            document.querySelectorAll('.screen').forEach(s => s.classList.toggle('on', s.id === 'screen-' + name));
            switchBtns.forEach(b => b.classList.toggle('on', b.dataset.screen === name));
            window.scrollTo({ top: 0 });
        }
        switchBtns.forEach(b => b.addEventListener('click', () => show(b.dataset.screen)));
        window.show = show;

        const tabBtns = [...document.querySelectorAll('.tabs button')];
        function showTab(id) {
            document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('on', p.id === id));
            tabBtns.forEach(b => b.classList.toggle('on', b.dataset.tab === id));
        }
        tabBtns.forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
        window.stepTab = function (dir) {
            const i = tabBtns.findIndex(b => b.classList.contains('on'));
            const next = Math.min(Math.max(i + dir, 0), tabBtns.length - 1);
            showTab(tabBtns[next].dataset.tab);
        };
        //add button under merage lot to open aother modal
        $("#btnAdd_MeargeLot").on("click", function () {
            // window.location.href = "/Banking/EPCGLicense";
            $('#addMenuModalEditAdd').modal('show')
        });

        //table 1
        bindInvoiceListTable();
        //merge lot table bind 
        bindMergeLotTable();
        bindInvoiceDetailsPickInvoice();
        bindCHABillDetails();
        bindCHAInvDetails();
    });
})();

//table 1 main page 
//static data 
const invoiceListData = [
    {
        id: 1,
        invoiceNo: "INV-2025-001",
        lotNo: "LOT-1001",
        lotDate: "01-09-2025",
        chaAgent: "ABC CHA",
        buyerCode: "BYR001",
        status: "Pending",
        forwarder: "DHL"
    },
    {
        id: 2,
        invoiceNo: "INV-2025-002",
        lotNo: "LOT-1002",
        lotDate: "05-09-2025",
        chaAgent: "XYZ CHA",
        buyerCode: "BYR002",
        status: "Approved",
        forwarder: "FedEx"
    },
    {
        id: 3,
        invoiceNo: "INV-2025-003",
        lotNo: "LOT-1003",
        lotDate: "10-09-2025",
        chaAgent: "Global CHA",
        buyerCode: "BYR003",
        status: "In Process",
        forwarder: "UPS"
    },
    {
        id: 4,
        invoiceNo: "INV-2025-004",
        lotNo: "LOT-1004",
        lotDate: "15-09-2025",
        chaAgent: "ABC CHA",
        buyerCode: "BYR004",
        status: "Rejected",
        forwarder: "Blue Dart"
    },
    {
        id: 5,
        invoiceNo: "INV-2025-005",
        lotNo: "LOT-1005",
        lotDate: "20-09-2025",
        chaAgent: "XYZ CHA",
        buyerCode: "BYR005",
        status: "Pending",
        forwarder: "DHL"
    }
];

//bind table 
function bindInvoiceListTable() {

    const $tbody = $("#tblbody_InvoiceList");

    if (!$tbody.length) {
        console.error("tblbody_InvoiceList not found.");
        return;
    }

    $tbody.empty();

    $.each(invoiceListData, function (index, item) {

        let statusHtml = "";

        switch (item.status) {
            case "Approved":
                statusHtml = `<span class="badge bg-success">Approved</span>`;
                break;

            case "Rejected":
                statusHtml = `<span class="badge bg-danger">Rejected</span>`;
                break;

            case "In Process":
                statusHtml = `<span class="badge bg-warning text-dark">In Process</span>`;
                break;

            default:
                statusHtml = `<span class="badge bg-secondary">Pending</span>`;
                break;
        }

        $tbody.append(`
            <tr data-index="${index}">
                <td class="c">
                    <button type="button"
                            class="edit-btn btn-outline-primary btnEditInvoice"
                            data-index="${index}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button type="button"
                         class="edit-btn btn-outline-success btnMergeLot"
                         data-index="${index}"
                         title="Merge Lot">
                     <i class="fa-solid fa-code-merge"></i>
                  </button>

                    <button type="button"
                            class="row-btn btn-outline-danger btnDeleteInvoice"
                            data-index="${index}"
                            title="Delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>

                <td class="c">${index + 1}</td>

                <td>${item.invoiceNo}</td>

                <td class="r">${item.lotNo}</td>

                <td>${item.lotDate}</td>

                <td>${item.chaAgent}</td>

                <td class="r">${item.buyerCode}</td>

                <td class="c">${statusHtml}</td>

                <td class="r">${item.forwarder}</td>
            </tr>
        `);
    });
}

//open modal 
$(document).on("click", ".btnMergeLot", function () {
    const modalEl = document.getElementById("addMenuModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
});
//merge table data 
//static data 
const mergeLotData = [
    {
        id: 1,
        invoiceNo: "INV-2025-001",
        lotNo: "LOT-1001",
        cha: "ABC CHA",
        buyer: "BELK",
        forwarder: "DHL",
        mode: "By Sea",
        terms: "FOB",
        portOfDischarge: "New York",
        portOfLoading: "Nhava Sheva"
    },
    {
        id: 2,
        invoiceNo: "INV-2025-002",
        lotNo: "LOT-1002",
        cha: "XYZ CHA",
        buyer: "AEO",
        forwarder: "FedEx",
        mode: "By Air",
        terms: "CIF",
        portOfDischarge: "Chicago",
        portOfLoading: "Delhi"
    },
    {
        id: 3,
        invoiceNo: "INV-2025-003",
        lotNo: "LOT-1003",
        cha: "Global CHA",
        buyer: "Nike",
        forwarder: "UPS",
        mode: "By Sea",
        terms: "FOB",
        portOfDischarge: "Los Angeles",
        portOfLoading: "Mundra"
    },
    {
        id: 4,
        invoiceNo: "INV-2025-004",
        lotNo: "LOT-1004",
        cha: "ABC CHA",
        buyer: "Levi's",
        forwarder: "Blue Dart",
        mode: "By Air",
        terms: "CIF",
        portOfDischarge: "Boston",
        portOfLoading: "Mumbai"
    },
    {
        id: 5,
        invoiceNo: "INV-2025-005",
        lotNo: "LOT-1005",
        cha: "XYZ CHA",
        buyer: "AEO",
        forwarder: "DHL",
        mode: "By Sea",
        terms: "FOB",
        portOfDischarge: "Miami",
        portOfLoading: "Nhava Sheva"
    }
];
//bind data
function bindMergeLotTable(data = mergeLotData) {

    const $tbody = $("#tblbodymergeLotLotNo");

    if (!$tbody.length) {
        console.error("tblbodymergeLotLotNo not found.");
        return;
    }

    const searchBy = $("#ddlMergeLotSearchBy").val();

    // Invoice column show/hide
    const invoiceClass = searchBy === "invoiceNo" ? "" : "d-none";

    // Header bhi same state me rakho
    $(".invoice-column").toggleClass("d-none", searchBy !== "invoiceNo");

    $tbody.empty();

    $.each(data, function (index, row) {

        $tbody.append(`
            <tr data-id="${row.id}">

                <td class="text-center">
                    <button type="button"
                            class="edit-btn btn-outline-primary btnEditMergeLot"
                            data-id="${row.id}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkMergeLot"
                           data-id="${row.id}">
                </td>

                <!-- Invoice No -->
                <td class="invoice-column ${invoiceClass}">
                    ${row.invoiceNo}
                </td>

                <!-- Lot No -->
                <td>
                    ${row.lotNo}
                </td>

                <td>${row.cha}</td>
                <td>${row.buyer}</td>
                <td>${row.forwarder}</td>
                <td>${row.mode}</td>
                <td>${row.terms}</td>
                <td>${row.portOfDischarge}</td>
                <td>${row.portOfLoading}</td>

            </tr>
        `);
    });
}
//according dropdwon table change
$(document).on("change", "#ddlMergeLotSearchBy", function () {

    const searchBy = $(this).val();

    const $search = $("#txtMergeLotSearch");

    if (searchBy === "invoiceNo") {

        $search.attr("placeholder", "Enter Invoice No");

        $(".invoice-column").removeClass("d-none");

    } else {

        $search.attr("placeholder", "Enter Lot No");

        $(".invoice-column").addClass("d-none");
    }

    $search.val("");

    bindMergeLotTable(mergeLotData);
});
//for search functionality
$(document).on("input", "#txtMergeLotSearch", function () {

    const searchValue = $(this).val().trim().toLowerCase();
    const searchBy = $("#ddlMergeLotSearchBy").val();

    if (!searchValue) {
        bindMergeLotTable(mergeLotData);
        return;
    }

    const filteredData = mergeLotData.filter(function (row) {

        return String(row[searchBy])
            .toLowerCase()
            .includes(searchValue);
    });

    bindMergeLotTable(filteredData);

    // Invoice column state maintain karo
    if (searchBy === "invoiceNo") {
        $(".invoice-column").removeClass("d-none");
    } else {
        $(".invoice-column").addClass("d-none");
    }
});
//edit button 
$(document).on("click", ".btnEditMergeLot", function () {

    const id = Number($(this).data("id"));

    const row = mergeLotData.find(x => x.id === id);

    if (!row) {
        return;
    }

    console.log("Edit Merge Lot:", row);

    // Edit modal ke fields bind karo
    $("#txtLotNo").val(row.lotNo);
    $("#ddlMode").val(row.mode);
    $("#ddlBuyer").val(row.buyer);
    $("#txtTerms").val(row.terms);
    $("#txtCHA").val(row.cha);
    $("#txtportLoading").val(row.portOfLoading);
    $("#ddlForwader").val(row.forwarder);
    $("#ddlportdischarge").val(row.portOfDischarge);

    // Edit/Add modal open
    const modalEl = document.getElementById("addMenuModalEditAdd");

    if (modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }

});
const invoiceDetailsPickInvoiceData = [
    {
        invoiceNo: "RE/2143/23-24", 
        invoiceDate: "13-09-2023",
        exportRefNo: "RE/ES/2717/23-24",
        packages: "—",
        consignee: "JILL Acquisition LLC",
        amount: "31,943.88",
        currency: "US$",
        type: "PP",
        checked: true
    },
    {
        invoiceNo: "RE/2144/23-24",
        invoiceDate: "13-09-2023",
        exportRefNo: "RE/ES/2716/23-24",
        packages: "—",
        consignee: "JILL Acquisition LLC",
        amount: "21,861.96",
        currency: "US$",
        type: "PP",
        checked: false
    },
    {
        invoiceNo: "RE/2145/23-24",
        invoiceDate: "14-09-2023",
        exportRefNo: "RE/ES/2294/23-24",
        packages: "173 PKGS",
        consignee: "Abercrombie & Fitch Trade",
        amount: "38,106.60",
        currency: "US$",
        type: "BHAT",
        checked: false
    },
    {
        invoiceNo: "RE/2146/23-24",
        invoiceDate: "14-09-2023",
        exportRefNo: "RE/ES/2303/23-24",
        packages: "29 PKGS",
        consignee: "Abercrombie & Fitch Trade",
        amount: "5,675.90",
        currency: "US$",
        type: "BHAT",
        checked: false
    },
    {
        invoiceNo: "RE/2147/23-24",
        invoiceDate: "14-09-2023",
        exportRefNo: "RE/ES/2425/23-24",
        packages: "58 PKGS",
        consignee: "The White Company",
        amount: "15,808.00",
        currency: "US$",
        type: "PP",
        checked: false
    },
    {
        invoiceNo: "RE/2148/23-24",
        invoiceDate: "16-09-2023",
        exportRefNo: "RE/ES/2414/23-24",
        packages: "—",
        consignee: "Abercrombie & Fitch Trade",
        amount: "7,746.90",
        currency: "US$",
        type: "BHAT",
        checked: false
    }
];


const CHABillDetails = [
    {
        srNo: 1,
        invoiceNo: "RE/2143/23-24",
        gstInvNo: "GST/2143/23-24",
        gstOnVlu: "31,943.88",
        igst: "5,749.90",
        amount: "31,943.88",
        bankQty: "1,250",
        afpcQty: "1,200",
        ctn: "85",
        volWt: "1,420.50",
        grwt: "1,580.75",
        nta: "29,850.25"
    },
    {
        srNo: 2,
        invoiceNo: "RE/2144/23-24",
        gstInvNo: "GST/2144/23-24",
        gstOnVlu: "24,785.50",
        igst: "4,461.39",
        amount: "24,785.50",
        bankQty: "980",
        afpcQty: "945",
        ctn: "68",
        volWt: "1,105.75",
        grwt: "1,245.30",
        nta: "23,120.40"
    },
    {
        srNo: 3,
        invoiceNo: "RE/2145/23-24",
        gstInvNo: "GST/2145/23-24",
        gstOnVlu: "42,315.75",
        igst: "7,616.84",
        amount: "42,315.75",
        bankQty: "1,860",
        afpcQty: "1,795",
        ctn: "142",
        volWt: "2,365.40",
        grwt: "2,615.85",
        nta: "39,850.60"
    },
    {
        srNo: 4,
        invoiceNo: "RE/2146/23-24",
        gstInvNo: "GST/2146/23-24",
        gstOnVlu: "18,650.25",
        igst: "3,357.05",
        amount: "18,650.25",
        bankQty: "725",
        afpcQty: "695",
        ctn: "47",
        volWt: "815.60",
        grwt: "905.45",
        nta: "17,425.80"
    },
    {
        srNo: 5,
        invoiceNo: "RE/2147/23-24",
        gstInvNo: "GST/2147/23-24",
        gstOnVlu: "27,945.80",
        igst: "5,030.24",
        amount: "27,945.80",
        bankQty: "1,120",
        afpcQty: "1,085",
        ctn: "76",
        volWt: "1,285.90",
        grwt: "1,435.65",
        nta: "26,210.45"
    },
    {
        srNo: 6,
        invoiceNo: "RE/2148/23-24",
        gstInvNo: "GST/2148/23-24",
        gstOnVlu: "9,875.40",
        igst: "1,777.57",
        amount: "9,875.40",
        bankQty: "465",
        afpcQty: "442",
        ctn: "35",
        volWt: "520.80",
        grwt: "575.35",
        nta: "9,245.60"
    }
];

const CHAInvDetails = [
    {
        invoiceNo: "RE/2143/23-24",
        Qty: "388.000",
        Actlrate: "8.0000",
        Newrate: "7.5000",
        Diffrate: "0.0000"
    },
    {
        invoiceNo: "",
        Qty: "0.000",
        Actlrate: "0.000",
        Newrate: "0.000",
        Diffrate: "0.0000"
    },
    {
        invoiceNo: "",
        Qty: "0.000",
        Actlrate: "0.000",
        Newrate: "0.000",
        Diffrate: "0.0000"
    }
];

function bindInvoiceDetailsPickInvoice() {

    const $tbody = $("#tblbody_InvoiceDetails_Pick_Invoice");

    if (!$tbody.length) {

        console.error(
            "[InvoiceDetails] #tblbody_InvoiceDetails_Pick_Invoice not found."
        );

        return;
    }

  

    // Clear existing rows
    $tbody.empty();

    // Bind Rows

    $.each(invoiceDetailsPickInvoiceData, function (index, item) {

        const row = `
            <tr class="${item.checked ? "selected" : ""}">

                <!-- # -->
                <td class="c">
                    ${index + 1}
                </td>
               

                <!-- Invoice No -->
                <td class="mono">
                    ${item.invoiceNo ?? ""}
                </td>

                <!-- Invoice Date -->
                <td>
                    ${item.invoiceDate ?? ""}
                </td>

                <!-- Export Ref No -->
                <td class="mono">
                    ${item.exportRefNo ?? ""}
                </td>

                <!-- Packages -->
                <td class="r">
                    ${item.packages ?? ""}
                </td>

                <!-- Consignee -->
                <td>
                    ${item.consignee ?? ""}
                </td>

                <!-- Amount -->
                <td class="r num">
                    ${item.amount ?? ""}
                </td>

                <!-- Currency -->
                <td>
                    ${item.currency ?? ""}
                </td>

                <!-- Type -->
                <td>
                    ${item.type ?? ""}
                </td>

            </tr>
        `;

        $tbody.append(row);

    });
    // Checkbox Change

    $tbody
        .off("change.invoicePick", ".invoice-pick-checkbox")
        .on(
            "change.invoicePick",
            ".invoice-pick-checkbox",
            function () {

                const index = Number($(this).data("index"));

                const checked = this.checked;

                const $row = $(this).closest("tr");


                // Update array
                invoiceDetailsPickInvoiceData[index].checked = checked;


                // Selected class
                $row.toggleClass(
                    "selected",
                    checked
                );

            }
        );
  
}

function bindCHAInvDetails() {

    const $tbody = $("#tblbodytblChaInvDetails");

    if (!$tbody.length) {
        console.error(
            "[CHAInvDetails] #tblbodytblChaInvDetails not found."
        );
        return;
    }

    $tbody.empty();

    let row = "";

    $.each(CHAInvDetails, function (index, item) {

        row += `
            <tr data-invoice="${item.invoiceNo ?? ""}">

                <td class="mono">
                    ${item.invoiceNo ?? ""}
                </td>

                <td class="r num">
                    <input type="text"
                           class="r num"
                           value="${item.bankQty ?? ""}" />
                </td>

                <td class="r num">
                    <input type="text"
                           class="r num"
                           value="${item.gstOnVlu ?? ""}" />
                </td>

                <td class="r num">
                    <input type="text"
                           class="r num"
                           value="${item.amount ?? ""}" />
                </td>

                <td class="r num">
                    <input type="text"
                           class="r num"
                           value="${item.igst ?? ""}" />
                </td>

            </tr>
        `;
    });

    $tbody.append(row);
}

function bindCHABillDetails() {

    const $tbody = $("#tblbodytblCHABillDetails");

    if (!$tbody.length) {

        console.error(
            "[CHABillDetails] #tblbodytblCHABillDetails not found."
        );

        return;
    }
    $tbody.empty();
    let row = "";
    // Bind Rows
    $.each(CHABillDetails, function (index, item) {
        row = `
            <tr>

                <!-- # -->
                <td class="c">
                    ${item.srNo ?? (index + 1)}
                </td>

                <!-- Invoice No -->
                <td class="mono">
                    ${item.invoiceNo ?? ""}
                </td>

                <!-- GST Invoice No -->
                <td class="mono">
                    ${item.gstInvNo ?? ""}
                </td>

                <!-- GST On VLU -->
                <td class="r num">
                    ${item.gstOnVlu ?? ""}
                </td>

                <!-- IGST -->
                <td class="r num">
                    ${item.igst ?? ""}
                </td>

                <!-- Amount -->
                <td class="r num">
                    ${item.amount ?? ""}
                </td>

                <!-- Bank Qty -->
                <td class="r num">
                    ${item.bankQty ?? ""}
                </td>

                <!-- AFPC Qty -->
                <td class="r num">
                    ${item.afpcQty ?? ""}
                </td>

                <!-- CTN -->
                <td class="r num">
                    ${item.ctn ?? ""}
                </td>

                <!-- Volume Weight -->
                <td class="r num">
                    ${item.volWt ?? ""}
                </td>

                <!-- Gross Weight -->
                <td class="r num">
                    ${item.grwt ?? ""}
                </td>

                <!-- NTA -->
                <td class="r num">
                    ${item.nta ?? ""}
                </td>

            </tr>
        `;
        $tbody.append(row);
        return false;
    });
   
}

async function AddForwarderDetails() {

    const $tbody = $("#tblbodyForwarderBillDetails");

    if (!$tbody.length) {
        console.error("#tblbodyForwarderBillDetails not found.");
        return;
    }

    const rowCount = $tbody.find("tr").length;

    // Dynamic SweetAlert
    const result = await showCommonInputAlert({

        title: rowCount > 0
            ? "Forwarder Bill Details"
            : "Add Forwarder Details",

        text: rowCount > 0
            ? "Bill Already Entered Do You Want To Continue (With Remark)"
            : "Please enter Forwarder Remarks.",

        inputLabel: "Forwarder Remarks",

        inputPlaceholder: "Enter Forwarder Remarks...",

        confirmButtonText: rowCount > 0
            ? "Yes, Add"
            : "Add",

        cancelButtonText: "Cancel"
    });


    // Cancel
    if (!result.isConfirmed) {
        return;
    }

    // Remarks
    const remarks = result.value.trim();

    console.log("Remarks:", remarks);


    // -----------------------------
    // YOUR EXISTING ROW CODE
    // -----------------------------

    const index = rowCount;

    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const currentDate = `${day}-${month}-${year}`;

    const row = `
        <tr data-index="${index}">

            <td>
            
                  <button type="button" id="btnForwaderDetails" style="width:60px" class="row-btn btnOpenmodal edit-btn" title="Tag Invoice">
														Tag Inv
													</button>
            </td>

            <td>
                <input type="text"
                       name="ForwarderDetails[${index}].EntryDate"
                       class="w-100 form-Flatdate"
                       value="${currentDate}">
            </td>

            <td>
                <input type="text"
                       name="ForwarderDetails[${index}].BillNo"
                       placeholder="Enter Bill.."
                       class="w-100">
            </td>

            <td>
                <input type="text"
                       name="ForwarderDetails[${index}].Date"
                       class="w-100 form-Flatdate">
            </td>

            <td class="r num">
                <input type="text"
                       name="ForwarderDetails[${index}].Amount"
                       class="w-100 r num"
                       placeholder="0.00">
            </td>

            <td class="r num">
                <input type="text"
                       name="ForwarderDetails[${index}].LateDelivery"
                       class="w-100 r num"
                       placeholder="0.00">
            </td>

            <td class="r num">
                <select name="ForwarderDetails[${index}].BillFor"
                        class="w-100">

                    <option value="CHA">CHA</option>
                    <option value="Forwarder">Forwarder</option>

                </select>
            </td>
        </tr>
    `;

    $tbody.append(row);


    if (typeof flatpickr !== "undefined") {

        $tbody.find(".form-Flatdate").last().flatpickr({

            dateFormat: "d-m-Y",

            allowInput: true,

            defaultDate: "today"

        });

    }
}

function escapeHtml(value) {

    return $("<div>")
        .text(value)
        .html();
}

$(document).on("click", ".btnOpenmodal", function () {
    $('#addForwarderModal').modal('show');
});

$("#txtInvoiceNumber").on("keyup input", function () {

    var searchValue = $(this).val().toLowerCase().trim();

    $("#tblbodytblCHABillDetails tr").each(function () {

        // Invoice No. second column hai => eq(1)
        var invoiceNo = $(this).find("td").eq(1).text().toLowerCase().trim();

        if (invoiceNo.includes(searchValue)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


$("#txtInvoiceListSearch").on("keyup input", function () {

    var searchValue = $(this).val().toLowerCase().trim();

    $("#tblbody_InvoiceList tr").each(function () {

       
        var invoiceNo = $(this).find("td").eq(1).text().toLowerCase().trim();

        if (invoiceNo.includes(searchValue)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


let selectedInvoiceNos = new Set();


// ==========================================
// Render Invoice List
// ==========================================
function renderInvoiceList(searchText = "") {

    const tbody = $("#tblInvoiceSelectionBody");

    tbody.empty();


    // ------------------------------------------
    const searchValues = searchText
        .split(/[, \n]+/)
        .map(x => x.trim().toLowerCase())
        .filter(x => x !== "");


    // ------------------------------------------
    // Filter CHABillDetails
    // ------------------------------------------
    const filteredInvoices = CHABillDetails.filter(function (item) {

        if (!item.invoiceNo) {
            return false;
        }

        const invoiceNo = item.invoiceNo.toLowerCase();


    
        // ------------------------------------------
        if (selectedInvoiceNos.has(item.invoiceNo)) {
            return false;
        }


     
        if (searchValues.length === 0) {
            return true;
        }


        // Multiple invoice search
        return searchValues.some(function (search) {
            return invoiceNo.includes(search);
        });

    });


    // ------------------------------------------
    // Create rows
    // ------------------------------------------
    let row = "";

    filteredInvoices.forEach(function (item) {

        row += `
            <tr>

                <td class="text-center">
                    <input type="checkbox"
                           class="chkInvoice"
                           value="${item.invoiceNo}">
                </td>

                <td>
                    ${item.invoiceNo ?? ""}
                </td>

                <td>
                    ${item.gstInvNo ?? ""}
                </td>

                <td class="text-end">
                    ${item.gstOnVlu ?? ""}
                </td>

                <td class="text-end">
                    ${item.igst ?? ""}
                </td>

                <td class="text-end">
                    ${item.amount ?? ""}
                </td>

                <td class="text-end">
                    ${item.bankQty ?? ""}
                </td>

                <td class="text-end">
                    ${item.afpcQty ?? ""}
                </td>

                <td class="text-end">
                    ${item.ctn ?? ""}
                </td>

                <td class="text-end">
                    ${item.volWt ?? ""}
                </td>

                <td class="text-end">
                    ${item.grwt ?? ""}
                </td>

                <td class="text-end">
                    ${item.nta ?? ""}
                </td>

            </tr>
        `;
    });


    tbody.append(row);


    // ------------------------------------------
    // No record
    // ------------------------------------------
    $("#invoiceNoRecord")
        .toggle(filteredInvoices.length === 0);


}



// Open modal
$("#btnOpenInvoiceModal").on("click", function () {

    $("#txtModalInvoiceSearch").val("");

    renderInvoiceList();
});


// Search invoice
$("#txtModalInvoiceSearch").on("input", function () {

    renderInvoiceList($(this).val());

});

// Select / deselect individual invoice
$(document).on("change", ".chkInvoice", function () {

    const invoiceNo = $(this).val();

    if ($(this).is(":checked")) {

        selectedInvoiceNos.add(invoiceNo);

    } else {

        selectedInvoiceNos.delete(invoiceNo);

    }

});

$("#chkSelectAll").on("change", function () {

    const checked = $(this).is(":checked");

    $(".chkInvoice").each(function () {

        const invoiceNo = $(this).val();

        $(this).prop("checked", checked);

        if (checked) {

            selectedInvoiceNos.add(invoiceNo);

        } else {

            selectedInvoiceNos.delete(invoiceNo);

        }

    });

});

$("#btnAddSelectedInvoices").on("click", function () {

    if (selectedInvoiceNos.size === 0) {

        alert("Please select at least one invoice.");

        return;
    }


    const tbody = $("#tblbodytblCHABillDetails");


    selectedInvoiceNos.forEach(function (invoiceNo) {

        const item = CHABillDetails.find(
            x => x.invoiceNo === invoiceNo
        );

        if (!item) {
            return;
        }


        // Extra duplicate protection
        const alreadyExists = tbody.find("tr").filter(function () {

            return $(this).attr("data-invoice") === invoiceNo;

        }).length > 0;


        if (alreadyExists) {
            return;
        }


        const row = `
            <tr data-invoice="${item.invoiceNo}">

                <td class="c"></td>

                <td>
                    ${item.invoiceNo ?? ""}
                </td>

                <td>
                    ${item.gstInvNo ?? ""}
                </td>

                <td class="r num">
                    ${item.gstOnVlu ?? ""}
                </td>

                <td class="r num">
                    ${item.igst ?? ""}
                </td>

                <td class="r num">
                    ${item.amount ?? ""}
                </td>

                <td class="r num">
                    ${item.bankQty ?? ""}
                </td>

                <td class="r num">
                    ${item.afpcQty ?? ""}
                </td>

                <td class="r num">
                    ${item.ctn ?? ""}
                </td>

                <td class="r num">
                    ${item.volWt ?? ""}
                </td>

                <td class="r num">
                    ${item.grwt ?? ""}
                </td>

                <td class="r num">
                    ${item.nta ?? ""}
                </td>

            </tr>
        `;


        tbody.append(row);

    });


    // Recalculate Sr No
    tbody.find("tr").each(function (index) {

        $(this)
            .find("td:first")
            .text(index + 1);

    });


    // Clear search
    $("#txtModalInvoiceSearch").val("");


    // Refresh modal list
    renderInvoiceList();


    // Close modal
    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("invoiceModal")
        )
        .hide();

});