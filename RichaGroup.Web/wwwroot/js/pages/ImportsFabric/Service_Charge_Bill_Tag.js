
$(document).ready(function () {

    initSCBT();

});
/* INITIALIZATION */

function initSCBT() {

    initSCBDate();

    bindSCBTable();

    /* Add Row */
    $("#btnAdd_SCBTag").on("click", function () {

        // addNewSCBRow();
        openSCBModal();

    });


    /* Main Save */
    $("#btnSave_SCBTag").on("click", function () {

        saveSCBTag();

    });


    /* Refresh */
    $("#btnRefresh_SCBTag").on("click", function () {

        refreshSCBTag();

    });


    /* Save New Row */
    // $(document).on(
    //     "click",
    //     ".btnSaveSCBRow",
    //     function () {

    //         const $row = $(this).closest("tr");

    //         saveSCBRow($row);

    //     }
    // );
    $("#tblbodySCBTag").on(
        "click",
        ".btnEditSCBRow",
        function () {

            const index =
                Number($(this).data("index"));

            openSCBModal(index);
        }
    );


    /* Delete Row */
    $(document).on(
        "click",
        ".btnDeleteSCBRow",
        function () {

            const $row = $(this).closest("tr");

            deleteSCBRow($row);

        }
    );

    //modal open in add row click 
    $("#btnAdd_SCBTag").on("click", function () {
         $('#addMenuModalServiceAddBill').modal('show')
    })

    $("#btnPartyHelp").on("click", function () {
        $('#PartyModal').modal('show')
    })

}
/* DATE PICKER*/

function initSCBDate() {

    const dateElement =
        document.getElementById("txtDt_SCBTag");

    if (!dateElement) {
        return;
    }

    flatpickr(dateElement, {

        dateFormat: "d-m-Y",

        allowInput: true

    });

}
/* STATIC DATA */

let scbTagData = [

    {
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS",
        buyerName: "AEO",
        billNo: "RCPT23-09-03554",
        billDate: "13-07-2023",
        billAmount: "33583.00",
        assValue: "1078263.00",
        debitAmount: "0.00",
        netAmount: "33583.00",
        billType: "CCL/CHN",
        beNo: "980625",
        licenceNo: "LIC/1544",
        receiveDate: "17-07-2023",
        grnno:"456984",
        grndt:"23-05-2023",
        grnUnit: "01"
    },

    {
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS",
        buyerName: "AEO",
        billNo: "RCPT23-09-03551",
        billDate: "12-07-2023",
        billAmount: "21051.00",
        assValue: "648761.00",
        debitAmount: "0.00",
        netAmount: "21051.00",
        billType: "CCL/CHN",
        beNo: "980626",
        licenceNo: "LIC/1545",
        receiveDate: "17-07-2023",
         grnno:"456984",
        grndt:"23-05-2023",
        grnUnit: "01"
    },

    {
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS",
        buyerName: "AEO",
        billNo: "RCPT23-09-03452",
        billDate: "12-07-2023",
        billAmount: "783.00",
        assValue: "783.00",
        debitAmount: "0.00",
        netAmount: "783.00",
        billType: "FF/CHN",
        beNo: "980627",
        licenceNo: "LIC/1546",
        receiveDate: "18-07-2023",
         grnno:"456984",
        grndt:"23-05-2023",
        grnUnit: "01"
    },

    {
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS",
        buyerName: "AEO",
        billNo: "RCPT23-09-03547",
        billDate: "14-07-2023",
        billAmount: "9901.00",
        assValue: "9901.00",
        debitAmount: "0.00",
        netAmount: "9901.00",
        billType: "FF/CHN",
        beNo: "980628",
        licenceNo: "LIC/1547",
        receiveDate: "18-07-2023",
         grnno:"456984",
        grndt:"23-05-2023",
        grnUnit: "01"
    },

    {
        party: "5658",
        partyName: "LINKERS INDIA LOGISTICS",
        buyerName: "AEO",
        billNo: "RCPT23-09-03450",
        billDate: "12-07-2023",
        billAmount: "18361.00",
        assValue: "431094.00",
        debitAmount: "0.00",
        netAmount: "18361.00",
        billType: "CCL/CHN",
        beNo: "980629",
        licenceNo: "LIC/1548",
        receiveDate: "19-07-2023",
         grnno:"456984",
        grndt:"23-05-2023",
        grnUnit: "01"
    }

];
/*BIND DATATABLE */

