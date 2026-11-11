// АИ-52 этап 1. Единственная задача скрипта — «Скопировать»: в буфер ровно текст блока (RULE-292).
// Сетевых запросов, счётчиков и cookie нет.
(function () {
  [].forEach.call(document.querySelectorAll('.copy'), function (c) {
    c.addEventListener('click', function () {
      var t = c.closest('.blk').querySelector('pre').textContent;
      var done = function () { c.textContent = 'Скопировано'; setTimeout(function () { c.textContent = 'Скопировать'; }, 2000); };
      var fail = function () { c.textContent = 'Не скопировалось — выделите текст вручную'; setTimeout(function () { c.textContent = 'Скопировать'; }, 4000); };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(done, fail); } else { fail(); }
    });
  });
})();
