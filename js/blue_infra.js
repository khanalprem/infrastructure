
(function ($) {

  "use strict";
  var winWidth = $(window).width();
  var winHeight =$(window).innerHeight();
  var headHeight =  $('.site-header').innerHeight();
  $('.banner .map').css('min-height', winHeight);
  $('.banner .banner-caption').css('top', headHeight);
  
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
    scrollLink.on('click', function() {
      window.scrollTo(0, 0);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            scrollLink.addClass('open');
        } 
        else {
          scrollLink.removeClass('open');
        }
      });
  }
  headerStyle();

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

  if (jQuery(".category-slider").length > 0) {
    var mainSlider = $('.category-slider');


    mainSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      dots: false,
      arrows:true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });

  }

   //column chart
   var options = {
    series: [{
    name: 'Local Level',
    data: [1, 8, 2, 5, 8, 2, 1, 6, 3, 2, 1, 3,5, 8 , 2]
  }, {
    name: 'CDO',
    data: [4, 3, 1, 2, 13, 13, 11, 1, 8, 2, 5, 8, 2, 1, 2]
  }, {
    name: 'Central Office',
    data: [1, 7, 1, 9, 15, 11, 2, 4, 3, 1, 2, 13, 1, 2, 4 ]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  colors: ['#ED3646','#0946BF','#19A96E'],
  xaxis: {
  /*    labels: {
      show: false
    }, */
    categories: ['आदर्श कोतवाल ग्रामीण नगरपालिका', 'बारागढी ग्रामीण नगरपालिका','Pheta ग्रामीण नगरपालिका', 'कराईमै ग्रामीण नगरपालिका', 'प्रशौनी ग्रामीण नगरपालिका',
    'विश्रामपुर ग्रामीण नगरपालिका', 'देवताल ग्रामीण नगरपालिका', 'परावानीपुर ग्रामीण नगरपालिका', 'Laksminiya ग्रामीण नगरपालिका','मुखियापट्टी मुसहरिमिया ग्रामीण…','जनक नन्दिनी ग्रामीण नगरपालिका',
    'Aaurahi ग्रामीण नगरपालिका', 'बटेश्वर ग्रामीण नगरपालिका', 'धनौजी ग्रामीण नगरपालिका', 'Sonama ग्रामीण नगरपालिका'],
  },
  yaxis: {
    /* labels: {
      show: true
    } */
  },
  fill: {
    opacity: 1
  
  },
  legend: {
    position: 'bottom',
  }
  };

  var chart = new ApexCharts(document.querySelector("#column-chart"), options);
  chart.render();


    // line-chart
  var options = {
    series: [
      {
        name: "सञ्चित",
        data: [1200, 1590, 1590, 1200, 1600, 1580, 1920, 1990, 1700, 2000, 1900, 2050]
      },
      {
        name: "दैनिक",
        data: [1000, 1390, 1390, 1000, 1300, 1280, 1620, 1690, 1400, 1700, 1600, 1750]
      }
  ],
  colors: ['#0946BF', '#ED3646'],
    chart: {
    height: 370,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        height: 200,
      },
    },
  }],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: 'straight'
  },
  markers: {
    size: 0
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    labels: {
      show: true
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  chart.render();


 /*  function letter_movement(){
    var opac = anime({
      targets: '.letter',
      opacity:1,
      scale:1,
      easing:'easeInBounce',
      delay: function(el, index) {
        return index * 150;
      },
      direction: 'alternate',
      loop: false
    });
  }
  letter_movement(); */

})(window.jQuery);

