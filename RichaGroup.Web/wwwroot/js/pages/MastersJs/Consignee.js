// ==========================================
// Consignee Master - List Page
// ==========================================

var consigneeMasterData = [
    {
        code: 1001,
        consigneeName: "Akshay Consignee",
        buyerName: "Akshay",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1002,
        consigneeName: "Anil Consignee",
        buyerName: "Anil",
        currency: "EUR",
        buyingHouse: "Arvind",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        portOfDestination: "Mumbai Port"
    },
    {
        code: 1003,
        consigneeName: "Anil Thakur",
        buyerName: "Anil Thakur",
        currency: "USD",
        buyingHouse: "Shahi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Delhi Port"
    },
    {
        code: 1004,
        consigneeName: "Manoj Rawat",
        buyerName: "Manoj Rawat",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1001,
        consigneeName: "Akshay Consignee",
        buyerName: "Akshay",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1002,
        consigneeName: "Anil Consignee",
        buyerName: "Anil",
        currency: "EUR",
        buyingHouse: "Arvind",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        portOfDestination: "Mumbai Port"
    },
    {
        code: 1003,
        consigneeName: "Anil Thakur",
        buyerName: "Anil Thakur",
        currency: "USD",
        buyingHouse: "Shahi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Delhi Port"
    },
    {
        code: 1004,
        consigneeName: "Manoj Rawat",
        buyerName: "Manoj Rawat",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1001,
        consigneeName: "Akshay Consignee",
        buyerName: "Akshay",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1002,
        consigneeName: "Anil Consignee",
        buyerName: "Anil",
        currency: "EUR",
        buyingHouse: "Arvind",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        portOfDestination: "Mumbai Port"
    },
    {
        code: 1003,
        consigneeName: "Anil Thakur",
        buyerName: "Anil Thakur",
        currency: "USD",
        buyingHouse: "Shahi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Delhi Port"
    },
    {
        code: 1004,
        consigneeName: "Manoj Rawat",
        buyerName: "Manoj Rawat",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        portOfDestination: "Ber"
    },
     
    {
        code: 1004,
        consigneeName: "Manoj Rawat",
        buyerName: "Manoj Rawat",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1001,
        consigneeName: "Akshay Consignee",
        buyerName: "Akshay",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1002,
        consigneeName: "Anil Consignee",
        buyerName: "Anil",
        currency: "EUR",
        buyingHouse: "Arvind",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        portOfDestination: "Mumbai Port"
    },
    {
        code: 1003,
        consigneeName: "Anil Thakur",
        buyerName: "Anil Thakur",
        currency: "USD",
        buyingHouse: "Shahi",
        city: "Delhi",
        state: "New Delhi",
        country: "INDIA",
        portOfDestination: "Delhi Port"
    },
    {
        code: 1004,
        consigneeName: "Manoj Rawat",
        buyerName: "Manoj Rawat",
        currency: "USD",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        portOfDestination: "Ber"
    },
    {
        code: 1005,
        consigneeName: "Vaibhav Rana",
        buyerName: "Vaibhav Rana",
        currency: "GBP",
        buyingHouse: "Pearl",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        portOfDestination: "Chennai Port"
    }
];

$(document).ready(function () {

    renderConsigneeTable(consigneeMasterData);
 
});


// ==========================================
// Render Table
// ==========================================

function renderConsigneeTable(data) {

    var $tbody = $("#tblConsigneeMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_Consignee").removeClass("d-none");
        $("#tblConsigneeMaster").addClass("d-none");

        return;
    }

    $("#noRecordsFound_Consignee").addClass("d-none");
    $("#tblConsigneeMaster").removeClass("d-none");

    $.each(data, function (index, row) {

        var tr = ` <tr>
             <td>
                   <button
                      type="button"
                      class="row-btn edit-btn"
                      title="Edit"
                      onclick="EditMatser('${row.code}')"
                      data-code="${row.code}">
                       <i class="fa-solid fa-pen-to-square"></i>
                  </button>
             </td>
             <td>
                 <span class="badge btn-primary">
                     ${row.code}
                 </span>
             </td>
             
             <td>${row.consigneeName}</td>
             <td>${row.buyerName}</td>
             <td>${row.currency}</td>
             <td>${row.buyingHouse}</td>
             <td>${row.city}</td>
             <td>${row.state}</td>
             <td>${row.country}</td>
             <td>${row.portOfDestination}</td>
                 
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
