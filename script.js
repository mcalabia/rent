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
