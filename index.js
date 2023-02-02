const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const data = getData("https://jsonplaceholder.typicode.com/comments");

const totalCards = data.length || 500;
// console.log(totalCards);

const cardContainer = document.getElementById("card-container");
const caLoader = document.getElementById("card-animation-loader");
const loadCards = 10;

const count = Math.ceil(totalCards / loadCards);

let currPage = 1;

const genRandomColor = () => {
  const x = Math.floor(Math.random() * 360);
  return `hsl(${x}deg, 90%, 85%)`;
};

const createCard = (index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = index;
  card.style.backgroundColor = genRandomColor();
  cardContainer.appendChild(card);
};

const addCards = (idx) => {
  currPage = idx;
  const sr = (idx - 1) * loadCards;
  const er = currPage === count ? totalCards : idx * loadCards;
  for (let i = sr + 1; i <= er; i++) {
    createCard(i);
  }
};

window.onload = function () {
  addCards(currPage);
};

const handleScroll = () => {
  throttlefun(() => {
    const endPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endPage) {
      addCards(currPage + 1);
    }
  }, 1000);
};

window.addEventListener("scroll", handleScroll);

let throttle;

const throttlefun = (cb, timer) => {
  if (throttle) {
    return;
  }
  throttle = true;
  setTimeout(() => {
    cb();
    throttle = false;
  }, timer);
};

const removeScroll = () => {
  l;
};
