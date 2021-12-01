const dayse1 = document.getElementById('days');
const hourse1 = document.getElementById('hours');
const minutese1 = document.getElementById('minutes');
const secondse1 = document.getElementById('seconds');

const newYear = '1 Jan 2022';

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalseconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 ) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60; 

    dayse1.innerHTML = days;
    hourse1.innerHTML = formatTime(hours);
    minutese1.innerHTML = formatTime(minutes);
    secondse1.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();
setInterval(countdown,1000);
