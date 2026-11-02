/* PetCare — interacciones mínimas del prototipo (sin lógica de negocio) */
(function () {
  // Botones tipo "pill" que se excluyen dentro de un grupo
  document.querySelectorAll('[data-toggle-group]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var g = b.getAttribute('data-toggle-group');
      document.querySelectorAll('[data-toggle-group="' + g + '"]').forEach(function (o) { o.classList.remove('on'); o.setAttribute('aria-pressed', 'false'); });
      b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
    });
  });
  // Pills de selección múltiple
  document.querySelectorAll('[data-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on')); });
  });
  // Quitar filtros activos (HU03: "El usuario debe poder retirar los filtros")
  document.querySelectorAll('[data-chip]').forEach(function (c) { c.addEventListener('click', function () { c.remove(); }); });
  document.querySelectorAll('[data-clear]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); document.querySelectorAll('[data-chip]').forEach(function (c) { c.remove(); }); });
  });
  // Selección de fecha y hora
  document.querySelectorAll('.cal button:not([disabled])').forEach(function (b) {
    b.addEventListener('click', function () { document.querySelectorAll('.cal button.sel').forEach(function (o) { o.classList.remove('sel'); }); b.classList.add('sel'); });
  });
  document.querySelectorAll('.slot:not([disabled])').forEach(function (b) {
    if (b.tagName !== 'BUTTON') return;
    b.addEventListener('click', function () { document.querySelectorAll('.slot.sel').forEach(function (o) { o.classList.remove('sel'); }); b.classList.add('sel'); });
  });
  // Mostrar/ocultar filtros en móvil
  var ft = document.querySelector('[data-filter-toggle]');
  if (ft) ft.addEventListener('click', function () { var p = document.getElementById('filtros'); var o = p.classList.toggle('open'); ft.setAttribute('aria-expanded', o); });
  // Calificación con estrellas
  var r = document.querySelector('[data-rating]');
  if (r) {
    var labels = ['', 'Malo', 'Regular', 'Bueno', 'Muy bueno', 'Excelente'];
    var out = document.querySelector('[data-rating-label]');
    r.querySelectorAll('button').forEach(function (b, i) {
      b.addEventListener('click', function () {
        r.querySelectorAll('button').forEach(function (o, j) { o.classList.toggle('on', j <= i); });
        if (out) out.textContent = (i + 1) + ' de 5 · ' + labels[i + 1];
      });
    });
  }
})();
