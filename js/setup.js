/* eslint-disable semi */
'use strict';

// Setting up my wizard and checking the form

(function () {
  // Variables & Constants
  var utils = window.utils;
  var colorize = window.colorize;
  var closePopup = window.closePopup;
  var data = window.data;
  var setupTag = document.querySelector('.setup');
  var submitButtonTag = setupTag.querySelector('.setup-submit');
  var formTag = setupTag.querySelector('.setup-wizard-form');
  var setupPlayerTag = setupTag.querySelector('.setup-player');
  var userWizardCoatTag = setupPlayerTag.querySelector('.wizard-coat');
  var userWizardCoatInputTag = setupPlayerTag.querySelector('input[name="coat-color"]');
  var userWizardEyesTag = setupPlayerTag.querySelector('.wizard-eyes');
  var userWizardEyesInputTag = setupPlayerTag.querySelector('input[name="eyes-color"]');
  var userFireballTag = setupPlayerTag.querySelector('.setup-fireball-wrap');
  var userFireballInputTag = userFireballTag.querySelector('input[name="fireball-color"]');

  var addPopupListeners = function () {
    submitButtonTag.addEventListener('click', onSaveBtnTagClick);
    submitButtonTag.addEventListener('keydown', onSaveBtnTagPress);
    userWizardCoatTag.addEventListener('click', onUserWizardCoatTagClick);
    userWizardEyesTag.addEventListener('click', onUserWizardEyesTagClick);
    userFireballTag.addEventListener('click', onUserFireballTagClick);
  };

  // Changing colors for wizard

  var onUserWizardCoatTagClick = function () {
    colorize(true, userWizardCoatTag, userWizardCoatInputTag, data.coatColors)
  };
  var onUserWizardEyesTagClick = function () {
    colorize(true, userWizardEyesTag, userWizardEyesInputTag, data.eyesColors)
  };
  var onUserFireballTagClick = function () {
    colorize(false, userFireballTag, userFireballInputTag, data.fireballColors)
  };

  // Saving form

  var onSaveBtnTagClick = function () {
    formTag.submit();
  };
  var onSaveBtnTagPress = function (evt) {
    utils.isEnterEvent(evt, formTag.submit);
  };

  var onSaveSuccess = function () {
    closePopup();
  };

  var onSaveError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  formTag.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.save(new FormData(formTag), onSaveSuccess, onSaveError);
  });

  window.addPopupListeners = addPopupListeners;
})();


