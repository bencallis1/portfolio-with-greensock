  //animsition
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 800,
    outDuration: 400,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'loading-container',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) {
      window.location.href = url;
    }
  });

//overlay navigation
$(".navigation-trigger").click(function() {
  $(this).toggleClass("open");
  $(".overlay").toggleClass("active");
});

//navigation hover image display
$(".navigation-trigger-home").on("mouseenter", function() {
      $(".navigation-bg-home").fadeIn();
      $(".navigation-bg-projects").fadeOut();
      $(".navigation-bg-about").fadeOut();
      $(".navigation-bg-contacts").fadeOut();
}).on("mouseleave", function() {

});//end

$(".navigation-trigger-projects").on("mouseenter", function() {
      $(".navigation-bg-home").fadeOut();
      $(".navigation-bg-projects").fadeIn();
      $(".navigation-bg-about").fadeOut();
      $(".navigation-bg-contacts").fadeOut();
}).on("mouseleave", function() {

});//end

$(".navigation-trigger-about").on("mouseenter", function() {
    $(".navigation-bg-home").fadeOut();
    $(".navigation-bg-projects").fadeOut();
    $(".navigation-bg-about").fadeIn();
    $(".navigation-bg-contacts").fadeOut();
}).on("mouseleave", function() {

});//end

$(".navigation-trigger-contacts").on("mouseenter", function() {
    $(".navigation-bg-home").fadeOut();
    $(".navigation-bg-projects").fadeOut();
    $(".navigation-bg-about").fadeOut();
    $(".navigation-bg-contacts").fadeIn();
}).on("mouseleave", function() {

});//end

//reveal animations
$(window).on('load', function() {
  window.sr = new scrollReveal();
});

$('#fullpage-projects').fullpage({
  verticalCentered: true,
  scrollingSpeed: 1200,
  continuousVertical: true,
  afterLoad: function(anchor, index) {
    $('#rn-open-button').delay(0).animate({
      opacity: 1
    });
    $('.site-logo').delay(0).animate({
      opacity: 1
    });
    $('.section').delay(0).animate({
      opacity: 1
    });
    $('.single-works-description h2').delay(100).animate({
      opacity: 1
    });
    $('.single-works-description h3').delay(200).animate({
      opacity: 1
    });
    $('.single-works-description a').delay(400).animate({
      opacity: 1
    });
  },
  onLeave: function(index, nextIndex, direction) {

    if (direction == 'down' || direction == 'up') {
      $('#rn-open-button').animate({
        opacity: 0.001
      });
      $('.site-logo').animate({
        opacity: 0.001
      });
      $('.single-works-description h2').animate({
        opacity: 0.001
      });
      $('.single-works-description h3').animate({
        opacity: 0.001
      });
      $('.single-works-description a').animate({
        opacity: 0.001
      });
    }
  }
});

//100% height
var clientHeight = $( window ).height();
$('.full-background-section').css('height', clientHeight);
$('.center-relative-fix').css('height', clientHeight);

//full image background
$(".home-background").backstretch("img/about2.jpg");

//fade on scroll
var myElement1 = $('.scrolldown');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement1.css({
        'opacity' : 1 - st/350
    });
});
var myElement2 = $('.next-project');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement2.css({
        'opacity' : 1 - st/350
    });
});
var myElement3 = $('.prev-project');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement3.css({
        'opacity' : 1 - st/350
    });
});
