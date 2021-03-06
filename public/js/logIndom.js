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
    .then(() => {
      // console.log(data);
      window.location.href = '/home';
    })
    .catch((err) => {
      console.log(err);
    });
});
