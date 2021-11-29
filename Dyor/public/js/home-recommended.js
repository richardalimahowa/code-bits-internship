    //Decided to simpify component code using jquery

//access ui-card    
$num = $('.ui-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

//Change active UI card, prev and next depending on whether its count is odd or even 
if ($num % 2 == 0) {
  $('.ui-card:nth-child(' + $even + ')').addClass('active');
  $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
}

//Animation and movement when a ui card is clicked
$('.ui-card').click(function() {
  $slide = $('.active').width();
  //console.log($('.active').position().left);
 
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
 
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
 
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});
 
 
// when Keyboard used
$('.customize-container').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});