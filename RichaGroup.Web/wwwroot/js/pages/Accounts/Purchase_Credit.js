$(document).ready(function () {
    initPurchaseCredit();
});

// Page Initialization

function initPurchaseCredit() {

   
    // Refresh Button
    $("#btnRefresh_PurchaseCredit").on("click", function () {

        showConfirm(
           "Are you sure?",
             "Do you want to refresh the Purchase Credit?",
           
        ).then(function (result) {

            if (result.isConfirmed) {
                refreshPurchaseCredit();
            }

        });

    });


    // Add Button
    $("#btnAdd_PurchaseCredit").on("click", function () {

        addPurchaseCredit();

    });


    // Initial Table
    bindPurchaseCreditData();

}

// Static Data

const purchaseCreditData = [

    {
        id: 120,
        date: "06-12-2024",
        gstNo: "06AALCR4331D1ZM",
        amount: "88777421.82",
        remarks: "Dec '24"
    },

    {
        id: 121,
        date: "02-01-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "89573129.63",
        remarks: "Jan '25"
    },

    {
        id: 122,
        date: "07-02-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "63807678.62",
        remarks: "February '25"
    },

    {
        id: 123,
        date: "06-03-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "69800000.00",
        remarks: "Mar '25"
    },

    {
        id: 124,
        date: "08-04-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "72000000.00",
        remarks: "Apr '25"
    },

    {
        id: 125,
        date: "02-05-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "76500000.00",
        remarks: "May '25"
    },

    {
        id: 126,
        date: "06-06-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "80000000.00",
        remarks: "Jun '25"
    },

    {
        id: 127,
        date: "06-06-2025",
        gstNo: "06AALCR4331D1ZM",
        amount: "20000000.00",
        remarks: "PROV. APR '25"
    },

    {
        id: 128,
        date: "06-06-2025",
        gstNo: "09AALCR4331D1ZG",
        amount: "20000000.00",
        remarks: "PROV. MAY '25"
    }

];

// DataTable Variable

let purchaseCreditTable = null;

// Format Amount

function formatPurchaseCreditAmount(value) {

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
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}
// Bind Table Data

function bindPurchaseCreditData() {

    const $tbody = $("#tblbody_PurchaseCredit");

    if (!$tbody.length) {

        console.error(
            "[PurchaseCredit] #tblbody_PurchaseCredit not found."
        );

        return;

    }

    $tbody.empty();


    $.each(
        purchaseCreditData,
        function (index, item) {

            const row = `
                <tr data-id="${item.id}">
                 <td class="text-center">

                        <button
                            type="button"
                            class="row-btn edit-btn btn-edit-purchase-credit"
                            data-id="${item.id}"
                            title="Edit">

                              <i class="fa-solid fa-pen-to-square"></i>

                        </button>

                    </td>
                    <td>
                        ${item.id}
                    </td>

                    <td>
                        ${item.date}
                    </td>

                    <td>
                        ${item.gstNo}
                    </td>

                    <td class="text-end">
                        ${formatPurchaseCreditAmount(item.amount)}
                    </td>

                    <td title="${item.remarks}">
                        ${item.remarks}
                    </td>

                   

                </tr>
            `;

            $tbody.append(row);

        }
    );

}

function refreshPurchaseCredit() {

    showLoader("Refreshing Purchase Credit...");

    try {

        if (purchaseCreditTable) {

            purchaseCreditTable.destroy();

            purchaseCreditTable = null;

        }


        bindPurchaseCreditData();


        purchaseCreditTable = new DataTable(
            "#tblDrawbackMaster",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No Purchase Credit records found",

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
            "[PurchaseCredit] Refresh failed:",
            error
        );

        hideLoader();

    }

}

// Add Purchase Credit

function addPurchaseCredit() {

    const entryNo =
        $("#txtEntryNo_PurchaseCredit").val().trim();

    const date =
        $("#txtdate_PurchaseCredit").val().trim();

    const gstNo =
        $("#txtGstNo_PurchaseCredit").val().trim();

    const amount =
        $("#txtAmount_PurchaseCredit").val().trim();

    const remarks =
        $("#txtRemarks_PurchaseCredit").val().trim();


    if (!entryNo) {

        showWarning(
           "Entry Number Required",
             "Please enter Entry Number."
        );

        $("#txtEntryNo_PurchaseCredit").focus();

        return;

    }


    if (!date) {

        showWarning(
            "Date Required",
           "Please select Date."
        );

        $("#txtdate_PurchaseCredit").focus();

        return;

    }


    if (!gstNo) {

        showWarning(
         "GST Number Required",
            "Please enter GST Number."
        );

        $("#txtGstNo_PurchaseCredit").focus();

        return;

    }


    if (!amount) {

        showWarning( 
           "Amount Required",
            "Please enter Amount."
        );

        $("#txtAmount_PurchaseCredit").focus();

        return;

    }


    const newItem = {

        id: parseInt(entryNo),

        date: date,

        gstNo: gstNo,

        amount: amount,

        remarks: remarks

    };


    purchaseCreditData.push(newItem);


    // Rebind table
    refreshPurchaseCredit();


    // Clear form
    $("#txtEntryNo_PurchaseCredit").val("");
    $("#txtdate_PurchaseCredit").val("");
    $("#txtGstNo_PurchaseCredit").val("");
    $("#txtAmount_PurchaseCredit").val("");
    $("#txtRemarks_PurchaseCredit").val("");


    showSuccess(
        "Added",
         "Purchase Credit added successfully.",
       
    );

}

// Edit Button

$(document).on(
    "click",
    ".btn-edit-purchase-credit",
    function () {

        const id = $(this).data("id");


        const item = purchaseCreditData.find(
            function (x) {

                return x.id == id;

            }
        );


        if (!item) {

            console.error(
                "[PurchaseCredit] Record not found:",
                id
            );

            return;

        }


        // Fill form
        $("#txtEntryNo_PurchaseCredit")
            .val(item.id);

        $("#txtdate_PurchaseCredit")
            .val(item.date);

        $("#txtGstNo_PurchaseCredit")
            .val(item.gstNo);

        $("#txtAmount_PurchaseCredit")
            .val(item.amount);

        $("#txtRemarks_PurchaseCredit")
            .val(item.remarks);


        console.log(
            "[PurchaseCredit] Edit:",
            item
        );
       $(`#addPurchaseCreditModal`).modal('show');
    }
);

$(`#btnAdd`).on(`click`, function () {
    $(`#addPurchaseCreditModal`).modal('show');
});