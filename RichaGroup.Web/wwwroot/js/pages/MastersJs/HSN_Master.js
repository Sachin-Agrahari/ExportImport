
 

// Static Data
const MEISMasterData = [

    {
        Hs_code: "61011010",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61011020",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61011090",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61012000",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61013010",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61013020",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61019010",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61019090",
        Hs_desc: "MENS OR BOYS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61021000",
        Hs_desc: "WOMENS OR GIRLS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61022000",
        Hs_desc: "WOMENS OR GIRLS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61023010",
        Hs_desc: "WOMENS OR GIRLS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61023020",
        Hs_desc: "WOMENS OR GIRLS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    },

    {
        Hs_code: "61029010",
        Hs_desc: "WOMENS OR GIRLS OVERCOATS, CAR-COATS, CAPES, CLOAKS, ANORAKS (INCLUDING SKIJACKETS), WIND-CHEATERS, WINDJACKETS AND SIMILAR ARTICLES, KNITTED OR CROCHETED, OTHER THAN THOSE OF HEADING"
    }

];
// DataTable Variable

let MEISMasterTable = null;

$(document).ready(function () {

    bindMEISMasterData(MEISMasterData);

});

function bindMEISMasterData(data) {

    var $tbody = $("#tblbodyMEIS_Master");

    if (!$tbody.length) {
        console.error("tblbodyMEIS_Master not found");
        return;
    }

    $tbody.empty();
     

    $.each(data, function (i, row) {

        var tr = `
            <tr data-code="${row.Hs_code}">
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
                <td>${row.Hs_code}</td>
                <td>${row.Hs_desc}</td>
                 
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