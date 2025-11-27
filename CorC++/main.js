const second = 1,
  minutes = 60 * second,
  hour = 60 * minutes;

const htmlhour = document.getElementById("idh1");
const htmlminutes = document.getElementById("idh12");
const htmlsecond = document.getElementById("idh13");

let intervalmainid = null;

function timerstart() {
  let mainvariable = 0;
  intervalmainid = setInterval(() => {
    mainvariable += second;

    htmlhour.textContent = Math.floor(mainvariable / hour);
    htmlminutes.textContent = Math.floor((mainvariable % hour) / minutes);
    htmlsecond.textContent = Math.floor((mainvariable % minutes) / second);
  }, 1000);
  disablebutton("startbutton");
}

function disablebutton(buttonid) {
  document.getElementById(buttonid).disabled = true;
}

function stopwatch() {
  clearInterval(intervalmainid);
  disablebutton("stopbutton");
}

function resetwatch() {
  document.getElementById("startbutton").disabled = false;
  document.getElementById("stopbutton").disabled = false;
  htmlhour.textContent = 0;
  htmlminutes.textContent = 0;
  htmlsecond.textContent = 0;
}
function addvalues() {
  console.log(htmlhour.innerText);
  console.log(htmlminutes.innerText);
  console.log(htmlsecond.innerText);
}
1;
