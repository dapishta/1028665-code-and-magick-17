/* eslint-disable semi */
'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('GET', URL);
    xhr.send();
  }

  window.load = load;
})();

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var save = function (data, onSuccess, onError) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', URL);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });


    xhr.send(data);
  };

  window.save = save;
})();

