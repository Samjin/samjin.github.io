// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation({
  reveal: {
    animation: 'fade',
    animation_speed: 80
  },
  orbit: {
    animation: 'slide',
    slide_number: false,
    variable_height: true,
    timer: false
  }
});

/* ==========================================================================
   Close alert-pop with shortcuts
   ========================================================================== */
$(document).ready(function() {
  var alertForNav = $('#alert-for-nav, .reveal-modal-bg');
  if (alertForNav) { // target ux.html page
    setTimeout(function() {
      alertForNav.fadeIn(400);
      $('body, html').click( function() { alertForNav.hide(); } );

      /* shortcut */
      $(document).keydown(function(e) {
        var prevLink = $("a.orbit-prev"), nextLink = $("a.orbit-next");
        if (e.keyCode === 39 && alertForNav.css('display') === 'none') nextLink[0].click();
        else if (e.keyCode === 37 && alertForNav.css('display') === 'none') prevLink[0].click();
        else if (e.keyCode !== 39 || 37) alertForNav.hide();
      });
    }, 300);
  }
});

/* ==========================================================================
   Scroll module
   ========================================================================== */
;(function($, ScrollToTop, undefined) {
  'use strict';
  var clickedElem = $('[data-scroll]'),

    config = {
      scrollDistance: 500,
      speed: 300
    },

    _scrollToTargetAnimation = function() {
      $('body').animate({
        scrollTop: $($(this).data('scroll')).offset().top
      }, config.speed);
      return false; //stop bubbling
    },

    _showHideAnimation = function() {
      if ($(this).scrollTop() > config.scrollDistance) {
        clickedElem.fadeIn(config.speed);
      } else {
        clickedElem.fadeOut(config.speed);
      }
    };

  ScrollToTop.showHide = function() {
    if ($('.top-bar').length) return;
    $(document).scroll(_showHideAnimation);
  };

  ScrollToTop.clickBtn = function() {
    clickedElem.on('click', _scrollToTargetAnimation);
  };

  ScrollToTop.init = function(config2) {
    $.extend(config, config2);
    this.showHide();
    this.clickBtn();
  };

})(jQuery, window.ScrollToTop = window.ScrollToTop || {});

$(function() {
  ScrollToTop.init();
});
/* ==========================================================================
   Figure and figcaption hover effect-Codedrops
   ========================================================================== */
/** Used Only For Touch Devices **/
( function( window ) {
  
  // for touch devices: add class cs-hover to the figures when touching the items
  if( Modernizr.touch ) {

    // classie.js https://github.com/desandro/classie/blob/master/classie.js
    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }

    [].slice.call( document.querySelectorAll( 'figure' ) ).forEach( function( el, i ) {
      el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
        e.stopPropagation();
      }, false );
      el.addEventListener( 'touchstart', function(e) {
        classie.toggle( this, 'cs-hover' );
      }, false );
    } );

  }

})( window );