console.log("handle");

const axios = require('axios').default;

const URL = 'https://codeforces.com/api/';

const userInput = document.querySelector('.form__input');
const submitButton = document.querySelector('.form__button');

const handle;

submitButton.addEventListener('click', getHandle);

function getHandle() {
  handle = userInput.textContent;
}

console.log(handle);


async function getUser() {
  try {
    const response = await axios.get(`${URL}user.info`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}