$(document).ready(function () {

    initImportTagEntry();

});

// Page Initialization

function initImportTagEntry() {

    // Select2
    $(".select2-field").select2({
        width: "100%",
        dropdownAutoWidth: false
    });

    // Refresh Button
    $("#btnRefresh_ImportTagEntry").on("click", function () {

        showConfirm(
            "Are you sure?",
            "Do you want to refresh the Import Tag Entry?"
        ).then(function (result) {

            if (result.isConfirmed) {

                refreshImportTagEntry();

            }

        });

    });

    // Add Button
    $("#btnAdd_RosctlMaster").on("click", function () {

        addImportTagEntry();


    });
    //on clic of bill of entry 
    $("#btnAddBillEntry").on("click", function() {
        $("#addMenuModalBillEntry").modal("show");
        // table bind on click of bill of entry 
        bindBillEntryTable(billEntryData);
    })
    //open a help in import 
    $("#btnImportHelp").on("click", function() {
        $("#addMenuModalHelpImport").modal("show");
        //on click of table bind here 
        bindHelpImportTable(helpImportData);
    })
    // Initial Table Load 
    initImportTagEntryDataTable();

}


// Static Data

const importTagEntryData = [

    {
        id: 1,
        importNo: "10110",
        sno: "7",
        cth: "83081010",
        itemDesc: "HOOK&EYE",
        buyer: "AEO",
        boe: "2016555",
        ratePcPercent: "0.081",
        curr: "US$",
        vendor: "ABC ACCESSORIES",
        itemUom: "PCS",
        gQty: "864",
        rateType: "PCS",
        groupCd: "GRP-01",
        type: "M707",
        size: "",
        rate: "4.20",
          PCs: "1%",
        trimQty: "864",
        gUom: "GRS",
        itemAvg: "2.00"
    },

    {
        id: 2,
        importNo: "10111",
        sno: "8",
        cth: "83081010",
        itemDesc: "HOOK&EYE",
        buyer: "AEO",
        boe: "2016556",
        ratePcPercent: "0.082",
        curr: "US$",
        vendor: "XYZ ACCESSORIES",
        itemUom: "PCS",
        gQty: "12384",
        rateType: "PCS",
        groupCd: "GRP-01",
        type: "M707",
        size: "",
        rate: "4.20",
            PCs: "9%",
        trimQty: "12384",
        gUom: "GRS",
        itemAvg: "2.00"
    },

    {
        id: 3,
        importNo: "10112",
        sno: "9",
        cth: "48211090",
        itemDesc: "HANG TAG",
        buyer: "AEO",
        boe: "2016557",
        ratePcPercent: "0.015",
        curr: "US$",
        vendor: "PRINT HOUSE",
        itemUom: "PCS",
        gQty: "2140",
        rateType: "PCS",
         
        groupCd: "GRP-02",
        type: "A SP24_A 011B_HT",
        size: "",
        rate: "0.04",
        PCs: "4%",
        trimQty: "2140",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 4,
        importNo: "10113",
        sno: "20",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016558",
        ratePcPercent: "0.010",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "3081",
        rateType: "PCS",
        
        groupCd: "GRP-02",
        type: "CENTER FOLD SIZE COO WOVE",
        size: "",
        rate: "0.01",
         PCs: "10.84%",
        trimQty: "3081",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 5,
        importNo: "10114",
        sno: "19",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016559",
        ratePcPercent: "0.012",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "3080",
        rateType: "PCS",
         
        groupCd: "GRP-02",
        type: "MAIN ENDFOLD WOVEN",
        size: "",
        rate: "0.02",
        PCs: "1.00%",
        trimQty: "3080",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 6,
        importNo: "10115",
        sno: "94",
        cth: "96062200",
        itemDesc: "BUTTONS",
        buyer: "AEO",
        boe: "2016560",
        ratePcPercent: "0.095",
        curr: "US$",
        vendor: "BUTTON WORLD",
        itemUom: "PCS",
        gQty: "272736",
        rateType: "PCS",
      
        groupCd: "GRP-03",
        type: "36991",
        size: "18 LINE 4HOLE",
        rate: "3.56",
           PCs: "4.67%",
        trimQty: "272736",
        gUom: "PCS",
        itemAvg: "13.00"
    },

    {
        id: 7,
        importNo: "10116",
        sno: "11",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016561",
        ratePcPercent: "0.014",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "30087",
        rateType: "PCS",
     
        groupCd: "GRP-02",
        type: "11043",
        size: "",
        rate: "0.05",
            PCs: "5%",
        trimQty: "30087",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 8,
        importNo: "10117",
        sno: "15",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016562",
        ratePcPercent: "0.014",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
       
        gQty: "22569",
        rateType: "PCS",
        groupCd: "GRP-02",
        type: "11043",
        size: "",
        rate: "0.05",
          PCs: "4%",
        trimQty: "22569",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 9,
        importNo: "10118",
        sno: "17",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016563",
        ratePcPercent: "0.014",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "21140",
        rateType: "PCS",
         
        groupCd: "GRP-02",
        type: "11043",
        size: "",
        rate: "0.05",
        PCs: "20%",
        trimQty: "21140",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 10,
        importNo: "10119",
        sno: "22",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016564",
        ratePcPercent: "0.014",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "1825",
        rateType: "PCS",
        
        groupCd: "GRP-02",
        type: "11043",
        size: "",
        rate: "0.05",
         PCs: "6%",
        trimQty: "1825",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 11,
        importNo: "10120",
        sno: "10",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016565",
        ratePcPercent: "0.013",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "21025",
        rateType: "PCS",
      
        groupCd: "GRP-02",
        type: "JC-16421",
        size: "",
        rate: "0.03",
           PCs: "4%",
        trimQty: "21025",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 12,
        importNo: "10121",
        sno: "21",
        cth: "48211090",
        itemDesc: "PRICE TICKET",
        buyer: "AEO",
        boe: "2016566",
        ratePcPercent: "0.008",
        curr: "US$",
        vendor: "PRINT HOUSE",
        itemUom: "PCS",
        gQty: "7524",
        rateType: "PCS",
        
        groupCd: "GRP-04",
        type: "1525CCSV",
        size: "",
        rate: "0.01",
         PCs: "10%",
        trimQty: "7524",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 13,
        importNo: "10122",
        sno: "12",
        cth: "48211090",
        itemDesc: "PRICE TICKET",
        buyer: "AEO",
        boe: "2016567",
        ratePcPercent: "0.008",
        curr: "US$",
        vendor: "PRINT HOUSE",
        itemUom: "PCS",
        gQty: "15193",
        rateType: "PCS",

        groupCd: "GRP-04",
        type: "1525CSV",
        size: "",
        rate: "0.01",
                 PCs: "7%",
        trimQty: "15193",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 14,
        importNo: "10123",
        sno: "13",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016568",
        ratePcPercent: "0.011",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "30087",
        rateType: "PCS",
         
        groupCd: "GRP-02",
        type: "JC-76855-BLACK",
        size: "",
        rate: "0.04",
        PCs: "4%",
        trimQty: "30087",
        gUom: "PCS",
        itemAvg: "1.00"
    },

    {
        id: 15,
        importNo: "10124",
        sno: "14",
        cth: "58071090",
        itemDesc: "LABELS",
        buyer: "AEO",
        boe: "2016569",
        ratePcPercent: "0.009",
        curr: "US$",
        vendor: "LABEL WORLD",
        itemUom: "PCS",
        gQty: "26845",
        rateType: "PCS",
        
        groupCd: "GRP-02",
        type: "JC-77214-BLACK",
        size: "",
        rate: "0.02",
        PCs: "4%",
        trimQty: "26845",
        gUom: "PCS",
        itemAvg: "1.00"
    }

];

