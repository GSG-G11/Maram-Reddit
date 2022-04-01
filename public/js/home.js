const btnAdd = document.querySelector('#add-post');
const createPost = document.querySelector('#create-post');
const popularPost = document.querySelector('.popular-post');
const nav = document.querySelector('.nav');
const auth = document.querySelector('.auth');
// const authParent = document.querySelector('.auth').parentElement;
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/api/v1/addPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: createPost.value,
    }),
  }).then((data) => {
    if (data.status === 201) {
      swal('success', 'add post successfully', 'success');
    } else {
      swal('error', 'Soory Some thing error', 'error');
    }
  }).catch((err) => {
    swal('error','Soory Some thing error', 'error');
  });
});

fetch('/api/v1/getAllposts').then((res) => res.json()).then((data) => {
  data.forEach((ele) => {
    const a = document.createElement('a');
    a.href = `/posts/${ele.id}/show`;
    popularPost.appendChild(a);
    const post = document.createElement('div');
    post.className = 'post';
    a.appendChild(post);
    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = `posted by ${ele.user_name}`;
    post.appendChild(username);
    const contentPost = document.createElement('p');
    contentPost.textContent = ele.content;
    post.appendChild(contentPost);
  });
});
fetch('/api/v1/user').then((res) => res.json()).then((data) => {
  const username = document.createElement('span');
  nav.insertBefore(username, auth);
  username.textContent = `Welcome ${data}`;
  nav.appendChild(username);
});
