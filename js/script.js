//Funciones
function esValido (x){
    if (!isNaN(x) && x >1) {
        return true;
    } else {
        return false;
    }
}

function showResult(prediccion){
    confirm('Tu numero es ' + prediccion + '!');
    alert('He ganado!');
}

function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinaElNumero(x) {
    let limiteInferior = 1;
    let limiteSuperior = x;
    let respuesta = "";
    let prediccion = 0; // Inicializa prediccion aquí

    while (respuesta !== "c") {
        // Generar predicción
        prediccion = numeroAleatorioEntre(limiteInferior, limiteSuperior);
        // Obtener respuesta del usuario
        respuesta = prompt(`Mi predicción es ${prediccion}. Si es muy alta, ingresa (A). Si es muy baja, ingresa (B). Si es correcta (C):`).toLowerCase();

        if (respuesta === "a") {
            limiteSuperior = prediccion - 1;
        } else if (respuesta === "b") {
            limiteInferior = prediccion + 1;
        } else if (respuesta !== "c") {
            alert("Por favor ingresa solo A, B o C.");
        }
    }

    showResult(prediccion);
}

//Flujo del programa

let x = 1;

alert('Vamos a jugar a un juego!');
alert('Debes pensar en un numero entre 1 y otro que elijas y yo debo adivinarlo');


while (!esValido(x)){
    x = parseInt(prompt('Ingresa un numero natural mayor a 1'))
}

alert('Piensa un numero natural entre 1 y ' + x);
adivinaElNumero(x);

