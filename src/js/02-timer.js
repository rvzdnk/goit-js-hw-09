// Flatpickr import
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

// Notiflix import
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

// QS for input and output elements
const dateChooser = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

// lock and Unlock Button
function lockBtn (btnName){
    btnName.disabled = true;
};

function unlockBtn (btnName){
    btnName.disabled = false;
};

lockBtn(startBtn);
// Flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    if (selectedDate[0] <= new Date()) {
      lockBtn(startBtn);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      unlockBtn(startBtn);
      Notiflix.Notify.success('The selected date is correct. Press the "start" button to continue.');
    }
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", countdownTime);


// Function to countdown time
let timer = null;

function countdownTime () {
timer = setInterval(() =>{
lockBtn(startBtn);

const chosenDate = new Date(dateChosen.value.replace(/-/g, '/')).getTime();
const currentDate = new Date().getTime();
const timeLeft = chosenDate - currentDate;

const {days, hours, minutes, seconds} = convertMs(timeLeft);

dataDays.innerHTML = days < 2 ? addLeadingZero(days) : days;
dataHours.innerHTML = hours < 2 ? addLeadingZero(hours) : hours;
dataMinutes.innerHTML = minutes < 2 ? addLeadingZero(minutes) : minutes;
dataSeconds.innerHTML = seconds < 2 ? addLeadingZero(seconds) : seconds;

if (timeLeft < 1000) {
    clearInterval(timer);
    unlockBtn(startBtn);
  }
},1000);
}

// Function to Convert Time
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

// Function addLeadingZero

function addLeadingZero(value) {
    const stringValue = String(value);
    return stringValue.padStart(2, '0');
  };

