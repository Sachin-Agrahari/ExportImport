
import { initDatePicker, initializeSelect2, showToast } from "../../Utlity/Components.js"
import { seedRows } from "./LicenceData.js";

$(document).ready(function () {
 
   
    /* -----------------------------
       Select2
    ----------------------------- */
    initializeSelect2('.select2')

    /* -----------------------------
     Date Picker
    ----------------------------- */
    initDatePicker(".datePicker");

    // bind table
     BindTable()

});

function BindTable() {
    let html = "";

    $.each(seedRows, function (i, v) {
        html += `
            <tr>
                <td>${v.Req_No ?? ""}</td>
                <td>${v.Buyer ?? ""}</td>
                <td>${v.Style ?? ""}</td>
                <td>${v.Req_Item ?? ""}</td>
                <td>${v.Process ?? ""}</td>

                <td class="td-number">
                    ${Number(v.Req_Qty || 0).toFixed(3)}
                </td>

                <td>${v.Req_UOM ?? ""}</td>
                <td>${v.Exptlem ?? ""}</td>
                <td>${v.Imptlem ?? ""}</td>
                <td>${v.UOM ?? ""}</td>

                <td class="td-number">
                    ${Number(v.GSM || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.Norms || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.TSQM_APL || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.TAVG_APL || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.TQTY_APL || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.Total_Qty_APE || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.TAVG_APE || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.Norm_Fixed_Avg || 0).toFixed(2)}
                </td>

                <td class="td-number">
                    ${Number(v.Avg_Apprd_By_Norm || 0).toFixed(2)}
                </td>
            </tr>
        `;
    });

    $("#tblBody").html(html);
}