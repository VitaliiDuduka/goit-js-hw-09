// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const dateTimeEl = document.querySelector('#datetime-picker');

// const startBtn = document.querySelector('button[data-start]');

// const daysEl = document.querySelector('span[data-days]');
// const hoursEl = document.querySelector('span[data-hours]');
// const minutesEl = document.querySelector('span[data-minutes]');
// const secondsEl = document.querySelector('span[data-seconds]');
// startBtn.disabled = true;
// let selectedDateMs = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   minDate: new Date(),
//   onClose(selectedDates) {
//     selectedDateMs = selectedDates[0].getTime();
//     if (selectedDateMs <= Date.now()) {
//       Notify.failure('Please choose a date in the future');
//     }

//     if (selectedDateMs) {
//       startBtn.disabled = false;
//     }
//   },
// };

// flatpickr(dateTimeEl, options);

// startBtn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   const intervalTimer = setInterval(() => {
//     const timeDisplay = convertMs(selectedDateMs - Date.now());

//     renderTimer(timeDisplay);
//     clearTimer(intervalTimer);
//   }, 1000);
//   startBtn.disabled = true;
// }

// function clearTimer(interval) {
//   if (selectedDateMs - Date.now() <= 0) {
//     clearInterval(interval);
//     daysEl.innerHTML = '00';
//     hoursEl.innerHTML = '00';
//     minutesEl.innerHTML = '00';
//     secondsEl.innerHTML = '00';
//   }
// }

// function renderTimer(timeObj) {
//   daysEl.innerHTML = timeObj.days.toString().padStart(2, '0');
//   hoursEl.innerHTML = timeObj.hours.toString().padStart(2, '0');
//   minutesEl.innerHTML = timeObj.minutes.toString().padStart(2, '0');
//   secondsEl.innerHTML = timeObj.seconds.toString().padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }