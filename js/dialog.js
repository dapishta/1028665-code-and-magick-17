/* eslint-disable semi */
'use strict';

(function () {
  var setupTag = document.querySelector('.setup');
  var dialogHandlerTag = setupTag.querySelector('.upload');

  dialogHandlerTag.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupTag.style.top = (setupTag.offsetTop - shift.y) + 'px';
      setupTag.style.left = (setupTag.offsetLeft - shift.x) + 'px';
    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (dragEvt) {
          dragEvt.preventDefault();
          dialogHandlerTag.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandlerTag.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  })

})();

