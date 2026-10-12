$(document).ready(function () {

    initDrawbackMaster();

});

// Page Initialization

function initDrawbackMaster() {

    // Refresh
    $("#btnRefresh_DrawbackMaster").on("click", function () {

        showWarning(
           "Are you sure?",
           "Do you want to refresh the Drawback Master?",
           
        ).then(function (result) {

            if (result.isConfirmed) {
                refreshDrawbackMaster();
            }

        });

    });

    $("#btnAdd_PR_Accessory").on("click", function () {
        addDrawbackMaster();
    });

    /*initDrawbackMasterDataTable();*/
    bindDrawbackMasterData();

}

// Static Data


const drawbackMasterData = [
    {
        code: "1",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610101",
        dbkItemDesc: "Cotton Knitted T-Shirt",
        dbkUnit: "Piece",
        dbkPc: "4.10",
        dbkCap: "70.10",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    },
    {
        code: "2",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610102",
        dbkItemDesc: "Cotton Knitted Shirt",
        dbkUnit: "Piece",
        dbkPc: "3.50",
        dbkCap: "42.90",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    },
    {
        code: "3",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610103",
        dbkItemDesc: "Synthetic Fibre Garment",
        dbkUnit: "Piece",
        dbkPc: "4.70",
        dbkCap: "60.60",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    },
    {
        code: "344",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610104",
        dbkItemDesc: "Knitted Garment",
        dbkUnit: "Piece",
        dbkPc: "5.10",
        dbkCap: "379.00",
        dbkPcA: "0.90",
        dbkCapA: "0.00",
        remarks: "Applicable"
    },
    {
        code: "345",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610105",
        dbkItemDesc: "Other Knitted Apparel",
        dbkUnit: "Piece",
        dbkPc: "3.30",
        dbkCap: "131.00",
        dbkPcA: "0.90",
        dbkCapA: "0.00",
        remarks: "Applicable"
    },
    {
        code: "346",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610106",
        dbkItemDesc: "Other Textile Garment",
        dbkUnit: "Piece",
        dbkPc: "3.00",
        dbkCap: "95.00",
        dbkPcA: "0.90",
        dbkCapA: "0.00",
        remarks: "Applicable"
    },
    {
        code: "347",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610199",
        dbkItemDesc: "Other Textile Articles",
        dbkUnit: "Piece",
        dbkPc: "2.40",
        dbkCap: "64.80",
        dbkPcA: "0.90",
        dbkCapA: "0.00",
        remarks: "Applicable"
    },
    {
        code: "4",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610201",
        dbkItemDesc: "Cotton Knitted Garment",
        dbkUnit: "Piece",
        dbkPc: "4.10",
        dbkCap: "70.10",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    },
    {
        code: "5",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610202",
        dbkItemDesc: "Knitted Apparel",
        dbkUnit: "Piece",
        dbkPc: "3.50",
        dbkCap: "42.90",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    },
    {
        code: "6",
        fromDate: "01-04-2026",
        toDate: "31-03-2027",
        sino: "610203",
        dbkItemDesc: "Textile Apparel",
        dbkUnit: "Piece",
        dbkPc: "4.70",
        dbkCap: "60.60",
        dbkPcA: "1.30",
        dbkCapA: "0.00",
        remarks: "Standard Rate"
    }
];


// const drawbackMasterData = [

