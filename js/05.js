// pasos para la creación de un request

var btnCargar = document.getElementById('cargar');

function cargarContenido() {
  // crearlo
  var xhr = new XMLHttpRequest();

  // abrirlo
   xhr.open("GET", "https://github.com/gilvalencia/lab01_DAR/blob/main/js/texto_prueba.txt", true);
   
   // revisar que cambie
   xhr.onreadystatechange = function() {
      //console.log(xhr.readyState);
      
      if(xhr.readyState == 4 && xhr.status == 200) {
          console.log("Se cargo correctamente");
          
        
      } 
   };

   xhr.send(); 
}

btnCargar.addEventListener('click', cargarContenido );


