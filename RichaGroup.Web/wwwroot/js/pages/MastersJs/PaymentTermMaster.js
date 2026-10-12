

// Static Data
const paymentTermData = [
    { paymentTerm: "100% ADVANCE AGAINST PI", status: "Active" },
    { paymentTerm: "100% ADVANCE WITH PO", status: "Active" },
    { paymentTerm: "15 DAYS", status: "Active" },
    { paymentTerm: "30 - 45 DAYS", status: "Active" },
    { paymentTerm: "30 DAYS", status: "Active" },
    { paymentTerm: "30 DAYS PDC", status: "Active" },
    { paymentTerm: "30% ADV & BAL. AGST PI", status: "Active" },
    { paymentTerm: "45 days sight", status: "Active" },
    { paymentTerm: "45-60 DAYS", status: "Active" },
    { paymentTerm: "50% ADVANCE & 50 % AFTER INSPECTION BEFORE DISPATCH", status: "Active" },
    { paymentTerm: "50% advance & bal. after Installation", status: "Active" },
    { paymentTerm: "50% advance & bal. agst. PI", status: "Active" },
    { paymentTerm: "60 DAYS", status: "Active" },
    { paymentTerm: "90 DAY", status: "Active" },
    { paymentTerm: "Against Delivery", status: "Active" },
    { paymentTerm: "AS PREVIOUS", status: "Active" },
    { paymentTerm: "Cash", status: "Active" },
    { paymentTerm: "COD12", status: "Active" }
];
// DataTable

let paymentTermTable = null;

let selectedPaymentTermIndex = null;

$(document).ready(function () {

    bindPaymentTermData();

}); 

// Bind Table

function bindPaymentTermData() {

    const $tbody = $("#tblbodyPaymentTerm");

    if (!$tbody.length) {
        console.error(
            "[PaymentTerm] #tblbodyPaymentTerm not found."
        );
        return;
    }

    $tbody.empty();


    $.each(paymentTermData, function (index, item) {

        const row = ` <tr> 
             <td>
                  <button
                     type="button"
                     class="row-btn edit-btn"
                     title="Edit"
                     onclick="EditMatser('${index}')"
                     data-code="${index}">
                      <i class="fa-solid fa-pen-to-square"></i>
                 </button>
             </td> 
             <td> ${item.paymentTerm} </td>  
        </tr>`;

        $tbody.append(row);

    });

}


function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});
