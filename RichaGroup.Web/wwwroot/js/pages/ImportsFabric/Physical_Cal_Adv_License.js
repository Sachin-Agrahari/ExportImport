/* =========================================================
   PHYSICAL CALCULATION ADV LICENSE
   ========================================================= */

/* STATIC DATA */
let physicalCalculationAdvLicenseData = [
    { srNo: 1, style: "CD580/21682", gmtDesc: "GIRLS", fabQtyMts: "520", fabQtySqm: "713.23", extraPercent: "21", qtyWithExtra: "734.63", gmtQty: "300", finalGmtQty: "300", avgSqm: "2.45", finalAvgSqm: "2.60", finalFabQtySqm: "780", expRate: "29.63", exportFob: "8889", importCif: "3500" },
    { srNo: 2, style: "CD581/21683", gmtDesc: "SKIRT", fabQtyMts: "410", fabQtySqm: "562.40", extraPercent: "20", qtyWithExtra: "674.88", gmtQty: "250", finalGmtQty: "250", avgSqm: "2.25", finalAvgSqm: "2.50", finalFabQtySqm: "625", expRate: "27.50", exportFob: "6875", importCif: "2800" },
    { srNo: 3, style: "CD582/21684", gmtDesc: "LADIES TOP", fabQtyMts: "365", fabQtySqm: "498.75", extraPercent: "18", qtyWithExtra: "588.52", gmtQty: "220", finalGmtQty: "220", avgSqm: "2.20", finalAvgSqm: "2.40", finalFabQtySqm: "528", expRate: "25.80", exportFob: "5676", importCif: "2400" },
    { srNo: 4, style: "CD583/21685", gmtDesc: "GIRLS SKIRT", fabQtyMts: "450", fabQtySqm: "615.00", extraPercent: "19", qtyWithExtra: "731.85", gmtQty: "280", finalGmtQty: "280", avgSqm: "2.35", finalAvgSqm: "2.55", finalFabQtySqm: "714", expRate: "28.20", exportFob: "7896", importCif: "3100" },
    { srNo: 5, style: "CD584/21686", gmtDesc: "LADIES SKIRT", fabQtyMts: "500", fabQtySqm: "685.00", extraPercent: "20", qtyWithExtra: "822.00", gmtQty: "320", finalGmtQty: "320", avgSqm: "2.40", finalAvgSqm: "2.65", finalFabQtySqm: "848", expRate: "30.10", exportFob: "9632", importCif: "3600" }
];

let calculationData = [
    { styleNumber: "140S0611", process: "Bleached", segment: "Woven", gmtDesc: "LADIES DRESS", fabQtyMtr: "520.00", fabQtySqm: "713.23", extraPer: "3.00", extraQty: "21.00", qtyExtra: "734.63", gmtQty: "300", finalGmtQty: "300", norms: "J-288" },
    { styleNumber: "140S0611", process: "Bleached", segment: "Woven", gmtDesc: "LADIES DRESS", fabQtyMtr: "520.00", fabQtySqm: "713.23", extraPer: "3.00", extraQty: "21.00", qtyExtra: "734.63", gmtQty: "300", finalGmtQty: "300", norms: "J-288" }
];

const defaultPhysicalCalculationAdvLicenseData =
    physicalCalculationAdvLicenseData.map(function (item) { return { ...item }; });

/* index of row being edited (-1 = add mode) */
let selectedPhysicalCalculationAdvLicenseIndex = -1;

$(document).ready(function () {

    initPhysicalCalculationAdvLicense();
    bindCalculationTable();

    /* TAB SWITCH */
    $(document).on("click", ".screen-switch button", function () {

        const target = $(this).data("target");

        $(".screen-switch button").removeClass("on");
        $(this).addClass("on");

        $("#physicalCalculationSection").addClass("d-none");
        $("#licenseEntrySection").addClass("d-none");
        $("#licenseDetailsSection").addClass("d-none");
        $(target).removeClass("d-none");
    });

});

/* INITIALIZATION */
function initPhysicalCalculationAdvLicense() {
    bindPhysicalCalculationAdvLicenseTable();
    bindPhysicalCalculationAdvLicenseEvents();
}

