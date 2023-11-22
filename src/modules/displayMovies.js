import { updateLikes, addLike } from './likes.js';
import { countMovies, truncateTitle } from './counter.js';

const displayMovies = (data) => {
  const moviesSection = document.querySelector('.cards');

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
         <div class="card__image-container">
           <img class="img-card" src=${item.image.medium}
             alt="ant-man">
         </div>
         <div class="card__content">
         <div class="card-title">
         <p class="card__title text--medium">
         ${truncateTitle(item.name)}
         </p>
         <p class="card__title-rating"><i class="fa fa-star" aria-hidden="true"></i>${' '}${item.rating.average}</p>
         </div>  
           <div class="card__info">
           <button class="btn card__comments">Comments</button>
           <button class="btn card__reservations">Reservations</button>
           <button id =${item.id} class=" card__likes text--medium">Likes</button> 
           </div>
         </div>
         `;

    moviesSection.appendChild(card);
    const likesBtn = document.getElementById(`${item.id}`);

    likesBtn.addEventListener('click', () => {
      addLike(item.id);
      const num = likesBtn.textContent.split(' ');
      likesBtn.innerHTML = `${Number(num[0]) + 1} likes`;
    });
  });
  countMovies(data);
  updateLikes();
};

export default displayMovies;
