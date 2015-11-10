(function() {
 var shrinkHeader = 80;
 var lastScroll = 0;
 window.onscroll = function() {
    var scroll = getCurrentScroll();
    if (scroll > lastScroll){
     // Down scroll
     addClass('.header', ' shrink')
    //  document.querySelector('.header').addClass('shrink');
    } else {
      // Up scroll
      if (scroll <= shrinkHeader) {
        removeClass('.header', ' shrink')
        // document.querySelector('.header').removeClass('shrink');
      }
    }
    lastScroll = scroll
  };
  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
  }
  function addClass(className, classToAdd) {
    var elem;
    elem = document.querySelector(className);
    elem.className = elem.className.replace(classToAdd, "");
    elem.className = elem.className + classToAdd;
  }

  function removeClass(className, classToRemove) {
    var elem;
    elem = document.querySelector(className);
    elem.className = elem.className.replace('shrink', "");
  }
})();
