
const MODULE_TYPE_STORAGE_KEY = 'ddlModuleType';

$(document).ready(function () {

    restoreSelectedModuleType();

    bindSidebarMenu()

    $('#ddlModuleType').on('change', function () {
        localStorage.setItem(MODULE_TYPE_STORAGE_KEY, $(this).val());
        bindSidebarMenu()
    })

})

function restoreSelectedModuleType() {
    try {
        const savedModule = localStorage.getItem(MODULE_TYPE_STORAGE_KEY);
        const $ddl = $('#ddlModuleType');
        if (savedModule && $ddl.find(`option[value="${savedModule}"]`).length) {
            $ddl.val(savedModule);
        }
    } catch (e) {
        console.error('Could not restore module type', e);
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function buildMenuHtml(items, parentId = 0, level = 0) {
    let html = '';

    const children = items
        .filter(i => (i.Parent_Id ?? 0) === parentId
            && (i.Show ?? 'Y').toString().toUpperCase() !== 'N')
        .sort((a, b) => (a.Seq ?? 9999) - (b.Seq ?? 9999));

    children.forEach(item => {
        const hasChildren = items.some(c => c.Parent_Id === item.ID);
        const submenuId = `submenu-${item.ID}`;
        const label = escapeHtml((item.Menu_Name || '').trim());
        const icon = escapeHtml(item.IconName || '');
        // fall back to the menu name itself when no explicit tooltip is set,
        // so every item in the collapsed (icon-only) rail always shows a
        // hover tooltip identifying it, not just the ones with a Tooltip
        // value in the database
        const tooltip = escapeHtml((item.Tooltip || item.Menu_Name || '').trim());
        const url = `/${(item.URL || '#').trim()}`;

        // fall back to the menu's first letter when no icon is set, so the
        // collapsed (icon-only) sidebar rail always shows something recognisable
        const initial = escapeHtml((item.Menu_Name || '?').trim().charAt(0).toUpperCase() || '?');
        const icoContent = icon ? `<i class="fa-solid fa-fw ${icon}"></i>` : `<span class="nav-ico-fallback">${initial}</span>`;

        if (hasChildren) {
            html += `
                    <div class="nav-group" data-menu-id="${item.ID}">
                        <button type="button" class="nav-link nav-toggle" data-target="${submenuId}" aria-expanded="false"${tooltip ? ` title="${tooltip}"` : ''}>
                            <span class="nav-ico">${icoContent}</span>
                            <span class="label">${label}</span>
                            <span class="caret">&#9662;</span>
                        </button>
                        <div class="submenu" id="${submenuId}">
                            ${buildMenuHtml(items, item.ID, level + 1)}
                        </div>
                    </div>`;
        } else {
            //const cls = level === 0 ? 'nav-link' : 'sub';
            //const targetAttr = item.Targetframe ? ` target="${escapeHtml(item.Targetframe)}"` : '';
            //const URL= `${escapeHtml(url)}`
            //if (URL.includes('?'))
            //    URL += `&ID=${item.ID}`
            //else
            //    URL += `ID=${item.ID}`
            //html += `
            //        <a href="${URL}" class="${cls}" data-menu-id="${item.ID}"
            //           data-popup="${item.Popup || 0}" data-width="${item.width || ''}" data-height="${item.height || ''}"
            //           ${tooltip ? `title="${tooltip}"` : ''}${targetAttr}>
            //            <span class="nav-ico">${icoContent}</span>
            //            <span class="label">${label}</span>
            //        </a>`;


            const cls = level === 0 ? 'nav-link' : 'sub';

            const targetAttr = item.Targetframe
                ? ` target="${escapeHtml(item.Targetframe)}"`
                : '';

            let URL = escapeHtml(url);

            if (URL.includes('?')) {
                URL += `&ID=${item.ID}`;
            } else {
                URL += `?ID=${item.ID}`;
            }

            // Show tick only when IsFinal is true
            const finalIcon = item.IsFinal
                ? `
                <span class="final-menu-icon" title="Final Layout">
                    <svg width="15"
                         height="15"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="3"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
              `
                        : `
                <span class="text-danger fw-bold" title="Pending">
                    P
                </span>
              `;
            html += `
                <a href="${URL}"
                   class="${cls}"
                   data-menu-id="${item.ID}"
                   data-popup="${item.Popup || 0}"
                   data-width="${item.width || ''}"
                   data-height="${item.height || ''}"
                   ${tooltip ? `title="${tooltip}"` : ''}
                   ${targetAttr}>

                    <span class="nav-ico">${icoContent}</span>

                    <span class="label">${label}</span>

                    ${finalIcon}

                </a>`;

        }
    });

    return html;
}

function bindSidebarMenu() {

    let moduleText = $('#ddlModuleType').val();

    console.log("Selected Module:", moduleText);

    $.ajax({
        url: `/Auth/getMenus?moduleType=${encodeURIComponent(moduleText)}`,
        type: 'GET',
        dataType: 'json',

        success: function (response) {

            if (!response || response.success === false) {
                console.error('Menu load failed:', response?.message);
                return;
            }

            let menuItems = response.data;

            // If data is JSON string
            if (typeof menuItems === 'string') {
                try {
                    menuItems = JSON.parse(menuItems);
                }
                catch (e) {
                    console.error('Could not parse menu payload', e);
                    return;
                }
            }
            $('#dynamicMenu').empty()

            let menus = buildMenuHtml(menuItems, 0, 0)

            $('#dynamicMenu').append(menus)

            initSidebarBehaviour();

        },

        error: function (xhr, status, error) {
            console.error(
                'Error fetching sidebar menu:',
                xhr.responseText || error
            );
        }
    });
}

function initSidebarBehaviour() {
    $('.nav-toggle').off('click').on('click', function () {
        const $btn = $(this);
        const $group = $btn.closest('.nav-group');
        const $submenu = $('#' + $btn.data('target'));
        const isOpen = $group.hasClass('open');

        // collapse sibling groups at this same level only
        $group.siblings('.nav-group.open').removeClass('open')
            .find('> .nav-toggle').attr('aria-expanded', 'false')
            .end().find('> .submenu').slideUp(150);

        $group.toggleClass('open', !isOpen);
        $btn.attr('aria-expanded', String(!isOpen));
        $submenu.stop(true, true)[isOpen ? 'slideUp' : 'slideDown'](150);
    });

    highlightActiveMenu();
}

/**
 * Marks the sidebar link that matches the current page as active and
 * expands its parent group(s).
 *
 * Many menu URLs carry a query string that distinguishes otherwise
 * identical routes, e.g.:
 *   Payments/TT_Payment?Type=Accessory
 *   Payments/TT_Payment?Type=Fabric
 *
 * The previous version compared `window.location.pathname` (no query
 * string) against `href` (which DOES include the query string), so
 * that comparison could only ever succeed for the handful of menu
 * items whose URL has no "?..." part. Every query-string item failed
 * to match, and because this function unconditionally collapses every
 * group before looking for a match, a failed match meant the whole
 * sidebar closed with nothing highlighted — which is exactly the
 * "sometimes it doesn't show the selection and collapses everything"
 * behaviour being reported.
 *
 * Fix: compare the full path + query string first (so distinct
 * "?type=" variants still resolve correctly), then fall back to a
 * path-only comparison if nothing matched exactly, so small
 * differences (casing, stray whitespace in the URL column, param
 * order) still open the right group instead of collapsing everything.
 */
function highlightActiveMenu() {
    const normalize = s => (s || '').toLowerCase().trim().replace(/\/$/, '');

    const currentFull = normalize(window.location.pathname + window.location.search);
    const currentPath = normalize(window.location.pathname);

    $('#sidebarMain a').removeClass('active');
    $('#sidebarMain .nav-group').removeClass('open');
    $('#sidebarMain .nav-toggle').removeClass('active').attr('aria-expanded', 'false');

    // 1) Exact match on path + query string.
    let $match = $('#sidebarMain a').filter(function () {
        const href = normalize($(this).attr('href'));
        return href && href !== '/#' && href !== '#' && currentFull === href;
    });

    // 2) Fallback: match on path only, ignoring the query string, in
    //    case the query string differs slightly (casing, param order,
    //    stray whitespace in the source data) but the route is the
    //    same page.
    if (!$match.length) {
        $match = $('#sidebarMain a').filter(function () {
            const hrefPath = normalize(($(this).attr('href') || '').split('?')[0]);
            return hrefPath && hrefPath !== '/#' && hrefPath !== '#' && currentPath === hrefPath;
        });
    }

    if ($match.length) {
        // If the fallback matched more than one link (same path, different
        // query), prefer the first — still better than highlighting nothing.
        $match = $match.first();
        $match.addClass('active');
        // .parents() walks EVERY ancestor .nav-group regardless of depth
        $match.parents('.nav-group').each(function () {
            $(this).addClass('open');
            $(this).find('> .nav-toggle').addClass('active').attr('aria-expanded', 'true');
            $(this).find('> .submenu').show();
        });
    }
}


