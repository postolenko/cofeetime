var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
        });
    }

  // Set the date we're counting down to
  var lastDay = $("[data-countdowndate]").attr("data-countdowndate");
  var countDownDate = new Date(lastDay).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if(days <= 9) {
        days = "0" + Math.floor(distance / (1000 * 60 * 60 * 24));
      }    
      if(hours <= 9) {
        hours = "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      }    
      if(minutes <= 9) {
        minutes = "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      }    
      if(seconds <= 9) {
        seconds = "0" + Math.floor((distance % (1000 * 60)) / 1000);
      }
      
      // Output the result in an element with id="demo"
      // $(".counter").html(hours + " " + minutes + " " + seconds);
      
      hours_str = hours.toString();
      $(".hours_1").html(hours_str.substr(0, 1));
      $(".hours_2").html(hours_str.substr(1));
      
      minutes_str = minutes.toString();
      $(".minutes_1").html(minutes_str.substr(0, 1));
      $(".minutes_2").html(minutes_str.substr(1));

      seconds_str = seconds.toString();
      $(".seconds_1").html(seconds_str.substr(0, 1));
      $(".seconds_2").html(seconds_str.substr(1));

      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          // document.querySelector(".counter").innerHTML = "00" + " "
      // + "00" + " " + "00";
          // $(".counter").html("00 "+"00 "+"00 ");
          $(".hours").html("00");
          $(".minutes").html("00");
          $(".seconds").html("00");
      }
  }, 1000);

});