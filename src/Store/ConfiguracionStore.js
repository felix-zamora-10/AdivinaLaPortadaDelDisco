import { createStore } from 'redux';
// import { portadas } from '../VariablesGlobales';

//Para redux
// var defaultState = {
//     PortadaFiltrada: [
//         {nombre: 'Respuesta1', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true},
//         {nombre: 'Respuesta2', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true},
//         {nombre: 'Respuesta3', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true},
//         {nombre: 'Respuesta4', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true}
//     ],
//     Color: '#B3AD5F',
//     Imagen: '/Imagenes/Logo.jpg',
//     Mostrar: 'block',
//     TextoBoton: 'Empezar',
//     MostrarLi: 'hidden'
// }

var defaultState = {
    PortadaFiltrada: [
        { nombre: 'Respuesta1', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta2', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta3', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true },
        { nombre: 'Respuesta4', foto: '/Imagenes/Logo.jpg', respuestaCorrecta: true }
    ],
    Color: '#FFFFE6',
    ColorImagen: '#FFFFE6',
    Imagen: '/Imagenes/Logo.jpg',
    Mostrar: 'visible',
    TextoBoton: 'Empezar',
    MostrarLi: 'hidden',
    TabSeleccionada: 0,
    Categorias: ObtengaCategorias([]),
    PortadaPorCategoriaFiltrada: FiltraLaCategoria(0, []),
    Puntos: 0,
    Cargando: true
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

function PageReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ComenzarAplicacion':
            portadasObtenidas = action.payload;
            return {
                ...state,
                Color: '#FFFFE6',
                Imagen: '/Imagenes/Logo.jpg',
                Mostrar: 'visible',
                TextoBoton: 'Empezar',
                MostrarLi: 'hidden',
                TabSeleccionada: 0,
                Categorias: ObtengaCategorias(portadasObtenidas),
                PortadaPorCategoriaFiltrada: FiltraLaCategoria(0, portadasObtenidas),
                Puntos: 0,
                Cargando: action.loading
            };
        case 'GenerarPregunta':
            return {
                ...state,
                PortadaFiltrada: action.data,
                Color: '#FFFFE6',
                Imagen: action.img,
                Mostrar: action.shw,
                MostrarLi: action.mstrLi
            };
        case 'CambiarColor':
            return {
                ...state,
                Color: action.data,
                Mostrar: action.shw,
                TextoBoton: action.txtBtn,
                Puntos: action.points
            };
        case 'ReiniciarJuego':
            return {
                ...state,
                Color: '#FFFFE6',
                Imagen: '/Imagenes/Logo.jpg',
                Mostrar: 'visible',
                TextoBoton: 'Empezar',
                MostrarLi: 'hidden',
                TabSeleccionada: 0,
                Categorias: ObtengaCategorias(portadasObtenidas),
                PortadaPorCategoriaFiltrada: FiltraLaCategoria(0, portadasObtenidas),
                Puntos: 0
            };
        case 'CambiarCategoria':
            return {
                ...state,
                TabSeleccionada: action.data,
                Color: '#FFFFE6',
                Imagen: '/Imagenes/Logo.jpg',
                Mostrar: 'visible',
                TextoBoton: 'Empezar',
                MostrarLi: 'hidden',
                PortadaPorCategoriaFiltrada: FiltraLaCategoria(action.data, portadasObtenidas)
            };
        default:
            return state
    }
}
const store = createStore(PageReducer);
let portadasObtenidas;
export default store;