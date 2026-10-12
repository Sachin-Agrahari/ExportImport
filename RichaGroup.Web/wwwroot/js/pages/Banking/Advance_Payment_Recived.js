
const advancePaymentData = [
        {
            advanceNo: "ADV-0001",
            date: "21-09-2026",
            buyer: "ABC EXPORTS PVT LTD",
            amount: 25000.00,
            currency: "USD",
            avgRate: 83.45,
            amountINR: 2086250.00,
            boeAdjust: 5000.00,
            balanceAmt: 20000.00,
            irmNumber: "IRM20260001",
            irmDate: "20-09-2026",
            creditAdviceNo: "CA-0001",
            adviceDate: "21-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1001",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 1000.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0002",
            date: "20-09-2026",
            buyer: "GLOBAL TEXTILES LTD",
            amount: 18000.00,
            currency: "USD",
            avgRate: 83.52,
            amountINR: 1503360.00,
            boeAdjust: 3000.00,
            balanceAmt: 15000.00,
            irmNumber: "IRM20260002",
            irmDate: "19-09-2026",
            creditAdviceNo: "CA-0002",
            adviceDate: "20-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1002",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 500.00,
            bank: "ICICI BANK-BNK02"
        },
        {
            advanceNo: "ADV-0003",
            date: "19-09-2026",
            buyer: "SUNRISE GARMENTS",
            amount: 32000.00,
            currency: "EUR",
            avgRate: 98.25,
            amountINR: 3144000.00,
            boeAdjust: 8000.00,
            balanceAmt: 24000.00,
            irmNumber: "IRM20260003",
            irmDate: "18-09-2026",
            creditAdviceNo: "CA-0003",
            adviceDate: "19-09-2026",
            paymentAgainstExport: "No",
            option: "INVOICE NO",
            invoiceDtl: "INV-1003",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 1500.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0004",
            date: "18-09-2026",
            buyer: "FASHION HUB INDIA",
            amount: 15000.00,
            currency: "USD",
            avgRate: 83.38,
            amountINR: 1250700.00,
            boeAdjust: 2500.00,
            balanceAmt: 12500.00,
            irmNumber: "IRM20260004",
            irmDate: "17-09-2026",
            creditAdviceNo: "CA-0004",
            adviceDate: "18-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1004",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 750.00,
            bank: "AXIS BANK-BNK03"
        },
        {
            advanceNo: "ADV-0005",
            date: "17-09-2026",
            buyer: "ROYAL APPARELS LTD",
            amount: 27500.00,
            currency: "GBP",
            avgRate: 115.60,
            amountINR: 3179000.00,
            boeAdjust: 5000.00,
            balanceAmt: 22500.00,
            irmNumber: "IRM20260005",
            irmDate: "16-09-2026",
            creditAdviceNo: "CA-0005",
            adviceDate: "17-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1005",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 2000.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0006",
            date: "16-09-2026",
            buyer: "METRO EXPORTS",
            amount: 12000.00,
            currency: "USD",
            avgRate: 83.60,
            amountINR: 1003200.00,
            boeAdjust: 2000.00,
            balanceAmt: 10000.00,
            irmNumber: "IRM20260006",
            irmDate: "15-09-2026",
            creditAdviceNo: "CA-0006",
            adviceDate: "16-09-2026",
            paymentAgainstExport: "No",
            option: "INVOICE NO",
            invoiceDtl: "INV-1006",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 500.00,
            bank: "ICICI BANK-BNK02"
        },
        {
            advanceNo: "ADV-0007",
            date: "15-09-2026",
            buyer: "PRIME FASHION HOUSE",
            amount: 22000.00,
            currency: "EUR",
            avgRate: 98.10,
            amountINR: 2158200.00,
            boeAdjust: 4000.00,
            balanceAmt: 18000.00,
            irmNumber: "IRM20260007",
            irmDate: "14-09-2026",
            creditAdviceNo: "CA-0007",
            adviceDate: "15-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1007",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 1000.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0008",
            date: "14-09-2026",
            buyer: "ELEGANT WEARS PVT LTD",
            amount: 19500.00,
            currency: "USD",
            avgRate: 83.48,
            amountINR: 1627860.00,
            boeAdjust: 3500.00,
            balanceAmt: 16000.00,
            irmNumber: "IRM20260008",
            irmDate: "13-09-2026",
            creditAdviceNo: "CA-0008",
            adviceDate: "14-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1008",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 750.00,
            bank: "AXIS BANK-BNK03"
        },
        {
            advanceNo: "ADV-0009",
            date: "13-09-2026",
            buyer: "NATIONAL GARMENTS",
            amount: 28000.00,
            currency: "USD",
            avgRate: 83.55,
            amountINR: 2339400.00,
            boeAdjust: 6000.00,
            balanceAmt: 22000.00,
            irmNumber: "IRM20260009",
            irmDate: "12-09-2026",
            creditAdviceNo: "CA-0009",
            adviceDate: "13-09-2026",
            paymentAgainstExport: "No",
            option: "INVOICE NO",
            invoiceDtl: "INV-1009",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 1200.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0010",
            date: "12-09-2026",
            buyer: "URBAN FASHION LTD",
            amount: 16500.00,
            currency: "EUR",
            avgRate: 98.35,
            amountINR: 1622775.00,
            boeAdjust: 3000.00,
            balanceAmt: 13500.00,
            irmNumber: "IRM20260010",
            irmDate: "11-09-2026",
            creditAdviceNo: "CA-0010",
            adviceDate: "12-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1010",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 800.00,
            bank: "ICICI BANK-BNK02"
        },
        {
            advanceNo: "ADV-0011",
            date: "11-09-2026",
            buyer: "ROYAL TEXTILES",
            amount: 21000.00,
            currency: "USD",
            avgRate: 83.42,
            amountINR: 1751820.00,
            boeAdjust: 4500.00,
            balanceAmt: 16500.00,
            irmNumber: "IRM20260011",
            irmDate: "10-09-2026",
            creditAdviceNo: "CA-0011",
            adviceDate: "11-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1011",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 900.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0012",
            date: "10-09-2026",
            buyer: "STAR EXPORT HOUSE",
            amount: 35000.00,
            currency: "GBP",
            avgRate: 115.25,
            amountINR: 4033750.00,
            boeAdjust: 7500.00,
            balanceAmt: 27500.00,
            irmNumber: "IRM20260012",
            irmDate: "09-09-2026",
            creditAdviceNo: "CA-0012",
            adviceDate: "10-09-2026",
            paymentAgainstExport: "No",
            option: "INVOICE NO",
            invoiceDtl: "INV-1012",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 1800.00,
            bank: "AXIS BANK-BNK03"
        },
        {
            advanceNo: "ADV-0013",
            date: "09-09-2026",
            buyer: "GOLDEN THREADS LTD",
            amount: 14500.00,
            currency: "USD",
            avgRate: 83.58,
            amountINR: 1211910.00,
            boeAdjust: 2500.00,
            balanceAmt: 12000.00,
            irmNumber: "IRM20260013",
            irmDate: "08-09-2026",
            creditAdviceNo: "CA-0013",
            adviceDate: "09-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1013",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 600.00,
            bank: "HDFC BANK-BNK05"
        },
        {
            advanceNo: "ADV-0014",
            date: "08-09-2026",
            buyer: "FINE FABRICS INDIA",
            amount: 24000.00,
            currency: "EUR",
            avgRate: 98.42,
            amountINR: 2362080.00,
            boeAdjust: 5000.00,
            balanceAmt: 19000.00,
            irmNumber: "IRM20260014",
            irmDate: "07-09-2026",
            creditAdviceNo: "CA-0014",
            adviceDate: "08-09-2026",
            paymentAgainstExport: "Yes",
            option: "INVOICE NO",
            invoiceDtl: "INV-1014",
            adjustmentType: "MANUAL ADJUSTMENT",
            adjustmentAmount: 1100.00,
            bank: "ICICI BANK-BNK02"
        },
        {
            advanceNo: "ADV-0015",
            date: "07-09-2026",
            buyer: "GLOBAL FASHION EXPORTS",
            amount: 30000.00,
            currency: "USD",
            avgRate: 83.50,
            amountINR: 2505000.00,
            boeAdjust: 6500.00,
            balanceAmt: 23500.00,
            irmNumber: "IRM20260015",
            irmDate: "06-09-2026",
            creditAdviceNo: "CA-0015",
            adviceDate: "07-09-2026",
            paymentAgainstExport: "No",
            option: "INVOICE NO",
            invoiceDtl: "INV-1015",
            adjustmentType: "EXTRA ADJUSTMENT",
            adjustmentAmount: 1300.00,
            bank: "HDFC BANK-BNK05"
        }
    ];

