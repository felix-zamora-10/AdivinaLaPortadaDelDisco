export const COMENZAR_APLICACION = "ComenzarAplicacion";
export const GENERAR_PREGUNTA = "GenerarPregunta";
export const CAMBIAR_COLOR = "CambiarColor";
export const REINICIAR_JUEGO = "ReiniciarJuego";
export const CAMBIAR_CATEGORIA = "CambiarCategoria";

export function ComenzarAplicacion(portadasObtenidas) {
    return {
        type: COMENZAR_APLICACION,
        data: portadasObtenidas
    }
}

export function GenerarPregunta(portadaFiltrada, imagen) {
    return {
        type: GENERAR_PREGUNTA,
        data: portadaFiltrada,
        img: imagen
    }
}

export function CambiarColor(colorFinal, puntosActuales, preguntasRestantes) {
    return {
        type: CAMBIAR_COLOR,
        data: colorFinal,
        points: puntosActuales,
        remainingQuestions: preguntasRestantes
    }
}

export function ReiniciarJuego() {
    return {
        type: REINICIAR_JUEGO
    }
}

export function CambiarCategoria(indiceDeTab) {
    return {
        type: CAMBIAR_CATEGORIA,
        data: indiceDeTab
    }
}