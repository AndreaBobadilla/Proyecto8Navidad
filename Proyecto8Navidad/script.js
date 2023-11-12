let papaNoel = "off";
let papaNoelQuieto = document.getElementById("papaNoelQuieto");
const repro = document.getElementById("bt1")
const pau = document.getElementById("bt2")

let botonAudio = new Audio ('./sound/musicanavi.mp3');

function obtenerTiempoFaltante(fechaLimite) {

    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24) % 60)).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    };

};

function cuentaRegresiva(tiempoFaltante,mensaje){
        dias = document.getElementById('dias');
        horas = document.getElementById('horas');
        minutos = document.getElementById('minutos');
        segundos = document.getElementById('segundos');

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;
        
        if(t.tiempoFaltante <= 1 && papaNoel == "off"){
            papaNoelQuieto.classList.add("on");
            clearInterval(tiempoActual);
            const mensa = document.getElementById("mensaje")
            mensa.innerHTML = mensaje;
            dias.innerHTML = "00"
            horas.innerHTML = "00"
            minutos.innerHTML = "00"
            segundos.innerHTML = "00" 
            papaNoelQuieto = "on";
            console.log("Entro")
            repro.classList.remove("off");
            repro.classList.add("on")
            pau.classList.remove("off");
            pau.classList.add("on")

            document.querySelectorAll('.boton').forEach(button => {
                button.classList.add('activandoHover');
            });
        }  
            
    }, 1000)
};

cuentaRegresiva('DEC 25 2023 00:00:00 GMT-0500', 'Ya! Feliz Navidad!');

function play() {
    if (papaNoelQuieto == "on") {
        botonAudio.play();
    }
}

function pause() {
    if (papaNoelQuieto == "on") {
        botonAudio.pause();
    }
}






