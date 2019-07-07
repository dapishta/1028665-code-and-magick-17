/* eslint-disable semi */
'use strict';

(function () {
  var renderSimilarWizards = window.renderSimilarWizards;
  var load = window.load;
  var setupTag = document.querySelector('.setup');
  var setupPlayerTag = setupTag.querySelector('.setup-player');
  var userWizardCoatInputTag = setupPlayerTag.querySelector('input[name="coat-color"]');
  var userWizardEyesInputTag = setupPlayerTag.querySelector('input[name="eyes-color"]');
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === userWizardCoatInputTag.value) {
      rank += 2;
    }
    if (wizard.colorEyes === userWizardEyesInputTag.value) {
      rank += 1;
    }
    return rank;
  }

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    renderSimilarWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  var onLoadSuccess = function (data) {
    wizards = data;
    renderSimilarWizards(wizards)

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


  window.updateWizards = updateWizards;
  load(onLoadSuccess, onLoadError);

})();