// DataTable Variable

let importTagEntryTable = null;
//variable
let selectedImportTagIndex = null;
function bindImportTagEntryData() {

    const $tbody = $("#tblbody_ImportTagEntry");

    if (!$tbody.length) {

        console.error(
            "[ImportTagEntry] #tblbody_ImportTagEntry not found."
        );

        return;
    }

    $tbody.empty();

    $.each(importTagEntryData, function (index, item) {

        const row = `
            <tr data-id="${item.id}">

                <!-- Action -->
                <td class="text-center">

                    <button type="button"
                            class="row-btn edit-btn btn-edit-import-tag"
                            data-id="${item.id}"
                            title="Edit">

                        <i class="fa-solid fa-pen-to-square"></i>

                    </button>

                </td>
                 <!-- Sno -->
                <td>
                    ${
            "sno",
            item.sno
           
                    }
                </td>

                <!-- Import -->
                <td>
                    ${"importNo",
                        item.importNo
                      
                    }
                </td>

               

                <!-- Cth -->
                <td>
                    ${
                        "cth",
                        item.cth
                    }
                </td>

                <!-- ItemDesc -->
                <td>
                    ${
                        "itemDesc",
                        item.itemDesc
                    }
                </td>
                
                <td>
                    ${
            "type",
            item.type
            }
                </td>

                <!-- Size -->
                <td>
                    ${"size",
            item.size
            }
                </td>

                <!-- Rate -->
                <td>
                    ${"rate",
            item.rate
            }
                </td>
               

                <!-- Trim Qty -->
                <td>
                    ${"trimQty",
            item.trimQty
            }
                </td>

                <!-- G UOM -->
                <td>
                    ${"gUom",
            item.gUom
            }
                </td>

                <!-- Item Avg -->
                <td>
                    ${"itemAvg",
            item.itemAvg
                    }
                </td> 

                <!-- Buyer -->
                <td>
                    ${
                        "buyer",
                        item.buyer
                    }
                </td>

                <!-- BOE -->
                <td>
                    ${
                        "boe",
                        item.boe
                    }
                </td>

                <!-- Rate -->
                <td>
                    ${
                        "ratePcPercent",
                        item.ratePcPercent
                    }
                </td>
               <!-- Pc% -->
                 <td>
                    ${"PC",
            item.PCs
            }
                </td>

                <!-- Curr -->
                <td>
                    ${
                        "curr",
                        item.curr
                    }
                </td>

                <!-- Vendor -->
                <td>
                    ${
                        "vendor",
                        item.vendor
                    }
                </td>

                <!-- Item UOM -->
                <td>
                    ${
                        "itemUom",
                        item.itemUom
                    }
                </td>

                <!-- G Qty -->
                <td>
                    ${
                        "gQty",
                        item.gQty
                    }
                </td>

                <!-- Rate Type -->
                <td>
                    ${
                        "rateType",
                        item.rateType
                    }
                </td>

                <!-- Group_CD -->
                <td>
                    ${
                        "groupCd",
                        item.groupCd
                    }
                </td>

               

            </tr>
        `;

        $tbody.append(row);

    });

}

