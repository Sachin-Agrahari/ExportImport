$(document).ready(function () {

    initRosctlMaster();

});

// Page Initialization

function initRosctlMaster() {

    // Refresh
    $("#btnRefresh_RosctlMaster").on("click", function () {

        showWarning(
            "Are you sure?",
             "Do you want to refresh the Rosctl Master?",
          
        ).then(function (result) {

            if (result.isConfirmed) {
                refreshRosctlMaster();
            }

        });

    });


    // Add
    $("#btnAdd_RosctlMaster").on("click", function () {
        addRosctlMaster();
    });


    // Initial load
   /* initRosctlMasterDataTable();*/
    bindRosctlMasterData();
}

// Static Data

const RosctlMasterData = [
    {
        code: "1",
        slno: "610101",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Cotton Knitted Garment",
        unit_s: "Piece",
        rt_pc_s: "3.60",
        capunit_s: "68.20",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.45",
        capunit_c: "46.40",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "2",
        slno: "610102",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Knitted Apparel",
        unit_s: "Piece",
        rt_pc_s: "3.13",
        capunit_s: "36.20",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.28",
        capunit_c: "26.40",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "3",
        slno: "610103",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Textile Garment",
        unit_s: "Piece",
        rt_pc_s: "2.65",
        capunit_s: "31.10",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.10",
        capunit_c: "24.60",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "4",
        slno: "610104",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Other Knitted Garment",
        unit_s: "Piece",
        rt_pc_s: "2.90",
        capunit_s: "55.00",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.00",
        capunit_c: "0.00",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "5",
        slno: "610202",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Cotton Knitted Apparel",
        unit_s: "Piece",
        rt_pc_s: "2.78",
        capunit_s: "32.10",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.05",
        capunit_c: "23.70",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "6",
        slno: "610203",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Other Textile Apparel",
        unit_s: "Piece",
        rt_pc_s: "2.65",
        capunit_s: "31.10",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.10",
        capunit_c: "24.60",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "7",
        slno: "61030101",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Cotton Garment",
        unit_s: "Piece",
        rt_pc_s: "3.60",
        capunit_s: "105.70",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.45",
        capunit_c: "71.90",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "8",
        slno: "61030102",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Knitted Cotton Apparel",
        unit_s: "Piece",
        rt_pc_s: "3.13",
        capunit_s: "64.20",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.28",
        capunit_c: "46.80",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "9",
        slno: "61030103",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Textile Apparel",
        unit_s: "Piece",
        rt_pc_s: "2.65",
        capunit_s: "54.60",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.10",
        capunit_c: "43.30",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    },
    {
        code: "10",
        slno: "61040101",
        fromDate: "07-03-2019",
        toDate: "-",
        description: "Other Textile Product",
        unit_s: "Piece",
        rt_pc_s: "2.90",
        capunit_s: "0.00",
        unit_as: "Piece",
        rt_pc_as: "1.37",
        unit_c: "Piece",
        rt_pc_c: "2.00",
        capunit_c: "0.00",
        unit_ac: "Piece",
        rt_pc_ac: "1.08",
        capunit_ac: "0.00"
    }
];


// DataTable Variable

let RosctlMasterTable = null;

function bindRosctlMasterData() {
    const $tbody = $("#tblbodyRosctlMaster");

    if (!$tbody.length) {
        console.error("[RosctlMaster] #tblbodyRosctlMaster not found.");
        return;
    }

    $tbody.empty();

    $.each(RosctlMasterData, function (index, item) {
        const row = `
            <tr data-code="${item.code}">

                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn btn-edit-rosctl"
                        data-code="${item.code}"
                        title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${item.code}</td>
                <td>${item.slno}</td>
                <td>${item.fromDate}</td>
                <td>${item.toDate}</td>
                <td>${item.description}</td>

                <td>${item.unit_s}</td>
                <td class="text-end">${item.rt_pc_s}</td>
                <td class="text-end">${item.capunit_s}</td>
                <td>${item.unit_as}</td>
                <td class="text-end">${item.rt_pc_as}</td>

                <td>${item.unit_c}</td>
                <td class="text-end">${item.rt_pc_c}</td>
                <td class="text-end">${item.capunit_c}</td>
                <td>${item.unit_ac}</td>
                <td class="text-end">${item.rt_pc_ac}</td>

            </tr>
        `;

        $tbody.append(row);
    });
}

// DataTable Initialization
//function initRosctlMasterDataTable() {

//    showLoader("Loading Rosctl Master...");

//    try {

//        if (RosctlMasterTable) {

//            RosctlMasterTable.destroy();

//            RosctlMasterTable = null;
//        }

//        bindRosctlMasterData();

