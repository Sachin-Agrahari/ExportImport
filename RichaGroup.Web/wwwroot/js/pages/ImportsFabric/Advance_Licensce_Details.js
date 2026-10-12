$(document).ready(function () {

    initAdvLicDetails();

    //add row button
    // $("#btnAdd_AdvLicDetails").on("click", function () {
    //     window.location.href = "/ImportsFabric/Add_Advance_Licensce_Details"
    // })

     $("#btnAdd_AdvLicDetails").on("click", function () {
     // window.location.href = "/Banking/EPCGLicense";
      $('#addMenuModal').modal('show')
   
    });
    $("#btnImport").on("click", function () {
       $('#addMenuModalImport').modal('show') 
       });
       //export button open 
       $(document).on("click", "#btnExport", function () {

    const modalElement =
        document.getElementById("addMenuModalExport");

    if (!modalElement) {
        console.error("#addMenuModalExport not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();

});
    // $("#btnExport").on("click", function () {
    //    $('#addMenuModalExport').modal('show') 
    //    });

});
/* INITIALIZATION*/

function initAdvLicDetails() {

    bindAllAdvLicTables();

    bindAdvLicEvents();

}
/*STATIC DATA */

/* TABLE 1 */
let importDetailData = [

    {
        buyer: "AEO",
        style: "8121",
        washCare: "52% LINEN 48% VISCOSE YARN DYED WOVEN FABRIC",
        tagContent: "52% LINEN 48% VISCOSE",
        gsm: "145+/-10%",
        keyNo: "23-1121",
        itchs: "53092990",
        grmtQty: "24440.000",
        uom: "SQM",
        fabricQty: "24440.000",
        cifInr: "1857500.00",
        cifCurr: "USD",
        supplier: "Linen Fabric Supplier",
        impSl: "1",
        normsFix: "Y",
        normsFixDt: "10-04-2026",
        importGrup: "GROUP-A",
        supplDt: "12-04-2026",
        normsApp: "Y",
        normsAppDt: "15-04-2026",
        normsAmt: "125000.00",
        normsAmtDt: "18-04-2026"
    },

    {
        buyer: "AEO",
        style: "8926",
        washCare: "52% LINEN 48% VISCOSE BLEACHED WOVEN FABRIC",
        tagContent: "52% LINEN 48% VISCOSE",
        gsm: "145+/-10%",
        keyNo: "23-1341",
        itchs: "53092120",
        grmtQty: "3783.000",
        uom: "SQM",
        fabricQty: "3783.000",
        cifInr: "485600.00",
        cifCurr: "USD",
        supplier: "Global Textile Supplier",
        impSl: "2",
        normsFix: "Y",
        normsFixDt: "12-04-2026",
        importGrup: "GROUP-B",
        supplDt: "14-04-2026",
        normsApp: "Y",
        normsAppDt: "16-04-2026",
        normsAmt: "65000.00",
        normsAmtDt: "19-04-2026"
    },

    {
        buyer: "AEO",
        style: "8926",
        washCare: "52% LINEN 48% VISCOSE DYED WOVEN FABRIC",
        tagContent: "52% LINEN 48% VISCOSE",
        gsm: "145+/-10%",
        keyNo: "23-1341",
        itchs: "53092910",
        grmtQty: "926.000",
        uom: "SQM",
        fabricQty: "926.000",
        cifInr: "126500.00",
        cifCurr: "USD",
        supplier: "Prime Fabric Supplier",
        impSl: "3",
        normsFix: "N",
        normsFixDt: "",
        importGrup: "GROUP-B",
        supplDt: "17-04-2026",
        normsApp: "Y",
        normsAppDt: "20-04-2026",
        normsAmt: "18500.00",
        normsAmtDt: "22-04-2026"
    },

    {
        buyer: "AEO",
        style: "8926",
        washCare: "52% LINEN 48% VISCOSE YARN DYED WOVEN FABRIC",
        tagContent: "52% LINEN 48% VISCOSE",
        gsm: "145+/-10%",
        keyNo: "23-1341",
        itchs: "53092990",
        grmtQty: "2056.000",
        uom: "SQM",
        fabricQty: "2056.000",
        cifInr: "279000.00",
        cifCurr: "USD",
        supplier: "Eastern Textile Mills",
        impSl: "4",
        normsFix: "Y",
        normsFixDt: "20-04-2026",
        importGrup: "GROUP-C",
        supplDt: "22-04-2026",
        normsApp: "Y",
        normsAppDt: "24-04-2026",
        normsAmt: "32000.00",
        normsAmtDt: "26-04-2026"
    }

];
/* TABLE 2 : STYLE WISE */
let styleWiseData = [

    {
        style: "8121",
        keyNo: "23-1121",
        buyer: "AEO",
        garment: "LADIES SHORTS MADE OF 52% LINEN 48% VISCOSE YARN DYED WOVEN FABRIC",
        qty: "18104.000",
        gsm: "145+/-10%",
        eitchs: "62046990",
        fobInr: "9463900.00"
    },

    {
        style: "8926",
        keyNo: "23-1341",
        buyer: "AEO",
        garment: "LADIES TOP MADE OF 52% LINEN 48% VISCOSE BLEACHED WOVEN FABRIC",
        qty: "1610.000",
        gsm: "145+/-10%",
        eitchs: "62114999",
        fobInr: "1477980.00"
    },

    {
        style: "8926",
        keyNo: "23-1341",
        buyer: "AEO",
        garment: "LADIES TOP MADE OF 52% LINEN 48% VISCOSE DYED WOVEN FABRIC",
        qty: "378.000",
        gsm: "145+/-10%",
        eitchs: "62114999",
        fobInr: "346970.00"
    },

    {
        style: "8926",
        keyNo: "23-1341",
        buyer: "AEO",
        garment: "LADIES TOP MADE OF 52% LINEN 48% VISCOSE YARN DYED WOVEN FABRIC",
        qty: "875.000",
        gsm: "145+/-10%",
        eitchs: "62114999",
        fobInr: "803250.00"
    }

];
/* TABLE 3 : WASH CARE */
let washCareData = [

    {
        style: "234780/CL174 SU-25",
        washCare: "98% RECYCLED POLY 2% ELASTANE",
        tagContent: "98% RECYCLED POLY 2% ELASTANE DYED KNITTED FABRIC",
        gsm: "225+/-10%"
    },

    {
        style: "234780/CL174 SU-25",
        washCare: "89% CTN 11% ELASTANE",
        tagContent: "89% CTN 11% ELASTANE DYED KNITTED FABRIC",
        gsm: "200+/-10%"
    },

    {
        style: "234780/CL174 SU-25",
        washCare: "100% RAMIE",
        tagContent: "100% RAMIE DYED WOVEN FABRIC GSM",
        gsm: "55+/-10%"
    }

];
/* TABLE 4 : ADVANCE EXPORT */
let advExportData = [

    {
        style: "234780/CL174 SU-25",
        keyNo: "24-1867",
        buyer: "J. CREW",
        garment: "LADIES DRESS MADE OF 98% RECYCLED POLY 2% ELASTANE",
        qty: "2990.000",
        gsm: "225+/-10%",
        eitchs: "62044999",
        fobInr: "10795840.00",
        fobCurrency: "USD",
        licNo: "01"
    },

    {
        style: "234780/CL174 SU-25",
        keyNo: "24-1867",
        buyer: "J. CREW",
        garment: "LADIES DRESS MADE OF 89% CTN 11% ELASTANE",
        qty: "2990.000",
        gsm: "200+/-10%",
        eitchs: "62044999",
        fobInr: "0.00",
        fobCurrency: "USD",
        licNo: "01"
    },

    {
        style: "234780/CL174 SU-25",
        keyNo: "24-1867",
        buyer: "J. CREW",
        garment: "LADIES DRESS MADE OF 100% RAMIE DYED WOVEN FABRIC",
        qty: "2990.000",
        gsm: "55+/-10%",
        eitchs: "62044999",
        fobInr: "0.00",
        fobCurrency: "USD",
        licNo: "01"
    }

];
/*STATIC BACKUP */

const importDetailDataStatic =
    importDetailData.map(item => ({ ...item }));

const styleWiseDataStatic =
    styleWiseData.map(item => ({ ...item }));

const washCareDataStatic =
    washCareData.map(item => ({ ...item }));

const advExportDataStatic =
    advExportData.map(item => ({ ...item }));
/* BIND ALL TABLES*/

function bindAllAdvLicTables() {

    bindImportDetailTable();

    bindStyleWiseTable();

    bindWashCareTable();

    bindAdvExportTable();

}
/*TABLE 1 */

function bindImportDetailTable() {

    const $tbody = $("#tblbodyImportDetal_AdvLicDetails");

    if (!$tbody.length) {
        console.error("#tblbodyImportDetal_AdvLicDetails not found.");
        return;
    }

    $tbody.empty();

    $.each(importDetailData, function (index, item) {

        $tbody.append(`
            <tr>

                <td>
                    ${renderCell(item, "buyer", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "style", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "washCare", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "tagContent", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "gsm", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "keyNo", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "itchs", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "grmtQty", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "uom", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "fabricQty", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "cifInr", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "cifCurr", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "supplier", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "impSl", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsFix", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsFixDt", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "importGrup", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "supplDt", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsApp", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsAppDt", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsAmt", index, "import")}
                </td>

                <td>
                    ${renderCell(item, "normsAmtDt", index, "import")}
                </td>

                <td class="text-center">

                    <div class="d-flex justify-content-center gap-1">

                        <!-- EDIT -->
                        <button type="button"
                                class="edit-btn btnEditAdvLicDetails"
                                data-type="import"
                                data-index="${index}"
                                title="Edit">

                            <i class="fa-solid fa-pen-to-square"></i>

                        </button>

                        <!-- DELETE -->
                        <button type="button"
                                class="row-btn bg-danger text-white delete-btn btnDeleteAdvLicDetails"
                                data-type="import"
                                data-index="${index}"
                                title="Delete">

                            ${deleteSvg()}

                        </button>

                    </div>

                </td>

            </tr>
        `);

    });
}

//on edit pa open 
let currentImportEditIndex = -1;

$(document).on("click", ".btnEditAdvLicDetails", function () {

    const index = Number($(this).data("index"));

    const item = importDetailData[index];

    if (!item) {
        return;
    }

    currentImportEditIndex = index;

    $("#txtEditBuyer_AdvLicDetails").val(item.buyer);
    $("#txtEditStyle_AdvLicDetails").val(item.style);
    $("#txtEditWashCare_AdvLicDetails").val(item.washCare);
    $("#txtEditTagContent_AdvLicDetails").val(item.tagContent);
    $("#txtEditGsm_AdvLicDetails").val(item.gsm);
    $("#txtEditKeyNo_AdvLicDetails").val(item.keyNo);
    $("#txtEditItchs_AdvLicDetails").val(item.itchs);
    $("#txtEditGrmtQty_AdvLicDetails").val(item.grmtQty);
    $("#txtEditUom_AdvLicDetails").val(item.uom);
    $("#txtEditFabricQty_AdvLicDetails").val(item.fabricQty);
    $("#txtEditCifInr_AdvLicDetails").val(item.cifInr);
    $("#txtEditCifCurr_AdvLicDetails").val(item.cifCurr);
    $("#txtEditSupplier_AdvLicDetails").val(item.supplier);
    $("#txtEditImpSl_AdvLicDetails").val(item.impSl);
    $("#txtEditNormsFix_AdvLicDetails").val(item.normsFix);
    $("#txtEditNormsFixDt_AdvLicDetails").val(item.normsFixDt);
    $("#txtEditImportGrup_AdvLicDetails").val(item.importGrup);
    $("#txtEditSupplDt_AdvLicDetails").val(item.supplDt);
    $("#txtEditNormsApp_AdvLicDetails").val(item.normsApp);
    $("#txtEditNormsAppDt_AdvLicDetails").val(item.normsAppDt);
    $("#txtEditNormsAmt_AdvLicDetails").val(item.normsAmt);
    $("#txtEditNormsAmtDt_AdvLicDetails").val(item.normsAmtDt);

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("addMenuModal")
        )
        .show();
});
//save 
$(document).on("click", "#btnSaveEditImportDetail", function () {

    if (currentImportEditIndex < 0) {
        return;
    }

    const item =
        importDetailData[currentImportEditIndex];

    item.buyer =
        $("#txtEditBuyer_AdvLicDetails").val();

    item.style =
        $("#txtEditStyle_AdvLicDetails").val();

    item.washCare =
        $("#txtEditWashCare_AdvLicDetails").val();

    item.tagContent =
        $("#txtEditTagContent_AdvLicDetails").val();

    item.gsm =
        $("#txtEditGsm_AdvLicDetails").val();

    item.keyNo =
        $("#txtEditKeyNo_AdvLicDetails").val();

    item.itchs =
        $("#txtEditItchs_AdvLicDetails").val();

    item.grmtQty =
        $("#txtEditGrmtQty_AdvLicDetails").val();

    item.uom =
        $("#txtEditUom_AdvLicDetails").val();

    item.fabricQty =
        $("#txtEditFabricQty_AdvLicDetails").val();

    item.cifInr =
        $("#txtEditCifInr_AdvLicDetails").val();

    item.cifCurr =
        $("#txtEditCifCurr_AdvLicDetails").val();

    item.supplier =
        $("#txtEditSupplier_AdvLicDetails").val();

    item.impSl =
        $("#txtEditImpSl_AdvLicDetails").val();

    item.normsFix =
        $("#txtEditNormsFix_AdvLicDetails").val();

    item.normsFixDt =
        $("#txtEditNormsFixDt_AdvLicDetails").val();

    item.importGrup =
        $("#txtEditImportGrup_AdvLicDetails").val();

    item.supplDt =
        $("#txtEditSupplDt_AdvLicDetails").val();

    item.normsApp =
        $("#txtEditNormsApp_AdvLicDetails").val();

    item.normsAppDt =
        $("#txtEditNormsAppDt_AdvLicDetails").val();

    item.normsAmt =
        $("#txtEditNormsAmt_AdvLicDetails").val();

    item.normsAmtDt =
        $("#txtEditNormsAmtDt_AdvLicDetails").val();

    bindImportDetailTable();

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("editImportDetailModal")
        )
        .hide();

    showSuccess(
        "Updated",
        "Import details updated successfully."
    );

    currentImportEditIndex = -1;
});

