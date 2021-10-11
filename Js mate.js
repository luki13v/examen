function sumar(){

    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)+parseInt(num2)
    alert("La suma es de: "+resultado);
}
function restar(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)-parseInt(num2)
    alert("La resta es de: "+resultado);
}

function Dividir(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)/parseInt(num2)
    alert("La division  es de: "+resultado);
}

function multi(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)*parseInt(num2)
    alert("La multi es de: "+resultado);
}
function ver(){
    var dato = document.getElementById("materia").value;
    switch (dato) {
        case "programacion":
            alert("Has selecionado Programacion")
            break;

            case "Soporte TI":
            alert("Has selecionado Soporte TI")
            break;

            case "TICS":
            alert("Has selecionado TICS")
            break;

            case "Diseño de software":
                alert("Has selecionado Diseño")
                break;

    
        default:
            break;
    }

}
function Calcuedad(){
var edad= document.getElementById("edad").value;
if (edad>=18){
alert("Eres mayor de edad"); 
}
else{
    alert("Eres menor de edad");

     }
 
}