
const CountryStateCityData = [
    {
        Country_name: "India",
        State_name: "Uttar Pradesh",
        City_name: "Noida"
    },
    {
        Country_name: "India",
        State_name: "Uttar Pradesh",
        City_name: "Ghaziabad"
    },
    {
        Country_name: "India",
        State_name: "Uttar Pradesh",
        City_name: "Lucknow"
    },
    {
        Country_name: "India",
        State_name: "Uttar Pradesh",
        City_name: "Agra"
    },
    {
        Country_name: "India",
        State_name: "Uttar Pradesh",
        City_name: "Kanpur"
    },
    {
        Country_name: "India",
        State_name: "Maharashtra",
        City_name: "Mumbai"
    },
    {
        Country_name: "India",
        State_name: "Maharashtra",
        City_name: "Pune"
    },
    {
        Country_name: "India",
        State_name: "Karnataka",
        City_name: "Bengaluru"
    },
    {
        Country_name: "India",
        State_name: "Karnataka",
        City_name: "Mysuru"
    },
    {
        Country_name: "India",
        State_name: "Delhi",
        City_name: "New Delhi"
    },

    {
        Country_name: "United States",
        State_name: "California",
        City_name: "Los Angeles"
    },
    {
        Country_name: "United States",
        State_name: "California",
        City_name: "San Francisco"
    },
    {
        Country_name: "United States",
        State_name: "New York",
        City_name: "New York City"
    },
    {
        Country_name: "United States",
        State_name: "Texas",
        City_name: "Houston"
    },
    {
        Country_name: "United States",
        State_name: "Texas",
        City_name: "Dallas"
    },

    {
        Country_name: "United Kingdom",
        State_name: "England",
        City_name: "London"
    },
    {
        Country_name: "United Kingdom",
        State_name: "England",
        City_name: "Manchester"
    },
    {
        Country_name: "United Kingdom",
        State_name: "Scotland",
        City_name: "Edinburgh"
    },

    {
        Country_name: "Canada",
        State_name: "Ontario",
        City_name: "Toronto"
    },
    {
        Country_name: "Canada",
        State_name: "Ontario",
        City_name: "Ottawa"
    },
    {
        Country_name: "Canada",
        State_name: "British Columbia",
        City_name: "Vancouver"
    },

    {
        Country_name: "Australia",
        State_name: "New South Wales",
        City_name: "Sydney"
    },
    {
        Country_name: "Australia",
        State_name: "Victoria",
        City_name: "Melbourne"
    },
    {
        Country_name: "Australia",
        State_name: "Queensland",
        City_name: "Brisbane"
    }
];
 
$(document).ready(function () {

    bindMEISMasterData(CountryStateCityData);

});

function bindMEISMasterData(data) {

    var $tbody = $("#tBodyCityMaster");
 
    $tbody.empty();
     

    $.each(data, function (i, row) {

        var tr = `
            <tr data-code="${row.City_name}">
                <td class="text-center">
                    <button
                        type="button"
                        class="row-btn edit-btn"
                        title="Edit"
                        onclick="EditMatser('${row.City_name}')"
                        data-code="${row.City_name}">
                         <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>${row.Country_name}</td>
                <td>${row.State_name}</td>
                <td>${row.City_name}</td>
                 
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