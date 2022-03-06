$(document).ready(function() {
  const $link = $("#resume");
  $link.on("click", function() {
    window.open('../documents/test.pdf');
    return false;
  });
});