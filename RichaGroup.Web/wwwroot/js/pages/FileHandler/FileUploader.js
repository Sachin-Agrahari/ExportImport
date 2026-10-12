var baseUrl = window.location.origin;
var $dropZone = $("#dropZone");
var $fileInput = $("#fileInput");
var $btnBrowse = $("#btnBrowse");
var $btnSave = $("#btnSave");
var $btnBack = $("#btnBack");
var $uploadedFileTableBody = $("#uploadedFileTableBody");
var $uploadedNoRecords = $("#uploadedNoRecords");
var selectedFiles = [];
var product = "DOCUMENTS";

$(document).ready(function () {

    $('#dvMenuName').hide()

    const queryString = window.location.search;
    // 2. Parse the query string
    const urlParams = new URLSearchParams(queryString);
    // 3. Get individual values
    product = urlParams.get('product');

    var modal = new bootstrap.Modal(
        document.getElementById('fileUploadModal')
    );



    if (product == "PADS") {
        modal.show();
        $('#btnExport').hide()
        $('#btnUpload').hide();
        $('#mainTitle').text(`(PADS)`)
        product = "PADS";


        $('#ddlDocType').append(`<option value="PadsForm">Pads Form</option>
                    <option value = "PadsPDF" > Pads PDF</option >
                    <option value="PadsExcel">Pads Excel</option>
                    <option value="PadsEmail">Pads Email</option>
                    <option value="HajiriForm">Hajiri Form</option>
                    <option value="HajiriPDF">Hajiri PDF</option>
                    <option value="HajiriExcel">Hajiri Excel</option>
                    <option value="HajiriEmail">Hajiri Email</option>`);
    }
    else {
        $('#mainTitle').text(`(${$("#txtHeaderMain").text().trim()})`)
        product = "DOCUMENTS";
        $('#ddlDocType').append('<option value="Entry Form">Entry Form</option>');
        $('#ddlDocType').append('<option value="PDF">PDF</option>');
        $('#ddlDocType').append('<option value="Excel">Excel</option>');
        $('#ddlDocType').append('<option value="Email">Email</option>');
        $('#ddlDocType').append('<option value="Feedback">Feedback</option>');
        $('#ddlDocType').append('<option value="PRG">PRG</option>');
        $('#ddlDocType').append('<option value="FRT">FRT</option>');
        $('#ddlDocType').append('<option value="DBK">DBK</option>');
    }

    BindMenu()
    function formatSize(bytes) {

        if (bytes < 1024) {
            return bytes + " B";
        }
        if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(1) + " KB";
        }
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";

    }

    $('#chkAll').on('change', function () {
        loadUploadedFiles();
    })

    $('#ddlMenuName').on('change', function () {
        loadUploadedFiles();
    })

    function addFiles(fileList) {

        $.each(fileList, function (index, file) {

            selectedFiles.push(file);

        });

        // Show all selected files
        renderFilePreviews();

        $btnSave.prop(
            "disabled",
            selectedFiles.length === 0
        );

    }

    $btnBrowse.on("click", function (e) {
        e.stopPropagation();
        $fileInput.trigger("click");
    });

    $fileInput.on("change", function () {
        if (this.files && this.files.length > 0) {
            addFiles(this.files);
        }
        $(this).val("");

    });

    $dropZone.on(
        "dragenter dragover",
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            $dropZone.addClass("fu-dragover");
        }
    );

    $dropZone.on(
        "dragleave drop",
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            $dropZone.removeClass("fu-dragover");
        }
    );

    $dropZone.on("drop", function (e) {
        var files = e.originalEvent.dataTransfer.files;
        if (files && files.length > 0) {
            addFiles(files);
        }
    });

    $dropZone.on("paste", function (e) {

        var clipboardData =
            e.originalEvent.clipboardData ||
            window.clipboardData;

        if (!clipboardData ||
            !clipboardData.items ||
            clipboardData.items.length === 0) {

            return;
        }

        var pastedFiles = [];

        $.each(clipboardData.items, function (i, item) {

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

            console.log("pastedFiles", pastedFiles);

            // Show all pasted files
            renderFilePreviews();

            $dropZone.addClass("fu-dragover");

            setTimeout(function () {
                $dropZone.removeClass("fu-dragover");
            }, 250);

        }

    });

});

