window.onload = function() {
    var radioButton = document.getElementById("House-Small-Complex-Condo-1-19-units");
    if (radioButton) {
        radioButton.checked = true;
    }
};



$(document).ready(function() {
  function performSearch() {
      var query = $('.navbar_search_input input').val();
      var url = 'https://redfin-group.webflow.io/search?query=' + encodeURIComponent(query);
      window.location.href = url;
  }
  // Handle button click
  $('.nav_search_btn').click(function() {
      performSearch();
  });

  // Handle Enter key press in the input field
  $('.navbar_search_input input').keypress(function(event) {
      if (event.which == 13) { // 13 is the Enter key
          event.preventDefault();
          performSearch();
      }
  });
});


// Auto-populate the form fields with cookie values
$(document).ready(function() {
  utmParameters.forEach(function(utm_element) {
    var cookieValue = getCookie(utm_element);
    if (cookieValue) {
      $("form").each(function() {
        $(this).find("." + utm_element).val(cookieValue);
      });
    }
  });
});

