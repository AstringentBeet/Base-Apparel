const input = document.getElementsByClassName("email--input");
const error = document.getElementsByClassName("icon-error");
const submit = document.getElementsByClassName("btn");
const errorText = document.getElementsByClassName("error-text");

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const change = ["keyup", "change", "paste", "cut"];

change.forEach(interaction, e => {
  submit.addEventListener(input, function() {
    if(!reg.test(input.value.toLowerCase())){

    }
  })
});