$('#btnAddMenu').on('click', function () {

    $('#txtNewMenuName').val('');

    var modal = new bootstrap.Modal(
        document.getElementById('menuNameModal')
    );

    modal.show();

});

function renderFilePreviews() {

    var $previewList = $("#filePreviewList");

    var $previewContainer = $("#filePreviewContainer");

    var $dropZoneContent = $("#dropZoneContent");

    $previewList.empty();

    if (!selectedFiles || selectedFiles.length === 0) {

        $previewContainer.addClass("d-none");

        $dropZoneContent.removeClass("d-none");

        return;

    }

    $.each(selectedFiles, function (index, file) {

        var fileType = file.type || "";

        var fileName = file.name || "Unknown file";

        var fileExtension =
            fileName.split(".").pop().toLowerCase();

        var $box = $("<div>")
            .addClass("file-preview-box");

        // Remove button

        var $removeBtn = $("<button>")
            .attr("type", "button")
            .addClass("file-preview-remove")
            .attr("title", "Remove file")
            .attr("aria-label", "Remove file")
            .html("&times;");

        $removeBtn.on("click", function (e) {

            e.stopPropagation();

            // Remove only clicked file
            selectedFiles.splice(index, 1);

            renderFilePreviews();

            $btnSave.prop(
                "disabled",
                selectedFiles.length === 0
            );

        });

        // Image preview

        if (fileType.startsWith("image/")) {

            var $img = $("<img>")
                .addClass("file-preview-image")
                .attr("alt", fileName);

            var reader = new FileReader();

            reader.onload = function (e) {

                $img.attr("src", e.target.result);

            };

            reader.readAsDataURL(file);

            $box.append($img);

        } else {

            // File icon

            var icon = "📄";

            if (fileExtension === "pdf") {
                icon = "📕";
            }
            else if (
                fileExtension === "doc" ||
                fileExtension === "docx"
            ) {
                icon = "📝";
            }
            else if (
                fileExtension === "xls" ||
                fileExtension === "xlsx" ||
                fileExtension === "csv"
            ) {
                icon = "📊";
            }
            else if (
                fileExtension === "zip" ||
                fileExtension === "rar" ||
                fileExtension === "7z"
            ) {
                icon = "📦";
            }
            else if (
                fileExtension === "txt"
            ) {
                icon = "📃";
            }

            var $icon = $("<div>")
                .addClass("file-preview-icon")
                .text(icon);

            $box.append($icon);

        }

        // File name

        var $name = $("<div>")
            .addClass("file-preview-name")
            .text(fileName);

        $box.append($name);

        // Close button

        $box.append($removeBtn);

        $previewList.append($box);

    });

    // Hide upload message
    $dropZoneContent.addClass("d-none");

    // Show preview
    $previewContainer.removeClass("d-none");

}

$("#btnRemovePreview").on("click", function (e) {

    e.stopPropagation();

    // Remove all selected files
    selectedFiles = [];

    // Clear preview image
    $("#filePreviewImage").attr("src", "");

    // Hide preview
    $("#filePreviewContainer").addClass("d-none");

    // Show dropzone content
    $("#dropZoneContent").removeClass("d-none");

    // Disable Save button
    $btnSave.prop("disabled", true);

});

$btnSave.on("click", function () {

    if (selectedFiles.length === 0) {
        return;
    }

    var DocName = $("#txtHeaderMain").text().trim();
    var DocTitle = $("#txtReportTitle").val().trim();
    var DocType = $("#ddlDocType").val();
    var DocCount = $("#txtDocCount").val();
    var MenuName = $('#ddlMenuName').find('option:selected').text().trim();

    if (!DocTitle) {
        alert("Please Enter Document Title");
        return;
    }
    if (!DocType) {
        alert("Please Select Document Type");
        return;
    }
    if (DocCount == 0 || !DocCount) {
        alert("Please Enter Document Count");
        return;
    }

    var formData = new FormData();

    formData.append("DocTitle", DocTitle);

    formData.append("DocName", DocName);
    formData.append("DocType", DocType);
    formData.append("DocCount", DocCount);
    formData.append("MenuName", MenuName || "");
    formData.append("productName", product || "");

    $.each(selectedFiles, function (index, file) {

        formData.append(
            "files",
            file,
            file.name
        );

    });

    $btnSave.prop("disabled", true);

    $.ajax({

        url: "/FileHandler/UploadFiles",

        type: "POST",

        data: formData,

        processData: false,

        contentType: false,

        success: function (result) {

            if (result.success) {

                alert("Files uploaded successfully.");

                selectedFiles = [];

                $fileInput.val("");
                $('#txtReportTitle').val("");
                $('#txtDocCount').val("1");
                $('.file-preview-remove').click()

                loadUploadedFiles();

            } else {

                alert(
                    result.message ||
                    "Upload failed."
                );

            }

        },

        error: function () {

            alert(
                "An error occurred while uploading files."
            );

        },

        complete: function () {

            $btnSave.prop("disabled", true);

        }

    });

});


