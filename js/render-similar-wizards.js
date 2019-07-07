/* eslint-disable semi */
'use strict';


(function () {

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var similarLabelTag = wizardElement.querySelector('.setup-similar-label');
    var similarWizardCoatTag = wizardElement.querySelector('.wizard-coat');
    var similarWizardEyesTag = wizardElement.querySelector('.wizard-eyes');

    similarLabelTag.textContent = wizard.name;
    similarWizardCoatTag.style.fill = wizard.colorCoat;
    similarWizardEyesTag.style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var renderSimilarWizards = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  }


  window.renderSimilarWizards = renderSimilarWizards;
})();
