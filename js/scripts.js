$(document).ready(function() {
  $("form#assessment").submit(function(event) {
    if (bathroom1.checked && friends1.checked) {
      $("#a11").show();
    } else if (bathroom1.checked && friends2.checked) {
      $("#a21").show();
    } else if (bathroom1.checked && friends3.checked) {
      $("#a31").show();
    } else if (bathroom2.checked && friends1.checked) {
      $("#a12").show();
    } else if (bathroom2.checked && friends2.checked) {
      $("#a22").show();
    } else if (bathroom2.checked && friends3.checked) {
      $("#a32").show();
    } else if (bathroom3.checked && friends1.checked) {
      $("#a13").show();
    } else if (bathroom3.checked && friends2.checked) {
      $("#a23").show();
    } else if (bathroom3.checked && friends3.checked) {
      $("#a33").show();
    } else {

    };
    alert("after elses");
    $(".main-body").hide();
    $("#again").show();
    event.preventDefault();
  });
  $("button#again").click(function() {
    location.reload(true);
  });
});
