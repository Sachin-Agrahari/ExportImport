
let NotifyID = null;

var notifyMasterData = [

    {
        code: 1001,
        buyerName: "Manoj Rawat",
        notifyName: "Global Notify Services",
        city: "New Delhi",
        state: "New Delhi",
        country: "INDIA",
        email: "globalnotify@gmail.com",
        port: "MUNDRA",
        displayStatus: true
    },

    {
        code: 1002,
        buyerName: "Amit Sharma",
        notifyName: "ABC Logistics",
        city: "Mumbai",
        state: "Maharashtra",
        country: "INDIA",
        email: "abclogistics@gmail.com",
        port: "NHAVA SHEVA",
        displayStatus: true
    },

    {
        code: 1003,
        buyerName: "Rahul Verma",
        notifyName: "Ocean Notification",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        email: "oceannotify@gmail.com",
        port: "CHENNAI",
        displayStatus: true
    },

    {
        code: 1004,
        buyerName: "Priya Singh",
        notifyName: "Pearl Shipping",
        city: "Jaipur",
        state: "Rajasthan",
        country: "INDIA",
        email: "pearlshipping@gmail.com",
        port: "MUNDRA",
        displayStatus: false
    },

    {
        code: 1005,
        buyerName: "Neha Gupta",
        notifyName: "Richa Associates",
        city: "Noida",
        state: "Uttar Pradesh",
        country: "INDIA",
        email: "richaassociates@gmail.com",
        port: "DELHI ICD",
        displayStatus: true
    },

    {
        code: 1006,
        buyerName: "Vikas Kumar",
        notifyName: "Fast Cargo Services",
        city: "Gurgaon",
        state: "Haryana",
        country: "INDIA",
        email: "fastcargo@gmail.com",
        port: "NHAVA SHEVA",
        displayStatus: true
    },

    {
        code: 1007,
        buyerName: "Anjali Mehta",
        notifyName: "Shahi Export Notify",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "INDIA",
        email: "shahiexport@gmail.com",
        port: "MUNDRA",
        displayStatus: true
    },

    {
        code: 1008,
        buyerName: "Suresh Yadav",
        notifyName: "Eastern Traders",
        city: "Kolkata",
        state: "West Bengal",
        country: "INDIA",
        email: "easterntraders@gmail.com",
        port: "KOLKATA",
        displayStatus: false
    },

    {
        code: 1009,
        buyerName: "Pooja Kapoor",
        notifyName: "South India Logistics",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "INDIA",
        email: "southlogistics@gmail.com",
        port: "CHENNAI",
        displayStatus: true
    },

    {
        code: 1010,
        buyerName: "Rohit Jain",
        notifyName: "Pioneer Shipping",
        city: "Pune",
        state: "Maharashtra",
        country: "INDIA",
        email: "pioneershipping@gmail.com",
        port: "NHAVA SHEVA",
        displayStatus: true
    },

    {
        code: 1011,
        buyerName: "Kavita Rao",
        notifyName: "Hyderabad Cargo",
        city: "Hyderabad",
        state: "Telangana",
        country: "INDIA",
        email: "hyderabadcargo@gmail.com",
        port: "CHENNAI",
        displayStatus: true
    },

    {
        code: 1012,
        buyerName: "Deepak Malhotra",
        notifyName: "Punjab Freight",
        city: "Ludhiana",
        state: "Punjab",
        country: "INDIA",
        email: "punjabfreight@gmail.com",
        port: "MUNDRA",
        displayStatus: false
    },

    {
        code: 1013,
        buyerName: "Sunita Das",
        notifyName: "Eastern Exporters",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "INDIA",
        email: "easternexporters@gmail.com",
        port: "KOLKATA",
        displayStatus: true
    },

    {
        code: 1014,
        buyerName: "Nitin Agarwal",
        notifyName: "Kanpur Trading",
        city: "Kanpur",
        state: "Uttar Pradesh",
        country: "INDIA",
        email: "kanpurtrading@gmail.com",
        port: "DELHI ICD",
        displayStatus: true
    },

    {
        code: 1015,
        buyerName: "Ritu Sharma",
        notifyName: "Surat Textile Notify",
        city: "Surat",
        state: "Gujarat",
        country: "INDIA",
        email: "surattextile@gmail.com",
        port: "MUNDRA",
        displayStatus: true
    },

    {
        code: 1016,
        buyerName: "Ajay Singh",
        notifyName: "Amritsar Cargo",
        city: "Amritsar",
        state: "Punjab",
        country: "INDIA",
        email: "amritsarcargo@gmail.com",
        port: "MUNDRA",
        displayStatus: false
    },

    {
        code: 1017,
        buyerName: "Meena Joshi",
        notifyName: "Indore Logistics",
        city: "Indore",
        state: "Madhya Pradesh",
        country: "INDIA",
        email: "indorelogistics@gmail.com",
        port: "NHAVA SHEVA",
        displayStatus: true
    },

    {
        code: 1018,
        buyerName: "Sanjay Gupta",
        notifyName: "National Notify House",
        city: "Bangalore",
        state: "Karnataka",
        country: "INDIA",
        email: "nationalnotify@gmail.com",
        port: "CHENNAI",
        displayStatus: true
    }

];


