
$(function () {
    const tabBtns = [...document.querySelectorAll('.tabs button')];
    tabBtns.forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('on', p.id === b.dataset.tab));
        tabBtns.forEach(x => x.classList.toggle('on', x === b));
    }));

    const n = id => parseFloat(String($('#' + id).val()).replace(/,/g, '')) || 0;
    const t = (id, v) => $('#' + id).text(v);
    const f2 = v => v.toFixed(2);
    const f0 = v => String(Math.round(v));

    let last = { A: 0, B: 0, G: 0, H: 0 };
    let mtrEdited = false;

    function calcMain() {
        const cif = n('fob') * n('rate') + n('freight') + n('ins');
        const A = cif * 1.01;                         
        const sqv = n('sqm') * n('sqr');
        const B = Math.max(A * n('p_b') / 100, sqv);
        const C = (A + B) * n('p_c') / 100;
        const D = (A + B + C) * n('p_d') / 100;
        const E = (C + D) * n('p_e') / 100;
        const F = (C + D) * n('p_f') / 100;
        const base = B + C + D + E + F;
        const G = base * n('p_g') / 100;
        const H = base * n('p_h') / 100;
        const I = (A + B + C + D + E + F + G + H) * n('p_i') / 100;
        const total = B + C + D + E + F + G + H + I;
        const tint = total * n('int') / 100 * n('yrs');

        t('cif', f2(cif)); t('A', f2(A)); t('sqv', f2(sqv)); t('bcdv', f2(B));
        $.each({ vB: B, vC: C, vD: D, vE: E, vF: F, vG: G, vH: H, vI: I }, (id, v) => t(id, f2(v)));
        t('total', f2(total));
        t('tint', f2(tint));
        t('bond', f2(Math.round(total + tint)));

        last = { A, B, G, H };
        calcLinen();
    }

    function calcLinen() {
        const X = n('l_mtr') * n('l_add') * n('l_cc');
        const bghx = Math.round(last.B + last.G + last.H + X);
        const ass = Math.round(last.A);
        const tot = bghx + ass;
        const gst = Math.round(tot * n('l_gp') / 100);

        t('l_x', f0(X));
        t('l_bghx', f0(bghx));
        t('l_ass', f0(ass));
        t('l_tot', f0(tot));
        t('l_gst', f0(gst));
        t('l_td', f0(bghx + gst));
    }

    $('#main').on('input', 'input', calcMain);
    $('#fQty').on('input', function () {
        if (!mtrEdited) { $('#l_mtr').val($(this).val()); calcLinen(); }
    });
    $('#l_mtr').on('input', function () { mtrEdited = true; });
    $('#addDutyStructre').on('input', '.lnum', calcLinen);

    function openModal() {
        $('#addDutyStructre').modal('show');
    }

   
    $('#linenChk').on('change', function () {
        if ($(this).is(':checked')) {
            openModal();
        }
    });

   
    $('#addDutyStructre').on('hidden.bs.modal', function () {
        $('#linenChk').prop('checked', false);
    });

    calcMain();

   
    $("#nextTabBtn").on("click", function () {

      
        const nextTab = document.querySelector(
            '.tabs button[data-tab="t-DutyVsStructer"]'
        );

        if (nextTab) {
            nextTab.click();
        } else {
         
            $(".tabpane").removeClass("on");
            $("#t-DutyVsStructer").addClass("on");
        }

    });

});
function printReport() {
    var report = document.getElementById("report");
    var printWindow = window.open("", "_blank", "width=900,height=700");

    printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Duty Vs Structure Report</title>
                <style>
                    @page {
                        size: A4 portrait;
                        margin: 12mm;
                    }

                    body {
                        font-family: Arial, sans-serif;
                        font-size: 10pt;
                        color: #000;
                        margin: 0;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        table-layout: fixed;
                    }

                    td {
                        padding: 6px 5px;
                        vertical-align: middle;
                        overflow-wrap: break-word;
                    }

                    .lbl {
                        font-weight: 600;
                    }

                    .r {
                        text-align: right;
                    }

                    .ln {
                        border-bottom: 1px solid #000;
                    }

                    .fld {
                        width: 100%;
                        border: none;
                        outline: none;
                        background: transparent;
                        color: #000;
                        font: inherit;
                        box-sizing: border-box;
                    }

                    .dvd-sum {
                        margin-top: 25px;
                    }

                    .dvd-sum td {
                        border: 1px solid #000;
                    }

                    .dvd-sum .sigrow td {
                        height: 70px;
                        vertical-align: bottom;
                        text-align: center;
                    }

                    .dvd-sum textarea {
                        width: 100%;
                        height: 80px;
                        border: none;
                        resize: none;
                        font: inherit;
                        box-sizing: border-box;
                    }

                    input, textarea {
                        -webkit-appearance: none;
                        appearance: none;
                    }

                    tr {
                        page-break-inside: avoid;
                    }
                </style>
            </head>
            <body>
                <div id="printContent"></div>
            </body>
            </html>
        `);

    printWindow.document.close();

    printWindow.onload = function () {
        printWindow.document.getElementById("printContent").appendChild(
            printWindow.document.importNode(report, true)
        );

        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
}
