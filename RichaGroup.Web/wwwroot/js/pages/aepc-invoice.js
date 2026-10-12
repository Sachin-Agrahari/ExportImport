//variables
let commonEditType = "";
let commonEditIndex = -1;

$(document).ready(function () {
    const tabBtns = [...document.querySelectorAll('.tabs button')];
    tabBtns.forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('on', p.id === b.dataset.tab));
        tabBtns.forEach(x => x.classList.toggle('on', x === b));
    }));

    document.querySelectorAll('tbody input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => cb.closest('tr').classList.toggle('selected', cb.checked));
    });

    

    //itit flatpicker 
    $("#txt_Parties_commerical_toDate").flatpickr({
         dateFormat: "d-m-Y",
        allowInput: true,
         defaultDate: "today"
    })
    $("#txt_GST_eInvoice_date").flatpickr({
         dateFormat: "d-m-Y",
        allowInput: true,
         defaultDate: "today"
    })
    $("#txtLicenseDt").flatpickr({
         dateFormat: "d-m-Y",
        allowInput: true,
         defaultDate: "today"
    })
    $("#txtBeDate").flatpickr({
         dateFormat: "d-m-Y",
        allowInput: true,
         defaultDate: "today"
    })

    //main page table bind 
    bindInvoiceList(invoiceListData);
    
    // STYLE / PO NO DATATABLE
 
    bindStylePoNoTable();
    //carton weight tale bind
     bindCartonWeightData(); 
     //license bond table
         bindLicenseBondData();
           $("#btnlicensedetails1").on("click", function() {
             AddButtonIntable1();
         })
         $("#btnlicensedetails2").on("click", function() {
             AddButtonIntable2();
         })

         //save a both table data 
        $("#btnSaveLicenseBondTable1").on("click", function () {

    const row = {

        qty: $("#txtLicenseQty").val().trim(),

        uom: $("#txtLicenseUom").val().trim(),

        item: $("#txtLicenseItem").val().trim(),

        consPc: $("#txtLicenseConsPc").val().trim(),

        consUom: $("#txtLicenseConsUom").val().trim(),

        totalCons: $("#txtLicenseTotalCons").val().trim(),

        ieNormsNo: $("#txtLicenseIeNormsNo").val().trim(),

        impSlNo: $("#txtLicenseImpSlNo").val().trim(),

        expSlNo: $("#txtLicenseExpSlNo").val().trim(),

        licenseNo: $("#txtLicenseNo").val().trim(),

        licenseDt: $("#txtLicenseDt").val().trim()

    };


    // Field display names
    const fieldLabels = {

        qty: "Qty",
        uom: "UOM",
        item: "Item",
        consPc: "Cons./PC",
        consUom: "UOM",
        totalCons: "Total Cons.",
        ieNormsNo: "IE Norms No.",
        impSlNo: "Imp SL No",
        expSlNo: "Exp SL No",
        licenseNo: "License No",
        licenseDt: "License Dt"

    };


    // Find empty field
    const emptyField = Object.entries(row)
        .find(([key, value]) => !value);


    if (emptyField) {

        const fieldName =
            fieldLabels[emptyField[0]] || emptyField[0];

        showInfo(
            "Missing Information",
            `${fieldName} is required. Please enter ${fieldName}.`
        );

        return;
    }


    // Add JSON data
    licenseBondData.push(row);


    // Save JSON
    localStorage.setItem(
        "licenseBondData",
        JSON.stringify(licenseBondData)
    );


    // Rebind table
    bindLicenseBondData();


    // Close modal
    const modalElement =
        document.getElementById("addLicencseBondTable1");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    modal?.hide();


    showSuccess(
        "Saved",
        "License Bond Table 1 record added successfully."
    );

});
//table 2
        $("#btnSaveLicenseBondTable2").on("click", function () {

    const row = {

        bondNo: $("#txtBondNo").val().trim(),

        bondValue: $("#txtBondValue").val().trim(),

        beNo: $("#txtBeNo").val().trim(),

        beDate: $("#txtBeDate").val().trim(),

        rate: $("#txtBondRate").val().trim(),

        curr: $("#txtBondCurr").val().trim(),

        itemDescription:
            $("#txtBondItemDescription").val().trim(),

        qty: $("#txtBondQty").val().trim(),

        uom: $("#txtBondUom").val().trim()

    };


    // Field display names
    const fieldLabels = {

        bondNo: "Bond No.",
        bondValue: "Bond Value",
        beNo: "B/E No.",
        beDate: "B/E Date",
        rate: "Rate",
        curr: "Curr",
        itemDescription: "Item Description",
        qty: "Qty",
        uom: "UOM"

    };


    // Find empty field
    const emptyField = Object.entries(row)
        .find(([key, value]) => !value);


    if (emptyField) {

        const fieldName =
            fieldLabels[emptyField[0]] || emptyField[0];

        showInfo(
            "Missing Information",
            `${fieldName} is required. Please enter ${fieldName}.`
        );

        return;
    }


    // Add JSON data
    bondDetailsData.push(row);


    // Save JSON
    localStorage.setItem(
        "bondDetailsData",
        JSON.stringify(bondDetailsData)
    );


    // Rebind table
    bindLicenseBondData();


    // Close modal
    const modalElement =
        document.getElementById("addLicencseBondTable2");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    modal?.hide();


    showSuccess(
        "Saved",
        "Bond Details record added successfully."
    );

});
    
})

