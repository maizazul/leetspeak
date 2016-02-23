var newWords = function (words) {
  var moreWords = words.replace(/e/gi, '3');
  moreWords.replace(/o/gi, '0').replace(/I/g, '1');
};



$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var words = $("input#words").val();
    var result = newWords(words);

    $(".translated").text(newWords);

    $("#result").show();
    event.preventDefault();
  });
});