/*TABLE 2*/

function bindStyleWiseTable() {

    const $tbody = $("#tblbodyStyleWise_AdvLicDetails");

    if (!$tbody.length) {
        console.error("#tblbodyStyleWise_AdvLicDetails not found.");
        return;
    }

    $tbody.empty();

    $.each(styleWiseData, function (index, item) {

        $tbody.append(`
            <tr>

                <td>
                    ${renderCell(item, "style", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "keyNo", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "buyer", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "garment", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "qty", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "gsm", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "eitchs", index, "style")}
                </td>

                <td>
                    ${renderCell(item, "fobInr", index, "style")}
                </td>

                <td class="text-center">
                    ${getActionButtons(
                        "style",
                        index,
                        item._editing === true
                    )}
                </td>

            </tr>
        `);

    });
}
/*TABLE 3 */
function bindWashCareTable() {

    const $tbody = $("#tblbodyWashCare_AdvLicDetails");

    if (!$tbody.length) {
        console.error("#tblbodyWashCare_AdvLicDetails not found.");
        return;
    }

    $tbody.empty();

    $.each(washCareData, function (index, item) {

        $tbody.append(`
            <tr>

                <td>
                    ${renderCell(item, "style", index, "wash")}
                </td>

                <td>
                    ${renderCell(item, "washCare", index, "wash")}
                </td>

                <td>
                    ${renderCell(item, "tagContent", index, "wash")}
                </td>

                <td>
                    ${renderCell(item, "gsm", index, "wash")}
                </td>

                <td class="text-center">
                    ${getActionButtons(
                        "wash",
                        index,
                        item._editing === true
                    )}
                </td>

            </tr>
        `);

    });
}
/*TABLE 4 */

