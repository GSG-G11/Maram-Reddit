const btnAdd = document.querySelector('#add-post');
const createPost = document.querySelector('#create-post');
const popularPost = document.querySelector('.popular-post');
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
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
});

fetch('/api/v1/getAllposts').then((res) => res.json()).then((data) => {
  console.log(data,"data from dom");
  data.forEach((ele) => {
    const post = document.createElement('div');
    post.className = 'post';
    popularPost.appendChild(post);
    const contentPost = document.createElement('p');
    contentPost.textContent = ele.content;
    post.appendChild(contentPost);
  });
});

