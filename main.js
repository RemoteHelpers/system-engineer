const anchors = document.querySelectorAll(
  'a[href*="#"]',
);

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor
      .getAttribute('href')
      .substr(1);

    document
      .getElementById(blockID)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  });
}

let scroll = document.querySelector(
  '.scroll-block',
);

let t;
function up() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop,
  );
  if (top > 0) {
    window.scrollBy(0, -100);
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
}
scroll.addEventListener('click', up);

let btn = document.querySelector(
  '.btn-burger__menu--span',
);
let btnblock = document.querySelector(
  '.btn-burger__menu',
);
let menu = document.querySelector(
  '.header__menu',
);
btnblock.addEventListener('click', function () {
  menu.classList.toggle('burger-menu_active');
  btn.classList.toggle('active-burger');
});