//add and   open modal 
function AddButtonIntable1() {

    clearLicenseBondTable1Form();

    const modalElement =
        document.getElementById("addLicencseBondTable1");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
}


function AddButtonIntable2() {

    clearLicenseBondTable2Form();

    const modalElement =
        document.getElementById("addLicencseBondTable2");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
}

function openModal(id) {
    $(`#${id}`).modal('show')
}

//static data 
const  stylePoNoData = [

    [
        "",
        "14310649",
        "2557659-US1BU-L",
        "61045300",
        "61045300",
        "USA/NA",
        "Ladies Skirt",
        "Ladies skirt, 92% polyester / 8% elastane, polyknit lining",
        "—",
        "3,612",
        "PCS",
        "10.55",
        "38,106.60",
        "10.55",
        "38,106.60",
        "NA",
        "N",
        "N",
        "0.00",
        "0.00",
        "1,091.630",
        "1,091.630",
        "N",
        "61040303",
        "2.90",
        "61040303",
        "2.90",
        "0.00",
        "0.00",
        "0.00",
        "4.75",
        "2.10",
        "2.65",
        "0.00",
        "0.00",
        "0.00",
        "0.00",
        "—",
        "0.00"
    ],

    [
        "",
        "14310649",
        "2557659-US1BU-L",
        "61045300",
        "61045300",
        "USA/NA",
        "Ladies Skirt",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—"
    ],

    [
        "",
        "14310649",
        "2557659-US1BU-L",
        "61045300",
        "61045300",
        "USA/NA",
        "Ladies Skirt",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—"
    ],

    [
        "",
        "14310649",
        "2557659-US1BU-L",
        "61045300",
        "61045300",
        "USA/NA",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—",
        "—"
    ]

];

