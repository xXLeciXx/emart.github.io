/**document.getElementById("boton").onclick=function (params) {
    console.log ("Capturamos el Evento Click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en HTML"
}
*/

document.getElementById("boton").addEventListener("click", function() {
    console.log("Hola Mundo desde EvenListener");
    document.getElementById("demo").innerHTML="Estamos Probando Nuestro Primer Evento"
});

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#FFAFF8";

});

document.getElementById("boton_default").addEventListener("click", function() {
    document.body.style.backgroundColor = "White";

});

document.getElementById("boton_ocultar").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none";

});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}