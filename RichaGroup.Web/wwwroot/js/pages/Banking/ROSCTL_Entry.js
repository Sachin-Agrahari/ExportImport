$(document).ready(function () {

    initROSCTLEntry();

});

// PAGE INITIALIZATION

function initROSCTLEntry() {

    // Flatpickr - From Date
    if ($("#txtFromDate_ROSCTLEntry").length) {
        flatpickr("#txtFromDate_ROSCTLEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });
    }

    // Flatpickr - To Date
    if ($("#txtToDate_ROSCTLEntry").length) {
        flatpickr("#txtToDate_ROSCTLEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });
    }

    // Refresh
    $("#btnRefresh_ROSCTLEntry").on("click", function () {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to refresh the ROSCTL Entry?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Refresh",
            cancelButtonText: "Cancel"
        }).then(function (result) {

            if (result.isConfirmed) {
                refreshROSCTLEntry();
            }

        });

    });

    // Filter
    $("#btnAdd_ROSCTLEntry").on("click", function () {
        filterROSCTLEntry();
    });

    // Tag License (open modal)
    $("#btnAddLicense").on("click", function () {
        openLicenseModal();
    });

    // Modal - row checkbox change
    $(document).on("change", ".rosctl-license-check", function () {

        const id = parseInt($(this).data("id"), 10);

        if (this.checked) {
            selectedLicenseIds.add(id);
        } else {
            selectedLicenseIds.delete(id);
        }

        syncLicenseSelectAll();
        updateLicenseSelectedCount();

    });

    // Modal - row click toggles checkbox (except when clicking the checkbox itself)
    $(document).on("click", "#tblbodyLicenseModal tr", function (e) {

        if ($(e.target).is("input[type='checkbox']")) {
            return;
        }

        const $chk = $(this).find(".rosctl-license-check:not(:disabled)");

        if ($chk.length) {
            $chk.prop("checked", !$chk.prop("checked")).trigger("change");
        }

    });

    // Modal - select all
    $("#chkLicenseSelectAll").on("change", function () {

        const checked = this.checked;

        $("#tblbodyLicenseModal .rosctl-license-check:not(:disabled)").each(function () {

            this.checked = checked;

            const id = parseInt($(this).data("id"), 10);

            if (checked) {
                selectedLicenseIds.add(id);
            } else {
                selectedLicenseIds.delete(id);
            }

        });

        updateLicenseSelectedCount();

    });

    // Modal - Add Selected
    $("#btnAddSelectedLicense").on("click", function () {
        addSelectedLicenses();
    });

    // Initial DataTable
    initROSCTLEntryDataTable();

}


// MAIN TABLE COLUMN DEFINITION
// dec = decimals for number columns, null = plain text

const ROSCTL_COLUMNS = [
    { key: "olsbdt", dec: null },
    { key: "xls", dec: null },   // 2XH
    { key: "a", dec: null },
    { key: "invoiceNo", dec: null },   // Invno
    { key: "entFinalAmt", dec: 2 },      // Ent./FinlAmt
    { key: "dbkType", dec: null },   // Dbk_type
    { key: "senton", dec: null },
    { key: "sbNo", dec: null },   // SB #
    { key: "sbDate", dec: null },
    { key: "fobFac", dec: 2 },      // Fob_fac
    { key: "dbkApld", dec: 2 },      // Dbk Apld
    { key: "tr1d", dec: null },   // Tr1_d
    { key: "usdRt", dec: 5 },      // Usd_rt
    { key: "inrAmt", dec: 2 },      // Inramt
    { key: "leoDt", dec: null },
    { key: "epDate", dec: null },   // Ep_date
    { key: "portCode", dec: null },
    { key: "fobcf", dec: null },
    { key: "desti", dec: null },
    { key: "cntry", dec: null },
    { key: "hscd", dec: null },
    { key: "rmgmup", dec: null },
    { key: "bnkrefno", dec: null },
    { key: "actlRlzdt", dec: null },   // Actl_rlzdt
    { key: "tr1a", dec: null },   // Tr1_a
    { key: "tr1b", dec: null },   // Tr1_b
    { key: "tr2", dec: null },
    { key: "fac", dec: 2 },
    { key: "buyer", dec: null },
    { key: "cha", dec: null },
    { key: "forwarder", dec: null },
    { key: "writeoff", dec: null }
];


