function forDelayDisplay() {
$('#cirHtml').css('display', 'none');
$('#cirHtml').delay(500).fadeIn(1000);
$('#cirCss').css('display', 'none');
$('#cirCss').delay(1000).fadeIn(1500);
$('#cirJava').css('display', 'none');
$('#cirJava').delay(1500).fadeIn(2000);
$('#cirNodeJs').css('display', 'none');
$('#cirNodeJs').delay(2500).fadeIn(3000);
$('#cirFullStack').css('display', 'none');
$('#cirFullStack').delay(3500).fadeIn(4000);
}

var nbDrop = 858;

function randRange(minNum, maxNum){
 return (Math.floor(Math.random() * (maxNum - minNum +1)) + minNum);
}

function createRain() {
  for (i = 1; i < nbDrop; i++){
      var dropLeft = randRange(0, 1600);
      var dropTop = randRange(-1000, 1400);

      $('.rain').append('<div class="drop" id="drop' + 1 + '"></div');
      $('#drop' + i).css('left', dropLeft);
      $('#drop' + i).css('top' + dropTop);
  }
}

function makeItRain() {
    //clear out everything
    $('.rain').empty();
  
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 500) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (90 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (4 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 50) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 50) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
  
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }
 
  makeItRain();
  forDelayDisplay();