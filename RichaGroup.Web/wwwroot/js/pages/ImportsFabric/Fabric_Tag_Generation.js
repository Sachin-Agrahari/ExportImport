$(document).ready(function () {

    initFabricTagGeneration();
    //help click to open
    $("#btnhelpImport").on("click", function () {
        $("#addMenuModalImportHelp").modal("show")
    })

    // table bind here
    bindLCHelpDutyPaymentTable();

});
/*INITIALIZATION */

function initFabricTagGeneration() {

    // SELECT2


    $(".select2-field").select2({
        width: "100%",
        dropdownAutoWidth: false,
        allowClear: true
    });

    // FLATPICKR


    const dateFields = [

        "#txtDate_fabricTagGeneration",

        "#txtBOEDate1_fabricTagGeneration",
        "#txtBOEDate7_fabricTagGeneration",

        "#txtBOEDate_2_fabricTagGeneration",
        "#txtBOEDate_3_fabricTagGeneration",
        "#txtBOEDate_4_fabricTagGeneration",
        "#txtBOEDate_5_fabricTagGeneration",
        "#txtBOEDate_6_fabricTagGeneration",

        "#txtBOEDate_8_fabricTagGeneration",
        "#txtBOEDate_9_fabricTagGeneration",
        "#txtBOEDate_10_fabricTagGeneration",
        "#txtBOEDate_11_fabricTagGeneration",
        "#txtBOEDate_12_fabricTagGeneration",

        "#txtLicenseDate_fabricTagGeneration"

    ];


    dateFields.forEach(function (selector) {

        if ($(selector).length) {

            flatpickr(selector, {
                dateFormat: "d-m-Y",
                allowInput: true
            });

        }

    });
    // SAVE


    $("#btnSave_fabricTagGeneration").on("click", function () {

        saveFabricTagGeneration();

    });

    // REFRESH


    $("#btnRefresh_fabricTagGeneration").on("click", function () {

        Swal.fire({

            title: "Are you sure?",

            text: "Do you want to refresh Fabric Tag Generation?",

            icon: "question",

            showCancelButton: true,

            confirmButtonText: "Yes, Refresh",

            cancelButtonText: "Cancel"

        }).then(function (result) {

            if (result.isConfirmed) {

                refreshFabricTagGeneration();

            }

        });

    });

}
/*  SAVE */

function saveFabricTagGeneration() {

    Swal.fire({

        title: "Are you sure?",

        text: "Do you want to save Fabric Tag Generation?",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Save",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        const data = getFabricTagGenerationData();

        console.log(
            "[FabricTagGeneration] Save Data:",
            data
        );


        showLoader("Saving Fabric Tag Generation...");


        setTimeout(function () {

            hideLoader();


            Swal.fire({

                icon: "success",

                title: "Saved Successfully",

                text: "Fabric Tag Generation saved successfully.",

                timer: 1200,

                showConfirmButton: false

            });

        }, 500);

    });

}
/*GET FORM DATA */

function getFabricTagGenerationData() {

    const data = {};


    // Get all inputs
    $("#txtImportNo_fabricTagGeneration, \
       #txtDate_fabricTagGeneration, \
       #txtBuyer_fabricTagGeneration, \
       #txtStyle_fabricTagGeneration, \
       #txtWastage_fabricTagGeneration, \
       #txtItem_fabricTagGeneration, \
       #txtISlNo_fabricTagGeneration, \
       #txtESlNo_fabricTagGeneration, \
       #txtPerPcsQty_fabricTagGeneration, \
       #txtType_fabricTagGeneration, \
       #txtKgsQty_fabricTagGeneration, \
       #txtKgsType_fabricTagGeneration, \
       #txtValueINR_fabricTagGeneration, \
       #txtLicType_fabricTagGeneration, \
       #txtLicNo_fabricTagGeneration, \
       #txtLicenseDate_fabricTagGeneration, \
       #txtGarmentDesc_fabricTagGeneration, \
       #txtGSM_fabricTagGeneration, \
       #txtIENo_fabricTagGeneration, \
       #txtWtPc_fabricTagGeneration, \
       #txtTotalQuantity_fabricTagGeneration, \
       #txtTotalDuty_fabricTagGeneration, \
       #txtContent_fabricTagGeneration, \
       #txtAfterGSM_fabricTagGeneration")
        .each(function () {

            data[this.id] = $(this).val();

        });


    // Get Select2 values
    data.importCompany =
        $("#ddlImportCompany_fabricTagGeneration").val();

    data.thirdParty =
        $("#ddlThirdParty_fabricTagGeneration").val();

    data.igst =
        $("#ddlIGST_fabricTagGeneration").val();

    data.dutyPaid =
        $("#ddlDutyPaid_fabricTagGeneration").val();


    // BOE 1 and 7
    data.boe1 = getBOEData(1);
    data.boe7 = getBOEData(7);


    // BOE 2-6 and 8-12
    data.boe2to12 = [];

    for (let i = 2; i <= 6; i++) {

        const rightNo = i + 6;

        data.boe2to12.push(
            getBOEData(i)
        );

        data.boe2to12.push(
            getBOEData(rightNo)
        );

    }


    return data;

}
/* GET BOE DATA */

