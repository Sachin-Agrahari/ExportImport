
const dailyUpdateData = [
    {
        specificCompany: "01",
        fromDate: "2026-01-01",
        toDate: "2026-01-31"
    },
    {
        specificCompany: "21",
        fromDate: "2026-02-01",
        toDate: "2026-02-28"
    },
    {
        specificCompany: "NA",
        fromDate: "2026-03-01",
        toDate: "2026-03-31"
    },
    {
        specificCompany: "01",
        fromDate: "2026-04-01",
        toDate: "2026-04-30"
    },
    {
        specificCompany: "21",
        fromDate: "2026-05-01",
        toDate: "2026-05-31"
    },
    {
        specificCompany: "NA",
        fromDate: "2026-06-01",
        toDate: "2026-06-30"
    },
    {
        specificCompany: "01",
        fromDate: "2026-07-01",
        toDate: "2026-07-31"
    },
    {
        specificCompany: "21",
        fromDate: "2026-08-01",
        toDate: "2026-08-31"
    },
    {
        specificCompany: "NA",
        fromDate: "2026-09-01",
        toDate: "2026-09-30"
    },
    {
        specificCompany: "01",
        fromDate: "2026-10-01",
        toDate: "2026-10-31"
    }
];

$(document).ready(function () {

    initDailyUpdate(dailyUpdateData);

});

function initDailyUpdate(data) {

    const $tbody = $("#tblBody");

    $tbody.empty();

    if (!Array.isArray(data) || data.length === 0) {

        $tbody.append(`
            <tr>
                <td colspan="4" class="text-center text-muted">
                    No records found.
                </td>
            </tr>
        `);

        return;
    }

    $.each(data, function (index, row) {

        let companyName = row.specificCompany;

        if (row.specificCompany === "01") {
            companyName = "01  RICHACO EXPORTS PRIVATE LIMITED";
        }
        else if (row.specificCompany === "21") {
            companyName = "21  GAURAV INTERNATIONAL";
        }
        else if (row.specificCompany === "NA") {
            companyName = "NA  All Companies";
        }

        $tbody.append(` <tr>
            <td>
                <button
                    type="button"
                    class="row-btn edit-btn"
                    title="Edit"
                    onclick="EditMatser('${row.companyName}')"
                    data-code="${row.buyingHcompanyNameouseName}">
                      <i class="fa-solid fa-pen-to-square"></i>
                 </button>
            </td>

            <td> ${companyName} </td> 
            <td> ${row.fromDate || "&mdash;"} </td> 
            <td> ${row.toDate || "&mdash;"} </td> 
        </tr> `);
    });
}

function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});

