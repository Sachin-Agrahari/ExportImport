import { modalRows, creditRowsAcc } from "./PaymentData.js";

export function initLetterOfCredit() {
    BindTable();

    $(document).off("click.lc", "#BtnOpeningPerforma")
        .on("click.lc", "#BtnOpeningPerforma", bindModalRows);
}

$(function () {
    if ($("#lcBtnAdd").length && !$("#paymentContainer").length) {
        initLetterOfCredit();
    }
});

function bindModalRows() {
    let html = "";

    $.each(modalRows, function (i, v) {
        html += `
            <tr>
                <td style="width:50px">${v.id}</td>
                <td style="width:100%">
                    <textarea style="width:100%"
                              class="form-input lc-textarea"
                              placeholder="${v.PlaceHolder || ""}"
                              id="${v.txtID}_${v.id}"
                              rows="2"></textarea>
                </td>
            </tr>
        `;
    });

    $("#tblModalBody").html(html);

    bootstrap.Modal.getOrCreateInstance(
        document.getElementById("PerformaModal")
    ).show();
}

function BindTable() {
    let html = "";

    $.each(creditRowsAcc, function (i, v) {
        html += `
            <tr>
                <td>${v.piNo}</td>
                <td>${v.buyer}</td>
                <td>${v.style}</td>
                <td>${v.description}</td>
                <td class="r num">${v.width}</td>
                <td class="r num">${v.gsm}</td>
                <td class="r num">${v.qty}</td>
                <td>${v.uom}</td>
                <td>${v.shipmentDate}</td>
                <td>${v.licNo}</td>
            </tr>
        `;
    });

    $("#tblLetterOfCreaditBody").html(html);
}