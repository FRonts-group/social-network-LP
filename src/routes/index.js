import Header from '../templates/Header.js'
// import Footer from '../templates/Footer.js'
// import Sidebar from '../templates/Sidebar.js'
import Home from '../pages/Home.js'
import Signup from '../pages/Signup.js'
import Login from '../pages/Login.js'
import UserHome from '../pages/UserHome.js'
import Profile from '../pages/Profile.js'
import getHash from '../lib/utils/getHash.js'
import resolveRoutes from '../lib/utils/resolveRoutes.js'

const routes = {
  '/': Home,
  '/crear-cuenta': Signup,
  '/iniciar-sesion': Login,
  '/home': UserHome,
  '/:profile': Profile
};

const router = async () => {
  const header = null || document.getElementById('header');
  const body = null || document.getElementById('body');
  const content = null || document.getElementById('content');
  header.innerHTML = await Header();
  // body.innerHTML = body.innerHTML + Footer();
  let hash = getHash();
  console.log(hash)
  let route = await resolveRoutes(hash);
  let render =routes[route] ? routes[route] : route['/'];
  content.innerHTML = await render();
}

export default router;