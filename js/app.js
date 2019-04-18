const $name = $("#name");

//selects the credit card option
$("select[name=user_payment] option:eq(1)").attr("selected", "selected");

//creates the cost and appends it to activities
let cost = 0;
const label = document.createElement("label");
label.innerHTML = `Cost: $${cost}`;
$(".activities").append(label);

// Focus name and hide other job role
$name.focus();
$("#other-title").hide();
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
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=express").prop("disabled", true);
  } else if (
    $(this).attr("name") === "js-frameworks" &&
    $("[name=express]").prop("disabled")
  ) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=express").prop("disabled", false);
  }
  // When express workshop is checked
  else if (
    $(this).attr("name") === "express" &&
    !$("[name=js-frameworks]").prop("disabled") //checks if js framework workshop is not disabled
  ) {
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=js-frameworks").prop("disabled", true);
  } else if (
    $(this).attr("name") === "express" &&
    $("[name=js-frameworks]").prop("disabled")
  ) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=js-frameworks").prop("disabled", false);
  }
  // when javascript libraries selected
  else if (
    $(this).attr("name") === "js-libs" &&
    !$("[name=node]").prop("disabled") //checks if node workshop is not disabled
  ) {
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=node").prop("disabled", true);
  } else if (
    $(this).attr("name") === "js-libs" &&
    $("[name=node]").prop("disabled")
  ) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=node").prop("disabled", false);
  }
  // when node workshop selected
  else if (
    $(this).attr("name") === "node" &&
    !$("[name=js-libs]").prop("disabled") //checks if js-libs workshop is not disabled
  ) {
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=js-libs").prop("disabled", true);
  } else if (
    $(this).attr("name") === "node" &&
    $("[name=js-libs]").prop("disabled")
  ) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
    $("[name=js-libs").prop("disabled", false);
  } //main conference checks if its checked, add 200 else subtract 200
  else if ($(this).attr("name") === "all" && $(this).prop("checked")) {
    cost += 200;
    label.innerHTML = `Cost: $${cost}`;
  } else if ($(this).attr("name") === "all" && !$(this).prop("checked")) {
    cost -= 200;
    label.innerHTML = `Cost: $${cost}`;
  }
  //build tools checks if its checked, add 100 else subtract 100
  else if ($(this).attr("name") === "build-tools" && $(this).prop("checked")) {
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
  } else if (
    $(this).attr("name") === "build-tools" &&
    !$(this).prop("checked")
  ) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
  } //npm workshop checks if its checked, add 100 else subtract 100
  else if ($(this).attr("name") === "npm" && $(this).prop("checked")) {
    cost += 100;
    label.innerHTML = `Cost: $${cost}`;
  } else if ($(this).attr("name") === "npm" && !$(this).prop("checked")) {
    cost -= 100;
    label.innerHTML = `Cost: $${cost}`;
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
  } else if ($(this).val() === "select_method") {
    $("#bitcoin-div").hide();
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

//Credit card validation
function isValidCreditCard() {
  if ($("#cc-num").val().length >= 13 && $("#cc-num").val().length <= 16) {
    $("#cc-num").css("border", "2px solid #c1deeb");
    return true;
  } else {
    $("#cc-num").css("border", "2px solid red");
    return false;
  }
}

// Zip code validation
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

//CVV validation
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

// checks if there's any fields are false, if it is then prevent submission
$("[type=submit]").click(function(e) {
  const paymentVal = $("#payment").val();
  if (isValidName() === false) {
    e.preventDefault();
  }
  if (isValidEmail() === false) {
    e.preventDefault();
  }
  if (isValidActivites() === false) {
    e.preventDefault();
  }
  if (paymentVal === "credit card") {
    if (isValidCreditCard() === false) {
      e.preventDefault();
    }
    if (isValidCVV() === false) {
      e.preventDefault();
    }
    if (isValidZipCode() === false) {
      e.preventDefault();
    }
  }
});
