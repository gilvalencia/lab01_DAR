/*LABORATORIO 01_PARTE 01: CÓDIGO JAVASCRIPT*/

		function ejercicio01(){
		
			var texto=prompt("Introduce una palabra.");
		
			var longitud=texto.length;
		
		/*Se llama a la funcion comprobar() para chequear que se ha introducido
		una palabra y no una frase. A partir del recuento de espacios en el texto introducido
		podremos saberlo.*/
		
			comprobar(texto);
		
			function comprobar(texto){
				var numEspacios = 0;
				for(i=0; i<longitud+1; i++){
						if(texto[i] == " "){
							numEspacios++;
						}
				}
				
				/*Una vez analizado el texto, si tiene espacios, se avisa al usuario y se retorna
				recursivamente sobre la misma funcion ejercicio01() hasta que el usuario inserte una palabra.*/
				
				if(numEspacios > 0){
					alert("Introduce una palabra, no una frase.");
					return ejercicio01();
				}
				
				/*Si lo inserta todo correctamente, sin espacios, se ejecuta la función palindromo() dentro del alert().*/
				
				else{
					alert(palindromo(texto));
				}
			}
		
		/*La funcion palindromo() usa la mitad de la variable longitud para saber a partir de qué
		altura tiene que analizar. Una vez la tiene, se comprueba si los caracteres de los extremos
		a esa mitad coinciden. En el caso de que coincidan, se devuelve que la cadena es un palíndromo.
		En caso negativo, se devuelve lo contrario.*/
		
			function palindromo(texto){
				var mitad=Math.floor(longitud/2);
			
				for(i=0; i<mitad; i++){
					if(texto[i] !== texto[longitud - 1 - i]){
						return "La cadena \""+texto+"\" no es un palindromo."
					}
				}
				return "La cadena \""+texto+"\" es un palindromo."
			}
		}
		
		function ejercicio02(){
		
		/*En este ejercicio tan solo se solicitan dos números al usuario. Y se ejecuta dentro del alert()
		la función que comprueba las tres posibles condiciones: si el primero es mayor que el segundo, 
		si el segundo es mayor que el primero o si son iguales.*/
		
		/*Para evitar que se introduzcan letras en el ejercicio, se comprueba previamente
		a la ejecución de la función, si los datos introducidos por el usuario son números
		utilizando la función .match() de javascript que comprueba si el valor de la variable
		es igual al del valor de la variable que se encuentra entre paréntesis de la función.*/	
		
			var numero1 = comprobarEntrada();
			var numero2 = comprobarEntrada();
			
		/*Los valores de ambos números se obtienen en la propia función comprobarEntrada(). 
		Si los datos introducidos no son los correctos, la propia función solicita al usuario
		recursivamente hasta que introduzca los datos correctos.*/
		
		/*Una vez introducidos correctamente, se ejecuta la función que nos dice el resultado del ejercicio.*/
		
			alert(comprobante(numero1, numero2));
			
			function comprobarEntrada(){
				var valorAceptado = /^[0-9]+$/;
				var numero=prompt("Introduce un n\xfamero.");
				
				if(numero.match(valorAceptado)){
					return numero;
				}
				else{
					alert("Introduzca un n\xfamero v\xe1lido, por favor.");
					return comprobarEntrada();
				}
			}
		
			function comprobante(numero1, numero2){
				if(numero1 > numero2){
					return "El n\xfamero \""+numero1+"\" es mayor que \""+numero2+"\""
				}
				else if(numero2 > numero1){
					return "El n\xfamero \""+numero2+"\" es mayor que \""+numero1+"\""
				}
				else{
					return "Los n\xfameros \""+numero1+"\" y \""+numero1+"\" son iguales"
				}
			}
		}
		
		function ejercicio03(){
		
			var cadena=prompt("Introduce una frase.");
		
		/*Se ejecuta la función comprobar() para chequear que el número de vocales sobre la variable numeroVocales
		y el número de espacios sobre la variable numeroEspacios. Dependiendo de los espacios, la función se llama
		recursivamente hasta que el usuario introduce una frase y no una cadena.*/
		
			comprobar(cadena);
		
			function comprobar(cadena){
				var longitud = cadena.length;
				var numeroVocales = 0;
				var numeroEspacios = 0;
				var numeroConsonantes = 0;
			
				for(i=0; i<longitud+1; i++){
					if(cadena[i] == "a" || cadena[i] == "A"){
						numeroVocales++;
					}
					else if(cadena[i] == "\xe1" || cadena[i] == "\xc1"){
						numeroVocales++;
					}
					else if(cadena[i] == "e" || cadena[i] == "E"){
						numeroVocales++;
					}
					else if(cadena[i] == "\xe9" || cadena[i] == "\xc9"){
						numeroVocales++;
					}
					else if(cadena[i] == "i" || cadena[i] == "I"){
						numeroVocales++;
					}
					else if(cadena[i] == "\xed" || cadena[i] == "\xcd"){
						numeroVocales++;
					}
					else if(cadena[i] == "o" || cadena[i] == "O"){
						numeroVocales++;
					}
					else if(cadena[i] == "\xf3" || cadena[i] == "\xd3"){
						numeroVocales++;
					}
					else if(cadena[i] == "u" || cadena[i] == "U"){
						numeroVocales++;
					}
					else if(cadena[i] == "\xfa" || cadena[i] == "\xda"){
						numeroVocales++;
					}
					else if(cadena[i] == " "){
						numeroEspacios++;
					}
					else{
						numeroConsonantes++;
					}
				}
				
				if(numeroEspacios == 0){
					alert("Introduce una frase, no una palabra.");
					return ejercicio03();
				}
				
			/*En el caso de que numeroEspacios sea mayor que 0, se ejecuta dentro del 
			alert() la función resultado().*/
				else{
					alert(resultado(numeroVocales));
				}
			}
		
			/*La función resultado devuelve el número de vocales, en función de su cuantía: 0, 1 o el número exacto.*/
			function resultado(numero){
				if(numero == 0){
					return "La cadena introducida tiene 0 vocales.";
				}
				else if(numero == 1){
					return "La cadena introducida tiene 1 vocal.";
				}
				else{
					return "La cadena introducida tiene "+numero+" vocales.";
				}
			}
		}
		
		function ejercicio04(){
		
			var cadena=prompt("Introduce una frase.");
		
			var longitud=cadena.length;
			var vecesA = 0;
			var vecesE = 0;
			var vecesI = 0;
			var vecesO = 0;
			var vecesU = 0;
			var vecesEspacio = 0;
			var vecesConsonante = 0;
		
		/*Comprobacion de numero de letras, espacios y consonantes. Incluidas vocales con tildes. 
		Ademas de para chequear las vocales, se comprueba que lo introducido es una frase gracias al espacio.*/
		
		/*La variable longitud nos da el tamaño de la cadena, para poder chequear en el bucle for todos
		los caracteres hasta el valor de dicha variable.*/
		
			for(i=0; i<longitud+1; i++){
				if(cadena[i] == "a" || cadena[i] == "A"){
					vecesA++;
				}
				else if(cadena[i] == "\xe1" || cadena[i] == "\xc1"){
					vecesA++;
				}
				else if(cadena[i] == "e" || cadena[i] == "E"){
					vecesE++;
				}
				else if(cadena[i] == "\xe9" || cadena[i] == "\xc9"){
					vecesE++;
				}
				else if(cadena[i] == "i" || cadena[i] == "I"){
					vecesI++;
				}
				else if(cadena[i] == "\xed" || cadena[i] == "\xcd"){
					vecesI++;
				}
				else if(cadena[i] == "o" || cadena[i] == "O"){
					vecesO++;
				}
				else if(cadena[i] == "\xf3" || cadena[i] == "\xd3"){
					vecesO++;
				}
				else if(cadena[i] == "u" || cadena[i] == "U"){
					vecesU++;
				}
				else if(cadena[i] == "\xfa" || cadena[i] == "\xda"){
					vecesU++;
				}
				else if(cadena[i] == " "){
					vecesEspacio++;
				}
				else{
					vecesConsonante++;
				}
			}
		
		/*Se comprueba que lo introducido por el usuario es una frase.
		Si no es una frase, la primera condicion en el condicional llama recursivamente a la misma funcion
		hasta que el usuario introduce una frase en vez de una palabra.*/
		
			if(vecesEspacio == 0){
				alert("Introduce una frase. No una palabra.");
				return ejercicio04();
			}
			else{
				alert("La frase introducida tiene:"+"\n->"+vecesASalida()+"\n->"+vecesESalida()+"\n->"+vecesISalida()+"\n->"+vecesOSalida()+"\n->"+vecesUSalida());
			}
		
		/*Funciones que obtienen el resultado de vocales, dependiendo del numero de vocales (0, 1 o varias)*/
		
			function vecesASalida(){
				if(vecesA == 1){
					return "Una letra 'A'.";
				}
				else if(vecesA > 1){
					return vecesA+" veces la letra 'A'.";
				}
				else{
					return "Ninguna letra 'A'.";
				}
			}
			function vecesESalida(){
				if(vecesE == 1){
					return "Una letra 'E'.";
				}
				else if(vecesE > 1){
					return vecesE+" veces la letra 'E'.";
				}
				else{
					return "Ninguna letra 'E'.";
				}
			}
			function vecesISalida(){
				if(vecesI == 1){
					return "Una letra 'I'.";
				}
				else if(vecesI > 1){
					return vecesI+" veces la letra 'I'.";
				}
				else{
					return "Ninguna letra 'I'.";
				}
			}
			function vecesOSalida(){
				if(vecesO == 1){
					return "Una letra 'O'.";
				}
				else if(vecesO > 1){
					return vecesO+" veces la letra 'O'.";
				}
				else{
					return "Ninguna letra 'O'.";
				}
			}
			function vecesUSalida(){
				if(vecesU == 1){
					return "Una letra 'U'.";
				}
				else if(vecesU > 1){
					return vecesU+" veces la letra 'U'.";
				}
				else{
					return "Ninguna letra 'U'.";
				}
			}
		}
