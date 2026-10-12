$(document).ready(function() {
    $(document).on("click", "#btnPoClose", function () {

    const poNo = $("#ddlPurchaseOrder").val();

    if (!poNo) {
        showWarning(
            "Purchase Order Required",
            "Please select a Purchase Order."
        );
        return;
    }

    showSuccess(
        "PO Closed Successfully",
        `${poNo} has been closed successfully.`
    );
});


$(document).on("click", "#btnPoOpen", function () {

    const poNo = $("#ddlPurchaseOrder").val();

    if (!poNo) {
        showWarning(
            "Purchase Order Required",
            "Please select a Purchase Order."
        );
        return;
    }

    showSuccess(
        "PO Opened Successfully",
        `${poNo} has been opened successfully.`
    );
});


$(document).on("click", "#btnPoQuit", function () {

    showWarning(
        "Quit",
        "Do you want to quit?"
    ).then(function (result) {

        if (result.isConfirmed) {
            // yahan apna quit / redirect code laga sakte ho
        }

    });

});
})