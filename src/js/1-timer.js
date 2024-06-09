import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/symbol-defs.svg';

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  btnEl: document.querySelector('[data-start]'),
  // timerEl: document.querySelector('.timer')
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
// console.log(refs);

let userSelectedDate;
let intervalId;
refs.btnEl.disabled = true;

refs.btnEl.addEventListener('click', event => {
  intervalId = setInterval(() => {
    const diffTime = userSelectedDate - Date.now();

    const converTime = convertMs(diffTime);
    const toStringTime = addLeadingZero(converTime);
    // console.log(toStringTime);

    refs.daysEl.textContent = toStringTime.d;
    refs.hoursEl.textContent = toStringTime.h;
    refs.minutesEl.textContent = toStringTime.m;
    refs.secondsEl.textContent = toStringTime.s;

    refs.inputEl.disabled = true;
    refs.btnEl.disabled = true;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    refs.inputEl.disabled = false;
  }, userSelectedDate - Date.now());
});

function addLeadingZero({ days, hours, minutes, seconds }) {
  const d = days.toString().padStart(2, '0');
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');
  return { d, h, m, s };
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '0.03em',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '0.03em',
        position: 'topCenter',
        backgroundColor: '#ef4040',
        theme: 'dark',
        icon: 'iziToast-icon',
        iconUrl: imageUrl,
        iconColor: '#FAFAFB',
      });

    } else {
      refs.btnEl.disabled = false;
      return userSelectedDate;
    }
  },
};

const fp = flatpickr(refs.inputEl, options);
