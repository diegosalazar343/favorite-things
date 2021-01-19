let favoriteArray =[]

$(document).ready(function() {
  $("#favorites").submit(function(event) {
    $("#result").hide();
    event.preventDefault();
    const favorite1 = $("input#favorite1").val();
    const favorite2 = $("input#favorite2").val();
    const favorite3 = $("input#favorite3").val();
    favoriteArray.push(favorite1, favorite2, favorite3);
      
    $("#result").html(favoriteArray + " ");
    console.log(favoriteArray);

    $("#result").show();
  });
});
