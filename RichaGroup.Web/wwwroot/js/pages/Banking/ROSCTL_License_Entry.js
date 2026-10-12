$(document).ready(function () {

    initROSCTLLicenseEntry();

});
// PAGE INITIALIZATION

function initROSCTLLicenseEntry() {

    // Flatpickr

    if ($("#txtDate_ROSCTLLicenseEntry").length) {

        flatpickr("#txtDate_ROSCTLLicenseEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }
    // Select2 - Modal Search On

    if ($("#ddlSearchOn_ROSCTLLicenseEntry").length) {

        $("#ddlSearchOn_ROSCTLLicenseEntry").select2({
            width: "100%",
            dropdownParent: $("#modalROSCTLLicenseUpdate"),
            placeholder: "Select Search On",
            allowClear: true
        });

    }
    //click of add button 
    $("#btn-entryHelp").on("click", function () {
        $('#addMenuModalEntryHelp').modal('show')
     })
    //help table bind 
    bindROSCTLEntryHelpTable();
    // Refresh

    $("#btnRefresh_ROSCTLLicenseEntry").on("click", function () {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to refresh the ROSCTL License Entry?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Refresh",
            cancelButtonText: "Cancel"
        }).then(function (result) {

            if (result.isConfirmed) {

                refreshROSCTLLicenseEntry();

            }

        });

    });
    //add btn
    $("#btnAdd").on("click", function () {

          $('#addMenuModal').modal('show')   
    })
    // Filter

    $("#btnAdd_ROSCTLLicenceEntry").on("click", function () {

        filterROSCTLLicenseEntry();

    });
    // Browse XLS

    $("#btnBrowseXls_ROSCTLLicenseEntry").on("click", function () {

        $("#fileXls_ROSCTLLicenseEntry").trigger("click");

    });
    // File Selected

    $("#fileXls_ROSCTLLicenseEntry").on("change", function () {

        const file = this.files && this.files.length
            ? this.files[0]
            : null;

        if (!file) {

            $("#txtSelectedXls_ROSCTLLicenseEntry").val("");

            return;
        }


        const extension =
            file.name.split(".").pop().toLowerCase();


        if (extension !== "xls" && extension !== "xlsx") {

            Swal.fire({
                icon: "warning",
                title: "Invalid File",
                text: "Please select only .xls or .xlsx file."
            });

            $(this).val("");

            $("#txtSelectedXls_ROSCTLLicenseEntry").val("");

            return;
        }


        $("#txtSelectedXls_ROSCTLLicenseEntry")
            .val(file.name);

    });
    // Modal OK

    $("#btnOkROSCTLLicenseUpdate").on("click", function () {

        updateROSCTLLicense();

    });
    // DataTable

    initROSCTLLicenseDataTable();

}
// STATIC DATA

var rosctlLicenseData = [

    {
        id: 1,
        licNo: "2404008022",
        licAmount: 2091459.00,
        licDate: "10-04-2024",
        validity: "10-04-2026",
        port1: "INDEL4",
        port2: "DELHI AIR",
        vryDate: "10-04-2024",
        vryLicAmount: 2091459.00,
        soldOn: "--",
        rate: 0.0000,
        soldTo: "",
        checkAmount: 1500000.00,
     
        chaAgent: "ABC CHA",
        bankName: "HDFC BANK"
    },

    {
        id: 2,
        licNo: "2404008023",
        licAmount: 1850000.00,
        licDate: "12-04-2024",
        validity: "12-04-2026",
        port1: "INDEL4",
        port2: "DELHI AIR",
        vryDate: "12-04-2024",
        vryLicAmount: 1850000.00,
        soldOn: "--",
        rate: 0.0000,
        soldTo: "",
        checkAmount: 1250000.00,
        chaAgent: "XYZ CHA",
        bankName: "ICICI BANK",
    
    },

    {
        id: 3,
        licNo: "2404008024",
        licAmount: 3250000.00,
        licDate: "15-04-2024",
        validity: "15-04-2026",
        port1: "INNSA1",
        port2: "NHAVA SHEVA",
        vryDate: "15-04-2024",
        vryLicAmount: 3250000.00,
        soldOn: "--",
        rate: 0.0000,
        soldTo: "",
        checkAmount: 2750000.00,
        chaAgent: "GLOBAL CHA",
        bankName: "AXIS BANK",
        
    }

];

let rosctlLicenseTable = null;

let selectedROSCTLLicense = null;

// NUMBER FORMAt

function formatROSCTLLicenseNumber(value, decimals) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "";
    }

    const number = parseFloat(value);

    if (isNaN(number)) {
        return value;
    }

    return number.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });

}
// DATE PARSER

function parseROSCTLLicenseDate(value) {

    if (!value) {
        return null;
    }

    const parts = value.split("-");

    if (parts.length !== 3) {
        return null;
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);

    if (isNaN(date.getTime())) {
        return null;
    }

    return date;

}
// BIND TABLE DATA

