import { initDatePicker } from "../../Utlity/Components.js";
import { seedRows, checklistData, FabricDelivery } from "./PeroformaData.js";

let isFabric = false;
const types = new URLSearchParams(window.location.search).get("type");

$(document).ready(function () {
    const type = $(".page-view.active").attr("id") || "";
    isFabric = type.toLowerCase() === "fabric";

    BindPerformaTable();
    bindChecklistTable();
});


function BindPerformaTable() {
    let html = "";

    $.each(seedRows, function (i, v) {
        html += `
            <tr data-index="${i}">
                <td>
                    <input type="checkbox" class="performance-row-check">
                </td>
                <td>${v.PO_Number ?? ""}</td>
                <td>${v.item ?? ""}</td>
                <td>${v.itemDesc ?? ""}</td>
                <td>${v.Size ?? ""}</td>
                <td>${v.Colour ?? ""}</td>
                <td class="r num">${Number(v.qty || 0).toFixed(3)}</td>
                <td>${v.uom ?? ""}</td>
                <td>
                    <select class="form-select table-input table-input-select" data-field="PIUOM" id="ddlPIUM_${i}"
                        style="padding: 5px 12px;">
                        <option value="">Select</option>
                        <option value="PCS" ${v.PIUOM === "PCS" ? "selected" : ""}>PCS</option>
                        <option value="MTR" ${v.PIUOM === "MTR" ? "selected" : ""}>MTR</option>
                        <option value="YRD" ${v.PIUOM === "YRD" ? "selected" : ""}>YRD</option>
                        <option value="KG" ${v.PIUOM === "KG" ? "selected" : ""}>KG</option>
                        <option value="DOZ" ${v.PIUOM === "DOZ" ? "selected" : ""}>DOZ</option>
                    </select>
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.rate ?? 0}" step="1" data-field="rate" id="txtRate_${i}">
                </td>
                <td class="r num">${Number(v.Amount || 0).toFixed(2)}</td>
                <td>
                    <select class="form-select table-input" data-field="Currency" id="ddlCurrenct_${i}"
                        style="padding: 5px 12px;">
                        <option value="">Select</option>
                        <option value="US$" ${v.Currency === "US$" ? "selected" : ""}>US$</option>
                        <option value="INR" ${v.Currency === "INR" ? "selected" : ""}>INR</option>
                        <option value="EUR" ${v.Currency === "EUR" ? "selected" : ""}>EUR</option>
                    </select>
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.rtType ?? 0}" step="1" data-field="rtType" id="txtRType_${i}">
                </td>
                <td>${v.reqNO ?? ""}</td>
                <td>${v.style ?? ""}</td>
                <td>${v.buyer ?? ""}</td>
                <td>${v.itSupplr ?? ""}</td>
                <td>${v.itCode ?? ""}</td>
                <td>
                    <input type="number" class="table-input r num" value="${v.perCentageAGE ?? 0}" step="0.01" data-field="perCentageAGE" id="txtperCentageAGE_${i}">
                </td>
                <td>${isFabric ? (v.Print ?? "") : (v.Type ?? "")}</td>
                <td>
                    <input type="number" class="table-input r num" value="${v.CONV ?? 0}" step="1" data-field="CONV">
                </td>
                <td>
                    <input type="text" class="table-input form-Flatdate" value="${v.ExpectedDate ?? ""}" placeholder="DD/MMM/YYYY" data-field="ExpectedDate" id="txtExDate_${i}">
                </td>
                <td>
                    <input type="text" class="table-input form-Flatdate" value="${v.NewExpectedDate ?? ""}" placeholder="DD/MMM/YYYY" data-field="NewExpectedDate" id="txtNewExDate_${i}">
                </td>
                <td>
                    <input type="text" class="table-input table-input-text" value="${v.delayResion ?? ""}" placeholder="Delay reason" data-field="delayResion" id="txtResion_${i}">
                </td>
                <td class="r num">${Number(v.acQty || 0).toFixed(2)}</td>
                <td>${v.s_ItemCode ?? ""}</td>
                <td>
                    <input type="text" class="table-input table-input-text" value="${v.Process ?? ""}" data-field="Process" id="txtProcess_${i}">
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.Width ?? ""}" step="1" data-field="Width" id="txtWidth_${i}">
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.finWidth ?? ""}" step="1" data-field="finWidth" id="txtFinWidth_${i}">
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.GsmFrom ?? ""}" step="1" data-field="GsmFrom" id="txtGSMFrom_${i}">
                </td>
                <td>
                    <input type="number" class="table-input r num" value="${v.GSMto ?? ""}" step="1" data-field="GSMto" id="txtGSMTo_${i}">
                </td>
                <td>${v.reqProcess ?? ""}</td>
                ${isFabric ? `
                <td>${v.FabricType ?? ""}</td>
                <td>${v.Blended ?? ""}</td>` : ""}
            </tr>
        `;
    });

    $("#PerformatblBody").html(html);
    initDatePicker("#PerformatblBody .form-Flatdate");
}

