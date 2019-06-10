$(document).ready(function() {
  $("form#assessment").submit(function(event) {
    if (bathroom1.checked && friends1.checked) {
      $("#a11").show();
      alert("condition yes");
    } else {
      alert("empty")
    }
    $(".main-body").hide();
    $("#again").show();
    event.preventDefault();
  });
  $("button#again").click(function() {
    location.reload(true);
  });
});