function bindAdvExportTable() {

    const $tbody = $("#tblbodyAdvExport_AdvLicDetails");

    if (!$tbody.length) {
        console.error("#tblbodyAdvExport_AdvLicDetails not found.");
        return;
    }

    $tbody.empty();

    $.each(advExportData, function (index, item) {

        $tbody.append(`
            <tr>

                <td>
                    ${renderCell(item, "style", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "keyNo", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "buyer", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "garment", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "qty", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "gsm", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "eitchs", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "fobInr", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "fobCurrency", index, "export")}
                </td>

                <td>
                    ${renderCell(item, "licNo", index, "export")}
                </td>

                <td class="text-center">
                    ${getActionButtons(
                        "export",
                        index,
                        item._editing === true
                    )}
                </td>

            </tr>
        `);

    });
}
/*EDITABLE CELL */

function renderCell(item, field, index, type) {

    if (item._editing === true) {

        return `
            <input type="text"
                   class="form-control form-control-sm advLic-edit-input"
                   data-type="${type}"
                   data-index="${index}"
                   data-field="${field}"
                   value="${escapeAttribute(item[field])}">
        `;

    }

    return escapeAdvLicHtml(item[field]);

}
/*ACTION BUTTONS */

function getActionButtons(type, index, editing) {

    if (editing) {

        return `

            <div class="d-flex justify-content-center gap-1">

                <!-- SAVE -->

                <button type="button"
                        class="btn btn-outline-success btn-sm btnSaveAdvLicRow"
                        data-type="${type}"
                        data-index="${index}"
                        title="Save">

                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="15"
                         height="15"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round">

                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>

                    </svg>

                </button>


                <!-- DELETE -->

                <button type="button"
                        class="row-btn bg-danger text-white delete-btn btnDeleteAdvLicDetails"
                        data-type="${type}"
                        data-index="${index}"
                        title="Delete">

                    ${deleteSvg()}

                </button>

            </div>

        `;

    }


    return `

        <div class="d-flex justify-content-center gap-1">

            <!-- COPY -->

            <button type="button"
                    class="edit-btn btn-sm btnCopyAdvLicDetails"
                    data-type="${type}"
                    data-index="${index}"
                    title="Copy">

                ${copySvg()}

            </button>


            <!-- DELETE -->

            <button type="button"
                    class="row-btn bg-danger text-white delete-btn btnDeleteAdvLicDetails"
                    data-type="${type}"
                    data-index="${index}"
                    title="Delete">

                ${deleteSvg()}

            </button>

        </div>

    `;

}
/*SVG */

