const Post = () => {
  const post;
  const user;
  const view = `
    <div class="post">
      <div class="post__author">
        <div class="post__author-image">
          <img src="./assets/images/profile-dummy.jpg" alt="Author image">
        </div>
        <p class="post__author-name">${user.name}</p>
      </div>
      <p class="post__content">${post.content}</p>
      <div class="post__images">
        <img src="${post.image}" alt="post image 1">
      </div>
      <div class="post__reactions">
        <button class="post__button"><span class="post__hearth"></span><span class="post__likes-count">10</span> Me gusta</button>
        <button class="post__button"><span class="post__bookmark"></span>Guardar</button>
      </div>
    </div>
  `;
  return view;
};

export default Post;