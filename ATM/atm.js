//CLASS//

class Billete
{
	constructor(v, a)
	{
		this.value = v;
		this.amount = a;
		this.imagen = new Image();

		this.imagen.src = imagenes[this.value];
	}
}

//FUNCTION//

function entregarDinero()
{
	var total = document.getElementById("Dinero");
	dinero = parseInt(total.value);

	for(var bi of caja)
	{
		if(dinero > 0)
		{
			div = Math.floor(dinero / bi.value);

			if(div > bi.amount)
			{
				paper = bi.amount;
			}
			else
			{
				paper = div;
			}

			entregado.push(new Billete(bi.value, paper));
			dinero -= (bi.value * paper);
			bi.amount -= paper;
		}
	}
	if(dinero > 0)
	{
		result.innerHTML= "Insuficent money or wrong amount (100>)!";
	}
	else
	{
		for(var e of entregado)
		{		
			if (e.amount > 0) 
			{
				result.innerHTML += e.amount + " billetes de: " + "<hr />";
				result.appendChild(e.imagen);
				result.innerHTML += "<br />";
			}
		}	
	}
}

//VARIABLES//

var imagenes = [];
imagenes["100"] = "100.jpeg";
imagenes["200"] = "200.jpeg";
imagenes["500"] = "500.jpeg";
imagenes["1000"] = "1000.jpeg";

var caja = [];
var entregado = [];
caja.push(new Billete(100, 25));
caja.push(new Billete(200, 25));
caja.push(new Billete(500, 50));
caja.push(new Billete(1000, 75));

var dinero;
var div = 0;
var paper = 0;
var result = document.getElementById("result");

var button = document.getElementById("Extract");
button.addEventListener("click", entregarDinero);