function bindChecklistTable() {
    let html = "";

    $.each(checklistData, function (i, v) {
        html += `
        <tr>
            <td>
                <input type="checkbox" data-code="${v.code}" value="${v.code}" class="form-check-input" />
            </td>
            <td>${v.description}</td>
            <td>
                <select class="form-select checklist-select" data-code="${v.code}" style="padding: 5px 12px !important;">
                    <option value="">Select</option>
                    <option value="1">Person 1</option>
                    <option value="2">Person 2</option>
                    <option value="3">Person 3</option>
                </select>
            </td>
            <td>
                <input type="text"
                       class="form-control checklist-date form-Flatdate"
                       style="padding: 5px 12px !important;"
                       placeholder="DD/MMM/YYYY"
                       data-code="${v.code}">
            </td>
            <td>
                <div class="d-flex align-items-center gap-2">
                    <button type="button"
                            class="row-btn edit-btn uploadBtn"
                            data-code="${v.code}"
                            data-pi-no="${v.code}"
                            data-pi-date="${v.date || ""}"
                            title="Upload File"
                            aria-label="Upload File">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                    </button>

                    <button type="button" class="row-btn edit-btn" title="View" aria-label="View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>`;
    });

    $("#tblPIChecklistBody").html(html);
    initDatePicker("#tblPIChecklistBody .form-Flatdate");
}

function bindFabricCheckTable() {
    let html = "";

    $.each(FabricDelivery, function (i, v) {
        html += `
            <tr>
                <td><input type="checkbox"></td>
                <td>${v.fabricContent}</td>
                <td>${v.Process}</td>
                <td class="r num">${v.Width}</td>
                <td class="r num">${v.WidthFinal}</td>
                <td class="r num">${v.GSMFrom}</td>
                <td class="r num">${v.GSMTo}</td>
                <td class="r num">${v.Quantity}</td>
                <td>${v.SatatDate}</td>
                <td>${v.SatatEnd}</td>
            </tr>
        `;
    });

    $("#fabricTbody").html(html);
}

function emptyRowFabricCheck(index) {
    const html = `
        <tr>
            <td class="tdFlex">
                <input type="checkbox" class="checklist-checkbox fabric-row-checkbox" id="chkFabric_${index}">
                <input class="table-input table-input-text" placeholder="Fabric Content" id="txtFabricContent_${index}">
            </td>
            <td>
                <input class="table-input table-input-text" placeholder="Process" id="txtProcess_${index}">
            </td>
            <td>
                <input type="number" class="table-input" placeholder="0" step="1" id="txtWidth_${index}">
            </td>
            <td>
                <input type="number" class="table-input" placeholder="0" step="1" id="txtFinalWidth_${index}">
            </td>
            <td>
                <input type="number" class="table-input" placeholder="0" step="1" id="txtGSMStart_${index}">
            </td>
            <td>
                <input type="number" class="table-input" placeholder="0" step="1" id="txtGSMEnd_${index}">
            </td>
            <td>
                <input type="number" class="table-input" placeholder="0" step="1" id="txtQty_${index}">
            </td>
            <td>
                <input type="text" class="table-input form-Flatdate" placeholder="DD/MMM/YYYY" id="txtStartDate_${index}">
            </td>
            <td>
                <input type="text" class="table-input form-Flatdate" placeholder="DD/MMM/YYYY" id="txtEndDate_${index}">
            </td>
        </tr>
    `;

    $("#fabricTbody").append(html);
    initDatePicker("#fabricTbody .form-Flatdate");
}


function addPymentTableBody(index) {
    const paymentDate = $("#txtPaymentDate").val();
    const amount = $("#txtAmount").val();
    const paymentTerms = $("#ddlPaymentTerms").val();

    if (!paymentDate) {
        alert("Payment date required");
        $("#txtPaymentDate").focus();
        return;
    }

    if (!amount) {
        alert("Amount is required");
        $("#txtAmount").focus();
        return;
    }

    if (!paymentTerms) {
        alert("select payment terms");
        $("#ddlPaymentTerms").focus();
        return;
    }

    const html = `
        <tr data-index="${index}">
            <td>
                <input type="checkbox" class="payment-row-check">
            </td>
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Enter Pi Number" id="txtPiNumber_${index}">
            </td>
            <td>${paymentDate}</td>
            <td>${amount}</td>
            <td>${paymentTerms}</td>
        </tr>
    `;

    $("#tblPaymentBody").append(html);
}

