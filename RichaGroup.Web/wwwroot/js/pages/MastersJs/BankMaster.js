// ==========================================
// Bank Master - Static Dummy Data
// ==========================================

let BankID = null;

var bankMasterData = [

    {
        code: 1001,
        bankName: "HDFC",
        address: "delhi ..",
        accountNo: "00123456789",
        state: "New Delhi",
        city: "new delhi",
        country: "INDIA"
    },

    {
        code: 1002,
        bankName: "ICICI Bank",
        address: "MG Road",
        accountNo: "00234567890",
        state: "Maharashtra",
        city: "Mumbai",
        country: "INDIA"
    },

    {
        code: 1003,
        bankName: "State Bank of India",
        address: "Connaught Place",
        accountNo: "00345678901",
        state: "Delhi",
        city: "New Delhi",
        country: "INDIA"
    },

    {
        code: 1004,
        bankName: "Axis Bank",
        address: "Park Street",
        accountNo: "00456789012",
        state: "West Bengal",
        city: "Kolkata",
        country: "INDIA"
    },

    {
        code: 1005,
        bankName: "HSBC",
        address: "Canary Wharf",
        accountNo: "00567890123",
        state: "London",
        city: "London",
        country: "UK"
    },
    {
        code: 1001,
        bankName: "HDFC",
        address: "delhi ..",
        accountNo: "00123456789",
        state: "New Delhi",
        city: "new delhi",
        country: "INDIA"
    },

    {
        code: 1002,
        bankName: "ICICI Bank",
        address: "MG Road",
        accountNo: "00234567890",
        state: "Maharashtra",
        city: "Mumbai",
        country: "INDIA"
    },

    {
        code: 1003,
        bankName: "State Bank of India",
        address: "Connaught Place",
        accountNo: "00345678901",
        state: "Delhi",
        city: "New Delhi",
        country: "INDIA"
    },

    {
        code: 1004,
        bankName: "Axis Bank",
        address: "Park Street",
        accountNo: "00456789012",
        state: "West Bengal",
        city: "Kolkata",
        country: "INDIA"
    },

    {
        code: 1005,
        bankName: "HSBC",
        address: "Canary Wharf",
        accountNo: "00567890123",
        state: "London",
        city: "London",
        country: "UK"
    },

    {
        code: 1006,
        bankName: "Standard Chartered",
        address: "Main Road",
        accountNo: "00678901234",
        state: "Maharashtra",
        city: "Pune",
        country: "INDIA"
    },

    {
        code: 1007,
        bankName: "Kotak Mahindra Bank",
        address: "Sector 18",
        accountNo: "00789012345",
        state: "Uttar Pradesh",
        city: "Noida",
        country: "INDIA"
    },

    {
        code: 1008,
        bankName: "Punjab National Bank",
        address: "Civil Lines",
        accountNo: "00890123456",
        state: "Punjab",
        city: "Amritsar",
        country: "INDIA"
    }

];
 
$(document).ready(function () { 
    renderBankTable(bankMasterData); 
});


// ==========================================
// Render Bank Table
// ==========================================

function renderBankTable(data) {

    let $tbody = $("#tblBankMasterBody");

    $tbody.empty();


    if (!data || data.length === 0) {

        $("#tblBankMaster").addClass("d-none");

        $("#noRecordsFound_BankMaster")
            .removeClass("d-none");

        return;
    }


    $("#tblBankMaster").removeClass("d-none");

    $("#noRecordsFound_BankMaster")
        .addClass("d-none");


    $.each(data, function (index, row) {

        let tr = ` <tr>
             <td>
                  <button
                     type="button"
                     class="row-btn edit-btn"
                     title="Edit"
                     onclick="EditMatser('${index}')"
                     data-code="${index}">
                        <i class="fa-solid fa-pen-to-square"></i>
                 </button>
             </td>
             <td>
                 <span class="badge btn-primary">
                     ${row.code}
                 </span>
             </td>
             
             <td> ${row.bankName} </td>
             <td> ${row.address} </td>
             <td> ${row.accountNo} </td>
             <td> ${row.country} </td> 
             <td> ${row.state} </td>
             <td> ${row.city} </td>  
            
      
        </tr>`;

        $tbody.append(tr);

    });

}


