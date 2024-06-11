// JavaScript Document


//----------------nav responsive---------------

$(function(){
  $(".nav_trigger").click(function(){      
    $(this).toggleClass('active');
	$("#gloval_nav").toggleClass('active');
  });
  $("#gloval_nav").click(function(){      
    $(this).removeClass('active');
	$(".nav_trigger").removeClass('active');
  });
});

//----------------nav trigger---------------
$(function () {
  var fadeIn = $('.top_nav_trigger_outer');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > windowHeight - 50) {
        $(this).addClass("scroll_in");
      }
      if (scroll < windowHeight - 50) {
        $(this).removeClass("scroll_in");
      }
    });
  });
});

$(function () {
  var fadeIn = $('.in_nav_trigger_outer');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > windowHeight - 500) {
        $(this).addClass("scroll_in");
      }
      if (scroll < windowHeight - 500) {
        $(this).removeClass("scroll_in");
      }
    });
  });
});

$(function () {
  var fadeIn = $('.header_top_logo');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > windowHeight - 50) {
        $(this).addClass("scroll_in");
      }
      if (scroll < windowHeight - 50) {
        $(this).removeClass("scroll_in");
      }
    });
  });
});


//---------------- vh ---------------
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 画面のサイズ変動があった時に高さを再計算する
//window.addEventListener('resize', setFillHeight);

// 初期化
setFillHeight();

/*min-height: 100vh; min-height: calc(var(--vh, 1vh) * 100);*/


//----------------onload event----------------

$(window).on('load', function(){
	$(window).delay(600).queue(function(){
		$('.op_anim').addClass('open');
		$('body').addClass('active');
		$('body').removeClass('scroll_stop');
		$('.fv_logo').addClass('active');
		$('body').removeClass('fadein');
	});
});



//----------------scroll reveal---------------

jQuery(function ($) {
  var fadeIn = $('.fade_in');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll_in");
      }
    });
  });
});

jQuery(function ($) {
  var wbTextFadeIn = $('.w_back_text');
  $(window).on('scroll', function () {
    $(wbTextFadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 50) {
        $(this).addClass("scroll_in");
      }
    });
  });
});


//----------------page effect---------------
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    let url = $(this).attr('href');
    if (url !== '') {
      $('body').addClass('fadeout');
      setTimeout(function(){
        window.location = url;
      }, 400);
    }
    return false;
  });
});


//----------------goods_modal---------------

$(function(){
	
  $(".goods_modal_open").click(function(){
	$(".goods_modal").removeClass('visible');
    $(this).next(".goods_modal").addClass('visible');
    return false;
  });
	
  $(".modal_close_btn , .modal_bg").click(function(){
	$(".goods_modal").removeClass('visible');
    return false;
  });
  
});

//----------------realtimeclock---------------

function realtimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  var amPm = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours === 0) ? 12 : hours; // Adjust for 12 AM and 12 PM

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;
  document.getElementById('ampm').innerHTML = amPm;

  setTimeout(realtimeClock, 500);
}

document.getElementById('ticketButton').addEventListener('click', function() {
  var ampm = document.getElementById('ampm');
  ampm.classList.add('animate');
});