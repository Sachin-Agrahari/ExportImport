$(document).ready(function () {
    $("#ddlUnit_LocalSales").select2({
        width: "100%",
        dropdownAutoWidth: false
    });
    $("#txtEntrydate_LocalSales").flatpickr({
        dateFormat: "d-m-Y",
        allowInput: true,
         defaultDate: "today"
    });
    // Refresh Button

    $("#btnRefresh_LocalSales").on("click", function () {

        showWarning(
            "Are you sure?",
           "Do you want to refresh the Local Sales?",
       
        ).then(function (result) {

            if (result.isConfirmed) {
                showLoader("Refreshing Local Sales...");
            }

            setTimeout(function () {

                hideLoader();

            }, 500);

        });

    });

    // Add Button
    $("#btnAdd_LocalSales").on("click", function () {

        addLocalSales();

    });
})

function addLocalSales() {

    showWarning(
         "Are you sure?",
         "Do you want to add the Local Sales?",
        
    ).then(function (result) {

        if (!result.isConfirmed) {
            return;
        }

        showLoader("Adding Local Sales...");

        setTimeout(function () {

            hideLoader();

            showInfo(
                "Work in Progress",
                "Add Local Sales functionality is currently under development.",
            );

        }, 500);

    });

}