const advPaymentData = [

    {
        convRate: "83.09500",
        amount: "43064.40",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    },

    {
        convRate: "0.00000",
        amount: "0.00",
        ttNumber: "",
        y: "N",
        fwTrx: "F",
        trxAmount: "0.00",
        manualDate: "--",
        extraDate: "--",
        amount2: "0.00"
    }

];

const invoiceDetailsData = [
    {
        invNo: "INV-1001",
        invAmt: 12500.00
    },
    {
        invNo: "INV-1002",
        invAmt: 18500.50
    },
    {
        invNo: "INV-1003",
        invAmt: 9200.00
    },
    {
        invNo: "INV-1004",
        invAmt: 15750.75
    },
    {
        invNo: "INV-1005",
        invAmt: 22100.00
    },
    {
        invNo: "INV-1006",
        invAmt: 11350.25
    }
];

$(document).ready(function () {
    bindAdvancePaymentTable(advancePaymentData);

    initAdvPaymentRecvd(advPaymentData);
        //after select a fw then open a modal according to selection 
    $(document).on("change", "#ddlAdv_FW", function () {

    const selectedValue = $(this).val();

    if (!selectedValue) {
        return;
    }

    // F selected
    if (selectedValue === "F") {

        $("#advanceFModal").modal("show");

        bindAdvanceFTable();

        // const modalEl = document.getElementById("advanceFModal");

        // if (modalEl) {
        //     bootstrap.Modal
        //         .getOrCreateInstance(modalEl)
        //         .show();
        // }
    }

    // p selected
    if (selectedValue === "P") {
         $("#advancePModal").modal("show");
       bindAdvancePTable();

  
    } 
});

});



