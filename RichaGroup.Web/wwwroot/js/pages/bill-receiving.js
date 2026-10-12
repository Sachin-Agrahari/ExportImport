(function () {
  const viewBtns = document.querySelectorAll('.screen-switch button');
  function show(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('on', v.id === 'view-' + name));
    viewBtns.forEach(b => b.classList.toggle('on', b.dataset.view === name));
    window.scrollTo({ top: 0 });
  }
  viewBtns.forEach(b => b.addEventListener('click', () => show(b.dataset.view)));
  window.show = show;


})();

    $(document).ready(function () {

    $("#btnMainDeletentry").on("click", function () {

        showWarning(
            "Delete Entry?",
            "If you click OK, the complete entry will be deleted. This action cannot be undone.",
            {
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                showConfirmButton: true,
                showCancelButton: true,
                timer: undefined
            }
        ).then(function (result) {

            if (result.isConfirmed) {

                // DELETE HERE
                console.log("Complete entry deleted.");

                // example:
                // deleteMainEntry();

            }

        });

    });
    $("#btnBreakup").on("click", function() {
          $('#addMenuBreakup').modal('show')
    }) 

    $("#btnAddTagInvoice").on("click", function() {
         $('#addMenuModal').modal('show')
    })

    //table bind 
        bindInvoiceDetailsTable();
        // openModal

});

 function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        console.error(`#${id} not found.`);
        return;
    }

    modal.classList.add("on");
}

function closeModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        console.error(`#${id} not found.`);
        return;
    }

    modal.classList.remove("on");
}

//static data 
const invoiceDetailsData = [
    {
        invoiceNo: "RE/2135/23-24",
        invoiceDate: "25-10-2023",
        cartons: "9",
        buyerCode: "422",
        grossWeight: "69.250",
        cbm: "0.295",
        chargeableCbm: "0.409",
        buyer: "5795"
    },
    {
        invoiceNo: "RE/2136/23-24",
        invoiceDate: "01-11-2023",
        cartons: "3",
        buyerCode: "607",
        grossWeight: "99.500",
        cbm: "0.417",
        chargeableCbm: "0.591",
        buyer: "5795"
    },
    {
        invoiceNo: "RE/2137/23-24",
        invoiceDate: "25-10-2023",
        cartons: "—",
        buyerCode: "—",
        grossWeight: "—",
        cbm: "—",
        chargeableCbm: "—",
        buyer: "—"
    },
    {
        invoiceNo: "RE/2138/23-24",
        invoiceDate: "01-11-2023",
        cartons: "—",
        buyerCode: "—",
        grossWeight: "—",
        cbm: "—",
        chargeableCbm: "—",
        buyer: "—"
    },
    {
        invoiceNo: "RE/2139/23-24",
        invoiceDate: "21-10-2023",
        cartons: "—",
        buyerCode: "—",
        grossWeight: "—",
        cbm: "—",
        chargeableCbm: "—",
        buyer: "—"
    },
    {
        invoiceNo: "RE/2140/23-24",
        invoiceDate: "21-10-2023",
        cartons: "—",
        buyerCode: "—",
        grossWeight: "—",
        cbm: "—",
        chargeableCbm: "—",
        buyer: "—"
    }
];

//bind table here 
function bindInvoiceDetailsTable() {

    const $tbody = $("#tblbody_InvoiceDetails");

    if (!$tbody.length) {
        console.error("[InvoiceDetails] #tblbody_InvoiceDetails not found.");
        return;
    }

    $tbody.empty();

    $.each(invoiceDetailsData, function (index, item) {

        const row = `
            <tr>

                <td class="c">
                    <button
                        type="button"
                        class="row-btn edit-btn btn-edit-invoice"
                        data-index="${index}"
                        title="Edit"
                         onclick="EditMaster(${index})">
                        ✎
                    </button>

                    <button
                        type="button"
                        class="row-btn danger btn-delete-invoice"
                        data-index="${index}"
                        title="Delete">
                        &#128465;
                    </button>
                </td>

                <td class="c">
                    ${index + 1}
                </td>

                <td class="mono">
                    ${item.invoiceNo ?? ""}
                </td>

                <td>
                    ${item.invoiceDate ?? ""}
                </td>

                <td class="r num">
                    ${item.cartons ?? ""}
                </td>

                <td class="r num">
                    ${item.buyerCode ?? ""}
                </td>

                <td class="r num">
                    ${item.grossWeight ?? ""}
                </td>

                <td class="r num">
                    ${item.cbm ?? ""}
                </td>

                <td class="r num">
                    ${item.chargeableCbm ?? ""}
                </td>

                <td class="r num">
                    ${item.buyer ?? ""}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
//edit master 
    let selectedInvoiceIndex = -1;

function EditMaster(index) {

    index = Number(index);

    if (Number.isNaN(index)) {
        showWarning(
            "Invalid Record",
            "Invoice record index is invalid."
        );
        return;
    }

    const item = invoiceDetailsData[index];

    if (!item) {
        showWarning(
            "Record Not Found",
            "Invoice record not found."
        );
        return;
    }

    selectedInvoiceIndex = index;

    console.log("Editing Invoice:", item);

    // Modal title
    $("#addMenuModalLabel").text("Tag Invoice Bill");

        $("#txtInvoiceNo_CHABill").val(item.invoiceNo ?? "");
        $("#txtInvoiceDate_CHABill").val(item.invoiceDate ?? "");
        $("#txtCartons_CHABill").val(item.cartons ?? "");
        $("#txtQuantity_CHABill").val(item.quantity ?? "");
        $("#txtGrossWeight_CHABill").val(item.grossWeight ?? "");
        $("#txtCBM_CHABill").val(item.cbm ?? "");
        $("#txtChargeableCBM_CHABill").val(item.chargeableCbm ?? "");
        $("#txtBuyer_CHABill").val(item.buyer ?? "");

    // Open modal
    const modalElement =
        document.getElementById("addMenuModal");

    if (!modalElement) {
        console.error("#addMenuModal not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();
}//save button action perform 
$(document).on("click", "#btnSaveTagInvoiceBill", function () {

    if (selectedInvoiceIndex < 0) {
        showWarning(
            "Invalid Record",
            "No invoice record selected."
        );
        return;
    }

    const item =
        invoiceDetailsData[selectedInvoiceIndex];

    if (!item) {
        showError(
            "Error",
            "Invoice record not found."
        );
        return;
    }

    $("#txtInvoiceNo_CHABill").val(item.invoiceNo ?? "");
        $("#txtInvoiceDate_CHABill").val(item.invoiceDate ?? "");
        $("#txtCartons_CHABill").val(item.cartons ?? "");
        $("#txtQuantity_CHABill").val(item.quantity ?? "");
        $("#txtGrossWeight_CHABill").val(item.grossWeight ?? "");
        $("#txtCBM_CHABill").val(item.cbm ?? "");
        $("#txtChargeableCBM_CHABill").val(item.chargeableCbm ?? "");
        $("#txtBuyer_CHABill").val(item.buyer ?? "");

    console.log("Updated Invoice:", item);

    bindInvoiceDetailsTable();

    const modalElement =
        document.getElementById("addMenuModal");

    bootstrap.Modal
        .getInstance(modalElement)
        ?.hide();

    showSuccess(
        "Updated",
        "Invoice details updated successfully."
    );
});
