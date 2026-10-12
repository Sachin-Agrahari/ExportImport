$(document).ready(function () {

    initPCFCBooked();

});
// Page Initialization

function initPCFCBooked() {

    // Date Picker
    if ($("#txtdate_PCFCBooked").length) {

        flatpickr("#txtdate_PCFCBooked", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    // Due Date Picker
    if ($("#txtDuedate_PCFCBooked").length) {

        flatpickr("#txtDuedate_PCFCBooked", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    //select 2
      $("#ddlCurrency_PCFCBooked").select2({
        width: "100%",
        dropdownAutoWidth: false,
        placeholder: "Select any of them..."
    });


    // Refresh
    $("#btnRefresh_PCFCBooked").on("click", function () {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to refresh the PCFC Booked?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {

            if (result.isConfirmed) {

                refreshPCFCBooked();

            }

        });

    });


    // Add
    $("#btnAdd").on("click", function () {

        // addPCFCBooked();
         $('#addMenuModal').modal('show');

    });


    // DataTable
    initPCFCBookedDataTable();

}
// Static Data
var pcfcBookedData = [

    {
        id: 1,
        transactionNo: "2935",
        pcfcNo: "PCFC-001",
        action:"-",
        date: "13-08-2020",
        dueDate: "13-11-2020",
        currency: "USD",
        amount: 180000.00,
        rate: 74.53000,
        inr: 13415400.00,
        compCode: "RC225",
        boe: "BOE-1001"
    },

    {
        id: 2,
        transactionNo: "0",
        pcfcNo: "PCFC-002",
        action:"-",
        date: "-- --",
        dueDate: "-- --",
        currency: "USD",
        amount: 0.00,
        rate: 0.00000,
        inr: 0.00,
        compCode: "RC225",
        boe: "--"
    },

    {
        id: 3,
        transactionNo: "0",
        pcfcNo: "PCFC-003",
        action:"-", 
        date: "-- --",
        dueDate: "-- --",
        currency: "EUR",
        amount: 0.00,
        rate: 0.00000,
        inr: 0.00,
        compCode: "RC225",
        boe: "--"
    },

    {
        id: 4,
        transactionNo: "0",
        pcfcNo: "PCFC-004",
        action:"-", 
        date: "-- --",
        dueDate: "-- --",
        currency: "USD",
        amount: 0.00,
        rate: 0.00000,
        inr: 0.00,
        compCode: "RC225",
        boe: "--"
    },

    {
        id: 5,
        transactionNo: "0",
        pcfcNo: "PCFC-005",
        action:"-", 
        date: "-- --",
        dueDate: "-- --",
        currency: "GBP",
        amount: 0.00,
        rate: 0.00000,
        inr: 0.00,
        compCode: "RC225",
        boe: "--"
    }

];

let pcfcBookedTable = null;

// Format Number

function formatPCFCNumber(value, decimals) {

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
// Bind PCFC Data

function bindPCFCBookedData() {

    const $tbody = $("#tblbodyPCFCBooked");

    if (!$tbody.length) {

        console.error(
            "[PCFCBooked] #tblbodyPCFCBooked not found."
        );

        return;
    }


    $tbody.empty();


    $.each(pcfcBookedData, function (index, item) {

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

                <td class="text-center">
                    ${item.transactionNo}
                </td>

                <td class="text-center">
                    ${item.pcfcNo}
                </td>
                <td class="text-center">
                    ${item.action}
                </td>

                <td class="text-end">
                    ${item.date}
                </td>
                <td class="text-end">
                    ${item.dueDate}
                </td>
                <td class="text-end">
                    ${item.currency}
                </td>

                <td class="text-end">
                    ${formatPCFCNumber(item.amount, 2)}
                </td>
                <td class="text-end">
                    ${formatPCFCNumber(item.rate, 2)}
                </td>

                <td class="text-center">
                    ${item.inr}
                </td>
                <td class="text-center">
                    ${item.compCode}
                </td>
                <td class="text-center">
                    ${item.boe}
                </td>

              

               

            </tr>
        `;

        $tbody.append(row);

    });

}
// Initialize DataTable

function initPCFCBookedDataTable() {

    showLoader("Loading PCFC Booked...");

    try {

        if (pcfcBookedTable) {

            pcfcBookedTable.destroy();

            pcfcBookedTable = null;

        }


        // Bind data first
        bindPCFCBookedData();


        // Initialize DataTable
        pcfcBookedTable = new DataTable(
            "#tblPCFCBooked",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No PCFC Booked records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        // Add total
        addPCFCTotal();


        hideLoader();

    }
    catch (error) {

        console.error(
            "[PCFCBooked] DataTable initialization failed:",
            error
        );

        hideLoader();

    }

}
// Total

function addPCFCTotal() {

    let total = 0;

    $.each(pcfcBookedData, function (index, item) {

        total +=
            parseFloat(item.amount) || 0;

    });


    $("#pcfcBookedTotalRow").remove();


    const totalHtml = `
        <div
            id="pcfcBookedTotalRow"
            class="d-flex justify-content-end mt-2">

            <div class="pcfc-total-box">

                <span class="pcfc-total-label">
                    Total:
                </span>

                <span class="pcfc-total-value text-primary">
                    ${formatPCFCNumber(total, 2)}
                </span>

            </div>

        </div>
    `;


    $("#tblPCFCBooked")
        .closest(".table-wrap")
        .append(totalHtml);

}
// Refresh

function refreshPCFCBooked() {

    showLoader("Refreshing PCFC Booked...");

    try {

        if (pcfcBookedTable) {

            pcfcBookedTable.destroy();

            pcfcBookedTable = null;

        }


        bindPCFCBookedData();


        pcfcBookedTable = new DataTable(
            "#tblPCFCBooked",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No PCFC Booked records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        addPCFCTotal();


        setTimeout(function () {

            hideLoader();

            Swal.fire({
                icon: "success",
                title: "Refreshed",
                text: "PCFC Booked refreshed successfully.",
                timer: 1000,
                showConfirmButton: false
            });

        }, 500);

    }
    catch (error) {

        console.error(
            "[PCFCBooked] Refresh failed:",
            error
        );

        hideLoader();

    }

}
// Edit
function EditMaster(id) {

    if (!id) {
        return;
    }

    const item = pcfcBookedData.find(function (x) {
        return x.id == id;
    });


    if (!item) {

        showWarning(
            "Record Not Found",
            "PCFC booked record was not found."
        );

        return;
    }


    // Fill fields
    $("#ddlPCFC_Y").val(item.y ?? "");

    $("#txtPCFC_FW").val(item.fw ?? "");

    $("#txtPCFC_Trx").val(item.trx ?? "");

    $("#txtPCFC_Amount").val(
        item.amount ?? ""
    );

    $("#txtPCFC_Date").val(
        item.date ?? ""
    );

    $("#txtPCFC_ConversionRate").val(
        item.conversionRate ?? ""
    );

    $("#txtPCFC_Amount2").val(
        item.amount2 ?? ""
    );


    // Save ke liye selected id
    $("#btnSavePCFCBooked")
        .data("id", id);


    // Open modal
    const modalElement =
        document.getElementById("addMenuModal");

    if (!modalElement) {

        console.error(
            "#addMenuModal not found."
        );

        return;
    }


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );

    modal.show();
}

    //save  
        $("#btnSavePCFCBooked").on("click", function () {

    const id = $(this).data("id");

    const item = pcfcBookedData.find(function (x) {
        return x.id == id;
    });


    if (!item) {
        showWarning(
            "Record Not Found",
            "PCFC booked record was not found."
        );
        return;
    }


    item.y =
        $("#ddlPCFC_Y").val().trim();

    item.fw =
        $("#txtPCFC_FW").val().trim();

    item.trx =
        $("#txtPCFC_Trx").val().trim();

    item.amount =
        $("#txtPCFC_Amount").val().trim();

    item.date =
        $("#txtPCFC_Date").val().trim();

    item.conversionRate =
        $("#txtPCFC_ConversionRate").val().trim();

    item.amount2 =
        $("#txtPCFC_Amount2").val().trim();


    showSuccess(
        "Updated",
        "PCFC booked record updated successfully."
    );


    const modalElement =
        document.getElementById("editPCFCBookedModal");

    bootstrap.Modal
        .getInstance(modalElement)
        ?.hide();


    // Agar table DataTable se bind hai
    bindPCFCBookedData();

});