//edit button click open modal 
//let selectedImportTagIndex = null;

$(document).on(
    "click",
    "#tblbody_ImportTagEntry .btn-edit-import-tag",
    function () {

        const id = Number($(this).data("id"));

        const index = importTagEntryData.findIndex(
            x => Number(x.id) === id
        );

        if (index === -1) {
            return;
        }

        const item = importTagEntryData[index];

        selectedImportTagIndex = index;

        $("#txtEditImportNo_AdvLicDetails").val(item.importNo);
        $("#txtEditSno_AdvLicDetails").val(item.sno);
        $("#txtEditCth_AdvLicDetails").val(item.cth);
        $("#txtEditItemDesc_AdvLicDetails").val(item.itemDesc);
        $("#txtEditBuyer_AdvLicDetails").val(item.buyer);
        $("#txtEditBoe_AdvLicDetails").val(item.boe);
        $("#txtEditRatePcPercent_AdvLicDetails").val(item.ratePcPercent);
        $("#txtEditCurr_AdvLicDetails").val(item.curr);
        $("#txtEditVendor_AdvLicDetails").val(item.vendor);
        $("#txtEditItemUom_AdvLicDetails").val(item.itemUom);
        $("#txtEditGQty_AdvLicDetails").val(item.gQty);
        $("#txtEditRateType_AdvLicDetails").val(item.rateType);
        $("#txtEditGroupCd_AdvLicDetails").val(item.groupCd);
        $("#txtEditType_AdvLicDetails").val(item.type);
        $("#txtEditSize_AdvLicDetails").val(item.size);
        $("#txtEditRate_AdvLicDetails").val(item.rate);
        $("#txtEditTrimQty_AdvLicDetails").val(item.trimQty);
        $("#txtEditGUom_AdvLicDetails").val(item.gUom);
        $("#txtEditItemAvg_AdvLicDetails").val(item.itemAvg);

        bootstrap.Modal
            .getOrCreateInstance(
                document.getElementById("addMenuModal")
            )
            .show();
    }
);

