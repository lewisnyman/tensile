/*!
 * Main
 *
 * $  jQuery object
 * w  window object
 * d  document object
 *
 * ensure 'undefined' has not been modified
 */

(function( $, w, d, undefined ) {

  'use strict';

  $(d).ready(function() {
    $('.js-popup').popup();
    $('.js-menu').menu();
  });

})( jQuery, this, document );
