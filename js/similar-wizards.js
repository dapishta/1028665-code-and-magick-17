/* eslint-disable semi */
'use strict';

// Creating and showing other wizards
(function () {

  var SIMILAR_WIZARDS_NUMBER = 4;

  // Create mock data for wizards
  var createMockData = function (numberOfObjects) {
    var array = [];
    for (var i = 0; i < numberOfObjects; i++) {
      array[i] = {
        name: window.util.getRandomString(window.data.names),
        surname: window.util.getRandomString(window.data.surnames),
        coatColors: window.util.getRandomString(window.data.coatColors),
        eyesColors: window.util.getRandomString(window.data.eyesColors)
      }
    }
    return array;
  };

  // Add wizards to fragment
  var createDOMElements = function (array) {
    var fragmentTag = document.createDocumentFragment();
    var similarWizardItemTag = document.querySelector('#similar-wizard-template').content.querySelector('div.setup-similar-item');
    var similarLabelTag = similarWizardItemTag.querySelector('.setup-similar-label');
    var similarWizardCoatTag = similarWizardItemTag.querySelector('.wizard-coat');
    var similarWizardEyesTag = similarWizardItemTag.querySelector('.wizard-eyes');


    for (var i = 0; i < array.length; i++) {
      similarLabelTag.textContent = array[i].name + ' ' + array[i].surname;
      similarWizardCoatTag.style.fill = array[i].coatColors;
      similarWizardEyesTag.style.fill = array[i].eyesColors;
      fragmentTag.appendChild(similarWizardItemTag.cloneNode(true));
    }
    // similarListTag.appendChild(fragmentTag);

    return fragmentTag;
  }

  // Render similar wizards section

  var renderSimilarWizardsSection = function (number) {
    var similarSectionTag = document.querySelector('.setup-similar');
    var similarListTag = document.querySelector('.setup-similar-list');
    var wizards = createMockData(number);
    var createdWizardsFragmnetTag = createDOMElements(wizards);
    window.util.insertTag(createdWizardsFragmnetTag, similarListTag)
    window.util.removeClass(similarSectionTag, 'hidden');
  }

  renderSimilarWizardsSection(SIMILAR_WIZARDS_NUMBER);

})();
