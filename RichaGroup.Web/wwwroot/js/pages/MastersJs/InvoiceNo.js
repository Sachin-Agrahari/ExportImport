// Static Data
const InvoiceMasterData = [
    { code: "21", unit: "GG236only".slice(0, 5), from: 1, to: 8000, lastNo: 146, finYear: "2025-2026", lastGstInvNo: 201, creditNoteNo: 2 },
    { code: "01", unit: "RE239those".slice(0, 5), from: 1, to: 9000, lastNo: 7661, finYear: "2025-2026", lastGstInvNo: 7366, creditNoteNo: 36 },
    { code: "21", unit: "NOIDA", from: 1, to: 8000, lastNo: 70, finYear: "2025-2026", lastGstInvNo: 88, creditNoteNo: 0 },
    { code: "01", unit: "RNC01", from: 1, to: 9000, lastNo: 912, finYear: "2025-2026", lastGstInvNo: 707, creditNoteNo: 3 },
    { code: "01", unit: "JUMEI", from: 1, to: 9000, lastNo: 25, finYear: "2025-2026", lastGstInvNo: 18, creditNoteNo: 0 },
    { code: "21", unit: "GG236", from: 1, to: 8000, lastNo: 13, finYear: "2026-2027", lastGstInvNo: 8, creditNoteNo: 0 },
    { code: "01", unit: "RE239", from: 1, to: 9000, lastNo: 1859, finYear: "2026-2027", lastGstInvNo: 1894, creditNoteNo: 9 },
    { code: "21", unit: "NOIDA", from: 1, to: 8000, lastNo: 0, finYear: "2026-2027", lastGstInvNo: 0, creditNoteNo: 0 },
    { code: "01", unit: "RNC01", from: 1, to: 9000, lastNo: 262, finYear: "2026-2027", lastGstInvNo: 229, creditNoteNo: 0 },
    { code: "01", unit: "JUMEI", from: 1, to: 9000, lastNo: 31, finYear: "2026-2027", lastGstInvNo: 27, creditNoteNo: 0 },
    { code: "01", unit: "RK239", from: 1, to: 9000, lastNo: 126, finYear: "2026-2027", lastGstInvNo: 57, creditNoteNo: 0 }
];

let InvoiceMasterTable = null;

$(document).ready(function () {
    bindInvoiceMasterData(InvoiceMasterData);
});

function bindInvoiceMasterData(data) {
    var $tbody = $("#tblbodyInvoiceMaster");
    if (!$tbody.length) {
        console.error("tblbodyInvoiceMaster not found");
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
                <td>${row.code}</td>
                <td>${row.unit}</td>
                <td>${row.from}</td>
                <td>${row.to}</td>
                <td>${row.lastNo}</td>
                <td>${row.finYear}</td>
                <td>${row.lastGstInvNo}</td>
                <td>${row.creditNoteNo}</td>
            </tr>`;
        $tbody.append(tr);
    });
}

function EditMaster(index) {
    var row = InvoiceMasterData[index];
    $("#txtCode").val(row.code);
    $("#txtUnit").val(row.unit);
    $("#txtFrom").val(row.from);
    $("#txtTo").val(row.to);
    $("#txtLastNo").val(row.lastNo);
    $("#txtFinYear").val(row.finYear);
    $("#txtLastGstInvNo").val(row.lastGstInvNo);
    $("#txtCreditNoteNo").val(row.creditNoteNo);
    $('#addMenuModal').modal('show');
}

$("#btnAdd").on("click", function () {
    $("#addMenuModal input").val("");
    $('#addMenuModal').modal('show');
});