//bind data table
function bindStylePoNoTable() {

    const $tbody = $("#tblbody_Style_poNo");
    const $tfoot = $("#tblfoot_Style_poNo");

    if (!$tbody.length) {
        console.error("[StylePoNo] #tblbody_Style_poNo not found.");
        return;
    }

    if (!$tfoot.length) {
        console.error("[StylePoNo] #tblfoot_Style_poNo not found.");
        return;
    }

    // Destroy existing DataTable
    if ($.fn.DataTable.isDataTable("#tbl_Style_poNo")) {
        $("#tbl_Style_poNo").DataTable().destroy();
    }

    $tbody.empty();
    $tfoot.empty();


    // =========================
    // Bind Body
    // =========================
    $.each(stylePoNoData, function (index, item) {

        const row = `
            <tr>

                              <td class="c fz1">
                                <button
                                    type="button"
                                    class="row-btn edit-btn"
                                    title="Edit"
                                    data-index="${index}"
                                    onclick="EditMatser('style', ${index})">
                            
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                            
                                        <path d="M12 20h9"></path>
                            
                                        <path d="M16.5 3.5
                                                 a2.121 2.121 0 0 1 3 3
                                                 L7 19
                                                 l-4 1
                                                 1-4
                                                 Z">
                                        </path>
                            
                                    </svg>
                            
                                </button>

                                 <button
                                     type="button"
                                     class="row-btn edit-btn"
                                     title="View"
                                     data-index="${index}"
                                     onclick="openModal('m-style-edit')">
                                     &#128065;
                                 </button>
                            </td>

                <td class="mono fz2">${item[1] ?? ""}</td>
                <td class="mono fz3">${item[2] ?? ""}</td>
                <td class="mono fz4">${item[3] ?? ""}</td>
                <td class="mono fz5">${item[4] ?? ""}</td>
                <td class="fz6">${item[5] ?? ""}</td>
                <td>${item[6] ?? ""}</td>
                <td>${item[7] ?? ""}</td>
                <td>${item[8] ?? ""}</td>
                <td class="r">${item[9] ?? ""}</td>
                <td>${item[10] ?? ""}</td>
                <td class="r">${item[11] ?? ""}</td>
                <td class="r">${item[12] ?? ""}</td>
                <td class="r">${item[13] ?? ""}</td>
                <td class="r">${item[14] ?? ""}</td>
                <td>${item[15] ?? ""}</td>
                <td class="c">${item[16] ?? ""}</td>
                <td class="c">${item[17] ?? ""}</td>
                <td class="r">${item[18] ?? ""}</td>
                <td class="r">${item[19] ?? ""}</td>
                <td class="r">${item[20] ?? ""}</td>
                <td class="r">${item[21] ?? ""}</td>
                <td class="c">${item[22] ?? ""}</td>
                <td>${item[23] ?? ""}</td>
                <td class="r">${item[24] ?? ""}</td>
                <td class="r">${item[25] ?? ""}</td>
                <td class="r">${item[26] ?? ""}</td>
                <td class="r">${item[27] ?? ""}</td>
                <td class="r">${item[28] ?? ""}</td>
                <td class="r">${item[29] ?? ""}</td>
                <td class="r">${item[30] ?? ""}</td>
                <td class="r">${item[31] ?? ""}</td>
                <td class="r">${item[32] ?? ""}</td>
                <td class="r">${item[33] ?? ""}</td>
                <td class="r">${item[34] ?? ""}</td>
                <td class="r">${item[35] ?? ""}</td>
                <td class="r">${item[36] ?? ""}</td>
                <td>${item[37] ?? ""}</td>
                <td class="r">${item[38] ?? ""}</td>

            </tr>
        `;

        $tbody.append(row);
    });

    // Footer Total 
    function numberValue(value) {

        if (
            value === null ||
            value === undefined ||
            value === "" ||
            value === "—" ||
            value === "-"
        ) {
            return 0;
        }

        return parseFloat(
            String(value).replace(/,/g, "")
        ) || 0;
    }


    let totalQuantity = 0;
    let totalAmount = 0;
    let totalFOBValue = 0;


    $.each(stylePoNoData, function (index, item) {

        totalQuantity += numberValue(item[9]);
        totalAmount += numberValue(item[12]);
        totalFOBValue += numberValue(item[14]);

    });


    // Footer row generate
    const footerRow = `
        <tr>

            <td colspan="9" style="text-align:right">
                Total
            </td>

            <td class="r">
                ${totalQuantity.toLocaleString("en-IN")}
            </td>

            <td></td>

            <td></td>

            <td class="r">
                ${totalAmount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
            </td>

            <td></td>

            <td class="r">
                ${totalFOBValue.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
            </td>

            <td colspan="24"></td>

        </tr>
    `;

    $tfoot.html(footerRow);

    // DataTable init
    const table = $("#tbl_Style_poNo").DataTable({

        paging: true,
        searching: false,
        ordering: false,
        info: false,
        lengthChange: false,
        pageLength: 10,

        scrollX: false,
        autoWidth: false,

        language: {
            emptyTable: "No Style / PO data available",
            zeroRecords: "No matching records found"
        }

    });


    return table;
}


//static data carton weight

const cartonWeightData = [
    {
        cartonType: "199",
        length: "50.000",
        width: "28.000",
        height: "23.000",
        uom: "CMS",
        cartons: "171",
        cartonGrWt: "1,091.630",
        cartonNtWt: "866.730",
        cartonWt: "0.000",
        grossWt: "0.00"
    },
    {
        cartonType: "199",
        length: "50.000",
        width: "28.000",
        height: "15.000",
        uom: "CMS",
        cartons: "2",
        cartonGrWt: "0.000",
        cartonNtWt: "0.000",
        cartonWt: "0.000",
        grossWt: "0.000"
    },
    {
        cartonType: "—",
        length: "—",
        width: "—",
        height: "—",
        uom: "—",
        cartons: "—",
        cartonGrWt: "—",
        cartonNtWt: "—",
        cartonWt: "—",
        grossWt: "—"
    }
];

