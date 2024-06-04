let nav = false;
const navBtn = document.querySelector('#nav-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');
const menuInner = document.querySelector('#menu-inner');

navBtn.addEventListener('click', function () {
  nav = !nav;
  if (nav) {
    menu.className = 'fixed right-0 top-0 bg-black/70';
    menuInner.className =
      'fixed right-0 top-0 ease-in duration-500 bg-black p-10 shadow-md shadow-gray-500 rounded-[40px]';
  }
  if (!nav) {
    menu.className = 'hidden';
    menuInner.className = 'fixed right-[-100%] top-0 ease-in duration-500 p-10';
  }
});

closeMenuBtn.addEventListener('click', function () {
  nav = false;
  menu.className = 'hidden';
  menuInner.className = 'fixed right-[-100%] top-0 ease-in duration-500 p-10';
});
