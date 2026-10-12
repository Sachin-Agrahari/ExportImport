
var countryData = [
    {
        code: "SVN",
        name: "SLOVENIA",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "SWA",
        name: "SWAZILAND",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "SWE",
        name: "SWEDEN",
        curr: "SEK",
        quotaCntry: "N",
        collection: "14",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "SWI",
        name: "SWINDEN",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "SWT",
        name: "SWITZERLAND",
        curr: "SFR",
        quotaCntry: "N",
        collection: "21",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "TAI",
        name: "TAIWAN",
        curr: "US$",
        grpId: "OBA",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "TAJ",
        name: "TAJIKISTAN",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "THA",
        name: "THAILAND",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "TOG",
        name: "TOGO",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "TON",
        name: "TONGA",
        curr: "US$",
        quotaCntry: "N",
        collection: "0",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    },
    {
        code: "USA",
        name: "USA",
        curr: "USD",
        quotaCntry: "Y",
        collection: "21",
        InvCountryCode: "ABC",
        InvCountryName: "ABCS"
    }
];


$(document).ready(function () {

    renderCountryTable(countryData);
});

function renderCountryTable(data) {

    var $tbody = $("#tblCountryMasterBody");

    if (!$tbody.length) {
        console.error("tblCountryMasterBody not found");
        return;
    }

    $tbody.empty();

    if (!data || data.length === 0) {

        $("#noRecordsFound_CountryMaster").removeClass("d-none");

        return;
    }

    $("#noRecordsFound_CountryMaster").addClass("d-none");

    $.each(data, function (i, row) {

        var tr = `
            <tr data-code="${row.code}">

                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditMatser('${row.code}')"
                        data-code="${row.code}">
                           <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>

                <td>${row.code}</td>
                <td>${row.name}</td>
                <td>${row.curr}</td>
                <td style="text-align:right !important;" >${row.collection}</td>
                <td>${row.InvCountryCode}</td>
                <td>${row.InvCountryName}</td>
            </tr>
        `;

        $tbody.append(tr);
    });
}

function EditMatser(ID) {
    $('#addMenuModal').modal('show')
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show')
});

function refreshCountryMaster() {

    showLoader("Refreshing...");

    try {

    
        $("#txtSearch_CountryMaster").val("");

   
        renderCountryTable(countryData);

        console.log("Country Master refreshed");

        setTimeout(function () {
            hideLoader();
        }, 500);

    }
    catch (err) {

        console.error(
            "[CountryMaster] Refresh failed:",
            err
        );

        hideLoader();
    }
}
 