function bindCartonWeightData() {

    const $tbody = $("#tblbody_Carton_Weight");

    if (!$tbody.length) {

        console.error(
            "[CartonWeight] #tblbody_Carton_Weight not found."
        );

        return;
    }

    $tbody.empty();



    // Bind rows
    $.each(cartonWeightData, function (index, item) {

        const row = `
            <tr>

                <!-- # -->
                <td class="c">
                    ${index + 1}
                </td>

                <!-- Carton Type -->
                <td class="mono">
                    ${item.cartonType ?? ""}
                </td>

                <!-- Length -->
                <td class="r num">
                    ${item.length ?? ""}
                </td>

                <!-- Width -->
                <td class="r num">
                    ${item.width ?? ""}
                </td>

                <!-- Height -->
                <td class="r num">
                    ${item.height ?? ""}
                </td>

                <!-- UOM -->
                <td>
                    ${item.uom ?? ""}
                </td>

                <!-- Cartons -->
                <td class="r num">
                    ${item.cartons ?? ""}
                </td>

                <!-- Carton GR Wt -->
                <td class="r num">
                    ${item.cartonGrWt ?? ""}
                </td>

                <!-- Carton NT Wt -->
                <td class="r num">
                    ${item.cartonNtWt ?? ""}
                </td>

                <!-- Carton Wt -->
                <td class="r num">
                    ${item.cartonWt ?? ""}
                </td>

                <!-- Gross Wt -->
                <td class="r num">
                    ${item.grossWt ?? ""}
                </td>

            </tr>
        `;

        $tbody.append(row);


    });

}
//static data license bond table 1 and table 2 
const licenseBondData = [
    {
        qty: "1067",
        uom: "NOS.",
        item: "FABRIC",
        consPc: "1.460",
        consUom: "SQM",
        totalCons: "1557.820",
        ieNormsNo: "NO NORMS",
        impSlNo: "1",
        expSlNo: "1",
        licenseNo: "0511038863",
        licenseDt: "27/03/2026"
    },
    {
        qty: "1067",
        uom: "NOS.",
        item: "FABRIC",
        consPc: "1.460",
        consUom: "SQM",
        totalCons: "1557.820",
        ieNormsNo: "NO NORMS",
        impSlNo: "1",
        expSlNo: "1",
        licenseNo: "0511038863",
        licenseDt: "27/03/2026"
    }
];


