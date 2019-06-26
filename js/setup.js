/* eslint-disable semi */
'use strict';

// Setting up my wizard and checking the form

(function () {
  // Variables & Constants
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

  window.addPopupListeners = function () {
    submitButtonTag.addEventListener('click', onSaveBtnTagClick);
    submitButtonTag.addEventListener('keydown', onSaveBtnTagPress);
    userWizardCoatTag.addEventListener('click', onUserWizardCoatTagClick);
    userWizardEyesTag.addEventListener('click', onUserWizardEyesTagClick);
    userFireballTag.addEventListener('click', onUserFireballTagClick);
  };

  // Changing colors for wizard

  var onUserWizardCoatTagClick = function () {
    window.colorize(true, userWizardCoatTag, userWizardCoatInputTag, window.data.coatColors)
  };
  var onUserWizardEyesTagClick = function () {
    window.colorize(true, userWizardEyesTag, userWizardEyesInputTag, window.data.eyesColors)
  };
  var onUserFireballTagClick = function () {
    window.colorize(false, userFireballTag, userFireballInputTag, window.data.fireballColors)
  };

  // Saving form

  var onSaveBtnTagClick = function () {
    formTag.submit();
  };
  var onSaveBtnTagPress = function (evt) {
    window.util.isEnterEvent(evt, formTag.submit);
  };
})();


