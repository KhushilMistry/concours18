window.onload = function () {
  $("#icon").fadeOut("slow");
  $("#container-div").fadeIn("slow");
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
  $(".box").click(function(){
    $(this).next().slideToggle("fast");
    $(this).find('i').toggle();
  });

});