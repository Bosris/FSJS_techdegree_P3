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
function isValidName() {
  const $name = $("#name");

  if ($name.val() === "") {
    $name.css("border", "2px solid red");
    return false;
  } else {
    $name.css("border", "2px solid #c1deeb");
    return true;
  }
}
//Email validation
function isValidEmail() {
  const $email = $("#mail");
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (regexEmail.test($email.val())) {
    $email.css("border", "2px solid #c1deeb");
    return true;
  } else {
    $email.css("border", "2px solid red");
    return false;
  }
}

//Register for activites validation
function isValidActivites() {
  if ($("[type=checkbox]:checked").length >= 1) {
    $(".activities").css("border", "");
    return true;
  } else {
    $(".activities").css("border", "2px solid red");
    return false;
  }
}
function isValidCreditCard() {
  if ($("#cc-num").val().length >= 13 && $("#cc-num").val().length <= 16) {
    $("#cc-num").css("border", "2px solid #c1deeb");
    return true;
  } else {
    $("#cc-num").css("border", "2px solid red");
    return false;
  }
}

function isValidZipCode() {
  const $zipCode = $("#zip").val();
  const zipRegex = /^[0-9]{5}$/gm;
  if (zipRegex.test($zipCode)) {
    $("#zip").css("border", "2px solid #c1deeb");
    return true;
  } else {
    $("#zip").css("border", "2px solid red");
    return false;
  }
}

function isValidCVV() {
  const $cvv = $("#cvv").val();
  const cvvRegex = /^[0-9]{3}$/gm;
  if (cvvRegex.test($cvv)) {
    $("#cvv").css("border", "2px solid #c1deeb");
    return true;
  } else {
    $("#cvv").css("border", "2px solid red");
    return false;
  }
}

$("[type=submit]").click(function(e) {
  e.preventDefault();
  const paymentVal = $("#payment").val();
  isValidActivites();
  isValidName();
  isValidEmail();
  if (!isValidName && !isValidEmail && !isValidActivites) {
    e.preventDefault();
    if (paymentVal === "credit card") {
      e.preventDefault();
      isValidCVV();
      isValidCreditCard();
      isValidZipCode();
      if (!isValidCVV && !isValidCreditCard && !isValidZipCode) {
        e.preventDefault();
      }
    }
  }
});