function initAdvPaymentRecvd(data) {

    const $tbody = $("#tblbody_AdvPaymentRecvd");

    if (!$tbody.length) {

        console.error(
            "[AdvPaymentRecvd] #tblbody_AdvPaymentRecvd not found."
        );

        return null;
    }



    // Destroy existing DataTable
    if ($.fn.DataTable.isDataTable("#tbl_AdvPaymentRecvd")) {

        $("#tbl_AdvPaymentRecvd")
            .DataTable()
            .destroy();
    }


    $tbody.empty();


    if (!Array.isArray(data) || data.length === 0) {

        return $("#tbl_AdvPaymentRecvd").DataTable({

            paging: true,
            searching: false,
            ordering: false,
            info: false,
            lengthChange: false,

            pageLength: 10,

            scrollX: true,
            autoWidth: false,

            language: {
                emptyTable: "No Advance Payment data available",
                zeroRecords: "No matching records found"
            }

        });
    }


    // =========================
    // Bind rows
    // =========================

    $.each(data, function (index, item) {

        const receivedAmount =
            item.receivedAmount ?? item.amount ?? "0.00";

        const receivedDate =
            item.receivedDate ?? "";

        const manualAmount =
            item.manualAmount ?? "0.00";

        const manualDate =
            item.manualDate ?? "--";

        const extraAmount =
            item.extraAmount ?? "0.00";

        const extraDate =
            item.extraDate ?? "--";


        const row = `
            <tr>
             <!-- Action -->
                <td class="c">

                    <button
                        type="button"
                        class="row-btn edit-btn btn-edit-adv-payment"
                        data-index="${index}"
                        title="Edit">

                          <i class="fa-solid fa-pen-to-square"></i>

                    </button>

                </td>

                <!-- # -->
                <td class="c">
                    ${index + 1}
                </td>


                <!-- Cnv. Rate -->
                <td class="r">
                    ${item.convRate ?? ""}
                </td>


                <!-- Amount -->
                <td class="r">
                    ${item.amount ?? ""}
                </td>


                <!-- TT Number -->
                <td>
                    ${item.ttNumber ?? ""}
                </td>
                 <!-- FW -->
                <td class="c">
                    ${item.fwTrx ?? ""}
                </td>

                <!-- Y -->
                <td class="c">
                    ${item.y ?? ""}
                </td>




                <!-- TRW -->
                <td class="r">
                    ${item.trxAmount ?? ""}
                </td>


               


                <!-- Received -->
                <td class="r">
                    ${receivedAmount}
                </td>

                <td>
                    ${receivedDate}
                </td>


                <!-- Manual Adjustment -->
                <td>
                    ${manualDate}
                </td>

                <td class="r">
                    ${manualAmount}
                </td>


                <!-- Extra Adjustment -->
                <td>
                    ${extraDate}
                </td>

                <td class="r">
                    ${extraAmount}
                </td>

            </tr>
        `;

        $tbody.append(row);

    });


    // =========================
    // DataTable
    // =========================

    return $("#tbl_AdvPaymentRecvd").DataTable({

        paging: true,

        searching: false,

        ordering: false,

        info: true,

        lengthChange: false,

        pageLength: 10,

        scrollX: true,

        autoWidth: false,

        language: {

            emptyTable:
                "No Advance Payment data available",

            zeroRecords:
                "No matching records found"

        }

    });
}
//modal open here 
$(document).on(
    "click",
    ".btn-edit-adv-payment",
    function () {

        const index = Number(
            $(this).data("index")
        );

        const item =
            advPaymentData[index];


        if (!item) {

            showWarning(
                "Record Not Found",
                "Advance payment record was not found."
            );

            return;
        }


        // Fill modal
        $("#txtAdv_CnvRate")
            .val(item.convRate ?? "");

        $("#txtAdv_Amount")
            .val(item.amount ?? "");

        $("#txtAdv_TTNumber")
            .val(item.ttNumber ?? "");

        $("#ddlAdv_Y")
            .val(item.y ?? "");

        $("#ddlAdv_FW")
            .val(item.fwTrx ?? "");

        $("#txtAdv_TRW")
            .val(item.trxAmount ?? "");

        $("#txtAdv_ReceivedAmount")
            .val(item.amount ?? "");

        $("#txtAdv_ReceivedDate")
            .val(item.manualDate ?? "");

        $("#txtAdv_ManualDate")
            .val(item.manualDate ?? "");

        $("#txtAdv_ManualAmount")
            .val(
                item.adjustmentType === "MANUAL ADJUSTMENT"
                    ? (item.amount2 ?? "0.00")
                    : "0.00"
            );

        $("#txtAdv_ExtraDate")
            .val(item.extraDate ?? "");

        $("#txtAdv_ExtraAmount")
            .val(
                item.adjustmentType === "EXTRA ADJUSTMENT"
                    ? (item.amount2 ?? "0.00")
                    : "0.00"
            );


        // Store index
        $("#btnSaveAdvPayment")
            .data("index", index);


        // Open modal
        const modalElement =
            document.getElementById(
                "editAdvPaymentModal"
            );

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );

        modal.show();

    }
);
//save button 
$("#btnSaveAdvPayment").on(
    "click",
    function () {

        const index =
            Number($(this).data("index"));

        const item =
            advPaymentData[index];


        if (!item) {

            showWarning(
                "Record Not Found",
                "Advance payment record was not found."
            );

            return;
        }


        item.convRate =
            $("#txtAdv_CnvRate").val().trim();

        item.amount =
            $("#txtAdv_Amount").val().trim();

        item.ttNumber =
            $("#txtAdv_TTNumber").val().trim();

        item.y =
            $("#ddlAdv_Y").val();

        item.fwTrx =
            $("#ddlAdv_FW").val();

        item.trxAmount =
            $("#txtAdv_TRW").val().trim();

        item.manualDate =
            $("#txtAdv_ManualDate").val().trim();

        item.extraDate =
            $("#txtAdv_ExtraDate").val().trim();

        item.amount2 =
            $("#txtAdv_ManualAmount").val().trim();


        // Optional local JSON save
        localStorage.setItem(
            "advPaymentData",
            JSON.stringify(advPaymentData)
        );


        // Rebind DataTable
        initAdvPaymentRecvd(
            advPaymentData
        );


        // Close modal
        const modalElement =
            document.getElementById(
                "editAdvPaymentModal"
            );

        bootstrap.Modal
            .getInstance(modalElement)
            ?.hide();


        showSuccess(
            "Updated",
            "Advance payment record updated successfully."
        );

    }
);

