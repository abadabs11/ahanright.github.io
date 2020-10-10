// NAVIGATION

$(window).scroll(function(){
  if($(window).scrollTop() > $('.header').height()*1) {
       $('.navigation').addClass('fixed-nav');
       // $('.countdown').addClass('top');
    }
    else {
       $('.navigation').removeClass('fixed-nav');
       // $('.countdown').removeClass('top');
    }
});

$("#about-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top + 20
    }, 2000);
  });
  $("#faq-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#faq").offset().top
    }, 2000);
  });
  $("#rsvp-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#rsvp").offset().top - 10
    }, 2000);
  });
  

  $(document).ready(function(){
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll < 2200){
       $("a").removeClass('active-about');
       $(".navigation").addClass('active-about');
       $(".navigation").removeClass('active-faq');
       $(".navigation").removeClass('active-rsvp');
      }
      else if(scroll > 2200 && scroll < 5300){
       $("a").removeClass('active-faq');
       $(".navigation").addClass('active-faq');
       $(".navigation").removeClass('active-about');
       $(".navigation").removeClass('active-rsvp');
      }
      else if(scroll > 5300 && scroll < 6200){
       $("a").removeClass('active-rsvp');
       $(".navigation").addClass('active-rsvp');
       $(".navigation").removeClass('active-faq');
       $(".navigation").removeClass('active-about');
      }
    });
  });





// COUNTDOWN



function countdownTimer(seconds){
if(seconds <=0){ 
document.getElementById("time").innerHTML='';} 
else{
seconds = seconds -1;
var c_yrs = Math.floor(seconds / (365*60*60*24))+0;
var c_mon = Math.floor((seconds - c_yrs * 365*60*60*24) / (30*60*60*24))+0; 
var c_day = Math.floor((seconds - c_yrs * 365*60*60*24 - c_mon*30*60*60*24)/ (60*60*24))+0;
var c_hrs = Math.floor((seconds - c_yrs * 365*60*60*24 - c_mon*30*60*60*24 - c_day*60*60*24)/ (60*60))+0;
var c_min = Math.floor((seconds - c_yrs * 365*60*60*24 - c_mon*30*60*60*24 - c_day*60*60*24 - c_hrs*60*60)/60)+0;
var c_sec = Math.floor((seconds - c_yrs * 365*60*60*24 - c_mon*30*60*60*24 - c_day*60*60*24 - c_hrs*60*60 - c_min*60))+0;
document.getElementById("time").innerHTML= c_mon + ' months : ' + c_day + ' days : ' + c_hrs + ' hours : ' + c_min + ' mins ';
setTimeout("countdownTimer("+seconds+")",999);
}
}
//var target_date = new Date(year,month,day,hour,minutes,seconds).getTime();
var target_date = new Date(2021,3,24,15,30,00).getTime();
var current_date = new Date().getTime(); 
var seconds_left = (target_date - current_date) / 1000;
countdownTimer(seconds_left);   

