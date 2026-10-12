
let gspInvoiceItems = [

    {
        srNo: 1,
        style: "2044",
        poNo: "1259149",
        catgry: "OBA/NA",
        qty: "69",
        unit: "PCS",
        op: "+",
        rate: "13.92",
        amount: "960.48",
        fobRt: "13.92",
        fobVal: "960.48",
        dbkPc: "3.00",
        dbkAmt: "2424.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 2,
        style: "2045",
        poNo: "1259150",
        catgry: "OBA/NA",
        qty: "50",
        unit: "PCS",
        op: "+",
        rate: "15.20",
        amount: "760.00",
        fobRt: "15.20",
        fobVal: "760.00",
        dbkPc: "3.00",
        dbkAmt: "2280.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 3,
        style: "2046",
        poNo: "1259151",
        catgry: "OBA/NA",
        qty: "42",
        unit: "PCS",
        op: "+",
        rate: "18.50",
        amount: "777.00",
        fobRt: "18.50",
        fobVal: "777.00",
        dbkPc: "3.00",
        dbkAmt: "2331.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 4,
        style: "2047",
        poNo: "1259152",
        catgry: "OBA/NA",
        qty: "35",
        unit: "PCS",
        op: "+",
        rate: "11.50",
        amount: "402.50",
        fobRt: "11.50",
        fobVal: "402.50",
        dbkPc: "3.00",
        dbkAmt: "1207.50",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 5,
        style: "2048",
        poNo: "1259153",
        catgry: "OBA/NA",
        qty: "30",
        unit: "PCS",
        op: "+",
        rate: "14.25",
        amount: "427.50",
        fobRt: "14.25",
        fobVal: "427.50",
        dbkPc: "3.00",
        dbkAmt: "1282.50",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 6,
        style: "2049",
        poNo: "1259154",
        catgry: "OBA/NA",
        qty: "28",
        unit: "PCS",
        op: "+",
        rate: "12.75",
        amount: "357.00",
        fobRt: "12.75",
        fobVal: "357.00",
        dbkPc: "3.00",
        dbkAmt: "1071.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 7,
        style: "2050",
        poNo: "1259155",
        catgry: "OBA/NA",
        qty: "25",
        unit: "PCS",
        op: "+",
        rate: "16.40",
        amount: "410.00",
        fobRt: "16.40",
        fobVal: "410.00",
        dbkPc: "3.00",
        dbkAmt: "1230.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 8,
        style: "2051",
        poNo: "1259156",
        catgry: "OBA/NA",
        qty: "22",
        unit: "PCS",
        op: "+",
        rate: "10.80",
        amount: "237.60",
        fobRt: "10.80",
        fobVal: "237.60",
        dbkPc: "3.00",
        dbkAmt: "712.80",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 9,
        style: "2052",
        poNo: "1259157",
        catgry: "OBA/NA",
        qty: "20",
        unit: "PCS",
        op: "+",
        rate: "13.25",
        amount: "265.00",
        fobRt: "13.25",
        fobVal: "265.00",
        dbkPc: "3.00",
        dbkAmt: "795.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    },

    {
        srNo: 10,
        style: "2053",
        poNo: "1259158",
        catgry: "OBA/NA",
        qty: "18",
        unit: "PCS",
        op: "+",
        rate: "17.00",
        amount: "306.00",
        fobRt: "17.00",
        fobVal: "306.00",
        dbkPc: "3.00",
        dbkAmt: "918.00",
        wt: "0.000",
        wtPrn: "N",
        ttl: "N"
    }

];

$(document).ready(function () {

    initGSPInvoice();

    $("#gspInvoiceBody").on("shown.bs.collapse", function () {
    $("#gspCollapseIcon").css("transform", "rotate(0deg)");
});

$("#gspInvoiceBody").on("hidden.bs.collapse", function () {
    $("#gspCollapseIcon").css("transform", "rotate(-90deg)");
});

});

function initGSPInvoice() {

    // Select2
    $(".select2-field").each(function () {

        if (!$(this).hasClass("select2-hidden-accessible")) {

            $(this).select2({
                width: "100%",
                dropdownAutoWidth: false,
                allowClear: false
            });

        }

    });


    $("#btnAddItem_GSPInvoice").on("click", function () {

        addRowGSPInvoiceTable();

    });
 
    $("#btnRefresh_GSPInvoiceGeneration").on("click", function () {

        refreshGSPInvoice();

    });
    
    $("#btnSave_GSPInvoiceGeneration").on("click", function () {

        saveGSPInvoice();

    });
   
    $("#btnOkGSPInvoice").on("click", function () {

        saveGSPDescriptionFromModal();

    });
   
    bindGSPInvoiceTable();

}
function saveGSPDescriptionFromModal() {

    const description =
        ($("#txtModalDescription_GSPInvoice").val() || "").trim();


    if (!description) {

        showWarning(
             "Description Required",
             "Please enter Description of Goods."
        );

        $("#txtModalDescription_GSPInvoice").focus();

        return;
    }


    
    $("#txtDescription_GSPInvoice")
        .val(description);


    // Close modal
    const modalElement =
        document.getElementById("modalGSPInvoice");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }

}
/* ADD NEW TABLE ROW */
function addRowGSPInvoiceTable() {

    const newItem = {

        srNo: gspInvoiceItems.length + 1,

        style: "",
        poNo: "",
        catgry: "",
        qty: "",
        unit: "",
        op: "+",
        rate: "",
        amount: "",
        fobRt: "",
        fobVal: "",
        dbkPc: "",
        dbkAmt: "",
        wt: "",
        wtPrn: "N",
        ttl: "N"

    };


    gspInvoiceItems.push(newItem);


    bindGSPInvoiceTable();


    // Automatically edit newly added row
    const newIndex =
        gspInvoiceItems.length - 1;

    setTimeout(function () {

        editGSPInvoiceRow(newIndex);

    }, 50);

}
/*BIND TABLE */

