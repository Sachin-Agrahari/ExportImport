// Static Data (dates are dd/MM/yyyy)
const LutAeoMasterData = [
    { cmp_code: "01", type: "LUT", from: "01/04/2025", to: "31/03/2026", inv_unit: "RE239", number: "AD060325025901D" },
    { cmp_code: "01", type: "LUT", from: "01/04/2025", to: "31/03/2026", inv_unit: "RNC01", number: "AD0904250233473" },
    { cmp_code: "01", type: "LUT", from: "01/04/2026", to: "31/03/2027", inv_unit: "RE239", number: "AD060326022500O DT.28/03/2026" },
    { cmp_code: "01", type: "LUT", from: "01/04/2026", to: "31/03/2027", inv_unit: "RNC01", number: "AD0903260700654 DT.28/03/2026" },
    { cmp_code: "01", type: "LUT", from: "01/04/2026", to: "31/03/2027", inv_unit: "RK239", number: "AD0607260096522 DT.25/07/2026" },
    { cmp_code: "01", type: "AEO", from: "01/04/2024", to: "19/03/2025", inv_unit: "RNC01", number: "INAALCR4331D1F231" },
    { cmp_code: "01", type: "AEO", from: "01/04/2024", to: "19/03/2025", inv_unit: "RE239", number: "INAALCR4331D1F231" },
    { cmp_code: "01", type: "AEO", from: "20/03/2025", to: "", inv_unit: "RNC01", number: "AALCR4331D2F251" },
    { cmp_code: "01", type: "AEO", from: "20/03/2025", to: "", inv_unit: "RK239", number: "AALCR4331D2F251" },
    { cmp_code: "01", type: "AEO", from: "20/03/2025", to: "", inv_unit: "RE239", number: "AALCR4331D2F251" }
];

let LutAeoMasterTable = null;

$(document).ready(function () {
    bindLutAeoMasterData(LutAeoMasterData);
});

// dd/MM/yyyy -> yyyy-MM-dd (for <input type="date">)
function toInputDate(d) {
    if (!d) return "";
    var p = d.split("/");
    return p[2] + "-" + p[1] + "-" + p[0];
}

function bindLutAeoMasterData(data) {
    var $tbody = $("#tblbodyLutAeoMaster");
    if (!$tbody.length) {
        console.error("tblbodyLutAeoMaster not found");
        return;
    }

    $tbody.empty();

    $.each(data, function (i, row) {
        var tr = `
            <tr>
                <td class="text-center">
                    <button type="button" class="row-btn edit-btn" title="Edit"
                            onclick="EditMaster(${i})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>${row.cmp_code}</td>
                <td>${row.type}</td>
                <td>${row.from}</td>
                <td>${row.to}</td>
                <td>${row.inv_unit}</td>
                <td>${row.number}</td>
            </tr>`;
        $tbody.append(tr);
    });
}

function EditMaster(index) {
    var row = LutAeoMasterData[index];
    $("#txtCmpCode").val(row.cmp_code);
    $("#ddlType").val(row.type);
    $("#txtFrom").val(toInputDate(row.from));
    $("#txtTo").val(toInputDate(row.to));
    $("#txtInvUnit").val(row.inv_unit);
    $("#txtNumber").val(row.number);
    $('#addMenuModal').modal('show');
}

$("#btnAdd").on("click", function () {
    $("#addMenuModal input").val("");
    $("#ddlType").val("");
    $('#addMenuModal').modal('show');
});