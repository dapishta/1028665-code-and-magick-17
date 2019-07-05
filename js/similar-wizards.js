/* eslint-disable semi */
'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var load = window.load;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var similarLabelTag = wizardElement.querySelector('.setup-similar-label');
    var similarWizardCoatTag = wizardElement.querySelector('.wizard-coat');
    var similarWizardEyesTag = wizardElement.querySelector('.wizard-eyes');

    similarLabelTag.textContent = wizard.name;
    similarWizardCoatTag.style.fill = wizard.colorCoat;
    similarWizardEyesTag.style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var onLoadSuccess = function (wizards) {
    var fragmentTag = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragmentTag.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragmentTag);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onLoadError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  load(onLoadSuccess, onLoadError);

})();

