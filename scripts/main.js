$(function() {

  // enables background on navbar collapse
  $('.navbar-toggle').click(function(){
    $('.navbar-default').toggleClass('navbar-active');
  });

  // on .page-content click, if .navbar-active exists on the page,
  // collapse the navbar (which is the mobile one) and toggleClass
  // .navbar-active (which has the white transparent background style)
  $(".page-content").click(function(){
    if ($(".navbar-active")[0]) {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-default').toggleClass('navbar-active');
    }
  });

});