// ==========================================
// Edit Bank
// ==========================================

function editBank(code) {

    let record = bankMasterData.find(function (item) {

        return item.code == code;

    });


    if (!record) {
        return;
    }


    BankID = code;


    $("#txtBankName").val(record.bankName);

    $("#txtAddress").val(record.address);

    $("#txtAccountNo").val(record.accountNo);

    $("#txtState").val(record.state);

    $("#txtCity").val(record.city);

    $("#ddlCountry").val(record.country);


    $("#txtBankName").focus();

}


// ==========================================
// Load Bank Details
// ==========================================

function loadBankDetails(id) {

    let record = bankMasterData.find(function (item) {

        return item.code == id;

    });


    if (!record) {
        return;
    }


    BankID = record.code;


    $("#txtBankName").val(record.bankName);

    $("#txtAddress").val(record.address);

    $("#txtAccountNo").val(record.accountNo);

    $("#txtState").val(record.state);

    $("#txtCity").val(record.city);

    $("#ddlCountry").val(record.country);

}


// ==========================================
// Save Bank
// ==========================================

function saveBank() {

    let bankName = $("#txtBankName")
        .val()
        .trim();

    let address = $("#txtAddress")
        .val()
        .trim();

    let accountNo = $("#txtAccountNo")
        .val()
        .trim();

    let state = $("#txtState")
        .val()
        .trim();

    let city = $("#txtCity")
        .val()
        .trim();

    let country = $("#ddlCountry")
        .val();


    // ======================================
    // Validation
    // ======================================

    if (bankName === "") {

        showWarning(
            "Validation",
            "Please enter Bank Name."
        );

        $("#txtBankName").focus();

        return;
    }


    if (address === "") {

        showWarning(
            "Validation",
            "Please enter Address."
        );

        $("#txtAddress").focus();

        return;
    }


    if (country === "") {

        showWarning(
            "Validation",
            "Please select Country."
        );

        $("#ddlCountry").focus();

        return;
    }


    // ======================================
    // Duplicate Check
    // ======================================

    let duplicateRecord = bankMasterData.some(function (item) {

        return item.bankName.toLowerCase() === bankName.toLowerCase()
            && item.code != BankID;

    });


    if (duplicateRecord) {

        showWarning(
            "Validation",
            "This Bank already exists."
        );

        return;
    }


    // ======================================
    // Create Record
    // ======================================

    let bankRecord = {

        code: BankID || getNextBankCode(),

        bankName: bankName,

        address: address,

        accountNo: accountNo,

        state: state,

        city: city,

        country: country

    };


    // ======================================
    // Update Existing
    // ======================================

    if (BankID) {

        let index = bankMasterData.findIndex(
            function (item) {

                return item.code == BankID;

            }
        );


        if (index !== -1) {

            bankMasterData[index] = bankRecord;

        }

    }


    // ======================================
    // Add New
    // ======================================

    else {

        bankMasterData.push(bankRecord);

    }


    // ======================================
    // Success
    // ======================================

    showSuccess(
        "Success",
        "Bank saved successfully."
    ).then(function () {

        renderBankTable(bankMasterData);

        clearBankForm();

    });

}


// ==========================================
// Clear Form
// ==========================================

function clearBankForm() {

    BankID = null;

    $("#txtBankName").val("");

    $("#txtAddress").val("");

    $("#txtAccountNo").val("");

    $("#txtState").val("");

    $("#txtCity").val("");

    $("#ddlCountry").val("");


    $("#txtSearch_BankMaster").val("");

    renderBankTable(bankMasterData);

    $("#txtBankName").focus();

}

function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});
