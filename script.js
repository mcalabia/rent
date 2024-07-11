window.onload = function() {
    var radioButton = document.getElementById("House-Small-Complex-Condo-1-19-units");
    if (radioButton) {
        radioButton.checked = true;
    }
};




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
  console.log('mutation');
  var form = $('form');
  var observer = new MutationObserver(function(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
      if (mutation.attributeName === 'style' && $(mutation.target).css('display') === 'none') {
        setTimeout(function() {
        gsap.to('.get-started-form-slider, .form-slider-mobile', { duration: 0.3, opacity: 0, onComplete: function() {
          $('.get-started-form-slider, .form-slider-mobile').css('display', 'none');
        }});
      }, 3000); // 3-second delay
      }
    });
  });

  var config = { attributes: true };
  observer.observe(form[0], config);
});


// =====================
$(document).ready(function () {

function keyFeaturesMobile() {
            const containers = $(".kf-items-mobile");
            if (!containers.length) return;

            containers.each(function () {
                const self = $(this);
                const allItems = self.find(".kf-item-mobile");
                const allContent = self.find(".is-kf-mobile");

                addIndex(allItems);
                addIndex(allContent);

                allItems.click(function () {
                    const subSelf = $(this);
                    const index = subSelf.data("index");
                    console.log(index);

                  
                    const targetContent = subSelf.find(".is-kf-mobile");
                    
                    console.log(targetContent);

                    if (!subSelf.hasClass("open")) {
                        resetItems(allContent);
                        allItems.removeClass("open");

                        subSelf.addClass("open");
                        
                        gsap.fromTo(targetContent,
                          {
                              height: 0,
                              autoAlpha: 0,
                          },
                          {
                              height: "auto",
                              duration: 0.6,
                              autoAlpha: 1,
                              ease: Power2.easeOut,
                              overwrite: true
                          }
                      );
                    }
                });

                allItems[0].click();
            });

            function addIndex(elements) {
                elements.each(function (index) {
                    $(this).attr('data-index', index);
                });
            }

            function resetItems(elements) {
                elements.css("height", 0).css("display", "none");
            }
}
function mobileNavSearch() {
  $(".navbar_search_btn_mob").click(function(){
    // Fade out the search button
    $(this).fadeOut(300, function(){
        // Show and slide in the search inner mobile element
        $(".navbar_search_mobile").css("display", "block");
        $(".navbar_search_inner_mobile").css("opacity", "1");
        gsap.fromTo(".navbar_search_mobile", 
            {x: "-100%", opacity: 0}, 
            {x: "0%", opacity: 1, duration: 1}
        );
    });
});
}


function navSearch(inputClass, btnClass){
  function performSearch() {
    var query = $(inputClass).val();
    var url = 'https://redfin-group.webflow.io/search?query=' + encodeURIComponent(query);
    window.location.href = url;
    }
    $(nav_search_btn).click(function() {
        performSearch();
    });
    $(inputClass).keypress(function(event) {
        if (event.which == 13) { 
            event.preventDefault();
            performSearch();
        }
    });
}
navSearch('.navbar_search_input input', '.nav_search_btn');
navSearch('.navbar_search_input_mobile input', '.nav_search_btn_mobile');
keyFeaturesMobile();
mobileNavSearch();

});