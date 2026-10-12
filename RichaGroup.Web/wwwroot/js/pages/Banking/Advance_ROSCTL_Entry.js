 
$(document).ready(function () {

    initAdvanceROSCTLEntry();

});


// Page Initialization
function initAdvanceROSCTLEntry() {

    // SB Date - Single
    if ($("#txtSBDate_Single").length) {

        flatpickr("#txtSBDate_Single", {
            dateFormat: "d-m-Y",
            allowInput: true,
              defaultDate:"today"
        });

    }

    // Licence Date - Single
    if ($("#txtLicenceDate_Single").length) {

        flatpickr("#txtLicenceDate_Single", {
            dateFormat: "d-m-Y",
            allowInput: true,
             defaultDate:"today"
        });

    }
    //open help modal
    $("#btnHelpEntryNo").on("click", function () {
        // window.location.href = "/Banking/EPCGLicense";
        $('#addMenuModalEntryHelp').modal('show')
    });


    bindROSCTLEntryHelpTable();

    // SB Date - Bulk
    if ($("#txtSBDate_Bulk").length) {

        flatpickr("#txtSBDate_Bulk", {
            dateFormat: "d-m-Y",
            allowInput: true,
             defaultDate:"today"
        });

    }

    // Licence Date - Bulk
    if ($("#txtLicenceDate_Bulk").length) {

        flatpickr("#txtLicenceDate_Bulk", {
            dateFormat: "d-m-Y",
            allowInput: true,
             defaultDate:"today"
        });

    }


    // File Selection (Bulk)
    $("#fileXLS_Bulk").on("change", function () {

        handleXLSFiles(this.files);

    });


    // Import Bulk Files
    $("#btnUpload_Bulk").on("click", function () {

        importXLSFiles();

    });


    // Refresh (header button, tab-aware)
    $("#btnRefresh_AdvanceROSCTLEntry").on("click", function () {

        if (getActiveTab() === "tabBulkEntry-tab") {

            refreshBulkEntry();

        } else {

            refreshSingleEntry();

        }

    });


    // Save (header button, tab-aware)
    $("#btnSave_AdvanceROSCTLEntry").on("click", function () {

        if (getActiveTab() === "tabBulkEntry-tab") {

            saveBulkEntry();

        } else {

            saveSingleEntry();

        }

    });

}


// Get currently active tab id
function getActiveTab() {

    return $("#advROSCTLTabs .nav-link.active").attr("id");

}


/* =========================================================
   SINGLE ENTRY
   ========================================================= */

function refreshSingleEntry() {

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to refresh the Single Entry form?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Refresh",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Refreshing Single Entry...");

        try {

            $("#txtEntryNo_Single").val("");
            $("#txtSBNo_Single").val("");
            $("#txtReceivedAmt_Single").val("");
            $("#txtLicenceNo_Single").val("");
            $("#txtPort_Single").val("");

            const sbDate = document.querySelector("#txtSBDate_Single");
            if (sbDate && sbDate._flatpickr) {
                sbDate._flatpickr.clear();
            }

            const licenceDate = document.querySelector("#txtLicenceDate_Single");
            if (licenceDate && licenceDate._flatpickr) {
                licenceDate._flatpickr.clear();
            }

            setTimeout(function () {

                hideLoader();

                Swal.fire({
                    icon: "success",
                    title: "Refreshed",
                    text: "Single Entry refreshed successfully.",
                    timer: 1000,
                    showConfirmButton: false
                });

            }, 500);

        }
        catch (error) {

            console.error("[AdvanceROSCTLEntry] Single Refresh failed:", error);

            hideLoader();

            Swal.fire({
                icon: "error",
                title: "Refresh Failed",
                text: "Unable to refresh Single Entry."
            });

        }

    });

}


function saveSingleEntry() {

    const data = getSingleEntryData();

    if (!data.entryNo) {

        Swal.fire({
            icon: "warning",
            title: "Entry No Required",
            text: "Please enter Entry No."
        });

        $("#txtEntryNo_Single").focus();

        return;
    }

    if (!data.sbNo) {

        Swal.fire({
            icon: "warning",
            title: "SB No Required",
            text: "Please enter SB No."
        });

        $("#txtSBNo_Single").focus();

        return;
    }

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to save this entry?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Save",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Saving Entry...");

        setTimeout(function () {

            hideLoader();

            console.log("[AdvanceROSCTLEntry] Saved Single Entry Data:", data);

            Swal.fire({
                icon: "success",
                title: "Saved Successfully",
                text: "Entry saved successfully.",
                timer: 1200,
                showConfirmButton: false
            });

        }, 500);

    });

}


