// Enables the current date, day and time to display

var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);

// Enables the text to be saved in the specific time parameter 

$(document).ready(function () {

    // saveBtn click listener 
    $(".saveBtn").on("click", function () {

        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })