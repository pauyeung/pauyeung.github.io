var main = function() {
  $('#nav-icon').click(function() {
    $('#media-menu').toggleClass('open');  
  });
  $('#close-icon').click(function() {
    $('#media-menu').toggleClass('open');  
  });
};

$(document).ready(main);