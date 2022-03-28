const email = document.querySelector('#email');
const password = document.querySelector('#password');
const login = document.querySelector('#btn');

login.addEventListener('click', () => {
  fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
