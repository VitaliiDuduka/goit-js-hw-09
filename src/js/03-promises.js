function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// const refs = {
//   delayInput: document.querySelector('input[name="delay"]'),
//   stepInput: document.querySelector('input[name="step"]'),
//   amountInput: document.querySelector('input[name="amount"]'),
//   formEl: document.querySelector('.form'),
// };

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// refs.formEl.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const delay = parseInt(refs.delayInput.value);
//   const step = parseInt(refs.stepInput.value);
//   const amount = parseInt(refs.amountInput.value);

//   for (let i = 0; i < amount; i++) {
//     const position = i + 1;
//     const currentDelay = delay + i * step;

//     createPromise(position, currentDelay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }

//   clearInputs();
// }

// function clearInputs() {
//   refs.delayInput.value = '';
//   refs.stepInput.value = '';
//   refs.amountInput.value = '';
// }