const popularPost = document.querySelector('.popular-post');

fetch('/api/v1/getAllposts').then((res) => res.json()).then((data) => {
  data.forEach((ele) => {
    const post = document.createElement('div');
    post.className = 'post';
    popularPost.appendChild(post);
    const join = document.createElement('a');
    join.className = 'join';
    join.textContent = 'Join';
    join.href = '/signup';
    post.appendChild(join);
    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = `posted by ${ele.user_name}`;
    post.appendChild(username);
    join.setAttribute = ('href', '/signUp');
    const contentPost = document.createElement('p');
    contentPost.textContent = ele.content;
    post.appendChild(contentPost);
  });
});