function copySvg() {

    return `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="15"
             height="15"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <rect x="9" y="9" width="13" height="13" rx="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>

        </svg>
    `;

}
function deleteSvg() {

    return `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="15"
             height="15"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M9 6V4h6v2"></path>

        </svg>
    `;

}
/* EVENTS */

function bindAdvLicEvents() {


    /* ADD TABLE 1 */

    $("#btnAddItem_ImportDetal_AdvLicDetails").on(
        "click",
        function () {

            importDetailData.push({

                buyer: "",
                style: "",
                washCare: "",
                tagContent: "",
                gsm: "",
                keyNo: "",
                itchs: "",
                qty: "",
                uom: "",
                q: "",

                _editing: true

            });

            bindImportDetailTable();

            showAdvLicAlert(
                "New row added",
                "You can enter values now."
            );

        }
    );


    /* ADD TABLE 2 */

    $("#btnAddItem_StyleWise_AdvLicDetails").on(
        "click",
        function () {

            styleWiseData.push({

                style: "",
                keyNo: "",
                buyer: "",
                garment: "",
                qty: "",
                gsm: "",
                eitchs: "",
                fobInr: "",

                _editing: true

            });

            bindStyleWiseTable();

            showSuccess(
                "New row added",
                "You can enter values now."
            );

        }
    );


    /* ADD TABLE 3 */

    $("#btnAddItem_WashCare_AdvLicDetails").on(
        "click",
        function () {

            washCareData.push({

                style: "",
                washCare: "",
                tagContent: "",
                gsm: "",

                _editing: true

            });

            bindWashCareTable();

            showSuccess(
                "New row added",
                "You can enter values now."
            );

        }
    );


    /* ADD TABLE 4 */

    $("#btnAddItem_AdvExport_AdvLicDetails").on(
        "click",
        function () {

            advExportData.push({

                style: "",
                keyNo: "",
                buyer: "",
                garment: "",
                qty: "",
                gsm: "",
                eitchs: "",
                fobInr: "",
                fobCurrency: "",
                licNo: "",

                _editing: true

            });

            bindAdvExportTable();

            showSuccess(
                "New row added",
                "You can enter values now."
            );

        }
    );


    /* COPY */

    $(document).on(
        "click",
        ".btnCopyAdvLicDetails",
        function () {

            const type = $(this).data("type");

            const index =
                Number($(this).data("index"));

            copyAdvLicRow(type, index);

        }
    );


    /* SAVE EDITABLE ROW */

    $(document).on(
        "click",
        ".btnSaveAdvLicRow",
        function () {

            const type = $(this).data("type");

            const index =
                Number($(this).data("index"));

            saveAdvLicRow(type, index);

        }
    );


    /* DELETE */

    $(document).on(
        "click",
        ".btnDeleteAdvLicDetails",
        function () {

            const type = $(this).data("type");

            const index =
                Number($(this).data("index"));

            deleteAdvLicRow(type, index);

        }
    );


    /* REFRESH */

    $("#btnRefresh_AdvLicDetails").on(
        "click",
        function () {

            confirmAdvLicRefresh();

        }
    );

}
/*SAVE EDITABLE ROW*/

