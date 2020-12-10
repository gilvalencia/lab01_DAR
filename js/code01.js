/*LABORATORIO 01_PARTE 01: CÓDIGO JAVASCRIPT*/

function ejercicio01(){
		
			var texto=prompt("Introduce una palabra.");
		
			alert(palindromo(texto));
		
			function palindromo(texto){
				var longitud=texto.length;
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
		
			var numero1=prompt("Introduce un número.");
			var numero2=prompt("Introduce otro número.");
		
			alert(comprobante(numero1, numero2));
		
			function comprobante(numero1, numero2){
				if(numero1 > numero2){
					return "El número \""+numero1+"\" es mayor que \""+numero2+"\""
				}
				else if(numero2 > numero1){
					return "El número \""+numero2+"\" es mayor que \""+numero1+"\""
				}
				else{
					return "Los números \""+numero1+"\" y \""+numero1+"\" son iguales"
				}
			}
		}
		
		function ejercicio03(){
		
			var cadena=prompt("Introduce una frase.");
		
			var numeroVocales=cadena.match(/[aeiou]/gi).length;
		
			alert("El número de vocales en la cadena \""+cadena+"\" es "+numeroVocales);
		
		}
		
		function ejercicio04(){
		
			var cadena=prompt("Introduce una frase.");
		
			var letraA=vecesA(cadena);
			var letraE=vecesE(cadena);
			var letraI=vecesI(cadena);
			var letraO=vecesO(cadena);
			var letraU=vecesU(cadena);
		
			alert("La letra A aparece "+letraA);
			alert("La letra E aparece "+letraE);
			alert("La letra I aparece "+letraI);
			alert("La letra O aparece "+letraO);
			alert("La letra U aparece "+letraU);
		
			function vecesA(cadena){
		
				var numeroA=cadena.match(/[a]/gi).length;
			
				if(numeroA == 0){
					return 0 + " veces.";
				}
				else if(numeroA == 1){
					return 1 + " vez."
				}
				else{
					return numeroA + " veces."
				}
			}
		
			function vecesE(cadena){
		
				var numeroE=cadena.match(/[e]/gi).length;
			
				if(numeroE == 0){
					return 0 + " veces.";
				}
				else if(numeroE == 1){
					return 1 + " vez."
				}
				else{
					return numeroE + " veces."
				}
			}
		
			function vecesI(cadena){
		
				var numeroI=cadena.match(/[i]/gi).length;
			
				if(numeroI == 0){
					return 0 + " veces.";
				}
				else if(numeroI == 1){
					return 1 + " vez."
				}
				else{
					return numeroI + " veces."
				}
			}
		
			function vecesO(cadena){
		
				var numeroO=cadena.match(/[o]/gi).length;
			
				if(numeroO == 0){
					return 0 + " veces.";
				}
				else if(numeroO == 1){
					return 1 + " vez."
				}
				else{
					return numeroO + " veces."
				}
			}
		
			function vecesU(cadena){
		
				var numeroU=cadena.match(/[u]/gi).length;
			
				if(numeroU == 0){
					return 0 + " veces.";
				}
				else if(numeroU == 1){
					return 1 + " vez."
				}
				else{
					return numeroU + " veces."
				}
			}
		
		}
