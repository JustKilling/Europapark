
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  
  
  
}


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

$(".video-no-end").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
  }
});
    $("#wodan").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
            end: 100
  }
});
    $("#silverstar").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
            start:55,
            end: 135
  }
});
    $("#poseidon").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
            start:45,
            end: 366
  }
});
    $("#alpenexpress").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
            start:5,
            end: 110
  }
});
    $("#alpenexpressvr").modalVideo({
  youtube:{
    controls:1,
    nocookie: true,
            autoplay: 1,
            modestbranding: 1,
            end: 101
  }
});