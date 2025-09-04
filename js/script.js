function myFunction(){
	let x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}

function mOver(obj){
	obj.innerHTML = "Bear Croft"
}

function mOut(obj){
	obj.innerHTML = "Välkommen till vår kennel"
}

$(function() {
    $(".answer").hide();

    $(".question").click(function() {
        let svar = $(this).next(".answer");

        if (svar.is(":visible")) {
            svar.fadeTo(200, 0.2).slideUp(300);
        } else {
            svar.slideDown(300).fadeTo(200, 1);
        }
    });
});