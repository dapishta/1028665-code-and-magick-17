/* eslint-disable semi */
'use strict';

(function () {
  var getNextColor = function (inputTag, array) {
    var currentColor = inputTag.value;
    var currentIndex = array.indexOf(currentColor);
    if (currentIndex === array.length - 1) {
      currentIndex = 0;
    }
    var nextIndex = currentIndex + 1;
    var nextColor = array[nextIndex];
    return nextColor;
  }

  var colorize = function (isFill, tag, inputTag, array) {
    var nextColor = getNextColor(inputTag, array);
    if (isFill) {
      tag.style.fill = nextColor;
    } else {
      tag.style.background = nextColor;
    }
    inputTag.value = nextColor;
  }

  window.colorize = colorize;

})();


