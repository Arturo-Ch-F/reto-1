//var entrada= document.querySelector(".txt1");
var salida= document.querySelector(".txt2");
var validado=false;


function vis(){ //elementos visibles
    im=document.getElementById("img1"); //imagen 1
    im.style.display='';


}
function nvis(){  //elementos ocultos
   
    im=document.getElementById("img1"); //magen 1
    im.classList.add("des");
    setTimeout(function(){
        im.style.display='none';
    },500)


   

   
   
   
}

function btnencriptar(){
       
   let entrada = document.getElementById("txt1").value
        

    if (entrada.length === 0 || /^\s+$/.test(entrada)) {
        alert("El Campo de texto esta vacio, Escriba una palabra");
    
    }
    else if (/[^a-z ]/.test(entrada)) {
        alert("Solo se permiten letras minusculas y sin acento");

    } 

else{
    let entrada = document.getElementById("txt1").value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    alert("encriptado");
    nvis();
    // document.getElementById("txt2").innerHTML = entrada;
    document.querySelector(".txt2").innerHTML = entrada;
     txt1.value = "";
     txt1.focus();
     validado=true;
}
   
     txt1.value = "";
     txt1.focus();

}


function btndeseencriptar(){
    let entrada = document.getElementById("txt1").value
    if (entrada.length === 0 || /^\s+$/.test(entrada)) {
        alert("El Campo de texto esta vacio, Escriba una palabra");
    
    }
    else if (/[^a-z ]/.test(entrada)) {
        alert("Solo se permiten letras minusculas y sin acento");

    } 

    else{

        let entrada = document.getElementById("txt1").value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/u/g, "ufat")

    alert("Texto desencriptado");
    // document.getElementById("txt2").innerHTML = entrada;
    document.querySelector(".txt2").innerHTML = entrada;
     txt1.value = "";
     txt1.focus();
    validado=true;

    }





}

function btncopiar(txt2){
    //const d=document;
    var aux = document.createElement("input");
    // aux.setAttribute("value", document.getElementById("txt2").innerHTML);
    aux.setAttribute("value", document.querySelector(".txt2").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
   
    
if(validado==true){
    alert("Texto copiado al portapapeles");
    document.querySelector(".copiado-exito").classList.add("show");
    setTimeout(() => {
      document.querySelector(".copiado-exito").classList.remove("show");
    }, 3000);
}
else{
    alert("No hay texto que copiar");
}
    


}









// var a=[entrada.value];
// //salida.value=a;
// var inicio;

// for (inicio=1;inicio<=a.length;inicio++){
//  if(a="a"){
//  a="aa"
//  salida.value=a;
//  }


// }

//terminar desencriptar, boton copiar y animaciones, validaciones