// save  button
$(document).on("click", "#btnSaveImportTagEdit", function () {

    if (selectedImportTagIndex === null) {
        return;
    }

    const item =
        importTagEntryData[selectedImportTagIndex];

    item.importNo =
        $("#txtEditImportNo_AdvLicDetails").val().trim();

    item.sno =
        $("#txtEditSno_AdvLicDetails").val().trim();

    item.cth =
        $("#txtEditCth_AdvLicDetails").val().trim();

    item.itemDesc =
        $("#txtEditItemDesc_AdvLicDetails").val().trim();

    item.buyer =
        $("#txtEditBuyer_AdvLicDetails").val().trim();

    item.boe =
        $("#txtEditBoe_AdvLicDetails").val().trim();

    item.ratePcPercent =
        $("#txtEditRatePcPercent_AdvLicDetails").val().trim();

    item.curr =
        $("#txtEditCurr_AdvLicDetails").val().trim();

    item.vendor =
        $("#txtEditVendor_AdvLicDetails").val().trim();

    item.itemUom =
        $("#txtEditItemUom_AdvLicDetails").val().trim();

    item.gQty =
        $("#txtEditGQty_AdvLicDetails").val().trim();

    item.rateType =
        $("#txtEditRateType_AdvLicDetails").val().trim();

    item.groupCd =
        $("#txtEditGroupCd_AdvLicDetails").val().trim();

    item.type =
        $("#txtEditType_AdvLicDetails").val().trim();

    item.size =
        $("#txtEditSize_AdvLicDetails").val().trim();

    item.rate =
        $("#txtEditRate_AdvLicDetails").val().trim();

    item.trimQty =
        $("#txtEditTrimQty_AdvLicDetails").val().trim();

    item.gUom =
        $("#txtEditGUom_AdvLicDetails").val().trim();

    item.itemAvg =
        $("#txtEditItemAvg_AdvLicDetails").val().trim();

    bindImportTagEntryData();

    bootstrap.Modal
        .getOrCreateInstance(
            document.getElementById("addMenuModal")
        )
        .hide();

    selectedImportTagIndex = null;

    showSuccess(
        "Updated",
        "Import Tag Entry updated successfully."
    );
});

// Initialize DataTable

