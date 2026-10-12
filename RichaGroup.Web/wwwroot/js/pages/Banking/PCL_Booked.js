//static data 
 
const PCL_Booked = [

    {
       EntryNumber: "4662",
        LoanNumber: "349856",
        Type: "Export",
        openDate: "16-05-2024",
        LoanAmount: "20942500.00",
        bank: "BNK05",
       
    },
    {
       EntryNumber: "4662",
        LoanNumber: "349856",
        Type: "Export",
        openDate: "13-02-2024",
        LoanAmount: "20942500.00",
        bank: "BNK06",
       
    },
    {
       EntryNumber: "4665",
        LoanNumber: "34965",
        Type: "Export",
        openDate: "11-04-2024",
        LoanAmount: "209464600.00",
        bank: "BNK04",
       
    },
    {
       EntryNumber: "4652",
        LoanNumber: "34966",
        Type: "Export",
        openDate: "06-04-2024",
        LoanAmount: "209456500.00",
        bank: "BNK04",
       
    },
]


$(document).ready(function () {

    initPCLBooked();
    bindtabledata();

});
// Page Initialization

function initPCLBooked() {

    // Open Date
    if ($("#txtOpendate_PCLBooked").length) {

        flatpickr("#txtOpendate_PCLBooked", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    //on clikc of button show a field 
    $("#btnExtendDay_PCLBooked").on("click", function(){
       $("#extendFields_PCLBooked").toggleClass("d-none")
    })


    // Due Date
    if ($("#txtDuedate_PCLBooked").length) {

        flatpickr("#txtDuedate_PCLBooked", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    // Add Button
    $("#btnAdd").on("click", function () {

          $('#addMenuModal').modal('show');

    });

}

//bind data in table 
let pclBookedTable = null;

// function bindtabledata() {

//     const $table = $("#tblPCFCBooked");
//     const $tbody = $("#tblbodyPCLBooked");

//     if (!$table.length || !$tbody.length) {
//         console.error("[PCL_Booked] Table not found.");
//         return;
//     }

//     if ($.fn.DataTable.isDataTable("#tblPCFCBooked")) {
//         $table.DataTable().destroy();
//     }

//     $tbody.empty();

//     if (!PCL_Booked || !PCL_Booked.length) {

//         $("#noRecordsFound_PCLBooked").removeClass("d-none");

//         $tbody.html(`
//             <tr>
//                 <td colspan="9" class="text-center">
//                     No PCL Booked Data Found.
//                 </td>
//             </tr>
//         `);

//         return;
//     }

//     $("#noRecordsFound_PCLBooked").addClass("d-none");

//     $.each(PCL_Booked, function (index, item) {

//         const row = `
//             <tr>

//                 <td class="text-center">

//                     <button type="button"
//                             class="row-btn edit-btn"
//                             title="Edit"
//                             onclick="EditMatser('${item.EntryNumber}')"
//                             data-code="${item.EntryNumber}">
//                         <i class="fa-solid fa-pen-to-square"></i>
//                     </button>

                   
//                 </td>

//                 <td>${item.EntryNumber || "—"}</td>
//                 <td>${item.LoanNumber || "—"}</td>
//                 <td>${item.Type || "—"}</td>
//                 <td>${item.openDate || "—"}</td>

//                 <td class="text-end">
//                     ${item.LoanAmount ?? "—"}
//                 </td>

//                 <td>${item.bank || "—"}</td>

              

//             </tr>
//         `;

//         $tbody.append(row);
//     });

//     pclBookedTable = $table.DataTable({
//         paging: true,
//         pageLength: 5,
//         lengthChange: false,
//         searching: true,
//         ordering: false,
//         info: true,
//         autoWidth: false,
//         scrollX: true,

//         Last 2 columns initially hidden
//         columnDefs: [
//             {
//                 targets: [7, 8],
//                 visible: false
//             }
//         ],

//         language: {
//             emptyTable: "No PCL Booked Data Found.",
//             search: "Search:"
//         }
//     });
// }

//by click extend day button then 
// $(document).on("click", ".btnExtendDay", function () {

//     const code = $(this).data("code");

//     console.log("Extend Day clicked:", code);
//     pclBookedTable
//         .columns([7, 8])
//         .visible(true, false);

 
//     pclBookedTable
//         .columns.adjust()
//         .draw(false);

// });
function bindtabledata() {
    const $tbody = $("#tblbodyPCLBooked");

    if (!$tbody.length) {
        console.error("[PCL_Booked] #tblbodyPCLBooked not found.");
        return;
    }

    // Destroy existing DataTable before rebinding
    if ($.fn.DataTable.isDataTable("#tblPCFCBooked")) {
        $("#tblPCFCBooked").DataTable().destroy();
    }

    $tbody.empty();

    if (!PCL_Booked.length) {
        $("#noRecordsFound_PCLBooked").removeClass("d-none");
        return;
    }

    $("#noRecordsFound_PCLBooked").addClass("d-none");

    // Bind table rows
    $.each(PCL_Booked, function (index, item) {
        const row = `
            <tr>
                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditMatser('${item.EntryNumber}')"
                        data-code="${item.EntryNumber}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>${item.EntryNumber}</td>
                <td>${item.LoanNumber}</td>
                <td>${item.Type}</td>
                <td>${item.openDate}</td>
                <td>${item.LoanAmount}</td>
                <td>${item.bank}</td>
            </tr>`;

        $tbody.append(row);
    });

    // Initialize DataTable
    $("#tblPCFCBooked").DataTable({
        paging: true,
        searching: true,
        ordering: false,
        info: true,
        pageLength: 10,
        lengthChange: false,
        autoWidth: false,
        destroy: true,
        language: {
            emptyTable: "No records found"
        }
    });
}
function EditMatser() {
    $('#addMenuModal').modal('show')
}
  