function bindSCBTable() {


    const $tbody =
        $("#tblbodySCBTag");

    $tbody.empty();


    scbTagData.forEach(function (item, index) {

        const row = `

            <tr data-index="${index}">

              <td class="text-center">

                    <div class="d-flex justify-content-center align-items-center gap-1">
                
                        <!-- EDIT -->
                        <button type="button"
                                class="row-btn edit-btn btnEditSCBRow"
                                data-index="${index}"
                                title="Edit">
                
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="15"
                                 height="15"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-width="2"
                                 stroke-linecap="round"
                                 stroke-linejoin="round">
                
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                
                            </svg>
                
                        </button>
                
                
                        <!-- DELETE -->
                              <button
                                        type="button"
                                        class="row-btn bg-danger text-white delete-btn  btnDeleteSCBRow"
                                        data-id="index${index}"
                                        title="Delete">
                                       <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            aria-hidden="true">
                                
                                           <path d="M3 6h18"></path>
                                           <path d="M8 6V4h8v2"></path>
                                           <path d="M19 6l-1 14H6L5 6"></path>
                                           <path d="M10 11v6"></path>
                                           <path d="M14 11v6"></path>
                                
                                </svg>
                            </button>
                
                    </div>
                
                </td>

                <td>
                    ${escapeSCB(item.party)}
                </td>

                <td>
                    ${escapeSCB(item.partyName)}
                </td>
                
                  <td>
                    ${escapeSCB(item.buyerName)}
                </td>


                <td>
                    ${escapeSCB(item.billNo)}
                </td>

                <td>
                    ${escapeSCB(item.billDate)}
                </td>

                <td class="text-end">
                    ${escapeSCB(item.billAmount)}
                </td>

                <td class="text-end">
                    ${escapeSCB(item.assValue)}
                </td>

                <td class="text-end">
                    ${escapeSCB(item.debitAmount)}
                </td>

                <td class="text-end">
                    ${escapeSCB(item.netAmount)}
                </td>

                <td>
                    ${escapeSCB(item.billType)}
                </td>

                <td>
                    ${escapeSCB(item.beNo)}
                </td>

                <td>
                    ${escapeSCB(item.licenceNo)}
                </td>

                <td>
                    ${escapeSCB(item.receiveDate)}
                </td>

                <td>
                    ${escapeSCB(item.grnno)}
                </td>
                <td>
                    ${escapeSCB(item.grndt)}
                </td>
                <td>
                    ${escapeSCB(item.grnUnit)}
                </td>

            

            </tr>

        `;

        $tbody.append(row);

    });


    

}
/* ADD NEW ROW*/

let selectedSCBIndex = null;

function openSCBModal(index = null) {

    selectedSCBIndex = index;

    const isEdit =
        index !== null &&
        scbTagData[index];

    const item = isEdit
        ? scbTagData[index]
        : {
            party: "",
            partyName: "",
            buyerName: "",
            billNo: "",
            billDate: "",
            billAmount: "",
            assValue: "",
            debitAmount: "",
            netAmount: "",
            billType: "",
            beNo: "",
            licenceNo: "",
            receiveDate: "",
            grnUnit: ""
        };


    const body = `

        <div class="row g-3">

            <!-- PARTY -->
            <div class="col-md-4">
                <div class="field">
                    <label>Party</label>
                    <input type="text"
                           id="txtParty_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.party)}">
                </div>
            </div>


            <!-- PARTY NAME -->
            <div class="col-md-4">
                <div class="field">
                    <label>Party Name</label>
                    <input type="text"
                           id="txtPartyName_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.partyName)}">
                </div>
            </div>
              <!-- BUYER NAME -->
            <div class="col-md-4">
                <div class="field">
                    <label>Buyer Name</label>
                    <input type="text"
                           id="txtBuyerName_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.buyerName)}">
                </div>
            </div>

            <!-- BILL NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>Bill No</label>
                    <input type="text"
                           id="txtBillNo_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.billNo)}">
                </div>
            </div>


            <!-- BILL DATE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Bill Date</label>
                    <input type="text"
                           id="txtBillDate_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.billDate)}">
                </div>
            </div>


            <!-- BILL AMOUNT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Bill Amount</label>
                    <input type="text"
                           id="txtBillAmount_SCBModal"
                           class="form-control text-end"
                           value="${escapeSCBAttribute(item.billAmount)}">
                </div>
            </div>


            <!-- ASS VALUE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Ass Value</label>
                    <input type="text"
                           id="txtAssValue_SCBModal"
                           class="form-control text-end"
                           value="${escapeSCBAttribute(item.assValue)}">
                </div>
            </div>


            <!-- DEBIT AMOUNT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Debit Amount</label>
                    <input type="text"
                           id="txtDebitAmount_SCBModal"
                           class="form-control text-end"
                           value="${escapeSCBAttribute(item.debitAmount)}">
                </div>
            </div>


            <!-- NET AMOUNT -->
            <div class="col-md-4">
                <div class="field">
                    <label>Net Amount</label>
                    <input type="text"
                           id="txtNetAmount_SCBModal"
                           class="form-control text-end"
                           value="${escapeSCBAttribute(item.netAmount)}">
                </div>
            </div>


            <!-- BILL TYPE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Bill Type</label>
                    <input type="text"
                           id="txtBillType_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.billType)}">
                </div>
            </div>


            <!-- BE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>BE No</label>
                    <input type="text"
                           id="txtBENo_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.beNo)}">
                </div>
            </div>


            <!-- LICENCE NO -->
            <div class="col-md-4">
                <div class="field">
                    <label>Licence No</label>
                    <input type="text"
                           id="txtLicenceNo_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.licenceNo)}">
                </div>
            </div>


            <!-- RECEIVE DATE -->
            <div class="col-md-4">
                <div class="field">
                    <label>Receive Date</label>
                    <input type="text"
                           id="txtReceiveDate_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.receiveDate)}">
                </div>
            </div>


            <!-- GRN UNIT -->
            <div class="col-md-4">
                <div class="field">
                    <label>GRN Unit</label>
                    <input type="text"
                           id="txtGRNUnit_SCBModal"
                           class="form-control"
                           value="${escapeSCBAttribute(item.grnUnit)}">
                </div>
            </div>

        </div>
    `;


    const footer = `

        <button type="button"
                class="btn btn-secondary btn-sm"
                onclick="closeCommonModal()">
            Cancel
        </button>

        <button type="button"
                class="btn btn-primary btn-sm"
                id="btnSaveSCBModal">

            ${isEdit ? "Update" : "Add"}

        </button>
    `;


    openCommonModal({

        title: isEdit
            ? "Edit Service Charge Bill"
            : "Add Service Charge Bill",

        subtitle: isEdit
            ? "Update service charge bill details"
            : "Enter service charge bill details",

        size: "lg",

        body: body,

        footer: footer
    });


    /* DATE PICKERS */

    flatpickr("#txtBillDate_SCBModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });


    flatpickr("#txtReceiveDate_SCBModal", {
        dateFormat: "d-m-Y",
        allowInput: true
    });


    /* ADD / UPDATE */

    $("#btnSaveSCBModal")
        .off("click.scb")
        .on("click.scb", function () {

            saveSCBFromModal();

        });
}

//save
function saveSCBFromModal() {

    const item = {

        party:
            ($("#txtParty_SCBModal").val() || "").trim(),

        partyName:
            ($("#txtPartyName_SCBModal").val() || "").trim(),

        billNo:
            ($("#txtBillNo_SCBModal").val() || "").trim(),

        billDate:
            ($("#txtBillDate_SCBModal").val() || "").trim(),

        billAmount:
            ($("#txtBillAmount_SCBModal").val() || "").trim(),

        assValue:
            ($("#txtAssValue_SCBModal").val() || "").trim(),

        debitAmount:
            ($("#txtDebitAmount_SCBModal").val() || "").trim(),

        netAmount:
            ($("#txtNetAmount_SCBModal").val() || "").trim(),

        billType:
            ($("#txtBillType_SCBModal").val() || "").trim(),

        beNo:
            ($("#txtBENo_SCBModal").val() || "").trim(),

        licenceNo:
            ($("#txtLicenceNo_SCBModal").val() || "").trim(),

        receiveDate:
            ($("#txtReceiveDate_SCBModal").val() || "").trim(),

        grnUnit:
            ($("#txtGRNUnit_SCBModal").val() || "").trim()
    };


    /* VALIDATION */

    if (!item.party) {

        showWarning(
            "Party Required",
            "Please enter Party."
        );

        return;
    }


    if (!item.billNo) {

        showWarning(
            "Bill Number Required",
            "Please enter Bill Number."
        );

        return;
    }


    /* ADD */

    if (selectedSCBIndex === null) {

        scbTagData.push(item);

        bindSCBTable();

        closeCommonModal();

        showSuccess(
            "Added Successfully",
            "Service charge bill added successfully."
        );

        return;
    }


    /* UPDATE */

    scbTagData[selectedSCBIndex] = item;

    bindSCBTable();

    closeCommonModal();

    showSuccess(
        "Updated Successfully",
        "Service charge bill updated successfully."
    );
}
/*DELETE ROW */

function deleteSCBRow($row) {

    showWarning(
         "Delete Row?",
        "Are you sure you want to delete this row?",


    ).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }

        /* New unsaved row */

        if ($row.hasClass("scb-new-row")) {

            bindSCBTable();

            showSuccess(
            "Removed",
             "New row removed.",

            );

            return;

        }


        const index =
            parseInt($row.attr("data-index"), 10);


        if (!isNaN(index)) {

            scbTagData.splice(index, 1);

        }


        bindSCBTable();


        showSuccess(
            "Deleted",
             "Row deleted successfully.",


        );

    });

}


