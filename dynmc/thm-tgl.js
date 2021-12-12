document.getElementById('thm-btn').addEventListener('click', function () {
  let g6802t = document.body.classList.toggle('dark-theme');
  localStorage.setItem('g6802t', g6802t);
}); 

if(JSON.parse(localStorage.getItem('g6802t')) === false) {
  document.body.classList.remove('dark-theme');
}
