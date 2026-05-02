(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav-list');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
  });
})();
