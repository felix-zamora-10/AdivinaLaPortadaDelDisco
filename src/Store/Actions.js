export const CAMBIAR_CATEGORIA = "CambiarCategoria";
export const GENERAR_PREGUNTA = "GenerarPregunta";
export const CAMBIAR_COLOR = "CambiarColor";
export const REINICIAR_JUEGO = "ReiniciarJuego";

export function CambiarCategoria(indiceDeTab) {
    return {
        type: CAMBIAR_CATEGORIA,
        data: indiceDeTab
    }
}

export function GenerarPregunta(portadaFiltrada, imagen) {
    return {
        type: GENERAR_PREGUNTA,
        data: portadaFiltrada,
        img: imagen
    }
}

export function CambiarColor(colorFinal, mostrar, puntosActuales) {
    return {
        type: CAMBIAR_COLOR,
        data: colorFinal,
        shw: mostrar,
        points: puntosActuales
    }
}

export function ReiniciarJuego() {
    return {
        type: REINICIAR_JUEGO
    }
}