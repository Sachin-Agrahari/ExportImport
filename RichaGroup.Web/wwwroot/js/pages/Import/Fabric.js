
import { initDatePicker, initializeSelect2, showToast } from "../../Utlity/Components.js"

$(function () {
    const $page = $("#route-po");
    const poType = ($page.data("po-type") || "Sampling").toString().toLowerCase();
    const isGeneral = poType === "general";
 

    /* -----------------------------
       Select2
    ----------------------------- */
  
    
    //initDatePicker(".datePicker");

    const seedRows = [
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
        }, 
        {
            Fabric: "40`S CAMBRIC",
            Print: "ALLOVER",
            Colour: "ADMIRAL RE",
            Quality: "100% COTTON",
            totalReq: 2400,
            currentQty: 2400,
            deliveryDate: "15-Jun-2026",
            rate: 3.50,
            extraPct: 5.00,
            extraQty: 120,
            remark: "Confirm shade before dispatch",
            Style: "VLMC 4911",
            Buyer: "AEO",
            Item_Supplier: "S44TI023X",
            Req_No: 1232,
            UOM: "ABC",
            PoAlready: "Yes"
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
                    ${escapeHtml(r.Fabric || "")}
                </span>
            </td>

            <td>${escapeHtml(r.Print || "")}</td>
            <td>${escapeHtml(r.Colour || "")}</td>
            <td>${escapeHtml(r.Quality || "")}</td>

            <td class="r num">
                ${Number(r.totalReq || 0).toLocaleString()}
            </td>

            <!-- Current Qty -->
            <td>
                <input
                    class="r num table-input table-input-number numeric-input"
                    id="txtCurrentQty_${idx}"
                    inputmode="numeric"
                    data-decimal="false"
                    style="max-width:90px;"
                    value="${Number(r.currentPO || 0).toLocaleString()}" >
            </td>

            <!-- Delivery Date -->
            <td>
                <input
                    class="table-input datePicker" 
                    id="txtDelvDate_${idx}"
                    value="${escapeAttribute(r.deliveryDate || "")}" style="max-width:110px;height:27px;">
            </td>

            <!-- Rate -->
            <td>
                <input
                    class="r num table-input table-input-number numeric-input"
                    id="txtRate_${idx}"
                    inputmode="decimal"
                    data-decimal="true"
                    style="max-width:90px;"
                    value="${Number(r.rate || 0).toFixed(2)}" >
            </td>
               <td class="r num">${Number(r.Req_No || 0).toFixed(2)}</td>
               <td class="">${escapeHtml(r.UOM || "")}</td>
               <td class="">${escapeHtml(r.PoAlready || "") }</td>
            <!-- Extra % -->
            <td>
                <input
                    class="r num table-input table-input-number numeric-input"
                    id="txtExtraPer_${idx}"
                    inputmode="decimal"
                    data-decimal="true"
                    style="max-width:90px;"
                    value="${Number(r.extraPct || 0).toFixed(2)}" >
            </td>

            <!-- Extra Qty -->
            <td>
                <input
                    class="r num table-input table-input-number numeric-input"
                    id="txtExtraQty_${idx}"
                    inputmode="numeric"
                    data-decimal="false"
                    style="max-width:90px;"
                    value="${Number(r.extraQty || 0).toLocaleString()}" >
            </td>

            <!-- Remark -->
            <td>
                <input
                    class="table-input table-input-text"
                    id="txtRemark_${idx}"
                    value="${escapeAttribute(r.remark || "")}"
                    placeholder="Remark…"
                    style="max-width:120px">
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
         
        value = value.replace(/,/g, "");

        if (allowDecimal) {
         
            value = value.replace(/[^\d.]/g, "");
             
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
                    style="max-width:90px;"
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
                    style="max-width:110px;height:27px;"
                    placeholder="dd-MMM-yyyy" >
            </td>

            <!-- Rate -->
            <td>
                <input
                    class="table-input table-input-number numeric-input"
                    type="text"
                    inputmode="decimal"
                    data-decimal="true"
                    style="max-width:90px;"
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
                    style="max-width:90px;"
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
                    style="max-width:90px;"
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
                    style="max-width:120px"
                    placeholder="Remark…" >
            </td>

            <!-- Non-editable columns -->
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

        const $newRow = $(emptyRow(nextIndex));
        $tableBody.append($newRow);

        // Initialize flatpickr only inside the new row
        initDatePicker($newRow.find(".datePicker"));

        showToast(`Row ${nextIndex} added`);
    }

    $("#btnAddRow").on("click", function () {
        addTableRow();
    });

    /* General Add button opens modal.
       Sampling keeps Execute instead. */
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
            const Fabric = $("#modalFabricSelect").val();
            const Print = $("#modalPrintSelect").val();

            const Colour = $("#modalColourSelect").val();
            const Quality = $("#modalQualitySelect").val();
            

            if (!Fabric || !Print) {
                showToast("Fabric and Print are required", "warning");
                return;
            }

            // Extra fields present in modal but not previously used
            const styleText = $("#styleSelect").val();
            const buyerText = $("#buyerSelect").val();

            // Fields with no dedicated modal input — pulled from main page selects
            const vendorText = $("#vendorSelect option:selected").text();
            const reqNoText = $("#ReqSelect").val();

            const row = {
                
                Fabric: Fabric,
                Print: Print,
                Colour: Colour,
                Quality: Quality,
                totalReq: Number($('#modalCurrentQty').val()),
                currentQty: Number($('#modalCurrentQty').val()),
                deliveryDate: $("#deliveryDate").val() || "",
                rate: Number($("#modalRateInput").val()) || 0,
                extraPct: 5.00,
                extraQty: 120,
                remark: "Confirm shade before dispatch",
                Style: styleText,
                Buyer: buyerText,
                Item_Supplier: vendorText,
                Req_No: reqNoText

            };

            row.extraQty = Math.round(row.totalReq * row.extraPct / 100); 
            const nextIndex = $tableBody.find("tr").length + 1; 
            const $newRow = $(buildRow(row, nextIndex));
            $tableBody.append($newRow); 
            initDatePicker($newRow.find(".datePicker")); 
            renumberRows(); 
            $("#addItemModal").modal("hide");
            showToast("Fabric added");
        }); 
    }


    function resetAddModal() {
        if (!isGeneral) return; 
        $("#modalAccessorySelect, #modalTypeSelect, #modalSizeSelect, #modalColourSelect, #modalConcernPersonSelect").val("").trigger("change"); 
        $("#modalRateInput").val("0");
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
        showToast(`${poType} Purchase Order saved successfully`);
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

    $("#btnImportDetails").on("click", function () {
        $("#importModal").modal("show");
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

    $("#btnSummaryChecker").on("click", function () {
        $('#SummaryCheckerModal').modal("show");
    });


    /* -----------------------------
       Helpers
    ----------------------------- */
    function escapeHtml(value) {
        return String(value) .replace(/&/g, "&amp;") .replace(/</g, "&lt;") .replace(/>/g, "&gt;") .replace(/"/g, "&quot;") .replace(/'/g, "&#039;");
    }

    function escapeAttribute(value) {
        return escapeHtml(value);
    }


});