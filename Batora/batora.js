var imagenes = [];
imagenes["Laima"] = "laima.webp";
imagenes["Kirio"] = "kirio.webp";
imagenes["Pakkun"] = "pakkun.webp";



class Batora
{
	constructor(n, v, a, t)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		this.tipo = t;

		this.imagen.src = imagenes[this.nombre];

	}
	hablar()
	{
		alert(this.nombre);
	}
	mostar()
	{
		document.body.appendChild(this.imagen);		
		document.write("<p>");
		document.write("<strong>" + this.nombre + "</strong> <br />");
		document.write("Tipo: " + this.tipo + "<br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque + "<hr />");
		document.write("</p>");
	}
}

var coleccion = [];
coleccion.push(new Batora("Laima", 100, 30, "Tierra"));
coleccion.push(new Batora("Kirio", 80, 50, "Volador"));
coleccion.push(new Batora("Pakkun", 120, 40, "Pelea"));

for (var batorin of coleccion)
{
	batorin.mostar();
}

console.log(coleccion);
