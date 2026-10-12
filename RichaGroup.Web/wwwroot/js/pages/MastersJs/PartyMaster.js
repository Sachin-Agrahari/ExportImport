// ========================================
// Party Master - Dummy Data
// ========================================

const PartyMasterData = [
    {
        Code: "P001",
        BuyerName: "ABC Fashion Pvt Ltd",
        NotifyName: "ABC Logistics",
        City: "Noida",
        State: "Uttar Pradesh",
        Country: "INDIA",
        Email: "purchase@abcfashion.com",
        Port: "Delhi Port"
    },
    {
        Code: "P002",
        BuyerName: "Global Garments Ltd",
        NotifyName: "Global Logistics",
        City: "Gurugram",
        State: "Haryana",
        Country: "INDIA",
        Email: "buying@globalgarments.com",
        Port: "Delhi Port"
    },
    {
        Code: "P003",
        BuyerName: "Fashion Hub Inc",
        NotifyName: "Fashion Hub Shipping",
        City: "Mumbai",
        State: "Maharashtra",
        Country: "INDIA",
        Email: "orders@fashionhub.com",
        Port: "Mumbai Port"
    },
    {
        Code: "P004",
        BuyerName: "Urban Wear International",
        NotifyName: "UWI Logistics",
        City: "Bengaluru",
        State: "Karnataka",
        Country: "INDIA",
        Email: "purchase@urbanwear.com",
        Port: "Chennai Port"
    },
    {
        Code: "P005",
        BuyerName: "Elite Clothing Co",
        NotifyName: "Elite Shipping",
        City: "Chennai",
        State: "Tamil Nadu",
        Country: "INDIA",
        Email: "procurement@eliteclothing.com",
        Port: "Chennai Port"
    },
    {
        Code: "P006",
        BuyerName: "Style World Ltd",
        NotifyName: "Style World Logistics",
        City: "Kolkata",
        State: "West Bengal",
        Country: "INDIA",
        Email: "purchase@styleworld.com",
        Port: "Mumbai Port"
    },
    {
        Code: "P007",
        BuyerName: "NextGen Apparel",
        NotifyName: "NextGen Shipping",
        City: "Jaipur",
        State: "Rajasthan",
        Country: "INDIA",
        Email: "orders@nextgenapparel.com",
        Port: "Delhi Port"
    },
    {
        Code: "P008",
        BuyerName: "Premium Textiles Ltd",
        NotifyName: "Premium Logistics",
        City: "Surat",
        State: "Gujarat",
        Country: "INDIA",
        Email: "buying@premiumtextiles.com",
        Port: "Mumbai Port"
    },
    {
        Code: "P009",
        BuyerName: "Fashion First Australia",
        NotifyName: "FF Australia Logistics",
        City: "Sydney",
        State: "New South Wales",
        Country: "AUSTRALIA",
        Email: "purchase@fashionfirst.com.au",
        Port: "Mumbai Port"
    },
    {
        Code: "P010",
        BuyerName: "Oceanic Fashion House",
        NotifyName: "Oceanic Shipping",
        City: "Melbourne",
        State: "Victoria",
        Country: "AUSTRALIA",
        Email: "orders@oceanicfashion.com",
        Port: "Chennai Port"
    },
    {
        Code: "P011",
        BuyerName: "Classic Wear Corporation",
        NotifyName: "Classic Logistics",
        City: "Ahmedabad",
        State: "Gujarat",
        Country: "INDIA",
        Email: "purchase@classicwear.com",
        Port: "Mumbai Port"
    },
    {
        Code: "P012",
        BuyerName: "Royal Apparel Group",
        NotifyName: "Royal Shipping",
        City: "Ludhiana",
        State: "Punjab",
        Country: "INDIA",
        Email: "buying@royalapparel.com",
        Port: "Delhi Port"
    },
    {
        Code: "P013",
        BuyerName: "Trend Makers Ltd",
        NotifyName: "Trend Makers Logistics",
        City: "Hyderabad",
        State: "Telangana",
        Country: "INDIA",
        Email: "procurement@trendmakers.com",
        Port: "Chennai Port"
    },
    {
        Code: "P014",
        BuyerName: "Global Style Australia",
        NotifyName: "Global Style Shipping",
        City: "Brisbane",
        State: "Queensland",
        Country: "AUSTRALIA",
        Email: "orders@globalstyle.com.au",
        Port: "Mumbai Port"
    },
    {
        Code: "P015",
        BuyerName: "Modern Fashion House",
        NotifyName: "Modern Fashion Logistics",
        City: "Delhi",
        State: "Delhi",
        Country: "INDIA",
        Email: "purchase@modernfashion.com",
        Port: "Delhi Port"
    }
];
 
