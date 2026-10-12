//static data 
 
const PCL_Booked = [

    {
       EntryNumber: "4662",
        LoanNumber: "349856",
        EntryType:"",
        Type: "Export",
        openDate: "16-05-2024",
        Currency: "Dollar",
       
    },
    {
       EntryNumber: "4662",
        LoanNumber: "349856",
         EntryType:"",
        Type: "Export",
        openDate: "13-02-2024",
        Currency: "INR",
       
    },
    {
       EntryNumber: "4665",
        LoanNumber: "34965",
         EntryType:"",
        Type: "Export",
        openDate: "11-04-2024",
        Currency: "Euro",
       
    },
    {
       EntryNumber: "4652",
        LoanNumber: "34966",
         EntryType:"",
        Type: "Export",
        openDate: "06-04-2024",
        Currency: "Euro",
       
    },
]

$(document).ready(function () {

    initLoanEntry();
    //flatepicker
    flatpickr("#txtEntrydate_LoanEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

});
// Page Initialization

function initLoanEntry() {

    // Date Picker
    if ($("#txtdate_LoanEntry").length) {

        flatpickr("#txtdate_LoanEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }


    // Open Date Picker
    if ($("#txtOpendate_LoanEntry").length) {

        flatpickr("#txtOpendate_LoanEntry", {
            dateFormat: "d-m-Y",
            allowInput: true
        });

    }

    // Add Button
    $("#btnAdd").on("click", function () {
        $('#addMenuModal').modal('show')

    });
    bindtabledata();
    //debit details table 
    bindPCLTransactionTable();

}


//bind data in table 
function  bindtabledata() {
     const $tbody = $("#tblbodPCLTrans");

    if (!$tbody.length) { 
        console.error("[PCL_Booked] #tblCurrencyBookedBody not found."); 
        return;
    }
     
    $tbody.empty(); 

    if (!PCL_Booked.length) { 
        $("#noRecordsFound_PCLBooked").removeClass("d-none"); 
        return; 
    } 

    $("#noRecordsFound_PCLBooked").addClass("d-none"); 
     $.each(PCL_Booked, function (index, item) {
         const row = `<tr> 
                     <td>
                   <button
                      type="button"
                      class="row-btn edit-btn text-center"
                      title="Edit"
                      onclick="EditMatser('${item.EntryNumber}')"
                      data-code="${item.EntryNumber}">
                      <i class="fa-solid fa-pen-to-square"></i>
                  </button>
             </td>
             <td>${item.EntryNumber}</td> 
             <td>${item.LoanNumber}</td> 
             <td>${item.EntryType}</td> 
             <td>${item.Type}</td> 
             <td>${item.openDate}</td> 
             <td>${item.Currency}</td> 
                        </tr>`
                          $tbody.append(row);
       });

}
function EditMatser() {
    $('#addMenuModal').modal('show')
}

//debit details table binding here 

const pclTransactionData = [
    {
        date: "13-08-2020",
        amount: "180000.00",
        currency: "USD",
        interestPaid: "4500.00"
    },
    {
        date: "13-09-2020",
        amount: "125000.00",
        currency: "USD",
        interestPaid: "3125.00"
    },
    {
        date: "13-10-2020",
        amount: "95000.00",
        currency: "EUR",
        interestPaid: "2850.00"
    },
    {
        date: "13-11-2020",
        amount: "75000.00",
        currency: "USD",
        interestPaid: "1875.00"
    },
    {
        date: "13-12-2020",
        amount: "50000.00",
        currency: "GBP",
        interestPaid: "1500.00"
    }
];
//bind table 
let pclTransactionTable = null;

function bindPCLTransactionTable() {

    const $table = $("#tblPCLTranscation");
    const $tbody = $("#tblbodyPCLTranscation");

    if (!$table.length || !$tbody.length) {
        console.error("[PCL Transaction] Table not found.");
        return;
    }

    // Existing DataTable destroy
    if ($.fn.DataTable.isDataTable("#tblPCLTranscation")) {
        $table.DataTable().destroy();
    }

    $tbody.empty();

    if (!pclTransactionData.length) {
        $tbody.html(`
            <tr>
                <td colspan="4" class="text-center">
                    No Debit Details Found.
                </td>
            </tr>
        `);
        return;
    }

    $.each(pclTransactionData, function (index, item) {

        const row = `
            <tr>
                <td>${item.date || "—"}</td>

                <td class="text-end">
                    ${item.amount || "—"}
                </td>

                <td>${item.currency || "—"}</td>

                <td class="text-end">
                    ${item.interestPaid || "—"}
                </td>
            </tr>
        `;

        $tbody.append(row);
    });

    // DataTable
    pclTransactionTable = $table.DataTable({
        paging: true,
        pageLength: 5,
        lengthChange: false,
        searching: true,
        ordering: false,
        info: true,
        autoWidth: false,
        scrollX: true,

        language: {
            emptyTable: "No Debit Details Found.",
            search: "Search:"
        }
    });
}