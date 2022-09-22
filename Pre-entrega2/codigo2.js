


const equipoLocal = ["aaaj.png", "arsenal.png", "bocajuniors.png", "caa.png", "cab.png", "cacc.png", "cai.png", "cap.png", "casla.png", "cat.png", "cau}.png", "central.png", "cia.png", "colon.png", "csa.webp", "dyj.png", "edlp.png", "godoyCruz.png", "gym.png", "huracan.png", "lanus.png", "newlls.png", "patronato.png", "racing.png", "riverPlate.webp", "talleres.webp", "velez.webp"]

const etiqueta = document.createElement("ul")
const elemento = document.getElementById("idList")
const btnAchicar = document.getElementById("idBtnAchicar")
const btnAgrandar = document.getElementById("idBtnAgrandar")
imagenes = document.getElementsByClassName("img-team")


for (let iterator of equipoLocal) {

    etiqueta.innerHTML += `<li class="item-list"><a href="#"><img id="idImg" class="p-1 img-team" src="./imagenes/${iterator}" alt="">
    </a></li> `

    elemento.append(etiqueta)

}


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

for (i; i < equipoLocal.length; i++) {

    imagenes[i].onmouseover = function (event) {
        let equipo = event.target;
        equipo.style.background = 'pink';
        equipo.style.border = "1px solid black"


    };

    imagenes[i].onmouseout = function (event) {
        let equipo = event.target;
        equipo.style.background = '';
        equipo.style.radius = "50%"
        equipo.style.border = "none"


    };
}

