(function () {
  // Y/N toggle behaviour
  document.querySelectorAll('.yn[data-flag]').forEach(group => {
    const [y, n] = group.querySelectorAll('button');
    y.addEventListener('click', () => { y.classList.add('on-y'); n.classList.remove('on-n'); });
    n.addEventListener('click', () => { n.classList.add('on-n'); y.classList.remove('on-y'); });
  });
})();