function loadUploadedFiles() {

    var DocName = $("#txtHeaderMain").text().trim();
    var isAllFile = $('#chkAll').prop('checked');
    var MenuName = $('#ddlMenuName').find('option:selected').text().trim();

  

    if (!DocName) {
        return;
    }

    $.ajax({
        url: "/FileHandler/GetFiles",
        type: "GET",
        data: {
            DocName: DocName,
            isAllFile: isAllFile,
            productName: product,
            MenuName: MenuName
        },

        success: function (result) {
            console.log(result)
            if (result.success) {
                let data = JSON.parse(result.data)
                renderUploadedFiles(data);

            } else {
                alert(result.message || "Unable to fetch files.")
            }
        },

        error: function () {
            alert("Error while fetching uploaded files.");
        }
    });

}

function renderUploadedFiles(files) {

    $uploadedFileTableBody.empty();

    if (!files || files.length === 0) {
        $uploadedNoRecords.removeClass("d-none").text("No uploaded files found.");
        return;
    }

    $uploadedNoRecords.addClass("d-none");

    $.each(files, function (index, v) {
        url = `${baseUrl}/${v.DocURL}`;

        console.log("url", url)
        var deleteButtonHtml = "";

        var empCode = sessionStorage.getItem("empCode");

        if (!(v.DocType == "PRG" || v.DocType == "FRT") || empCode == "PT13367" || empCode == "AS0664" || empCode == "PT20391") {
            deleteButtonHtml = `  <!-- DELETE BUTTON -->
                    <button type="button" class="fu-view-btn btn btn-sm me-1"
                            style="border:1px solid #ea1a02; color: #ea1a02"
                            title="Delete file" aria-label="Delete file"
                            data-file-id="${v.DocID}" 
                            onclick="deleteDoc('${v.DocID}')">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"> 
                            <path d="M3 6h18"/> 
                            <path d="M8 6V4 a2 2 0 0 1 2-2h4 a2 2 0 0 1 2 2v2"/> 
                            <path d="M19 6v14 a2 2 0 0 1-2 2H7 a2 2 0 0 1-2-2V6"/> 
                            <line x1="10" y1="11" x2="10" y2="17"/> 
                            <line x1="14" y1="11" x2="14" y2="17"/> 
                         </svg>
                     </button>`
        }

        var rowHtml = `
            <tr>
                <td>
                    <input class="file-checkbox" type="checkbox" data-file-url = "${url}"/>
                </td>
                <td>${v.MenuName || ''}</td>
                 
                <td>${v.DocName || ''}</td>
                <td>${v.DocTitle || ''}</td>
                <td>${v.DocType || ''}</td>
                <td>${v.DocCount || ''}</td>
              
                <td style="text-align: center !important;">

                    <!-- VIEW BUTTON -->
                    <button
                        type="button"
                        class="fu-view-btn btn btn-sm btn-outline-primary me-1"
                        title="View file"
                        aria-label="View file"
                        data-file-url="${url}">

                        <!-- Eye Icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">

                            <path d="M2.062 12.348a1 1 0 0 1 0-.696
                                10.75 10.75 0 0 1 19.876 0
                                1 1 0 0 1 0 .696
                                10.75 10.75 0 0 1-19.876 0"/>

                            <circle cx="12" cy="12" r="3"/>

                        </svg>

                    </button>

                    ${deleteButtonHtml}
                  

                </td>
            </tr> `;

        $uploadedFileTableBody.append(rowHtml);
    });
}

$(document).on("click", ".fu-view-btn", function () {

    var fileUrl = $(this).attr("data-file-url");

    if (fileUrl) {
        window.open(fileUrl, "_blank");
    }

});

// Load files when modal opens
$("#fileUploadModal").on(
    "shown.bs.modal",
    function () {

        loadUploadedFiles();

    }
);

$btnBack.on("click", function () {

    window.history.back();

});

function escapeHtml(value) {

    return $("<div>")
        .text(value == null ? "" : String(value))
        .html();

}

function deleteDoc(ID) {

    if (!ID || ID <= 0) {
        alert("Invalid document ID.");
        return;
    }

    if (confirm("Are you sure you want to delete?")) {

        $.ajax({
            url: '/FileHandler/DeleteDoc',
            type: 'POST',
            data: {
                ID: ID
            },
            success: function (response) {
                alert(response.message);
                loadUploadedFiles();
            },
            error: function (xhr) {
                let message = "Something went wrong.";
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    message = xhr.responseJSON.message;
                }
                alert(message);
            }
        });
    } else {
        console.log('cancel delete');
    }
}

// =========================================================
// DOWNLOAD FILE
// =========================================================

$(document).on("click", ".fu-download-btn", function () {

    var fileUrl = $(this).attr("data-file-url");

    var fileName = $(this).attr("data-file-name");

    if (!fileUrl) {

        alert("File URL not found.");

        return;

    }

    // Create temporary download link

    var link = document.createElement("a");

    link.href = fileUrl;

    link.download = fileName || "";

    link.target = "_blank";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});

$('#btnSaveMenu').on('click', function () {

    var menuName = $('#txtNewMenuName').val().trim();

    // Validation
    if (!menuName) {
        alert('Please Enter Menu Name');
        $('#txtNewMenuName').focus();
        return;
    }

    var $btn = $(this);

    // Disable button while saving
    $btn.prop('disabled', true);

    $.ajax({
        url: '/FileHandler/SaveMenu',
        type: 'POST',
        data: {
            productName: product,
            menuName: menuName
        },

        success: function (result) {

            if (result.success) {

                alert(result.message || 'Menu saved successfully.');

                // Set menu name in main form
                $('#txtMenuName').val(menuName);

                // Close modal
                var modalElement = document.getElementById('menuNameModal');
                var modal = bootstrap.Modal.getInstance(modalElement);

                if (modal) {
                    modal.hide();
                }
                BindMenu();
                // Clear input
                $('#txtNewMenuName').val('');

            } else {

                alert(result.message || 'Unable to save menu.');

            }
        },

        error: function (xhr) {

            var message = 'Something went wrong while saving menu.';

            if (xhr.responseJSON && xhr.responseJSON.message) {
                message = xhr.responseJSON.message;
            }

            alert(message);
        },

        complete: function () {
            $btn.prop('disabled', false);
        }
    });

});

function BindMenu() {

    $.ajax({
        url: `/FileHandler/GetMenus?ProductName=${product}`,
        type: 'GET',

        success: function (result) {

            if (result.success) {

                let data = JSON.parse(result.data);

                console.log("Menu Data:", data);

                // Menu dropdown/list ko bind karo
                var $menu = $('#ddlMenuName');

                $menu.empty();

                $menu.append(
                    '<option value=""> </option>'
                );

                $.each(data, function (index, item) {

                    $menu.append(
                        $('<option>', {
                            value: item.MenuID,
                            text: item.MenuName
                        })
                    );

                });

            } else {

                alert(result.message || 'Unable to fetch menu.');

            }
        },

        error: function (xhr) {

            console.log(xhr);

            var message = 'Error while fetching menu.';

            if (xhr.responseJSON && xhr.responseJSON.message) {
                message = xhr.responseJSON.message;
            }

            alert(message);
        }
    });
}

$(document).on('change', '.chkAll', function () {

    $('.file-checkbox').prop('checked', $(this).prop('checked'));

});

$(document).on('change', '.file-checkbox', function () {


    $('.chkAll').prop(
        'checked',
        $('.file-checkbox').length === $('.file-checkbox:checked').length
    );

});


