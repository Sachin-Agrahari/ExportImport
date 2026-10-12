// ==========================================
// Buyer Master - Static Dummy Data
// ==========================================

// const BuyerID = "@ViewBag.BuyerID"

let BuyerID;

var buyerMasterData = [
    {
        code: 1001,
        buyerName: "Manoj Rawat",
        aliasName: "manu",
        buyingHouse: "Richa",
        city: "New Delhi",
        state: "New Delhi",
        country: "INDIA"
    },
    {
        code: 1002,
        buyerName: "Amit Sharma",
        aliasName: "amit",
        buyingHouse: "Arvind",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA"
    },
    {
        code: 1003,
        buyerName: "Rahul Verma",
        aliasName: "rahul",
        buyingHouse: "Shahi",
        city: "Bangalore",
        state: "Karnataka",
        country: "INDIA"
    },
    {
        code: 1004,
        buyerName: "Priya Singh",
        aliasName: "priya",
        buyingHouse: "Pearl",
        city: "Jaipur",
        state: "Rajasthan",
        country: "INDIA"
    },
    {
        code: 1005,
        buyerName: "Neha Gupta",
        aliasName: "neha",
        buyingHouse: "Richa",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA"
    },
    {
        code: 1006,
        buyerName: "Vikas Kumar",
        aliasName: "vikas",
        buyingHouse: "Arvind",
        city: "Gurgaon",
        state: "Haryana",
        country: "INDIA"
    },
    {
        code: 1007,
        buyerName: "Anjali Mehta",
        aliasName: "anjali",
        buyingHouse: "Shahi",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "INDIA"
    },
    {
        code: 1008,
        buyerName: "Suresh Yadav",
        aliasName: "suresh",
        buyingHouse: "Pearl",
        city: "Kolkata",
        state: "West Bengal",
        country: "INDIA"
    },
    {
        code: 1009,
        buyerName: "Pooja Kapoor",
        aliasName: "pooja",
        buyingHouse: "Richa",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA"
    },
    {
        code: 1010,
        buyerName: "Rohit Jain",
        aliasName: "rohit",
        buyingHouse: "Arvind",
        city: "Pune",
        state: "Maharashtra",
        country: "INDIA"
    },
    {
        code: 1011,
        buyerName: "Kavita Rao",
        aliasName: "kavita",
        buyingHouse: "Shahi",
        city: "Hyderabad",
        state: "Telangana",
        country: "INDIA"
    },
    {
        code: 1012,
        buyerName: "Deepak Malhotra",
        aliasName: "deepak",
        buyingHouse: "Pearl",
        city: "Ludhiana",
        state: "Punjab",
        country: "INDIA"
    },
    {
        code: 1013,
        buyerName: "Sunita Das",
        aliasName: "sunita",
        buyingHouse: "Richa",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "INDIA"
    },
    {
        code: 1014,
        buyerName: "Nitin Agarwal",
        aliasName: "nitin",
        buyingHouse: "Arvind",
        city: "Kanpur",
        state: "Uttar Pradesh",
        country: "INDIA"
    },
    {
        code: 1015,
        buyerName: "Ritu Sharma",
        aliasName: "ritu",
        buyingHouse: "Shahi",
        city: "Surat",
        state: "Gujarat",
        country: "INDIA"
    },
    {
        code: 1016,
        buyerName: "Ajay Singh",
        aliasName: "ajay",
        buyingHouse: "Pearl",
        city: "Amritsar",
        state: "Punjab",
        country: "INDIA"
    },
    {
        code: 1017,
        buyerName: "Meena Joshi",
        aliasName: "meena",
        buyingHouse: "Richa",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "INDIA"
    }
];


// ==========================================
// Document Ready
// ==========================================

$(document).ready(function () {
    
    renderBuyerMasterTable(buyerMasterData);
     
});
 
function renderBuyerMasterTable(data) {

    var $tbody = $("#tblBuyerMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_BuyerMaster").removeClass("d-none");
        $("#tblBuyerMaster").addClass("d-none");

    }
    else {

        $("#noRecordsFound_BuyerMaster").addClass("d-none");
        $("#tblBuyerMaster").removeClass("d-none");

        $.each(data, function (i, row) {

            var tr = `<tr> 

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
                    <span class="badge btn-primary"> ${row.code} </span>
                </td>

                <td> ${row.buyerName} </td>
                <td> ${row.aliasName} </td>
                <td> ${row.buyingHouse} </td>
                <td> ${row.city} </td>
                <td> ${row.state} </td>
                <td> ${row.country} </td>
                     
            </tr>` 
            $tbody.append(tr);

        });
    }
}
 
function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});
