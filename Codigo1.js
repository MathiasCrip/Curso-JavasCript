
//Programa que calcula sobre un determinado monto, el monto a pagar por mes y los intereses dependiendo 
//la cantidad de cuotas





function cuotaConInteres() {
    let couta
    let monto

    do {
        monto = parseFloat(prompt("Ingresar monto (Entre $2000 Hasta $10000): "))
        while (monto <= 1999 || monto > 10000) {
            if (monto <= 1999) {
                monto = parseFloat(prompt("El monto ingresado es menor a la cantidad permitida"))
            } else {
                monto = parseFloat(prompt("El monto ingresado es mayor al permitido"))
            }
        }
        cuota = parseFloat(prompt("Cantidad de cuotas a financiar (1/6):"))

        if (monto > 1999 && monto <= 3999) {
            console.log("Monto seleccionado: " + monto)
        } else if (monto > 3999 && monto <= 6999) {
            console.log("Monto seleccionado: " + monto)
        } else if (monto > 6999 && monto <= 8999) {
            console.log("Monto seleccionado: " + monto)
        } else if (monto > 8999 && monto <= 10000) {
            console.log("Monto seleccionado: " + monto)
        }
    } while (monto <= 1999 && monto > 10000)

    cantidadCuotas(cuota, monto)

}


function cantidadCuotas(cuota, monto) {
    let montoTotal = monto
    switch (cuota) {

        case 1: console.log("El monto a pagar por mes es de: " + monto)
            console.log("Monto total a pagar: " + montoTotal)
            break;
        case 2:
            montoTotal += (10 * monto) / 100
            console.log("El monto a pagar por mes es de: " + monto / 2)
            console.log("Monto total a pagar: " + montoTotal)
            break;
            montoTotal += (15 * monto) / 100
        case 3: console.log("El monto a pagar por mes es de: " + monto / 3)
            console.log("Monto total a pagar: " + montoTotal)
            break;
        case 4:
            montoTotal += (20 * monto) / 100
            console.log("El monto a pagar por mes es de: " + monto / 4)
            console.log("Monto total a pagar: " + montoTotal)
            break;
        case 5:
            montoTotal += (25 * monto) / 100
            console.log("El monto a pagar por mes es de: " + monto / 5)
            console.log("Monto total a pagar: " + montoTotal)
            break;
        case 6:
            montoTotal += (30 * monto) / 100
            console.log("El monto a pagar por mes es de: " + monto / 6)
            console.log("Monto total a pagar: " + montoTotal)
            break;

        default:
            console.log("Cuota excedente")
            break;
    }
}



cuotaConInteres()




