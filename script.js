
let email = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

const change = ["keyup", "change", "paste", "cut"];

let args = change.forEach(function(e) {
    window.addEventListener(e)
});

function validEmail (sel, evt)

/*var patt = /[a-z0-9._%+-]+@[a-z0-9.]+\.[a-z]{2,3}$/

$('body').on('keyup change paste cut', '#myEmail', function() {

	var res = patt.test($(this).val()) === true  ? 'Correct Email' : 'You have entered some crap';
  $('.result').text(res)
});*/