function bindROSCTLLicenseData(data) {

    const $tbody =
        $("#tblbodyROSCTLLicenseEntry");

    if (!$tbody.length) {

        console.error(
            "[ROSCTLLicenseEntry] Table body not found."
        );

        return;
    }


    $tbody.empty();


    $.each(data, function (index, item) {

        const row = `
            <tr>

                 <td class="text-center">

                    <!-- Edit -->
                    <button type="button"
                            class="row-btn edit-btn"
                            data-id="${item.id}"
                            title="Update License"
                            onclick="EditMaster(${item.id})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                
                    <!-- Delete -->
                    <button type="button"
                            class="row-btn bg-danger text-white delete-btn "
                            data-id="${item.id}"
                            title="Delete"
                            onclick="DeleteMaster(${item.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                
                    <!-- Copy -->
                    <button type="button"
                            class="row-btn copy-btn"
                            data-id="${item.id}"
                            title="Copy"
                            onclick="CopyMaster(${item.id})">
                        <i class="fa-solid fa-copy"></i>
                    </button>
                
                </td>

                <td>
                    ${item.licNo || ""}
                </td>

                <td class="text-end">
                    ${formatROSCTLLicenseNumber(
            item.licAmount,
            2
        )}
                </td>

                <td>
                    ${item.licDate || ""}
                </td>

                <td>
                    ${item.validity || ""}
                </td>
                <td>
                    ${item.port1 || ""}
                </td>
                <td>
                    ${item.port2 || ""}
                </td>
                <td>
                    ${item.vryDate || ""}
                </td>
                <td>
                    ${item.vryLicAmount || ""}
                </td>
                <td>
                    ${item.soldOn || ""}
                </td>
                <td>
                    ${item.rate || ""}
                </td>
                <td>
                    ${item.soldTo || ""}
                </td>
                <td>
                    ${item.checkAmount || ""}
                </td>
                <td>
                    ${item.bankName || ""}
                </td>


             

            </tr>
        `;

        $tbody.append(row);

    });

}
// DATATABLE

function initROSCTLLicenseDataTable() {

    showLoader("Loading ROSCTL License Entry...");

    try {

        if (rosctlLicenseTable) {

            rosctlLicenseTable.destroy();

            rosctlLicenseTable = null;

        }


        bindROSCTLLicenseData(
            rosctlLicenseData
        );


        rosctlLicenseTable = new DataTable(
            "#tblROSCTLicenseLEntry",
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
                        "No ROSCTL License records found",

                    zeroRecords:
                        "No matching ROSCTL License records found",

                    search:
                        "Search:"

                }

            }
        );


        hideLoader();

    }
    catch (error) {

        console.error(
            "[ROSCTLLicenseEntry] DataTable initialization failed:",
            error
        );

        hideLoader();

    }

}

