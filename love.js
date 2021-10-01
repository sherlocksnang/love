setInterval(() => {
  // create heart element
  const heart = document.createElement('div');
  heart.innerText = '💓';
  // add class
  heart.classList.add('heart');
  // random left
  heart.style.left = Math.floor(Math.random() * 100) + 'vw';
  // random animation duration
  heart.style.animationDuration = Math.floor(Math.random() * 2) + 3 + 's';
  // append element to body
  document.body.append(heart);
  // remove heart
  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);