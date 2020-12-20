/*LABORATORIO 01_PARTE 02: CÓDIGO AJAX*/

	/*Función para no perder los datos HTML en javascript. Se usa una cadena prototype para no
	perder la eliminación de escape.*/
	/*La función unescape() decodifica una cadena codificada. De ahí que se use para decodificar
	el contenido de la URL añadida en el ejercicio que recibe el contenido HTML.*/

	String.prototype.transformaCaracteresEspeciales = function() {
		return unescape(escape(this).
            replace(/%0A/g, '<br/>').
            replace(/%3C/g, '&lt;').
            replace(/%3E/g, '&gt;'));
	}
  
	var timeStart = 0;
  
	/*Ejercicio 01 AJAX.*/
 
	window.onload = function() {
		
		/*Se declara la variable recurso, la cual obtendrá el valor que se obtenga de la función getElementById
		de la etiqueta identificativa en HTML de "recurso". Se enlaza el contenido de ambos elementos.*/
		var recurso = document.getElementById('recurso');
		
		/*Para obtener el valor que un usuario introduce en el recuadro URL, el método "value" de javascript
		contiene el valor que escribe un usuario (o el establecido por defecto).
		Como por defecto se solicita que adquiera el valor de la URL actual, la propiedad location.href
		de javascript devuelve la URL completa de la página actual.*/
		recurso.value = location.href;

		/*Para mostrar el contenido como se pide en el ejercicio 02, al hacer click sobre el elementos
		de HTML "cargarContenido", se ejecuta la función cargaContenido().*/
		document.getElementById('cargarContenido').onclick = cargaContenido;
	}
	
	/*Ejercicio 02 AJAX.*/
	
	function cargaContenido() {
		
		document.getElementById('contenidos').innerHTML = "";
		document.getElementById('estados').innerHTML = "";

		if(window.XMLHttpRequest) {
		peticion = new XMLHttpRequest();
		}
		else {
		peticion = new ActiveXObject("Microsoft.XMLHTTP");
		}

		peticion.onreadystatechange = mostrarContenido;

		timeStart = new Date();
		
		var recurso = document.getElementById('recurso').value;
		
		peticion.open('GET', recurso+'?nocache='+Math.random(), true);
		peticion.send(null);
	}
	
	/*Ejercicio 03 AJAX.*/
	
	function mostrarContenido() {
		var timeEnd = new Date();
		var ms = timeEnd - timeStart;

		var estadosServidor = ['No inicializado', 'Conexión al servidor', 'Solicitud recibida', 'Procesando', 'Respuesta finalizada'];

		var estados = document.getElementById('estados');
		estados.innerHTML += "[" + ms + " mseg.] " + estadosServidor[peticion.readyState] + "<br/>";

		if(peticion.readyState == 4) {
			if(peticion.status == 200) {
				var contenido = document.getElementById('contenidos');
				contenido.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
			}
			mostrarCabeceras();
			mostrarCodigoEstado();
		}
	}
	
	/*Ejercicio 04 AJAX.*/
	
	function mostrarCabeceras() {
		var cabeceras = document.getElementById('cabeceras');
		cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
	}
	
	/*Ejercicio 05 AJAX.*/
	
	function mostrarCodigoEstado() {
		var codigo = document.getElementById('codigo');
		codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
	}