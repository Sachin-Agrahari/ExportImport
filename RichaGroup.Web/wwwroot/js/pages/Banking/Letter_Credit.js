var lcLocalData = [
    {
        id: 1,
        deliveryDate: "01-10-2024",
        bankReferenceNo: "5723CBC0424150001",
        amount: 100000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "01-10-2024",
        billduedt: "-",
        paymentdt: "-",
        consentReqtobnk: "Y",
        reqDate: "01-10-2024",
        DebitAmt: "",
        remark: "Payment processed",
        lcStatus: "OPEN"
    },
    {
        id: 2,
        deliveryDate: "03-10-2024",
        bankReferenceNo: "5723CBC0424150002",
        amount: 125000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "03-10-2024",
        billduedt: "18-10-2024",
        paymentdt: "10-10-2024",
        consentReqtobnk: "Y",
        reqDate: "03-10-2024",
        DebitAmt: "5000.00",
        remark: "Partial debit adjusted",
        lcStatus: "OPEN"
    },
    {
        id: 3,
        deliveryDate: "05-10-2024",
        bankReferenceNo: "5723CBC0424150003",
        amount: 85000.00,
        status: "PENDING",
        paymentStatus: "Pending",
        bankReferenceDate: "05-10-2024",
        billduedt: "20-10-2024",
        paymentdt: "-",
        consentReqtobnk: "N",
        reqDate: "-",
        DebitAmt: "",
        remark: "Waiting for bank confirmation",
        lcStatus: "OPEN"
    },
    {
        id: 4,
        deliveryDate: "08-10-2024",
        bankReferenceNo: "5723CBC0424150004",
        amount: 210000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "08-10-2024",
        billduedt: "25-10-2024",
        paymentdt: "15-10-2024",
        consentReqtobnk: "Y",
        reqDate: "08-10-2024",
        DebitAmt: "10000.00",
        remark: "Debit adjusted successfully",
        lcStatus: "OPEN"
    },
    {
        id: 5,
        deliveryDate: "12-10-2024",
        bankReferenceNo: "5723CBC0424150005",
        amount: 150000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "12-10-2024",
        billduedt: "29-10-2024",
        paymentdt: "18-10-2024",
        consentReqtobnk: "Y",
        reqDate: "12-10-2024",
        DebitAmt: "7500.00",
        remark: "Regular LC payment",
        lcStatus: "OPEN"
    },
    {
        id: 6,
        deliveryDate: "15-10-2024",
        bankReferenceNo: "5723CBC0424150006",
        amount: 175000.00,
        status: "PENDING",
        paymentStatus: "Pending",
        bankReferenceDate: "15-10-2024",
        billduedt: "31-10-2024",
        paymentdt: "-",
        consentReqtobnk: "N",
        reqDate: "-",
        DebitAmt: "",
        remark: "Consent not received",
        lcStatus: "HOLD"
    },
    {
        id: 7,
        deliveryDate: "18-10-2024",
        bankReferenceNo: "5723CBC0424150007",
        amount: 95000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "18-10-2024",
        billduedt: "02-11-2024",
        paymentdt: "25-10-2024",
        consentReqtobnk: "Y",
        reqDate: "18-10-2024",
        DebitAmt: "3000.00",
        remark: "Payment received",
        lcStatus: "OPEN"
    },
    {
        id: 8,
        deliveryDate: "20-10-2024",
        bankReferenceNo: "5723CBC0424150008",
        amount: 275000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "20-10-2024",
        billduedt: "05-11-2024",
        paymentdt: "28-10-2024",
        consentReqtobnk: "Y",
        reqDate: "20-10-2024",
        DebitAmt: "12500.00",
        remark: "High value LC payment",
        lcStatus: "OPEN"
    },
    {
        id: 9,
        deliveryDate: "24-10-2024",
        bankReferenceNo: "5723CBC0424150009",
        amount: 110000.00,
        status: "REJECTED",
        paymentStatus: "Unpaid",
        bankReferenceDate: "24-10-2024",
        billduedt: "10-11-2024",
        paymentdt: "-",
        consentReqtobnk: "N",
        reqDate: "-",
        DebitAmt: "",
        remark: "Document mismatch",
        lcStatus: "HOLD"
    },
    {
        id: 10,
        deliveryDate: "28-10-2024",
        bankReferenceNo: "5723CBC0424150010",
        amount: 195000.00,
        status: "ACCEPTED",
        paymentStatus: "Paid",
        bankReferenceDate: "28-10-2024",
        billduedt: "12-11-2024",
        paymentdt: "05-11-2024",
        consentReqtobnk: "Y",
        reqDate: "28-10-2024",
        DebitAmt: "8500.00",
        remark: "Final payment completed",
        lcStatus: "CLOSED"
    }
];


