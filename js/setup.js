/* eslint-disable semi */
'use strict';

// Variables
var setupTag = document.querySelector('.setup');
var SIMILAR_WIZARDS_NUMBER = 4;

// Data
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


// Get random string
var getRandomString = function (data) {
  var result = Math.floor(Math.random() * data.length);
  return data[result];
};


// Remove class
var removeClass = function (tag, className) {
  tag.classList.remove(className);
}


// Create mock data for wizards
var createMockData = function (numberOfObjects) {
  var array = [];
  for (var i = 0; i < numberOfObjects; i++) {
    array[i] = {
      name: getRandomString(names),
      surname: getRandomString(surnames),
      coatColor: getRandomString(coatColor),
      eyesColor: getRandomString(eyesColor)
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
    similarWizardCoatTag.style.fill = array[i].coatColor;
    similarWizardEyesTag.style.fill = array[i].eyesColor;
    fragmentTag.appendChild(similarWizardItemTag.cloneNode(true));
  }
  // similarListTag.appendChild(fragmentTag);
  return fragmentTag;
}

// Insert tag inside other tag
var insertTag = function (tagToBeInserted, tagWhereToInsert) {
  tagWhereToInsert.appendChild(tagToBeInserted);
};


// Render similar wizards section

var renderSimilarWizardsSection = function (number) {
  var similarSectionTag = document.querySelector('.setup-similar');
  var similarListTag = document.querySelector('.setup-similar-list');
  var wizards = createMockData(number);
  var createdWizardsFragmnetTag = createDOMElements(wizards);
  insertTag(createdWizardsFragmnetTag, similarListTag)
  removeClass(similarSectionTag, 'hidden');
}

removeClass(setupTag, 'hidden');
renderSimilarWizardsSection(SIMILAR_WIZARDS_NUMBER);