$(document).ready(function () {
 
    renderNotifyMasterTable(notifyMasterData);

});
function initNotifyMaster() {

    try {

        // Select2
        $("#ddlBuyerName, #ddlCurrency, #ddlBuyingHouse, #ddlCountry, #ddlPortDestination").select2({
            width: "100%",
            dropdownAutoWidth: false
        });

        // Save
        $("#btnSave").on("click", function () {

            const buyerName = $("#ddlBuyerName").val();
            const notifyName = $("#txtNotifyName").val().trim();
            const currency = $("#ddlCurrency").val();
            const country = $("#ddlCountry").val();
            const portDestination = $("#ddlPortDestination").val();

            if (!buyerName) {

                showWarning(
                    "Buyer Name Required",
                    "Please select Buyer Name."
                );

                return;
            }

            if (!notifyName) {

                showWarning(
                    "Notify Name Required",
                    "Please enter Notify Name."
                );

                return;
            }

            if (!currency) {

                showWarning(
                    "Currency Required",
                    "Please select Currency."
                );

                return;
            }

            if (!country) {

                showWarning(
                    "Country Required",
                    "Please select Country."
                );

                return;
            }

            if (!portDestination) {

                showWarning(
                    "Port Required",
                    "Please select Port of Destination."
                );

                return;
            }


            const notifyData = {

                buyerName: buyerName,
                notifyName: notifyName,

                address1: $("#txtAddress1").val().trim(),
                address2: $("#txtAddress2").val().trim(),
                address3: $("#txtAddress3").val().trim(),
                address4: $("#txtAddress4").val().trim(),

                paymentDays: $("#txtPaymentDays").val().trim(),

                currency: currency,
                buyingHouse: $("#ddlBuyingHouse").val(),

                city: $("#txtCity").val().trim(),
                state: $("#txtState").val().trim(),
                country: country,

                contact1: $("#txtContact1").val().trim(),
                contact2: $("#txtContact2").val().trim(),

                pincode: $("#txtPincode").val().trim(),
                telephone: $("#txtTelephone").val().trim(),

                email: $("#txtEmail").val().trim(),
                fax: $("#txtFax").val().trim(),

                portDestination: portDestination,

                otherInfo: $("#txtOtherInfo").val().trim(),

                displayStatus: $("#chkDisplayStatus").is(":checked")
            };


            console.log("Notify Master Save:", notifyData);


            showLoader("Saving Notify Master...");

            setTimeout(function () {

                hideLoader();

                showSuccess(
                    "Saved Successfully",
                    "Notify Master saved successfully."
                );

            }, 500);

        });


        // Page initialization complete
        hideLoader();

    }
    catch (error) {

        console.error(
            "[NotifyMaster] Initialization failed:",
            error
        );

        hideLoader();

        showError(
            "Load Failed",
            "Unable to load Notify Master."
        );
    }

}

// ==========================================
// Render Notify Master Table
// ==========================================

function renderNotifyMasterTable(data) {

    let $tbody = $("#tblNotifyMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#tblNotifyMaster").addClass("d-none");
        $("#noRecordsFound_NotifyMaster").removeClass("d-none"); 
        return; 
    }

    $("#tblNotifyMaster").removeClass("d-none");
    $("#noRecordsFound_NotifyMaster").addClass("d-none");

    $.each(data, function (index, row) {
         
        let tr = `<tr> 
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
            <td>${row.buyerName}</td> 
            <td>${row.notifyName}</td> 
            <td>${row.city}</td> 
            <td>${row.state}</td> 
            <td>${row.country}</td> 
            <td>${row.email}</td> 
            <td>${row.port}</td>  
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
