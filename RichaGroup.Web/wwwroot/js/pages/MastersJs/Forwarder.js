// ==========================================
// Forwarder Master - Same Page Form and List
// ==========================================

let forwarderID = null;

var forwarderMasterData = [
    {
        code: 1001,
        forwarderName: "Global Logistics",
        aliasName: "GL",
        email: "global@gmail.com",
        address: "Main Road, Delhi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        pinCode: "110001",
        contact1: "9876543210",
        contact2: "",
        telephone: "011-456789",
        fax: "",
        otherInformation: "International forwarding company"
    },
    {
        code: 1002,
        forwarderName: "Fast Cargo",
        aliasName: "FC",
        email: "fastcargo@gmail.com",
        address: "Andheri East, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        pinCode: "400001",
        contact1: "9876543211",
        contact2: "",
        telephone: "022-456789",
        fax: "",
        otherInformation: ""
    },
    {
        code: 1003,
        forwarderName: "Ocean Movers",
        aliasName: "OM",
        email: "ocean@gmail.com",
        address: "Port Area, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        pinCode: "600001",
        contact1: "9876543212",
        contact2: "",
        telephone: "044-456789",
        fax: "",
        otherInformation: "Sea freight forwarding"
    },
    {
        code: 1001,
        forwarderName: "Global Logistics",
        aliasName: "GL",
        email: "global@gmail.com",
        address: "Main Road, Delhi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        pinCode: "110001",
        contact1: "9876543210",
        contact2: "",
        telephone: "011-456789",
        fax: "",
        otherInformation: "International forwarding company"
    },
    {
        code: 1002,
        forwarderName: "Fast Cargo",
        aliasName: "FC",
        email: "fastcargo@gmail.com",
        address: "Andheri East, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        pinCode: "400001",
        contact1: "9876543211",
        contact2: "",
        telephone: "022-456789",
        fax: "",
        otherInformation: ""
    },
    {
        code: 1003,
        forwarderName: "Ocean Movers",
        aliasName: "OM",
        email: "ocean@gmail.com",
        address: "Port Area, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        pinCode: "600001",
        contact1: "9876543212",
        contact2: "",
        telephone: "044-456789",
        fax: "",
        otherInformation: "Sea freight forwarding"
    },
    {
        code: 1001,
        forwarderName: "Global Logistics",
        aliasName: "GL",
        email: "global@gmail.com",
        address: "Main Road, Delhi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        pinCode: "110001",
        contact1: "9876543210",
        contact2: "",
        telephone: "011-456789",
        fax: "",
        otherInformation: "International forwarding company"
    },
    {
        code: 1002,
        forwarderName: "Fast Cargo",
        aliasName: "FC",
        email: "fastcargo@gmail.com",
        address: "Andheri East, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        pinCode: "400001",
        contact1: "9876543211",
        contact2: "",
        telephone: "022-456789",
        fax: "",
        otherInformation: ""
    },
    {
        code: 1003,
        forwarderName: "Ocean Movers",
        aliasName: "OM",
        email: "ocean@gmail.com",
        address: "Port Area, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        pinCode: "600001",
        contact1: "9876543212",
        contact2: "",
        telephone: "044-456789",
        fax: "",
        otherInformation: "Sea freight forwarding"
    },
    {
        code: 1004,
        forwarderName: "Asia Freight",
        aliasName: "AF",
        email: "asiafreight@gmail.com",
        address: "Airport Road, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        country: "INDIA",
        pinCode: "700001",
        contact1: "9876543213",
        contact2: "",
        telephone: "033-456789",
        fax: "",
        otherInformation: ""
    }
];

$(document).ready(function () {

    renderForwarderTable(forwarderMasterData);
 
});


// ==========================================
// Render Forwarder Table
// ==========================================

function renderForwarderTable(data) {

    var $tbody = $("#tblForwarderMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_Forwarder").removeClass("d-none");
        $("#tblForwarderMaster").addClass("d-none");

        return;
    }

    $("#noRecordsFound_Forwarder").addClass("d-none");
    $("#tblForwarderMaster").removeClass("d-none");

    $.each(data, function (index, row) {

        var tr = ` <tr>
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

             <td>${row.forwarderName}</td>
             <td>${row.aliasName}</td>
             <td>${row.email}</td>
             <td>${row.city}</td>
             <td>${row.state}</td>
             <td>${row.country}</td>

                 
        </tr>`;

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
// Save Forwarder
// ==========================================

function saveForwarder() {

    var forwarderName = $("#txtForwarderName").val().trim();
    var aliasName = $("#txtAliasName").val().trim();
    var email = $("#txtEmail").val().trim();
    var address = $("#txtAddress").val().trim();
    var city = $("#txtCity").val().trim();
    var state = $("#txtState").val().trim();
    var country = $("#ddlCountry").val();

    if (forwarderName === "") {
        showWarning("Validation", "Please enter Forwarder Name.");
        return;
    }

    if (aliasName === "") {
        showWarning("Validation", "Please enter Alias Name.");
        return;
    }

    if (email === "") {
        showWarning("Validation", "Please enter Email.");
        return;
    }

    if (address === "") {
        showWarning("Validation", "Please enter Address.");
        return;
    }

    if (city === "") {
        showWarning("Validation", "Please enter City.");
        return;
    }

    if (state === "") {
        showWarning("Validation", "Please enter State.");
        return;
    }

    if (country === "") {
        showWarning("Validation", "Please select Country.");
        return;
    }

    var forwarderRecord = {
        code: forwarderID || getNextForwarderCode(),

        forwarderName: forwarderName,
        aliasName: aliasName,
        email: email,
        address: address,

        city: city,
        state: state,
        country: country,

        pinCode: $("#txtPinCode").val().trim(),
        contact1: $("#txtContact1").val().trim(),
        contact2: $("#txtContact2").val().trim(),
        telephone: $("#txtTelephone").val().trim(),
        fax: $("#txtFax").val().trim(),

        otherInformation: $("#txtOtherInformation").val().trim()
    };

    if (forwarderID) {

        var index = forwarderMasterData.findIndex(function (item) {
            return item.code == forwarderID;
        });

        if (index !== -1) {
            forwarderMasterData[index] = forwarderRecord;
        }

    } else {

        forwarderMasterData.push(forwarderRecord);

    }

    renderForwarderTable(forwarderMasterData);
    clearForwarderForm();

    showSuccess(
        "Success",
        "Forwarder saved successfully."
    );

}


// ==========================================
// Generate New Code
// ==========================================

function getNextForwarderCode() {

    if (forwarderMasterData.length === 0) {
        return 1001;
    }

    return Math.max.apply(
        null,
        forwarderMasterData.map(function (item) {
            return item.code;
        })
    ) + 1;

}


// ==========================================
// Clear Form
// ==========================================

function clearForwarderForm() {

    forwarderID = null;

    $("#txtForwarderName").val("");
    $("#txtAliasName").val("");
    $("#txtEmail").val("");
    $("#txtAddress").val("");

    $("#txtCity").val("");
    $("#txtState").val("");
    $("#ddlCountry").val("");

    $("#txtPinCode").val("");
    $("#txtContact1").val("");
    $("#txtContact2").val("");
    $("#txtTelephone").val("");
    $("#txtFax").val("");

    $("#txtOtherInformation").val("");

}