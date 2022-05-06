let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector(".timerDisplay");
let myInterval = 0;

// Start stopwatch by click on "START" button
document.getElementById("startTimer").addEventListener("click", ()=>  {
    if(myInterval !== null) {
        clearInterval(myInterval);
    }

    myInterval = setInterval(displayTimer, 10);
})

// Stop stopwatch by click on "PAUSE" button
document.getElementById("pauseTimer").addEventListener("click", ()=> {
    clearInterval(myInterval);
})

// Reset stopwatch by click on "RESET" button and set variables to 0
document.getElementById("resetTimer").addEventListener("click", ()=> {
    clearInterval(myInterval);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = "00 : 00 : 00 : 00";
})

// FUNCTION COUNTING
function displayTimer() {
    milliseconds += 10;

    if(milliseconds === 1000) {
        seconds ++;
        milliseconds = 0;

        if(seconds === 60) {
            minutes ++;
            seconds = 0;

            if(minutes === 60) {
                hours ++;
                minutes = 0;
            }
        }
    }

    // set variables in conditions when =>
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds: milliseconds < 100 ? "0" + milliseconds: milliseconds;

    // DOM
    timerRef.innerHTML = `${h}  : ${m} : ${s} : ${ms}`;
}