$('#btnView').on("click", function () {

    var files = [];

    $(".file-checkbox:checked").each(function () {

        var fileUrl = $(this).attr("data-file-url");

        if (fileUrl) {

            // ~/ ko browser-friendly / mein convert karo
            fileUrl = fileUrl.replace(/^~\//, "/");

            files.push(fileUrl);
        }

    });

    if (files.length === 0) {
        alert("Please select at least one file.");
        return;
    }

    var html = "";

    $.each(files, function (index, fileUrl) {

        var fileName = fileUrl.split("/").pop().split("?")[0];
        var extension = fileName.split(".").pop().toLowerCase();

        if (extension === "xls" || extension === "xlsx") {

            var downloadLink = document.createElement("a");
            downloadLink.href = fileUrl;
            downloadLink.download = fileName;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            return;
        }


        // ==========================================
        // IMAGE
        // ==========================================
        if (extension === "jpg" || extension === "jpeg" || extension === "png" || extension === "gif" || extension === "bmp" || extension === "webp") {

            html += `
            <div style="
                width:100%;
                margin-bottom:20px;
                background:#fff;
                border:1px solid #ddd;
            ">

                <div style="
                    padding:10px 15px;
                    background:#f5f5f5;
                    border-bottom:1px solid #ddd;
                    font-weight:600;
                ">
                    ${fileName}
                </div>

                <div style="
                    padding:20px;
                    text-align:center;
                    background:#eee;
                ">

                    <img
                        src="${fileUrl}"
                        alt="${fileName}"
                        style="
                            max-width:100%;
                            max-height:700px;
                            height:auto;
                            display:block;
                            margin:auto;
                            object-fit:contain;
                        "
                        onerror="
                            this.parentElement.innerHTML =
                            '<div style=&quot;padding:30px;color:red;&quot;>Unable to load image.</div>';
                        "
                    />

                </div>

            </div> `;
        }


        // ==========================================
        // PDF
        // ==========================================
        else if (extension === "pdf") {

            html += `
            <div style="
                width:100%;
                margin-bottom:20px;
                background:#fff;
               border:1px solid #ddd;
            ">

                <div style="
                    padding:10px 15px;
                    background:#f5f5f5;
                    border-bottom:1px solid #ddd;
                    font-weight:600;
                ">
                    ${fileName}
                </div>

                <iframe
                    src="${fileUrl}"
                    style="
                        width:100%;
                        height:700px;
                        border:none;
                        display:block;
                    ">
                </iframe>

            </div>
        `;
        }


        // ==========================================
        // WORD
        // ==========================================
        else if (extension === "docx") {

            html += `
            <div style="
                width:100%;
                margin-bottom:20px;
                background:#fff;
                border:1px solid #ddd;
            ">

                <div style="
                    padding:10px 15px;
                    background:#f5f5f5;
                    border-bottom:1px solid #ddd;
                    font-weight:600;
                ">
                    ${fileName}
                </div>

                <div
                    class="word-preview"
                    data-file-url="${fileUrl}"
                    style="
                        padding:20px;
                        overflow:auto;
                        max-height:700px;
                        background:#eee;
                    "
                >
                    Loading Word document...
                </div>

            </div>
        `;
        }


        // ==========================================
        // OTHER FILES
        // ==========================================
        else {

            html += `
            <div style="
                padding:30px;
                text-align:center;
            ">

                <h5>Preview not available</h5>

                <a
                    href="${fileUrl}"
                    target="_blank"
                    class="btn btn-primary">
                    Open File
                </a>

            </div>
        `;
        }

    });



    if (html.trim() !== "") {

        $("#fileViewerContainer").html(html);

        $("#universalFileModal").modal("show");
    }

});

$('#btnExport').on('click', () => {
    $('#btnExport').prop('disabled', true);
    $.ajax({
        url: '/FileHandler/DowenlodExcel',
        type: 'POST',
        contentType: 'application/json',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (blob) {
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `UploadedDocs.xlsx`;
            link.click();
        },
        error: function (xhr, status, error) {
            console.error("Download failed", error);
        },
        complete: function () {
            $('#btnExport').prop('disabled', false);
        }
    });
})