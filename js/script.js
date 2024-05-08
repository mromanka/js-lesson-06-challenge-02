//SELECT A BUTTON AND PARAGRAPH
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

//WRITE A FUNCTION TO GET USER INPUT
var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accomodation = Number(prompt("What are your accomodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"));
//CALL THE FUNCTION   
    calculateDailyBudget(totalBudget, accomodation, numDays);
};

//WRITE A FUNCTION TO CALCULATE YOUR DAILY BUDGET
var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
    var daily = ((totalBudget - accomodation) / numDays).toFixed(2);
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
}

//ADD A CLICK EVENT
tripInfoButton.addEventListener("click", tripInfo);