$(document).on("click", "#btnAddPaymentMethod", function () {
    addPymentTableBody($("#tblPaymentBody tr").length + 1);
});

$(document).on("click", "#btnRemovePayment", function () {
    const selectedRows = $("#tblPaymentBody .payment-row-check:checked");

    if (selectedRows.length === 0) {
        alert("Please select a payment row");
        return;
    }

    selectedRows.closest("tr").remove();
    alert(`${selectedRows.length} payment row(s) removed`);
});


$(document).on("change", "#ddlOrderType", function () {
    $("#spnReqPoNo").text($(this).val());
});

$(document).on("click", "#btnOtherCharges", function () {
    $("#otherChargesModal").modal("show");
});

$(document).on("click", "#btnConfirmChecklist", function () {
    $("#confirmChecklistModal").modal("show");
});

$(document).on("click", "#btnDeliveryDateBrakUp", function () {
    bindFabricCheckTable();
    $("#confirmFabricContentModal").modal("show");
});

$(document).on("click", "#btnFabricAddRow", function () {
    emptyRowFabricCheck($("#fabricTbody tr").length + 1);
});

$(document).on("click", "#btnFabricRemoveRow", function () {
    const selectedRows = $("#fabricTbody .fabric-row-checkbox:checked");

    if (selectedRows.length === 0) {
        alert("Please select at least one row to remove.");
        return;
    }

    selectedRows.closest("tr").remove();
});


$(document).on("click", ".uploadBtn", function () {
    $("#txtPiNo").val($(this).data("pi-no") || "");
    $("#txtPiDate").val($(this).data("pi-date") || "");
    $("#txtPiQtyRemarks").val("");
    $("#ddlPiResponsiblePerson").val("");
    $("#txtPiTargetDate").val("");
    $("#fileInput").val("");
    $("#piAttachmentTbody").html("");

    bootstrap.Modal.getOrCreateInstance(
        document.getElementById("confirmPiAttachmentModal")
    ).show();
});

$("#confirmPiAttachmentModal")
    .on("shown.bs.modal", function () {
        $(this).css("z-index", 1070);
        $(".modal-backdrop").last().addClass("pi-attachment-backdrop");
    })
    .on("hidden.bs.modal", function () {
        $(".modal-backdrop.pi-attachment-backdrop")
            .removeClass("pi-attachment-backdrop")
            .css({ "z-index": "", "background-color": "", "opacity": "" });
        $(this).css("z-index", "");
    });


$(document).on("shown.bs.modal", "#PerformaModal", function () {
    $(".modal-backdrop").last().addClass("perfoma-backdrop");
});

/* ====================== Payment modal (LC / TT) ====================== */

$(document).on("click", "#btnperformanceSave", function () {
    if (confirm("Do you want to continue?")) {
        $("#PaymentModal").modal("show");
    }
});

$(document).on("shown.bs.modal", "#PaymentModal", loadPaymentPage);

$(document).on("hidden.bs.modal", "#PaymentModal", function () {
    $("#paymentContainer").empty();
    $("body > #PerformaModal").remove();
});

async function loadPaymentPage() {
    const term = $("#ddlPayTerms").val();
    const url = term === "LC"
        ? `/Payments/LetterOfCredit?Type=${types}&modal=1`
        : `/Payments/TT_Payment?Type=${types}&modal=1`;

    const $container = $("#paymentContainer");
    $container.html('<div class="text-center p-4">Loading...</div>');

    try {
        let html = await $.get(url);

       
        html = html.replace(/<script[\s\S]*?<\/script>/gi, "");

        $container.html(html);

       
        $container.find(".modal").each(function () {
            $("body").append(this);
        });

        if (term === "LC") {
            const m = await import("/js/pages/import/letterofcredit.js");
            m.initLetterOfCredit();
        } else {
            const m = await import("/js/pages/import/TT_Payments.js");
            m.initTTPayment();
        }
    } catch (err) {
        console.error("Payment page load/init failed:", err);
        $container.html('<div class="text-danger p-3">Page Not load</div>');
    }
}