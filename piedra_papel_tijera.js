let contGanados = 0;
let contEmpates = 0;
let contDerrotas = 0;
let contVidas = 3;

function elegir(opcion) {
    if (contVidas <= 0) {
        alert("Reinicia el juego para volver a jugar")
        return; // No hacer nada si el jugador ya ha perdido
    }

    let opcionesMaquina = ['piedra', 'papel', 'tijera'];
    let opcionMaquina = opcionesMaquina[Math.floor(Math.random() * opcionesMaquina.length)];

    console.log("Tú elegiste " + opcion);
    console.log("La máquina eligió " + opcionMaquina);
    validacion(opcion, opcionMaquina);
}

function validacion(opcion, opcionMaquina) {
    // Verificar las combinaciones para determinar el resultado
    if (opcion === opcionMaquina) {
        contEmpates++;
        console.log("¡Empate!");
        alert("¡Empate!")
    } else if (
        (opcion === 'piedra' && opcionMaquina === 'tijera') ||
        (opcion === 'papel' && opcionMaquina === 'piedra') ||
        (opcion === 'tijera' && opcionMaquina === 'papel')
    ) {
        contGanados++;
        console.log("¡Ganaste!");
        alert("¡Ganaste!")
    } else {
        contDerrotas++;
        alert("¡La maquina gana!")
        console.log("¡La máquina gana!");
        contVidas--;
    }

    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById('victorias').textContent = `Victorias: ${contGanados}`;
    document.getElementById('empates').textContent = `Empates: ${contEmpates}`;
    document.getElementById('derrotas').textContent = `Derrotas: ${contDerrotas}`;
    document.getElementById('vidas').textContent = `Vidas: ${contVidas}`;

    if (contVidas === 0) {
        alert("¡Perdiste! Te quedaste sin vida.");
        document.getElementById('btnJugarDeNuevo').style.display = 'block';
    }
}

function reiniciarJuego() {
    contGanados = 0;
    contEmpates = 0;
    contDerrotas = 0;
    contVidas = 3;
    document.getElementById('victorias').textContent = 'Victorias: 0';
    document.getElementById('empates').textContent = 'Empates: 0';
    document.getElementById('derrotas').textContent = 'Derrotas: 0';
    document.getElementById('vidas').textContent = 'Vidas: 3';
    document.getElementById('btnJugarDeNuevo').style.display = 'none';
}

//animacion del boton

document.getElementById('btnJugarDeNuevo').addEventListener('mousedown', function() {
    this.classList.add('animacion-color'); // Agregar clase para iniciar la animación
  });
  
  document.getElementById('btnJugarDeNuevo').addEventListener('mouseup', function() {
    this.classList.remove('animacion-color'); // Quitar clase al soltar el botón
  });