//bind to datatable 
let advancePaymentTable = null;

function bindAdvancePaymentTable(data) {

    const $table = $("#tblAdvancePaymentReceived");
    const $tbody = $("#tblAdvancePaymentReceivedBody");

    if (!$table.length || !$tbody.length) {
        console.error("Advance Payment table not found.");
        return;
    }

    // Existing DataTable destroy
    if ($.fn.DataTable.isDataTable("#tblAdvancePaymentReceived")) {
        $table.DataTable().destroy();
    }

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_AdvancePaymentReceived").removeClass("d-none");

        $tbody.html(`
            <tr>
                <td colspan="20" class="text-center">
                    No Advance Payment Found.
                </td>
            </tr>
        `);

        return;
    }

    $("#noRecordsFound_AdvancePaymentReceived").addClass("d-none");

    $.each(data, function (index, item) {

        const row = `
            <tr>

                <td class="text-center">
                    <button type="button"
                            class="row-btn edit-btn"
                            onclick="EditMatser('${index}')"
                            data-index="${index}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${item.advanceNo || "—"}</td>

                <td>${item.date || "—"}</td>

                <td>${item.buyer || "—"}</td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td>${item.currency || "—"}</td>

                <td class="text-end">
                    ${item.avgRate || "—"}
                </td>

                <td class="text-end">
                    ${item.amountINR || "—"}
                </td>

                <td class="text-end">
                    ${item.boeAdjust || "—"}
                </td>

                <td class="text-end fw-semibold">
                    ${item.balanceAmt || "—"}
                </td>

                <td>${item.irmNumber || "—"}</td>

                <td>${item.irmDate || "—"}</td>

                <td>${item.creditAdviceNo || "—"}</td>

                <td>${item.adviceDate || "—"}</td>

                <td>
                    <span class="badge ${item.paymentAgainstExport === "Yes"
                ? "bg-success"
                : "bg-secondary"
            }">
                        ${item.paymentAgainstExport || "—"}
                    </span>
                </td>

                <td>${item.option || "—"}</td>

                <td>${item.invoiceDtl || "—"}</td>

                <td>${item.adjustmentType || "—"}</td>

                <td class="text-end">
                    ${item.adjustmentAmount || "—"}
                </td>

                <td>${item.bank || "—"}</td>

            </tr>
        `;

        $tbody.append(row);
    });

    // Initialize DataTable
    advancePaymentTable = $table.DataTable({
        paging: true,
        pageLength: 10,
        lengthChange: false,
        searching: true,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,

        language: {
            emptyTable: "No Advance Payment Found.",
            search: "Search:"
        }
    });
}

