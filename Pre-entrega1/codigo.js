class Alumno {

    constructor(nombre, apellido, materia) {
        this.nombre = nombre
        this.apellido = apellido
        this.materia = materia

    }

}

class listNotas {

    addMateriaYnota() {
        return [{ materia: "Lengua", nota: getRandomInt(6) },
        { materia: "Matematicas", nota: getRandomInt(6) },
        { materia: "Algebra", nota: getRandomInt(6) },
        { materia: "Ingles", nota: getRandomInt(6) }]
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 5)
}

function addAlumno() {

    listaAlumnos.push(new Alumno("Matias", "Chazarreta", new listNotas().addMateriaYnota())
        , new Alumno("Lujan", "Miranda", new listNotas().addMateriaYnota())
        , new Alumno("Luis", "Alsemio", new listNotas().addMateriaYnota())
        , new Alumno("Nicolas", "Cabré", new listNotas().addMateriaYnota())
        , new Alumno("Zamanta", "Leguizamon", new listNotas().addMateriaYnota())
        , new Alumno("Santiago", "Del moro", new listNotas().addMateriaYnota())
        , new Alumno("Marcelo", "Saladillo", new listNotas().addMateriaYnota())
        , new Alumno("Soledad", "Solaro", new listNotas().addMateriaYnota())
        , new Alumno("Marcelo", "Saladillo", new listNotas().addMateriaYnota())
        , new Alumno("José", "Santoro", new listNotas().addMateriaYnota()))
}

function busquedaAlumno(nombreBuscado) {
    return listaAlumnos.find(e => e.nombre.toUpperCase() == nombreBuscado)
}

function bienvenida() {
    let opcion = parseInt(prompt("1 - Mostar Total de estudiantes\n2 - Buscar promedio de algún alumno\n3 - Mostrar el mejor promedio\n4 - Buscar alumno\n5 - SALIR"))
    mostrarOpciones(opcion)
}

function sacarPromedio(nombre) {
    let buscado = listaAlumnos.indexOf(busquedaAlumno(nombre))

    if (buscado < 0) {
        console.log("No se encontro estudiante")

    } else {
        let total = 0
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 4; j++) {
                total += listaAlumnos[buscado].materia[j].nota
            }
        }
        let resultado = total / 4
        console.log("----" + nombre + "----")
        console.log("Calificación total: " + total)
        console.log("Su promedio es de: " + resultado)
        console.log(listaAlumnos[buscado].materia)
    }

}

function buscarMejorPromedio() {
    let total = 0
    let sumaDePromedios = []
    let posicion

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            total += listaAlumnos[i].materia[j].nota
        }
        sumaDePromedios[i] = total / 4
        total = 0;
    }
    mejorPromedio = sumaDePromedios.reduce((a, b) => Math.max(a, b), 0)
    posicion = sumaDePromedios.indexOf(mejorPromedio)
    nombre = buscarEstudianteDelmejorPromedio(posicion + 1)
    console.log(nombre + " Tiene el mejor promedio de la clase, con " + mejorPromedio + " de nota")

}

function buscarEstudianteDelmejorPromedio(mp) {
    let nombre = listaAlumnos[mp].nombre
    return nombre
}

const listaAlumnos = [];
let listaNotas = []


addAlumno()
bienvenida()


function mostrarOpciones(opcion) {
    switch (opcion) {
        case 1:
            console.log(listaAlumnos)
            let op = parseInt(prompt("1 - Ordenar de manera descendiente\n2 - Ordenar de manera descendiente"))

            if (op == 1) {
                listaAlumnos.sort((a, b) => {
                    if (a.nombre > b.nombre) {
                        return 1
                    } else {
                        return -1
                    }
                    return 0
                })

            } else {
                listaAlumnos.sort((a, b) => {

                    if (a.nombre < b.nombre) {
                        return 1
                    } else {
                        return -1
                    }
                    return 0
                })

            }
            break;

        case 2:
            let nombrePromedio = prompt("Nombre del estudiante")
            sacarPromedio(nombrePromedio.toUpperCase())

            break;
        case 3:

            buscarMejorPromedio()

            break;
        case 4:
            const nombre = prompt("Ingresar nombre del alumno:")
            console.log(busquedaAlumno(nombre.toUpperCase()))

            break;
        case 5: alert("ADIOOOOOSSSS!! ")
            break;

        default: alert("Opcion incorrecta.")
            break;
    }
}


































// const persona = []

// function pedirDatos() {
//     persona.dni = prompt("Ingresar DNI")
//     persona.nombre = prompt("Escribí tu Nombre")
//     persona.apellido = prompt("Ahora el apellido")
//     persona.edad = prompt("y por último, tu edad")
// }