/* EVENTS */
function bindPhysicalCalculationAdvLicenseEvents() {

    /* ADD ROW */
    $("#btnAddItem_PhysicalCalculationAdvLicense")
        .off("click")
        .on("click", function () {
            openPhysicalCalculationModal(-1);
        });

    /* REFRESH */
    $("#btnRefresh_PhysicalCalculationAdvLicense")
        .off("click")
        .on("click", function () {
            refreshPhysicalCalculationAdvLicense();
        });

    /* MAIN SAVE */
    $("#btnSave_PhysicalCalculationAdvLicense")
        .off("click")
        .on("click", function () {
            savePhysicalCalculationAdvLicense();
        });

    /* EDIT ROW */
    $(document)
        .off("click", ".btnEditPhysicalCalculationAdvLicense")
        .on("click", ".btnEditPhysicalCalculationAdvLicense", function () {
            openPhysicalCalculationModal(Number($(this).data("index")));
        });

    /* DELETE ROW */
    $(document)
        .off("click", ".btnDeletePhysicalCalculationAdvLicense")
        .on("click", ".btnDeletePhysicalCalculationAdvLicense", function () {
            deletePhysicalCalculationAdvLicenseRow(Number($(this).data("index")));
        });

    /* MODAL SAVE */
    $("#btnSavePhysicalCalc")
        .off("click")
        .on("click", function () {
            savePhysicalCalculationFromModal();
        });

    /* MODAL AUTO CALCULATION */
    $("#modalPhysicalCalc")
        .off("input.pcCalc", ".pc-calc, .pc-calc2")
        .on("input.pcCalc", ".pc-calc, .pc-calc2", function () {

            /* user manually changed Final GMT Qty -> stop auto-sync */
            if (this.id === "pc_finalGmtQty") {
                $(this).data("touched", true);
            }

            recalcPhysicalModal();
        });
}

/* =========================================================
   MODAL HELPERS
   ========================================================= */

function pcNum(v) {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
}

function pcFmt(n, d) {
    return (isFinite(n) ? n : 0).toFixed(d);
}

/*
 * Formulas
 *  Qty With Extra % = Fab Qty SQM * (1 + Extra% / 100)
 *  Avg. SQM         = Qty With Extra % / GMT Qty
 *  Final Fab SQM    = Final GMT Qty * Final Avg. SQM
 *  Export FOB       = Final GMT Qty * Exp Rate
 */
function recalcPhysicalModal() {

    const fabSqm = pcNum($("#pc_fabSqm").val());
    const extraPct = pcNum($("#pc_extraPct").val());
    const gmtQty = pcNum($("#pc_gmtQty").val());

    const qtyExtra = fabSqm * (1 + extraPct / 100);
    const avgSqm = gmtQty > 0 ? qtyExtra / gmtQty : 0;

    $("#pc_qtyExtra").val(pcFmt(qtyExtra, 2));
    $("#pc_avgSqm").val(pcFmt(avgSqm, 2));

    if (!$("#pc_finalGmtQty").data("touched")) {
        $("#pc_finalGmtQty").val($("#pc_gmtQty").val());
    }

    const finalGmtQty = pcNum($("#pc_finalGmtQty").val());
    const finalAvgSqm = pcNum($("#pc_finalAvgSqm").val());
    const expRate = pcNum($("#pc_expRate").val());

    $("#pc_finalFabSqm").val(pcFmt(finalGmtQty * finalAvgSqm, 2));
    $("#pc_exportFob").val(pcFmt(finalGmtQty * expRate, 2));
}
function ensurePcStyleOption(value) {

    if (!value) return;

    const exists = $("#pc_style option").filter(function () {
        return this.value === value;
    }).length;

    if (!exists) {
        $("#pc_style").append($("<option>").val(value).text(value));
    }
}

function setPcValue(id, value) {
    $("#" + id).val(value == null ? "" : value);
}

function openPhysicalCalculationModal(index) {

    selectedPhysicalCalculationAdvLicenseIndex = index;

    const isEdit = index >= 0 && !!physicalCalculationAdvLicenseData[index];
    const item = isEdit ? physicalCalculationAdvLicenseData[index] : {};

    $("#pcModalTitle").text(isEdit ? "Edit Physical Calculation" : "Add Physical Calculation");
    $("#pcSaveText").text(isEdit ? "Update" : "Save");
    $("#pc_editIndex").val(isEdit ? index : -1);

    if (isEdit) {
        ensurePcStyleOption(item.style);
    }

    setPcValue("pc_style", item.style);
    setPcValue("pc_gmtDesc", item.gmtDesc);
    setPcValue("pc_fabMts", item.fabQtyMts);
    setPcValue("pc_fabSqm", item.fabQtySqm);
    setPcValue("pc_extraPct", item.extraPercent);
    setPcValue("pc_qtyExtra", item.qtyWithExtra);
    setPcValue("pc_gmtQty", item.gmtQty);
    setPcValue("pc_finalGmtQty", item.finalGmtQty);
    setPcValue("pc_avgSqm", item.avgSqm);
    setPcValue("pc_finalAvgSqm", item.finalAvgSqm);
    setPcValue("pc_finalFabSqm", item.finalFabQtySqm);
    setPcValue("pc_expRate", item.expRate);
    setPcValue("pc_exportFob", item.exportFob);
    setPcValue("pc_importCif", item.importCif);

    $("#pc_finalGmtQty").data("touched", isEdit);

    if (!isEdit) {
        recalcPhysicalModal();
    }

    bootstrap.Modal.getOrCreateInstance(
        document.getElementById("modalPhysicalCalc")
    ).show();
}

function closePhysicalCalculationModal() {

    const el = document.getElementById("modalPhysicalCalc");
    const modal = bootstrap.Modal.getInstance(el);

    if (modal) modal.hide();
}

/* SAVE (ADD / UPDATE) FROM MODAL */
function savePhysicalCalculationFromModal() {

    recalcPhysicalModal();

    const item = {
        style: ($("#pc_style").val() || "").trim(),
        gmtDesc: ($("#pc_gmtDesc").val() || "").trim(),
        fabQtyMts: ($("#pc_fabMts").val() || "").trim(),
        fabQtySqm: ($("#pc_fabSqm").val() || "").trim(),
        extraPercent: ($("#pc_extraPct").val() || "").trim(),
        qtyWithExtra: ($("#pc_qtyExtra").val() || "").trim(),
        gmtQty: ($("#pc_gmtQty").val() || "").trim(),
        finalGmtQty: ($("#pc_finalGmtQty").val() || "").trim(),
        avgSqm: ($("#pc_avgSqm").val() || "").trim(),
        finalAvgSqm: ($("#pc_finalAvgSqm").val() || "").trim(),
        finalFabQtySqm: ($("#pc_finalFabSqm").val() || "").trim(),
        expRate: ($("#pc_expRate").val() || "").trim(),
        exportFob: ($("#pc_exportFob").val() || "").trim(),
        importCif: ($("#pc_importCif").val() || "").trim()
    };

    /* VALIDATION */
    if (!item.style) {
        warningAlert("Style Required", "Please select Style.");
        return;
    }

    if (!item.gmtDesc) {
        warningAlert("GMT Description Required", "Please enter GMT Description.");
        return;
    }

    const index = selectedPhysicalCalculationAdvLicenseIndex;

    /* UPDATE */
    if (index >= 0 && physicalCalculationAdvLicenseData[index]) {

        item.srNo = physicalCalculationAdvLicenseData[index].srNo;
        physicalCalculationAdvLicenseData[index] = item;

        bindPhysicalCalculationAdvLicenseTable();
        closePhysicalCalculationModal();

        successAlert("Updated Successfully", "Physical calculation updated successfully.");
        return;
    }

    /* ADD */
    item.srNo = physicalCalculationAdvLicenseData.length + 1;
    physicalCalculationAdvLicenseData.push(item);

    bindPhysicalCalculationAdvLicenseTable();
    closePhysicalCalculationModal();

    successAlert("Added Successfully", "Physical calculation added successfully.");
}

/* =========================================================
   TABLE
   ========================================================= */

function bindPhysicalCalculationAdvLicenseTable() {

    const $table = $("#tblPhysicalCalculationAdvLicense");
    const $tbody = $("#tblbodyPhysicalCalculationAdvLicense");

    if ($.fn.DataTable.isDataTable($table)) {
        $table.DataTable().destroy();
    }

    $tbody.empty();

    physicalCalculationAdvLicenseData.forEach(function (item, index) {
        $tbody.append(createPhysicalCalculationAdvLicenseRow(item, index));
    });

    $table.DataTable({
        scrollX: true,
        scrollY: "300px",
        scrollCollapse: true,
        paging: true,
        searching: true,
        ordering: false,
        pageLength: 5,
        lengthChange: false,
        autoWidth: false,
        language: { emptyTable: "No data available" }
    });
}