function initImportTagEntryDataTable() {

    showLoader("Loading Import Tag Entry...");

    try {

        if (importTagEntryTable) {

            importTagEntryTable.destroy();

            importTagEntryTable = null;

        }

        // Bind static data
        bindImportTagEntryData();

        // Initialize DataTable
        importTagEntryTable = new DataTable(
            "#tbl_ImportTagEntry",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                scrollX: true,

                language: {

                    emptyTable:
                        "No Import Tag Entry records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );

        hideLoader();

    }
    catch (error) {

        console.error(
            "[ImportTagEntry] DataTable initialization failed:",
            error
        );

        hideLoader();

        showError(
            "Load Failed",
            "Unable to load Import Tag Entry."
        );

    }

}

// Refresh

function refreshImportTagEntry() {

    showLoader("Refreshing Import Tag Entry...");

    try {

        if (importTagEntryTable) {

            importTagEntryTable.destroy();

            importTagEntryTable = null;

        }

        bindImportTagEntryData();

        importTagEntryTable = new DataTable(
            "#tbl_ImportTagEntry",
            {

                paging: true,

                searching: true,

                ordering: false,

                info: false,

                lengthChange: false,

                pageLength: 10,

                scrollX: true,

                language: {

                    emptyTable:
                        "No Import Tag Entry records found",

                    zeroRecords:
                        "No matching records found",

                    search:
                        "Search:"

                }

            }
        );

        setTimeout(function () {

            hideLoader();

            showSuccess(
                "Refreshed",
                "Import Tag Entry refreshed successfully."
            );

        }, 500);

    }
    catch (error) {

        console.error(
            "[ImportTagEntry] Refresh failed:",
            error
        );

        hideLoader();

        showError(
            "Refresh Failed",
            "Unable to refresh Import Tag Entry."
        );

    }

}

// Add

function addImportTagEntry() {

    const importNo =
        $("#txtImportCompany_ImportTagEntry").val().trim();

    const bond =
        $("#txtBond_ImportTagEntry").val().trim();

    console.log("Add Import Tag Entry:", {
        importNo: importNo,
        bond: bond
    });

    showSuccess(
        "Added",
        "Import Tag Entry added successfully."
    );

}

// Edit

$("#tblbody_ImportTagEntry").on("click", ".btn-edit-import-tag", function () {

    const id = $(this).data("id");

    const index = importTagEntryData.findIndex(x => x.id == id);

    if (index === -1) return;

    selectedImportTagIndex = index;

    openImportTagEditModal(index);
});

function openImportTagEditModal(index) {

    const item = importTagEntryData[index];

    const body = `
        <div class="row g-3">

            <div class="col-md-6">
                <div class="field">
                    <label>Import No</label>
                    <input type="text"
                           id="txtImportNo_ImportTagModal"
                           class="form-control"
                           value="${item.importNo}">
                </div>
            </div>

            <div class="col-md-6">
                <div class="field">
                    <label>S.No</label>
                    <input type="text"
                           id="txtSno_ImportTagModal"
                           class="form-control"
                           value="${item.sno}">
                </div>
            </div>

            <div class="col-md-6">
                <div class="field">
                    <label>CTH</label>
                    <input type="text"
                           id="txtCth_ImportTagModal"
                           class="form-control"
                           value="${item.cth}">
                </div>
            </div>

            <div class="col-md-6">
                <div class="field">
                    <label>Item Description</label>
                    <input type="text"
                           id="txtItemDesc_ImportTagModal"
                           class="form-control"
                           value="${item.itemDesc}">
                </div>
            </div>

            <div class="col-md-6">
                <div class="field">
                    <label>Type</label>
                    <input type="text"
                           id="txtType_ImportTagModal"
                           class="form-control"
                           value="${item.type}">
                </div>
            </div>

            <div class="col-md-6">
                <div class="field">
                    <label>Size</label>
                    <input type="text"
                           id="txtSize_ImportTagModal"
                           class="form-control"
                           value="${item.size}">
                </div>
            </div>

            <div class="col-md-4">
                <div class="field">
                    <label>Rate</label>
                    <input type="text"
                           id="txtRate_ImportTagModal"
                           class="form-control"
                           value="${item.rate}">
                </div>
            </div>

            <div class="col-md-4">
                <div class="field">
                    <label>Trim Qty</label>
                    <input type="text"
                           id="txtTrimQty_ImportTagModal"
                           class="form-control"
                           value="${item.trimQty}">
                </div>
            </div>

            <div class="col-md-4">
                <div class="field">
                    <label>G UOM</label>
                    <input type="text"
                           id="txtGUom_ImportTagModal"
                           class="form-control"
                           value="${item.gUom}">
                </div>
            </div>

            <div class="col-md-4">
                <div class="field">
                    <label>Item Avg</label>
                    <input type="text"
                           id="txtItemAvg_ImportTagModal"
                           class="form-control"
                           value="${item.itemAvg}">
                </div>
            </div>

        </div>
    `;

    const footer = `
        <button type="button"
                class="btn btn-primary"
                onclick="updateImportTagFromModal()">
            Update
        </button>

        <button type="button"
                class="btn btn-secondary btn-sm"
                onclick="closeCommonModal()">

            Cancel

        </button>
    `;

    openCommonModal({
        title: "Edit Import Tag Entry",
        subtitle: "Update Import Tag Entry details",
        body: body,
        footer: footer,
        size: "lg"
    });
}

function updateImportTagFromModal() {

    if (selectedImportTagIndex === null) return;

    const item = importTagEntryData[selectedImportTagIndex];

    item.importNo = $("#txtImportNo_ImportTagModal").val().trim();
    item.sno = $("#txtSno_ImportTagModal").val().trim();
    item.cth = $("#txtCth_ImportTagModal").val().trim();
    item.itemDesc = $("#txtItemDesc_ImportTagModal").val().trim();
    item.type = $("#txtType_ImportTagModal").val().trim();
    item.size = $("#txtSize_ImportTagModal").val().trim();
    item.rate = $("#txtRate_ImportTagModal").val().trim();
    item.trimQty = $("#txtTrimQty_ImportTagModal").val().trim();
    item.gUom = $("#txtGUom_ImportTagModal").val().trim();
    item.itemAvg = $("#txtItemAvg_ImportTagModal").val().trim();

    bindImportTagEntryData();

    closeCommonModal();

    selectedImportTagIndex = null;

    showSuccess(
        "Updated Successfully",
        "Import Tag Entry updated successfully."
    );
}

    //bill of entry data and table is here 
    // static data 
    const billEntryData = [
    {
        id: 1,
        boeDate: "05-Sep-2026",
        port: "INDEL4",
        dateOfClearance: "07-Sep-2026",
        assessableValue: 250000,
        valueOfImpGoods: 275000,
        dutyPercentage: "10%",
        igstType: "18%",
        bcd: 25000,
        otherCustomDuty: 5000,
        igstAmount: 45000,
        cess: 2500,
        receivedDtGoods: "10-Sep-2026",
        qtyNotReceived: 5,
        usedForDomestically: "Yes",
        endDtRecipient: "30-Sep-2026",
        goodsReExport: "No",
        goodsClrPaymentOfDuty: "Yes"
    },
    {
        id: 2,
        boeDate: "08-Sep-2026",
        port: "INMUN1",
        dateOfClearance: "09-Sep-2026",
        assessableValue: 180000,
        valueOfImpGoods: 200000,
        dutyPercentage: "7.5%",
        igstType: "12%",
        bcd: 13500,
        otherCustomDuty: 3000,
        igstAmount: 24000,
        cess: 1800,
        receivedDtGoods: "12-Sep-2026",
        qtyNotReceived: 2,
        usedForDomestically: "No",
        endDtRecipient: "25-Sep-2026",
        goodsReExport: "Yes",
        goodsClrPaymentOfDuty: "No"
    },
    {
        id: 3,
        boeDate: "12-Sep-2026",
        port: "INNSA1",
        dateOfClearance: "14-Sep-2026",
        assessableValue: 320000,
        valueOfImpGoods: 350000,
        dutyPercentage: "15%",
        igstType: "18%",
        bcd: 48000,
        otherCustomDuty: 6500,
        igstAmount: 57600,
        cess: 3200,
        receivedDtGoods: "16-Sep-2026",
        qtyNotReceived: 0,
        usedForDomestically: "Yes",
        endDtRecipient: "30-Sep-2026",
        goodsReExport: "No",
        goodsClrPaymentOfDuty: "Yes"
    },
    {
        id: 4,
        boeDate: "18-Sep-2026",
        port: "INDEL4",
        dateOfClearance: "20-Sep-2026",
        assessableValue: 145000,
        valueOfImpGoods: 160000,
        dutyPercentage: "10%",
        igstType: "5%",
        bcd: 14500,
        otherCustomDuty: 2500,
        igstAmount: 7250,
        cess: 1200,
        receivedDtGoods: "22-Sep-2026",
        qtyNotReceived: 3,
        usedForDomestically: "Yes",
        endDtRecipient: "15-Oct-2026",
        goodsReExport: "No",
        goodsClrPaymentOfDuty: "Yes"
    },
    {
        id: 5,
        boeDate: "25-Sep-2026",
        port: "INMUN1",
        dateOfClearance: "27-Sep-2026",
        assessableValue: 410000,
        valueOfImpGoods: 440000,
        dutyPercentage: "12.5%",
        igstType: "18%",
        bcd: 51250,
        otherCustomDuty: 7000,
        igstAmount: 73800,
        cess: 4100,
        receivedDtGoods: "29-Sep-2026",
        qtyNotReceived: 1,
        usedForDomestically: "No",
        endDtRecipient: "20-Oct-2026",
        goodsReExport: "Yes",
        goodsClrPaymentOfDuty: "No"
    }
];
//bind table is here 
        function bindBillEntryTable(data) {
    const $tbody = $("#tblbody_BillEntry");

    if (!$tbody.length) {
        console.error("#tblbody_BillEntry not found.");
        return;
    }

    $tbody.empty();

    $.each(data, function (index, item) {
        $tbody.append(`
            <tr data-id="${item.id}">
                <td>
                    <button type="button"
                            class="row-btn edit-btn btnEditBillEntry"
                            data-id="${item.id}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${item.boeDate || "—"}</td>
                <td>${item.port || "—"}</td>
                <td>${item.dateOfClearance || "—"}</td>
                <td class="text-end">${formatBillAmount(item.assessableValue)}</td>
                <td class="text-end">${formatBillAmount(item.valueOfImpGoods)}</td>
                <td>${item.dutyPercentage || "—"}</td>
                <td>${item.igstType || "—"}</td>
                <td class="text-end">${formatBillAmount(item.bcd)}</td>
                <td class="text-end">${formatBillAmount(item.otherCustomDuty)}</td>
                <td class="text-end">${formatBillAmount(item.igstAmount)}</td>
                <td class="text-end">${formatBillAmount(item.cess)}</td>
                <td>${item.receivedDtGoods || "—"}</td>
                <td class="text-end">${item.qtyNotReceived ?? 0}</td>
                <td>${item.usedForDomestically || "—"}</td>
                <td>${item.endDtRecipient || "—"}</td>
                <td>${item.goodsReExport || "—"}</td>
                <td>${item.goodsClrPaymentOfDuty || "—"}</td>
            </tr>
        `);
    });
}

//on click of edit open modal 
$(document).on("click", "#btnEditBillEntry", function () {
    const modal = new bootstrap.Modal(
        document.getElementById("editBillEntryModal")
    );

    modal.show();
});

function formatBillAmount(value) {
    if (value === null || value === undefined || value === "") {
        return "—";
    }

    return Number(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

//help of import data data bind here
//staic data 

const helpImportData = [
    {
        id: 1,
        importNo: "IMP-1001",
        buyer: "ABC Garments",
        styleNo: "ST-101",
        rate: 125.50,
        trimQty: 500,
        gUom: "MTR",
        itemAvg: 2.50,
        boe: "BOE-2026-001",
        ratePc: 25.10,
        currency: "USD",
        vendor: "Global Textiles",
        dtUom: "PCS",
        gQty: 1250,
        rateType: "FOB"
    },
    {
        id: 2,
        importNo: "IMP-1002",
        buyer: "XYZ Fashion",
        styleNo: "ST-205",
        rate: 98.75,
        trimQty: 750,
        gUom: "KG",
        itemAvg: 1.75,
        boe: "BOE-2026-002",
        ratePc: 19.75,
        currency: "EUR",
        vendor: "Fashion Supplies Ltd",
        dtUom: "PCS",
        gQty: 1312.5,
        rateType: "CIF"
    },
    {
        id: 3,
        importNo: "IMP-1003",
        buyer: "PQR Exports",
        styleNo: "ST-310",
        rate: 210.00,
        trimQty: 300,
        gUom: "MTR",
        itemAvg: 3.25,
        boe: "BOE-2026-003",
        ratePc: 42.00,
        currency: "INR",
        vendor: "Prime Accessories",
        dtUom: "PCS",
        gQty: 975,
        rateType: "FOB"
    },
    {
        id: 4,
        importNo: "IMP-1004",
        buyer: "ABC Garments",
        styleNo: "ST-415",
        rate: 150.25,
        trimQty: 600,
        gUom: "YDS",
        itemAvg: 2.00,
        boe: "BOE-2026-004",
        ratePc: 30.05,
        currency: "USD",
        vendor: "Modern Trims Co",
        dtUom: "PCS",
        gQty: 1200,
        rateType: "CIF"
    },
    {
        id: 5,
        importNo: "IMP-1005",
        buyer: "LMN Clothing",
        styleNo: "ST-520",
        rate: 175.80,
        trimQty: 400,
        gUom: "KG",
        itemAvg: 2.80,
        boe: "BOE-2026-005",
        ratePc: 35.16,
        currency: "EUR",
        vendor: "Euro Textile House",
        dtUom: "PCS",
        gQty: 1120,
        rateType: "FOB"
    }
];
//bind here table 
function bindHelpImportTable(data) {
    const $tbody = $("#tblbody_HelpImport");

    if (!$tbody.length) {
        console.error("#tblbody_HelpImport not found.");
        return;
    }

    $tbody.empty();

    $.each(data, function (index, item) {
        $tbody.append(`
            <tr data-id="${item.id}">
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkHelpImport"
                           id="chkHelpImport_${item.id}"
                           data-id="${item.id}">
                </td>
                <td>${item.importNo || "—"}</td>
                <td>${item.buyer || "—"}</td>
                <td>${item.styleNo || "—"}</td>
                <td class="text-end">${formatHelpImportNumber(item.rate)}</td>
                <td class="text-end">${formatHelpImportNumber(item.trimQty)}</td>
                <td>${item.gUom || "—"}</td>
                <td class="text-end">${formatHelpImportNumber(item.itemAvg)}</td>
                <td>${item.boe || "—"}</td>
                <td class="text-end">${formatHelpImportNumber(item.ratePc)}</td>
                <td>${item.currency || "—"}</td>
                <td>${item.vendor || "—"}</td>
                <td>${item.dtUom || "—"}</td>
                <td class="text-end">${formatHelpImportNumber(item.gQty)}</td>
                <td>${item.rateType || "—"}</td>
            </tr>
        `);
    });
}

function formatHelpImportNumber(value) {
    if (value === null || value === undefined || value === "") {
        return "—";
    }

    return Number(value).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
}