function getBOEData(number) {

    let noSelector;

    let dateSelector;

    let qtySelector;

    let pcsSelector;


    if (number === 1 || number === 7) {

        noSelector =
            "#txtBOENo" +
            number +
            "_fabricTagGeneration";

        dateSelector =
            "#txtBOEDate" +
            number +
            "_fabricTagGeneration";

        qtySelector =
            "#txtBOEQty" +
            number +
            "_fabricTagGeneration";

        pcsSelector =
            "#txtBOEPcs" +
            number +
            "_fabricTagGeneration";

    }
    else {

        noSelector =
            "#txtBOENo_" +
            number +
            "_fabricTagGeneration";

        dateSelector =
            "#txtBOEDate_" +
            number +
            "_fabricTagGeneration";

        qtySelector =
            "#txtBOEQty_" +
            number +
            "_fabricTagGeneration";

        pcsSelector =
            "#txtBOEPcs_" +
            number +
            "_fabricTagGeneration";

    }


    return {

        srNo: number,

        boeNo:
            $(noSelector).val() || "",

        date:
            $(dateSelector).val() || "",

        qty:
            $(qtySelector).val() || "",

        pcs:
            $(pcsSelector).val() || ""

    };

}
//help data binding here 
const lcHelpDutyPaymentData = [
    {
        id: 1,
        importNo: "IMP-1001",
        invoiceDate: "01-09-2025",
        enteredBy: "Vikas",
        updatedBy: "Admin"
    },
    {
        id: 2,
        importNo: "IMP-1002",
        invoiceDate: "05-09-2025",
        enteredBy: "Rahul",
        updatedBy: "Vikas"
    },
    {
        id: 3,
        importNo: "IMP-1003",
        invoiceDate: "10-09-2025",
        enteredBy: "Amit",
        updatedBy: "Admin"
    },
    {
        id: 4,
        importNo: "IMP-1004",
        invoiceDate: "15-09-2025",
        enteredBy: "Priya",
        updatedBy: "Rahul"
    },
    {
        id: 5,
        importNo: "IMP-1005",
        invoiceDate: "20-09-2025",
        enteredBy: "Admin",
        updatedBy: "Vikas"
    }
];
//table bind here 
function bindLCHelpDutyPaymentTable() {

    const $tbody = $("#tblbodyLCHelpDutyPayment");

    if (!$tbody.length) {
        console.error("tblbodyLCHelpDutyPayment not found.");
        return;
    }

    $tbody.empty();

    $.each(lcHelpDutyPaymentData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkLCHelpDutyPayment"
                           data-index="${index}">
                </td>

                <td>
                    ${item.importNo || "—"}
                </td>

                <td>
                    ${item.invoiceDate || "—"}
                </td>

                <td>
                    ${item.enteredBy || "—"}
                </td>

                <td>
                    ${item.updatedBy || "—"}
                </td>

            </tr>
        `;

        $tbody.append(row);
    });
}
$(document).on("change", ".chkLCHelpDutyPayment", function () {

    $(".chkLCHelpDutyPayment")
        .not(this)
        .prop("checked", false);

});
//after save 
$(document).on("click", "#btnSaveImportHelp", function () {

    const $selected = $(".chkLCHelpDutyPayment:checked");

    if (!$selected.length) {

        showWarning(
            "Selection Required",
            "Please select an Import entry."
        );

        return;
    }

    const index = Number($selected.attr("data-index"));
    const selectedRow = lcHelpDutyPaymentData[index];

    if (!selectedRow) {
        console.error("Selected Import record not found.");
        return;
    }

    // Help modal close first
    const helpModalEl = document.getElementById("addMenuModalImportHelp");

    if (!helpModalEl) {
        console.error("#addMenuModalImportHelp not found.");
        return;
    }

    const helpModal = bootstrap.Modal.getOrCreateInstance(helpModalEl);

    helpModal.hide();

    // Wait until Bootstrap modal is fully closed
    $(helpModalEl).one("hidden.bs.modal", function () {

        Swal.fire({
            title: "Enter Reason",
            input: "text",
            inputLabel: "Reason",
            inputPlaceholder: "Enter reason...",
            inputAttributes: {
                autocomplete: "off"
            },
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            focusConfirm: false,

            inputValidator: function (value) {

                if (!value || !value.trim()) {
                    return "Reason is required.";
                }

            },

            didOpen: function () {

                const input = Swal.getInput();

                if (input) {
                    input.focus();
                }
            }

        }).then(function (result) {

            if (!result.isConfirmed) {
                return;
            }

            const reason = result.value.trim();

            // Store selected row + reason
            selectedImportHelpData = {
                ...selectedRow,
                reason: reason
            };

            console.log("Selected Import Data:", selectedImportHelpData);
            console.log("Import No:", selectedImportHelpData.importNo);
            console.log("Invoice Date:", selectedImportHelpData.invoiceDate);
            console.log("Entered By:", selectedImportHelpData.enteredBy);
            console.log("Updated By:", selectedImportHelpData.updatedBy);
            console.log("Reason:", selectedImportHelpData.reason);

            // Show Reason field in main form
            $("#paymentRequestReasonField")
                .removeClass("d-none");

            $("#txtPaymentRequestReason")
                .val(reason);

        });

    });

});