function saveAdvLicRow(type, index) {

    const dataArray = getDataArray(type);

    if (!dataArray[index]) {
        return;
    }

    const tbodySelector = getTbodySelector(type);

    const $row = $(tbodySelector)
        .find("tr")
        .eq(index);

    if (!$row.length) {
        return;
    }

    $row.find(".advLic-edit-input").each(function () {

        const field = $(this).data("field");

        const value = $(this).val();

        dataArray[index][field] = value;

    });

    dataArray[index]._editing = false;

    rebindAdvLicTable(type);

    showSuccess(
        "Saved Successfully",
        "Row saved successfully."
    );
}
/*  COPY ROW */

function copyAdvLicRow(type, index) {

    const dataArray =
        getDataArray(type);

    const source =
        dataArray[index];

    if (!source) {

        return;

    }


    const copiedRow =
        Object.assign({}, source);

    copiedRow._editing = false;


    dataArray.splice(
        index + 1,
        0,
        copiedRow
    );


    rebindAdvLicTable(type);


    showSuccess(
        "Copied Successfully",
        "Row copied successfully."
    );

}
/* DELETE ROW */

function deleteAdvLicRow(type, index) {

    showWarning(
         "Delete Row?",
         "This row will be removed.",

    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        const dataArray =
            getDataArray(type);

        dataArray.splice(index, 1);


        rebindAdvLicTable(type);


        showSuccess(
          
            "Deleted Successfully",
            "Row deleted successfully."
        );

    });

}
/*GET DATA ARRAY*/

