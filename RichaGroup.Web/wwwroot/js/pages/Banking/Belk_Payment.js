$(document).ready(function() {
    //add button click event
    // $("#btnAdd").click(function() {
    //     $("#addMenuModal").modal("show");
    // });


    $(document).on("click", "#btnAdd", function () {
    openBelkPaymentAddModal();
});

    //table binding
    bindBelkPaymentTable();
});
// static data for the table
const belkPaymentData = [
    {
        id: 1,
        invoice: "INV-1001",
        poNo: "PO-2026-001",
        quantity: "1250",
        grossAmount: "25,500.00",
        discount: "500.00",
        netAmount: "25,000.00",
        fcrDt: "10-09-2026"
    },
    {
        id: 2,
        invoice: "INV-1002",
        poNo: "PO-2026-002",
        quantity: "980",
        grossAmount: "18,000.00",
        discount: "300.00",
        netAmount: "17,700.00",
        fcrDt: "12-09-2026"
    },
    {
        id: 3,
        invoice: "INV-1003",
        poNo: "PO-2026-003",
        quantity: "1500",
        grossAmount: "32,750.00",
        discount: "750.00",
        netAmount: "32,000.00",
        fcrDt: "15-09-2026"
    },
    {
        id: 4,
        invoice: "INV-1004",
        poNo: "PO-2026-004",
        quantity: "760",
        grossAmount: "14,500.00",
        discount: "250.00",
        netAmount: "14,250.00",
        fcrDt: "18-09-2026"
    },
    {
        id: 5,
        invoice: "INV-1005",
        poNo: "PO-2026-005",
        quantity: "2100",
        grossAmount: "41,200.00",
        discount: "1,200.00",
        netAmount: "40,000.00",
        fcrDt: "20-09-2026"
    }
];

let belkPaymentTable = null;
let selectedBelkPaymentIndex = null;


function bindBelkPaymentTable() {

    const $tbody = $("#tblbodyBelkPayment");

    if (!$tbody.length) {
        console.error("#tblbodyBelkPayment not found.");
        return;
    }

    // Destroy old DataTable
    if ($.fn.DataTable.isDataTable("#tblBelkPyament")) {
        $("#tblBelkPyament").DataTable().destroy();
    }

    $tbody.empty();

    $.each(belkPaymentData, function (index, item) {

        const row = `
            <tr data-index="${index}">

                <!-- ACTION -->
                <td class="text-center">
                    <div class="d-flex justify-content-center align-items-center gap-1">

                        <button type="button"
                                class="row-btn edit-btn btnEditBelkPayment"
                                data-index="${index}"
                                title="Edit">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button type="button"
                                class="row-btn bg-danger text-white delete-btn btnDeleteBelkPayment"
                                data-index="${index}"
                                title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>

                    </div>
                </td>

                <!-- S NO -->
                <td class="text-center">
                    ${index + 1}
                </td>

                <!-- INVOICE -->
                <td>
                    ${item.invoice}
                </td>

                <!-- PO NO -->
                <td>
                    ${item.poNo}
                </td>

                <!-- QUANTITY -->
                <td class="text-end">
                    ${item.quantity}
                </td>

                <!-- GROSS AMOUNT -->
                <td class="text-end">
                    ${item.grossAmount}
                </td>

                <!-- DISCOUNT -->
                <td class="text-end">
                    ${item.discount}
                </td>

                <!-- NET AMOUNT -->
                <td class="text-end fw-semibold">
                    ${item.netAmount}
                </td>

                <!-- FCR DATE -->
                <td class="text-center">
                    ${item.fcrDt}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });


    // Initialize DataTable
    belkPaymentTable = $("#tblBelkPyament").DataTable({
        pageLength: 5,
        lengthChange: false,
        searching: false,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,

        language: {
            emptyTable: "No Belk Payment Found."
        }
    });
}
//edit case to open a modal 
$(document).on("click", ".btnEditBelkPayment", function () {

    const index = Number($(this).data("index"));
    const item = belkPaymentData[index];

    if (!item) {
        return;
    }

    selectedBelkPaymentIndex = index;

  
    $("#txtInvoice_BelkPayment").val(item.invoice);
    $("#txtPoNo_BelkPayment").val(item.poNo);
    $("#txtQuantity_BelkPayment").val(item.quantity);
    $("#txtGrossAmount_BelkPayment").val(item.grossAmount);
    $("#txtDiscount_BelkPayment").val(item.discount);
    $("#txtNetAmount_BelkPayment").val(item.netAmount);
    $("#txtFcrDt_BelkPayment").val(item.fcrDt);

   
    $(".belk-edit-readonly")
        .prop("readonly", true);

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("addMenuModal")
        )
        .show();
});
//add case readonly remove 
    function openBelkPaymentAddModal() {

    selectedBelkPaymentIndex = null;

    // Clear fields
    $("#txtInvoice_BelkPayment").val("");
    $("#txtPoNo_BelkPayment").val("");
    $("#txtQuantity_BelkPayment").val("");
    $("#txtGrossAmount_BelkPayment").val("");
    $("#txtDiscount_BelkPayment").val("");
    $("#txtNetAmount_BelkPayment").val("");
    $("#txtFcrDt_BelkPayment").val("");

    // ADD = all editable
    $(".belk-edit-readonly")
        .prop("readonly", false);

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("addMenuModal")
        )
        .show();
}