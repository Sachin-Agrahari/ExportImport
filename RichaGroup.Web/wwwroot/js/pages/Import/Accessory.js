
// import { initDatePicker, initializeSelect2, showToast } from "../../Utility/Components.js";
import { initDatePicker, initializeSelect2, showToast } from "../../Utlity/Components.js"

$(function () {
    const $page = $("#route-po");
    const poType = ($page.data("po-type") || "sampling").toString().toLowerCase();
    const isGeneral = poType === "general";

    // $("#orderDate").flatpicker()
    //initDatePicker(`#orderDate`);
    //initDatePicker(`#deliveryDate`);
    //initDatePicker(`#endDate`);
 
    /* -----------------------------
       Select2
    ----------------------------- */
   /* initializeSelect2('.select2') */


    const seedRows = [
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",  
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style : "XXXXXXXX",
            Buyer : "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"

        },
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
             
        },
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
             
        },
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
            
        },
         
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
            
        },
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
            
        },
        {
            accessory: "Button",
            accClass: "acc-pill-blue",
            type: "Standard",
            size: "M",
            colour: "Blue",
            totalReq: 2400,
            currentPO: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "XXXXXXXX",
            Buyer: "AEO",
            Item_Supplier: "XXXXXXXX",
            Req_No: 1232,
            Import_Accessory: "Button",
            Import_Type: "Standard",
            Import_Size: "XL",
            Import_Colour: "Blue Heaven",
            Po_Desc: "12"
             
        }
    ];
     
    const $tableBody = $("#tableBody");

    seedRows.forEach((row, index) => {
        $tableBody.append(buildRow(row, index + 1));
    });
 
    function buildRow(r, idx) {
        return `
        <tr>
            <td class="td-check">
                <input type="checkbox" class="row-checkbox">
            </td>
 
            <td>
                <span class="acc-pill ${r.accClass || "acc-pill-blue"}">
                    ${escapeHtml(r.accessory || "")}
                </span>
            </td>

            <td>${escapeHtml(r.type || "")}</td>
            <td>${escapeHtml(r.size || "")}</td>
            <td>${escapeHtml(r.colour || "")}</td>

            <td class="td-number">
                ${Number(r.totalReq || 0).toLocaleString()}
            </td>


            <!-- Remark -->
            <td>
                <input
                    class="table-input table-input-text"
                    id="txtRemark_${idx}"
                    value="${escapeAttribute(r.remark || "")}"
                    placeholder="Remark…"
                    style="min-width:100px">
            </td>

            <!-- Current Qty -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    id="txtCurrentQty_${idx}"
                    inputmode="numeric"
                    data-decimal="false"
                    value="${Number(r.currentPO || 0).toLocaleString()}" >
            </td>

             <!-- Delivery Date -->
            <td>
                <input
                    class="table-input datePicker"
                    id="txtDelvDate_${idx}"
                    value="${escapeAttribute(r.deliveryDate || "")}" style="min-width:90px;height:27px;">
            </td>

            <!-- Rate -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    id="txtRate_${idx}"
                    inputmode="decimal"
                    data-decimal="true"
                    value="${Number(r.rate || 0).toFixed(2)}" >
            </td>
           
            <!-- Extra % -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    id="txtExtraPer_${idx}"
                    inputmode="decimal"
                    data-decimal="true"
                    value="${Number(r.extraPct || 0).toFixed(2)}" >
            </td>

            <!-- Extra Qty -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    id="txtExtraQty_${idx}"
                    inputmode="numeric"
                    data-decimal="false"
                    value="${Number(r.extraQty || 0).toLocaleString()}" >
            </td>


            <td>${escapeHtml(r.Style || "")}</td>
            <td>${escapeHtml(r.Buyer || "")}</td>
            <td>${escapeHtml(r.Item_Supplier || "")}</td>
           
        </tr>
    `;
    }

    document.addEventListener("input", function (e) {
        if (!e.target.classList.contains("numeric-input")) {
            return;
        }

        const input = e.target;
        const allowDecimal = input.dataset.decimal === "true";

        let value = input.value;

        // Remove commas first
        value = value.replace(/,/g, "");

        if (allowDecimal) {
            // Allow only digits and one decimal point
            value = value.replace(/[^\d.]/g, "");

            // Keep only the first decimal point
            const parts = value.split(".");
            if (parts.length > 2) {
                value = parts[0] + "." + parts.slice(1).join("");
            }
        } else {
            // Integer only
            value = value.replace(/\D/g, "");
        }

        input.value = value;
    });
     
    function emptyRow(idx) {
        return `
        <tr>
            <td class="td-check">
                <input type="checkbox" class="row-checkbox">
            </td>

            <td class="td-sr">${idx}</td>

            <td>
                <span class="acc-pill acc-pill-blue"></span>
            </td>

            <td></td>
            <td></td>
            <td></td>

            <td class="td-number">
                0
            </td>

            <!-- Current Qty -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    type="text"
                    inputmode="numeric"
                    data-decimal="false"
                    id="txtCurrentQty_${idx}"
                    value="0" >
            </td>

            <!-- Delivery Date -->
            <td>
                <input
                    class="table-input table-input-date datePicker"
                    type="text"
                    id="txtDelvDate_${idx}"
                    value=""
                    style="min-width:90px;height:27px;"
                    placeholder="dd-MMM-yyyy" >
            </td>

            <!-- Rate -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    type="text"
                    inputmode="decimal"
                    data-decimal="true"
                    id="txtRate_${idx}"
                    value="0.00" >
            </td>

            <!-- Extra % -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    type="text"
                    inputmode="decimal"
                    data-decimal="true"
                    id="txtExtraPer_${idx}"
                    value="0.00" >
            </td>

            <!-- Extra Qty -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    type="text"
                    inputmode="numeric"
                    data-decimal="false"
                    id="txtExtraQty_${idx}"
                    value="0">
            </td>

            <!-- Remark -->
            <td>
                <input
                    class="table-input table-input-text"
                    type="text"
                    id="txtRemark_${idx}"
                    value=""
                    style="width:100px"
                    placeholder="Remark…" >
            </td>

            <!-- Non-editable columns -->
            <td></td>
            <td></td>
            <td></td>
            <td class="td-number">0.00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="td-number">0.00</td>
        </tr>
    `;
    }

    /* -----------------------------
       Add row
    ----------------------------- */
 
    function addTableRow() {

        const nextIndex = $tableBody.find("tr").length + 1;

        $tableBody.append(emptyRow(nextIndex));
         
        initDatePicker(`#txtDelvDate_${nextIndex}`);

        showToast(`Row ${nextIndex} added`);
    }

    $("#btnAddRow").on("click", function () {
        addTableRow();
    });
     
    if (isGeneral) {
        $("#btnAddItem, #btnAddItemInline").on("click", function () {
            resetAddModal();
            $("#addItemModal").modal("show");
        });
    }

    /* -----------------------------
       Add item modal
    ----------------------------- */
    if (isGeneral) {
        $("#btnCancelAddItem").on("click", function () {
            $("#addItemModal").modal("hide");
        });

        $("#addItemModal").on("click", function (e) {
            if (e.target === this) {
                $("#addItemModal").modal("hide");
            }
        });
         
        $("#btnSaveAddItem").on("click", function () {
            const accessory = $("#modalAccessorySelect option:selected").text();
            const accessoryValue = $("#modalAccessorySelect").val();

            const type = $("#modalTypeSelect option:selected").text();
            const size = $("#modalSizeSelect option:selected").text();
            //const colourCode = $("#modalColourSelect").val();
            const colourText = $("#modalColourSelect option:selected").text();

            if (!accessoryValue || !$("#modalTypeSelect").val()) {
                showToast("Accessory and Type are required", "warning");
                return;
            }

            // Extra fields present in modal but not previously used
            const styleText = $("#styleSelect option:selected").text();
            const buyerText = $("#buyerSelect option:selected").text();

            // Fields with no dedicated modal input — pulled from main page selects
            const vendorText = $("#vendorSelect option:selected").text();
            const reqNoText = $("#ReqSelect option:selected").text();

            const row = {
                accessory: accessory,
                accClass: getAccessoryClass(accessoryValue),
                type: type,
                size: size === "— Select —" ? "" : size,
                colour: colourText === "— Select —" ? "" : colourText,
                totalReq: 0,
                currentPO: Number($('#modalCurrentQty').val()),
                deliveryDate: $("#deliveryDate").val() || "",
                rate: Number($("#modalRateInput").val()) || 0,
                extraPct: 0,
                extraQty: 0,
                remark: "",
                concernPerson:
                    $("#modalConcernPersonSelect option:selected").text() === "— Select Person —"
                        ? ""
                        : $("#modalConcernPersonSelect option:selected").text(),

                // ---- previously missing / blank cells ----
                Style: styleText === "— Select Style —" ? "" : styleText,
                Buyer: buyerText === "— Select Buyer —" ? "" : buyerText,
                Item_Supplier: vendorText === "— Select Vendor —" ? "" : vendorText,
                Req_No: Number(reqNoText) || 0,
                Import_Accessory: accessory,
                Import_Type: type,
                Import_Size: size === "— Select —" ? "" : size,
                Import_Colour: colourText === "— Select —" ? "" : colourText,
                Po_Desc: 0
            };

            row.extraQty = Math.round(row.totalReq * row.extraPct / 100);
 
            const nextIndex = $tableBody.find("tr").length + 1;
            const $newRow = $(buildRow(row, nextIndex));
            $tableBody.append($newRow);
            initDatePicker($newRow.find(".datePicker"));
            renumberRows(); 

            $("#addItemModal").modal("hide");
            showToast("Accessory added");
        });

    }

    function resetAddModal() {
        if (!isGeneral) return;

        $("#modalAccessorySelect, #modalTypeSelect, #modalSizeSelect, #modalColourSelect, #modalConcernPersonSelect")
            .val("")
            .trigger("change");

        $("#modalRateInput").val("0");
    }

    function getAccessoryClass(value) {
        const map = {
            button: "acc-pill-blue",
            zipper: "acc-pill-teal",
            label: "acc-pill-amber",
            thread: "acc-pill-rose",
            elastic: "acc-pill-green",
            tape: "acc-pill-purple",
            hook: "acc-pill-orange",
            velcro: "acc-pill-blue"
        };

        return map[value] || "acc-pill-blue";
    }


    function renumberRows() {
        $tableBody.find("tr").each(function (i) {
            $(this).find(".td-sr").text(i + 1);
        });
    }

    /* -----------------------------
       Select all
    ----------------------------- */
    $("#selectAll").on("change", function () {
        $tableBody.find(".row-checkbox").prop("checked", this.checked);
        $tableBody.find("tr").toggleClass("selected-row", this.checked);
    });

    $tableBody.on("change", ".row-checkbox", function () {
        const all = $tableBody.find(".row-checkbox").length;
        const checked = $tableBody.find(".row-checkbox:checked").length;

        $("#selectAll")
            .prop("indeterminate", checked > 0 && checked < all)
            .prop("checked", checked === all);

        $(this).closest("tr").toggleClass("selected-row", this.checked);
    });

    /* -----------------------------
       Status
    ----------------------------- */
    $("#statusSelect").on("change", function () {
        const value = $(this).val();

        $("#headerStatusBadge")
            .removeClass("fresh process closed cancelled")
            .addClass(value || "fresh")
            .text($(this).find("option:selected").text());
    });



    /* -----------------------------
       Header / action buttons
    ----------------------------- */
    $("#btnSave").on("click", function () {
         showToast(`${poType} Purchase Order saved successfully` );
    });

    $("#editModeBtn").on("click", function () {
        $(this).toggleClass("active");
        const isOn = $(this).hasClass("active");

        $(this).find("span").text(isOn ? "Edit Mode: ON" : "Edit Mode: OFF");

         showToast(
            isOn ? "Edit mode turned ON" : "Edit mode turned OFF",
            isOn ? "success" : "info"
        );
    });

    $("#btnPrint").on("click", function () {
        window.print();
    });

    $("#btnRefresh").on("click", function () {
         showToast("Table refreshed");
    });

    $("#btnBuyerPO").on("click", function () {
         showToast("Opening Buyer PO…", "info");
    });

    $("#btnInstruction").on("click", function () {
         showToast("Instructions loaded", "info");
    });


    $("#btnSummaryChecker").on("click", function () {
        $('#SummaryCheckerModal').modal("show");
    });



    /* Sampling only: Execute */
    if (!isGeneral) {
        $("#btnQueryExe").on("click", function () {
             showToast("Purchase Order executed successfully");
        });
    }

    /* -----------------------------
       Import modal
    ----------------------------- */
    $("#btnImportDetails").on("click", function () {
        $("#importModal").modal('show');
    });

    $("#btnCloseImport").on("click", function () {
        $("#importModal").removeClass("open");
    });

    $("#btnSaveImport").on("click", function () {
        $("#importModal").removeClass("open");
         showToast("Import details saved");
    });

    $("#importModal").on("click", function (e) {
        if (e.target === this) {
            $(this).removeClass("open");
        }
    });
 
    /* -----------------------------
       Helpers
    ----------------------------- */
    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function escapeAttribute(value) {
        return escapeHtml(value);
    }

   
});