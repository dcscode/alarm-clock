//Tip: We will be using the Date object and setInterval and/or setTimeout

let timeDisplay = document.querySelector('time');
let timeContainer = document.getElementById('container');
let inputTime = document.getElementById('alarm-time');
let inputTimeValue = "";
let inputDate = document.getElementById('alarm-date');
let inputDateValue = "";


setInterval(currentRunningTime, 1000);

inputTime.addEventListener("input", () => {
    inputTimeValue = inputTime.value;
});

inputDate.addEventListener("input", () => {
    inputDateValue = inputDate.value;
});

let inputDateTimeString = inputDateValue + " " + inputTimeValue;
let alarmObject = new Date(inputDateValue, inputTimeValue);
let rightNow = new Date();
let alarmInterval = alarmObject - rightNow;


function currentRunningTime(){
    let currentTime = new Date();
    let dateAndTime = currentTime.toLocaleString();
    timeDisplay.textContent = dateAndTime;
    timeDisplay.setAttribute("datetime", dateAndTime);
    timeContainer.appendChild(timeDisplay);
    }


/* original attempt
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let month = currentTime.getMonth();
let day = currentTime.getDate();
let year = currentTime.getFullYear();

let timeFromObject = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
timeDisplay.textContent = timeFromObject;
timeDisplay.setAttribute("datetime", timeFromObject);
timeContainer.appendChild(timeDisplay);
*/