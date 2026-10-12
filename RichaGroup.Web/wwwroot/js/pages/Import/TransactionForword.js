

import { initDatePicker, initializeSelect2, showToast } from "../../Utlity/Components.js"
import { receiveForwardData } from "./PaymentData.js";

let isFabric = false;

$(document).ready(function () {

    const type = $(".page-view.active").attr("id") || "";
    isFabric = type.toLowerCase() === "fabric";

    // table bindingd
    BindTable()

    initializeSelect2('.select2')

    initDatePicker(".datePicker");
});

function BindTable() {
    let html = '';

    $.each(receiveForwardData, function (i, v) {

        html += `
            <tr>
                <td></td>
                <td>${v.chaName ?? ''}</td>
                <td>${v.chaDate ?? ''}</td>
                <td>${v.forwarder ?? ''}</td>
                <td>${v.vendor ?? ''}</td>
                <td>${v.ciNo ?? ''}</td>
                <td>${v.ciDt ?? ''}</td>

                <td class="td-number">
                    ${Number(v.ciAmount || 0).toFixed(2)}
                </td>

                <td>${v.currency ?? ''}</td>

                <td class="td-number">
                    ${Number(v.importDuty || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.ctrn || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.ctrnWeight || 0).toFixed(2)}
                </td>

                <td>${v.shipMode ?? ''}</td>
                <td>${v.fob ?? ''}</td>
                <td>${v.awb ?? ''}</td>
                <td>${v.awbDate ?? ''}</td>
                <td>${v.hawb ?? ''}</td>
                <td>${v.hawbDt ?? ''}</td>
                <td>${v.deptStatus ?? ''}</td>
                <td>${v.deptDate ?? ''}</td>
                <td>${v.sno ?? ''}</td>
                <td>${v.userName ?? ''}</td>
                <td>${v.company ?? ''}</td>
                <td>${v.unit ?? ''}</td>
        `
        if (!isFabric) {
            html += `<td>${v.db ?? ''}</td>`
        }
                
        html+=` </tr>`;
    });

    $('#tblBody').html(html);
}