//modal open here on edit button
function EditMaster(id) {

    const item = rosctlLicenseData.find(x =>
        Number(x.id) === Number(id)
    );

    if (!item) {
        showWarning(
            "Record Not Found",
            "License record not found."
        );
        return;
    }

    // Fill modal fields
    $("#txtLicNo_ROSCTLLicenseEntry")
        .val(item.licNo ?? "");

    $("#txtLicAmount_ROSCTLLicenseEntry")
        .val(item.licAmount ?? "");

    $("#txtLicDate_ROSCTLLicenseEntry")
        .val(item.licDate ?? "");

    $("#txtCheckAmount_ROSCTLLicenseEntry")
        .val(item.checkAmount ?? "");

    $("#txtBank_ROSCTLLicenseEntry")
        .val(item.bankName ?? "");

    $("#txtValidity_ROSCTLLicenseEntry")
        .val(item.validity ?? "");

    $("#txtPort1_ROSCTLLicenseEntry")
        .val(item.port1 ?? "");

    $("#txtPort2_ROSCTLLicenseEntry")
        .val(item.port2 ?? "");

    $("#txtVryDate_ROSCTLLicenseEntry")
        .val(item.vryDate ?? "");

    $("#txtVryLicAmount_ROSCTLLicenseEntry")
        .val(item.vryLicAmount ?? "");

    $("#txtSoldOn_ROSCTLLicenseEntry")
        .val(item.soldOn ?? "");

    $("#txtRate_ROSCTLLicenseEntry")
        .val(item.rate ?? "");

    $("#txtSoldTo_ROSCTLLicenseEntry")
        .val(item.soldTo ?? "");


    // Store selected id for Save
   $("#bbtnSave").data("id", item.id);


    // Modal title
    $("#addMenuModalLabel").text("Update ROSCTL License");


    // Open same modal
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

//now save 
$(document).on("click", "#bbtnSave", function () {

    const id = $(this).data("id");

    console.log("Save ID:", id);

    const item = rosctlLicenseData.find(x =>
        Number(x.id) === Number(id)
    );

    if (!item) {
        showError("Error", "License record not found.");
        return;
    }

    item.licNo =
        $("#txtLicNo_ROSCTLLicenseEntry").val().trim();

    item.licAmount =
        $("#txtLicAmount_ROSCTLLicenseEntry").val().trim();

    item.licDate =
        $("#txtLicDate_ROSCTLLicenseEntry").val().trim();

    item.checkAmount =
        $("#txtCheckAmount_ROSCTLLicenseEntry").val().trim();

    item.bankName =
        $("#txtBank_ROSCTLLicenseEntry").val().trim();

    item.validity =
        $("#txtValidity_ROSCTLLicenseEntry").val().trim();

    item.port1 =
        $("#txtPort1_ROSCTLLicenseEntry").val().trim();

    item.port2 =
        $("#txtPort2_ROSCTLLicenseEntry").val().trim();

    item.vryDate =
        $("#txtVryDate_ROSCTLLicenseEntry").val().trim();

    item.vryLicAmount =
        $("#txtVryLicAmount_ROSCTLLicenseEntry").val().trim();

    item.soldOn =
        $("#txtSoldOn_ROSCTLLicenseEntry").val().trim();

    item.rate =
        $("#txtRate_ROSCTLLicenseEntry").val().trim();

    item.soldTo =
        $("#txtSoldTo_ROSCTLLicenseEntry").val().trim();


    // Rebind table
    bindROSCTLLicenseData();


    // Close modal
    bootstrap.Modal
        .getInstance(
            document.getElementById("addMenuModal")
        )
        ?.hide();


    showSuccess(
        "Updated",
        "ROSCTL License updated successfully."
    );

});

// FILTER

function filterROSCTLLicenseEntry() {

    const entryNo =
        ($("#txtEntryNo_ROSCTLLicenseEntry").val() || "")
            .trim();

    const dateValue =
        ($("#txtDate_ROSCTLLicenseEntry").val() || "")
            .trim();

    const fileNo =
        ($("#txtFileNo_ROSCTLLicenseEntry").val() || "")
            .trim();


    showLoader("Filtering ROSCTL License Entry...");


    setTimeout(function () {

        try {

            let filteredData =
                rosctlLicenseData;


            // Entry / License / File search

            if (entryNo) {

                filteredData =
                    filteredData.filter(function (item) {

                        return String(item.id)
                            .includes(entryNo)

                            ||

                            String(item.licNo)
                                .toLowerCase()
                                .includes(
                                    entryNo.toLowerCase()
                                );

                    });

            }


            // Date search

            if (dateValue) {

                filteredData =
                    filteredData.filter(function (item) {

                        return item.licDate === dateValue;

                    });

            }

            if (fileNo) {

                filteredData =
                    filteredData.filter(function (item) {

                        return String(item.licNo)
                            .toLowerCase()
                            .includes(
                                fileNo.toLowerCase()
                            );

                    });

            }


            if (rosctlLicenseTable) {

                rosctlLicenseTable.destroy();

                rosctlLicenseTable = null;

            }


            bindROSCTLLicenseData(
                filteredData
            );


            rosctlLicenseTable =
                new DataTable(
                    "#tblROSCTLicenseLEntry",
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
                                "No ROSCTL License records found",

                            zeroRecords:
                                "No matching records found",

                            search:
                                "Search:"

                        }

                    }
                );


            hideLoader();


            if (!filteredData.length) {

                Swal.fire({
                    icon: "info",
                    title: "No Records",
                    text: "No ROSCTL License records found."
                });

            }

        }
        catch (error) {

            console.error(
                "[ROSCTLLicenseEntry] Filter failed:",
                error
            );

            hideLoader();

            Swal.fire({
                icon: "error",
                title: "Filter Failed",
                text: "Unable to filter ROSCTL License records."
            });

        }

    }, 300);

}

//help bind here 
//static datav
// Static data
const ROSCTLEntryHelpData = [
    {
        id: 1,
        entryNo: "ENT-1001",
        fileNo: "FILE-001",
        licenceNo: "2404008022"
    },
    {
        id: 2,
        entryNo: "ENT-1002",
        fileNo: "FILE-002",
        licenceNo: "2404008023"
    },
    {
        id: 3,
        entryNo: "ENT-1003",
        fileNo: "FILE-003",
        licenceNo: "2404008024"
    },
    {
        id: 4,
        entryNo: "ENT-1004",
        fileNo: "FILE-004",
        licenceNo: "2404008025"
    },
    {
        id: 5,
        entryNo: "ENT-1005",
        fileNo: "FILE-005",
        licenceNo: "2404008026"
    }
];


// Bind table
function bindROSCTLEntryHelpTable() {

    const $tbody = $("#tblbodyROSCTLEntryHelp");

    if (!$tbody.length) {
        console.error("tblbodyROSCTLEntryHelp not found.");
        return;
    }

    $tbody.empty();

    $.each(ROSCTLEntryHelpData, function (index, item) {

        const row = `
            <tr>
                <td class="text-center">
                    <input type="checkbox"
                           class="form-check-input chkROSCTLEntryHelp"
                           data-index="${index}">
                </td>

                <td>${item.entryNo || "—"}</td>

                <td>${item.fileNo || "—"}</td>

                <td>${item.licenceNo || "—"}</td>
            </tr>
        `;

        $tbody.append(row);
    });
}


// Select only one row
$(document).on("change", ".chkROSCTLEntryHelp", function () {

    $(".chkROSCTLEntryHelp")
        .not(this)
        .prop("checked", false);

});

