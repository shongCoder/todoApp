const clock = document.querySelector("#clock");
const time = document.querySelector("#access_time");
const week = document.querySelector("#week");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

function getClock() {
    const date = new Date();
    const dateHours = String(date.getHours()).padStart(2, "0");
    const dateMinutes = String(date.getMinutes()).padStart(2, "0");
    const dateSeconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = dateHours + ":" + dateMinutes + ":<span>" + dateSeconds + "</span>";
}

getClock();
setInterval(getClock, 1000);

function accessTime() {
    const date = new Date();
    const dateHours = String(date.getHours()).padStart(2, "0");
    const dateMinutes = String(date.getMinutes()).padStart(2, "0");
    const dateSeconds = String(date.getSeconds()).padStart(2, "0");
    time.innerText = `최종 접속시간은 ${dateHours}시 ${dateMinutes}분 ${dateSeconds}초 입니다.`
}
accessTime();

function getDate() {
    const date = new Date();
    const getWeek = date.getDay()
    if (getWeek == 1) {
        week.innerText = "Monday";
    } else if (getWeek == 2) {
        week.innerText = "Tuesday";
    } else if (getWeek == 3) {
        week.innerText = "Wednesday";
    } else if (getWeek == 4) {
        week.innerText = "Thursday";
    } else if (getWeek == 5) {
        week.innerText = "Friday";
    } else if (getWeek == 6) {
        week.innerText = "Saturday";
    } else {
        week.innerText = "Sunday";
    }
    const getDay = String(date.getDate());
    day.innerText = getDay;
    const getMonth = date.getMonth();
    if (getMonth == 1) {
        month.innerText = "JAN"
    } else if (getMonth == 2) {
        month.innerText = "FEB"
    } else if (getMonth == 3) {
        month.innerText = "MAR"
    } else if (getMonth == 4) {
        month.innerText = "APR"
    } else if (getMonth == 5) {
        month.innerText = "MAY"
    } else if (getMonth == 6) {
        month.innerText = "JUN"
    } else if (getMonth == 7) {
        month.innerText = "JUL"
    } else if (getMonth == 8) {
        month.innerText = "AUG"
    } else if (getMonth == 9) {
        month.innerText = "SEP"
    } else if (getMonth == 10) {
        month.innerText = "OCT"
    } else if (getMonth == 11) {
        month.innerText = "NOV"
    } else if (getMonth == 12) {
        month.innerText = "DEC"
    }
    const getYear = String(date.getFullYear());
    year.innerText = `, ${getYear}`;
}
getDate();