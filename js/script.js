const randomBG = () => {
  const imgs = [
    "url(./img/bg-1.jpg)",
    "url(./img/bg-2.jpg)",
    "url(./img/bg-3.jpg)",
    "url(./img/bg-4.jpg)",
  ];
  const bg = imgs[Math.floor(Math.random() * imgs.length)];
  document.querySelector(".hero").style.backgroundImage = bg;
};
setInterval(randomBG, 2000);
