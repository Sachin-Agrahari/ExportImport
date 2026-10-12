export function initDatePicker(selector, options = {}) {
    const defaultOptions = {
        dateFormat: "d-M-Y",
        allowInput: true,
        defaultDate: "today"
    };

    const config = {
        ...defaultOptions,
        ...options
    };

    $(selector).each(function () {
        // Avoid initializing the same element twice
        if (this._flatpickr) {
            this._flatpickr.destroy();
        }

        flatpickr(this, config);
    });
}

//export function initializeSelect2(selector, options = {}) {

//    const defaultOptions = {
//        width: "100%",
//        dropdownAutoWidth: false
//    };

//    const config = {
//        ...defaultOptions,
//        ...options
//    };

//    $(selector).each(function () {

//        // Avoid initializing the same element twice
//        if ($(this).hasClass("select2-hidden-accessible")) {
//            $(this).select2("destroy");
//        }

//        $(this).select2(config);
//    });
//}

export function initializeSelect2(selector, options = {}) {
    const defaultOptions = {
        width: "100%",
        dropdownAutoWidth: false,
        dropdownParent: $(".app-main").length ? $(".app-main") : $(document.body)
    };
    const config = {
        ...defaultOptions,
        ...options
    };
    $(selector).each(function () {
        if ($(this).hasClass("select2-hidden-accessible")) {
            $(this).select2("destroy");
        }
        $(this).select2(config);
    });
}


export function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

export function escapeAttribute(value) {
    return escapeHtml(value);
}

export function showToast (message, type = "success", duration = 3000) {
    let $container = $("#toast-container");

    if ($container.length === 0) {
        $container = $('<div id="toast-container"></div>').appendTo("body");
    }

    const icons = {
        success: "✓",
        warning: "!",
        error: "✕",
        info: "i"
    };

    const $toast = $(`
        <div class="app-toast ${type}" style="--toast-duration:${duration}ms">
            <div class="toast-icon">${icons[type] || "i"}</div>
            <div class="toast-msg">${message}</div>
            <div class="toast-progress"></div>
        </div>
    `);

    $container.append($toast);

    setTimeout(() => {
        $toast.addClass("hiding");

        setTimeout(() => {
            $toast.remove();
        }, 300);
    }, duration);
};


export function RenderChecklist(containerSel, data, cssClass, defaultChecked, value, text) {
    if (!data || data.length === 0) {
        $(containerSel).html('<div class="checklist-empty">No records found.</div>');
        return;
    }

    var html = '';
    $.each(data, function (i, v) {
        var domId = cssClass + '_' + i;
        var checked = defaultChecked ? ' checked' : '';
        html += `
                <div class="checklist-item">
                    <input
                        class="${cssClass}"
                        type="checkbox"
                        id="${domId}"
                        value="${v[value]}"${checked}>
                    <label for="${domId}">${v[text]}</label>
                </div>
            `;
    });
    $(containerSel).html(html);
}