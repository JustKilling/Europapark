// let hasNotScrolled = true;
// let counter = 0;
// let testel = document.getElementById("test") ;
// $(function(){
//   $(window).scroll(function() {
//     let offset = $(document.getElementById("section")).offset();
//     offset.top += 20;
//     if($(window).scrollTop() < 10 && hasNotScrolled){
//       disable_scroll();
//       $('html, body').animate({
//         scrollTop: offset.top
//      }, 800, function(){
//       hasNotScrolled = false;
//       enable_scroll();
//      });
//     }
//     let barEl = document.getElementById('topintrovid');
//     let barRect = barEl.getBoundingClientRect();
//     if($(window).scrollTop() < (window.pageYOffset + barRect.top) && !hasNotScrolled){
//       window.scrollTo(0, 0);
//     }
//     if($(window).scrollTop() == 0){
//       hasNotScrolled = true;
//     }










//       //  let testel = document.getElementById("test") ;
       
//       //  if(bool) {
//       //   let offset = $(document.getElementById("section")).offset();
        

//       //   $('html, body').animate({
//       //     scrollTop: offset.top
//       //  }, 800, function(){
//       //     bool = false;
//       //  });
//       //  testel.innerHTML = ++counter;

//       //   }else{
//       //     testel.innerHTML = isElementInViewport($("#topintrovid")) + " bool:" + bool ;
//       //   }
      
       
//       //  testel.innerHTML = isElementInViewport($("#topintrovid")) + "" +bool;
//       //  if(bool){
//       //   let offset = $(document.getElementById("section")).offset();
//       //   offset.top -= 20;

//       //   $('html, body').animate({
//       //     scrollTop: offset.top,
//       //  });
//       //  bool = false;
//       //  }
//   });
// });




function isElementInViewport (el) {

  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}


$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
