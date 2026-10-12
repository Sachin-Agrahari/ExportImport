 
const CurrencyMasterData = [

    {
        currencyID: 1,
        name: "Indian Rupee"
    },

    {
        currencyID: 2,
        name: "US Dollar"
    },

    {
        currencyID: 3,
        name: "Euro"
    },

    {
        currencyID: 4,
        name: "British Pound"
    },
    {
        currencyID: 1,
        name: "Indian Rupee"
    },

    {
        currencyID: 2,
        name: "US Dollar"
    },

    {
        currencyID: 3,
        name: "Euro"
    },

    {
        currencyID: 4,
        name: "British Pound"
    },

    {
        currencyID: 5,
        name: "Japanese Yen"
    }

];

// DataTable Variable
let CurrencyMasterTable = null;


$(document).ready(function () {

    bindCurrencyMasterData(CurrencyMasterData);

});


function bindCurrencyMasterData(data) {

    var $tbody = $("#tblBodyCurrencyMaster");

    if (!$tbody.length) {
        console.error("tblBodyCurrencyMaster not found");
        return;
    }

    $tbody.empty();

    $.each(data, function (i, row) {

        var tr = `
            <tr data-id="${row.currencyID}">
                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditCurrency(${row.currencyID})"
                        data-id="${row.currencyID}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${row.name}</td>
            </tr>
        `;

        $tbody.append(tr);
    });
}


function EditCurrency(currencyID) {

    var currency = CurrencyMasterData.find(
        x => x.currencyID === currencyID
    );

    if (!currency) {
        return;
    }

    $("#txtCurrencyName").val(currency.name);

    $("#addMenuModal").modal("show");
}


$("#btnAdd").on("click", function () {

    $("#txtCurrencyName").val("");

    $("#addMenuModal").modal("show");

});