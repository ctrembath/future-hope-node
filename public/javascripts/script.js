$(document).ready(function() {

  // Multi-select form

  var selected = {};
  $('#guest-list').click(function(e) {
    var $this = $(this),
    options = this.options,
    option,
    value,
    n;  
    value = $this.val();    
    for (n = 0; n < options.length; ++n) {
      option = options[n];
      if (option.value == value) {
        selected[value] = !selected[value];
      }
      option.selected = !!selected[option.value];
    }
    return false;
  });

  // Finding table number selected

  var number = document.getElementById('number');
  var button = document.getElementById('button');
  $(button).click(function() {
    alert(number.value);
  });

});