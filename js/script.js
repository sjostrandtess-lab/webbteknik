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
    $(".answer").hide(); // Göm svaren från början

    $(".question").click(function() {
        let svar = $(this).next(".answer");

        if (svar.is(":visible")) {
            // Om svaret redan är synligt, tona och slajda bort det
            svar.fadeTo(200, 0.2).slideUp(300);
        } else {
            // Visa det med slideDown och öka opaciteten
            svar.slideDown(300).fadeTo(200, 1);
        }
    });
});