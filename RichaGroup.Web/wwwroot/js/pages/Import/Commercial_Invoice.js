
 
import { seedRowsCommerical, seedRowsQtyAllocation } from "./PeroformaData.js";

let isFabric = false;

$(document).ready(function () {

    const type = $(".page-view.active").attr("id") || "";
    isFabric = type.toLowerCase() === "fabric";
     
    BindTable()
    manageShipViaFields();
});
  
function BindTable() {
    let html = "";

    $.each(seedRowsCommerical, function (i, v) {

        html += `
            <tr>
                <!-- 1. Checkbox -->
                <td class="td-check">
                    <input type="checkbox" class="chRowcheck">
                </td>

                <!-- 2. PI No -->
                <td>${v.PINo ?? ""}</td>

                <!-- 3. PO No -->
                <td>${v.PO_No ?? ""}</td>

                <!-- 4. Item -->
                <td>${v.Item ?? ""}</td>

                <!-- 5. ItemDesc -->
                <td>${v.ItemDesc ?? ""}</td>
        `;

        // 6. Quality / Size
        if (isFabric) {
            html += `
                <td>${v.Quality ?? ""}</td>
            `;
        } else {
            html += `
                <td>${v.Size ?? ""}</td>
            `;
        }

        html += `
                <!-- 7. Colour -->
                <td>${v.Colour ?? ""}</td>

                <!-- 8. Qty -->
                <td class="td-number">
                    ${Number(v.Qty || 0).toFixed(3)}
                </td>

                <!-- 9. Rate -->
                <td class="td-number">
                    ${Number(v.Rate || 0).toFixed(5)}
                </td>

                <!-- 10. PI/UOM -->
                <td>${v.UOM ?? ""}</td>

                <!-- 11. CI/UOM -->
                <td>${v.CIUOM ?? ""}</td>

                <!-- 12. Amount -->
                <td class="td-number">
                    ${Number(v.Amount || 0).toFixed(2)}
                </td>

                <!-- 13. Curr -->
                <td>${v.Curr ?? ""}</td>

                <!-- 14. RtType -->
                <td class="td-number">
                    ${Number(v.RtType || 0).toFixed(2)}
                </td>

                <!-- 15. Req No -->
                <td>${v.ReqNo ?? ""}</td>

                <!-- 16. Buyer -->
                <td>${v.Buyer ?? ""}</td>

                <!-- 17. Style -->
                <td>${v.Style ?? ""}</td>

                <!-- 18. ItSuplr -->
                <td>${v.ItSuplr ?? ""}</td>

                <!-- 19. Curr -->
                <td>${v.Curr2 ?? ""}</td>

                <!-- 20. Amount -->
                <td class="td-number">
                    ${Number(v.TotAmount || 0).toFixed(2)}
                </td>

                <!-- 21. Others -->
                <td>${v.Others ?? ""}</td>

                <!-- 22. CIUOM -->
                <td>${v.CIUOM ?? ""}</td>

                <!-- 23. CONV -->
                <td>${v.CONV ?? ""}</td>

                <!-- 24. ACQTY -->
                <td>${v.ACQTY ?? ""}</td>

                <!-- 25. S_ITEMCODE -->
                <td>${v.S_ITEMCODE ?? ""}</td>

                <!-- 26. Process -->
                <td>${v.Process ?? ""}</td>

                <!-- 27. Width -->
                <td>${v.Width ?? ""}</td>

                <!-- 28. Fin Width -->
                <td>${v.FinWidth ?? ""}</td>

                <!-- 29. GSM From -->
                <td>${v.GSMFrom ?? ""}</td>

                <!-- 30. GSM To -->
                <td>${v.GSMTo ?? ""}</td>
            </tr>
        `;
    });

    $('#tblBody').html(html);
}

