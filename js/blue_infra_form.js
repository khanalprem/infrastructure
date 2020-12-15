(function ($) {

    "use strict";
/* form-popup */
  function signup(){
    $('.signup-link').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
      $('#signin').removeClass('open');
      $('#password').removeClass('open');
    });
  }
  signup();

  function signin(){
    $('.signin-link').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
      $('#signup').removeClass('open');
      $('#password').removeClass('open');
    });
  }
  signin();

  function password(){
    $('.pswd-link').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
      $('#signin').removeClass('open');
    });
  }
  password();

  function signup_profile(){
    $('.signup-profile').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
      $('#signup').removeClass('open');
    });
  }
  signup_profile();

  var $slider1 = $("#rangeSlider_1")
  var $fill1 = $(".bar #fill_1");
  var $slider = $("#rangeSlider_2");
  var $fill2 = $(".bar #fill_2");
  var $slider3 = $("#rangeSlider_3");
  var $fill3 = $(".bar #fill_3");
  var $slider4 = $("#rangeSlider_4");
  var $fill4 = $(".bar #fill_4");
  function setRange() {
      $fill2.css("width", $slider.val() + "%");
      $fill1.css("width", $slider1.val() + "%");
      $fill3.css("width", $slider3.val() + "%");
      $fill4.css("width", $slider4.val() + "%");
  }
  $slider.on("input", setRange);
  $slider1.on("input", setRange);
  $slider3.on("input", setRange);
  $slider4.on("input", setRange);
  setRange();
  
})(window.jQuery);

