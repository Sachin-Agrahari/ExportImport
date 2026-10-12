$(document).ready(function () {

    initAddDBKPortMaster();

});

function initAddDBKPortMaster() {

    const editData = sessionStorage.getItem("editDBKPort");

    if (editData) {

        const row = JSON.parse(editData);

        // Fill data
        $("#txtPort_Add_DBKPortMaster").val(row.portName);
        $("#txtCityName_Add_DBKPortMaster").val(row.city);
        $("#txtShipMode_Add_DBKPortMaster").val(row.shipMode);
        $("#txtDBKAc_Add_DBKPortMaster").val(row.dbkAc);
        $("#txtPortCode_Add_DBKPortMaster").val(row.portCode);

        // Edit mode
        $("#btnSave_Add_DBKPortMaster").text("Update");

    } else {

        // Add mode
        $("#btnSave_Add_DBKPortMaster").text("Save");

        clearDBKPortForm();
    }


    // Save / Update
    $("#btnSave_Add_DBKPortMaster").on("click", function () {

        const editData = sessionStorage.getItem("editDBKPort");

        if (editData) {

            updateDBKPortMaster();

        } else {

            saveDBKPortMaster();

        }

    });


    // Back
    $("#btnBack").on("click", function () {

        sessionStorage.removeItem("editDBKPort");

        window.location.href =
            "/Master/Port_DBK_Master";

    });

}

function saveDBKPortMaster() {

    const row = {
        id: Date.now(),

        portName: $("#txtPort_Add_DBKPortMaster").val().trim(),
        city: $("#txtCityName_Add_DBKPortMaster").val().trim(),
        shipMode: $("#txtShipMode_Add_DBKPortMaster").val().trim(),
        dbkAc: $("#txtDBKAc_Add_DBKPortMaster").val().trim(),
        portCode: $("#txtPortCode_Add_DBKPortMaster").val().trim()
    };


    if (!row.portName) {

        showWarning(
            "Required",
            "Please enter Port."
        );

        return;
    }


    let data = JSON.parse(
        sessionStorage.getItem("dbkPortData")
    ) || [];


    data.push(row);


    sessionStorage.setItem(
        "dbkPortData",
        JSON.stringify(data)
    );


    showSuccess(
        "Saved Successfully",
        "DBK Port Master saved successfully."
    );


    clearDBKPortForm();
}

function updateDBKPortMaster() {

    const editData = sessionStorage.getItem("editDBKPort");

    if (!editData) return;

    const oldRow = JSON.parse(editData);

    const updatedRow = {

        portName: $("#txtPort_Add_DBKPortMaster").val().trim(),
        city: $("#txtCityName_Add_DBKPortMaster").val().trim(),
        shipMode: $("#txtShipMode_Add_DBKPortMaster").val().trim(),
        dbkAc: $("#txtDBKAc_Add_DBKPortMaster").val().trim(),
        portCode: $("#txtPortCode_Add_DBKPortMaster").val().trim()
    };


    if (!updatedRow.portName) {

        showWarning(
            "Required",
            "Please enter Port."
        );

        return;
    }


    let data = JSON.parse(
        sessionStorage.getItem("dbkPortData")
    ) || [];


    // Find old record using old port name
    const index = data.findIndex(function (x) {

        return x.portName === oldRow.portName;

    });


    if (index === -1) {

        showError(
            "Update Failed",
            "DBK Port record not found."
        );

        return;
    }


    // Update record
    data[index] = updatedRow;


    sessionStorage.setItem(
        "dbkPortData",
        JSON.stringify(data)
    );


    // Clear edit mode
    sessionStorage.removeItem("editDBKPort");


    // Button back to Save
    $("#btnSave_Add_DBKPortMaster").text("Save");


    clearDBKPortForm();


    showSuccess(
        "Updated Successfully",
        "DBK Port Master updated successfully."
    );
}
function clearDBKPortForm() {

    $("#txtPort_Add_DBKPortMaster").val("");
    $("#txtCityName_Add_DBKPortMaster").val("");
    $("#txtShipMode_Add_DBKPortMaster").val("");
    $("#txtDBKAc_Add_DBKPortMaster").val("");
    $("#txtBankAdd1_Add_DBKPortMaster").val("");
    $("#txtBankAdd2_Add_DBKPortMaster").val("");
    $("#txtBankAdd3_Add_DBKPortMaster").val("");
    $("#txtPortCode_Add_DBKPortMaster").val("");

}