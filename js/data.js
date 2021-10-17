const URL = 'https://codeforces.com/api/'
let handle;

const submitButton = document.querySelector('.form__button');
let formInput = document.getElementById('handle');

submitButton.addEventListener('click', function() {
  handle = formInput.value;
  console.log(handle);
})


// function getUser(handle) {
//   axios(`${URL}user.info?handles=${handle}`)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// };
// getUser(handle);