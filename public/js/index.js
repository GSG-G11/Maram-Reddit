const popularPost = document.querySelector('.popular-post');

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