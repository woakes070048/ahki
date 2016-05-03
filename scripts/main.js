$(function() {

  // enables background on navbar collapse
  $('.navbar-toggle').click(function(){
    $('.navbar-default').toggleClass('collapse-active');
  });

  // on .page-content click, if .collapse-active exists on the page,
  // collapse the navbar (which is the mobile one) and toggleClass
  // .collapse-active (which has the white transparent background style)
  $(".page-content").click(function(){
    if ($(".collapse-active")[0]) {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-default').toggleClass('collapse-active');
    }
  });

});