function emptyRow(index) {

    let row = `
        <tr data-row-index="${index}">
         
            <td class="td-check">
                <input type="checkbox" class="chRowcheck" id="chkRow_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Style" id="txtStyle_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Buyer" id="txtBuyer_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="ItSuplr" id="txtItSuplr_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Item" id="txtItem_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Item Description" id="txtItemDesc_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="0.000" step="0.001" id="txtQty_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="UOM" id="txtUOM_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="0.00000" step="0.00001" id="txtRate_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="1.00" step="0.01" id="txtRtType_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Currency" id="txtCurr_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="0.00" step="0.01" id="txtAmount_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="0.00" step="0.01" id="txtOthers_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Currency" id="txtCurr2_${index}">
            </td>
             
            <td class="td-number">
                <input type="number" class="table-input table-input-number" placeholder="0.00" step="0.01" id="txtTotAmount_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="PO No" id="txtPONo_${index}">
            </td>
    `;

    // Fabric / Non Fabric
    if (isFabric) {

        row += `
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Quality" id="txtQuality_${index}">
            </td>
        `;

    } else {

        row += `
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Size" id="txtSize_${index}">
            </td>
        `;
    }

    row += ` 
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Colour" id="txtColour_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="PI No" id="txtPINo_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="CI UOM" id="txtCIUOM_${index}">
            </td>
             
            <td>
                <input type="number" class="table-input table-input-number" placeholder="0" step="0.001" id="txtCONV_${index}">
            </td>
             
            <td>
                <input type="number" class="table-input table-input-number" placeholder="0.000" step="0.001" id="txtACQTY_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Req No" id="txtReqNo_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="S_ITEMCODE" id="txtS_ITEMCODE_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Process" id="txtProcess_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Width" id="txtWidth_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="Fin Width" id="txtFinWidth_${index}">
            </td>
            
            <td>
                <input type="text" class="table-input table-input-text" placeholder="GSM From" id="txtGSMFrom_${index}">
            </td>
             
            <td>
                <input type="text" class="table-input table-input-text" placeholder="GSM To" id="txtGSMTo_${index}">
            </td>
        </tr>
    `;

    return row;
}

$("#btnAddRow").on("click", function () {
    const rowCount = $("#tblBody tr").length;
    $("#tblBody").append(emptyRow(rowCount + 1));

    alert("New row added");
});

$("#btnDeleteRow").on("click", function () {

    const selectedRows = $("#tblBody .chRowcheck:checked");

    if (selectedRows.length === 0) {
        alert("Please select a row");
        return;
    }

    selectedRows.closest("tr").remove();

    alert(`${selectedRows.length} row(s) removed`);
});

$('#bthOtherCharges').on('click', function () {
    $('#otherChargesModal').modal('show');
})

$('#btnQtyAllocate').on('click', function () {
    allocateFabricQty()
    $('#QtyAllocationModal').modal('show');
})


$('#btnOpenUploadDoc').on('click', function () {
    $('#UploadModal').modal('show');
})

function allocateFabricQty() {
    let html = ''
    $.each(seedRowsQtyAllocation, function (i, v) {
        html += ` 
        <tr>
            <td>${v.itemDesc ?? ""}</td>
            <td>${v.process ?? ""}</td>
            <td class="td-number">${v.rate ?? ""}</td>
            <td class="td-number">${v.piQty ?? ""}</td>
             <td>${v.uom ?? ""}</td>
            <td class="td-number">
                <input type="number" style="max-width:120px !important"
                    class="table-input table-input-number" 
                    placeholder="0.000"
                    value="${v.allocateQty}" 
                    id="txtAllocatQty_${i}"/>
            </td>
        </tr> `;
    })
    $('#tBodyAllocation').append(html)
}



window.ManageShipmentReference = ManageShipmentReference;
function ManageShipmentReference() {
    var Types = $('#ddlBond_Duty').val();

    if (Types == "DUTY") {
       
        $('.manageShipment').prop("disabled", true).addClass('disabled').css('pointer-events', 'none');
    } else {
        
        $('.manageShipment').prop("disabled", false).removeClass('disabled').css('pointer-events', 'auto');
    }
}



