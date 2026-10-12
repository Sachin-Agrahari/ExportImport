 
// ==========================================
// Port Master - Static Dummy Data
// ==========================================

let PortID = null;

var portMasterData = [

    {
       
        portCode: "INMUN",
        portName: "Mundra Port",
        cityName: "Mundra",
        stateName: "Gujarat",
        countryName: "INDIA",
        pincode: "370421"
    },

    {
       
        portCode: "INNSA",
        portName: "Nhava Sheva Port",
        cityName: "Navi Mumbai",
        stateName: "Maharashtra",
        countryName: "INDIA",
        pincode: "400707"
    },

    {
        
        portCode: "INMAA",
        portName: "Chennai Port",
        cityName: "Chennai",
        stateName: "Tamil Nadu",
        countryName: "INDIA",
        pincode: "600001"
    },

    {
        
        portCode: "INCCU",
        portName: "Kolkata Port",
        cityName: "Kolkata",
        stateName: "West Bengal",
        countryName: "INDIA",
        pincode: "700001"
    },

    {
        
        portCode: "INDEL",
        portName: "Delhi ICD",
        cityName: "New Delhi",
        stateName: "Delhi",
        countryName: "INDIA",
        pincode: "110001"
    },

    {
        
        portCode: "INPAV",
        portName: "Pipavav Port",
        cityName: "Pipavav",
        stateName: "Gujarat",
        countryName: "INDIA",
        pincode: "365560"
    },
    {
        
        portCode: "INMAA",
        portName: "Chennai Port",
        cityName: "Chennai",
        stateName: "Tamil Nadu",
        countryName: "INDIA",
        pincode: "600001"
    },

    {
        
        portCode: "INPAV",
        portName: "Pipavav Port",
        cityName: "Pipavav",
        stateName: "Gujarat",
        countryName: "INDIA",
        pincode: "365560"
    },
 
    {
        
        portCode: "USLAX",
        portName: "Los Angeles Port",
        cityName: "Los Angeles",
        stateName: "California",
        countryName: "USA",
        pincode: "90731"
    },
    {
        
        portCode: "INDEL",
        portName: "Delhi ICD",
        cityName: "New Delhi",
        stateName: "Delhi",
        countryName: "INDIA",
        pincode: "110001"
    },

    {
        
        portCode: "INPAV",
        portName: "Pipavav Port",
        cityName: "Pipavav",
        stateName: "Gujarat",
        countryName: "INDIA",
        pincode: "365560"
    },

    {
      
        portCode: "INVTZ",
        portName: "Visakhapatnam Port",
        cityName: "Visakhapatnam",
        stateName: "Andhra Pradesh",
        countryName: "INDIA",
        pincode: "530035"
    },

    {
      
        portCode: "USLAX",
        portName: "Los Angeles Port",
        cityName: "Los Angeles",
        stateName: "California",
        countryName: "USA",
        pincode: "90731"
    },

    {
       
        portCode: "CNSHA",
        portName: "Shanghai Port",
        cityName: "Shanghai",
        stateName: "Shanghai",
        countryName: "CHINA",
        pincode: "200000"
    },

    {
       
        portCode: "LKCMB",
        portName: "Colombo Port",
        cityName: "Colombo",
        stateName: "Western",
        countryName: "Sri Lanka",
        pincode: "00100"
    }

];


// ==========================================
// Document Ready
// ==========================================

$(document).ready(function () { 
    renderPortMasterTable(portMasterData); 
});

 
// ==========================================
// Render Port Master Table
// ==========================================

function renderPortMasterTable(data) {

    let $tbody = $("#tblPortMasterBody");

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#tblPortMaster").addClass("d-none");
        $("#noRecordsFound_PortMaster").removeClass("d-none");

        return;

    }

    $("#tblPortMaster").removeClass("d-none");
    $("#noRecordsFound_PortMaster").addClass("d-none");


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

            
             <td>${row.portCode}</td> 
             <td>${row.portName}</td> 
             <td>${row.cityName}</td> 
             <td>${row.stateName}</td> 
             <td>${row.countryName}</td> 
             <td>${row.pincode}</td> 

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
// Save Port Master
// ==========================================

function savePortMaster() {

    const portCode = $("#txtPortCode").val().trim();

    const portName = $("#txtPortName").val().trim();

    const cityName = $("#txtCityName").val().trim();

    const countryName = $("#ddlCountryName").val();

    const stateName = $("#ddlStateName").val();

    const pincode = $("#txtPincode").val().trim();


    // Validation

    if (!portName) {

        showWarning(
            "Port Name Required",
            "Please enter Port Name."
        );

        $("#txtPortName").focus();

        return;

    }


    if (!cityName) {

        showWarning(
            "City Name Required",
            "Please enter City Name."
        );

        $("#txtCityName").focus();

        return;

    }


    if (!countryName) {

        showWarning(
            "Country Required",
            "Please select Country Name."
        );

        return;

    }


    if (!stateName) {

        showWarning(
            "State Required",
            "Please select State Name."
        );

        return;

    }


    const portRecord = {

        code: PortID || getNextPortCode(),

        portCode: portCode,

        portName: portName,

        cityName: cityName,

        stateName: stateName,

        countryName: countryName,

        pincode: pincode

    };


    if (PortID) {

        let index = portMasterData.findIndex(function (item) {

            return item.code == PortID;

        });

        if (index !== -1) {

            portMasterData[index] = portRecord;

        }

    }
    else {

        portMasterData.push(portRecord);

    }


    console.log("Port Master Save:", portRecord);


    showSuccess(
        "Saved Successfully",
        "Port Master saved successfully."
    ).then(function () {

        renderPortMasterTable(portMasterData);

        clearPortMasterForm();

    });

}

 