//     {
//         code: "1",
//         sino: "610101",
//         dbkPc: "4.10",
//         dbkCap: "70.10",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "2",
//         sino: "610102",
//         dbkPc: "3.50",
//         dbkCap: "42.90",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "3",
//         sino: "610103",
//         dbkPc: "4.70",
//         dbkCap: "60.60",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "344",
//         sino: "610104",
//         dbkPc: "5.10",
//         dbkCap: "379.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "345",
//         sino: "610105",
//         dbkPc: "3.30",
//         dbkCap: "131.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "346",
//         sino: "610106",
//         dbkPc: "3.00",
//         dbkCap: "95.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "347",
//         sino: "610199",
//         dbkPc: "2.40",
//         dbkCap: "64.80",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "4",
//         sino: "610201",
//         dbkPc: "4.10",
//         dbkCap: "70.10",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "5",
//         sino: "610202",
//         dbkPc: "3.50",
//         dbkCap: "42.90",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "6",
//         sino: "610203",
//         dbkPc: "4.70",
//         dbkCap: "60.60",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "348",
//         sino: "610204",
//         dbkPc: "5.10",
//         dbkCap: "379.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "349",
//         sino: "610205",
//         dbkPc: "3.30",
//         dbkCap: "131.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "350",
//         sino: "610206",
//         dbkPc: "3.00",
//         dbkCap: "95.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "351",
//         sino: "610299",
//         dbkPc: "2.40",
//         dbkCap: "64.80",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "7",
//         sino: "61030101",
//         dbkPc: "4.10",
//         dbkCap: "97.10",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "8",
//         sino: "61030102",
//         dbkPc: "3.50",
//         dbkCap: "73.90",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "9",
//         sino: "61030103",
//         dbkPc: "4.70",
//         dbkCap: "89.60",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "352",
//         sino: "61030104",
//         dbkPc: "5.10",
//         dbkCap: "695.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "353",
//         sino: "61030105",
//         dbkPc: "3.30",
//         dbkCap: "229.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "354",
//         sino: "61030106",
//         dbkPc: "3.00",
//         dbkCap: "145.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "355",
//         sino: "61030199",
//         dbkPc: "2.40",
//         dbkCap: "92.10",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "13",
//         sino: "61030201",
//         dbkPc: "4.10",
//         dbkCap: "70.10",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "14",
//         sino: "61030202",
//         dbkPc: "3.40",
//         dbkCap: "42.80",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "15",
//         sino: "61030203",
//         dbkPc: "4.70",
//         dbkCap: "60.60",
//         dbkPcA: "1.30",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "356",
//         sino: "61030204",
//         dbkPc: "5.10",
//         dbkCap: "379.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "357",
//         sino: "61030205",
//         dbkPc: "3.30",
//         dbkCap: "131.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     },

//     {
//         code: "358",
//         sino: "61030206",
//         dbkPc: "3.00",
//         dbkCap: "95.00",
//         dbkPcA: "0.90",
//         dbkCapA: "0.00",
//         dbkUnit: "Piece"
//     }

// ];

// DataTable Variable

let drawbackMasterTable = null;

// Bind Data Into TBODY
function bindDrawbackMasterData() {

    const $tbody = $("#tblbody_DrawbackMaster");

    if (!$tbody.length) {
        console.error("[DrawbackMaster] #tblbody_DrawbackMaster not found.");
        return;
    }

    $tbody.empty();

    $.each(drawbackMasterData, function (index, item) {

        const row = `
            <tr data-code="${item.code}">

                <td class="text-center">
                    <button
                        type="button"
                        class="edit-btn btn-edit-drawback"
                        data-code="${item.code}"
                        title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td class="c">01-04-2026</td>

                <td class="c">31-03-2027</td>

                <td class="c">${item.code}</td>

                <td>${item.sino}</td>

                <td>${item.dbkItemDesc || "Drawback Item " + item.sino}</td>

                <td>${item.dbkUnit}</td>

                <td class="r">${item.dbkPc}</td>

                <td class="r">${item.dbkCap}</td>

                <td class="r">${item.dbkPcA}</td>

                <td class="r">${item.dbkCapA}</td>

                <td>${item.remarks || "-"}</td>

            </tr>
        `;

        $tbody.append(row);
    });
}


// Initialize DataTable

