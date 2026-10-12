
const FactoryUnitMasterData = [
    {
        unit: "RC193",
        unitName: "RICHA & CO.",
        companyCode: "CC01",
        location: "Delhi",
        phone: "9876543210",
        email: "rc193@example.com",
        gstNumber: "07AAAAA0000A1Z5"
    },
    {
        unit: "RC193",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC01",
        location: "Noida",
        phone: "9876543211",
        email: "richaco193@example.com",
        gstNumber: "09BBBBB1111B1Z6"
    },
    {
        unit: "RC208",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC01",
        location: "Gurugram",
        phone: "9876543212",
        email: "rc208@example.com",
        gstNumber: "06CCCCC2222C1Z7"
    },
    {
        unit: "RC225",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC02",
        location: "Delhi",
        phone: "9876543213",
        email: "rc225@example.com",
        gstNumber: "07DDDDD3333D1Z8"
    },
    {
        unit: "RC236",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC02",
        location: "Noida",
        phone: "9876543214",
        email: "rc236@example.com",
        gstNumber: "09EEEEE4444E1Z9"
    },
    {
        unit: "RC239",
        unitName: "RICHA & CO.",
        companyCode: "CC02",
        location: "Gurugram",
        phone: "9876543215",
        email: "rc239_1@example.com",
        gstNumber: "06FFFFF5555F1ZO"
    },
    {
        unit: "RC239",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC02",
        location: "Gurugram",
        phone: "9876543216",
        email: "rc239_2@example.com",
        gstNumber: "06GGGGG6666G1Z1"
    },
    {
        unit: "RC291",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC03",
        location: "Delhi",
        phone: "9876543217",
        email: "rc291@example.com",
        gstNumber: "07HHHHH7777H1Z2"
    },
    {
        unit: "RC389",
        unitName: "RICHA & CO.",
        companyCode: "CC03",
        location: "Noida",
        phone: "9876543218",
        email: "rc389@example.com",
        gstNumber: "09IIIII8888I1Z3"
    },
    {
        unit: "RC403",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC03",
        location: "Gurugram",
        phone: "9876543219",
        email: "rc403@example.com",
        gstNumber: "06JJJJJ9999J1Z4"
    },
    {
        unit: "RC411",
        unitName: "RICHA & CO.",
        companyCode: "CC04",
        location: "Delhi",
        phone: "9876543220",
        email: "rc411_1@example.com",
        gstNumber: "07KKKKK0000K1Z5"
    },
    {
        unit: "RC411",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC04",
        location: "Noida",
        phone: "9876543221",
        email: "rc411_2@example.com",
        gstNumber: "09LLLLL1111L1Z6"
    },
    {
        unit: "RC461",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC04",
        location: "Gurugram",
        phone: "9876543222",
        email: "rc461@example.com",
        gstNumber: "06MMMMM2222M1Z7"
    },
    {
        unit: "RC479",
        unitName: "RICHA & CO.",
        companyCode: "CC05",
        location: "Delhi",
        phone: "9876543223",
        email: "rc479_1@example.com",
        gstNumber: "07NNNNN3333N1Z8"
    },
    {
        unit: "RC479",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC05",
        location: "Noida",
        phone: "9876543224",
        email: "rc479_2@example.com",
        gstNumber: "09OOOOO4444O1Z9"
    },
    {
        unit: "RC506",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC05",
        location: "Gurugram",
        phone: "9876543225",
        email: "rc506@example.com",
        gstNumber: "06PPPPP5555P1ZO"
    },
    {
        unit: "RC76",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC06",
        location: "Delhi",
        phone: "9876543226",
        email: "rc76@example.com",
        gstNumber: "07QQQQQ6666Q1Z1"
    },
    {
        unit: "RESWT",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC06",
        location: "Noida",
        phone: "9876543227",
        email: "reswt@example.com",
        gstNumber: "09RRRRR7777R1Z2"
    },
    {
        unit: "RNAB",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC06",
        location: "Gurugram",
        phone: "9876543228",
        email: "rnab@example.com",
        gstNumber: "06SSSSS8888S1Z3"
    },
    {
        unit: "RNA1B",
        unitName: "RICHACO EXPORTS PRIVATE LIMITED",
        companyCode: "CC06",
        location: "Delhi",
        phone: "9876543229",
        email: "rna1b@example.com",
        gstNumber: "07TTTTT9999T1Z4"
    }
];
$(document).ready(function () {

    bindFactoryUnitMasterData();

});

$(document).ready(function () {
    bindFactoryUnitMasterData();
});

function bindFactoryUnitMasterData() {
    const $tbody = $("#tblbodyFactoryUnit_Master");

    if (!$tbody.length) {
        console.error("[FactoryUnitMaster] #tblbodyFactoryUnit_Master not found.");
        return;
    }

    $tbody.empty();

    $.each(FactoryUnitMasterData, function (index, item) {
        const row = `<tr>
            <td>
                <button
                    type="button"
                    class="row-btn edit-btn"
                    title="Edit"
                    onclick="EditMatser('${item.unit}')"
                    data-code="${item.unit}">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
            <td>${item.unit || ''}</td>
            <td title="${item.unitName || ''}">${item.unitName || ''}</td>
            <td>${item.companyCode || ''}</td>
            <td>${item.location || ''}</td>
            <td>${item.phone || ''}</td>
            <td title="${item.email || ''}">${item.email || ''}</td>
            <td>${item.gstNumber || ''}</td>
        </tr>`;

        $tbody.append(row);
    });
}

function EditMatser(ID) {
    $('#addMenuModal').modal('show');
}

$("#btnAdd").on("click", function () {
    $('#addMenuModal').modal('show');
});