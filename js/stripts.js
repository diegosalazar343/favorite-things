const favoritesArray = [favorite1, favorite2, favorite3]

$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    const favorite1 = $("input#favorite1").toString();
    const favorite2 = $("input#favorite2").toString();
    const favorite3 = $("input#favorite3").toString();
  })
})