let lcLocalTable = null;


$(document).ready(function () {

    initEntryLetterCredit();
    bindLCLocalData(lcLocalData)
});

// Page Initialization

function initEntryLetterCredit() {

    // Refresh
    $("#btnRefresh_LetterCredit").on("click", function () {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to refresh the Entry Letter Credit?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {

            if (result.isConfirmed) {
                refreshEntryLetterCredit();
            }

        });

    });


    // Add
    // $("#btnAdd_LetterCredit").on("click", function () {

    //     $('#addMenuModal').modal('show');

    // });
    //tab switch is here 
    
$(".tabs button").on("click", function () {

    // Get selected tab ID
    var tabId = $(this).data("tab");

    // Remove active class from all buttons
    $(".tabs button").removeClass("on");

    // Add active class to clicked button
    $(this).addClass("on");

    // Hide all tab panes
    $(".tabpane").removeClass("on");

    // Show selected tab pane
    $("#" + tabId).addClass("on");

});
    //help open modal
    $(document).on("click", "#btnLCNoHelp", function (e) {

        e.preventDefault();

        const modalEl = document.getElementById("debitLCHelpModal");

        if (!modalEl) {
            console.error("#debitLCHelpModal not found.");
            return;
        }

        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

        modal.show();
    });

    //help Lc Tbale Bind 
    bindLCHelpEntryLetterTable();

    //click of debit help to open
    $("#btnhelpDebitAmt").on("click", function () {
        // window.location.href = "/Banking/EPCGLicense";
        $('#debitNoteHelpModal').modal('show')
    });

    // DataTable
    initEntryLetterCreditDataTable();

    //debit note help table
    bindDebitNoteHelpTable();

    //ecport import on chnage 
    $(document).on("change", ".rdoLetterCreditType", function () {

        const type = $(this).val();

        // Hide both specific sections
        $(".export-field").addClass("d-none");
        $(".import-field").addClass("d-none");

        // Show selected type
        if (type === "Export") {
            $(".export-field").removeClass("d-none");
            $('#SecletterCreditImportCase').hide();
        }

        if (type === "Import") {
            $(".import-field").removeClass("d-none");
            $('#SecletterCreditImportCase').show();
        }

    });
    //on chnage po deatils rdo show table
$(document).on(
    "change",
    'input[name="PODetails_LetterCreditAmendment"], input[name="PODetails_LetterCreditTransfer"]',
    function () {
        const selectedValue = $(this).val();

        if (selectedValue === "Y") {
            $("#letterCreditTableWrap").removeClass("d-none");

            // DataTable use ho raha hai toh columns adjust karo
            if ($.fn.DataTable.isDataTable("#tblLetterCredit")) {
                $("#tblLetterCredit")
                    .DataTable()
                    .columns.adjust()
                    .draw(false);
            }
        } else {
            $("#letterCreditTableWrap").addClass("d-none");
        }
    }
); 
// Letter Credit tabs
$(document).on("click", ".tabs button[data-tab]", function () {
    const targetTab = $(this).data("tab");

    // Active tab button
    $(".tabs button[data-tab]").removeClass("on");
    $(this).addClass("on");

    // Show selected tab pane
    $(".tabpane").removeClass("on");
    $("#" + targetTab).addClass("on");

    // Shared PO table: active tab ke selection ke according
    let selectedValue = "";

    if (targetTab === "t-Amendment") {
        selectedValue = $(
            'input[name="PODetails_LetterCreditAmendment"]:checked'
        ).val();
    } else if (targetTab === "t-Transfer") {
        selectedValue = $(
            'input[name="PODetails_LetterCreditTransfer"]:checked'
        ).val();
    } 

    $("#letterCreditTableWrap").toggleClass(
        "d-none",
        selectedValue !== "Y"
    );

    if (
        selectedValue === "Y" &&
        $.fn.DataTable.isDataTable("#tblLetterCredit")
    ) {
        $("#tblLetterCredit").DataTable().columns.adjust().draw(false);
    }
});

    // by default export selected  


        $("#rbExport_LetterCredit").prop("checked", true).trigger("change");

  

}

