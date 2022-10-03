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
    })
}

timeCheck();