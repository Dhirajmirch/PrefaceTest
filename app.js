

const cardsGrid = document.querySelector('.cards-grid');
const data = require('./data.json');

data.forEach(card => {
  const element = document.createElement('div');
  element.classList.add('card');
  element.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.description}</p>
  `;
  cardsGrid.appendChild(element);
});