var selectedFiles = [];


    // ==========================================
    // BROWSE BUTTON
    // ==========================================

    $("#btnUploadBrowse").on("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        $("#fileUploadInput").trigger("click");

    });


    // ==========================================
    // FILE SELECT
    // ==========================================

    $("#fileUploadInput").on("change", function () {

        if (this.files && this.files.length > 0) {

            addFiles(this.files);

        }

        // Same file dobara select kar sake
        $(this).val("");

    });


    // ==========================================
    // ADD FILES
    // ==========================================

    function addFiles(fileList) {

        $.each(fileList, function (index, file) {

            selectedFiles.push(file);

        });

        renderFilePreviews();

    }


    // ==========================================
    // DRAG & DROP
    // ==========================================

    $("#dropZone").on("dragenter dragover", function (e) {

        e.preventDefault();
        e.stopPropagation();

        $(this).addClass("fu-dragover");

    });


    $("#dropZone").on("dragleave drop", function (e) {

        e.preventDefault();
        e.stopPropagation();

        $(this).removeClass("fu-dragover");

    });


    $("#dropZone").on("drop", function (e) {

        var files = e.originalEvent.dataTransfer.files;

        if (files && files.length > 0) {

            addFiles(files);

        }

    });


    // ==========================================
    // PASTE FILE
    // ==========================================

    $("#dropZone").on("paste", function (e) {

        var clipboardData =
            e.originalEvent.clipboardData ||
            window.clipboardData;

        if (!clipboardData || !clipboardData.items) {
            return;
        }

        var pastedFiles = [];

        $.each(clipboardData.items, function (index, item) {

            if (item.kind === "file") {

                var file = item.getAsFile();

                if (file) {

                    pastedFiles.push(file);

                }

            }

        });

        if (pastedFiles.length > 0) {

            e.preventDefault();

            addFiles(pastedFiles);

        }

    });


    // ==========================================
    // RENDER PREVIEW
    // ==========================================

    function renderFilePreviews() {

        var $previewList = $("#UploadfilePreviewList");

        var $previewContainer =
            $("#UploadfilePreviewContainer");

        var $uploadContent =
            $("#UploadZoneContent");


        $previewList.empty();


        // No files
        if (!selectedFiles || selectedFiles.length === 0) {

            $previewContainer.addClass("d-none");

            $uploadContent.removeClass("d-none");

            return;

        }


        // Hide upload message
        $uploadContent.addClass("d-none");

        // Show preview container
        $previewContainer.removeClass("d-none");


        $.each(selectedFiles, function (index, file) {

            var fileName = file.name || "Unknown File";

            var fileType = file.type || "";

            var extension =
                fileName
                    .split(".")
                    .pop()
                    .toLowerCase();


            // ======================================
            // PREVIEW BOX
            // ======================================

            var $box = $("<div>")
                .addClass("file-preview-box");


            // ======================================
            // REMOVE BUTTON
            // ======================================

            var $removeBtn = $("<button>")
                .attr("type", "button")
                .addClass("file-preview-remove")
                .attr("title", "Remove")
                .html("&times;");


            $removeBtn.on("click", function (e) {

                e.preventDefault();
                e.stopPropagation();

                selectedFiles.splice(index, 1);

                renderFilePreviews();

            });


            // ======================================
            // IMAGE PREVIEW
            // ======================================

            if (fileType.startsWith("image/")) {

                var $img = $("<img>")
                    .addClass("file-preview-image")
                    .attr("alt", fileName);


                var reader = new FileReader();


                reader.onload = function (e) {

                    $img.attr(
                        "src",
                        e.target.result
                    );

                };


                reader.readAsDataURL(file);


                $box.append($img);

            }


            // ======================================
            // OTHER FILE
            // ======================================

            else {

                var icon = "📄";


                if (extension === "pdf") {

                    icon = "📕";

                }
                else if (
                    extension === "doc" ||
                    extension === "docx"
                ) {

                    icon = "📝";

                }
                else if (
                    extension === "xls" ||
                    extension === "xlsx" ||
                    extension === "csv"
                ) {

                    icon = "📊";

                }
                else if (
                    extension === "zip" ||
                    extension === "rar" ||
                    extension === "7z"
                ) {

                    icon = "📦";

                }


                var $icon = $("<div>")
                    .addClass("file-preview-icon")
                    .text(icon);


                $box.append($icon);

            }


            // ======================================
            // FILE NAME
            // ======================================

            var $name = $("<div>")
                .addClass("file-preview-name")
                .text(fileName);


            $box.append($name);


            // ======================================
            // REMOVE
            // ======================================

            $box.append($removeBtn);


            // Add to list
            $previewList.append($box);

        });

}




const SHIP_VIA_CONFIG = {
    AIR: { house: "HAWB", master: "MAWB", showRef: true, showLR: false },
    SEA: { house: "HBL", master: "MBL", showRef: true, showLR: true },
    COURIER: { house: "AWB", master: "MAWB", showRef: true, showLR: false },
    BYROAD: { house: null, master: null, showRef: false, showLR: true }
};

function manageShipViaFields() {

    const cfg = SHIP_VIA_CONFIG[$("#ddlShipVia").val()];
    if (!cfg) return;

    
    $(".lrField").toggleClass("d-none", !cfg.showLR);
    if (!cfg.showLR) $("#txtLRNo, #txtLRDate").val("");

    
    $("#shipRefLeftCard").toggleClass("d-none", !cfg.showRef);

  
    $("#shipRefRightCard")
        .toggleClass("w-50", cfg.showRef)
        .toggleClass("w-100", !cfg.showRef);

    
    if (cfg.showRef) {
        $(".lblHouse").each(function () {
            $(this).text(cfg.house + "-" + $(this).data("index"));
        });
        $(".lblMaster").each(function () {
            $(this).text(cfg.master + "-" + $(this).data("index"));
        });
    }
}

$("#ddlShipVia").on("change", manageShipViaFields);
