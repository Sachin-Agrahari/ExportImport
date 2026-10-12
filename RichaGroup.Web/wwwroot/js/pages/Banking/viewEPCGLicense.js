
// License Master - Static Data
var licenseMasterData = [
    { no: 40465, invno: "RE/4963/23-24", gstinvno: "RE/ES/4806/23-24", gstinvdt: "01-02-2024", facunit: "MAN30" },
    { no: 40466, invno: "RE/5035/23-24", gstinvno: "RE/ES/4807/23-24", gstinvdt: "01-02-2024", facunit: "MAN30" },
    { no: 40467, invno: "RE/4305/23-24", gstinvno: "RE/ES/4808/23-24", gstinvdt: "01-02-2024", facunit: "MAN08" },
    { no: 40468, invno: "RE/5125/23-24", gstinvno: "RE/ES/4809/23-24", gstinvdt: "01-02-2024", facunit: "MAN30" },
    { no: 40469, invno: "RE/4812/23-24", gstinvno: "RE/ES/4810/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40470, invno: "RE/4986/23-24", gstinvno: "RE/ES/4811/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40471, invno: "RE/4723/23-24", gstinvno: "RE/ES/4812/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40472, invno: "RE/4722/23-24", gstinvno: "RE/ES/4813/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40473, invno: "RE/4982/23-24", gstinvno: "RE/ES/4814/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40474, invno: "RE/4880/23-24", gstinvno: "RE/ES/4815/23-24", gstinvdt: "02-02-2024", facunit: "RC192" },
    { no: 40475, invno: "RE/3673/23-24", gstinvno: "RE/ES/4816/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" },
    { no: 40476, invno: "RE/3746/23-24", gstinvno: "RE/ES/4817/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" },
    { no: 40477, invno: "RE/3747/23-24", gstinvno: "RE/ES/4818/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" },
    { no: 40478, invno: "RE/3749/23-24", gstinvno: "RE/ES/4819/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" },
    { no: 40479, invno: "RE/3750/23-24", gstinvno: "RE/ES/4820/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" },
    { no: 40480, invno: "RE/3751/23-24", gstinvno: "RE/ES/4821/23-24", gstinvdt: "02-02-2024", facunit: "MAN08" }
];

$(document).ready(function () {

    renderLicenseMasterTable(licenseMasterData);

    $("#btnAdd").on("click", function () {
        // window.location.href = "/Banking/EPCGLicense";
         $('#addMenuModal').modal('show')
    });
  

    // ---- Live search ----
    $("#txtSearch_LicenseMaster").on("keyup", function () {
        var term = $(this).val().trim().toLowerCase();

        if (!term) {
            renderLicenseMasterTable(licenseMasterData);
            return;
        }

        var filtered = licenseMasterData.filter(function (row) {
            return (
                row.no.toString().toLowerCase().indexOf(term) > -1 ||
                row.invno.toLowerCase().indexOf(term) > -1 ||
                row.gstinvno.toLowerCase().indexOf(term) > -1 ||
                row.gstinvdt.toLowerCase().indexOf(term) > -1 ||
                row.facunit.toLowerCase().indexOf(term) > -1
            );
        });

        renderLicenseMasterTable(filtered);
    });

});

// Render table rows
function renderLicenseMasterTable(data) {
    var $tbody = $("#tblLicenseMasterBody");
    $tbody.empty();

    if (!data || data.length === 0) {
        $("#noRecordsFound_LicenseMaster").removeClass("d-none");
        $("#tblLicenseMaster").addClass("d-none");
    } else {
        $("#noRecordsFound_LicenseMaster").addClass("d-none");
        $("#tblLicenseMaster").removeClass("d-none");

        $.each(data, function (i, row) {
            var tr = $("<tr>").append(
                 $("<td>").html(`
            <button type="button"
                    class="edit-btn"
                    id="btnedit_LicenseMaster"
                    title="Edit"
                    onclick="EditMatser(${row.no})">
                  <i class="fa-solid fa-pen-to-square"></i>
            </button>
        `),
                $("<td>").html('<span class="badge btn-primary">' + row.no + '</span>'),
                $("<td>").text(row.invno),
                $("<td>").text(row.gstinvno),
                $("<td>").text(row.gstinvdt),
                $("<td>").text(row.facunit),
               
               
            );
            $tbody.append(tr);
        });
    }

    $("#lblRecordCount_LicenseMaster").text("Showing " + data.length + " record" + (data.length !== 1 ? "s" : ""));
}

// Refresh
function refreshLicenseMaster() {

    showLoader("Refreshing...");

    try {

        $("#txtSearch_LicenseMaster").val("");
        renderLicenseMasterTable(licenseMasterData);

        console.log("License Master refreshed");

        setTimeout(function () {
            hideLoader();
        }, 1000);

    }
    catch (err) {

        console.error(
            "[LicenseMaster] Refresh failed:",
            err
        );

        hideLoader();
    }
}


//edit 
function EditMatser(id) {

    if (!id) {
        console.error("License Master ID not found.");
        showError(
            "License Master ID not found.",
            "id Not Match"
        )
        return;
    }

    $('#addMenuModal').modal('show')
}