// function bindAdvancePaymentTable(data) {

//     const $tbody = $("#tblAdvancePaymentReceivedBody");

//     $tbody.empty();

//     if (!data || data.length === 0) {

//         $("#noRecordsFound_AdvancePaymentReceived").removeClass("d-none");

//         return;
//     }

//     $("#noRecordsFound_AdvancePaymentReceived").addClass("d-none");


//     $tbody.empty();
 
//     $.each(data, function (index, item) {

//         const row = ` <tr> 
//              <td class="text-center">
//                  <button
//                      type="button"
//                        class="row-btn edit-btn "
//                        onclick="EditMatser('${index}')"
//                       data-index="${index}"
//                      title="Edit">
//                         <i class="fa-solid fa-pen-to-square"></i>
//                  </button>
//              </td>

//              <td>${item.advanceNo}</td> 
//              <td>${item.date}</td> 
//              <td>${item.buyer}</td> 
//              <td class="text-end"> ${item.amount} </td> 
//              <td>${item.currency}</td> 
//              <td class="text-end"> ${item.avgRate} </td> 
//              <td class="text-end"> ${item.amountINR} </td> 
//              <td class="text-end"> ${item.boeAdjust} </td> 
//              <td class="text-end fw-semibold"> ${item.balanceAmt} </td> 
//              <td>${item.irmNumber}</td> 
//              <td>${item.irmDate}</td> 
//              <td>${item.creditAdviceNo}</td> 
//              <td>${item.adviceDate}</td> 
//              <td>
//                  <span class="badge ${item.paymentAgainstExport === "Yes" ? "bg-success" : "bg-secondary"}">
//                      ${item.paymentAgainstExport}
//                  </span>
//              </td> 
//              <td>${item.option}</td> 
//              <td>${item.invoiceDtl}</td> 
//              <td>${item.adjustmentType}</td> 
//              <td class="text-end"> ${item.adjustmentAmount} </td> 
//              <td>${item.bank}</td> 
//         </tr>`;

