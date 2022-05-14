const formBorder = document.querySelector(".email")
const input = document.querySelector(".email--input");
const iconError = document.querySelector(".icon-error");
const submit = document.getElementById("btn");
const validityText = document.querySelector(".validity-text");

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate (){
  submit.addEventListener('click', function() {
    if(!reg.test(input.value.toLowerCase())){

      formBorder.style.transition="border 1s ease"
      formBorder.style.border = "2px solid rgb(249, 100, 100)";

      iconError.style.transition = "ease 1s"
      iconError.style.display = "inline-block";

      submit.style.marginTop="-2px";

      validityText.style.color = "rgb(249, 100, 100)";
      validityText.style.transition = "1s ease-in-out";
      validityText.style.display = "inline-block";
      validityText.innerHTML = "Please provide a valid email.";

    } else {

      formBorder.style.transition="border-color 1s ease"
      formBorder.style.border = "1px solid #9cc58a";

      submit.style.marginTop="-1px";

      iconError.style.transition="1s ease-in-out";
      iconError.style.display = "none";

      validityText.style.transition = "ease 1s";
      validityText.innerHTML = "Email Sent!";
      validityText.style.color = "#9cc58a";

    }
  })
}
validate();

/*
document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});

function multiEventListener(el, ls, fn() {
  ls.split('').forEach(e => el.addEventListener(e, fn, false));
});

multiEventListener(input, 'keyup keypress change paste cut', inIt);
*/