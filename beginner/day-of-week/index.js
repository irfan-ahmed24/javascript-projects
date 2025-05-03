var showDay = document.querySelector(".showDay");
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (showDay) {
    var date = new Date();
    var todayDate = date.getDay();
    showDay.innerHTML = `Today is <span> ${dayName[todayDate]}</span>`;
} else {
    console.error("Element with class 'showDay' not found.");
}