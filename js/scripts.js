let mousePos = { x: -1, y: -1 };
let $shareBox = $('.share-box');
let share = {
  url: window.location.href,
  content: ''
};

// track the mouse at all times to use coords when needed
$(document).mousemove(function(event) {
  mousePos.x = event.pageX;
  mousePos.y = event.pageY;
});

$('.container').mouseup(function() {
  share.content = document.getSelection().toString();

  // must have a number of letters selected
  if (share.content.length > 10) {
    $shareBox.show();

    // keep popup box from going off of the right side of the page.
    let xDirection = 'left';
    if ($(document).width() - mousePos.x < 300) {
      xDirection = 'right';
    }
    // position box related to mouseup location
    $shareBox.css('top', mousePos.y + 25);
    if (xDirection === 'left') {
      $shareBox.css('left', mousePos.x);
    } else {
      $shareBox.css('left', 'initial');
      $shareBox.css('right', 10);
    }

    // populate textarea
    $('.share-box__textarea').text(share.content + ' ' + share.url);
  } else {
    $shareBox.hide();
  }
});

$('.container').mousedown(function() {
  $shareBox.hide();
});
