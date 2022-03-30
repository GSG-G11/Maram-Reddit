const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signBtn = document.querySelector('#btn');
signBtn.addEventListener('click', () => {
  fetch('/auth/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_name: username.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    if (data.message === 'you are signed up successfully'){
         window.location.href = '/home';
    } else {
      swal('error',data.message, 'error');
    }
    })
    .catch((err) => {
      console.log(err);
    });
});
