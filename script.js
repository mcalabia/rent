window.onload = function() {
    var radioButton = document.getElementById("House-Small-Complex-Condo-1-19-units");
    if (radioButton) {
        radioButton.checked = true;
    }
};

$(document).ready(function() {
    $(".nav_search_btn").click(function() {
        var query = $(".navbar_search_input").val();
        window.location.href = "/search?query=" + encodeURIComponent(query);
    });
});


var queryString = window.location.search;
console.log(queryString);
// ?utm_source=facebook&utm_medium=post&utm_campaign=webflow&utm_content=content&utm_term=term&gclid=abcd1234
var URLSearchParams_wb = new URLSearchParams(queryString);

const utmParameters = [
  "utm_source", 
  "utm_medium", 
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid"
];

for (const utm_element of utmParameters) {
  /* if the UTM parameter exists */
  $("form").each(function(index) {
    if (URLSearchParams_wb.has(utm_element)) {
      console.log(utm_element + " exists");
      /* get the UTM value of this UTM param */
      var value = URLSearchParams_wb.get(utm_element);
      /* change the form hidden field to this UTM URL value */
      $(this).find("." + utm_element).val(value);
    }
  });
}/* end for loop */
