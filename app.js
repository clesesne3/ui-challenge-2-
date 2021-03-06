'use strict';

$(document).ready(function() {
  $('.error').hide();

  $('#text-one').keypress(function(event) {
    if(event.which == 13) {
      if(!$(this).val() || !(/^[A-Za-z]+$/.test($(this).val()))) {
        $('.text-one').hide();
        $('.error').show();
        $('#text-error').addClass('color-border');
        $('<p class="text-color error">please enter a valid username</p>').insertAfter('#text-error').addClass('align-right');
      }
    }
  });

  // select dropdown
  $('#select-box-up').addClass('sprite-select-up').on('click', function() {
    $('.select-box').hide();
    $('.select-open').show();
  });

  $('#select-box-down').addClass('sprite-select-down');
  $('.select-open').hide();

  $('#select-box-down').on('click', function() {
    $('.select-box').show();
    $('.select-open').hide();
  });

  //checkbox
  $('#checkbox').addClass('sprite-unchecked').on('click', function() {
    $('#checkbox').toggleClass('sprite-checked');
  });

  // radio
  $('#radio').addClass('sprite-radio-clear').on('click', function() {
    $('#radio').toggleClass('sprite-radio-clicked sprite-radio-clear');
  });

  // submit button
  $('#submit').addClass('bkgrd-color');
  $('#submit').on('click', function() {
    $('#submit').toggleClass('bkgrd-color-click');
  });
});