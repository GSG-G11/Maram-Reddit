const singlePost = document.querySelector('.single-post');
const id = window.location.href.split('/')[4];
console.log(id);

fetch(`/api/v1/posts/${id}`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
}).then((res) => res.json()).then((data) => {
  const post = document.createElement('div');
  post.className = 'post';
  singlePost.appendChild(post);
  const username = document.createElement('span');
  username.className = 'username';
  username.textContent = `posted by ${data.user_name}`;
  post.appendChild(username);
  const contentPost = document.createElement('p');
  contentPost.textContent = data.content;
  post.appendChild(contentPost);
});