function getSingleEntryData() {

    return {

        entryNo: ($("#txtEntryNo_Single").val() || "").trim(),
        sbNo: ($("#txtSBNo_Single").val() || "").trim(),
        sbDate: ($("#txtSBDate_Single").val() || "").trim(),
        receivedAmount: ($("#txtReceivedAmt_Single").val() || "").trim(),
        licenceNo: ($("#txtLicenceNo_Single").val() || "").trim(),
        licenceDate: ($("#txtLicenceDate_Single").val() || "").trim(),
        port: ($("#txtPort_Single").val() || "").trim()

    };

}


/* =========================================================
   BULK ENTRY
   ========================================================= */

let selectedXLSFiles = [];


function handleXLSFiles(files) {

    selectedXLSFiles = Array.from(files);

    renderXLSFiles();

}


function renderXLSFiles() {

    const $tbody = $("#tblXLSFilesBody");

    $tbody.empty();

    $("#lblFileCount_Bulk").text(
        selectedXLSFiles.length +
        (selectedXLSFiles.length === 1 ? " File" : " Files")
    );

    if (!selectedXLSFiles.length) {

        $tbody.html(`
            <tr>
                <td colspan="5" class="text-center text-muted">
                    No files selected
                </td>
            </tr>
        `);

        return;
    }

    $.each(selectedXLSFiles, function (index, file) {

        const sizeKB = (file.size / 1024).toFixed(2);

        $tbody.append(`
            <tr>
                <td>${index + 1}</td>
                <td>
                    <span class="xls-file-name" title="${file.name}">
                        ${file.name}
                    </span>
                </td>
                <td>${sizeKB} KB</td>
                <td><span class="xls-status">Ready</span></td>
                <td>
                    <button type="button" class="xls-remove-btn" data-index="${index}">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"> 
                            <path d="M3 6h18"/> 
                            <path d="M8 6V4 a2 2 0 0 1 2-2h4 a2 2 0 0 1 2 2v2"/> 
                            <path d="M19 6v14 a2 2 0 0 1-2 2H7 a2 2 0 0 1-2-2V6"/> 
                            <line x1="10" y1="11" x2="10" y2="17"/> 
                            <line x1="14" y1="11" x2="14" y2="17"/> 
                         </svg>
                    </button>
                </td>
            </tr>
        `);

    });

}


$(document).on("click", ".xls-remove-btn", function () {

    const index = parseInt($(this).data("index"));

    selectedXLSFiles.splice(index, 1);

    renderXLSFiles();

    if (!selectedXLSFiles.length) {

        $("#fileXLS_Bulk").val("");

    }

});


function importXLSFiles() {

    if (!selectedXLSFiles.length) {

        Swal.fire({
            icon: "warning",
            title: "No File Selected",
            text: "Please select at least one Excel file."
        });

        return;
    }

    Swal.fire({
        title: "Import Excel Files?",
        text: "Do you want to import " + selectedXLSFiles.length + " selected file(s)?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Import",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Importing Excel Files...");

        console.log("[AdvanceROSCTLEntry] Bulk Files:", selectedXLSFiles);

        setTimeout(function () {

            hideLoader();

            Swal.fire({
                icon: "success",
                title: "Import Completed",
                text: selectedXLSFiles.length + " file(s) imported successfully.",
                timer: 1200,
                showConfirmButton: false
            });

        }, 700);

    });

}


function refreshBulkEntry() {

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to refresh the Bulk Entry form?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Refresh",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Refreshing Bulk Entry...");

        $("#txtEntryNo_Bulk").val("");
        $("#txtSBNo_Bulk").val("");
        $("#txtRcvdAmount_Bulk").val("");
        $("#txtLicenceNo_Bulk").val("");
        $("#txtPort_Bulk").val("");

        const sbDate = document.querySelector("#txtSBDate_Bulk");
        if (sbDate && sbDate._flatpickr) {
            sbDate._flatpickr.clear();
        }

        const licenceDate = document.querySelector("#txtLicenceDate_Bulk");
        if (licenceDate && licenceDate._flatpickr) {
            licenceDate._flatpickr.clear();
        }

        $("#fileXLS_Bulk").val("");

        selectedXLSFiles = [];

        renderXLSFiles();

        setTimeout(function () {

            hideLoader();

            Swal.fire({
                icon: "success",
                title: "Refreshed",
                timer: 1000,
                showConfirmButton: false
            });

        }, 500);

    });

}


