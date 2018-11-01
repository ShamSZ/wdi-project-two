function navMenu(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#'+burger.dataset.target);
  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
}
navMenu();

const allLinks = document.querySelectorAll('.nav-item');
const allStars = document.querySelectorAll('label.rating-star');

allStars.forEach(label => label.addEventListener('click', toggleActive));
allLinks.forEach(link => link.addEventListener('click', toggleActiveLink));

function toggleActive(e){
  allStars.forEach(label => label.classList.remove('is-active'));
  e.target.classList.add('is-active');
}

function toggleActiveLink(e){
  allLinks.forEach(link => link.classList.remove('is-active'));
  e.target.classList.add('is-active');
}
