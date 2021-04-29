
const ending = document.querySelector('.bx-x'),
    missing = document.querySelector('#pop_missing');;
window.onload = function (){
  setTimeout(function (){
    missing.classList.toggle('show-missing');
  } , 2000)
}
ending.addEventListener('click', () => {
  missing.classList.remove('show-missing')
});