// TAG LICENSE MODAL COLUMN DEFINITION (as per ROSCTL Details screen)

const LICENSE_MODAL_COLUMNS = [
    { key: "invoiceNo", dec: null },   // Invno
    { key: "desc4b", dec: null },   // Desc4_b
    { key: "amt", dec: 2 },      // Amt
    { key: "finlAmt", dec: 2 },      // Finl_amt
    { key: "inrAmt", dec: 2 },      // Inramt
    { key: "senton", dec: null },   // Senton
    { key: "filedon", dec: null },   // Filedon
    { key: "fileNo", dec: null },   // File_no
    { key: "rcvdon", dec: null },   // Rcvdon
    { key: "soldon", dec: null }    // Soldon
];


// MAIN ROW BUILDER (fills default values for the extra columns)

function mkROSCTLRow(base) {

    return $.extend({

        olsbdt: "- -",
        xls: "N",
        a: "N",
        senton: "- -",
        dbkType: "DBK",
        leoDt: base.sbDate,
        portCode: "INDEL4",
        fobcf: "FOB",
        desti: "USA",
        cntry: "USA",
        hscd: "62",
        rmgmup: "RMG",
        bnkrefno: "",
        actlRlzdt: "- -",
        tr1a: "MAWB",
        tr1b: "057-0",
        tr2: "HAWB",
        fac: 0.00,
        buyer: "J.CREW",
        cha: "APL LOG",
        forwarder: "STAR SHIPPING",
        writeoff: "- -"

    }, base);

}


// MODAL ROW -> MAIN TABLE ROW (mapping when "Add Selected" is clicked)

function mapLicenseToROSCTLRow(item) {

    return mkROSCTLRow({
        id: item.id,
        invoiceNo: item.invoiceNo,
        entFinalAmt: item.finlAmt,
        sbNo: item.desc4b,
        sbDate: item.senton,
        senton: item.senton,
        fobFac: item.inrAmt,
        dbkApld: 0,
        tr1d: item.filedon,
        usdRt: 0,
        inrAmt: item.inrAmt,
        epDate: item.rcvdon,
        actlRlzdt: item.soldon
    });

}


// STATIC DATA (MAIN TABLE)

