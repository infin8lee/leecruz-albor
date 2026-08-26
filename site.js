document.getElementById('yr').textContent = new Date().getFullYear();
var nav = document.getElementById('nav');
var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 12); };
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
