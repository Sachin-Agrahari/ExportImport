var dbkPortData = [
    { portName: "ALL", city: "", shipMode: "", dbkAc: "", portCode: "" },
    { portName: "AMRITSAR", city: "AMRITSAR", shipMode: "AIR", dbkAc: "", portCode: "" },
    { portName: "BALLABHGARH", city: "DELHI", shipMode: "SEA", dbkAc: "", portCode: "20208" },
    { portName: "BALLARD ESTATE", city: "MUMBAI", shipMode: "SEA", dbkAc: "", portCode: "90000145" },
    { portName: "BENGALURU INTL. AIR", city: "BENGALURU", shipMode: "AIR", dbkAc: "", portCode: "90391010000457" },
    { portName: "CHENNAI AIR", city: "CHENNAI", shipMode: "AIR", dbkAc: "", portCode: "10775187118" },
    { portName: "CHENNAI SEA", city: "CHENNAI", shipMode: "SEA", dbkAc: "", portCode: "432449068" },
    { portName: "DADRI", city: "DELHI", shipMode: "SEA", dbkAc: "", portCode: "388" },
    { portName: "DADRI APL", city: "DELHI", shipMode: "SEA", dbkAc: "", portCode: "388" },
    { portName: "DADRI ICD", city: "DELHI", shipMode: "SEA", dbkAc: "", portCode: "388" },
    { portName: "DELHI AIR", city: "DELHI", shipMode: "AIR", dbkAc: "", portCode: "3836" },
    { portName: "DRONAGIRI (MUMBAI)", city: "MUMBAI", shipMode: "SEA", dbkAc: "", portCode: "10072816384" },
    { portName: "FARIDABAD SEA", city: "DELHI", shipMode: "SEA", dbkAc: "", portCode: "" },
    { portName: "GARHI HARSARU", city: "GURUGRAM", shipMode: "SEA", dbkAc: "", portCode: "5750000072742" },
    { portName: "KOLKATA", city: "KOLKATA", shipMode: "SEA", dbkAc: "", portCode: "69819" },
    { portName: "MUMBAI AIR", city: "MUMBAI", shipMode: "AIR", dbkAc: "", portCode: "11147705785" }
];
//session stroage
var dbkPortData = JSON.parse(
    sessionStorage.getItem("dbkPortData")
) || dbkPortData;


// First time save
sessionStorage.setItem(
    "dbkPortData",
    JSON.stringify(dbkPortData)
);

// Render Table - OUTSIDE ready()
function renderDBKPortTable(data) {

    var $tbody = $("#tblDBKPortMasterBody");

    if (!$tbody.length) {
        console.error("tblDBKPortMasterBody not found");
        return;
    }

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_DBKPortMaster").removeClass("d-none");

        return;
    }

    $("#noRecordsFound_DBKPortMaster").addClass("d-none");

    $.each(data, function (i, row) {

        var tr = `
            <tr data-port="${row.portName}">
               <td class="text-center">
                    <button
                        type="button"
                         class="row-btn edit-btn btn-edit-dbk-port"
                         title="Edit"
                            data-port="${row.portName}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>${row.portName}</td>
                <td>${row.city}</td>
                <td>${row.shipMode}</td>
                <td>${row.dbkAc}</td>
                <td>${row.portCode}</td>

             
            </tr>
        `;

        $tbody.append(tr);
    });
}

// Refresh
function refreshDBKPortMaster() {

    showLoader("Refreshing...");

    try {

        $("#txtSearch_DBKPortMaster").val("");

        renderDBKPortTable(dbkPortData);

        console.log("DBK Port Master refreshed");

        setTimeout(function () {
            hideLoader();
        }, 500);

    }
    catch (err) {

        console.error(
            "[DBKPortMaster] Refresh failed:",
            err
        );

        hideLoader();
    }
}

// Document Ready
$(document).ready(function () {

    renderDBKPortTable(dbkPortData);


    // Search
    $("#txtSearch_DBKPortMaster").on("keyup", function () {

        var val = $(this)
            .val()
            .toLowerCase()
            .trim();

        var filtered = dbkPortData.filter(function (row) {

            return (
                row.portName.toLowerCase().includes(val) ||
                row.city.toLowerCase().includes(val) ||
                row.portCode.toLowerCase().includes(val)
            );

        });

        renderDBKPortTable(filtered);
    });


    // Refresh button
    $("#btnRefresh_DBKPortMaster").on("click", function () {

        showWarning(
            "Are you sure?",
            "Do you want to refresh the DBK Port Master?",

        ).then(function (result) {

            if (result.isConfirmed) {
                refreshDBKPortMaster();
            }

        });

    });


    // Edit
    $("#tblDBKPortMasterBody").on(
        "click",
        ".btn-edit-dbk-port",
        function () {

           const portName = $(this).data("port");

            const row = dbkPortData.find(function (p) {
                return p.portName === portName;
            });

            if (!row) return;

            // Selected row store
            sessionStorage.setItem(
                "editDBKPort",
                JSON.stringify(row)
            );

            $('#addMenuModal').modal('show')
        }
    );

  

});
// Add
$("#btnAdd").on("click", function () {
    /* $("#addTr6frame").attr("src", "/Master/viewTR6Challan");*/
    $('#addMenuModal').modal('show')
});