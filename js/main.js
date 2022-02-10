//Tip: We will be using the Date object and setInterval and/or setTimeout

let timeDisplay = document.querySelector('time');
let timeContainer = document.getElementById('container');

let currentTime = new Date();
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
