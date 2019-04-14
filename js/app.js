// Focus name and hide other job role
$("#name").focus();
$("#other-title").hide();
$("#credit-card").hide();
$("#paypal-div").hide();
$("#bitcoin-div").hide();
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

// Register for activities
$(".activities input").change(function() {
  if (
    //when javscript frameworks workshop is checked
    $(this).attr("name") === "js-frameworks" &&
    !$("[name=express]").prop("disabled") //checks if express workshop is not disabled
  ) {
    $("[name=express").prop("disabled", true);
  } else if (
    $(this).attr("name") === "js-frameworks" &&
    $("[name=express]").prop("disabled")
  ) {
    $("[name=express").prop("disabled", false);
  }
  // When express workshop is checked
  else if (
    $(this).attr("name") === "express" &&
    !$("[name=js-frameworks]").prop("disabled") //checks if express workshop is not disabled
  ) {
    $("[name=js-frameworks").prop("disabled", true);
  } else if (
    $(this).attr("name") === "express" &&
    $("[name=js-frameworks]").prop("disabled")
  ) {
    $("[name=js-frameworks").prop("disabled", false);
  }
  // when javascript libraries selected
  else if (
    $(this).attr("name") === "js-libs" &&
    !$("[name=node]").prop("disabled") //checks if express workshop is not disabled
  ) {
    $("[name=node").prop("disabled", true);
  } else if (
    $(this).attr("name") === "js-libs" &&
    $("[name=node]").prop("disabled")
  ) {
    $("[name=node").prop("disabled", false);
  }
  // when node workshop selected
  else if (
    $(this).attr("name") === "node" &&
    !$("[name=js-libs]").prop("disabled") //checks if express workshop is not disabled
  ) {
    $("[name=js-libs").prop("disabled", true);
  } else if (
    $(this).attr("name") === "node" &&
    $("[name=js-libs]").prop("disabled")
  ) {
    $("[name=js-libs").prop("disabled", false);
  }
});

// Payment info section
$("#payment").change(function() {
  if ($(this).val() === "paypal") {
    $("#bitcoin-div").hide();
    $("#credit-card").hide();
    $("#paypal-div").show();
  } else if ($(this).val() === "credit card") {
    $("#bitcoin-div").hide();
    $("#credit-card").show();
    $("#paypal-div").hide();
  } else if ($(this).val() === "bitcoin") {
    $("#bitcoin-div").show();
    $("#credit-card").hide();
    $("#paypal-div").hide();
  }
});

//Form validation section

//Name validation
const $name = $("#name");
