'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function promises() {
  const promiseOne = new Promise((resolve) => {
    logo.addEventListener('click', () => resolve('Promise was resolved!'));
  });

  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promiseOne
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;
      body.append(div);
    })
    .catch((err) => {
      const div = document.createElement('div');

      div.classList.add('message error-message');
      div.textContent = err.message;
      body.append(div);
    });

  promiseTwo
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = message;
      body.append(div);
    })
    .catch((err) => {
      const div = document.createElement('div');

      div.classList.add('message', 'error-message');
      div.textContent = err.message;
      body.append(div);
    });
}

promises();
