//Tip: We will be using the Date object and setInterval and/or setTimeout

let timeDisplay = document.querySelector('time');
let timeContainer = document.getElementById('container');
let alarmDisplay = document.getElementById('alarm-alert');
let para = document.createElement('p');
let inputTime = document.getElementById('alarm-time');
let setAlarmButton = document.querySelector('button');
let inputTimeValue = "";
let inputDate = document.getElementById('alarm-date');
let inputDateValue = "";
let alarmObject = null;
let alarmInterval = null;
let alarmTimeOut = null;


setInterval(currentRunningTime, 1000);


inputTime.addEventListener("input", (e) => {
    inputTimeValue = e.target.value;
});

inputDate.addEventListener("input", (e) => {
    inputDateValue = e.target.value;
    
});

setAlarmButton.addEventListener('click', (e) => {
    alarmObject = new Date(inputDateValue + " " + inputTimeValue);
    para.textContent = "alarm set";
    alarmDisplay.appendChild(para);
})

function currentRunningTime(){
    let currentTime = new Date();
    let dateAndTime = currentTime.toLocaleString();
    timeDisplay.textContent = dateAndTime;
    timeDisplay.setAttribute("datetime", dateAndTime);
    timeContainer.appendChild(timeDisplay);
    if (alarmObject !== null){
        alarmInterval = alarmObject.getTime() - currentTime.getTime();
    }
    if (alarmInterval !== null && alarmInterval <= currentTime.getTime()){
        alarmTimeOut = setTimeout(runAlarm, alarmInterval);
        if (currentTime.getTime() > alarmObject.getTime()) {
            clearTimeout(alarmTimeOut);
        }
    }
}
    

    function runAlarm(){
        para.textContent = "Your alarm!";
        alarmDisplay.appendChild(para);
        }

    function stopAlarm(){
        clearTimeout(alarmTimeOut);
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