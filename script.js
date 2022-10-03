//Moment
var today = moment().format('dddd, MMMM Do, YYYY')

$("#currentDay").html("Today is " + moment().format('dddd, MMMM Do, YYYY'));

console.log(today);