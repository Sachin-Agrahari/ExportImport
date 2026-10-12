// ==========================================
// Supplier Master - Static Dummy Data
// ==========================================

let SupplierID = null;

var supplierMasterData = [

    {
        code: 1001,
        supplierName: "Global Suppliers",
        aliasName: "GS",
        country: "INDIA",
        email: "global@gmail.com",
        bankName: "HDFC Bank",
        bankAccountNo: "00123456789",
        status: "Active"
    },

    {
        code: 1002,
        supplierName: "Fast Trading Co",
        aliasName: "FTC",
        country: "INDIA",
        email: "fasttrading@gmail.com",
        bankName: "ICICI Bank",
        bankAccountNo: "00234567890",
        status: "Active"
    },

    {
        code: 1003,
        supplierName: "Ocean Exports",
        aliasName: "OE",
        country: "INDIA",
        email: "ocean@gmail.com",
        bankName: "State Bank of India",
        bankAccountNo: "00345678901",
        status: "Active"
    },

    {
        code: 1004,
        supplierName: "Asia Textiles",
        aliasName: "AT",
        country: "INDIA",
        email: "asia@gmail.com",
        bankName: "Axis Bank",
        bankAccountNo: "00456789012",
        status: "Active"
    },

    {
        code: 1005,
        supplierName: "Richa Fabrics",
        aliasName: "RF",
        country: "INDIA",
        email: "richa@gmail.com",
        bankName: "HDFC Bank",
        bankAccountNo: "00567890123",
        status: "Active"
    },

    {
        code: 1006,
        supplierName: "Modern Garments",
        aliasName: "MG",
        country: "INDIA",
        email: "modern@gmail.com",
        bankName: "ICICI Bank",
        bankAccountNo: "00678901234",
        status: "Active"
    },

    {
        code: 1007,
        supplierName: "Shree Enterprises",
        aliasName: "SE",
        country: "INDIA",
        email: "shree@gmail.com",
        bankName: "Punjab National Bank",
        bankAccountNo: "00789012345",
        status: "Inactive"
    },

    {
        code: 1008,
        supplierName: "Royal Industries",
        aliasName: "RI",
        country: "INDIA",
        email: "royal@gmail.com",
        bankName: "Bank of Baroda",
        bankAccountNo: "00890123456",
        status: "Active"
    },

    {
        code: 1009,
        supplierName: "United Traders",
        aliasName: "UT",
        country: "INDIA",
        email: "united@gmail.com",
        bankName: "Axis Bank",
        bankAccountNo: "00901234567",
        status: "Active"
    },

    {
        code: 1010,
        supplierName: "Prime Suppliers",
        aliasName: "PS",
        country: "INDIA",
        email: "prime@gmail.com",
        bankName: "HDFC Bank",
        bankAccountNo: "01012345678",
        status: "Active"
    },

    {
        code: 1011,
        supplierName: "Eastern Fabrics",
        aliasName: "EF",
        country: "INDIA",
        email: "eastern@gmail.com",
        bankName: "ICICI Bank",
        bankAccountNo: "01123456789",
        status: "Active"
    },

    {
        code: 1012,
        supplierName: "Bright Overseas",
        aliasName: "BO",
        country: "CHINA",
        email: "bright@gmail.com",
        bankName: "Bank of China",
        bankAccountNo: "01234567890",
        status: "Active"
    },

    {
        code: 1013,
        supplierName: "National Traders",
        aliasName: "NT",
        country: "INDIA",
        email: "national@gmail.com",
        bankName: "State Bank of India",
        bankAccountNo: "01345678901",
        status: "Inactive"
    },

    {
        code: 1014,
        supplierName: "Metro Suppliers",
        aliasName: "MS",
        country: "INDIA",
        email: "metro@gmail.com",
        bankName: "HDFC Bank",
        bankAccountNo: "01456789012",
        status: "Active"
    },

    {
        code: 1015,
        supplierName: "Classic Exports",
        aliasName: "CE",
        country: "INDIA",
        email: "classic@gmail.com",
        bankName: "ICICI Bank",
        bankAccountNo: "01567890123",
        status: "Active"
    },

    {
        code: 1016,
        supplierName: "Evergreen Textiles",
        aliasName: "ET",
        country: "INDIA",
        email: "evergreen@gmail.com",
        bankName: "Axis Bank",
        bankAccountNo: "01678901234",
        status: "Active"
    },
    {
        code: 1016,
        supplierName: "Evergreen Textiles",
        aliasName: "ET",
        country: "INDIA",
        email: "evergreen@gmail.com",
        bankName: "Axis Bank",
        bankAccountNo: "01678901234",
        status: "Active"
    },

    {
        code: 1020,
        supplierName: "National Garments",
        aliasName: "NG",
        country: "INDIA",
        email: "nationalgarments@gmail.com",
        bankName: "ICICI Bank",
        bankAccountNo: "02012345678",
        status: "Active"
    }

];


// ==========================================
// Document Ready
// ==========================================

$(document).ready(function () { 
    renderSupplierMasterTable(supplierMasterData);
 
});

 
function renderSupplierMasterTable(data) {

    let $tbody = $("#tblSupplierMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#tblSupplierMaster").addClass("d-none");
        $("#noRecordsFound_SupplierMaster").removeClass("d-none");

        return;
    }

    $("#tblSupplierMaster").removeClass("d-none");
    $("#noRecordsFound_SupplierMaster").addClass("d-none");

    $.each(data, function (index, row) {

        let statusClass = row.status === "Active"
            ? "text-success"
            : "text-danger";

        let tr = `
            <tr>

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

                <td>${row.supplierName}</td>

                <td>${row.aliasName}</td>

                <td>${row.country}</td>

                <td>${row.email}</td>

                <td>${row.bankName}</td>

                <td>${row.bankAccountNo}</td>

                <td>
                    <span class="${statusClass}">
                        ${row.status}
                    </span>
                </td>
  
            </tr>
        `;

        $tbody.append(tr);

    });

}


function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});
