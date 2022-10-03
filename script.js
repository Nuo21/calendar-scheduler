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
    for (var i = 9; i <= 17; i++){
        $("#" + i + "hr").val(localStorage.getItem(i));
    }

    console.log(localStorage);
}

timeCheck();
loadStorage();
//localStorage.clear();