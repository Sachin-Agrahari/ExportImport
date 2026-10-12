$(document).ready(function () {

    initDebitNoteEntry();

});

// ============================================================
// Static Data
// ============================================================

var debitNotedata = [
    { id: 1, poNo: "ANTW-WOV-100660496", invoiceNo: "INV-HTW001", description: "OCEAN TO SEA FREIGHT", qty: 3, amount: 663.38 },
    { id: 2, poNo: "ANTW-WOV-100660497", invoiceNo: "HTW774", description: "OCEAN FREIGHT", qty: 5, amount: 725.50 },
    { id: 3, poNo: "ANTW-WOV-100660498", invoiceNo: "HHW974", description: "SEA FREIGHT", qty: 67, amount: 810.25 },
    { id: 4, poNo: "ANTW-WOV-100660499", invoiceNo: "HRT756", description: "TRANSPORTATION CHARGES", qty: 55, amount: 450.00 },
    { id: 5, poNo: "ANTW-WOV-100660500", invoiceNo: "SSH774", description: "PORT HANDLING CHARGES", qty: 59, amount: 325.75 },
    { id: 6, poNo: "ANTW-WOV-100660501", invoiceNo: "INV-CC006", description: "CUSTOM CLEARANCE", qty: 12, amount: 1250.00 },
    { id: 7, poNo: "ANTW-WOV-100660502", invoiceNo: "INV-DOC007", description: "DOCUMENTATION CHARGES", qty: 8, amount: 185.50 },
    { id: 8, poNo: "ANTW-WOV-100660503", invoiceNo: "INV-CH008", description: "CONTAINER HANDLING", qty: 15, amount: 950.00 },
    { id: 9, poNo: "ANTW-WOV-100660504", invoiceNo: "INV-FW009", description: "FORWARDING CHARGES", qty: 10, amount: 575.25 },
    { id: 10, poNo: "ANTW-WOV-100660505", invoiceNo: "INV-SSC010", description: "SHIPPING SERVICE CHARGES", qty: 20, amount: 1025.80 }
];

// Static data for PO No help
const poNoHelpData = [
    { id: 1, invoiceNo: "INV-1001", poNo: "PO-2026-001", delayReason: "Production Delay", description: "Production was delayed due to raw material availability." },
    { id: 2, invoiceNo: "INV-1002", poNo: "PO-2026-002", delayReason: "Shipment Delay", description: "Shipment delayed due to logistics issue." },
    { id: 3, invoiceNo: "INV-1003", poNo: "PO-2026-003", delayReason: "Documentation", description: "Required export documents were pending." },
    { id: 4, invoiceNo: "INV-1004", poNo: "PO-2026-004", delayReason: "Buyer Request", description: "Delivery date changed as per buyer request." }
];

// null = Add mode, otherwise id of the row being edited
let editingDebitNoteId = null;

// ============================================================
// Page Initialization
// ============================================================

function initDebitNoteEntry() {

    // Date Picker (header)
    if ($("#txtDebitNoteDate").length) {
        flatpickr("#txtDebitNoteDate", {
            dateFormat: "d-m-Y",
            allowInput: true,
            defaultDate: "today"
        });
    }

    // Option dropdown -> show / hide table section
    $(document).on("change", "#ddlOption", function () {

        const value = $(this).val();

        showLoader("Loading Debit Note Details...");

        setTimeout(function () {

            if (value === "PoNo" || value === "Invoice No") {
                $("#debitNoteEntrySection").removeClass("d-none");
            } else {
                $("#debitNoteEntrySection").addClass("d-none");
            }

            hideLoader();

        }, 500);
    });

    // ADD button -> open empty modal
    $(document).on("click", "#btnAddGSPInvoice", function () {
        openDebitNoteItemModal(null);
    });

    // EDIT button -> open filled modal
    $(document).on("click", ".btn-edit-debit-note", function () {
        openDebitNoteItemModal($(this).data("id"));
    });

    // SAVE button inside modal (works for both Add and Edit)
    $(document).on("click", "#btnSaveDebitNoteItem", function () {
        saveDebitNoteItem();
    });

    // Header Save button
    $(document).on("click", "#btnSave", function () {
        saveDebitNoteEntry();
    });

    // Header Cancel button
    $(document).on("click", "#btnCancel", function () {
        resetDebitNoteEntry();
    });

    // PO No help button (inside entry modal)
    $(document).on("click", "#btnPoNohelp", function () {

        const modalElement = document.getElementById("poNoHelpModal");

        if (!modalElement) {
            console.error("#poNoHelpModal not found.");
            return;
        }

        bindPoNoHelpTable();

        bootstrap.Modal.getOrCreateInstance(modalElement).show();
    });

    // Select PO No from help table
    $(document).on("change", ".chkSelectPoNo", function () {

        const index = $(this).data("index");
        const item = poNoHelpData[index];

        if (!item) {
            return;
        }

        if ($(this).is(":checked")) {

            $("#txtDebitNotePoNo").val(item.poNo);
            $("#txtDebitNoteInvoiceNo").val(item.invoiceNo);

            const modalElement = document.getElementById("poNoHelpModal");

            if (modalElement) {
                bootstrap.Modal.getOrCreateInstance(modalElement).hide();
            }
        }
    });

    // When PO help modal closes, keep the entry modal scrollable
    $(document).on("hidden.bs.modal", "#poNoHelpModal", function () {
        if ($("#debitNoteItemModal").hasClass("show")) {
            $("body").addClass("modal-open");
        }
    });

    // Initial table load
    bindDebitNoteEntryData();
}

