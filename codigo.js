
//Creo la clase de objeto
class Comida {
    constructor(nombre, referencia, categoria, precio) {
        this.nombre = nombre;
        this.referencia = referencia;
        this.categoria = categoria;
        this.precio = precio;
    }
}

//Categorizo arrays
const platos=[
    {
        nombre:"Ensalada Mixta",
        referencia:"refA001",
        categoria: "Entrantes",
        precio: 6.90
    },
    {
        nombre:"Ensalada César",
        referencia:"refA002",
        categoria: "Entrantes",
        precio: 9.90
    },
    {
        nombre:"Saquitos bolettus",
        referencia:"refA003",
        categoria: "Entrantes",
        precio: 16.90
    }

];


//Añado productos por push

platos.push(new Comida("Macarrones", "refB001", "Principal", 18));
platos.push(new Comida("Arroz con bogavante",  "refB002", "Principal", 28));
platos.push(new Comida("Solomillo ibérico",  "refB003", "Principal",25));
platos.push(new Comida("Tarta de fresa", "refC001", "Postres", 3));




//Funcion que ordena los productos por orden alfabético
function ordenAlfabetico (a,b) {
    return (a.nombre > b.nombre);
}

console.table(platos.sort(ordenAlfabetico));


//Funcion que ordena los productos por precio de mayor a menor
function precioDescendente (a, b) {
    return (b.precio - a.precio);
}

console.table(platos.sort(precioDescendente));

for(const precioProducto of platos){
    console.log("Precio: "+ precioProducto.precio);
}

platos.forEach(plato => console.log(plato.titulo));

//filter
//buscar los platos más caros
const caros = platos.filter(plato => plato.precio > 9);//nuevo array
console.log("los platos caros son " + caros);



let gastoEnvio = 3; //precio en euros


const platosConImpuestos=platos.map(plato => {
    return {
        nombre: plato.nombre,
        referencia: plato.referencia,
        categoria: plato.categoria,
        precio: plato.precio * 1.21
    }
});

console.table(platosConImpuestos);

//Calcular precio total compra

//reduce
//vamos a sumar todos los precios de los platos con Impuestos
let totalPrecios = platosConImpuestos.reduce(((acumulador, plato)=> acumulador + plato.precio),0);
console.log("La suma total de los platos es" ,totalPrecios + gastoEnvio);