//         $tbody.append(row);
//     });
// }

function initInvoiceDetails(data) {

    const $tbody = $("#tblbodyInvoiceDetails_AdvPaymentRecvd");

    // Clear existing rows
    $tbody.empty();

    if (!Array.isArray(data) || data.length === 0) {
        $tbody.append(`
            <tr>
                <td colspan="4" class="text-center text-muted">
                    No invoice details found.
                </td>
            </tr>
        `);

        return;
    }

    $.each(data, function (index, item) {

        const invAmt = parseFloat(item.invAmt) || 0;

        const row = `<tr>
             <td class="text-center"> ${index + 1} </td> 
             <td> ${item.invNo ?? ""} </td> 
             <td class="text-end"> ${invAmt.toFixed(2)} </td> 
             <td class="text-center">
                <button type="button"
                        class="row-btn danger"
                        data-index="${index}"
                        title="Delete">
                    🗑
                </button>
             </td>
        </tr>`;

        $tbody.append(row);
    });
}

$("#btnAdd").on("click", function () {
    window.location.href = "/Banking/Advance_Payment_Recived";
});

$("#btnBack").on("click", function () {
    window.location.href = "/Banking/viewAdvancePayment";
});

$("#addInvDtls").on("click", function () {
    initInvoiceDetails(invoiceDetailsData)
    $('#addInvoiceDtls').modal('show')
});
function EditMatser(id) {
     window.location.href = "/Banking/Advance_Payment_Recived";
}

