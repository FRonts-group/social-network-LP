const Login = () => {
  const view = `
    <div class="wrapper">
      <div class="form--container">
        <h1>Guía de <br> La Paz</h1>
        <h2>Iniciar Sesión</h2>
        <div class="input--container">
          <p>Correo Electrónico</p>
          <label class="email-input--container" for="email">
              <span class="logo-container"></span>
              <input type="email" id="email" placeholder=" ejemplo@gmail.com" autocomplete="off">
          </label>
          <p>Contraseña</p>
          <label class="password-input--container" for="password">
            <span class="logo-container"></span>
            <input type="password" id="password" placeholder=" ***** " autocomplete="off">
          </label>
        </div>
        <button id="primary-button">Iniciar Sesión</button>
        <p>También puedes iniciar sesión con:</p>
        <div class="row">
          <div class="login-socialNetwork"></div>
          <div class="login-socialNetwork"></div>
        </div>
        <p>Si aún no tienes una cuenta  <a href="#">Registrate aqui</a></p>
      </div>
    </div>
  `;
  return view;
};

export default Login;