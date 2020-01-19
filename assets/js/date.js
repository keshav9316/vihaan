// Show Time
function showTime() {

  let today = new Date();
  let  hour = today.getHours();
  let  min = today.getMinutes();
  let  sec = today.getSeconds();

  var current_day = Math.floor(today.getTime() / (1000 * 60 * 60 * 24)); 

  // Set AM or PM
  const showAmPm = true;
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  //Output Date
  var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  document.getElementById('date').innerHTML = `<div class="time-entry days"><span>${days[today.getDay()]}</span></div>`;

  // document.getElementById('date').innerHTML = `<div class="time-entry days"><span>${today.getDay()}</span></div>`;

  // Output Time
//  document.getElementById('time').innerHTML = `<div class="time-entry days">${hour}<span>Hours</span></div><div class="time-entry days">${addzero(min)}<span>Minutes</span></div><div class="time-entry days">${addzero(sec)}<span> ${showAmPm ? amPm : ''} </span></div>`;

var months = ['january','feburary','march','april','may','june','july','august','september','october','november','december'];

document.getElementById('time').innerHTML = `<div class="time-entry days"><span>${today.getUTCDate()}</span>${months[today.getUTCMonth()]}</div><div class="time-entry days"><span>${hour}</span>Hour</div><div class="time-entry days"><span>${addzero(min)}</span>Min</div><div class="time-entry days"><span>${addzero(sec)}</span> Sec</div>`;

 setTimeout(showTime, 1000);
}

function addzero(time){
    let zero = (time < 10 ? '0':'');
   return ( time= zero + time);
}
//function call
showTime();

  
function countdown() { 
var deadline = new Date("feb 23, 2020 18:00:00").getTime(); 
  
  var now = new Date().getTime(); 
  
  var t = deadline - now; 
  
  if(t>=0){
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById('cont').innerHTML = `<div class="time-entry days"><span>${days}</span>days</div><div class="time-entry days"><span>${hours}</span>Hours</div><div class="time-entry days"><span>${addzero(minutes)}</span>Minutes</div><div class="time-entry days"><span>${addzero(seconds)}</span> Seconds</div>`;
    
  }
   
  if (t < 0) { 
          document.getElementById("cont").innerHTML = `<div class="time-entry days"><span>EVENT ENDED</span></div>`; 
  }
  setTimeout(countdown, 1000); 
}
countdown();