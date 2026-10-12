import { initDatePicker } from "../../Utlity/Components.js";
import { CIseedRows } from "./PaymentData.js";

let isFabric = false;
let PICI = "";

export function initTTPayment() {
    const type = $(".page-view.active").attr("id") || "";
    isFabric = type.toLowerCase() === "fabric";

    BindTable();

    $(document).off("blur.tt", "#txtBankCharges")
        .on("blur.tt", "#txtBankCharges", function () {
            const bankCharges = parseFloat($(this).val()) || 0;
            const totalAmt = parseFloat($("#txtTotalAmt").val()) || 0;
            $("#txtGTotalAmt").val((bankCharges + totalAmt).toFixed(2));
        });

    $(document).off("change.tt", 'input[name="ttRefType"]')
        .on("change.tt", 'input[name="ttRefType"]', function () {
            PICI = $('input[name="ttRefType"]:checked').val();

            $("#dvPINo").toggleClass("d-none", PICI !== "PiNo");
            $("#dvCIno").toggleClass("d-none", PICI !== "CiNo");

            BindTable();
        });
}

$(function () {
    if ($("#tblPayments").length && !$("#paymentContainer").length) {
        initTTPayment();
    }
});

function BindTable() {
    PICI = $('input[name="ttRefType"]:checked').val();

    /* ---------- Header ---------- */
    let thead = `<thead><tr><th>S.N.</th>`;

    if (PICI === "PiNo") {
        thead += `
            <th>PI NO</th>
            <th>PI Date</th>
            <th class="td-number">Amount</th>
            <th>Currency</th>
            <th>Pay By Date</th>
            <th>Entry</th>
        `;
    } else if (PICI === "CiNo") {
        thead += `
            <th>CI NO</th>
            <th>CI Date</th>
            <th class="td-number">Amount</th>
            <th>Currency</th>
            <th>Boe No</th>
            <th>BOE Dt</th>
            <th>GRN NO</th>
            <th>GRN Date</th>
            <th>Pay By Date</th>
        `;
    }

    thead += `<th>Manual Reg</th>`;

    if (isFabric) {
        thead += `<th>LIC NO</th>`;
    }

    thead += `
    <th>Buyer</th>
    <th>Style</th>
    <th>Premises</th>
    <th>Merchant</th></tr></thead>`;

    /* ---------- Body ---------- */
    let tbody = "";
    let totalAmt = 0;

    $.each(CIseedRows, function (i, v) {
        totalAmt += Number(v.amount) || 0;

        tbody += `
            <tr>
                <td>
                    <input type="checkbox" class="form-check-input" id="chkRow_${i}" />
                    ${i + 1}
                </td>
        `;

        if (PICI === "PiNo") {
            tbody += `
                <td>${v.piNo ?? ""}</td>
                <td>${v.piDate ?? ""}</td>
                <td class="td-number">${Number(v.amount || 0).toFixed(2)}</td>
                <td>${v.currency ?? ""}</td>
                <td>
                    <input type="text" class="table-input form-Flatdate w-100"
                           value="${v.payByDate ?? ""}" id="txtPayByDate_${i}" />
                </td>
                <td>
                    <select class="form-input w-100" id="ddlEntryType_${i}" style="height:28px !important">
                        <option value="CR" ${v.entry === "CR" ? "selected" : ""}>CR</option>
                        <option value="DR" ${v.entry === "DR" ? "selected" : ""}>DR</option>
                    </select>
                </td>
            `;
        } else if (PICI === "CiNo") {
            tbody += `
                <td>${v.ciNo ?? ""}</td>
                <td>${v.ciDate ?? ""}</td>
                <td class="td-number">${Number(v.amount || 0).toFixed(2)}</td>
                <td>${v.currency ?? ""}</td>
                <td>
                    <input type="text" class="table-input w-100"
                           value="${v.boeNo ?? ""}" id="txtBoeNo_${i}" />
                </td>
                <td>
                    <input type="text" class="table-input w-100 form-Flatdate"
                           value="${v.boedt ?? ""}" id="txtBoeDate_${i}" />
                </td>
                <td>${v.grnNo ?? ""}</td>
                <td>
                    <input type="text" class="table-input w-100 form-Flatdate"
                           value="${v.grnDate ?? ""}" id="txtGrnDate_${i}" />
                </td>
                <td>
                    <input type="text" class="table-input form-Flatdate w-100"
                           value="${v.payByDate ?? ""}" id="txtPayByDate_${i}" />
                </td>
            `;
        }

        tbody += `
                <td>
                    <input type="text" class="table-input w-100"
                           value="${v.manualReg ?? ""}" id="txtManualReg_${i}" />
                </td>
        `;

        if (isFabric) {
            tbody += `<td>${v.LicNo ?? ""}</td>`;
        }

        tbody += `
                <td>${v.buyer ?? ""}</td>
                <td>${v.style ?? ""}</td> 
                <td>${v.premises ?? ""}</td>
                <td>${v.merchant ?? ""}</td>
            </tr>
        `;
    });

    $("#tblPayments").html(thead + `<tbody id="tblBody">${tbody}</tbody>`);
    $("#txtTotalAmt").val(totalAmt.toFixed(2));
    initDatePicker("#tblBody .form-Flatdate");
}