var vp = document.getElementById("villapueblo");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.webp",
	cargaOK: false
};

var vaca = {
	url: "vaca.webp",
	cargaOK:false
};

var cerdo = {
	url: "cerdo.webp",
	cargaOK: false
};

var pollo ={
	url: "pollo.webp",
	cargaOK: false
};


var cantidadVaca = aleatoria(2, 15);
var cantidadCerdo = aleatoria(2, 15);
var cantidadPollo = aleatoria(2, 15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

cargarCerdo("red", 249, 249, 251, 251, papel);

function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}


function dibujar()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}

	if(vaca.cargaOK)
	{
		console.log(cantidadVaca);

		for (var v=0; v<cantidadVaca; v++)
		{
			var x = aleatoria(0, 7);
			var y = aleatoria(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(vaca.imagen, x, y);
		}
	}

	if(cerdo.cargaOK)
	{
		console.log(cantidadCerdo);

		for (var c=0; c<cantidadCerdo; c++)
		{
			var x = aleatoria(0, 7);
			var y = aleatoria(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(cerdo.imagen, x, y);
		}
	}
		
	if(pollo.cargaOK)
	{
		console.log(cantidadPollo);

		for (var p=0; p<cantidadPollo; p++)
		{
			x = aleatoria(0, 7);
			y = aleatoria(0, 7);
			x = x * 60;
			y = y * 60;
			papel.drawImage(pollo.imagen, x, y);
		}	
	}	
}

function aleatoria(min, max)
{
	var resultado;
	resultado =Math.floor(Math.random()  * (max - min + 1)) + min;
	return resultado;
}
