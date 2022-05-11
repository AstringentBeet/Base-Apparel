const formBorder = document.querySelector(".email")
const input = document.querySelector(".email--input");
const iconError = document.querySelector(".icon-error");
const submit = document.getElementById("btn");
const validityText = document.querySelector(".validity-text");

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*function multiEventListener(el, ls, fn){
  ls.split('').forEach(e => el.addEventListener(e, fn, false));
}*/

function init (){
  submit.addEventListener('click', function() {
    if(!reg.test(input.value.toLowerCase())){
      formBorder.style.transition="border-color 1s ease"
      formBorder.style.border = "2px solid rgb(249, 100, 100)";
      iconError.style.transition = "ease 1s"
      iconError.style.display = "inline-block";
      validityText.style.color = "rgb(249, 100, 100)";
      validityText.style.transition = "ease 1s";
      validityText.style.display = "inline-block";
      validityText.innerHTML = "Please provide a valid email.";
    } else {
      formBorder.style.transition="border-color 1s ease"
      formBorder.style.border = "1px solid green";
      validityText.style.transition = "ease 1s";
      validityText.innerHTML = "Email Sent!";
      validityText.style.color = "green";
      iconError.style.display = "none";
    }
  })
}
init();

/*function emailValid(){
  if(!reg.test(input.value.toLowerCase())){
    formBorder.style.border = "2px solid rgb(249, 100, 100)";
    iconError.style.disply = "inline-block";
    errorText.style.display = "inline-block";
  } else {
    formBorder.style.border = "1 px solid green"
    errorText.innerHTML = "Email Sent!";
    errorText.style.color = "green";
    iconError.style.display = "none";
  }
  input.value = "";
};*/

/*multiEventListener(input, 'keyup change, paste, cut', emailValid());*/