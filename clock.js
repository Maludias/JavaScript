const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const clock = setInterval(function time(){

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

  
   hour.textContent = hr;
   minute.textContent = min;
   second.textContent = sec;

},1000)