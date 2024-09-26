
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

                  
                    const targetContent = subSelf.find(".is-kf-mobile");
                  

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
        $(".navbar_search_mobile").css("display", "block!important");
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
    var url = '/search?query=' + encodeURIComponent(query);
    window.location.href = url;
    }
    $(btnClass).click(function() {
        performSearch();
    });
    $(inputClass).keypress(function(event) {
        if (event.which == 13) { 
            event.preventDefault();
            performSearch();
        }
    });
}


function formSliderClose(){
  $(document).mouseup(function(e) {
    var container = $(".get-started-form-slider"); 
    if (!container.is(e.target) && container.has(e.target).length === 0) {        
      container.css({
        transform: 'translate3d(101vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'transform-style': 'preserve-3d',
        opacity: 0,
        display: 'none'
      });
    }
  });
}

// function copyToClipboard(){
// $('.copyButton').click(function (e) { 
//   console.log('Link copied to clipboard!');
// });
// }

// copyToClipboard();

function solutionAccordion2() {
  const containers = $(".solutions-accordion-2");
  if (!containers.length) return;

  containers.each(function () {
      const self = $(this);
      const allItems = self.find(".cl-accordion-data");
      const allImages = self.find(".sol-acc-img.is-desktop");
      const allBody = self.find(".cl-accordion-desc.is-marketing-desc2");

      addIndex(allItems);
      addIndex(allImages);
      addIndex(allBody);

      allItems.click(function () {
          const subSelf = $(this);
          const index = subSelf.data("index");

          const targetImage = allImages.filter(function () {
              return $(this).data('index') === index;
          });

          const targetBody = allBody.filter(function () {
            return $(this).data('index') === index;
        });

          if (!subSelf.hasClass("open")) {
              const body = subSelf.find(".cl-accordion-desc.is-marketing-desc2");
              allItems.removeClass("open");
              allImages.removeClass("active");
              targetImage.addClass("active");
              resetItems(allBody);
              subSelf.addClass("open");
              gsap.fromTo(targetBody,
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
            )
          }
      });

      allItems[0].click();
  })

  function addIndex(items) {
      items.each(function (index) {
          const self = $(this);
          self.data('index', index);
      })
  }

  function resetItems(items) {
    items.each(function () {
        const self = $(this);

        gsap.to(self, {
            height: 0,
            duration: 0.6,
            ease: Power2.easeOut,
            overwrite: true,
            onStart: () => {
                gsap.set(self, {
                    autoAlpha: 0,
                });
            },
        });
    })
}
}


  // gsap.registerPlugin(Draggable);

  // Draggable.create(".gallery-collection-wrapper", {
  //     type: "x",
  //     bounds: ".gallery-container",
  //     inertia: true,
  //     edgeResistance: 0.8,
  //     onDrag: function() {
  //         // console.log("dragging");
  //     },
  //     cursor: "grabbing"
  // });

$(".gallery-collection-top").owlCarousel({
    items: 4,
    autoWidth:true,
    loop: true,
    margin: 40,
    center: true,
    nav: false,
    autoplay: true,        
    autoplayTimeout: 5000,  
    autoplayHoverPause: true 
});

$(".gallery-collection-bottom").owlCarousel({
  items: 4,
  autoWidth:true,
  loop: true,
  margin: 40,
  center: true,
  nav: false,
  autoplay: true,        
  autoplayTimeout: 5000,  
  autoplayHoverPause: true 
});



    $(".templates-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      center: true,
      nav: true,
      navText: ["", ""],
      autoWidth: true
  });
  // Add 'center' class to the middle item
  function updateCenterClass() {
  $('.templates-carousel .owl-item').removeClass('center');
  $('.templates-carousel .owl-item.active').first().addClass('center');
  }

  // Initial call
  updateCenterClass();

  // Update center class on 'changed.owl.carousel' event
  $('.templates-carousel').on('changed.owl.carousel', function(event) {
  updateCenterClass();
  });




// Function to get query parameter value by name
function getQueryParam(name) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
let query = getQueryParam('query');
// console.log(query);

let decodedQuery = decodeURIComponent(query).replace(/\+/g, ' ');

if(query){
  if (decodedQuery && decodedQuery.trim() !== '') {
    $('.search-result-text').text('Search results for “'+decodedQuery+'”');
    $('.search-result-text').css("display", "block");
  } else {
    $('.search-result-text').css('display', 'none');
    // console.log("ayaw");
  }
}

function highlightText(container, className) {
  // Get the text from the elements within the container
  var title = $(container).find(className).text();
  var highlighted = $(container).find('.highlighted-text').text().trim();
  // Only run the replacement if highlighted text is not empty
  if (highlighted) {
  var output = title.replace(new RegExp(highlighted, 'g'), `<code>${highlighted}</code>`);
  $(container).find(className).html(output);
  // console.log(output);
  }
}

$('.nav-dd-list-container .collection-list-20 .w-dyn-item').each(function() {
  highlightText(this, '.cp-link-text');
});

$('.nav-dd-list-container .res-links .w-dyn-item').each(function() {
  highlightText(this, '.cp-card-title.is-res');
});

$('.nav-dd-list-container .pr-links .pr-link-block').each(function() {
  highlightText(this, '.rent-title-w-highlight');
});


$('.navbar_mob_dd_body .collection-list-20 .w-dyn-item').each(function() {
  highlightText(this, '.cp-link-text');
});

$('.navbar_mob_dd_body .res-links .w-dyn-item').each(function() {
  highlightText(this, '.cp-card-title.is-res');
});

$('.navbar_mob_dd_body .pr-links .pr-link-block').each(function() {
  highlightText(this, '.rent-title-w-highlight');
});




function updateActiveStyles() {
  var $activeItems = $('.content-carousel-w-icons .owl-item.active');
  if ($activeItems.length > 1) {
      // Remove opacity from all active items
      $activeItems.css('opacity', '');
      // Apply opacity only to the second active item
      $activeItems.eq(1).css('opacity', '0.5');
  }
}

// Function to check screen size and apply styles
function handleResize() {
  if ($(window).width() <= 767) {
      var $carousel = $('.content-carousel-w-icons');

      if ($carousel.length > 0) {  // Check if the element exists
          // Observe changes to the class and update styles accordingly
          var observer = new MutationObserver(function() {
              updateActiveStyles();
          });

          // Start observing
          observer.observe($carousel[0], {
              childList: true,
              subtree: true,
              attributes: true,
              attributeFilter: ['class']
          });

          // Initial update of styles
          updateActiveStyles();
      }
  }
}

$('.legal-nav-space').last().hide();


// Call the handleResize function on document ready and window resize
handleResize();
$(window).resize(handleResize);



solutionAccordion2();
formSliderClose();
navSearch('.navbar_search_input input', '.nav_search_btn');
navSearch('.navbar_search_input_mobile input', '.nav_search_btn_mobile');
keyFeaturesMobile();
mobileNavSearch();

$('.listing-package .lp-cta').on('click', function() {
  var tagSection = $(this).attr('data-tag_section');
  console.log('eyy: '+tagSection); // You can replace this with any action you want to perform
  $('.packages-form .get-started-form-slider').attr('data-tag_section', tagSection);
  $('.packages-form .get-started-form-slider .contact-selection .unit-selection').attr('data-tag_section', tagSection);
  $('.packages-form .get-started-form-slider .cta-get-started-form').attr('data-tag_section', tagSection);
});


});