// ============================================================
// Helpers
// ============================================================

function formatDebitNoteAmount(value) {

    if (value === null || value === undefined || value === "") {
        return "";
    }

    const number = parseFloat(value);

    if (isNaN(number)) {
        return value;
    }

    return number.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function escapeDebitNoteHtml(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// ============================================================
// Bind main table
// ============================================================

function bindDebitNoteEntryData() {

    const $tbody = $("#tblbody_DebitNoteEntry");

    if (!$tbody.length) {
        console.error("[DebitNoteEntry] #tblbody_DebitNoteEntry not found.");
        return;
    }

    $tbody.empty();

    $.each(debitNotedata, function (index, item) {

        const row = `
            <tr>
                <td class="text-center">
                    <button type="button"
                            class="edit-btn btn-edit-debit-note"
                            data-id="${item.id}"
                            title="Edit">

                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                        </svg>

                    </button>
                </td>
                <td>${escapeDebitNoteHtml(item.poNo)}</td>
                <td>${escapeDebitNoteHtml(item.invoiceNo)}</td>
                <td title="${escapeDebitNoteHtml(item.description)}">${escapeDebitNoteHtml(item.description)}</td>
                <td class="r num " >${item.qty}</td>
                <td class="text-end">${formatDebitNoteAmount(item.amount)}</td>
            </tr>
        `;

        $tbody.append(row);
    });
}

// ============================================================
// Add / Edit modal
// ============================================================

function openDebitNoteItemModal(id) {

    editingDebitNoteId = (id === null || id === undefined) ? null : id;

    if (editingDebitNoteId === null) {

        // ADD mode -> empty form
        $("#debitNoteItemModalLabel").text("Add Debit Note Entry");

        $("#txtDebitNotePoNo, #txtDebitNoteInvoiceNo, #txtDebitNoteDesc, #txtDebitNoteQty, #txtDebitNoteItemAmount").val("");

    } else {

        // EDIT mode -> fill data
        const item = debitNotedata.find(function (x) {
            return String(x.id) === String(editingDebitNoteId);
        });

        if (!item) {
            showWarning("Record Not Found", "Debit note record not found.");
            editingDebitNoteId = null;
            return;
        }

        $("#debitNoteItemModalLabel").text("Edit Debit Note Entry");

        $("#txtDebitNotePoNo").val(item.poNo ?? "");
        $("#txtDebitNoteInvoiceNo").val(item.invoiceNo ?? "");
        $("#txtDebitNoteDesc").val(item.description ?? "");
        $("#txtDebitNoteQty").val(item.qty ?? "");
        $("#txtDebitNoteItemAmount").val(item.amount ?? "");
    }

    const modalElement = document.getElementById("debitNoteItemModal");

    if (!modalElement) {
        console.error("#debitNoteItemModal not found.");
        return;
    }

    bootstrap.Modal.getOrCreateInstance(modalElement).show();
}

function saveDebitNoteItem() {

    const poNo = $("#txtDebitNotePoNo").val().trim();
    const invoiceNo = $("#txtDebitNoteInvoiceNo").val().trim();
    const description = $("#txtDebitNoteDesc").val().trim();
    const qty = parseInt($("#txtDebitNoteQty").val(), 10);
    const amount = parseFloat(($("#txtDebitNoteItemAmount").val() || "").toString().replace(/,/g, ""));

    // Validation
    if (!poNo) {
        showWarning("PO No Required", "Please enter PO No.");
        $("#txtDebitNotePoNo").focus();
        return;
    }

    if (!invoiceNo) {
        showWarning("Invoice No Required", "Please enter Invoice No.");
        $("#txtDebitNoteInvoiceNo").focus();
        return;
    }

    if (isNaN(amount)) {
        showWarning("Amount Required", "Please enter a valid Amount.");
        $("#txtDebitNoteItemAmount").focus();
        return;
    }

    const safeQty = isNaN(qty) ? 0 : qty;
    const isAdd = (editingDebitNoteId === null);

    if (isAdd) {

        // ADD
        const newId = debitNotedata.length
            ? Math.max.apply(null, debitNotedata.map(function (x) { return x.id; })) + 1
            : 1;

        debitNotedata.push({
            id: newId,
            poNo: poNo,
            invoiceNo: invoiceNo,
            description: description,
            qty: safeQty,
            amount: amount
        });

    } else {

        // EDIT
        const item = debitNotedata.find(function (x) {
            return String(x.id) === String(editingDebitNoteId);
        });

        if (item) {
            item.poNo = poNo;
            item.invoiceNo = invoiceNo;
            item.description = description;
            item.qty = safeQty;
            item.amount = amount;
        }
    }

    // Refresh table + close modal
    bindDebitNoteEntryData();

    bootstrap.Modal
        .getOrCreateInstance(document.getElementById("debitNoteItemModal"))
        .hide();

    editingDebitNoteId = null;

    showSuccess(
        isAdd ? "Added Successfully" : "Updated Successfully",
        isAdd ? "Entry added to table." : "Entry updated."
    );
}

// ============================================================
// PO No help table
// ============================================================

function bindPoNoHelpTable() {

    const $tbody = $("#tblbodyPoNoHelp");

    if (!$tbody.length) {
        console.error("#tblbodyPoNoHelp not found.");
        return;
    }

    $tbody.empty();

    $.each(poNoHelpData, function (index, item) {

        $tbody.append(`
            <tr>
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkSelectPoNo"
                           data-index="${index}">
                </td>
                <td>${escapeDebitNoteHtml(item.invoiceNo)}</td>
                <td>${escapeDebitNoteHtml(item.poNo)}</td>
                <td>${escapeDebitNoteHtml(item.delayReason)}</td>
                <td>${escapeDebitNoteHtml(item.description)}</td>
            </tr>
        `);
    });
}

// ============================================================
// Header Save / Cancel
// ============================================================

function saveDebitNoteEntry() {

    const debitNote = $("#txtDebitNote").val().trim();
    const debitNoteDate = $("#txtDebitNoteDate").val().trim();
    const option = $("#ddlOption").val();
    const amount = $("#txtDebitNoteAmount").val().trim();

    if (!debitNote) {
        showWarning("Debit Note Required", "Please enter Debit Note.");
        $("#txtDebitNote").focus();
        return;
    }

    if (!debitNoteDate) {
        showWarning("Date Required", "Please select Debit Note Date.");
        $("#txtDebitNoteDate").focus();
        return;
    }

    showConfirm(
        "Are you sure?",
        "Do you want to save this Debit Note Entry?"
    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Saving Debit Note Entry...");

        try {

            const payload = {
                debitNote: debitNote,
                debitNoteDate: debitNoteDate,
                option: option,
                amount: amount,
                items: debitNotedata
            };


            console.log("[DebitNoteEntry] Saved:", payload);

            setTimeout(function () {
                hideLoader();
                showSuccess("Saved Successfully", "Debit Note Entry saved successfully.");
            }, 500);

        } catch (error) {

            console.error("[DebitNoteEntry] Save failed:", error);
            hideLoader();
            showError("Save Failed", "Unable to save Debit Note Entry.");
        }
    });
}

function resetDebitNoteEntry() {

    $("#txtDebitNote").val("");
    $("#txtDebitNoteAmount").val("");
    $("#ddlOption").val("");
    $("#debitNoteEntrySection").addClass("d-none");

    const dateEl = document.querySelector("#txtDebitNoteDate");
    if (dateEl && dateEl._flatpickr) {
        dateEl._flatpickr.setDate(new Date());
    }
}