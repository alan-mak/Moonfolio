$(document).ready(function() {
  const $sandwich = $(".fa-bars");
  const $target = $("#toc");
  $sandwich.click(function() {
    $target.toggleClass('show');
    return false;
  })
});