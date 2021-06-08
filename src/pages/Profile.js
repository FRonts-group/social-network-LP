const Profile = () => {
  const user;
  const view = `
    <div class="main-content">
      <section class="profile">
        <div class="profile__info">
          <div class="profile__image">
            <img src="assets/images/profile-dummy.jpg" alt="">
          </div>
          <p class="profile__name">${user.name}</p>
        </div>
        <div class="profile__options">
          <button class="publish">Crear Publicación</button>
          <button class="saved">Ver Guardados</button>
          <button class="logout">Cerrar Sesion</button>
        </div>
      </section>
      <section class="posts"></section>
    </div>
  `;
  return view;
};

export default Profile;