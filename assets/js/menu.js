// Polyfill NodeList.forEach for IE.
// @see
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.addEventListener('DOMContentLoaded', function () {
  // Scroll to the given selector.
  var scrollToNode = function (selector) {
    console.log(selector);
    const element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: (element.offsetTop),
        behavior: 'smooth'
      });
    }
  };

  // Initializes the menu and attaches event listeners.
  (function () {
    menu = document.querySelector('#menu');

    if (!menu) {
      return;
    }

    menu.querySelectorAll('li a')
      .forEach(function (item) {
        item.addEventListener('click', function (ev) {
          scrollToNode(item.getAttribute('href'));
          ev.preventDefault();
        });
      })
  })();
});

