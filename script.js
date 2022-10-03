//Variable for current day using Moment
var today = moment().format('dddd, MMMM Do, YYYY')

//Today
$("#currentDay").html("Today is " + today);
//$("#currentDay").html("Today is " + moment().format('dddd, MMMM Do, YYYY'));

//Testing
console.log(today);



//Check if event is in the past, present, or future
var timeCheck = function(){
    var currentHour = moment().hour();

    console.log(currentHour);

    $(".time-block").each(function(){
        var eventTime = parseInt($(this).attr("id"));

        //Testing
        console.log(eventTime);

        if (eventTime < currentHour){
            $(this).addClass("past");
        } else if (eventTime > currentHour){
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
}

//Save button
$(".saveBtn").on("click", function(){
    var userEvent = $(this).siblings(".description").val();
    var userEventHour = $(this).parent().attr("id");
    localStorage.setItem(userEventHour, userEvent);
})

//Getting localstorage items
var loadStorage = function(){
    //Made for loop for the code below to make it cleaner
    for (var i = 9; i <= 17; i++){
        $("#" + i + "hr " + ".description").val(localStorage.getItem(i + "hr"));
    }
    
    /*$("#9hr .description").val(localStorage.getItem("9hr"));
    $("#10hr .description").val(localStorage.getItem("10hr"));
    $("#11hr .description").val(localStorage.getItem("11hr"));
    $("#12hr .description").val(localStorage.getItem("12hr"));
    $("#13hr .description").val(localStorage.getItem("13hr"));
    $("#14hr .description").val(localStorage.getItem("14hr"));
    $("#15hr .description").val(localStorage.getItem("15hr"));
    $("#16hr .description").val(localStorage.getItem("16hr"));
    $("#17hr .description").val(localStorage.getItem("17hr"));*/

    console.log(localStorage);
}



timeCheck();
loadStorage();
//localStorage.clear();