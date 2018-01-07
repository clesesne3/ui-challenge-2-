'use strict';

$(document).ready(function() {
  $('#text-error').addClass('color-border');
  $('<p class="text-color">please enter a valid username</p>').insertAfter('#text-error').addClass('align-right');
});