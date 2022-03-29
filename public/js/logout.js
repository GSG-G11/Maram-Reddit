const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
    });
});
