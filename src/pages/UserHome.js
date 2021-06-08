const UserHome = () => {
  const view = `
    <div class="main-content">
      <section class="home-options">
        <div class="show-posts--options">
          <button disabled><span></span>Ver publicación</button>
          <button><span></span>Ver en mapa</button>
        </div>
        <button class="create-post"><span></span>Crear publicación</button>
      </section>
      <section class="posts"></section>
    </div>
  `;
  return view;
};

export default UserHome;