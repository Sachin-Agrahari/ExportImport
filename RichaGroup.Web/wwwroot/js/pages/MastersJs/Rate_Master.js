$(document).ready(function () {

    initRateMaster();

});
/*PAGE INITIALIZATION*/

function initRateMaster() {


    /* DATEPICKERS */

    flatpickr("#txtfrom_RateMaster", {
        dateFormat: "d-M-Y",
        allowInput: true,
        defaultDate:"today"
    });


    flatpickr("#txtTo_RateMaster", {
        dateFormat: "d-M-Y",
        allowInput: true,
        defaultDate:"today"
    });


    /* SELECT2 */

    $("#ddlCurrRate_Master").select2({
        width: "100%",
        dropdownAutoWidth: false
    });


    /* CURRENCY CHANGE */

    $("#ddlCurrRate_Master").on("change", function () {

        const currency = $(this).val();


        if (!currency) {

            $("#rateMasterTableSection").hide();

            return;
        }


        $("#rateMasterTableSection").show();

        initiRt_masterDatatable();

    });


    /* REFRESH */

    $("#btnRefresh_RTMaster").on("click", function () {

        showConfirm(
            "Are you sure?",
            "Do you want to refresh the Rate Master?"
        ).then(function (result) {

            if (result.isConfirmed) {

                refreshRateMaster();

            }

        });

    });

}
/*STATIC DATA */

const currencyData = [

    {
        curr: "EURO",
        rate: "91.90000",
        from: "04-04-2025",
        to: "17-04-2025"
    },

    {
        curr: "US$",
        rate: "84.90000",
        from: "04-04-2025",
        to: "17-04-2025"
    },

    {
        curr: "UK£",
        rate: "110.15000",
        from: "04-04-2025",
        to: "17-04-2025"
    },

    {
        curr: "EURO",
        rate: "95.55000",
        from: "18-04-2025",
        to: "01-05-2025"
    },

    {
        curr: "US$",
        rate: "84.70000",
        from: "18-04-2025",
        to: "01-05-2025"
    },

    {
        curr: "UK£",
        rate: "111.20000",
        from: "18-04-2025",
        to: "01-05-2025"
    },

    {
        curr: "EURO",
        rate: "94.00000",
        from: "02-05-2025",
        to: "15-05-2025"
    },

    {
        curr: "US$",
        rate: "83.85000",
        from: "02-05-2025",
        to: "15-05-2025"
    },

    {
        curr: "UK£",
        rate: "110.70000",
        from: "02-05-2025",
        to: "15-05-2025"
    },

    {
        curr: "EURO",
        rate: "94.05000",
        from: "16-05-2025",
        to: "05-06-2025"
    },

    {
        curr: "US$",
        rate: "84.70000",
        from: "16-05-2025",
        to: "05-06-2025"
    },

    {
        curr: "UK£",
        rate: "111.70000",
        from: "16-05-2025",
        to: "05-06-2025"
    },

    {
        curr: "EURO",
        rate: "96.30000",
        from: "06-06-2025",
        to: "-"
    },

    {
        curr: "US$",
        rate: "85.05000",
        from: "06-06-2025",
        to: "-"
    },

    {
        curr: "UK£",
        rate: "114.50000",
        from: "06-06-2025",
        to: "-"

    }

];
/* DATATABLE*/

function initiRt_masterDatatable() {

    showLoader("Loading Currency Rate Master...");


    try {

        if ($.fn.DataTable.isDataTable("#tblRateMaster")) {

            $("#tblRateMaster")
                .DataTable()
                .clear()
                .destroy();

        }


        new DataTable("#tblRateMaster", {

            data: currencyData,

            columns: [

                {
                    data: "curr"
                },

                {
                    data: "from"
                },

                {
                    data: "to"
                },

                {
                    data: "rate"
                }

            ],

            paging: true,

            searching: true,

            ordering: false,

            info: false,

            lengthChange: false

        });


        setTimeout(function () {

            hideLoader();

        }, 500);

    }
    catch (err) {

        console.error(
            "[RateMaster] DataTable init failed:",
            err
        );


        hideLoader();


        showError(
            "Load Failed",
            "Unable to load Currency Rate Master."
        );

    }

}
/* REFRESH */

function refreshRateMaster() {

    showLoader("Refreshing Rate Master...");


    try {

        /* Clear Select2 */

        $("#ddlCurrRate_Master")
            .val("")
            .trigger("change");


        /* Hide table */

        $("#rateMasterTableSection")
            .hide();


        /* Clear From Date */

        const fromDate =
            document.getElementById("txtfrom_RateMaster");


        if (fromDate && fromDate._flatpickr) {

            fromDate._flatpickr.clear();

        }
        else {

            $("#txtfrom_RateMaster").val("");

        }


        /* Clear To Date */

        const toDate =
            document.getElementById("txtTo_RateMaster");


        if (toDate && toDate._flatpickr) {

            toDate._flatpickr.clear();

        }
        else {

            $("#txtTo_RateMaster").val("");

        }


        /* Clear DataTable */

        if ($.fn.DataTable.isDataTable("#tblRateMaster")) {

            $("#tblRateMaster")
                .DataTable()
                .clear()
                .destroy();

        }


        setTimeout(function () {

            hideLoader();


            showSuccess(
                "Refreshed",
                "Rate Master refreshed successfully."
            );


        }, 500);

    }
    catch (err) {

        console.error(
            "[RateMaster] Refresh failed:",
            err
        );


        hideLoader();


        showError(
            "Refresh Failed",
            "Unable to refresh Rate Master."
        );

    }

}