function getDataArray(type) {

    switch (type) {

        case "import":
            return importDetailData;

        case "style":
            return styleWiseData;

        case "wash":
            return washCareData;

        case "export":
            return advExportData;

        default:
            return [];

    }

}
/* GET TABLE SELECTOR*/

function getTableSelector(type) {

    switch (type) {

        case "import":
            return "#tblImportDetal_AdvLicDetails";

        case "style":
            return "#tblStyleWise_AdvLicDetails";

        case "wash":
            return "#tblWashCare_AdvLicDetails";

        case "export":
            return "#tblAdvExport_AdvLicDetails";

        default:
            return "";

    }

}
/* REBIND SINGLE TABLE*/

function rebindAdvLicTable(type) {

    switch (type) {

        case "import":
            bindImportDetailTable();
            break;

        case "style":
            bindStyleWiseTable();
            break;

        case "wash":
            bindWashCareTable();
            break;

        case "export":
            bindAdvExportTable();
            break;

    }

}
/*  REFRESH CONFIRMATION*/

function confirmAdvLicRefresh() {

    showWarning(
         "Refresh?",
        "All changes will be removed.",

    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        refreshAdvLicDetails();

    });

}
/* REFRESH */

function refreshAdvLicDetails() {

    importDetailData =
        importDetailDataStatic.map(
            item => ({ ...item })
        );

    styleWiseData =
        styleWiseDataStatic.map(
            item => ({ ...item })
        );

    washCareData =
        washCareDataStatic.map(
            item => ({ ...item })
        );

    advExportData =
        advExportDataStatic.map(
            item => ({ ...item })
        );


    bindAllAdvLicTables();


    showSuccess(
       
        "Refreshed",
        "Advance License Details refreshed successfully."
    );

}
/*HTML ESCAPE */

function escapeAdvLicHtml(value) {

    return $("<div>")
        .text(
            value == null
                ? ""
                : value
        )
        .html();

}
/* ATTRIBUTE ESCAPE */

function escapeAttribute(value) {

    return $("<div>")
        .text(
            value == null
                ? ""
                : value
        )
        .html()
        .replace(/"/g, "&quot;");

}