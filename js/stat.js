'use strict';

window.renderStatistics = function (ctx, players, times) {
  var POP_X = 100;
  var POP_Y = 10;
  var POP_WIDTH = 420;
  var POP_HEIGHT = 270;
  var BAR_MARGIN = 50;
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var LEFT_MARGIN = 20;
  var maxTime = 0;
  var myNumberPlayer = 0;
  var playerBarsHeights = [];

  // Pop-up shadow & background
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(POP_X + 10, POP_Y + 10, POP_WIDTH, POP_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(POP_X, POP_Y, POP_WIDTH, POP_HEIGHT);

  // Titles
  ctx.fillStyle = '#000';
  ctx.font = '16px "Pt Mono"';
  ctx.fillText('Ура вы победили!', LEFT_MARGIN + POP_X, 30 + POP_Y);
  ctx.fillText('Список результатов:', LEFT_MARGIN + POP_X, 50 + POP_Y);

  // Find highest player and time
  var findHighest = function () {
    for (var i = 0; i < times.length; i++) {
      if (maxTime < times[i]) {
        maxTime = Math.floor(times[i]);
      }
    }
  };

  // Find my own number
  var findMe = function () {
    myNumberPlayer = players.indexOf('Вы');
  };

  // Find the heights for the bars
  var findHeights = function () {
    for (var i = 0; i < times.length; i++) {
      playerBarsHeights[i] = Math.floor((times[i] * BAR_MAX_HEIGHT) / maxTime);
    }
  };

  // Draw histogramms
  var drawHistogramms = function () {
    for (var i = 0; i < times.length; i++) {
      // Add names
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], LEFT_MARGIN + POP_X, 246 + POP_Y);
      // Add times
      ctx.fillText(
        Math.floor(times[i]),
        LEFT_MARGIN + POP_X,
        74 + POP_Y + (BAR_MAX_HEIGHT - playerBarsHeights[i])
      );
      // Style color for other players bars
      var randomSaturation = Math.floor(Math.random() * 255);
      ctx.fillStyle = 'rgba(0, 0, ' + randomSaturation + ', 1)';
      // Style color for my bar
      if (i === myNumberPlayer) {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      // Add bars
      ctx.fillRect(
        LEFT_MARGIN + POP_X,
        90 + (BAR_MAX_HEIGHT - playerBarsHeights[i]),
        BAR_WIDTH,
        playerBarsHeights[i]
      );
      // Add horizontal space
      LEFT_MARGIN += BAR_WIDTH + BAR_MARGIN;
    }
  };

  findHighest();
  findMe();
  findHeights();
  drawHistogramms();
};
