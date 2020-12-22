
(function ($) {

  "use strict";
  var winWidth = $(window).width();
  var winHeight =$(window).innerHeight();
  var headHeight =  $('.site-header').innerHeight();
  $('.banner .map').css('min-height', winHeight);
  // $('.banner .banner-caption').css('top', headHeight);
  
  function resize(){
    var y = screen.height;
    var x = $(window).innerHeight();
    if(window.innerHeight == screen.height){
      $(".login-page").css('height', y);
      $(".full-height-banner").css('height', y);
      console.log(y);
    }
    else{
      $(".login-page").css('height', x);
      $(".full-height-banner").css('height', x);
        console.log(x);
    }
    //on resizing
    $(window).on('resize',function(){
      if(window.innerHeight == screen.height){
        $(".login-page").css('height', y);
        $(".full-height-banner").css('height', y);
        console.log(y);
      }
      else{
        $(".login-page").css('height', x);
        $(".full-height-banner").css('height', y);
          console.log(x);
      }
    });
  }
  resize();

  function sidebar_collapse(){
    var winwidth = $(window).width();
    if (winwidth <= 1024) {
      $('.bhumi-admin-wrapper').addClass('sidebar-collapse');
    }else{
      $('.bhumi-admin-wrapper').removeClass('sidebar-collapse');
    }
    $(window).resize(function(){
      if (winwidth <= 1024) {
        $('.bhumi-admin-wrapper').addClass('sidebar-collapse');
      }else{
        $('.bhumi-admin-wrapper').removeClass('sidebar-collapse');
      }
    })
  }
  sidebar_collapse();

  function multipleMenu() {
    $(".admin-aside-menu > .is-submenu > a").click(function () {
      var e = $(this).next(".submenu")
        , a = ".admin-aside-menu > li.is-submenu > .submenu";
      0 === $(".minified-menu").length && ($(a).not(e).slideUp(function () {
        $(this).closest("li").removeClass("active")
      }),
        $(e).slideToggle(function () {
          var e = $(this).closest("li");
          $(e).hasClass("active") ? $(e).removeClass("active") : $(e).addClass("active")
        }))
    }),
      $(".admin-aside-menu > .is-submenu .submenu li.is-submenu > a").click(function () {
        if (0 === $(".minified-menu").length) {
          var e = $(this).next(".submenu");
          $(e).slideToggle()
        }
      });
  }
  multipleMenu();

  function toggleSidebar() {
    $('.admin-sidebar header').on('click', function (e) {
      e.preventDefault();
      $('.bhumi-admin-wrapper').toggleClass('sidebar-collapse');
    })
  }
  toggleSidebar();

  function openModal() {
    $('.common-button, .modal-link, .upload-icon').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
    });
  }
  openModal();
  function closeModal() {
    $('.popup-footer .common-button, .close-icon').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.popup').removeClass('open');
      $(this).closest('.signin-popup').removeClass('open');
    });
  }
  closeModal();

  function pagination(){
    $('.pagination').on('click', 'li', function(){
      if($(this).closest('li').next().hasClass('active')){
        $('.pagination li').removeClass('active');
    }
    else{
      $('.pagination li').removeClass('active');
    }
    $(this).closest('li').addClass('active');
    })
  };
  pagination();

  function selectToggle() {
    $('.custom-select .selected-item').on('click', function () {
      $(this).closest('.custom-select').toggleClass('show-dropdown');
    });
    $(document).on("click", function (event) {
      var $trigger = $(".custom-select");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".custom-select").removeClass("show-dropdown");
      }
    });
  }
  selectToggle();

  function customDropdown() {
    $('.custom-dropdown a.dropdown-link').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.custom-dropdown').toggleClass('active');
      // $(this).children('ul.custom-dropdown-menu').slideToggle(300);
    });

    /* $(document).mouseup(function (e) {
      var container = $(".custom-dropdown-menu");
      // If the target of the click isn't the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide(300);
      }
    }); */
  }
  customDropdown();

  $(".selectdrop .dropdown-menu li a").on('click', function(){
    var selText = $(this).html();
    $(this).parents('.selectdrop').find('.selection').html(selText + '<span class="arrow"><i class="fa fa-angle-down"></i></span>');
  });

  function filterToggle() {
    $('.filter .circle-icon').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-bg');
      $(this).closest('.filter').find('.filter-content').toggle(300);
    });

    // $(document).mouseup(function (e) {
    //   var container = $(".filter-content");
    //   if (!container.is(e.target) && container.has(e.target).length === 0) {
    //     container.hide(300);
    //   }
    // });

  }
  filterToggle();


  function radio_choice(){
    $('.info-options .option-item').on('click', 'input', function(){
      if($(this).closest('.option-item').next().hasClass('checked')){
          $('.info-options .option-item').removeClass('checked');
      }
      else{
          $('.info-options .option-item').removeClass('checked');
      }
      $(this).closest('.info-options .option-item').addClass('checked');
    })
  }
  radio_choice();
  /* timeline */
  function timeline_process(){
    
      $('.timeline ul.timeline-process a').click(function(e){
        e.preventDefault();
        var timeline_id = $(this).attr('data-tab');
    
        $('.timeline ul.timeline-process li').removeClass('active');
        $('.timeline .timeline-content').removeClass('active');
    
        $(this).closest('li').addClass('active');
        $("#"+timeline_id).addClass('active');
      })
  }
  timeline_process();

  var pageSection = $(".bg-image");
    pageSection.each(function () {
      if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });

  function customTab(){
    $('.custom-tab ul.tab-list a').click(function(e){
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
  
      $('.custom-tab ul.tab-list li').removeClass('current');
      $('.custom-tab .custom-tab-content .tab-item').removeClass('current');
  
      $(this).closest('li').addClass('current');
      $("#"+tab_id).addClass('current');
    })

    $('.custom-option  ul.option-list a').click(function(e){
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
  
      $('.custom-option ul.option-list li').removeClass('current');
      $('.custom-option .option-tab-content .option-item').removeClass('current');
  
      $(this).closest('li').addClass('current');
      $("#"+tab_id).addClass('current');
    })
  }
  customTab();

  function grid_canvas(){
    $('.grid').on('click', function (e) {
      e.preventDefault();
      $('.canvas-body').toggleClass('grid-body');
    })
  }
  grid_canvas();

  function slider_list(){
    $('.custom-tab .slider-list  a').click(function(e){
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
  
      $('.custom-tab .slider-list .list-item').removeClass('current');
      $('.custom-tab .custom-tab-content .tab-item').removeClass('current');
  
      $(this).closest('.list-item').addClass('current');
      $("#"+tab_id).addClass('current');
    })

  }
  slider_list();

  function portfolio_more(){
    $('.more-para a').on('click', function(){
      $(this).toggleClass('active');
      $('.portfolio-details').toggleClass('active');
    });
  }
  portfolio_more();

  function toggle_button() {
    $('.header-in .toggle-button').on('click', function () {
      $(this).toggleClass('active');
      $('body').toggleClass('Is-toggle');
    });
  }
  toggle_button();

  function headerStyle() {
  
    var scrollLink = $('.scroll-top');
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            scrollLink.addClass('open');
            $('header').addClass('scroll-header');
        } 
        else {
          scrollLink.removeClass('open');
          $('header').removeClass('scroll-header');
        }
    });
      /*  scrollLink.on('click', function() {
      window.scrollTo(0, 0);
    }); */
  }
  headerStyle();

  // Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}


  function popup_chat(){
    $('.popup-chat .popup-chat-link').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.popup-chatbox').toggleClass('active');
    });
  
  }
  popup_chat();
  
  function chatbox_icons(){
    $('.chatbox-footer .icons-wrap a').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
    })
  }
  chatbox_icons();

  function radio_choice(){
    $('.info-options .option-item').on('click', 'input', function(){
      if($(this).closest('.option-item').next().hasClass('checked')){
          $('.info-options .option-item').removeClass('checked');
      }
      else{
          $('.info-options .option-item').removeClass('checked');
      }
      $(this).closest('.info-options .option-item').addClass('checked');
    })
  }
  radio_choice();

  function table_select(){
    $('.naxamappper-table table tr').on('click', 'input', function(){
      if($(this).closest('tr').next().hasClass('checked')){
          $('.naxamappper-table table tr').removeClass('checked');
      }
      else{
          $('.naxamappper-table table tr').removeClass('checked');
      }
      $(this).closest('.naxamappper-table table tr').addClass('checked');
    })
  }
  table_select();
  
  function collapse_toggle(){
  $('.collapsible .collapsible-header').on('click', function(){
    if($(this).closest('.collapsible-header').next().hasClass('active')){
        $('.collapsible .collapsible-header').removeClass('active');
    }
    else{
        $('.collapsible .collapsible-header').removeClass('active');
    }
    $(this).closest('.collapsible .collapsible-header').addClass('active');
  })
  }
  collapse_toggle();

  if (jQuery(".testimonial-slider").length > 0) {
    var mainSlider = $('.testimonial-slider');


    mainSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      dots: false,
      arrows:true,
    });

  }

  


})(window.jQuery);