$(document).ready(function () {
 
    bindPartyMasterData(PartyMasterData);

});
 
function bindPartyMasterData(data) {

    const $tbody = $("#tblPartyMasterBody");

    if (!$tbody.length) {
        console.error("tblPartyMasterBody not found");
        return;
    }

    $tbody.empty();

    if (!data || data.length === 0) {
        $("#noRecordsFound").removeClass("d-none");
        return;
    }

    $("#noRecordsFound").addClass("d-none");

    $.each(data, function (i, row) {

        const tr = ` <tr data-code="${row.Code}"> 
            <td class="text-center"> 
                <button
                    type="button"
                    class="row-btn edit-btn"
                    title="Edit"
                    onclick="EditPartyMaster('${row.Code}')"
                    data-code="${row.Code}">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
            <td>${row.Code}</td>
            <td>${row.BuyerName}</td>
            <td>${row.NotifyName}</td>
            <td>${row.City}</td>
            <td>${row.State}</td>
            <td>${row.Country}</td>
            <td>${row.Email}</td>
            <td>${row.Port}</td>
        </tr> `;

        $tbody.append(tr);
    });
}

function EditPartyMaster(code) {

    const party = PartyMasterData.find(x => x.Code === code);

    if (!party) {
        console.error("Party not found:", code);
        return;
    }

    $("#txtName").val(party.BuyerName);
    $("#txtAliasName").val(party.NotifyName);
    $("#txtCity").val(party.City);
    $("#txtState").val(party.State);
    $("#ddlCountry").val(party.Country);
    $("#txtEmail").val(party.Email);
    $("#ddlPortOfDestination").val(party.Port);

    $("#addMenuModal").modal("show");
}

$("#btnAdd").on("click", function () {

    $("#txtName").val("");
    $("#txtAliasName").val("");
    $("#ddlBuyer").val("");
    $("#ddlBuyingHouse").val("");
    $("#ddlCurrency").val("");
    $("#txtGSTNo").val("");
    $("#ddlPortOfDestination").val("");
    $("#txtAddress1").val("");
    $("#txtAddress2").val("");
    $("#txtAddress3").val("");
    $("#txtAddress4").val("");
    $("#ddlCountry").val("");
    $("#txtState").val("");
    $("#txtCity").val("");
    $("#txtPinCode").val("");
    $("#txtContact1").val("");
    $("#txtContact2").val("");
    $("#txtTelephone").val("");
    $("#txtFax").val("");
    $("#txtEmail").val("");
    $("#txtPaymentDays").val("");
    $("#txtBOEPaymentDays").val("");
    $("#txtBankAccountNo").val("");
    $("#txtBankName").val("");
    $("#txtSwiftCode").val("");
    $("#txtIBANNo").val("");
    $("#txtBankAddress").val("");
    $("#txtOtherInformation").val("");
    $("#chkDisplayStatus").prop("checked", true);

    $("#addMenuModal").modal("show");
});


$(document).on('click', '.party-type-btn', function () {

    var $button = $(this);
    var value = $button.data('view'); 
    var $checkbox = $('.screen-switch input[type="checkbox"][value="' + value + '"]'); 
    $checkbox.prop('checked', !$checkbox.prop('checked')); 
    $button.toggleClass('on', $checkbox.prop('checked')); 
});

$('#btnDiscountDtls').on('click',function(){
    $('#DiscountDetailModal').modal('show')
})

$('#btnExpenssSetup').on('click',function(){
    $('#ExpenssSetup').modal('show')
})

$('#btnAddWhareHouse').on('click',function(){
    $('#AddWarehouseModal').modal('show')
})

$('input[type="checkbox"][name="buyer"]').on('change',function(){
    $('#btnDiscountDtls').toggleClass('d-none')
})

$('input[type="checkbox"][name="Wharehouse"]').on('change',function(){
    $('#btnAddWhareHouse').toggleClass('d-none')
})