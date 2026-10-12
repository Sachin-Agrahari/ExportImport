// ==========================================
// Expenses Type Master - Static Dummy Data
// ==========================================

let ExpensesTypeID = null;

var expensesTypeData = [
    {
        code: 1001,
        expensesType: "AGENCY FEE"
    },
    {
        code: 1002,
        expensesType: "BANK CHARGES"
    },
    {
        code: 1003,
        expensesType: "CLEARING CHARGES"
    },
    {
        code: 1004,
        expensesType: "TRANSPORTATION"
    },
    {
        code: 1005,
        expensesType: "WAREHOUSE EXPENSES"
    },
    {
        code: 1006,
        expensesType: "DOCUMENTATION CHARGES"
    },
    {
        code: 1001,
        expensesType: "AGENCY FEE"
    },
    {
        code: 1002,
        expensesType: "BANK CHARGES"
    },
    {
        code: 1003,
        expensesType: "CLEARING CHARGES"
    },
    {
        code: 1004,
        expensesType: "TRANSPORTATION"
    },
    {
        code: 1005,
        expensesType: "WAREHOUSE EXPENSES"
    },
    {
        code: 1006,
        expensesType: "DOCUMENTATION CHARGES"
    },
    {
        code: 1007,
        expensesType: "INSURANCE"
    },
    {
        code: 1008,
        expensesType: "MISCELLANEOUS"
    }
];


// ==========================================
// Document Ready
// ==========================================

$(document).ready(function () {

    renderExpensesTypeTable(expensesTypeData);
 
});


// ==========================================
// Render Expenses Type Table
// ==========================================

function renderExpensesTypeTable(data) {

    let $tbody = $("#tblExpensesTypeBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#tblExpensesType").addClass("d-none");
        $("#noRecordsFound_ExpensesType").removeClass("d-none");

        return;
    }

    $("#tblExpensesType").removeClass("d-none");
    $("#noRecordsFound_ExpensesType").addClass("d-none");

    $.each(data, function (index, row) {

        let tr = ` <tr>

             <td>
                  <button
                     type="button"
                     class="row-btn edit-btn"
                     title="Edit"
                     onclick="EditMatser('${row.buyingHouseName}')"
                     data-code="${row.buyingHouseName}">
                     <i class="fa-solid fa-pen-to-square"></i>
                 </button>
             </td>

             <td>
                 <span class="badge btn-primary">
                     ${row.code}
                 </span>
             </td>

             <td>${row.expensesType}</td>
                 
        </tr> `;

        $tbody.append(tr);

    });

}


function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});


// ==========================================
// Save Expenses Type
// ==========================================

function saveExpensesType() {

    let expensesType = $("#txtExpensesType").val().trim();

    if (expensesType === "") {

        showWarning(
            "Validation",
            "Please enter Expenses Type."
        );

        $("#txtExpensesType").focus();

        return;
    }

    let duplicateRecord = expensesTypeData.some(function (item) {

        return item.expensesType.toLowerCase() === expensesType.toLowerCase()
            && item.code != ExpensesTypeID;

    });

    if (duplicateRecord) {

        showWarning(
            "Validation",
            "This Expenses Type already exists."
        );

        return;
    }

    let expensesRecord = {
        code: ExpensesTypeID || getNextExpensesTypeCode(),
        expensesType: expensesType
    };

    if (ExpensesTypeID) {

        let index = expensesTypeData.findIndex(function (item) {
            return item.code == ExpensesTypeID;
        });

        if (index !== -1) {
            expensesTypeData[index] = expensesRecord;
        }

    } else {

        expensesTypeData.push(expensesRecord);

    }

    showSuccess(
        "Success",
        "Expenses Type saved successfully."
    ).then(function () {

        renderExpensesTypeTable(expensesTypeData);

        clearExpensesTypeForm();

    });

}

 