function createPhysicalCalculationAdvLicenseRow(item, index) {

    const e = escapePhysicalCalculationValue;

    return `
        <tr>
            <td class="text-center">
                <div class="d-flex justify-content-center align-items-center gap-1">

                    <!-- EDIT -->
                    <button type="button"
                            class="edit-btn btnEditPhysicalCalculationAdvLicense"
                            data-index="${index}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <!-- DELETE -->
                    <button type="button"
                            class="row-btn bg-danger text-white delete-btn btnDeletePhysicalCalculationAdvLicense"
                            data-index="${index}"
                            title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4h8v2"></path>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v5"></path>
                            <path d="M14 11v5"></path>
                        </svg>
                    </button>

                </div>
            </td>
            <td class="text-center">${e(item.srNo)}</td>
            <td>${e(item.style)}</td>
            <td>${e(item.gmtDesc)}</td>
            <td class="text-end">${e(item.fabQtyMts)}</td>
            <td class="text-end">${e(item.fabQtySqm)}</td>
            <td class="text-end">${e(item.extraPercent)}</td>
            <td class="text-end">${e(item.qtyWithExtra)}</td>
            <td class="text-end">${e(item.gmtQty)}</td>
            <td class="text-end">${e(item.finalGmtQty)}</td>
            <td class="text-end">${e(item.avgSqm)}</td>
            <td class="text-end">${e(item.finalAvgSqm)}</td>
            <td class="text-end">${e(item.finalFabQtySqm)}</td>
            <td class="text-end">${e(item.expRate)}</td>
            <td class="text-end">${e(item.exportFob)}</td>
            <td class="text-end">${e(item.importCif)}</td>
        </tr>
    `;
}

/* DELETE ROW */
function deletePhysicalCalculationAdvLicenseRow(index) {

    confirmAlert(
        "Delete Row?",
        "Are you sure you want to delete this row?",
        "Yes, Delete",
        "warning"
    ).then(function (result) {

        if (!result.isConfirmed) return;

        physicalCalculationAdvLicenseData.splice(index, 1);

        /* Re-number Sr No */
        physicalCalculationAdvLicenseData.forEach(function (item, i) {
            item.srNo = i + 1;
        });

        bindPhysicalCalculationAdvLicenseTable();

        successAlert("Deleted", "Row deleted successfully.");
    });
}

/* REFRESH */
function refreshPhysicalCalculationAdvLicense() {

    confirmAlert(
        "Refresh?",
        "All unsaved changes will be removed.",
        "Yes, Refresh",
        "question"
    ).then(function (result) {

        if (!result.isConfirmed) return;

        if (typeof showLoader === "function") {
            showLoader("Refreshing Physical Calculation...");
        }

        clearPhysicalCalculationAdvLicenseForm();

        /* restore original static data */
        physicalCalculationAdvLicenseData =
            defaultPhysicalCalculationAdvLicenseData.map(function (item) {
                return { ...item };
            });

        bindPhysicalCalculationAdvLicenseTable();

        setTimeout(function () {

            if (typeof hideLoader === "function") {
                hideLoader();
            }

            successAlert("Refreshed", "Form refreshed successfully.");

        }, 500);
    });
}

const physicalCalculationHeaderFields = [
    "#txtUnit_PhysicalCalculationAdvLicense",
    "#txtBuyer_PhysicalCalculationAdvLicense",
    "#txtMerchant_PhysicalCalculationAdvLicense",
    "#txtGarment_PhysicalCalculationAdvLicense",
    "#txtnorms1_PhysicalCalculationAdvLicense",
    "#txtnorms2_PhysicalCalculationAdvLicense",
    "#txtFabricDesc_PhysicalCalculationDavLicense",
    "#txtGSM_PhysicalCalculationDavLicense",
    "#txtWidth_PhysicalCalculationDavLicense",
    "#txtImpItchs_PhysicalCalculationDavLicense",
    "#txtMode_PhysicalCalculationDavLicense",
    "#txtPort_PhysicalCalculationDavLicense",
    "#txtExportItchsCode_PhysicalCalculationDavLicense",
    "#txtImpNo_PhysicalCalculationAdvLicense",
    "#txtExpNo_PhysicalCalculationAdvLicense"
];

/* CLEAR FORM */
function clearPhysicalCalculationAdvLicenseForm() {
    physicalCalculationHeaderFields.forEach(function (selector) {
        $(selector).val("");
    });
}

