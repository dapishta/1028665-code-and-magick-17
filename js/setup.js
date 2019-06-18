/* eslint-disable semi */
'use strict';

// Variables & Constants
var setupTag = document.querySelector('.setup');
var userAvatarTag = document.querySelector('.setup-open');
var closeIconTag = setupTag.querySelector('.setup-close');
var submitButtonTag = setupTag.querySelector('.setup-submit');
var formTag = setupTag.querySelector('.setup-wizard-form');
var setupPlayerTag = setupTag.querySelector('.setup-player');
var userWizardCoatTag = setupPlayerTag.querySelector('.wizard-coat');
var userWizardCoatInputTag = setupPlayerTag.querySelector('input[name="coat-color"]');
var userWizardEyesTag = setupPlayerTag.querySelector('.wizard-eyes');
var userWizardEyesInputTag = setupPlayerTag.querySelector('input[name="eyes-color"]');
var userFireballTag = setupPlayerTag.querySelector('.setup-fireball-wrap');
var userFireballInputTag = userFireballTag.querySelector('input[name="fireball-color"]');
var SIMILAR_WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


// Data
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Get random string
var getRandomString = function (data) {
  var result = Math.floor(Math.random() * data.length);
  return data[result];
};


// Remove and class
var removeClass = function (tag, className) {
  tag.classList.remove(className);
}

var addClass = function (tag, className) {
  tag.classList.add(className);
}


// Create mock data for wizards
var createMockData = function (numberOfObjects) {
  var array = [];
  for (var i = 0; i < numberOfObjects; i++) {
    array[i] = {
      name: getRandomString(names),
      surname: getRandomString(surnames),
      coatColors: getRandomString(coatColors),
      eyesColors: getRandomString(eyesColors)
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

renderSimilarWizardsSection(SIMILAR_WIZARDS_NUMBER);


// Open and close the pop-up

var openPopup = function (tag) {
  removeClass(tag, 'hidden');
  document.addEventListener('keydown', onPopupEscTagPress);
  submitButtonTag.addEventListener('click', onSaveBtnTagClick);
  submitButtonTag.addEventListener('keydown', onSaveBtnTagPress);
  userWizardCoatTag.addEventListener('click', onUserWizardCoatTagClick);
  userWizardEyesTag.addEventListener('click', onUserWizardEyesTagClick);
  userFireballTag.addEventListener('click', onUserFireballTagClick);
};

var closePopup = function (tag) {
  addClass(tag, 'hidden');
  document.removeEventListener('keydown', onPopupEscTagPress);
};

// Event handlers

var onUserAvatarTagClick = function () {
  openPopup(setupTag);
};

var onUserAvatarTagPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup(setupTag);
  }
};

var onCloseIconTagClick = function () {
  closePopup(setupTag);
};

var onCloseIconTagPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup(setupTag);
  }
};

var onPopupEscTagPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup(setupTag);
  }
}

var onSaveBtnTagClick = function () {
  formTag.submit();
};

var onSaveBtnTagPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    formTag.submit();
  }
};


// Function to get next color to setup coat, eyes and fireball.

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

// Function to set the color as fill if true or as background if false.

var changeColor = function (isFill, tag, inputTag, array) {
  var nextColor = getNextColor(inputTag, array);
  if (isFill) {
    tag.style.fill = nextColor;
  } else {
    tag.style.background = nextColor;
  }
  inputTag.value = nextColor;
}


// Changing colors for wizard

var onUserWizardCoatTagClick = function () {
  changeColor(true, userWizardCoatTag, userWizardCoatInputTag, coatColors)
};

var onUserWizardEyesTagClick = function () {
  changeColor(true, userWizardEyesTag, userWizardEyesInputTag, eyesColors)
};

var onUserFireballTagClick = function () {
  changeColor(false, userFireballTag, userFireballInputTag, fireballColors)
};

userAvatarTag.addEventListener('click', onUserAvatarTagClick);
userAvatarTag.addEventListener('keydown', onUserAvatarTagPress);
closeIconTag.addEventListener('click', onCloseIconTagClick);
closeIconTag.addEventListener('keydown', onCloseIconTagPress);