const bondDetailsData = [
    {
        bondNo: "2002444129",
        bondValue: "41148.00",
        beNo: "7363654",
        beDate: "06/02/2026",
        itemDescription: "BUTTONS",
        rate: "0.021",
        curr: "US$",
        qty: "2134",
        uom: "PCS"
    },
    {
        bondNo: "2002444129",
        bondValue: "41148.00",
        beNo: "7363654",
        beDate: "06/02/2026",
        itemDescription: "BUTTONS",
        rate: "0.021",
        curr: "US$",
        qty: "3201",
        uom: "PCS"
    }
];
function bindLicenseBondData() {

    // ==========================================
    // TABLE 1 : License Details
    // ==========================================

    const $licenseTbody = $("#tblbody_License_Bond");

    if (!$licenseTbody.length) {
        console.error(
            "[LicenseBond] #tblbody_License_Bond not found."
        );
        return;
    }

    // Destroy existing DataTable
    //if ($.fn.DataTable.isDataTable("#tbl_License_Bond")) {
    //    $("#tbl_License_Bond").DataTable().destroy();
    //}

    // Clear tbody
    $licenseTbody.empty();

    // Bind License data
    $.each(licenseBondData, function (index, item) {

        const row = `
            <tr>

                <td>
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditMatser('license', ${index})">

                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">

                            <path d="M12 20h9"></path>

                            <path d="M16.5 3.5
                                     a2.121 2.121 0 0 1 3 3
                                     L7 19
                                     l-4 1
                                     1-4
                                     Z">
                            </path>

                        </svg>

                    </button>
                </td>

                <td class="r num">
                    ${item.qty ?? ""}
                </td>

                <td>
                    ${item.uom ?? ""}
                </td>

                <td>
                    ${item.item ?? ""}
                </td>

                <td class="r num">
                    ${item.consPc ?? ""}
                </td>

                <td>
                    ${item.consUom ?? ""}
                </td>

                <td class="r num">
                    ${item.totalCons ?? ""}
                </td>

                <td>
                    ${item.ieNormsNo ?? ""}
                </td>

                <td class="r num">
                    ${item.impSlNo ?? ""}
                </td>

                <td class="r num">
                    ${item.expSlNo ?? ""}
                </td>

                <td class="mono">
                    ${item.licenseNo ?? ""}
                </td>

                <td>
                    ${item.licenseDt ?? ""}
                </td>

            </tr>
        `;

        $licenseTbody.append(row);
    });

    // Initialize License DataTable
    //const licenseTable = $("#tbl_License_Bond").DataTable({

    //    paging: true,
    //    searching: false,
    //    ordering: false,
    //    info: false,
    //    lengthChange: false,
    //    pageLength: 10,

    //    scrollX: false,
    //    autoWidth: false,

    //    language: {
    //        emptyTable: "No License data available",
    //        zeroRecords: "No matching records found"
    //    }

    //});


    // ==========================================
    // TABLE 2 : Bond Details
    // ==========================================

    const $bondTbody = $("#tblbody_Bond_Details");

    //if (!$bondTbody.length) {
    //    console.error(
    //        "[BondDetails] #tblbody_Bond_Details not found."
    //    );

    //    return {
    //        licenseTable: licenseTable
    //    };
    //}

    // Destroy existing DataTable
    //if ($.fn.DataTable.isDataTable("#tbl_Bond_Details")) {
    //    $("#tbl_Bond_Details").DataTable().destroy();
    //}

    // Clear tbody
    $bondTbody.empty();

    // Bind Bond data
    $.each(bondDetailsData, function (index, item) {

        const row = `
            <tr>

                <td>
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditMatser('bond', ${index})">

                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">

                            <path d="M12 20h9"></path>

                            <path d="M16.5 3.5
                                     a2.121 2.121 0 0 1 3 3
                                     L7 19
                                     l-4 1
                                     1-4
                                     Z">
                            </path>

                        </svg>

                    </button>
                </td>

                <td class="mono">
                    ${item.bondNo ?? ""}
                </td>

                <td class="r num">
                    ${item.bondValue ?? ""}
                </td>

                <td>
                    ${item.beNo ?? ""}
                </td>

                <td>
                    ${item.beDate ?? ""}
                </td>

                <td class="r num">
                    ${item.rate ?? ""}
                </td>

                <td>
                    ${item.curr ?? ""}
                </td>

                <td>
                    ${item.itemDescription ?? ""}
                </td>

                <td class="r num">
                    ${item.qty ?? ""}
                </td>

                <td>
                    ${item.uom ?? ""}
                </td>

            </tr>
        `;

        $bondTbody.append(row);
    });

    // Initialize Bond DataTable
    //const bondTable = $("#tbl_Bond_Details").DataTable({

    //    paging: true,
    //    searching: false,
    //    ordering: false,
    //    info: false,
    //    lengthChange: false,
    //    pageLength: 10,

    //    scrollX: false,
    //    autoWidth: false,

    //    language: {
    //        emptyTable: "No Bond data available",
    //        zeroRecords: "No matching records found"
    //    }

    //});


    //return {
    //    licenseTable: licenseTable,
    //    bondTable: bondTable
    //};
}
//clear a row 
function clearLicenseBondTable1Form() {

    $("#txtLicenseQty").val("");
    $("#txtLicenseUom").val("");
    $("#txtLicenseItem").val("");
    $("#txtLicenseConsPc").val("");
    $("#txtLicenseConsUom").val("");
    $("#txtLicenseTotalCons").val("");
    $("#txtLicenseIeNormsNo").val("");
    $("#txtLicenseImpSlNo").val("");
    $("#txtLicenseExpSlNo").val("");
    $("#txtLicenseNo").val("");
    $("#txtLicenseDt").val("");
}
function clearLicenseBondTable2Form() {

    $("#txtBondNo").val("");
    $("#txtBondValue").val("");
    $("#txtBeNo").val("");
    $("#txtBeDate").val("");
    $("#txtBondRate").val("");
    $("#txtBondCurr").val("US$");
    $("#txtBondItemDescription").val("");
    $("#txtBondQty").val("");
    $("#txtBondUom").val("");
}

//open modal for license/bond modal open for the edit 

