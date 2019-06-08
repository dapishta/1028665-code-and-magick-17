/* eslint-disable semi */
'use strict';

// Call all needed tags
var SETUP_TAG = document.querySelector('.setup');
var SIMILAR_SECTION_TAG = document.querySelector('.setup-similar');
var SIMILAR_LIST_TAG = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_ITEM = document.querySelector('#similar-wizard-template').content.querySelector('div.setup-similar-item');
var SIMILAR_LABEL_TAG = SIMILAR_WIZARD_ITEM.querySelector('.setup-similar-label');
var SIMILAR_WIZARD_COAT_TAG = SIMILAR_WIZARD_ITEM.querySelector('.wizard-coat');
var SIMILAR_WIZARD_EYES_TAG = SIMILAR_WIZARD_ITEM.querySelector('.wizard-eyes');
var fragment = document.createDocumentFragment();
var SIMILAR_WIZARDS_NUMBER = 4;


// Data
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


// Get random string
var getRandomString = function (data) {
  var result = Math.floor(Math.random() * data.length);
  return data[result];
};


// Create ramdom wizards & render wizards and add them to fragment

for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
  var wizards = [];
  wizards[i] = {
    name: getRandomString(NAMES),
    surname: getRandomString(SURNAMES),
    coatColor: getRandomString(COAT_COLOR),
    eyesColor: getRandomString(EYES_COLOR)
  }
  SIMILAR_LABEL_TAG.textContent = wizards[i].name + ' ' + wizards[i].surname;
  SIMILAR_WIZARD_COAT_TAG.style.fill = wizards[i].coatColor;
  SIMILAR_WIZARD_EYES_TAG.style.fill = wizards[i].eyesColor;
  fragment.appendChild(SIMILAR_WIZARD_ITEM.cloneNode(true));
}

SIMILAR_LIST_TAG.appendChild(fragment);


// Show the pop-up and similar section
SETUP_TAG.classList.remove('hidden');
SIMILAR_SECTION_TAG.classList.remove('hidden');

