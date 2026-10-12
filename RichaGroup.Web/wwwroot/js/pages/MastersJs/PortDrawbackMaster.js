$(document).ready(function () {

    showLoader("Loading Port Drawback Master...");

    initDrawbackPort();

    setTimeout(function () {
        hideLoader();
    }, 500);

});
// PAGE INITIALIZATION

function initDrawbackPort() {

    // Select2
    $("#ddlPortName, #ddlBankName, #ddlShipMode").select2({
        width: "100%",
        dropdownAutoWidth: false
    });


    // Save
    $("#btnSave").on("click", function () {

        saveDrawbackPort();

    });


    // Cancel
    $("#btnCancel").on("click", function () {

        clearDrawbackPortForm();

        showInfo(
            "Cancelled",
            "Port Drawback entry cleared."
        );

    });


    // Initial Table
   /* initDrawbackPortDataTable();*/
    bindDrawbackPortData();
}
// STATIC DATA

const drawbackPortData = [

    {
        id: 1,
        portNumber: "3",
        shipMode: "By Sea",
       portName: "MUMBAI AIR",
       city: "MUMBAI", 
       shipMode: "AIR", 
       dbkAc: "", 
       portCode: "11147705785",
        status: "Active"
    },

    {
        id: 2,
        portNumber: "34",
        shipMode: "By Air",
         portName: "MUMBAI AIR",
       city: "MUMBAI", 
       shipMode: "AIR", 
       dbkAc: "", 
       portCode: "11147705785",
        status: "Active"
    },

    {
        id: 3,
        portNumber: "35",
        shipMode: "By Road",
         portName: "MUMBAI AIR",
       city: "MUMBAI", 
       shipMode: "AIR", 
       dbkAc: "", 
       portCode: "11147705785",
        status: "Inactive"
    },

    {
        id: 4,
        portNumber: "3",
        shipMode: "By Air",
         portName: "MUMBAI AIR",
       city: "MUMBAI", 
       shipMode: "AIR", 
       dbkAc: "", 
       portCode: "11147705785",
        status: "Active"
    }

];
// DATATABLE

let drawbackPortTable = null;
// BIND TABLE

function bindDrawbackPortData() {

    const $tbody = $("#tblbodyAdvMaster");

    if (!$tbody.length) {

        console.error(
            "[PortDrawbackMaster] #tblbodyAdvMaster not found."
        );

        return;
    }


    $tbody.empty();


    $.each(drawbackPortData, function (index, item) {

        const row = `
            <tr>
            <!-- Action -->

                <td class="text-center">

                    <button type="button"
                            class="edit-btn edit-btn btn-edit-drawback-port"
                            data-id="${item.id}"
                            title="Edit">

                     
                        <i class="fa-solid fa-pen-to-square"></i>


                    </button>



                </td>

                <td  style=" text-align:right; !important">
                    ${index + 1}
                </td>

               <td  style=" text-align:right; !important">
                    ${item.portNumber}
                </td>

                <td>
                    ${item.shipMode}
                </td>
                <td>
                    ${item.portName}
                </td>
              
                <td>
                    ${item.city}
                </td>
                <td>
                    ${item.shipMode}
                </td>
                <td>
                    ${item.dbkAc}
                </td>

                <td>
                    ${item.status}
                </td>
                <td>
                    ${item.portCode}
                </td>


                
            </tr>
        `;

        $tbody.append(row);

    });

}
// INITIALIZE DATATABLE

//function initDrawbackPortDataTable() {

//    try {

//        if (drawbackPortTable) {

//            drawbackPortTable.destroy();

//            drawbackPortTable = null;

//        }


//        bindDrawbackPortData();


//        drawbackPortTable = new DataTable(
//            "#tblAdvMaster",
//            {

//                paging: true,

//                searching: true,

//                ordering: false,

//                info: false,

//                lengthChange: false,

//                pageLength: 10,

//                language: {

//                    emptyTable:
//                        "No Port Drawback records found",

//                    zeroRecords:
//                        "No matching records found",

//                    search:
//                        "Search:"

//                }

//            }
//        );

//    }
//    catch (error) {