function EditMatser(type, index) {

    if (!type || index === undefined || index === null) {
        showWarning(
            "Invalid Record",
            "Record information is missing."
        );
        return;
    }

    commonEditType = type;
    commonEditIndex = Number(index);

     if (type === "style") {

        const item = stylePoNoData[commonEditIndex];

        if (!item) {
            showWarning(
                "Record Not Found",
                "Style / PO record not found."
            );
            return;
        }

        $("#addMenuModalLabel").text("Edit Style / PO");

        // Show Style
        $("#styleEditSection").removeClass("d-none");

        // Hide others
        $("#licenseEditSection").addClass("d-none");
        $("#bondEditSection").addClass("d-none");


        // Fill Style fields
        $("#editStyleBoNo").val(item[1] ?? "");
        $("#editStylePoNo").val(item[2] ?? "");
        $("#editStyleHsnCode").val(item[3] ?? "");
        $("#editStyleItemCode").val(item[4] ?? "");
        $("#editStyleCountry").val(item[5] ?? "");
        $("#editStyleDescription").val(item[7] ?? "");
        $("#editStyleOther").val(item[8] ?? "");
        $("#editStyleQty").val(item[9] ?? "");
        $("#editStyleUom").val(item[10] ?? "");
        $("#editStyleRate").val(item[11] ?? "");
        $("#editStyleAmount").val(item[12] ?? "");
        $("#editStyleFobRate").val(item[13] ?? "");
        $("#editStyleFobValue").val(item[14] ?? "");
        $("#editStyleCurrency").val(item[15] ?? "");
    }




    // ==========================================
    // LICENSE
    // ==========================================

    if (type === "license") {

        const item = licenseBondData[commonEditIndex];

        if (!item) {
            showWarning(
                "Record Not Found",
                "License record not found."
            );
            return;
        }

        // Modal title
        $("#addMenuModalLabel").text("Edit License / Bond");

        // Show License section
        $("#licenseEditSection").removeClass("d-none");
        $("#bondEditSection").addClass("d-none");

        // Fill fields
        $("#editLicenseQty").val(item.qty ?? "");
        $("#editLicenseUom").val(item.uom ?? "");
        $("#editLicenseItem").val(item.item ?? "");
        $("#editLicenseConsPc").val(item.consPc ?? "");
        $("#editLicenseConsUom").val(item.consUom ?? "");
        $("#editLicenseTotalCons").val(item.totalCons ?? "");
        $("#editLicenseIeNormsNo").val(item.ieNormsNo ?? "");
        $("#editLicenseImpSlNo").val(item.impSlNo ?? "");
        $("#editLicenseExpSlNo").val(item.expSlNo ?? "");
        $("#editLicenseNo").val(item.licenseNo ?? "");
        $("#editLicenseDt").val(item.licenseDt ?? "");
    }


    // ==========================================
    // BOND
    // ==========================================

    else if (type === "bond") {

        const item = bondDetailsData[commonEditIndex];

        if (!item) {
            showWarning(
                "Record Not Found",
                "Bond record not found."
            );
            return;
        }

        // Modal title
        $("#addMenuModalLabel").text("Edit Bond Details");

        // Show Bond section
        $("#licenseEditSection").addClass("d-none");
        $("#bondEditSection").removeClass("d-none");

        // Fill fields
        $("#editBondNo").val(item.bondNo ?? "");
        $("#editBondValue").val(item.bondValue ?? "");
        $("#editBeNo").val(item.beNo ?? "");
        $("#editBeDate").val(item.beDate ?? "");
        $("#editBondRate").val(item.rate ?? "");
        $("#editBondCurr").val(item.curr ?? "");
        $("#editBondItemDescription").val(item.itemDescription ?? "");
        $("#editBondQty").val(item.qty ?? "");
        $("#editBondUom").val(item.uom ?? "");
    }


    // ==========================================
    // OPEN SAME MODAL
    // ==========================================

    const modalElement =
        document.getElementById("addMenuModal");

    if (!modalElement) {
        console.error("#addMenuModal not found.");
        return;
    }

    bootstrap.Modal
        .getOrCreateInstance(modalElement)
        .show();
}