function initDrawbackMasterDataTable() {

    showLoader("Loading Drawback Master...");

    try {

        if (drawbackMasterTable) {

            drawbackMasterTable.destroy();

            drawbackMasterTable = null;
        }

        bindDrawbackMasterData();

        drawbackMasterTable = new DataTable(
            "#tblDrawbackMaster",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No Drawback Master records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        hideLoader();

    }
    catch (error) {

        console.error(
            "[DrawbackMaster] DataTable initialization failed:",
            error
        );

        hideLoader();

    }

}

// Refresh

function refreshDrawbackMaster() {

    showLoader("Refreshing Drawback Master...");

    try {

        if (drawbackMasterTable) {

            drawbackMasterTable.destroy();

            drawbackMasterTable = null;
        }


        bindDrawbackMasterData();


        drawbackMasterTable = new DataTable(
            "#tblDrawbackMaster",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                language: {

                    emptyTable:
                        "No Drawback Master records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );


        setTimeout(function () {

            hideLoader();

        }, 500);

    }
    catch (error) {

        console.error(
            "[DrawbackMaster] Refresh failed:",
            error
        );

        hideLoader();

    }

}

// Edit

$(document).on(
    "click",
    "#btn-edit-drawback",
    function () {

        const code = $(this).data("code");

        const row = drawbackMasterData.find(
            x => String(x.code) === String(code)
        );

        if (!row) {
            return;
        }

        console.log("Edit Drawback:", row);


        // Fill form
        $("#txtCode_DrawbackMaster").val(row.code);
        $("#txtSINo_DrawbackMaster").val(row.sino);
        $("#txtDBK_Pc_DrawbackMaster").val(row.dbkPc);
        $("#txtDBK_Cap_DrawbackMaster").val(row.dbkCap);
        $("#txtDBK_pc_a_DrawbackMaster").val(row.dbkPcA);
        $("#txtDBK_cap_a_DrawbackMaster").val(row.dbkCapA);
        $("#txtDBKUnit_DrawbackMaster").val(row.dbkUnit);

    }
);

$(document).on("click", "#btn-edit-drawback", function () {

    const code = $(this).data("code");

    const row = drawbackMasterData.find(
        x => String(x.code) === String(code)
    );

    if (!row) {
        return;
    }

    $("#txtCode_DrawbackMaster").val(row.code);
    $("#txtSINo_DrawbackMaster").val(row.sino);
    $("#txtDBK_Pc_DrawbackMaster").val(row.dbkPc);
    $("#txtDBK_Cap_DrawbackMaster").val(row.dbkCap);
    $("#txtDBK_pc_a_DrawbackMaster").val(row.dbkPcA);
    $("#txtDBK_cap_a_DrawbackMaster").val(row.dbkCapA);
    $("#txtDBKUnit_DrawbackMaster").val(row.dbkUnit);
    $('#addDrawbackMasterModal').modal('show')
});
// Add
function addDrawbackMaster() {

    const code = $("#txtCode_DrawbackMaster").val().trim();
    const sino = $("#txtSINo_DrawbackMaster").val().trim();
    const dbkPc = $("#txtDBK_Pc_DrawbackMaster").val().trim();
    const dbkCap = $("#txtDBK_Cap_DrawbackMaster").val().trim();
    const dbkPcA = $("#txtDBK_pc_a_DrawbackMaster").val().trim();
    const dbkCapA = $("#txtDBK_cap_a_DrawbackMaster").val().trim();
    const dbkUnit = $("#txtDBKUnit_DrawbackMaster").val().trim();


    if (!code) {

        showWarning(
            "Code Required",
            "Please enter Code."
        );

        return;
    }


    if (!sino) {

        showWarning(
           "SIno Required",
            "Please enter SIno."
        );

        return;
    }


    drawbackMasterData.push({

        code: code,
        sino: sino,
        dbkPc: dbkPc,
        dbkCap: dbkCap,
        dbkPcA: dbkPcA,
        dbkCapA: dbkCapA,
        dbkUnit: dbkUnit

    });


    initDrawbackMasterDataTable();


    showSuccess(
        "Added Successfully",

    );


    // Clear form
    $("#txtCode_DrawbackMaster").val("");
    $("#txtSINo_DrawbackMaster").val("");
    $("#txtDBK_Pc_DrawbackMaster").val("");
    $("#txtDBK_Cap_DrawbackMaster").val("");
    $("#txtDBK_pc_a_DrawbackMaster").val("");
    $("#txtDBK_cap_a_DrawbackMaster").val("");
    $("#txtDBKUnit_DrawbackMaster").val("");

}


// Add
$("#btnAdd").on("click", function () {
    $('#addDrawbackMasterModal').modal('show')
});