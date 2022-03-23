
let email = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

const change = ["keyup", "change", "paste", "cut"];

let args = change.forEach(function(e) {
    window.addEventListener(e)
});

function validEmail (sel, evt)