$(document).ready(function() {
  const $bars = $(".fa-bars");
  const $x = $(".fa-xmark");
  const $target = $("#toc");
  const $nav = $(".untoggle");
  const $main = $("main");
  const $foot = $("footer");
  const $navBack = $(".navback");
  $bars.click(function() {
    $target.toggleClass('toggle');
    $nav.toggleClass('toggle');
    $main.toggleClass('mainPage');
    $foot.toggleClass('footerPage');
    $navBack.toggleClass('back');
    return false;
  });
  
  $x.click(function() {
    $target.toggleClass('toggle');
    $nav.toggleClass('toggle');
    $main.toggleClass('mainPage');
    $foot.toggleClass('footerPage');
    $navBack.toggleClass('back');
    return false;
  });
});