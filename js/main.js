//Tip: We will be using the Date object and setInterval and/or setTimeout

let timeDisplay = document.querySelector('time');
let timeContainer = document.getElementById('container');
let inputTime = document.getElementById('alarm-time');
let inputTimeValue = "";
let inputDate = document.getElementById('alarm-date');
let inputDateValue = "";
let alarmObject = null;


setInterval(currentRunningTime, 1000);

inputTime.addEventListener("input", (e) => {
    console.log(e);
    inputTimeValue = e.target.value;
});

inputDate.addEventListener("input", (e) => {
    inputDateValue = e.target.value;
    alarmObject = new Date(inputDateValue, inputTimeValue);
});


function currentRunningTime(){
    let currentTime = new Date();
    let dateAndTime = currentTime.toLocaleString();
    timeDisplay.textContent = dateAndTime;
    timeDisplay.setAttribute("datetime", dateAndTime);
    timeContainer.appendChild(timeDisplay);
    //if alarm object != null
    //if alarm time is <= current time, do something
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