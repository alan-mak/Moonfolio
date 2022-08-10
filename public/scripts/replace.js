$(document).ready(function() {

  const $replace = $(".replace");
  if ($(document).width() < 429) {
    $replace.replaceWith("<span>Goal</span>");
    return false;
  }

  return true;
});