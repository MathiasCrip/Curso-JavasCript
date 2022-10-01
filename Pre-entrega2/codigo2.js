


const equipos = ["Argentinos-juniors.png", "Arsenal.png", "Boca-juniors.png", "Club-atletico-aldosivi.png", "Banfield.png", "Central-Cordoba.png",
    "Independiente.png", "Platense.png", "San-Lorenzo.png", "Atletico-Tucuman.png", "Union-de-SantaFe.png", "Rosario-Central.png", "Barracas-Central.png",
    "Colon-De-SantaFe.png", "Sarmiento.webp", "Defensa-y-Justicia.png", "Estudiantes-de-la-Plata.png", "Godoy-Cruz.png", "Gimnasia-y-Esgrima-la-Plata.png"
    , "Huracan.png", "Lanus.png", "Newlls.png", "Patronato.png", "Racing-club.png", "River-plate.webp", "Talleres.webp", "Velez.webp"]

const etiqueta = document.createElement("ul")
const elemento = document.getElementById("idList")
const btnAchicar = document.getElementById("idBtnAchicar")
const btnAgrandar = document.getElementById("idBtnAgrandar")
const imagenes = document.getElementsByClassName("img-team")
const modo = document.querySelector(".modeloPantalla");
let cuerpo = document.querySelector("body")
const check = document.querySelector("input")




for (let iterator of equipos) {

    etiqueta.innerHTML += `<li class="item-list"><a href="#"><img id="idImg" class="p-1 img-team" src="./imagenes/${iterator}" alt="" data-equipo="${iterator}">
    </a></li> `

    elemento.append(etiqueta)

}
function darkMode() {

    localStorage.setItem("modo", this.checked)

    if (localStorage.getItem("modo")) {
        document.body.classList.add("dark-mod")
        document.body.classList.replace("light-mod", "dark-mod")

        if (localStorage.getItem("modo") == "false") {
            document.body.classList.replace("dark-mod", "light-mod")
            localStorage.setItem("modo", this.checked)

        }
    }

}
let modoDark = localStorage.getItem("modo")
let cargaDeEquipos = localStorage.getItem("cargaEquipos")

if (modoDark == "true") {
    document.body.classList.add("dark-mod")
    check.setAttribute("checked", true)
    console.log("Modo oscuro")
} else {
    document.body.classList.add("light-mod")
    console.log("Modo Claro")

}

modo.addEventListener('change', darkMode)

btnAgrandar.addEventListener("click", agrandar)
btnAchicar.addEventListener("click", achicar)


let acumulador = 100
function agrandar() {

    acumulador += 15
    let pixelesCadena = acumulador.toString()


    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].style.width = pixelesCadena + "px"
    }
}

function achicar() {
    acumulador -= 15
    let pixelesCadena = acumulador.toString()

    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].style.width = pixelesCadena + "px"
    }
}

let i = 0
for (i; i < equipos.length; i++) {

    imagenes[i].onmouseover = function (event) {
        let equipo = event.target;
        equipo.classList.add("seleccionEquipo")

    }

    imagenes[i].onmouseout = function (event) {
        let equipo = event.target;
        equipo.classList.remove("seleccionEquipo")
    }
}
if (localStorage.getItem("cargarUltimoE")) { //VERIFICA EN EL STORAGE QUE EXISTA UN ULTIMO EQUIPO SELECCIONADO
    const elemento = document.createElement("li")
    const etiqueta = document.getElementById("listado-team")
    elemento.innerHTML = `<img src="./imagenes/${localStorage.getItem("cargarUltimoE")}" style="
     width: 75px;"/>`
    console.log(localStorage.getItem("cargarUltimoE"))
    etiqueta.append(elemento)

}



Array.from(imagenes).forEach((elemento) => {
    elemento.addEventListener('click', (e) => { //METODO AL CLICKEAR CARGA LOS ESCUDOS ABAJO DE LOS EQUIPOS
        let equipo = elemento.getAttribute("data-equipo");
        const etiqueta = document.createElement("li")


        localStorage.setItem("cargarUltimoE", equipo)
        let listadoTeam = localStorage.getItem("cargarUltimoE")

        etiqueta.innerHTML = `<img src="./imagenes/${listadoTeam}" style="
        width: 50px;"/>`

        document.getElementById("listado-team").append(etiqueta)
        Toastify({
            text: "Guardando equipo ->",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    })

    elemento.addEventListener('mouseover', (e) => { // AL PASAR EL MOUSE SOBRE ALGUNOS DE LOS EQUIPOS, MUESTRA LA IMG AGRANDADA
        let escudo = elemento.getAttribute("data-equipo");
        const img = document.getElementById("img");

        img.innerHTML = `<div> <img src="./imagenes/${escudo}" width = "auto"> <p><strong>${escudo.substring(0, escudo.indexOf('.')).toUpperCase()}</strong></p></div>`

    });

    elemento.addEventListener('mouseout', (e) => {// AL SACAR EL MOUSE SOBRE EL ESCUDO, QUITA LA VISTA PREVIA
        img.innerHTML = `<img src=" ">`
    })
});