function saveBulkEntry() {

    const entryNo = ($("#txtEntryNo_Bulk").val() || "").trim();

    if (!entryNo) {

        Swal.fire({
            icon: "warning",
            title: "Entry Number Required",
            text: "Please enter Entry Number."
        });

        $("#txtEntryNo_Bulk").focus();

        return;
    }

    if (!selectedXLSFiles.length) {

        Swal.fire({
            icon: "warning",
            title: "Excel File Required",
            text: "Please select at least one Excel file."
        });

        return;
    }

    Swal.fire({
        title: "Save ROSCTL Entry?",
        text: "Do you want to save this bulk entry?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Save",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Saving Bulk Entry...");

        const data = {
            entryNo: entryNo,
            sbNo: ($("#txtSBNo_Bulk").val() || "").trim(),
            sbDate: ($("#txtSBDate_Bulk").val() || "").trim(),
            rcvdAmount: ($("#txtRcvdAmount_Bulk").val() || "").trim(),
            licenceNo: ($("#txtLicenceNo_Bulk").val() || "").trim(),
            licenceDate: ($("#txtLicenceDate_Bulk").val() || "").trim(),
            port: ($("#txtPort_Bulk").val() || "").trim(),
            files: selectedXLSFiles
        };

        setTimeout(function () {

            hideLoader();

            console.log("[AdvanceROSCTLEntry] Saved Bulk Data:", data);

            Swal.fire({
                icon: "success",
                title: "Saved Successfully",
                text: "Bulk Entry saved successfully.",
                timer: 1200,
                showConfirmButton: false
            });

        }, 500);

    });

}


const dropZone = document.getElementById("xlsDropZone");
const fileInput = document.getElementById("fileXLS_Bulk");

if (dropZone && fileInput) {

    ["dragenter", "dragover"].forEach(eventName => {
        dropZone.addEventListener(eventName, function (e) {
            e.preventDefault();
            dropZone.classList.add("drag-over");
        });
    });

    ["dragleave", "drop"].forEach(eventName => {
        dropZone.addEventListener(eventName, function (e) {
            e.preventDefault();
            dropZone.classList.remove("drag-over");
        });
    });

    dropZone.addEventListener("drop", function (e) {
        const files = e.dataTransfer.files;

        if (files && files.length > 0) {
            fileInput.files = files;

            // Existing file selection logic ko call karein.
            fileInput.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        }
    });
}

//hlp data add here
//static data 
//static datav
const ROSCTLEntryHelpData = [
    {
        id: 1,
        entryNo: "ENT-1001",
        entryDate: "01-09-2025",
        invoiceNo: "INV-1001",
        sbNo: "SB-2001",
        sbDate: "03-09-2025"
    },
    {
        id: 2,
        entryNo: "ENT-1002",
        entryDate: "05-09-2025",
        invoiceNo: "INV-1002",
        sbNo: "SB-2002",
        sbDate: "07-09-2025"
    },
    {
        id: 3,
        entryNo: "ENT-1003",
        entryDate: "10-09-2025",
        invoiceNo: "INV-1003",
        sbNo: "SB-2003",
        sbDate: "12-09-2025"
    },
    {
        id: 4,
        entryNo: "ENT-1004",
        entryDate: "15-09-2025",
        invoiceNo: "INV-1004",
        sbNo: "SB-2004",
        sbDate: "17-09-2025"
    },
    {
        id: 5,
        entryNo: "ENT-1005",
        entryDate: "20-09-2025",
        invoiceNo: "INV-1005",
        sbNo: "SB-2005",
        sbDate: "22-09-2025"
    }
];
// bind table here
function bindROSCTLEntryHelpTable() {

    const $tbody = $("#tblbodyROSCTLEntryHelp");

    if (!$tbody.length) {
        console.error("tblbodyROSCTLEntryHelp not found.");
        return;
    }

    $tbody.empty();

    $.each(ROSCTLEntryHelpData, function (index, item) {

        const row = `
            <tr>
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkROSCTLEntryHelp"
                           data-index="${index}">
                </td>

                <td>${item.entryNo}</td>
                <td>${item.entryDate}</td>
                <td>${item.invoiceNo}</td>
                <td>${item.sbNo}</td>
                <td>${item.sbDate}</td>
            </tr>
        `;

        $tbody.append(row);
    });
}
//select one row 
$(document).on("change", ".chkROSCTLEntryHelp", function () {

    $(".chkROSCTLEntryHelp")
        .not(this)
        .prop("checked", false);

});
//save 
let selectedROSCTLEntryHelp = null;
$(document).on("click", "#btnSaveEntryHelp", function () {

    const $selected = $(".chkROSCTLEntryHelp:checked");

    if (!$selected.length) {
        showWarning("Selection Required", "Please select an entry.");
        return;
    }

    const index = Number($selected.data("index"));

    selectedROSCTLEntryHelp = ROSCTLEntryHelpData[index];

    console.log("Selected Entry:", selectedROSCTLEntryHelp);

    // Main form fields me set karo
    $("#txtEntryNo").val(selectedROSCTLEntryHelp.entryNo);
    $("#txtEntryDate").val(selectedROSCTLEntryHelp.entryDate);
    $("#txtInvoiceNo").val(selectedROSCTLEntryHelp.invoiceNo);
    $("#txtSbNo").val(selectedROSCTLEntryHelp.sbNo);
    $("#txtSbDate").val(selectedROSCTLEntryHelp.sbDate);

    // Help modal close
    const modalEl = document.getElementById("addMenuModalHelpEntryNo");

    if (modalEl) {
        bootstrap.Modal
            .getOrCreateInstance(modalEl)
            .hide();
    }
});