var rosctlEntryData = [

    mkROSCTLRow({ id: 1, invoiceNo: "RE/5390/23-24", entFinalAmt: 21882.00, sbNo: "8909077", sbDate: "05-04-2024", fobFac: 575849.20, dbkApld: 14396.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 575849.20, epDate: "12-04-2024" }),
    mkROSCTLRow({ id: 2, invoiceNo: "RE/5738/23-24", entFinalAmt: 29548.00, sbNo: "8909055", sbDate: "05-04-2024", fobFac: 777584.84, dbkApld: 19440.00, tr1d: "09-04-2024", usdRt: 82.60000, inrAmt: 777584.84, epDate: "12-04-2024" }),
    mkROSCTLRow({ id: 3, invoiceNo: "RE/6457/23-24", entFinalAmt: 52168.00, sbNo: "8936416", sbDate: "06-04-2024", fobFac: 1098265.00, dbkApld: 31850.00, tr1d: "05-04-2024", usdRt: 82.60000, inrAmt: 1098265.00, epDate: "08-04-2024" }),
    mkROSCTLRow({ id: 4, invoiceNo: "RE/6456/23-24", entFinalAmt: 18561.00, sbNo: "8936411", sbDate: "06-04-2024", fobFac: 390764.05, dbkApld: 11332.00, tr1d: "05-04-2024", usdRt: 82.60000, inrAmt: 390764.05, epDate: "08-04-2024" }),
    mkROSCTLRow({ id: 5, invoiceNo: "RE/6454/23-24", entFinalAmt: 23533.00, sbNo: "8936412", sbDate: "06-04-2024", fobFac: 782445.47, dbkApld: 19146.00, tr1d: "05-04-2024", usdRt: 82.60000, inrAmt: 782445.47, epDate: "08-04-2024" }),
    mkROSCTLRow({ id: 6, invoiceNo: "RE/6455/23-24", entFinalAmt: 8911.00, sbNo: "8936409", sbDate: "06-04-2024", fobFac: 293649.47, dbkApld: 7333.00, tr1d: "05-04-2024", usdRt: 82.60000, inrAmt: 293649.47, epDate: "08-04-2024" }),
    mkROSCTLRow({ id: 7, invoiceNo: "RE/4527/23-24", entFinalAmt: 10773.00, sbNo: "8947070", sbDate: "06-04-2024", fobFac: 219865.11, dbkApld: 5497.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 219865.11, epDate: "06-04-2024" }),
    mkROSCTLRow({ id: 8, invoiceNo: "RE/4526/23-24", entFinalAmt: 12985.00, sbNo: "8947075", sbDate: "06-04-2024", fobFac: 265007.60, dbkApld: 6625.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 265007.60, epDate: "06-04-2024" }),
    mkROSCTLRow({ id: 9, invoiceNo: "RE/4525/23-24", entFinalAmt: 10394.00, sbNo: "8947077", sbDate: "06-04-2024", fobFac: 212115.30, dbkApld: 5303.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 212115.30, epDate: "06-04-2024" }),
    mkROSCTLRow({ id: 10, invoiceNo: "RE/4524/23-24", entFinalAmt: 16544.00, sbNo: "8947079", sbDate: "06-04-2024", fobFac: 337625.60, dbkApld: 8441.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 337625.60, epDate: "06-04-2024" }),
    mkROSCTLRow({ id: 11, invoiceNo: "RE/4523/23-24", entFinalAmt: 17058.00, sbNo: "8947078", sbDate: "06-04-2024", fobFac: 348128.00, dbkApld: 8703.00, tr1d: "06-04-2024", usdRt: 82.60000, inrAmt: 348128.00, epDate: "06-04-2024" }),
    mkROSCTLRow({ id: 12, invoiceNo: "RE/0279/24-25", entFinalAmt: 9904.00, sbNo: "8967143", sbDate: "08-04-2024", fobFac: 208503.05, dbkApld: 4587.00, tr1d: "08-04-2024", usdRt: 82.60000, inrAmt: 208503.05, epDate: "12-04-2024" })

];


// DUMMY DATA (TAG LICENSE MODAL) - as per ROSCTL Details screen
// Replace with API response later.

