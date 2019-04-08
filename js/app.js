// Focus name and hide other job role
$("#name").focus();
$("#other-title").hide();

//job Role section
$("#title").change(function() {
  if ($(this).val() === "other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
});

// t-shirt info section
const $design = $("#design");
const $colorDiv = $("#colors-js-puns");
const $color = $("#color");
$colorDiv.hide();

$design.change(function() {
  $colorDiv.show();
  if ($(this).val() === "js puns") {
    $(".js-puns").show();
    $(".js-shirt").hide(); //hides the normal js shirts
    $color.val("cornflowerblue"); // sets the color selector to the first js pun shirt
  } else if ($(this).val() === "heart js") {
    $(".js-puns").hide();
    $(".js-shirt").show();
    $color.val("tomato"); // sets the color selector to the first js heart shirt
  }
});
