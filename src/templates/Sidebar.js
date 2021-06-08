const Sidebar = () => {
  const view = `
    <aside class="bar-menu only-desktop">
      <div class="bar-menu__options-container">
        <a href="" class="bar-menu__option selected"><span class="home-logo"></span>Inicio</a>
        <a href="" class="bar-menu__option"><span class="profile-logo"></span>Perfil</a>
        <a href="" class="bar-menu__option"><span class="bookmark-logo"></span>Mis Guardados</a>
        <a href="" class="bar-menu__option"><span class="logout-logo"></span>Cerrar Sesion</a>
      </div>
    </aside>
  `;
  return view
};

export default Sidebar