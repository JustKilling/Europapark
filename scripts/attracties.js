
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

$(document).ready(function() {
  $('#bluefire').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=P7m8SNRj_hI'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#wodan').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=Ct5kx-wFCos'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&end=100' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#silverstar').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=S_rAf6iPZ_A'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&start=55&end=135' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#poseidon').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=XiEUx2NsK7c'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&start=45&end=366' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#supersplash').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=Eb9cBg0ATpc'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#alpenexpress').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=8zFBUSsN-Rc'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&start=5&end=110' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
  $('#alpenexpressvr').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=3xnnhVsRz_4'
    },
    type:'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1&hl=nl&modestbranding=1&end=101' 
          }
       },
       srcAction: 'iframe_src', 
   }
  });
});