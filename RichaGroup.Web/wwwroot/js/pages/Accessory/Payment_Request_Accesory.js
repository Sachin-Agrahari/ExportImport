$(document).ready(function () {

    initPaymentRequestAccessory();

});

// Page Initialization

function initPaymentRequestAccessory() {

    // Date Picker
    flatpickr("#txtdate_PR_Accessory", {
        dateFormat: "d-M-Y",
        allowInput: true
    });


    // Refresh Button

    $("#btnRefresh_PR_Accessory").on("click", function () {

        showConfirm(
            "Are you sure?",
            "Do you want to refresh the Payment Request Page?"
        ).then(function (result) {

            if (result.isConfirmed) {

                refreshPaymentRequestAccessory();

            }

        });

    });
    // Save Button
    $("#btnSave_PR_Accessory").on("click", function () {

        showConfirm(
            "Are you sure?",
            "Do you want to save the Payment Request?"
        ).then(function (result) {

            if (!result.isConfirmed) {

                return;

            }

            const entryNo =
                $("#txtEntryNo_PR_Accessory").val().trim();

            const date =
                $("#txtdate_PR_Accessory").val().trim();

            const partyName =
                $("#txtPartyName_PR_Accessory").val().trim();

            const paymentFor =
                $("#txtPaymentfor_PR_Accessory").val().trim();

            const chaName =
                $("#txtCHAName_PR_Accessory").val().trim();

            const port =
                $("#txtPort_PR_Accessory").val().trim();


            if (!entryNo) {

                showWarning(
                    "Entry No Required",
                    "Please enter Entry No."
                );

                return;

            }


            if (!date) {

                showWarning(
                    "Date Required",
                    "Please select Date."
                );

                return;

            }


            if (!partyName) {

                showWarning(
                    "Party Name Required",
                    "Please enter Party Name."
                );

                return;

            }


            const saveData = {

                entryNo: entryNo,
                date: date,
                partyName: partyName,
                paymentFor: paymentFor,
                chaName: chaName,
                port: port,
                tableData: paymentRequestData

            };


            console.log(
                "Payment Request Save Data:",
                saveData
            );


            showLoader("Saving Payment Request...");


            setTimeout(function () {

                hideLoader();

                showSuccess(
                    "Saved Successfully",
                    "Payment Request has been saved."
                );

            }, 1000);

        });

    });

    $("#btnAdd_PR_Accessory").on("click", function () {

        addPaymentRequestAccessory();

    });


    // Initial Table Load
    initPaymentRequestDataTable();

}

// Static Data

const paymentRequestData = [

    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },
    {
        id: 1,
        item: "BUTTON",
        invoiceNo: "MTL/RCK/710696/25",
        invoiceDate: "10-06-2025",
        boe: "2581768",
        boeDate: "11-06-2025",
        amount: "49366.00",
        unit: "UNIT-239"
    },

];

// DataTable Variable

let paymentRequestTable = null;

// Bind Data Into TBODY

function bindPaymentRequestData() {

    const $tbody = $("#tblbodyPR_Accessory");

    if (!$tbody.length) {

        console.error(
            "[PaymentRequestAccessory] #tblbodyPR_Accessory not found."
        );

        return;
    }

    // Clear old data
    $tbody.empty();


    // Bind rows
    $.each(paymentRequestData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="c">
                    ${item.item}
                </td>

                <td>
                    ${item.invoiceNo}
                </td>

                <td>
                    ${item.invoiceDate}
                </td>

                <td>
                    ${item.boe}
                </td>

                <td>
                    ${item.boeDate}
                </td>

                <td class="r">
                    ${item.amount}
                </td>

                <td>
                    ${item.unit}
                </td>

                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn btn-delete"
                        data-id="${item.id}"
                        title="Delete">

                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="16"
                             height="16"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             aria-hidden="true">

                            <path d="M3 6h18"></path>
                            <path d="M8 6V4h8v2"></path>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                        </svg>
                    </button>
                </td>

            </tr>
        `;

        $tbody.append(row);

    });

}

// Initialize DataTable

function initPaymentRequestDataTable() {

    showLoader("Loading Payment Request...");

    try {

        if (paymentRequestTable) {

            paymentRequestTable.destroy();

            paymentRequestTable = null;
        }

        bindPaymentRequestData();

        paymentRequestTable = new DataTable(
            "#tblPR_Accessory",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No Payment Request records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        hideLoader();

    }
    catch (error) {

        console.error(
            "[PaymentRequestAccessory] DataTable initialization failed:",
            error
        );

        hideLoader();

    }

}
// Refresh

function refreshPaymentRequestAccessory() {

    showLoader("Refreshing Payment Request...");

    try {

        if (paymentRequestTable) {

            paymentRequestTable.destroy();

            paymentRequestTable = null;
        }
        bindPaymentRequestData();

        paymentRequestTable = new DataTable(
            "#tblPR_Accessory",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No Payment Request records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );

        setTimeout(function () {

            hideLoader();

        }, 500);

    }
    catch (error) {

        console.error(
            "[PaymentRequestAccessory] Refresh failed:",
            error
        );

        hideLoader();

    }
}
// Add
// Add

function addPaymentRequestAccessory() {

    const item =
        $("#txtPaymentfor_PR_Accessory").val().trim();

    const invoiceNo =
        $("#txtEntryNo_PR_Accessory").val().trim();

    const invoiceDate =
        $("#txtdate_PR_Accessory").val().trim();

    const unit =
        $("#txtPort_PR_Accessory").val().trim();


    if (!item) {

        showWarning(
            "Item Required",
            "Please enter Payment For."
        );

        return;

    }


    paymentRequestData.push({

        id: Date.now(),

        item: item,

        invoiceNo: invoiceNo,

        invoiceDate: invoiceDate,

        boe: "",

        boeDate: "",

        amount: "0.00",

        unit: unit

    });


    refreshPaymentRequestAccessory();


    showSuccess(
        "Added",
        "Payment Request item added successfully."
    );

}
// Delete


$(document).on(
    "click",
    ".btn-delete-pr-accessory",
    function () {

        const id =
            Number($(this).data("id"));


        showConfirm(
            "Delete record?",
            "Are you sure you want to delete this record?"
        ).then(function (result) {

            if (!result.isConfirmed) {

                return;

            }


            const index =
                paymentRequestData.findIndex(
                    x => x.id === id
                );


            if (index !== -1) {

                paymentRequestData.splice(index, 1);

                refreshPaymentRequestAccessory();

                showSuccess(
                    "Deleted",
                    "Payment Request item deleted successfully."
                );

            }

        });

    }
);