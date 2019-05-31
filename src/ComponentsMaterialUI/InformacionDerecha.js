import React from 'react';
import store from '../Store/ConfiguracionStore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { GenerarPregunta, CambiarColor, ReiniciarJuego, CambiarCategoria } from '../Store/Actions';

export class InformacionDerecha extends React.Component {

    ObtengaSetDePreguntas() {
        var portadaFiltrada = [];
        var indicesEscogidos = [];
        var indice;
        var salidaDeCiclo = 4;
        
        for (var index = 0; index < store.getState().CategoriasReducer.PortadaPorCategoriaFiltrada.length; index++) {
            store.getState().CategoriasReducer.PortadaPorCategoriaFiltrada[index].respuestaCorrecta = false;
        }

        for (var contador = 0; contador < salidaDeCiclo; contador++) {
            indice = Math.floor((Math.random() * store.getState().CategoriasReducer.PortadaPorCategoriaFiltrada.length) + 0);

            if (!indicesEscogidos.includes(indice)) {
                indicesEscogidos.push(indice);
                portadaFiltrada.push(store.getState().CategoriasReducer.PortadaPorCategoriaFiltrada[indice]);
            } else {
                contador--;
            }
        }

        var respuestaCorrecta = Math.floor((Math.random() * 3) + 0);
        portadaFiltrada[respuestaCorrecta].respuestaCorrecta = true;

        var imagen = '';
        imagen = portadaFiltrada[respuestaCorrecta].foto;

        store.dispatch(GenerarPregunta(portadaFiltrada, imagen))
    }

    CambiaColorSegunRespuesta(elemento) {
        var colorFinal = '';
        var mostrar = 'hidden';
        var puntosActuales = store.getState().ContestarPreguntasReducer.Puntos

        if (elemento.respuestaCorrecta) {
            colorFinal = '#B9FAC2';
            mostrar = 'visible'; //Verde
            puntosActuales += 10;
        } else {
            colorFinal = '#FA5C56'; //Rojo
            puntosActuales -= 10;
        }

        store.dispatch(CambiarColor(colorFinal, mostrar, puntosActuales))
    }

    ReinicieElJuego() {
        store.dispatch(ReiniciarJuego())
        store.dispatch(CambiarCategoria(0))
    }

    render() {
        return (<div className="RightInfo" style={{ backgroundColor: this.props.Propiedades.color }} >
            <h4>Puntos totales = {this.props.Propiedades.puntos}</h4>
            <List component="nav">
                {this.props.Propiedades.portadaFiltrada.map((portadaFiltrada) =>
                    <ListItem key={portadaFiltrada.nombre} button onClick={() => this.CambiaColorSegunRespuesta(portadaFiltrada)}
                        style={{ visibility: this.props.Propiedades.mostrarLi }} >{portadaFiltrada.nombre}</ListItem>)}
            </List>
            <br />
            <br />
            <button className="button" style={{ visibility: this.props.Propiedades.mostrarBtn }}
                onClick={this.ObtengaSetDePreguntas}>{this.props.Propiedades.textoBtn}</button>
            <button className="button" onClick={this.ReinicieElJuego}>Reiniciar</button>
        </div>);
    }
}