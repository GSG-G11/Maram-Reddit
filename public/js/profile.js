const id = window.location.href.split('/')[4];
console.log(id);
const btnAdd = document.querySelector('#add-post');
const createPost = document.querySelector('#create-post');
const popularPost = document.querySelector('.popular-post');
// btnAdd.addEventListener('click', (e) => {
//   e.preventDefault();
//   fetch('/api/v1/addPost', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       content: createPost.value,
//     }),
//   }).then((data) => {
//     console.log(data);
//     if (data.status === 201) {
//       swal('success', 'add post successfully', 'success');
//     } else {
//       swal('error', 'Soory Some thing error', 'error');
//     }
//   }).catch((err) => {
//     swal('error','Soory Some thing error', 'error');
//   });
// });

fetch(`/api/v1/user/${id}/profile`).then((res) => res.json()).then((data) => {
  console.log(data);
  data.forEach((ele) => {
    const a = document.createElement('a');
    a.href = `/posts/${ele.id}/show`;
    a.className = 'show';
    popularPost.appendChild(a);
    const post = document.createElement('div');
    post.className = 'post';
    a.appendChild(post);
    const userProfile = document.createElement('a');
    userProfile.href = `/user/${ele.user_id}/myProfile`;
    post.appendChild(userProfile);
    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = `posted by ${ele.user_name}`;
    userProfile.appendChild(username);
    const contentPost = document.createElement('p');
    contentPost.textContent = ele.content;
    post.appendChild(contentPost);
  });
});