//save button  to save here 
$(document).on("click", "#btnSaveLicenseBond", function () {

    console.log("SAVE CLICKED");
    console.log("Type:", commonEditType);
    console.log("Index:", commonEditIndex);

    // STYLE / PO
    if (commonEditType === "style") {

        const item = stylePoNoData[commonEditIndex];

        if (!item) {
            showError("Error", "Style / PO record not found.");
            return;
        }

        item[1] = $("#editStyleBoNo").val().trim();
        item[2] = $("#editStylePoNo").val().trim();
        item[3] = $("#editStyleHsnCode").val().trim();
        item[4] = $("#editStyleItemCode").val().trim();
        item[5] = $("#editStyleCountry").val().trim();
        item[7] = $("#editStyleDescription").val().trim();
        item[8] = $("#editStyleOther").val().trim();
        item[9] = $("#editStyleQty").val().trim();
        item[10] = $("#editStyleUom").val().trim();
        item[11] = $("#editStyleRate").val().trim();
        item[12] = $("#editStyleAmount").val().trim();
        item[13] = $("#editStyleFobRate").val().trim();
        item[14] = $("#editStyleFobValue").val().trim();
        item[15] = $("#editStyleCurrency").val().trim();

        bindStylePoNoTable();

        closeCommonEditModal();

        showSuccess(
            "Updated",
            "Style / PO details updated successfully."
        );

        return;
    }

    // LICENSE
    if (commonEditType === "license") {

        const item = licenseBondData[commonEditIndex];

        if (!item) {
            showError("Error", "License record not found.");
            return;
        }

        item.qty = $("#editLicenseQty").val().trim();
        item.uom = $("#editLicenseUom").val().trim();
        item.item = $("#editLicenseItem").val().trim();
        item.consPc = $("#editLicenseConsPc").val().trim();
        item.consUom = $("#editLicenseConsUom").val().trim();
        item.totalCons = $("#editLicenseTotalCons").val().trim();
        item.ieNormsNo = $("#editLicenseIeNormsNo").val().trim();
        item.impSlNo = $("#editLicenseImpSlNo").val().trim();
        item.expSlNo = $("#editLicenseExpSlNo").val().trim();
        item.licenseNo = $("#editLicenseNo").val().trim();
        item.licenseDt = $("#editLicenseDt").val().trim();

        bindLicenseBondData();

        closeCommonEditModal();

        showSuccess(
            "Updated",
            "License details updated successfully."
        );

        return;
    }

    // BOND
    if (commonEditType === "bond") {

        const item = bondDetailsData[commonEditIndex];

        if (!item) {
            showError("Error", "Bond record not found.");
            return;
        }

        item.bondNo = $("#editBondNo").val().trim();
        item.bondValue = $("#editBondValue").val().trim();
        item.beNo = $("#editBeNo").val().trim();
        item.beDate = $("#editBeDate").val().trim();
        item.rate = $("#editBondRate").val().trim();
        item.curr = $("#editBondCurr").val().trim();
        item.itemDescription =
            $("#editBondItemDescription").val().trim();
        item.qty = $("#editBondQty").val().trim();
        item.uom = $("#editBondUom").val().trim();

        bindLicenseBondData();

        closeCommonEditModal();

        showSuccess(
            "Updated",
            "Bond details updated successfully."
        );
    }

});

        function closeCommonEditModal() {

    const modalElement =
        document.getElementById("addMenuModal");

    if (modalElement) {
        bootstrap.Modal
            .getInstance(modalElement)
            ?.hide();
    }
}

//main page data bind here 

//Static data 

const invoiceListData = [
    {
        invoiceNumber: "RC/1027/14-15",
        invoiceDate: "01-04-2014",
        buyerName: "NORDSTROM PRODUCT",
        currency: "US$",
        amount: 6930.00,
        lcNo: "NA",
        sbNo: "2204757",
        initial: "CHNDR"
    },
    {
        invoiceNumber: "RC/1027/15-16",
        invoiceDate: "20-02-2016",
        buyerName: "AMERICAN EAGLE OUTFIT",
        currency: "US$",
        amount: 9027.34,
        lcNo: "NA",
        sbNo: "6275160",
        initial: "ROHAN"
    },
    {
        invoiceNumber: "RC/1027/20-21",
        invoiceDate: "11-08-2020",
        buyerName: "SEASALT LIMITED",
        currency: "UK£",
        amount: 2157.30,
        lcNo: "NA",
        sbNo: "4513111",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RC/1027/21-22",
        invoiceDate: "07-06-2021",
        buyerName: "AFH INTERNATIONAL",
        currency: "US$",
        amount: 288.00,
        lcNo: "NA",
        sbNo: "2824749",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/21-22",
        invoiceDate: "13-01-2022",
        buyerName: "PREMIUM BRANDS OPCO",
        currency: "US$",
        amount: 2330.56,
        lcNo: "NA",
        sbNo: "8633314",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/22-23",
        invoiceDate: "11-06-2022",
        buyerName: "BELK INTERNATIONAL",
        currency: "US$",
        amount: 136629.00,
        lcNo: "NA",
        sbNo: "2858907",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/23-24",
        invoiceDate: "23-05-2023",
        buyerName: "ABERCROMBIE & FITCH",
        currency: "US$",
        amount: 89334.00,
        lcNo: "NA",
        sbNo: "1281411",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/24-25",
        invoiceDate: "11-05-2024",
        buyerName: "SEASALT LIMITED",
        currency: "UK£",
        amount: 2215.95,
        lcNo: "NA",
        sbNo: "1443767",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RE/1027/25-26",
        invoiceDate: "10-05-2025",
        buyerName: "AMERICAN EAGLE OUTFIT",
        currency: "US$",
        amount: 7349.17,
        lcNo: "NA",
        sbNo: "2024631",
        initial: "GAURA"
    },
    {
        invoiceNumber: "RC/1028/07-08",
        invoiceDate: "25-02-2008",
        buyerName: "ETAM LINGERIE SAS",
        currency: "US$",
        amount: 17199.00,
        lcNo: "14001-0113978SAD",
        sbNo: "6093138",
        initial: "SB"
    }
];