/* MAIN SAVE*/

function saveSCBTag() {

    const entry =
        ($("#txtEntry_SCBTag").val() || "").trim();

    const date =
        ($("#txtDt_SCBTag").val() || "").trim();


    if (!entry) {

        Swal.fire({

            icon: "warning",

            title: "Entry Required",

            text: "Please enter Entry Number."

        });

        $("#txtEntry_SCBTag").focus();

        return;

    }


    if (!date) {

        Swal.fire({

            icon: "warning",

            title: "Date Required",

            text: "Please select Date."

        });

        $("#txtDt_SCBTag").focus();

        return;

    }


    if (scbTagData.length === 0) {

        Swal.fire({

            icon: "warning",

            title: "No Data",

            text: "Please add at least one row."

        });

        return;

    }


    const saveData = {

        entry: entry,

        date: date,

        items: scbTagData

    };


    console.log("SCB Tag Data:", saveData);


    Swal.fire({

        title: "Save Entry?",

        text: "Do you want to save this Service Charge Bill Tag?",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Yes, Save",

        cancelButtonText: "Cancel"

    }).then(function (result) {

        if (!result.isConfirmed) {

            return;

        }


        /* API call yahan add kar sakte ho */


        Swal.fire({

            icon: "success",

            title: "Saved Successfully",

            text: "Service Charge Bill Tag saved successfully.",

            timer: 1200,

            showConfirmButton: false

        });

    });

}


/* REFRESH */
let initialSCBTagData = [...scbTagData];
function refreshSCBTag() {

    showConfirm(
         "Refresh?",
        "All unsaved changes will be removed.",



    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        /* Clear Entry */

        $("#txtEntry_SCBTag").val("");


        /* Clear Date */

        const dateElement =
            document.getElementById("txtDt_SCBTag");


        if (
            dateElement &&
            dateElement._flatpickr
        ) {

            dateElement._flatpickr.clear();

        }
        else {

            $("#txtDt_SCBTag").val("");

        }


        /* Restore Original Static Data */

        scbTagData = [...initialSCBTagData];


        /* Rebind Table */

        bindSCBTable();


        /* Notification */

        showSuccess(
            "Refreshed",
            "Form refreshed successfully.",


        );

    });

}
/*HTML ESCAPE */

function escapeSCB(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}
function escapeSCBAttribute(value) {

    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}