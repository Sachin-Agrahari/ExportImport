// ==========================================
// GST Credit Master - Static Dummy Data
// ==========================================

let GSTCreditID = null;

var gstCreditData = [

    {
        code: 1001,
        trxNo: "2",
        date: "2018-08-24",
        amount: "20000.00",
        remarks: "CE HFSJD",
        location: "ABC Co Pvt Ltd"
    },

    {
        code: 1002,
        trxNo: "3",
        date: "2018-08-25",
        amount: "15000.00",
        remarks: "GST Credit Entry",
        location: "Richa Global"
    },

    {
        code: 1003,
        trxNo: "4",
        date: "2018-08-27",
        amount: "35000.00",
        remarks: "Credit adjustment",
        location: "Arvind Limited"
    },

    {
        code: 1004,
        trxNo: "5",
        date: "2018-09-01",
        amount: "12000.00",
        remarks: "Monthly GST Credit",
        location: "ABC Co Pvt Ltd"
    },
    {
        code: 1001,
        trxNo: "2",
        date: "2018-08-24",
        amount: "20000.00",
        remarks: "CE HFSJD",
        location: "ABC Co Pvt Ltd"
    },

    {
        code: 1002,
        trxNo: "3",
        date: "2018-08-25",
        amount: "15000.00",
        remarks: "GST Credit Entry",
        location: "Richa Global"
    },

    {
        code: 1003,
        trxNo: "4",
        date: "2018-08-27",
        amount: "35000.00",
        remarks: "Credit adjustment",
        location: "Arvind Limited"
    },

    {
        code: 1004,
        trxNo: "5",
        date: "2018-09-01",
        amount: "12000.00",
        remarks: "Monthly GST Credit",
        location: "ABC Co Pvt Ltd"
    },

    {
        code: 1005,
        trxNo: "6",
        date: "2018-09-05",
        amount: "18500.00",
        remarks: "GST adjustment",
        location: "Richa Global"
    },

    {
        code: 1006,
        trxNo: "7",
        date: "2018-09-10",
        amount: "22500.00",
        remarks: "",
        location: "Arvind Limited"
    }

];


// ==========================================
// Document Ready
// ==========================================

$(document).ready(function () {

    GSTCreditID = getUrlParameter("GSTCreditID");

    console.log("GSTCreditID:", GSTCreditID);

    flatpickr("#txtDate", {
        dateFormat: "d-m-Y",
        allowInput: true,
        defaultDate:"today"
        
    });


    // Render Grid
    renderGSTCreditTable(gstCreditData);


    // Edit Mode
    if (GSTCreditID) {

        loadGSTCreditDetails(GSTCreditID);

    }


    // Save
    $("#btnSave").on("click", function () {

        saveGSTCredit();

    });


    // Clear
    $("#btnClear").on("click", function () {

        clearGSTCreditForm();

    });


    // Search
    $("#txtSearch_GSTCreditMaster").on("keyup", function () {

        let searchText = $(this)
            .val()
            .toLowerCase()
            .trim();


        let filteredData = gstCreditData.filter(function (item) {

            return (

                item.trxNo
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.date
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.amount
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.remarks
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.location
                    .toLowerCase()
                    .includes(searchText)

                ||

                item.code
                    .toString()
                    .includes(searchText)

            );

        });


        renderGSTCreditTable(filteredData);

    });

});


// ==========================================
// Render GST Credit Table
// ==========================================

function renderGSTCreditTable(data) {

    let $tbody = $("#tblGSTCreditMasterBody");

    $tbody.empty();


    if (!data || data.length === 0) {

        $("#tblGSTCreditMaster").addClass("d-none");

        $("#noRecordsFound_GSTCreditMaster")
            .removeClass("d-none");

        return;
    }


    $("#tblGSTCreditMaster").removeClass("d-none");

    $("#noRecordsFound_GSTCreditMaster")
        .addClass("d-none");


    $.each(data, function (index, row) {

        let tr = `
            <tr>
             <td>

                    <button type="button"
                            class="edit-btn"
                            title="Edit"
                            onclick="editGSTCredit(${row.code})">

                        <i class="fa-solid fa-pen-to-square"></i>

                    </button>

                </td>

                <td>
                    <span class="badge btn-primary">
                        ${row.code}
                    </span>
                </td>

                <td style="text-align:right !important;">
                    ${row.trxNo}
                </td>

                <td>
                    ${formatDate(row.date)}
                </td>

                <td style="text-align:right !important;">
                    ${row.amount}
                </td>

                <td>
                    ${row.remarks}
                </td>

                <td>
                    ${row.location}
                </td>

              
            </tr>
        `;

        $tbody.append(tr);

    });

}


