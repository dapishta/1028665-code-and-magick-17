/* eslint-disable semi */
'use strict';

// Opening and closing the pop-up

(function () {
  var utils = window.utils;
  var setupTag = document.querySelector('.setup');
  var userAvatarTag = document.querySelector('.setup-open');
  var closeIconTag = setupTag.querySelector('.setup-close');

  var openPopup = function () {
    window.addPopupListeners();
    setupTag.style.top = '80px';
    setupTag.style.left = '50%';
    utils.removeClass(setupTag, 'hidden');
    document.addEventListener('keydown', onPopupEscTagPress);
  };

  var closePopup = function () {
    utils.addClass(setupTag, 'hidden');
    document.removeEventListener('keydown', onPopupEscTagPress);
  };

  // Event handlers

  var onUserAvatarTagClick = function () {
    openPopup();
  };

  var onUserAvatarTagPress = function (evt) {
    utils.isEnterEvent(evt, openPopup)
  };

  var onCloseIconTagClick = function () {
    closePopup();
  };

  var onCloseIconTagPress = function (evt) {
    utils.isEnterEvent(evt, closePopup)
  };

  var onPopupEscTagPress = function (evt) {
    utils.isEscEvent(evt, closePopup)
  }

  userAvatarTag.addEventListener('click', onUserAvatarTagClick);
  userAvatarTag.addEventListener('keydown', onUserAvatarTagPress);
  closeIconTag.addEventListener('click', onCloseIconTagClick);
  closeIconTag.addEventListener('keydown', onCloseIconTagPress);

})();


// Dragging pop-up

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

