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


// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Get the query string from the URL
var queryString = window.location.search;
var URLSearchParams_wb = new URLSearchParams(queryString);

const utmParameters = [
  "utm_source", 
  "utm_medium", 
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid"
];

// Save UTM parameters and GCLID into cookies
utmParameters.forEach(function(utm_element) {
  if (URLSearchParams_wb.has(utm_element)) {
    var value = URLSearchParams_wb.get(utm_element);
    setCookie(utm_element, value, 30); // Save cookie for 30 days
  }
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

