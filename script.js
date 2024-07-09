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
// UTM AND MARKETO
(function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let utm_source = params.utm_source;
    if (utm_source) {
        setCookie('utm_source', utm_source, 30);
    }
    let utm_medium = params.utm_medium;
    if (utm_medium) {
        setCookie('utm_medium', utm_medium, 30);
    }
    let utm_campaign = params.utm_campaign;
    if (utm_campaign) {
        setCookie('utm_campaign', utm_campaign, 30);
    }
    let utm_content = params.utm_content;
    if (utm_content) {
        setCookie('utm_content', utm_content, 30);
    }
    let utm_term = params.utm_term;
    if (utm_term) {
        setCookie('utm_term', utm_term, 30);
    }
    let gclid = params.gclid;
    if (gclid) {
        setCookie('gclid', gclid, 30);
    }
    function setCookie(key, value, days) {
      let expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
    }
})();

(function() {
  var didInit = false;
  function initMunchkin() {
    if(didInit === false) {
      didInit = true;
      Munchkin.init('991-JRY-317');
    }
  }
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//munchkin.marketo.net/munchkin.js';
  s.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      initMunchkin();
    }
  };
  s.onload = initMunchkin;
  document.getElementsByTagName('head')[0].appendChild(s);
})();

// UTM AND MARKETO


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




$(document).ready(function() {
  $('form').each(function() {
    var form = $(this);

    // Listen for form submission
    form.on('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      console.log("form working");

      // Use AJAX to submit the form
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function() {
          // Log success message when form is successfully submitted
          console.log('form successfully submitted');

          // Observe changes to the .w-form-done element
          var formDone = form.find('.w-form-done')[0];
          if (formDone) {
            var observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                  var displayStyle = window.getComputedStyle(formDone).display;
                  if (displayStyle === 'block') {
                    console.log('Form done element is now visible');
                  }
                }
              });
            });

            // Configuration of the observer:
            var config = {
              attributes: true,
              attributeFilter: ['style']
            };

            // Pass in the target node, as well as the observer options
            observer.observe(formDone, config);
          }
        },
        error: function() {
          console.log('form submission failed');
        }
      });
    });
  });
});


