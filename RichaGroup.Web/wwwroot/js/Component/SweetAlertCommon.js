/* BASIC ALERT */

function showAlert(
    icon = "info",
    title = "",
    text = "",
    options = {}
) {

    const config = {

        icon: icon,

        title: title,

        text: text,

        showConfirmButton:
            options.showConfirmButton ?? false,

        showCancelButton:
            options.showCancelButton ?? false,

        timer:
            options.timer ?? 1200,

        confirmButtonText:
            options.confirmButtonText ?? "OK",

        cancelButtonText:
            options.cancelButtonText ?? "Cancel",

        reverseButtons:
            options.reverseButtons ?? false,

        ...options

    };

    return Swal.fire(config);

}


/* SUCCESS */

function showSuccess(
    title = "Success",
    text = "Operation completed successfully.",
    options = {}
) {

    return showAlert(
        "success",
        title,
        text,
        options
    );

}


/* ERROR */

function showError(
    title = "Error",
    text = "Something went wrong.",
    options = {}
) {

    return showAlert(
        "error",
        title,
        text,
        {
            showConfirmButton: true,
            timer: undefined,
            ...options
        }
    );

}


/* WARNING */

function showWarning(
    title = "Warning",
    text = "",
    options = {}
) {

    return showAlert(
        "warning",
        title,
        text,
        {
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            timer: undefined,
            ...options
        }
    );

}


/* INFO */

function showInfo(
    title = "Information",
    text = "",
    options = {}
) {

    return showAlert(
        "info",
        title,
        text,
        options
    );

}


/* CONFIRMATION */

function showConfirm(
    title = "Are you sure?",
    text = "",
    options = {}
) {

    return showAlert(
        "question",
        title,
        text,
        {
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            timer: undefined,
            ...options
        }
    );

}
function showCommonInputAlert({
        title = "Confirmation",
        text = "",
        inputLabel = "Remarks",
        inputPlaceholder = "Enter Remarks...",
        confirmButtonText = "Yes",
        cancelButtonText = "Cancel"
    }) {

    return Swal.fire({

        title: title,

        text: text,

        input: "text",

        inputLabel: inputLabel,

        inputPlaceholder: inputPlaceholder,

        showCancelButton: true,

        confirmButtonText: confirmButtonText,

        cancelButtonText: cancelButtonText,

        inputValidator: (value) => {

            if (!value || value.trim() === "") {
                return `Please enter ${inputLabel}.`;
            }

        }
    });
}

function showConfirmWithRedirect(
    title = "Are you sure?",
    text = "",
    options = {}
) {

    return showAlert(
        "question",
        title,
        text,
        {
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            timer: undefined,
            ...options
        }
    );

}