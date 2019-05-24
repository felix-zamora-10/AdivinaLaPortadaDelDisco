import React from 'react';
import store from '../Store/ConfiguracionStore'
import { portadas } from '../VariablesGlobales';

export class InformacionDerecha extends React.Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        })
    }

    ObtengaSetDePreguntas() {
        var portadaFiltrada = [];
        var indicesEscogidos = [];
        var indice;
        var salidaDeCiclo = 4;

        for(var index = 0; index < portadas.length; index++){
            portadas[index].respuestaCorrecta = false;
        }

        for (var contador = 0; contador < salidaDeCiclo; contador++) {
            indice = Math.floor((Math.random() * portadas.length) + 0);
            
            if (!indicesEscogidos.includes(indice)) {
                indicesEscogidos.push(indice);
                portadaFiltrada.push(portadas[indice]);
            } else {
                contador--;
            }
        }
        
        var respuestaCorrecta = Math.floor((Math.random() * 3) + 0);
        portadaFiltrada[respuestaCorrecta].respuestaCorrecta = true;

        var imagen = '';
        imagen = portadaFiltrada[respuestaCorrecta].foto;
        
        store.dispatch({
            type: 'GenerarPregunta',
            data: portadaFiltrada,
            img: imagen,
            shw: 'none',
            mstrLi: 'visible'
        })
    }

    CambiaColorSegunRespuesta(elemento) {
        var colorFinal = '';
        var mostrar = 'none';

        if(elemento.respuestaCorrecta){
            colorFinal = 'Green';
            mostrar = 'block';
        }else{
            colorFinal = 'Red';
        }

        store.dispatch({
            type: 'CambiarColor',
            data: colorFinal,
            shw: mostrar,
            txtBtn: 'Siguiente'
        })
    }

    render() {
        return (<div className="InformacionDerecha" style={{ backgroundColor: store.getState().Color }} >
            <ul>
                {store.getState().PortadaFiltrada.map((portadaFiltrada) =>
                    <li onClick={() => this.CambiaColorSegunRespuesta(portadaFiltrada)} 
                    style={{ visibility: store.getState().MostrarLi }} >{portadaFiltrada.nombre}</li>)}
            </ul>
            <br />
            <br />
            <button className="boton" style={{ display: store.getState().Mostrar }} 
            onClick={this.ObtengaSetDePreguntas}>{store.getState().TextoBoton}</button>
        </div>);
    }
}