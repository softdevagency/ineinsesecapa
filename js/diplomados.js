(function () {
  'use strict';
  var search = document.getElementById('inein-buscar');
  var filter = document.getElementById('inein-filtrar');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#inein-cards .inein-course-card'));
  var counter = document.getElementById('inein-resultados');
  var empty = document.getElementById('inein-empty');
  if (!search || !filter || !cards.length) return;
  function normalize(value) {
    return (value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function update() {
    var query = normalize(search.value.trim());
    var selected = filter.value;
    var count = 0;
    cards.forEach(function (card) {
      var categoryMatches = selected === 'Todas' || card.getAttribute('data-category') === selected;
      var textMatches = !query || normalize(card.textContent).indexOf(query) !== -1;
      var show = categoryMatches && textMatches;
      card.hidden = !show;
      if (show) count += 1;
    });
    counter.textContent = count + (count === 1 ? ' diplomado disponible' : ' diplomados disponibles');
    empty.hidden = count > 0;
  }
  search.addEventListener('input',update);
  filter.addEventListener('change',update);
  update();
})();
