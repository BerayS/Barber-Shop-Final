$(document).ready(function() {
    var urls = ['images/landing-page.jpg', 'images/landing-page2.jpg', '../images/landing-page3.jpg'];
  
    var cout = 1;
    $('.section-a').css('background-image', 'url("' + urls[0] + '")');
    setInterval(function() {
      $('.section-a').css('background-image', 'url("' + urls[cout] + '")');
      cout == urls.length-1 ? cout = 0 : cout++;
    }, 5000);
  
  });