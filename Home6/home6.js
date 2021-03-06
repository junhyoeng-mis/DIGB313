window.onload = function(){


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$('.add-box').click(() => {
  var box = document.createElement('div');
  var ranTop = Math.floor((Math.random() * 320) + 80);
  var ranLeft = Math.floor((Math.random() * 650) + 5);
  $(box).css({
    backgroundColor: getRandomColor(),
    top: ranTop,
    left: ranLeft,
    zIndex: 0
  }).addClass(`box no.${count}`);
  $('#square-area').append(box);
  count += 1;
});


$('.change-color').click(() => {
  var targets = document.querySelectorAll('.box');
  for (let i = 0; i <= targets.length; i++) {
    $(targets[i]).css('backgroundColor', getRandomColor());
  }
});


$(document).ready(() => {
  var loadBox = Math.floor((Math.random() * 21) + 30);
  for (let i = 0; i <= loadBox; i++) {
    $('.add-box').trigger('click');
  }
});


$(document).on('click', '.box', (e) => {
  var z = 100;
  if ($(e.target).css('zIndex') >= z) {
    $(e.target).remove();
  } else {
    $(e.target).css('zIndex', z);
  }

});
}