//bind table here 

        
// function bindInvoiceList(data) {

//     const $tbody = $('#invoiceListBody');

//     $tbody.empty();

//     $.each(invoiceListData, function (index, item) {

//         const row = `<tr> 
//            <td class="text-center"> 
//                <button type="button" class="edit-btn btn-edit-tt-adjustment" data-id="${item.invoiceNumber}" title="Edit" onclick="editBanckInv()"> 
//                    <svg width="14"
//                         height="14"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"> 
//                        <path d="M12 20h9"></path> 
//                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path> 
//                    </svg> 
//                </button>
//             </td>
//             <td class="mono"> ${item.invoiceNumber || '—'} </td> 
//             <td> ${item.invoiceDate || '—'} </td> 
//             <td> ${item.buyerName || '—'} </td> 
//             <td> ${item.currency || '—'} </td> 
//             <td class="r num"> ${item.amount} </td> 
//             <td class="mono"> ${item.lcNo || '—'} </td> 
//             <td class="mono"> ${item.sbNo || '—'} </td> 
//             <td> ${item.initial || '—'} </td> 
//         </tr>`;

//         $tbody.append(row);
//     });
// }
let invoiceListTable = null;

function bindInvoiceList(data) {

    const $tbody = $('#invoiceListBody');

    if (!$tbody.length) {
        console.error("invoiceListBody not found.");
        return;
    }

    // Existing DataTable destroy
    if ($.fn.DataTable.isDataTable("#tblInvoiceList")) {
        $("#tblInvoiceList").DataTable().destroy();
    }

    $tbody.empty();

    // Bind data
    $.each(data, function (index, item) {

        const row = `
            <tr>

                <td class="text-center">
                    <button type="button"
                            class="edit-btn btn-edit-tt-adjustment"
                            data-id="${item.invoiceNumber}"
                            title="Edit"
                            onclick="editBanckInv()">

                        <svg width="14"
                             height="14"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">

                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path>

                        </svg>

                    </button>
                </td>

                <td class="mono">
                    ${item.invoiceNumber || '—'}
                </td>

                <td>
                    ${item.invoiceDate || '—'}
                </td>

                <td>
                    ${item.buyerName || '—'}
                </td>

                <td>
                    ${item.currency || '—'}
                </td>

                <td class="r num">
                    ${item.amount || '—'}
                </td>

                <td class="mono">
                    ${item.lcNo || '—'}
                </td>

                <td class="mono">
                    ${item.sbNo || '—'}
                </td>

                <td>
                    ${item.initial || '—'}
                </td>

            </tr>   
        `;

        $tbody.append(row);
    });

    // Initialize DataTable
    invoiceListTable = $("#tblInvoiceList").DataTable({
        paging: true,
        pageLength: 10,
        lengthChange: false,
        searching: true,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,

        language: {
            emptyTable: "No Invoice Found."
        }
    });
}


function editBanckInv() {
    window.location.href = '/AepcInvoice/Index'
}

$('#btnBack').on('click', function () {
    window.location.href = '/AepcInvoice/viewAepcInvoice'
})
 

$('#btnAdd').on('click', function () {
    window.location.href = '/AepcInvoice/Index'
})