/* MAIN SAVE */
function savePhysicalCalculationAdvLicense() {

    confirmAlert(
        "Save?",
        "Do you want to save Physical Calculation details?",
        "Yes, Save",
        "question"
    ).then(function (result) {

        if (!result.isConfirmed) return;

        const data = {
            unit: $("#txtUnit_PhysicalCalculationAdvLicense").val(),
            buyer: $("#txtBuyer_PhysicalCalculationAdvLicense").val(),
            merchant: $("#txtMerchant_PhysicalCalculationAdvLicense").val(),
            garments: $("#txtGarment_PhysicalCalculationAdvLicense").val(),
            norms1: $("#txtnorms1_PhysicalCalculationAdvLicense").val(),
            norms2: $("#txtnorms2_PhysicalCalculationAdvLicense").val(),
            fabricDescription: $("#txtFabricDesc_PhysicalCalculationDavLicense").val(),
            gsm: $("#txtGSM_PhysicalCalculationDavLicense").val(),
            width: $("#txtWidth_PhysicalCalculationDavLicense").val(),
            impItchs: $("#txtImpItchs_PhysicalCalculationDavLicense").val(),
            mode: $("#txtMode_PhysicalCalculationDavLicense").val(),
            port: $("#txtPort_PhysicalCalculationDavLicense").val(),
            exportItchsCode: $("#txtExportItchsCode_PhysicalCalculationDavLicense").val(),
            impNo: $("#txtImpNo_PhysicalCalculationAdvLicense").val(),
            expNo: $("#txtExpNo_PhysicalCalculationAdvLicense").val(),

            tableData: physicalCalculationAdvLicenseData.map(function (item) {
                return { ...item };
            })
        };

        console.log("[PhysicalCalculationAdvLicense] Save Data:", data);

        successAlert("Saved", "Physical Calculation details saved successfully.");
    });
}

/* =========================================================
   COMMON ALERTS
   ========================================================= */

function confirmAlert(title, text, confirmText, icon = "question") {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: "Cancel"
    });
}

function successAlert(title, text) {
    return Swal.fire({
        icon: "success",
        title: title,
        text: text,
        timer: 1000,
        showConfirmButton: false
    });
}

function warningAlert(title, text) {
    return Swal.fire({
        icon: "warning",
        title: title,
        text: text
    });
}

function escapePhysicalCalculationValue(value) {
    return $("<div>").text(value == null ? "" : value).html();
}


$(document).on("click", "#btnStyleCalculationDetails", function () {
    $("#styleCalculationDetailsSection").toggleClass("d-none");
});

function bindCalculationTable() {

    const $tbody = $("#tblbodyCalculation_AdvLicApplication");

    if (!$tbody.length) {
        console.error("#tblbodyCalculation_AdvLicApplication not found.");
        return;
    }

    $tbody.empty();

    $.each(calculationData, function (index, item) {

        $tbody.append(`
            <tr>
                <td class="text-center">${getCalculationButton(index)}</td>
                <td>${escapeAdvLic(item.styleNumber)}</td>
                <td>${escapeAdvLic(item.process)}</td>
                <td>${escapeAdvLic(item.segment)}</td>
                <td>${escapeAdvLic(item.gmtDesc)}</td>
                <td>${escapeAdvLic(item.fabQtyMtr)}</td>
                <td>${escapeAdvLic(item.fabQtySqm)}</td>
                <td>${escapeAdvLic(item.extraPer)}</td>
                <td>${escapeAdvLic(item.extraQty)}</td>
                <td>${escapeAdvLic(item.qtyExtra)}</td>
                <td>${escapeAdvLic(item.gmtQty)}</td>
                <td>${escapeAdvLic(item.finalGmtQty)}</td>
                <td>${escapeAdvLic(item.norms)}</td>
            </tr>
        `);
    });
}

function getCalculationButton(index) {

    return `
        <div class="d-flex justify-content-center">
            <button type="button"
                    class="edit-btn btnCalculationWorkingAdvLicApplication"
                    data-index="${index}"
                    title="Calculation Working">

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <line x1="8" y1="8" x2="16" y2="8"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                    <line x1="8" y1="16" x2="13" y2="16"></line>
                </svg>

            </button>
        </div>
    `;
}

function escapeAdvLic(value) {
    return $("<div>").text(value == null ? "" : value).html();
}