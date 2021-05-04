const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById ('ul.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classlist.toggle('show');
});