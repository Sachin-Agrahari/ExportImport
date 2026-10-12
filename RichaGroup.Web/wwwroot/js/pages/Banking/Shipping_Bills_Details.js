$(document).ready(function() {
    $("#btnhelpentry").on("click", function() {
         $('#addMenuModal').modal('show')
    })
    //open a nodal 
   
    //bin d atbal here
    bindShippingBillEntryHelpTable();
})

//add a data for help table 
//static data 
const shippingBillEntryHelpData = [
    {
        id: 1,
        refNo: "REF-1001",
        date: "01-09-2025",
        invoiceNo: "INV-1001",
        sbNo: "SB-2001",
        sbDate: "03-09-2025",
        dbkAmount: "15,000.00",
        rosctlAmount: "8,500.00"
    },
    {
        id: 2,
        refNo: "REF-1002",
        date: "05-09-2025",
        invoiceNo: "INV-1002",
        sbNo: "SB-2002",
        sbDate: "07-09-2025",
        dbkAmount: "22,500.00",
        rosctlAmount: "12,750.00"
    },
    {
        id: 3,
        refNo: "REF-1003",
        date: "10-09-2025",
        invoiceNo: "INV-1003",
        sbNo: "SB-2003",
        sbDate: "12-09-2025",
        dbkAmount: "18,750.00",
        rosctlAmount: "9,250.00"
    },
    {
        id: 4,
        refNo: "REF-1004",
        date: "15-09-2025",
        invoiceNo: "INV-1004",
        sbNo: "SB-2004",
        sbDate: "17-09-2025",
        dbkAmount: "25,000.00",
        rosctlAmount: "14,000.00"
    },
    {
        id: 5,
        refNo: "REF-1005",
        date: "20-09-2025",
        invoiceNo: "INV-1005",
        sbNo: "SB-2005",
        sbDate: "22-09-2025",
        dbkAmount: "12,500.00",
        rosctlAmount: "7,800.00"
    }
];
//bind table here
function bindShippingBillEntryHelpTable() {

    const $tbody = $("#tblbodyShippingBillLEntryHelp");

    if (!$tbody.length) {
        console.error("tblbodyShippingBillLEntryHelp not found.");
        return;
    }

    $tbody.empty();

    if (!shippingBillEntryHelpData.length) {
        return;
    }

    $.each(shippingBillEntryHelpData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkShippingBillEntryHelp"
                           data-index="${index}">
                </td>

                <td>${item.refNo || "—"}</td>

                <td>${item.date || "—"}</td>

                <td>${item.invoiceNo || "—"}</td>

                <td>${item.sbNo || "—"}</td>

                <td>${item.sbDate || "—"}</td>

                <td class="text-end">
                    ${item.dbkAmount || "—"}
                </td>

                <td class="text-end">
                    ${item.rosctlAmount || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
$(document).on("change", ".chkShippingBillEntryHelp", function () {

    $(".chkShippingBillEntryHelp")
        .not(this)
        .prop("checked", false);

});
$(document).on("click", "#btnShippingBillEntryHelp", function () {

    bindShippingBillEntryHelpTable();

    const modalEl = document.getElementById(
        "addMenuModalHelpShippingBillEntry"
    );

    if (modalEl) {
        bootstrap.Modal
            .getOrCreateInstance(modalEl)
            .show();
    }
});