import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const promisesNumber = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('.form');

submitBtn.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  const delayValue = parseInt(firstDelay.value);
  const stepValue = parseInt(stepDelay.value);
  const amountValue = parseInt(promisesNumber.value);
  for (let i = 0; i < amountValue; i += 1){
    const promiseNumber = i + 1;
    const currentTime = delayValue + i * stepValue;

    createPromise(promiseNumber, currentTime)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    timeout: 7000,
  },);
  })
      .catch(({ position, delay }) => {
   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    timeout: 7000,
  },);
  });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