function bindGSPInvoiceTable() {

    const $tbody =
        $("#tblbodyGSPInvoice");

    $tbody.empty();


    if (!gspInvoiceItems.length) {

        $tbody.html(`
            <tr class="gsp-no-data">
                <td colspan="17" class="text-center">
                    No invoice items found.
                </td>
            </tr>
        `);

        return;
    }


    gspInvoiceItems.forEach(function (item, index) {

        const row = `

            <tr data-index="${index}">
             <td class="text-center">

                    <button type="button"
                            class="edit-btn gsp-action-btn gsp-edit-btn"
                            data-index="${index}"
                            title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                </td>
                <td class="r num" >
                    ${escapeGSPHtml(item.srNo)}
                </td>

                <td>
                    ${escapeGSPHtml(item.style)}
                </td>

                <td>
                    ${escapeGSPHtml(item.poNo)}
                </td>

                <td>
                    ${escapeGSPHtml(item.catgry)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.qty)}
                </td>

                <td>
                    ${escapeGSPHtml(item.unit)}
                </td>

                <td class="text-center">
                    ${escapeGSPHtml(item.op)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.rate)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.amount)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.fobRt)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.fobVal)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.dbkPc)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.dbkAmt)}
                </td>

                <td class="text-end">
                    ${escapeGSPHtml(item.wt)}
                </td>

                <td class="text-center">
                    ${escapeGSPHtml(item.wtPrn)}
                </td>

                <td class="text-center">
                    ${escapeGSPHtml(item.ttl)}
                </td>
            </tr>

        `;

        $tbody.append(row);

    });

}
/* EDIT ROW */

function editGSPInvoiceRow(index) {

    const item = gspInvoiceItems[index];

    if (!item) {
        return;
    }

    // Current row index store
    gspInvoiceEditIndex = index;

    // Modal title
    $("#modalGSPInvoiceLabel").text("Edit Invoice Item");

    // Existing data modal me load
    $("#gspStyle").val(item.style || "");
    $("#gspPoNo").val(item.poNo || "");
    $("#gspCatgry").val(item.catgry || "");
    $("#gspQty").val(item.qty || "");
    $("#gspUnit").val(item.unit || "");
    $("#gspOp").val(item.op || "");
    $("#gspRate").val(item.rate || "");
    $("#gspAmount").val(item.amount || "");
    $("#gspFobRt").val(item.fobRt || "");
    $("#gspFobVal").val(item.fobVal || "");
    $("#gspDbkPc").val(item.dbkPc || "");
    $("#gspDbkAmt").val(item.dbkAmt || "");
    $("#gspWt").val(item.wt || "");
    $("#gspWtPrn").val(item.wtPrn || "");
    $("#gspTtl").val(item.ttl || "");

    // Open modal
    const modalElement =
        document.getElementById("modalGSPInvoice");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
}

$("#btnAddGSPInvoice").on("click", function () {

    // -1 means new record
    gspInvoiceEditIndex = -1;

    // Modal title
    $("#modalGSPInvoiceLabel").text("Add Invoice Item");

    // Clear all fields
    $("#gspStyle").val("");
    $("#gspPoNo").val("");
    $("#gspCatgry").val("");
    $("#gspQty").val("");
    $("#gspUnit").val("");
    $("#gspOp").val("");
    $("#gspRate").val("");
    $("#gspAmount").val("");
    $("#gspFobRt").val("");
    $("#gspFobVal").val("");
    $("#gspDbkPc").val("");
    $("#gspDbkAmt").val("");
    $("#gspWt").val("");
    $("#gspWtPrn").val("");
    $("#gspTtl").val("");

    // Open modal
    const modalElement =
        document.getElementById("modalGSPInvoice");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();

});

