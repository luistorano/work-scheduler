// Display today's day and date
var todayDate = moment().format('ddd, MMM Do, YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // Save Button
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#8-am .description").val(localStorage.getItem("8-am"));
    $("#9-am .description").val(localStorage.getItem("9-am"));
    $("#10-am .description").val(localStorage.getItem("10-am"));
    $("#11-am .description").val(localStorage.getItem("11-am"));
    $("#12-pm .description").val(localStorage.getItem("12-pm"));
    $("#1-pm .description").val(localStorage.getItem("1-pm"));
    $("#2-pm .description").val(localStorage.getItem("2-pm"));
    $("#3-pm .description").val(localStorage.getItem("3-pm"));
    $("#4-pm .description").val(localStorage.getItem("4-pm"));
    $("#5-pm .description").val(localStorage.getItem("5-pm"));

    timeTracker();
})