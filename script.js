let subscribeButton = document.querySelector(".submit");
let newsletterPage = document.querySelector(".form-container");
let successPage = document.querySelector("#success");
let emailInput = document.querySelector(".email-input");
let errorMsg = document.querySelector("#error-msg");
let sentTo = document.querySelector(".email-sent");
function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
}
// https://zparacha.com/validate-email-address-using-javascript-regular-expression
subscribeButton.addEventListener("click", function () {
  // if (!validateEmail(emailInput.value) || emailInput.value.length == 0) {

  //   alert("kekw");
  // }
  event.preventDefault();
  if (validateEmail(emailInput.value)) {
    sentTo.textContent = emailInput.value;
    newsletterPage.classList.remove("form-container");
    newsletterPage.classList.add("hide-container");
    successPage.classList.add("success-msg");
    successPage.classList.remove("hide-container");
  } else {
    errorMsg.classList.add("error-message");
    errorMsg.classList.remove("hide-container");
  }
});
