$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var words = $("input#words").val();
    var newWords = words.replace(/e/gi, '3').replace(/o/gi, '0');

    $(".translated").text(newWords);

    $("#result").show();
    event.preventDefault();
  });
});