$("#btnOkGSPInvoice").on("click", function () {

    const item = {

        style: $("#gspStyle").val().trim(),

        poNo: $("#gspPoNo").val().trim(),

        catgry: $("#gspCatgry").val().trim(),

        qty: $("#gspQty").val(),

        unit: $("#gspUnit").val().trim(),

        op: $("#gspOp").val(),

        rate: $("#gspRate").val(),

        amount: $("#gspAmount").val(),

        fobRt: $("#gspFobRt").val(),

        fobVal: $("#gspFobVal").val(),

        dbkPc: $("#gspDbkPc").val(),

        dbkAmt: $("#gspDbkAmt").val(),

        wt: $("#gspWt").val(),

        wtPrn: $("#gspWtPrn").val(),

        ttl: $("#gspTtl").val()

    };


    // =========================
    // EDIT EXISTING ROW
    // =========================

    if (gspInvoiceEditIndex >= 0) {

        const oldItem =
            gspInvoiceItems[gspInvoiceEditIndex];

        item.srNo = oldItem.srNo;

        gspInvoiceItems[gspInvoiceEditIndex] = item;

    }

    // =========================
    // ADD NEW ROW
    // =========================

    else {

        item.srNo =
            gspInvoiceItems.length + 1;

        gspInvoiceItems.push(item);

    }


    // Rebind table
    bindGSPInvoiceTable();


    // Close modal
    const modalElement =
        document.getElementById("modalGSPInvoice");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.hide();

});

/*EDIT BUTTON */
$(document).on(
    "click",
    ".gsp-edit-btn",
    function () {

        const index =
            parseInt($(this).attr("data-index"));

        editGSPInvoiceRow(index);

    }
);

/*SAVE BUTTON */

$(document).on(
    "click",
    "#btnAddGSPInvoice",
    function () {

        gspInvoiceEditIndex = -1;

        $("#modalGSPInvoiceLabel")
            .text("Add Invoice Item");

        $("#gspStyle").val("");
        $("#gspPoNo").val("");
        $("#gspCatgry").val("");
        $("#gspQty").val("");
        $("#gspUnit").val("");
        $("#gspOp").val("");
        $("#gspRate").val("");
        $("#gspAmount").val("");
        $("#gspFobRt").val("");
        $("#gspFobVal").val("");
        $("#gspDbkPc").val("");
        $("#gspDbkAmt").val("");
        $("#gspWt").val("");
        $("#gspWtPrn").val("");
        $("#gspTtl").val("");

        bootstrap.Modal
            .getOrCreateInstance(
                document.getElementById("modalGSPInvoice")
            )
            .show();

    }
);

/*CREATE INPUT */


function refreshGSPInvoice() {

    showWarning(

             "Are you sure?",
         "Do you want to refresh GSP Invoice Generation?",

    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        showLoader("Refreshing GSP Invoice...");


        setTimeout(function () {

            // Clear inputs
            $("#tblGSPInvoice")
                .find("input")
                .val("");


            $(".gsp-page input")
                .not("#tblGSPInvoice input")
                .val("");


            // Reset Select2
            $(".gsp-page select.select2-field")
                .val("")
                .trigger("change");


            // Clear table
            gspInvoiceItems = [];

            bindGSPInvoiceTable();


            hideLoader();


            showSucess(
                 "Refreshed",
                "GSP Invoice Generation refreshed successfully.",
       );

        }, 500);

    });

}


/*SAVE GSP INVOICE */

function saveGSPInvoice() {

    if (!gspInvoiceItems.length) {

       showWarning(
           "No Items",
             "Please add at least one invoice item."
        );

        return;

    }


    showConfirm(
      "Are you sure?",
      "Do you want to save GSP Invoice?",


    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }


        console.log(
            "[GSPInvoice] Invoice Items:",
            gspInvoiceItems
        );


        showLoader("Saving GSP Invoice...");


        setTimeout(function () {

            hideLoader();


            showSucess(
                "Saved Successfully",
                 "GSP Invoice saved successfully.",


            );

        }, 700);

    });

}


/* HTML ESCAPE */

function escapeGSPHtml(value) {

    return $("<div>")
        .text(value == null ? "" : value)
        .html();

}

/* ATTRIBUTE ESCAPE*/