//        RosctlMasterTable = new DataTable(
//            "#tblRosctlMaster",
//            {
//                paging: true,
//                searching: false,
//                ordering: false,
//                info: false,
//                lengthChange: false,
//                pageLength: 10,
//                scrollX: true,

//                language: {
//                    emptyTable: "No Rosctl Master records found",
//                    zeroRecords: "No matching records found",
//                    search: "Search:"
//                }
//            }
//        );

//        hideLoader();

//    }
//    catch (error) {

//        console.error(
//            "[RosctlMaster] DataTable initialization failed:",
//            error
//        );

//        hideLoader();

//    }

//}

// Refresh
function refreshRosctlMaster() {

    showLoader("Refreshing Rosctl Master...");

    try {

        if (RosctlMasterTable) {

            RosctlMasterTable.destroy();

            RosctlMasterTable = null;
        }

        bindRosctlMasterData();

        RosctlMasterTable = new DataTable(
            "#tblRosctlMaster",
            {
                paging: true,
                searching: false,
                ordering: false,
                info: false,
                lengthChange: false,
                pageLength: 10,
                scrollX: true,

                language: {
                    emptyTable: "No Rosctl Master records found",
                    zeroRecords: "No matching records found",
                    search: "Search:"
                }
            }
        );

        setTimeout(function () {
            hideLoader();
        }, 500);

    }
    catch (error) {

        console.error(
            "[RosctlMaster] Refresh failed:",
            error
        );

        hideLoader();

    }

}

// Add

function addRosctlMaster() {

    const item = {

        code: $("#txtCode_RosctlMaster").val().trim(),

        slno: $("#txtSINo_RosctlMaster").val().trim(),

        unit_s: $("#txtUnit_S_RosctlMaster").val().trim(),

        rt_pc_s: $("#txtRt_Pc_S_RosctlMaster").val().trim(),

        capunit_s: $("#txtCapunit_S_RosctlMaster").val().trim(),

        unit_c: $("#txtUnit_C_RosctlMaster").val().trim(),

        rt_pc_c: $("#txtRt_Pc_C_RosctlMaster").val().trim(),

        capunit_c: $("#txtCapunit_C_RosctlMaster").val().trim(),

        unit_ac: $("#txtUnit_Ac_RosctlMaster").val().trim(),

        rt_pc_ac: $("#txtRt_Pc_Ac_RosctlMaster").val().trim(),

        unit_as: $("#txtUnit_As_RosctlMaster").val().trim(),

        rt_pc_as: $("#txtUnit_Pc_As_RosctlMaster").val().trim(),

        rsctl_fm: $("#txtRsctl_Fm_RosctlMaster").val().trim(),

        rsctl_to: $("#txtRsctl_To_RosctlMaster").val().trim()

    };


    if (!item.code || !item.slno) {

        showWarning(
             "Required",
             "Please enter Code and SI No."
        );

        return;
    }


    RosctlMasterData.push(item);

    initRosctlMasterDataTable();


    showSuccess(
        "Added Successfully",
      
    );

}

// Edit

$(document).on("click", ".btn-edit-rosctl", function () {

    const code = $(this).data("code");

    const row = RosctlMasterData.find(
        x => String(x.code) === String(code)
    );

    if (!row) {
        console.error("[RosctlMaster] Record not found:", code);
        return;
    }

    // ROSCTL & Drawback Details
    $("#txtCode_RosctlMaster").val(row.code);
    $("#txtSINo_RosctlMaster").val(row.slno);
    $("#txtRsctl_Fm_RosctlMaster").val(row.fromDate ?? row.rsctl_fm ?? "");
    $("#txtRsctl_To_RosctlMaster").val(row.toDate ?? row.rsctl_to ?? "");
    $("#txtDBK_Item_Desc_RosctlMaster").val(row.description ?? "");

    // State Details
    $("#txtUnit_S_RosctlMaster").val(row.unit_s);
    $("#txtRt_Pc_S_RosctlMaster").val(row.rt_pc_s);
    $("#txtCapunit_S_RosctlMaster").val(row.capunit_s);
    $("#txtUnit_As_RosctlMaster").val(row.unit_as);
    $("#txtUnit_Pc_As_RosctlMaster").val(row.rt_pc_as);

    // Center Details
    $("#txtUnit_C_RosctlMaster").val(row.unit_c);
    $("#txtRt_Pc_C_RosctlMaster").val(row.rt_pc_c);
    $("#txtCapunit_C_RosctlMaster").val(row.capunit_c);
    $("#txtUnit_Ac_RosctlMaster").val(row.unit_ac);
    $("#txtRt_Pc_Ac_RosctlMaster").val(row.rt_pc_ac);

    $("#addRosctlDetailMasterModal").modal("show");

    console.log("Edit Rosctl:", row);
});


// Add
$("#btnAdd").on("click", function () {
    $('#addRosctlDetailMasterModal').modal('show')
});