// Static Data

var entryLetterCreditData = [

    {
        id: 1,
        style: "551789497",
        po: "3503657197",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 93083.98,
        Debitamt: 11564.28,
    },

    {
        id: 2,
        style: "551789498",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 3,
        style: "551789499",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 4,
        style: "551789496",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 5,
        style: "551789506",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 6,
        style: "551789505",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 7,
        style: "551789500",
        po: "",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 0.00,
        Debitamt: 11564.28,
    },

    {
        id: 8,
        style: "551789497",
        po: "3503657199",
        art: "",
        quantity: 0,
        rate: 0.00,
        amount: 117544.28,
        Debitamt: 11564.28,
    }

];




let entryLetterCreditTable = null;

// Number Format

function formatEntryLetterCreditNumber(value, decimals) {

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

// Bind Data

function bindEntryLetterCreditData() {

    const $tbody = $("#tblbodyLetterCredit");

    if (!$tbody.length) {

        console.error(
            "[LetterCredit] #tblbodyLetterCredit not found."
        );

        return;
    }


    $tbody.empty();


    $.each(entryLetterCreditData, function (index, item) {

        const row = `
            <tr>

                 <td class="text-center">

                    <button
                        type="button"
                        class="row-btn edit-btn"
                         onclick="EditMaster('${item.id}')"
                        data-id="${item.id}"
                        title="Edit">

                          <i class="fa-solid fa-pen-to-square"></i>

                    </button>

                </td>


                <td>
                    ${item.style}
                </td>

                <td>
                    ${item.po}
                </td>

                <td>
                    ${item.art}
                </td>

                <td class="text-end">
                    ${formatEntryLetterCreditNumber(item.quantity, 0)}
                </td>

                <td class="text-end">
                    ${formatEntryLetterCreditNumber(item.rate, 2)}
                </td>

                <td class="text-end">
                    ${formatEntryLetterCreditNumber(item.amount, 2)}
                </td>
                <td class="text-end">
                    ${formatEntryLetterCreditNumber(item.Debitamt, 2)}
                </td>

               
            </tr>
        `;

        $tbody.append(row);

    });

}

// DataTable

function initEntryLetterCreditDataTable() {

    showLoader("Loading Entry Letter Credit...");

    try {

        if (entryLetterCreditTable) {

            entryLetterCreditTable.destroy();

            entryLetterCreditTable = null;

        }


        bindEntryLetterCreditData();

        const table = $('#tblLetterCredit').DataTable({
            paging: false,
            searching: false,
            ordering: false,
            // scrollY: Scroll,
            scrollCollapse: true,
            info: false,
            autoWidth: false,
            fixedHeader: false,
            dom: '<"datatable-search"f>rt'
        });

        setTimeout(() => table.columns.adjust().draw(), 100);
        hideLoader();

    }
    catch (error) {

        console.error(
            "[LetterCredit] DataTable initialization failed:",
            error
        );

        hideLoader();

    }

}
// Refresh

function refreshEntryLetterCredit() {

    showLoader("Refreshing Entry Letter Credit...");

    try {

        if (entryLetterCreditTable) {

            entryLetterCreditTable.destroy();

            entryLetterCreditTable = null;

        }


        bindEntryLetterCreditData();


        entryLetterCreditTable = new DataTable(
            "#tblLetterCredit",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                scrollX: true,

                language: {

                    emptyTable:
                        "No Entry Letter Credit records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        setTimeout(function () {

            hideLoader();

            Swal.fire({
                icon: "success",
                title: "Refreshed",
                text: "Entry Letter Credit refreshed successfully.",
                timer: 1000,
                showConfirmButton: false
            });

        }, 500);

    }
    catch (error) {

        console.error(
            "[EntryLetterCredit] Refresh failed:",
            error
        );

        hideLoader();

    }

}
function EditMaster(id) {

    if (!id) {
        return;
    }

    Swal.fire({
        title: "Edit Entry Letter Credit",
        text: "Do you want to edit this record?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Edit",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Opening Entry Letter Credit...");

        setTimeout(function () {

            hideLoader();

            const modalElement =
                document.getElementById("editLetterCreditModal");

            if (!modalElement) {
                console.error("#addMenuModal not found.");
                return;
            }

            const modal =
                bootstrap.Modal.getOrCreateInstance(modalElement);

            modal.show();

        }, 300);

    });
}

//help open for the Lc
//help of Lc No 
const lcHelpEntryLetterData = [
    {
        id: 1,
        lcNo: "LC-1001",
        amdNo: "AMD-001",
        lcOpenDate: "01-09-2025",
        lcValue: "25,00,000.00",
        status: "Active",
        lcAddedBy: "Admin"
    },
    {
        id: 2,
        lcNo: "LC-1002",
        amdNo: "AMD-002",
        lcOpenDate: "05-09-2025",
        lcValue: "18,50,000.00",
        status: "Active",
        lcAddedBy: "Vikas"
    },
    {
        id: 3,
        lcNo: "LC-1003",
        amdNo: "AMD-003",
        lcOpenDate: "10-09-2025",
        lcValue: "32,75,000.00",
        status: "Closed",
        lcAddedBy: "Rahul"
    },
    {
        id: 4,
        lcNo: "LC-1004",
        amdNo: "AMD-004",
        lcOpenDate: "15-09-2025",
        lcValue: "14,20,000.00",
        status: "Active",
        lcAddedBy: "Admin"
    },
    {
        id: 5,
        lcNo: "LC-1005",
        amdNo: "AMD-005",
        lcOpenDate: "20-09-2025",
        lcValue: "21,80,000.00",
        status: "Pending",
        lcAddedBy: "Amit"
    }
];
//bind data
function bindLCHelpEntryLetterTable() {

    const $tbody = $("#tblbodyLCHelpEntryLetter");

    if (!$tbody.length) {
        console.error("tblbodyLCHelpEntryLetter not found.");
        return;
    }

    $tbody.empty();

    $.each(lcHelpEntryLetterData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkLCHelpEntryLetter"
                           data-index="${index}">
                </td>

                <td>${item.lcNo || "—"}</td>

                <td>${item.amdNo || "—"}</td>

                <td>${item.lcOpenDate || "—"}</td>

                <td class="text-end">
                    ${item.lcValue || "—"}
                </td>

                <td>
                    <span class="badge ${item.status === "Active"
                ? "bg-success"
                : item.status === "Closed"
                    ? "bg-secondary"
                    : "bg-warning text-dark"
            }">
                        ${item.status || "—"}
                    </span>
                </td>

                <td>${item.lcAddedBy || "—"}</td>

            </tr>
        `;

        $tbody.append(row);
    });
}
$(document).on("change", ".chkLCHelpEntryLetter", function () {

    $(".chkLCHelpEntryLetter")
        .not(this)
        .prop("checked", false);

});



//debit note entry data 
const debitNoteHelpData = [

    {
        id: 1,
        debitNoteNo: "DN-001",
        debitNoteDate: "10-09-2026",
        amount: "1250.00"
    },

    {
        id: 2,
        debitNoteNo: "DN-002",
        debitNoteDate: "15-09-2026",
        amount: "2750.50"
    },

    {
        id: 3,
        debitNoteNo: "DN-003",
        debitNoteDate: "18-09-2026",
        amount: "950.00"
    },

    {
        id: 4,
        debitNoteNo: "DN-004",
        debitNoteDate: "22-09-2026",
        amount: "1800.75"
    }

];
//bind table 
function bindDebitNoteHelpTable() {

    const $tbody = $("#tblbody_DebitNoteHelp");

    $tbody.empty();

    $.each(debitNoteHelpData, function (index, item) {

        const row = `
            <tr>

                <td class="text-center">

                    <button type="button"
                            class="edit-row save-btn btnSelectDebitNote"
                            data-index="${index}"
                            title="Select">

                        <svg width="14"
                             height="14"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">

                            <polyline points="20 6 9 17 4 12"></polyline>

                        </svg>

                    </button>

                </td>

                <td>
                    ${item.debitNoteNo}
                </td>

                <td>
                    ${item.debitNoteDate}
                </td>

                <td class="text-end">
                    ${item.amount}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
//after select it show in field 
$(document).on("click", ".btnSelectDebitNote", function () {

    const index = Number($(this).data("index"));

    const item = debitNoteHelpData[index];

    if (!item) {
        showWarning(
            "Record Not Found",
            "Debit note record not found."
        );
        return;
    }

    $("#txtDebitNote_EntryLetterLocal")
        .val(item.debitNoteNo);

    // Optional: Debit amount bhi fill
    $("#txtDebitAmt_EntryLetterLocal")
        .val(item.amount);

    // Close help modal
    bootstrap.Modal
        .getInstance(
            document.getElementById("debitNoteHelpModal")
        )
        ?.hide();
});



// Bind LC Local Data

function bindLCLocalData(data) {

    const $tbody = $("#tblbodyLCLocal");

    if (!$tbody.length) {
        console.error("[LCLocal] #tblbodyLCLocal not found.");
        return;
    }

    $tbody.empty();

    if (!data || !data.length) {
        $tbody.html(`
            <tr>
                <td colspan="15" class="text-center text-muted">
                    No LC Local Data Found.
                </td>
            </tr>
        `);

        updateLCLocalBalance([]);
        return;
    }

    $.each(data, function (index, item) {

        const row = `
            <tr>

                <!-- Action -->
               

                <!-- Delivery Date -->
                <td>
                    ${item.deliveryDate || "—"}
                </td>

                <!-- Bank Reference No -->
                <td>
                    ${item.bankReferenceNo || "—"}
                </td>

                <!-- Amount -->
                <td class="text-end">
                    ${formatLCLocalNumber(item.amount, 2)}
                </td>

                <!-- Status -->
                <td>
                    ${item.status || "—"}
                </td>

                <!-- Payment Status -->
                <td>
                    ${item.paymentStatus || "—"}
                </td>

                <!-- Bank Reference Date -->
                <td>
                    ${item.bankReferenceDate || "—"}
                </td>

                <!-- Bill Due Date -->
                <td>
                    ${item.billduedt || "—"}
                </td>

                <!-- Payment Date -->
                <td>
                    ${item.paymentdt || "—"}
                </td>

                <!-- Payment Amount -->
                <td class="text-end">
                    ${formatLCLocalNumber(item.amount, 2)}
                </td>

                <!-- Debit Amount -->
                <td class="text-end">
                    ${item.DebitAmt
                ? formatLCLocalNumber(item.DebitAmt, 2)
                : "—"}
                </td>

                <!-- Consent Req to Bank -->
                <td class="text-center">
                    ${item.consentReqtobnk || "—"}
                </td>

                <!-- Req Date -->
                <td>
                    ${item.reqDate || "—"}
                </td>

                <!-- Remark -->
                <td>
                    ${item.remark || "—"}
                </td>

                <!-- LC Status -->
                <td>
                    ${item.lcStatus || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });

    updateLCLocalBalance(data);
}


function formatLCLocalNumber(value, decimals) {

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
function updateLCLocalBalance(data) {

    let totalAmount = 0;

    $.each(data, function (index, item) {

        const amount = parseFloat(item.amount);

        if (!isNaN(amount)) {

            totalAmount += amount;

        }

    });


    $("#lblBalance_LCLocal").text(
        formatLCLocalNumber(totalAmount, 2)
    );

}