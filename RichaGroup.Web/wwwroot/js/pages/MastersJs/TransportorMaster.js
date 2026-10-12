
// ==========================================
// Transportor Master - Static Dummy Data
// ==========================================

let TransportorID = null;

var transportorMasterData = [

    {
        code: 1001,
        transportorName: "Richa Transport",
        aliasName: "Richa",
        email: "richa.transport@gmail.com",
        address: "Okhla Phase 1",
        cityName: "New Delhi",
        stateName: "Delhi",
        countryName: "INDIA",
        pincode: "110020",
        contact1: "9876543210",
        contact2: "9811111111",
        telephone: "0114567890",
        fax: "0114567891",
        otherInfo: "Regular Transportor"
    },

    {
        code: 1002,
        transportorName: "Sharma Logistics",
        aliasName: "Sharma",
        email: "sharmalogistics@gmail.com",
        address: "Gurgaon Sector 18",
        cityName: "Gurgaon",
        stateName: "Haryana",
        countryName: "INDIA",
        pincode: "122015",
        contact1: "9876501234",
        contact2: "9812345678",
        telephone: "01244567890",
        fax: "01244567891",
        otherInfo: "Local Delivery"
    },

    {
        code: 1003,
        transportorName: "Agarwal Cargo Movers",
        aliasName: "Agarwal Cargo",
        email: "agarwalcargo@gmail.com",
        address: "Transport Nagar",
        cityName: "Jaipur",
        stateName: "Rajasthan",
        countryName: "INDIA",
        pincode: "302003",
        contact1: "9898989898",
        contact2: "9797979797",
        telephone: "01414567890",
        fax: "01414567891",
        otherInfo: "Cargo Transportation"
    },

    {
        code: 1004,
        transportorName: "Delhi Freight Services",
        aliasName: "DFS",
        email: "delhifreight@gmail.com",
        address: "Patparganj Industrial Area",
        cityName: "New Delhi",
        stateName: "Delhi",
        countryName: "INDIA",
        pincode: "110092",
        contact1: "9812345670",
        contact2: "9912345670",
        telephone: "01123456789",
        fax: "01123456780",
        otherInfo: "Freight Services"
    },

    {
        code: 1005,
        transportorName: "Mumbai Transport Co.",
        aliasName: "MTC",
        email: "mumbaitransport@gmail.com",
        address: "Andheri East",
        cityName: "Mumbai",
        stateName: "Maharashtra",
        countryName: "INDIA",
        pincode: "400069",
        contact1: "9820012345",
        contact2: "9820098765",
        telephone: "02245678900",
        fax: "02245678901",
        otherInfo: "Mumbai Branch"
    },

    {
        code: 1006,
        transportorName: "South India Movers",
        aliasName: "SIM",
        email: "southmovers@gmail.com",
        address: "Peenya Industrial Area",
        cityName: "Bangalore",
        stateName: "Karnataka",
        countryName: "INDIA",
        pincode: "560058",
        contact1: "9845012345",
        contact2: "9845098765",
        telephone: "08045678900",
        fax: "08045678901",
        otherInfo: "South Zone Transportation"
    },

    {
        code: 1007,
        transportorName: "Royal Roadways",
        aliasName: "Royal",
        email: "royalroadways@gmail.com",
        address: "Transport Nagar",
        cityName: "Lucknow",
        stateName: "Uttar Pradesh",
        countryName: "INDIA",
        pincode: "226012",
        contact1: "9839012345",
        contact2: "9839098765",
        telephone: "05224567890",
        fax: "05224567891",
        otherInfo: "Road Transportation"
    },

    {
        code: 1008,
        transportorName: "Eastern Cargo Movers",
        aliasName: "Eastern Cargo",
        email: "easterncargo@gmail.com",
        address: "Salt Lake",
        cityName: "Kolkata",
        stateName: "West Bengal",
        countryName: "INDIA",
        pincode: "700091",
        contact1: "9830012345",
        contact2: "9830098765",
        telephone: "03345678900",
        fax: "03345678901",
        otherInfo: "Eastern Region"
    },

    {
        code: 1009,
        transportorName: "Gujarat Transport",
        aliasName: "GTPL",
        email: "gujarattransport@gmail.com",
        address: "Naroda Industrial Area",
        cityName: "Ahmedabad",
        stateName: "Gujarat",
        countryName: "INDIA",
        pincode: "382330",
        contact1: "9825012345",
        contact2: "9825098765",
        telephone: "07945678900",
        fax: "07945678901",
        otherInfo: "Gujarat Branch"
    },

    {
        code: 1010,
        transportorName: "National Logistics",
        aliasName: "National",
        email: "nationallogistics@gmail.com",
        address: "Industrial Area Phase 2",
        cityName: "Chandigarh",
        stateName: "Punjab",
        countryName: "INDIA",
        pincode: "160002",
        contact1: "9872012345",
        contact2: "9872098765",
        telephone: "01724567890",
        fax: "01724567891",
        otherInfo: "National Logistics Services"
    }

];

$(document).ready(function () {

     
    renderTransportorMasterTable(transportorMasterData);
});

function renderTransportorMasterTable(data) {

    const $tbody = $("#tblTransportorMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#tblTransportorMaster").addClass("d-none");
        $("#noRecordsFound_TransportorMaster").removeClass("d-none");

        return;
    }

    $("#tblTransportorMaster").removeClass("d-none");
    $("#noRecordsFound_TransportorMaster").addClass("d-none");

    $.each(data, function (index, row) {

        const tr = `<tr> 
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

            <td>${row.transportorName}</td> 
            <td>${row.aliasName}</td> 
            <td>${row.email}</td> 
            <td>${row.cityName}</td> 
            <td>${row.stateName}</td> 
            <td>${row.countryName}</td> 
            <td>${row.pincode}</td> 
            <td>${row.contact1}</td> 
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