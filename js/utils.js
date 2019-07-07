/* eslint-disable semi */
'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var lastTimeout;

  var utils = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    removeClass: function (tag, className) {
      tag.classList.remove(className);
    },
    addClass: function (tag, className) {
      tag.classList.add(className);
    },
    getRandomValue: function (data) {
      var result = Math.floor(Math.random() * data.length);
      return data[result];
    },
    insertTag: function (tagToBeInserted, tagWhereToInsert) {
      tagWhereToInsert.appendChild(tagToBeInserted);
    },
    debounce: function (action, interval) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        action();
      }, interval);
    }
  };
  window.utils = utils;

})();


