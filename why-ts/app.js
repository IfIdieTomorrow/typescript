// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} suite
 */

// user data
let user = {};
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then((response) => {
      console.log(response.data);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.email;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
