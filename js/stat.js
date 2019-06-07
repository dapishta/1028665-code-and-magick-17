'use strict';

window.renderStatistics = function (ctx, players, times) {
  var POP_X = 100;
  var POP_Y = 10;
  var POP_WIDTH = 420;
  var POP_HEIGHT = 270;
  var BAR_MARGIN = 50;
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var COLOR_BLACK = '#000';
  var COLOR_WHITE = '#FFF';
  var COLOR_GREY = 'rgba(0, 0, 0, 0.7)';
  var COLOR_RED = '#FF0000';
  var leftMargin = 20 + POP_X;

  // Pop-up shadow & background
  ctx.fillStyle = COLOR_GREY;
  ctx.fillRect(POP_X + 10, POP_Y + 10, POP_WIDTH, POP_HEIGHT);

  ctx.fillStyle = COLOR_WHITE;
  ctx.fillRect(POP_X, POP_Y, POP_WIDTH, POP_HEIGHT);

  // Titles
  ctx.fillStyle = COLOR_BLACK;
  ctx.font = '16px "Pt Mono"';
  ctx.fillText('Ура вы победили!', leftMargin, 30 + POP_Y);
  ctx.fillText('Список результатов:', leftMargin, 50 + POP_Y);

  // Find highest time
  var getMaxValue = function (numbers) {
    var maxValue = 0;
    for (var y = 0; y < numbers.length; y++) {
      if (maxValue < numbers[y]) {
        maxValue = Math.floor(numbers[y]);
      }
    }
    return maxValue;
  };

  // Find random saturation
  var getRandomColorNumber = function () {
    return Math.floor(Math.random() * 255);
  };

  // Find me
  var getObjectValueNumber = function (object) {
    return object.indexOf('Вы');
  };

  // Draw histogramms
  var drawHistogramms = function () {
    var myNumberPlayer = 0;
    var playerBarsHeights = [];

    var maxTime = getMaxValue(times);
    // Find me
    myNumberPlayer = getObjectValueNumber(players);

    for (var i = 0; i < times.length; i++) {
      // Find the heights for the bars
      playerBarsHeights[i] = Math.floor((times[i] * BAR_MAX_HEIGHT) / maxTime);
      // Add names
      ctx.fillStyle = COLOR_BLACK;
      ctx.fillText(players[i], leftMargin, 246 + POP_Y);
      // Add times
      ctx.fillText(Math.floor(times[i]), leftMargin, 74 + POP_Y + (BAR_MAX_HEIGHT - playerBarsHeights[i]));
      // Style color for other players bars
      var randomSaturation = getRandomColorNumber();
      ctx.fillStyle = 'rgba(0, 0, ' + randomSaturation + ', 1)';
      // Style color for my bar
      if (i === myNumberPlayer) {
        ctx.fillStyle = COLOR_RED;
      }
      // Add bars
      ctx.fillRect(leftMargin, 90 + (BAR_MAX_HEIGHT - playerBarsHeights[i]), BAR_WIDTH, playerBarsHeights[i]
      );
      // Add horizontal space
      leftMargin += BAR_WIDTH + BAR_MARGIN;
    }
  };

  drawHistogramms();
};