// ==========================================
// Edit GST Credit
// ==========================================

function editGSTCredit(code) {

    let record = gstCreditData.find(function (item) {

        return item.code == code;

    });


    if (!record) {
        return;
    }


    GSTCreditID = code;


    loadGSTCreditRecord(record);


    $("#txtTrxNo").focus();
      $("#addGSTCreditMasterModal").modal("show");

}


// ==========================================
// Load GST Credit Details
// ==========================================

function loadGSTCreditDetails(id) {

    let record = gstCreditData.find(function (item) {

        return item.code == id;

    });


    if (!record) {
        return;
    }


    GSTCreditID = record.code;


    loadGSTCreditRecord(record);

}


// ==========================================
// Bind Record To Form
// ==========================================

function loadGSTCreditRecord(record) {

    $("#txtTrxNo").val(record.trxNo);

    $("#txtDate").val(record.date);

    $("#txtAmount").val(record.amount);

    $("#txtRemarks").val(record.remarks);

    $("#ddlLocation").val(record.location);

}


// ==========================================
// Save GST Credit
// ==========================================

function saveGSTCredit() {

    let trxNo = $("#txtTrxNo")
        .val()
        .trim();


    let date = $("#txtDate")
        .val();


    let amount = $("#txtAmount")
        .val();


    let remarks = $("#txtRemarks")
        .val()
        .trim();


    let location = $("#ddlLocation")
        .val();


    // ======================================
    // Validation
    // ======================================

    if (date === "") {

        showWarning(
            "Validation",
            "Please select Date."
        );

        $("#txtDate").focus();

        return;
    }


    if (amount === "") {

        showWarning(
            "Validation",
            "Please enter Amount."
        );

        $("#txtAmount").focus();

        return;
    }


    if (location === "") {

        showWarning(
            "Validation",
            "Please select Location."
        );

        $("#ddlLocation").focus();

        return;
    }


    // ======================================
    // Create Record
    // ======================================

    let gstCreditRecord = {

        code: GSTCreditID || getNextGSTCreditCode(),

        trxNo: trxNo,

        date: date,

        amount: amount,

        remarks: remarks,

        location: location

    };


    // ======================================
    // Update
    // ======================================

    if (GSTCreditID) {

        let index = gstCreditData.findIndex(
            function (item) {

                return item.code == GSTCreditID;

            }
        );


        if (index !== -1) {

            gstCreditData[index] = gstCreditRecord;

        }

    }


    // ======================================
    // Add
    // ======================================

    else {

        gstCreditData.push(gstCreditRecord);

    }


    // ======================================
    // Success
    // ======================================

    showSuccess(
        "Success",
        "GST Credit saved successfully."
    ).then(function () {

        renderGSTCreditTable(gstCreditData);

        clearGSTCreditForm();

    });

}


// ==========================================
// Clear Form
// ==========================================

function clearGSTCreditForm() {

    GSTCreditID = null;


    $("#txtTrxNo").val("");

    $("#txtDate").val("");

    $("#txtAmount").val("");

    $("#txtRemarks").val("");

    $("#ddlLocation").val("");


    $("#txtSearch_GSTCreditMaster").val("");


    renderGSTCreditTable(gstCreditData);


    $("#txtTrxNo").focus();

}


// ==========================================
// Generate New Code
// ==========================================

function getNextGSTCreditCode() {

    if (gstCreditData.length === 0) {

        return 1001;

    }


    return Math.max.apply(
        null,
        gstCreditData.map(function (item) {

            return item.code;

        })
    ) + 1;

}


// ==========================================
// Format Date
// ==========================================

function formatDate(dateValue) {

    if (!dateValue) {
        return "";
    }


    let date = new Date(dateValue);


    let day = String(
        date.getDate()
    ).padStart(2, "0");


    let month = String(
        date.getMonth() + 1
    ).padStart(2, "0");


    let year = date.getFullYear();


    return `${day}-${month}-${year}`;

}


// ==========================================
// Get URL Parameter
// ==========================================

function getUrlParameter(name) {

    let urlParams = new URLSearchParams(
        window.location.search
    );

    return urlParams.get(name);

}

$("#btnAdd").on("click", function () {
    $("#addGSTCreditMasterModal").modal("show");
})