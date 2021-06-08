const Header = () => {
  const view = `
    <div class="header--container">
      <a class="only-desktop" href="#"><h2>Guía de La Paz</h2></a>
      <a class="only-mobile" href="#"><h2>La Paz</h2></a>
    </div>
    <div class="header--container">
      <div class="iconLeft">
        <a href="index.html"> <i></i> Iniciar Sesión</a>
      </div>
    </div>
  `;
  return view;
};

export default Header;