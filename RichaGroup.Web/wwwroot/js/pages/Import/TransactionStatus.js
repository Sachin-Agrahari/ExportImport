// import { initDatePicker, initializeSelect2, RenderChecklist, showToast } from "../../Utility/Components.js";
import { initDatePicker, initializeSelect2, RenderChecklist, showToast } from "../../Utlity/Components.js"
import { ADDED_SEARCH_VALUES, SEARCH_VALUES, SEARCH_PARAMETERS, transactionStatus } from "./PaymentData.js";


$(document).ready(function () {

    initializeSelect2('.select2')

    initDatePicker(".datePicker");


});

$('#btnSerach').on('click', function () {
    bindCheckLists()
    $('#ChekclistModal').modal('show')
})

function bindCheckLists() {
    RenderChecklist('#Search_ParametrsList', SEARCH_PARAMETERS, 'ckhSearchParametrs', '', 'value', 'text')
    RenderChecklist('#Search_ValuesList', SEARCH_VALUES, 'ckhSearchValue', '', 'value', 'text')
    RenderChecklist('#Added_Search_ValuesList', ADDED_SEARCH_VALUES, 'ckhSearchAddeValue', '', 'value', 'text')
}

$('#btnExecute').on('click', function () {
    BindTable();
    $('#ChekclistModal').modal('hide')
    $('#tblContainer').removeClass('d-none')
})
function BindTable() {
    let html = "";

    $.each(transactionStatus, function (i, v) {
        html += `
            <tr>
                <td>${v.BLANK ?? ""}</td>

                <td>${v.SRNO$ ?? ""}</td>

                <td>${v.CHANAME ?? ""}</td>

                <td>${v.CHADATE ?? ""}</td>

                <td>${v.FORWARDERNV ?? ""}</td>

                <td>${v.VENDOR ?? ""}</td>

                <td>${v["CI NO"] ?? ""}</td>

                <td>${v["CI DT. #"] ?? ""}</td>

                <td class="td-number">
                    ${Number(v.CIAMOUT$ ?? 0).toFixed(2)}
                </td>

                <td>${v.CURRENCY ?? ""}</td>

                <td class="td-number">
                    ${Number(v.IMPORTDUTY$ ?? 0).toFixed(2)}
                </td>

                <td>${v.CTRN$ ?? ""}</td>

                <td class="td-number">
                    ${Number(v.CRTNWEIGHT$ ?? 0).toFixed(2)}
                </td>

                <td>${v.SHIPMODE ?? ""}</td>

                <td class="td-number">
                    ${Number(v.FOB ?? 0).toFixed(2)}
                </td>

                <td>${v.AWB ?? ""}</td>

                <td>${v["AWBDATE#"] ?? ""}</td>

                <td>${v.HAWB ?? ""}</td>

                <td>${v["HAWBDT#"] ?? ""}</td>

                <td>${v["DEPT STATUS"] ?? ""}</td>

                <td>${v["DEPTDATE#"] ?? ""}</td>

                <td>${v.SNO ?? ""}</td>

                <td>${v.USERNAME ?? ""}</td>

                <td>${v.COMPANY ?? ""}</td>

                <td>${v.UNIT ?? ""}</td>
            </tr>
        `;
    });

    $("#tblBody").empty();
    $("#tblBody").html(html);
}