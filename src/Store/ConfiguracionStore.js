import { createStore, combineReducers } from 'redux';
import { COMENZAR_APLICACION, GENERAR_PREGUNTA, CAMBIAR_COLOR, REINICIAR_JUEGO, CAMBIAR_CATEGORIA } from './Actions';

const cicloDelJuegoDefaultState = {
    ColorImagen: '#FFFFE6',
    Cargando: true
}

const contestarPreguntasDefaultState = {
    PortadaFiltrada: [
        { nombre: 'Respuesta1', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta2', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta3', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta4', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true }
    ],
    Color: '#FFFFE6',
    Imagen: '/Imagenes/Logo.jpg',
    Mostrar: 'visible',
    MostrarLi: 'hidden',
    TextoBoton: 'Empezar',
    Puntos: 0,
}

const categoriasDefaultState = {
    TabSeleccionada: 0,
    Categorias: ObtengaCategorias([]),
    PortadaPorCategoriaFiltrada: FiltraLaCategoria(0, [])
}

function FiltraLaCategoria(category, portadas) {
    const portadasPorCategoria = [];

    if (category === 0) {
        return portadas;
    } else {
        for (var indice = 0; indice < portadas.length; indice++) {
            if (portadas[indice].indexCateg === category) {
                portadasPorCategoria.push(portadas[indice]);
            }
        }
        return portadasPorCategoria;
    }
}

function ObtengaCategorias(portadas) {
    const categorias = [{ Categoria: "Todas", Indice: 0 }];

    for (var indice = 0; indice < portadas.length; indice++) {
        if (!SeIngresoLaCategoria(categorias, portadas[indice].categoria)) {
            categorias.push({ Categoria: portadas[indice].categoria, Indice: portadas[indice].indexCateg });
        }
    }

    categorias.sort((a, b) => a.indexCateg - b.indexCateg);
    return categorias;
}

function SeIngresoLaCategoria(categoriasExistentes, nombre) {
    var existe = false;
    for (var indice = 0; indice < categoriasExistentes.length; indice++) {
        if (categoriasExistentes[indice].Categoria === nombre) {
            existe = true;
            break;
        }
    }
    return existe;
}

function CicloDelJuegoReducer(state = cicloDelJuegoDefaultState, action) {
    switch (action.type) {
        case COMENZAR_APLICACION:
            portadasObtenidas = action.data;
            return {
                ...state,
                Cargando: false
            };
        default:
            return state
    }
}

function ContestarPreguntasReducer(state = contestarPreguntasDefaultState, action) {
    switch (action.type) {
        case REINICIAR_JUEGO:
            return {
                ...state,
                PortadaFiltrada: [
                    { nombre: 'Respuesta1', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
                    { nombre: 'Respuesta2', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
                    { nombre: 'Respuesta3', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
                    { nombre: 'Respuesta4', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true }
                ],
                Color: '#FFFFE6',
                Imagen: '/Imagenes/Logo.jpg',
                Mostrar: 'visible',
                MostrarLi: 'hidden',
                TextoBoton: 'Empezar',
                Puntos: 0,
            };
        case GENERAR_PREGUNTA:
            return {
                ...state,
                PortadaFiltrada: action.data,
                Color: '#FFFFE6',
                Imagen: action.img,
                Mostrar: 'hidden',
                MostrarLi: 'visible',
            };
        case CAMBIAR_COLOR:
            return {
                ...state,
                Color: action.data,
                Mostrar: action.shw,
                TextoBoton: 'Siguiente',
                Puntos: action.points
            };
        default:
            return state
    }
}

function CategoriasReducer(state = categoriasDefaultState, action) {
    switch (action.type) {
        case CAMBIAR_CATEGORIA:
            return {
                ...state,
                TabSeleccionada: action.data,
                Categorias: ObtengaCategorias(portadasObtenidas),
                PortadaPorCategoriaFiltrada: FiltraLaCategoria(action.data, portadasObtenidas)
            };
        default:
            return state
    }
}

const pageReducer = combineReducers({
    CicloDelJuegoReducer,
    ContestarPreguntasReducer,
    CategoriasReducer
})

const store = createStore(pageReducer);
let portadasObtenidas;
export default store;