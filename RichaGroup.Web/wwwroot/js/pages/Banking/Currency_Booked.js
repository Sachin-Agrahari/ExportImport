 
const CurrencyBookedData = [

    {
        trxNo: "4662",
        date: "02-01-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "453880"
    },

    {
        trxNo: "4663",
        date: "14-01-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "45782007"
    },

    {
        trxNo: "4664",
        date: "23-01-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "46043848"
    },

    {
        trxNo: "4665",
        date: "11-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "47572156"
    },

    {
        trxNo: "4666",
        date: "21-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "47572177"
    },

    {
        trxNo: "4667",
        date: "22-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "47984785"
    },

    {
        trxNo: "4668",
        date: "22-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "48055992"
    },

    {
        trxNo: "4669",
        date: "22-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "48056001"
    },

    {
        trxNo: "4670",
        date: "22-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "48056100"
    },

    {
        trxNo: "4671",
        date: "22-03-2024",
        exportImport: "Export",
        sellBuy: "Sell",
        bank: "BNK05",
        currency: "US$",
        amount: "250000.00",
        rate: "83.77000",
        dueDate: "16-05-2024",
        inr: "20942500.00",
        ccode: "01",
        contractNo: "48061258"
    }

];

$(document).ready(function () {

    bindCurrencyBookedData();
    $("#txtSearchCurrencyBooked").on("input", function () {
    const searchText = $(this).val().toLowerCase();

    $("#tblCurrencyBookedBody tr").each(function () {
        const rowText = $(this).text().toLowerCase();

        $(this).toggle(rowText.includes(searchText));
    });
});

});

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show');
});


function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

//bind table in data table
let currencyBookedTable = null;

function bindCurrencyBookedData() {

    const $table = $("#tblCurrencyBooked");
    const $tbody = $("#tblCurrencyBookedBody");

    if (!$table.length || !$tbody.length) {
        console.error("[CurrencyBooked] Table not found.");
        return;
    }

    // Existing DataTable destroy
    if ($.fn.DataTable.isDataTable("#tblCurrencyBooked")) {
        $table.DataTable().destroy();
    }

    $tbody.empty();

    if (!CurrencyBookedData.length) {

        $("#noRecordsFound_CurrencyBooked").removeClass("d-none");

        $tbody.html(`
            <tr>
                <td colspan="13" class="text-center">
                    No Currency Booked Data Found.
                </td>
            </tr>
        `);

        return;
    }

    $("#noRecordsFound_CurrencyBooked").addClass("d-none");

    // Bind rows
    $.each(CurrencyBookedData, function (index, item) {

        const row = `
            <tr>

                <td class="text-center">
                    <button type="button"
                            class="row-btn edit-btn"
                            title="Edit"
                            onclick="EditMatser('${item.trxNo}')"
                            data-code="${item.trxNo}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${item.trxNo || "—"}</td>

                <td>${item.date || "—"}</td>

                <td>${item.exportImport || "—"}</td>

                <td>${item.sellBuy || "—"}</td>

                <td>${item.bank || "—"}</td>

                <td>${item.currency || "—"}</td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td class="text-end">
                    ${item.rate || "—"}
                </td>

                <td>${item.dueDate || "—"}</td>

                <td class="text-end">
                    ${item.inr || "—"}
                </td>

                <td>${item.ccode || "—"}</td>

                <td>${item.contractNo || "—"}</td>

            </tr>
        `;

        $tbody.append(row);
    });

    // Initialize DataTable
    currencyBookedTable = $table.DataTable({
        paging: true,
        pageLength: 10,
        lengthChange: false,
        searching: false,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,

        language: {
            emptyTable: "No Currency Booked Data Found.",
            search: "Search:"
        }
    });
}
