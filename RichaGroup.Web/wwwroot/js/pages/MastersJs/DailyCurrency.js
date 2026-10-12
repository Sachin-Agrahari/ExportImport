$(document).ready(function () {

    let currentPeriod = "daily";

    const currencies = [
        "USD",
        "EUR",
        "GBP",
        "JPY",
        "AED",
        "SAR"
    ];


    // =========================================
    // INITIAL LOAD
    // =========================================

    generateYears();

    showFilter("daily");

    generateCurrencyTable("daily");


    // =========================================
    // PARENT TABS
    // =========================================

    $(".parent-tab").on("click", function () {

        $(".parent-tab").removeClass("on");

        $(this).addClass("on");

        let selectedParent = $(this).data("view");

        console.log("Parent Tab:", selectedParent);

    });


    // =========================================
    // SUB TABS
    // =========================================

    $(".currency-sub-tab").on("click", function () {

        $(".currency-sub-tab").removeClass("active");

        $(this).addClass("active");

        currentPeriod = $(this).data("period");

        showFilter(currentPeriod);

        generateCurrencyTable(currentPeriod);

    });


    // =========================================
    // DAILY DATE CHANGE
    // =========================================

    $("#txtDate").on("change", function () {

        if (currentPeriod === "daily") {

            generateCurrencyTable("daily");

        }

    });


    // =========================================
    // WEEKLY YEAR CHANGE
    // =========================================

    $("#weeklyYear").on("change", function () {

        if (currentPeriod === "weekly") {

            generateCurrencyTable("weekly");

        }

    });


    // =========================================
    // FORTNIGHTLY YEAR / MONTH CHANGE
    // =========================================

    $("#fortnightlyYear, #fortnightlyMonth").on("change", function () {

        if (currentPeriod === "fortnightly") {

            generateCurrencyTable("fortnightly");

        }

    });


    // =========================================
    // MONTHLY YEAR CHANGE
    // =========================================

    $("#monthlyYear").on("change", function () {

        if (currentPeriod === "monthly") {

            generateCurrencyTable("monthly");

        }

    });


    // =========================================
    // SHOW FILTER
    // =========================================

    function showFilter(period) {

        $(".period-filter").addClass("d-none");

        switch (period) {

            case "daily":

                $("#dailyFilter").removeClass("d-none");

                break;


            case "weekly":

                $("#weeklyFilter").removeClass("d-none");

                break;


            case "fortnightly":

                $("#fortnightlyFilter").removeClass("d-none");

                break;


            case "monthly":

                $("#monthlyFilter").removeClass("d-none");

                break;

        }

    }


    // =========================================
    // GENERATE YEARS
    // =========================================

    function generateYears() {

        let currentYear = new Date().getFullYear();

        let html = "";

        for (
            let year = currentYear - 5;
            year <= currentYear + 5;
            year++
        ) {

            html += `
                <option value="${year}">
                    ${year}
                </option>
            `;

        }


        $("#weeklyYear").html(html);

        $("#fortnightlyYear").html(html);

        $("#monthlyYear").html(html);


        // Current year selected

        $("#weeklyYear").val(currentYear);

        $("#fortnightlyYear").val(currentYear);

        $("#monthlyYear").val(currentYear);


        // Current month selected

        let currentMonth = new Date().getMonth() + 1;

        $("#fortnightlyMonth").val(currentMonth);

    }


    // =========================================
    // GENERATE CURRENCY TABLE
    // =========================================

    function generateCurrencyTable(period) {

        let headers = [];

        let year;
        let month;


        // =====================================
        // DAILY
        // =====================================

        if (period === "daily") {

            headers.push({

                title: "Rate",

                from: null,

                to: null

            });

        }


        // =====================================
        // WEEKLY
        // =====================================

        else if (period === "weekly") {

            year = parseInt($("#weeklyYear").val());

            if (!year) {
                year = new Date().getFullYear();
            }

           
            for (let month = 0; month < 12; month++) {

                let firstDay = new Date(year, month, 1);
                let lastDay = new Date(year, month + 1, 0);

               
                let weekNo = 1;

              
                let firstDayOfWeek = firstDay.getDay();

                
                let weekStart = new Date(firstDay);

                weekStart.setDate(
                    firstDay.getDate() - firstDayOfWeek
                );

                while (weekStart <= lastDay) {

                    
                    let weekEnd = new Date(weekStart);

                    weekEnd.setDate(
                        weekStart.getDate() + 6
                    );

                   
                    let fromDate = new Date(
                        Math.max(
                            weekStart.getTime(),
                            firstDay.getTime()
                        )
                    );

                   
                    let toDate = new Date(
                        Math.min(
                            weekEnd.getTime(),
                            lastDay.getTime()
                        )
                    );

                    headers.push({

                        title:
                            "Week - " +
                            weekNo +
                            "<br>" +
                            formatDate(fromDate) +
                            "<br>to<br>" +
                            formatDate(toDate),

                        from: fromDate,

                        to: toDate
                    });

                    // Next Sunday
                    weekStart.setDate(
                        weekStart.getDate() + 7
                    );

                    weekNo++;
                }
            }
        }


        //else if (period === "weekly") {

        //    year = parseInt($("#weeklyYear").val());


        //    if (!year) {

        //        year = new Date().getFullYear();

        //    }


        //    let startDate = new Date(year, 0, 1);

        //    let weekNo = 1;


        //    while (startDate.getFullYear() === year) {

        //        let fromDate = new Date(startDate);

        //        let toDate = new Date(startDate);

        //        toDate.setDate(toDate.getDate() + 6);


        //        // Don't go outside selected year

        //        if (toDate.getFullYear() !== year) {

        //            toDate = new Date(year, 11, 31);

        //        }


        //        headers.push({

        //            title:
        //                "Week - " +
        //                weekNo +
        //                "<br>" +
        //                formatDate(fromDate) +
        //                "<br>to<br>" +
        //                formatDate(toDate),

        //            from: fromDate,

        //            to: toDate

        //        });


        //        startDate.setDate(
        //            startDate.getDate() + 7
        //        );


        //        weekNo++;


        //        if (weekNo > 54) {

        //            break;

        //        }

        //    }

        //}


        // =====================================
        // FORTNIGHTLY
        // =====================================

        else if (period === "fortnightly") {

            year = parseInt($("#fortnightlyYear").val());

            month = parseInt($("#fortnightlyMonth").val());


            if (!year) {

                year = new Date().getFullYear();

            }


            if (!month) {

                month = new Date().getMonth() + 1;

            }


            // JS month is 0 based

            let monthIndex = month - 1;


            // First day

            let firstFrom = new Date(
                year,
                monthIndex,
                1
            );


            // 15th

            let firstTo = new Date(
                year,
                monthIndex,
                15
            );


            // Last day of selected month

            let secondFrom = new Date(
                year,
                monthIndex,
                16
            );


            let secondTo = new Date(
                year,
                monthIndex + 1,
                0
            );


            headers.push({

                title:
                    "1st Fortnight" +
                    "<br>" +
                    formatDate(firstFrom) +
                    " - " +
                    formatDate(firstTo),

                from: firstFrom,

                to: firstTo

            });


            headers.push({

                title:
                    "2nd Fortnight" +
                    "<br>" +
                    formatDate(secondFrom) +
                    " - " +
                    formatDate(secondTo),

                from: secondFrom,

                to: secondTo

            });

        }


        // =====================================
        // MONTHLY
        // =====================================

        else if (period === "monthly") {

            year = parseInt($("#monthlyYear").val());


            if (!year) {

                year = new Date().getFullYear();

            }


            for (let i = 0; i < 12; i++) {

                // First date of month

                let fromDate = new Date(
                    year,
                    i,
                    1
                );


                // Last date of month

                let toDate = new Date(
                    year,
                    i + 1,
                    0
                );


                headers.push({

                    title:
                        getMonthName(i),
                        //+
                        //"<br>" +
                        //formatDate(fromDate) +
                        //" - " +
                        //formatDate(toDate),

                    from: fromDate,

                    to: toDate

                });

            }

        }


        // =====================================
        // TABLE HEADER
        // =====================================

        let headerHtml = `
            <th class="currency-header">
                Currency
            </th>
        `;


        headers.forEach(function (header) {

            headerHtml += `
                <th class="rate-header" ${header.title == 'Rate' ?  'style="text-align:right !important; padding-right:44px !important;"' : ''} >
                    ${header.title}
                </th>
            `;

        });


        $("#currencyTableHeader").html(headerHtml);


        // =====================================
        // TABLE BODY
        // =====================================

        let bodyHtml = "";


        currencies.forEach(function (currency) {

            bodyHtml += `
                <tr>
            `;


            bodyHtml += `
                <td class="currency-name">
                    ${currency}
                </td>
            `;


            headers.forEach(function (header, index) {

                bodyHtml += `
                    <td>

                        <input type="text"
                               class="form-control r num currency-rate"
                               placeholder="Enter Rate.."
                               data-currency="${currency}"
                               data-column="${index}"
                               data-from="${header.from ? formatDateForData(header.from) : ""}"
                               data-to="${header.to ? formatDateForData(header.to) : ""}"
                               step="0.000001"
                               min="0">

                    </td>
                `;

            });


            bodyHtml += `
                </tr>
            `;

        });


        $("#tblDailyCurrencyBody").html(bodyHtml);

    }


    // =========================================
    // DISPLAY DATE
    // Example: 01-Sep-2026
    // =========================================

    function formatDate(date) {

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];


        let day = String(
            date.getDate()
        ).padStart(2, "0");


        let month =
            months[date.getMonth()];


        let year =
            date.getFullYear();


        return `${day}-${month}-${year}`;

    }


    
    function formatDateForData(date) {

        let month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");


        let day =
            String(
                date.getDate()
            ).padStart(2, "0");


        return `${date.getFullYear()}-${month}-${day}`;

    }


    function getMonthName(monthIndex) {

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];


        return months[monthIndex];

    }

});