var licenseModalData = [

    { id: 101, invoiceNo: "RK/0102/26-27", desc4b: "6943450", amt: 0.00, finlAmt: 1147381.50, inrAmt: 1147381.50, senton: "07-10-2026", filedon: "- -", fileNo: "", rcvdon: "- -", soldon: "- -" },
    { id: 102, invoiceNo: "RE/6578/25-26", desc4b: "1383956", amt: 0.00, finlAmt: 56264.22, inrAmt: 56264.22, senton: "24-04-2026", filedon: "21-04-2026", fileNo: "2604052451", rcvdon: "21-04-2026", soldon: "23-04-2026" },
    { id: 103, invoiceNo: "RE/6418/25-26", desc4b: "1970520", amt: 0.00, finlAmt: 1309027.20, inrAmt: 1309027.20, senton: "09-05-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 104, invoiceNo: "RE/5580/25-26", desc4b: "1355787", amt: 0.00, finlAmt: 842150.00, inrAmt: 842150.00, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 105, invoiceNo: "RE/6691/25-26", desc4b: "1894065", amt: 0.00, finlAmt: 1523640.75, inrAmt: 1523640.75, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 106, invoiceNo: "RE/7104/25-26", desc4b: "2113140", amt: 0.00, finlAmt: 2105430.10, inrAmt: 2105430.10, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 107, invoiceNo: "RE/7103/25-26", desc4b: "2113779", amt: 0.00, finlAmt: 1987320.45, inrAmt: 1987320.45, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 108, invoiceNo: "RE/7102/25-26", desc4b: "2113136", amt: 0.00, finlAmt: 2314265.12, inrAmt: 2314265.12, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 109, invoiceNo: "RE/7101/25-26", desc4b: "2112482", amt: 0.00, finlAmt: 3608560.89, inrAmt: 3608560.89, senton: "24-04-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 110, invoiceNo: "RE/6942/25-26", desc4b: "2167544", amt: 0.00, finlAmt: 1676220.00, inrAmt: 1676220.00, senton: "09-05-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 111, invoiceNo: "RE/6779/25-26", desc4b: "2181823", amt: 0.00, finlAmt: 182614.04, inrAmt: 182614.04, senton: "09-05-2026", filedon: "23-04-2026", fileNo: "2604057007", rcvdon: "23-04-2026", soldon: "25-04-2026" },
    { id: 112, invoiceNo: "RE/6795/25-26", desc4b: "2048118", amt: 0.00, finlAmt: 20941483.32, inrAmt: 20941483.32, senton: "28-04-2026", filedon: "28-04-2026", fileNo: "2604085542", rcvdon: "28-04-2026", soldon: "02-05-2026" }

];


let rosctlEntryTable = null;

// Modal selected ids
const selectedLicenseIds = new Set();

// NUMBER FORMAT

function formatROSCTLNumber(value, decimals) {

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


// BUILD <td> CELLS FROM A COLUMN DEFINITION

function buildCells(item, columns) {

    let html = "";

    $.each(columns, function (index, col) {

        const raw = item[col.key];

        if (col.dec !== null) {

            html += `<td class="text-end">${formatROSCTLNumber(raw, col.dec)}</td>`;

        } else {

            const text = (raw === null || raw === undefined) ? "" : raw;

            html += `<td>${text}</td>`;

        }

    });

    return html;

}

function buildROSCTLCells(item) {
    return buildCells(item, ROSCTL_COLUMNS);
}

function buildLicenseModalCells(item) {
    return buildCells(item, LICENSE_MODAL_COLUMNS);
}


// RENDER MAIN TABLE

function renderROSCTLTable(data) {

    if (rosctlEntryTable) {

        rosctlEntryTable.destroy();

        rosctlEntryTable = null;

    }

    bindROSCTLEntryData(data);

}

// BIND TABLE DATA (MAIN TABLE)

function bindROSCTLEntryData(data) {

    const $tbody = $("#tblbodyROSCTLEntry");

    if (!$tbody.length) {

        console.error("[ROSCTLEntry] #tblbodyROSCTLEntry not found.");

        return;
    }

    $tbody.empty();

    $.each(data, function (index, item) {

        const row = `
            <tr>

                <td class="text-center">
                    <div class="d-flex align-items-center justify-content-center gap-2">

                        <input type="checkbox"
                               class="form-check-input rosctl-row-check rosctl-main-check"
                               data-id="${item.id}"
                               title="Select" />
                    </div>
                </td>

                ${buildROSCTLCells(item)}

            </tr>
        `;

        $tbody.append(row);

    });

}

// DATATABLE (INITIAL)

function initROSCTLEntryDataTable() {

    showLoader("Loading ROSCTL Entry...");

    try {

        renderROSCTLTable(rosctlEntryData);

        hideLoader();

    }
    catch (error) {

        console.error("[ROSCTLEntry] DataTable initialization failed:", error);

        hideLoader();

    }

}

// TAG LICENSE MODAL

function openLicenseModal() {

    selectedLicenseIds.clear();

    bindLicenseModalData();

    updateLicenseSelectedCount();

    const modalEl = document.getElementById("modalAddLicense");

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

    modal.show();

}

function bindLicenseModalData() {

    const $tbody = $("#tblbodyLicenseModal");

    $tbody.empty();

    // Already added (main table) - matched by invoice no
    const addedInvoices = new Set(
        rosctlEntryData.map(function (x) { return x.invoiceNo; })
    );

    $.each(licenseModalData, function (index, item) {

        const alreadyAdded = addedInvoices.has(item.invoiceNo);

        const row = `
            <tr>

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input rosctl-row-check rosctl-license-check"
                           data-id="${item.id}"
                           ${alreadyAdded ? "checked disabled title='Already added'" : ""} />
                </td>

                ${buildLicenseModalCells(item)}

            </tr>
        `;

        $tbody.append(row);

    });

    $("#chkLicenseSelectAll").prop("checked", false);

}

function updateLicenseSelectedCount() {

    $("#lblLicenseSelectedCount").text(selectedLicenseIds.size);

}

function syncLicenseSelectAll() {

    const $enabled = $("#tblbodyLicenseModal .rosctl-license-check:not(:disabled)");

    const allChecked =
        $enabled.length > 0 &&
        $enabled.filter(":checked").length === $enabled.length;

    $("#chkLicenseSelectAll").prop("checked", allChecked);

}

function addSelectedLicenses() {

    if (selectedLicenseIds.size === 0) {

        Swal.fire({
            icon: "warning",
            title: "No License Selected",
            text: "Please select at least one record."
        });

        return;
    }

    // Selected rows (skip duplicates)
    const toAdd = licenseModalData.filter(function (item) {

        return selectedLicenseIds.has(item.id) &&
            !rosctlEntryData.some(function (x) { return x.invoiceNo === item.invoiceNo; });

    });

    $.each(toAdd, function (index, item) {

        rosctlEntryData.push(mapLicenseToROSCTLRow(item));

    });

    // Close modal
    const modalEl = document.getElementById("modalAddLicense");

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

    modal.hide();

    // Reflect in main table
    renderROSCTLTable(rosctlEntryData);

    selectedLicenseIds.clear();

    Swal.fire({
        icon: "success",
        title: "Added",
        text: toAdd.length + " license record(s) added.",
        timer: 1200,
        showConfirmButton: false
    });

}

// REFRESH

function refreshROSCTLEntry() {

    showLoader("Refreshing ROSCTL Entry...");

    try {

        // Clear filters
        $("#txtEntryNo_ROSCTLEntry").val("");

        if (
            $("#txtFromDate_ROSCTLEntry").length &&
            document.querySelector("#txtFromDate_ROSCTLEntry")._flatpickr
        ) {
            document.querySelector("#txtFromDate_ROSCTLEntry")._flatpickr.clear();
        }

        if (
            $("#txtToDate_ROSCTLEntry").length &&
            document.querySelector("#txtToDate_ROSCTLEntry")._flatpickr
        ) {
            document.querySelector("#txtToDate_ROSCTLEntry")._flatpickr.clear();
        }

        // Rebuild table
        renderROSCTLTable(rosctlEntryData);

        // Reset summary
        resetROSCTLSummary();

        setTimeout(function () {

            hideLoader();

            Swal.fire({
                icon: "success",
                title: "Refreshed",
                text: "ROSCTL Entry refreshed successfully.",
                timer: 1000,
                showConfirmButton: false
            });

        }, 500);

    }
    catch (error) {

        console.error("[ROSCTLEntry] Refresh failed:", error);

        hideLoader();

        Swal.fire({
            icon: "error",
            title: "Refresh Failed",
            text: "Unable to refresh ROSCTL Entry."
        });

    }

}

// FILTER

function filterROSCTLEntry() {

    const fms = ($("#txtEntryNo_ROSCTLEntry").val() || "").trim();
    const fromDate = ($("#txtFromDate_ROSCTLEntry").val() || "").trim();
    const toDate = ($("#txtToDate_ROSCTLEntry").val() || "").trim();

    // FMS validation
    if (!fms) {

        Swal.fire({
            icon: "warning",
            title: "FMS Required",
            text: "Please enter FMS."
        });

        $("#txtEntryNo_ROSCTLEntry").focus();

        return;
    }

    // From Date validation
    if (!fromDate) {

        Swal.fire({
            icon: "warning",
            title: "From Date Required",
            text: "Please select From Date."
        });

        $("#txtFromDate_ROSCTLEntry").focus();

        return;
    }

    // To Date validation
    if (!toDate) {

        Swal.fire({
            icon: "warning",
            title: "To Date Required",
            text: "Please select To Date."
        });

        $("#txtToDate_ROSCTLEntry").focus();

        return;
    }

    // Parse dates
    const from = parseROSCTLDate(fromDate);
    const to = parseROSCTLDate(toDate);

    // Invalid date
    if (!from) {

        Swal.fire({
            icon: "warning",
            title: "Invalid From Date",
            text: "Please select a valid From Date."
        });

        $("#txtFromDate_ROSCTLEntry").focus();

        return;
    }

    if (!to) {

        Swal.fire({
            icon: "warning",
            title: "Invalid To Date",
            text: "Please select a valid To Date."
        });

        $("#txtToDate_ROSCTLEntry").focus();

        return;
    }

    // From Date should not be greater than To Date
    if (from.getTime() > to.getTime()) {

        Swal.fire({
            icon: "warning",
            title: "Invalid Date Range",
            text: "From Date cannot be greater than To Date."
        });

        $("#txtFromDate_ROSCTLEntry").focus();

        return;
    }

    showLoader("Filtering ROSCTL Entry...");

    setTimeout(function () {

        let filteredData = rosctlEntryData;

        // FMS / Invoice / SB search
        filteredData = filteredData.filter(function (item) {

            return (
                (item.invoiceNo || "")
                    .toString()
                    .toLowerCase()
                    .includes(fms.toLowerCase())

                ||

                (item.sbNo || "")
                    .toString()
                    .includes(fms)
            );

        });

        // Date filtering
        filteredData = filteredData.filter(function (item) {

            const itemDate = parseROSCTLDate(item.sbDate);

            if (!itemDate) {
                return false;
            }

            return itemDate >= from && itemDate <= to;

        });

        // Re-create table
        renderROSCTLTable(filteredData);

        // Update summary
        updateROSCTLSummary(filteredData);

        hideLoader();

        // No records
        if (filteredData.length === 0) {

            Swal.fire({
                icon: "info",
                title: "No Records Found",
                text: "No ROSCTL records found for the selected filters.",
                confirmButtonText: "OK"
            });

        }

    }, 300);

}

// DATE PARSER

function parseROSCTLDate(dateString) {

    if (!dateString) {
        return null;
    }

    const parts = dateString.split("-");

    if (parts.length !== 3) {
        return null;
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);

    // Invalid date check
    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month ||
        date.getDate() !== day
    ) {
        return null;
    }

    // Time remove
    date.setHours(0, 0, 0, 0);

    return date;
}

// SUMMARY

function updateROSCTLSummary(data) {

    let totalINR = 0;
    let totalCases = data.length;

    $.each(data, function (index, item) {

        totalINR += parseFloat(item.inrAmt) || 0;

    });

    const entitlement = totalINR * 0.043;

    $("#lblTotalCasesY_ROSCTLEntry").text("0");
    $("#lblTotalINRY_ROSCTLEntry").text("0.00");
    $("#lblEntitlementY_ROSCTLEntry").text("0.00");

    $("#lblTotalCasesN_ROSCTLEntry").text(totalCases);
    $("#lblTotalINRN_ROSCTLEntry").text(formatROSCTLNumber(totalINR, 2));
    $("#lblEntitlementN_ROSCTLEntry").text(formatROSCTLNumber(entitlement, 2));

    $("#lblTotalCasesT_ROSCTLEntry").text(totalCases);
    $("#lblTotalINRT_ROSCTLEntry").text(formatROSCTLNumber(totalINR, 2));
    $("#lblEntitlementT_ROSCTLEntry").text(formatROSCTLNumber(entitlement, 2));

}

// RESET SUMMARY

function resetROSCTLSummary() {

    $("#lblTotalCasesY_ROSCTLEntry").text("0");
    $("#lblTotalINRY_ROSCTLEntry").text("0.00");
    $("#lblEntitlementY_ROSCTLEntry").text("0.00");

    $("#lblTotalCasesN_ROSCTLEntry").text("54");
    $("#lblTotalINRN_ROSCTLEntry").text("7,82,16,211.85");
    $("#lblEntitlementN_ROSCTLEntry").text("33,58,074.00");

    $("#lblTotalCasesT_ROSCTLEntry").text("54");
    $("#lblTotalINRT_ROSCTLEntry").text("7,82,16,211.85");
    $("#lblEntitlementT_ROSCTLEntry").text("33,58,074.00");

}

$('#tblbodyROSCTLEntry').on('change', '.rosctl-row-check', function () {
    if ($('tbody .rosctl-row-check:checked').length > 0) {
        $('#btnAddLicense').show(); 
    } else {
        $('#btnAddLicense').hide();
    }
});