//        console.error(
//            "[PortDrawbackMaster] DataTable initialization failed:",
//            error
//        );

//    }

//}
// SAVE

function saveDrawbackPort() {

    const portName =
        $("#ddlPortName").val();

    const bankName =
        $("#ddlBankName").val();

    const accountNumber =
        $("#txtAccountNumber").val().trim();

    const shipMode =
        $("#ddlShipMode").val();


    // Validation

    if (!portName) {

        showWarning(
            "Port Name Required",
            "Please select Port Name."
        );

        return;
    }


    if (!bankName) {

        showWarning(
            "Bank Name Required",
            "Please select Bank Name."
        );

        return;
    }


    if (!accountNumber) {

        showWarning(
            "Account Number Required",
            "Please enter Account Number."
        );

        $("#txtAccountNumber").focus();

        return;
    }


    if (!shipMode) {

        showWarning(
            "Ship Mode Required",
            "Please select Ship Mode."
        );

        return;
    }


    const saveData = {

        portName: portName,
        bankName: bankName,
        accountNumber: accountNumber,
        shipMode: shipMode

    };


    console.log(
        "[PortDrawbackMaster] Save:",
        saveData
    );


    showLoader("Saving Port Drawback Master...");


    setTimeout(function () {

        hideLoader();

        showSuccess(
            "Saved Successfully",
            "Port Drawback Master saved successfully."
        );

        clearDrawbackPortForm();

    }, 500);

}

// VIEW

$("#tblbodyAdvMaster").on(
    "click",
    ".btn-view-drawback-port",
    function () {

        showInfo(
            "Under Progress",
            "View functionality is currently under progress."
        );

    }
);
// EDIT

$("#tblbodyAdvMaster").on(
    "click",
    ".btn-edit-drawback-port",
    function () {

        const id =
            Number($(this).data("id"));

        const item =
            drawbackPortData.find(function (x) {

                return x.id === id;

            });


        if (!item) {

            showError(
                "Record Not Found",
                "Selected Port Drawback record was not found."
            );

            return;
        }


        console.log(
            "Edit Port Drawback:",
            item
        );


        $("#ddlPortName")
            .val(item.portNumber)
            .trigger("change");

        $("#ddlShipMode")
            .val(item.shipMode)
            .trigger("change");


        //showInfo(
        //    "Edit",
        //    "Selected Port Drawback record loaded."
        //);
        $('#addPortDrawbackMasterModal').modal('show')
    }
);
// DELETE

$("#tblbodyAdvMaster").on(
    "click",
    ".btn-delete-drawback-port",
    function () {

        const id =
            Number($(this).data("id"));


        const index =
            drawbackPortData.findIndex(function (x) {

                return x.id === id;

            });


        if (index === -1) {

            showError(
                "Record Not Found",
                "Selected record was not found."
            );

            return;
        }


        const item =
            drawbackPortData[index];


        showConfirm(
            "Are you sure?",
            `Do you want to delete Port ${item.portNumber}?`,
            {
                confirmButtonText: "Yes, Delete",
                cancelButtonText: "Cancel"
            }
        ).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }


            showLoader("Deleting Port Drawback...");


            setTimeout(function () {

                drawbackPortData.splice(index, 1);


                if (drawbackPortTable) {

                    drawbackPortTable.destroy();

                    drawbackPortTable = null;

                }


                bindDrawbackPortData();


                drawbackPortTable = new DataTable(
                    "#tblAdvMaster",
                    {

                        paging: true,

                        searching: true,

                        ordering: false,

                        info: false,

                        lengthChange: false,

                        pageLength: 10

                    }
                );


                hideLoader();


                showSuccess(
                    "Deleted Successfully",
                    "Port Drawback deleted successfully."
                );

            }, 500);

        });

    }
);
// CLEAR FORM

function clearDrawbackPortForm() {

    $("#ddlPortName")
        .val("")
        .trigger("change");

    $("#ddlBankName")
        .val("")
        .trigger("change");

    $("#txtAccountNumber")
        .val("");

    $("#ddlShipMode")
        .val("")
        .trigger("change");

}

// Add
$("#btnAdd").on("click", function () {
    $('#addPortDrawbackMasterModal').modal('show')
});