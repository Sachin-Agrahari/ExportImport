
const invoiceData = [
    {
        invoiceNo: "INV-1001",
        quantity: 10,
        invoiceAmount: 12500.00
    },
    {
        invoiceNo: "INV-1002",
        quantity: 25,
        invoiceAmount: 28750.00
    },
    {
        invoiceNo: "INV-1003",
        quantity: 15,
        invoiceAmount: 18250.00
    },
    {
        invoiceNo: "INV-1004",
        quantity: 30,
        invoiceAmount: 45000.00
    },
    {
        invoiceNo: "INV-1005",
        quantity: 12,
        invoiceAmount: 15600.00
    },
    {
        invoiceNo: "INV-1006",
        quantity: 20,
        invoiceAmount: 32500.00
    },
    {
        invoiceNo: "INV-1007",
        quantity: 18,
        invoiceAmount: 21600.00
    },
    {
        invoiceNo: "INV-1008",
        quantity: 40,
        invoiceAmount: 62500.00
    },
    {
        invoiceNo: "INV-1009",
        quantity: 22,
        invoiceAmount: 35750.00
    },
    {
        invoiceNo: "INV-1010",
        quantity: 16,
        invoiceAmount: 19800.00
    }
];

$(document).ready(function () {
    $('#btInvnHelp').on('click', function () {
        bindInvoiceTable();
        $("#invoiceHelpModal").modal('show')

    })
   
    //help open on click of debite note number help 
    $('#btnhelpDBN').on('click', function () {
        $("#addMenuModalDBNHelp").modal('show')

    })
    //table bind call here DBN
    // bindDBNTable();
})
function bindInvoiceTable() {

        const $tbody = $("#invoiceBody");

    $tbody.empty();

    $.each(invoiceData, function (i, v) {

        const row = ` <tr>
            <td class="text-center">${i + 1}</td>
            <td>${v.invoiceNo}</td>
            <td class="num">${v.quantity}</td>
            <td class="num">${v.invoiceAmount}</td>
        </tr> `;

        $tbody.append(row);
    });
}

//static data for help DBN 
const dbnData = [
    {
        id: 1,
        debitNoteNumber: "DN-1001",
        debitNoteDate: "01-09-2025",
        amount: "25,000.00",
        party: "ABC EXPORTS",
        invoiceNo: "INV-1001"
    },
    {
        id: 2,
        debitNoteNumber: "DN-1002",
        debitNoteDate: "05-09-2025",
        amount: "18,500.00",
        party: "XYZ TEXTILES",
        invoiceNo: "INV-1002"
    },
    {
        id: 3,
        debitNoteNumber: "DN-1003",
        debitNoteDate: "10-09-2025",
        amount: "32,750.00",
        party: "GLOBAL FABRICS",
        invoiceNo: "INV-1003"
    },
    {
        id: 4,
        debitNoteNumber: "DN-1004",
        debitNoteDate: "15-09-2025",
        amount: "14,200.00",
        party: "AEO SUPPLIERS",
        invoiceNo: "INV-1004"
    },
    {
        id: 5,
        debitNoteNumber: "DN-1005",
        debitNoteDate: "20-09-2025",
        amount: "21,300.00",
        party: "BELK TRADERS",
        invoiceNo: "INV-1005"
    }
];
//bind table her e
let dbnTable = null;

function bindDBNTable() {

    const $table = $("#tblDBN");
    const $tbody = $("#tblbodyDBN");

    if (!$table.length || !$tbody.length) {
        console.error("[DBN] Table not found.");
        return;
    }

    // Existing DataTable destroy
    if ($.fn.DataTable.isDataTable("#tblDBN")) {
        $table.DataTable().clear().destroy();
    }

    $tbody.empty();

    if (!dbnData.length) {
        $tbody.html(`
            <tr>
                <td colspan="6" class="text-center">
                    No Debit Note Found.
                </td>
            </tr>
        `);
        return;
    }

    $.each(dbnData, function (index, item) {

        $tbody.append(`
            <tr>
                <td class="text-center">

                    <button type="button"
                            class="row-btn edit-btn btnEditDBN"
                            data-id="${item.id}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button type="button"
                            class="row-btn delete-btn btnDeleteDBN"
                            data-id="${item.id}"
                            title="Delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </td>

                <td>${item.debitNoteNumber || "—"}</td>

                <td>${item.debitNoteDate || "—"}</td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td>${item.party || "—"}</td>

                <td>${item.invoiceNo || "—"}</td>
            </tr>
        `);
    });

    dbnTable = $table.DataTable({
        paging: true,
        pageLength: 5,
        lengthChange: false,
        searching: true,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,
        scrollCollapse: true,

        language: {
            emptyTable: "No Debit Note Found.",
            zeroRecords: "No matching records found.",
            search: "Search:"
        }
    });
}

$(document).on("shown.bs.modal", "#addMenuModalDBNHelp", function () {

    setTimeout(function () {

        bindDBNTable();

        const table = $("#tblDBN").DataTable();

        table.columns.adjust().draw(false);

    }, 100);

});