//for after selection of P the table 
// static data 
const advancePData = [
    {
        id: 1,
        pcfcNo: "PCFC-1001",
        transactionNo: "TRX-2935",
        rate: "74.5300",
        dueDate: "13-11-2025",
        balanceAmount: "1,25,000.00"
    },
    {
        id: 2,
        pcfcNo: "PCFC-1002",
        transactionNo: "TRX-2936",
        rate: "75.1200",
        dueDate: "20-11-2025",
        balanceAmount: "2,10,500.00"
    },
    {
        id: 3,
        pcfcNo: "PCFC-1003",
        transactionNo: "TRX-2937",
        rate: "83.4500",
        dueDate: "05-12-2025",
        balanceAmount: "98,750.00"
    },
    {
        id: 4,
        pcfcNo: "PCFC-1004",
        transactionNo: "TRX-2938",
        rate: "82.9500",
        dueDate: "12-12-2025",
        balanceAmount: "1,75,000.00"
    },
    {
        id: 5,
        pcfcNo: "PCFC-1005",
        transactionNo: "TRX-2939",
        rate: "84.1000",
        dueDate: "18-12-2025",
        balanceAmount: "3,25,000.00"
    }
];
function bindAdvancePTable() {

    const $tbody = $("#tblbodyAdvanceP");

    if (!$tbody.length) {
        console.error("#tblbodyAdvanceP not found.");
        return;
    }

    $tbody.empty();

    $.each(advancePData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkAdvanceP"
                           data-index="${index}">
                </td>

                <td>
                    ${item.pcfcNo || "—"}
                </td>

                <td>
                    ${item.transactionNo || "—"}
                </td>

                <td class="text-end">
                    ${item.rate || "—"}
                </td>

                <td>
                    ${item.dueDate || "—"}
                </td>

                <td class="text-end">
                    ${item.balanceAmount || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}

$(document).on("change", ".chkAdvanceP", function () {

    $(".chkAdvanceP")
        .not(this)
        .prop("checked", false);

});
 
//afetr f slection 
const advanceFData = [
    {
        id: 1,
        transactionNo: "TRX-3001",
        date: "01-09-2025",
        amount: "1,25,000.00",
        rate: "74.5300",
        fromDate: "01-09-2025",
        toDate: "30-09-2025",
        balance: "75,000.00",
        inr: "9,31,625.00",
        contractNo: "CNT-1001"
    },
    {
        id: 2,
        transactionNo: "TRX-3002",
        date: "05-09-2025",
        amount: "2,50,000.00",
        rate: "75.1200",
        fromDate: "05-09-2025",
        toDate: "05-10-2025",
        balance: "1,20,000.00",
        inr: "18,78,000.00",
        contractNo: "CNT-1002"
    },
    {
        id: 3,
        transactionNo: "TRX-3003",
        date: "10-09-2025",
        amount: "98,500.00",
        rate: "83.4500",
        fromDate: "10-09-2025",
        toDate: "10-10-2025",
        balance: "45,500.00",
        inr: "8,22,625.00",
        contractNo: "CNT-1003"
    },
    {
        id: 4,
        transactionNo: "TRX-3004",
        date: "15-09-2025",
        amount: "1,75,000.00",
        rate: "82.9500",
        fromDate: "15-09-2025",
        toDate: "15-10-2025",
        balance: "80,000.00",
        inr: "14,51,250.00",
        contractNo: "CNT-1004"
    },
    {
        id: 5,
        transactionNo: "TRX-3005",
        date: "20-09-2025",
        amount: "3,25,000.00",
        rate: "84.1000",
        fromDate: "20-09-2025",
        toDate: "20-10-2025",
        balance: "1,50,000.00",
        inr: "27,33,250.00",
        contractNo: "CNT-1005"
    }
];
//bind data table 
function bindAdvanceFTable() {

    const $tbody = $("#tblbodyAdvanceF");

    if (!$tbody.length) {
        console.error("#tblbodyAdvanceF not found.");
        return;
    }

    $tbody.empty();

    $.each(advanceFData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkAdvanceF"
                           data-index="${index}">
                </td>

                <td>
                    ${item.transactionNo || "—"}
                </td>

                <td>
                    ${item.date || "—"}
                </td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td class="text-end">
                    ${item.rate || "—"}
                </td>

                <td>
                    ${item.fromDate || "—"}
                </td>

                <td>
                    ${item.toDate || "—"}
                </td>

                <td class="text-end">
                    ${item.balance || "—"}
                </td>

                <td class="text-end">
                    ${item.inr || "—"}
                </td>

                <td>
                    ${item.contractNo || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
$(document).on("change", ".chkAdvanceF", function () {

    $(".chkAdvanceF")
        .not(this)
        .prop("checked", false);

});


 