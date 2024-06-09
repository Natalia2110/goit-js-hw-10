
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import rejectImgUrl from '../img/alert-icon.svg';
import resolveImgUrl from '../img/resolve-icon.svg';

const formEl = document.querySelector('form');
console.log(formEl);


function createPromise(event) {
    event.preventDefault();

    const formData = new FormData(formEl);
    const delay = formData.get('delay');
    const status = formData.get('state');

    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
          resolve(delay);
        //   console.log(`✅ Fulfilled promise in ${delay}ms`);
      } else {
          reject(delay);
        //   console.log(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
    });
    promise.then(onFulfilled).catch(onRejected);
    // console.log(promise);

    
};
function onFulfilled(delay) {
    iziToast.show({
        title: 'Ok',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '0.03em',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '0.03em',
        position: 'topRight',
        backgroundColor: '#59a10d',
        theme: 'dark',
        iconUrl: resolveImgUrl,
        iconColor: '#FAFAFB',
    })
};

function onRejected(delay) {
    iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '0.03em',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '0.03em',
        position: 'topRight',
        backgroundColor: '#ef4040',
        theme: 'dark',
        iconUrl: rejectImgUrl,
        iconColor: '#FAFAFB',
    })
};

formEl.addEventListener('submit', createPromise);