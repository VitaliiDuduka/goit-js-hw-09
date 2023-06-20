import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const selectInterval = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysRemains = document.querySelector('[data-days]');
const hoursRemains = document.querySelector('[data-hours]');
const minutesRemains = document.querySelector("[data-minutes]");
const secondsRemains = document.querySelector("[data-seconds]");

startBtn.disabled = true;
let selectedDate;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
        daysRemains.innerHTML = "00";
        hoursRemains.innerHTML = "00";
        minutesRemains.innerHTML = "00";
        secondsRemains.innerHTML = "00";
        clearInterval(timerId);

        selectedDate = selectedDates[0].getTime();
      if (selectedDate <= Date.now()) {
          Notiflix.Report.failure(
              'Warning!',
              'Please choose a date in the future',
              'Ok',
              { width: '420px',
                  svgSize: '160px',
              },
          );
      } else(startBtn.disabled=false)
  },
};

flatpickr(selectInterval, options);

startBtn.addEventListener("click", onStartClick);

function onStartClick() {
    timerId = setInterval(() => {
        const timeRemains = convertMs(selectedDate - Date.now());
        daysRemains.innerHTML = timeRemains.days.toString().padStart(2, "0");
        hoursRemains.innerHTML = timeRemains.hours.toString().padStart(2, "0");
        minutesRemains.innerHTML = timeRemains.minutes.toString().padStart(2, "0");
        secondsRemains.innerHTML = timeRemains.seconds.toString().padStart(2, "0");
        if (Math.floor((selectedDate - Date.now()) / 1000)<=0) {
            clearInterval(timerId);
            }
    }, 1000);
    startBtn.disabled = true;
}

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
}

