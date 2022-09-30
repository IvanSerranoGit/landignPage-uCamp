let carName = "Volvo"
let x = 50;
let y = 50;
let a = 5;
let b = 10;
let suma = a + b;
let z = x+y

console.log(carName);
console.log(x);
console.log(suma);
console.log(z);


function nombreCompleto(nombre, apellido){
    console.log( nombre + " " + apellido );
}
nombreCompleto("Iván", "Serrano");

const otroNombreCompleto = (nombre, apellido) =>{
    return nombre + " " + apellido
}
otroNombreCompleto("Iván", "Serrano")
console.log(otroNombreCompleto);


function mayorDeEdad(nombre, edad){
    if(edad >= 18){
        console.log(nombre + " Obtiene licencia");
    }else{
        console.log(nombre + " No obtienes licencia");
    }
}
mayorDeEdad("Iván", 32)
mayorDeEdad("Juan", 17)


function calificaciones(a,b,c,d,e) {
    let total = a+b+c+d+e
    let promedio = total / 5
    console.log(promedio);
    if (promedio >= 70) {
        console.log("Pasaste!");
    }else if(promedio < 70){
        console.log("Suerte a la proxima");
    }
}
console.log("Monica Rodriguez " + "Melissa Veronica Herrera " + "Ivan Serrano");
calificaciones(70, 80, 70, 40, 90)
calificaciones(10, 30, 30, 40, 30)