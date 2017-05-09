var peso = parseInt(document.getElementById("peso").value);
//gravedad en otros planetas			
	var g_mercurio = 3.7;
	var g_venus = 8.8;
	var g_tierra = 9.8;
	var g_marte = 3.7;
	var g_jupiter = 24.8;
	var g_saturno = 9.0;
	var g_urano = 8.7;
	var g_neptuno = 10.9;
	var g_pluton = 0.65;
			
var peso_final;
var nombre;
			
//Switch para calcular el peso en otro planeta..  
switch(planeta){
	case (planeta = "mercurio")
	{
		peso_final = peso * g_mercurio / g_tierra;
	}
	case(planeta = "venus")
	{
		peso_final = peso * g_mercurio / g_tierra;
	}


}