const Card = () => {
  const view = `
    <div class="card">
      <div class="card__image">
        <img src="./assets/images/profile-dummy.jpg" alt="">
      </div>
      <p class="card__name">Nombre Inventado</p>
      <button class="card__button">Seguir</button>
    </div>
  `;
  return view;
};

export default Card;