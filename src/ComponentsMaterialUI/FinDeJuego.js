import React from 'react';
import store from '../Store/Store';
import { ReiniciarJuego, CambiarCategoria } from '../Store/Actions';
import TextField from '@material-ui/core/TextField';

export class FinDeJuego extends React.Component {

    ReinicieElJuego() {
        store.dispatch(ReiniciarJuego())
        store.dispatch(CambiarCategoria(0))
    }

    render() {
        return (<div className="RightInfo" style={{ backgroundColor: this.props.Propiedades.color }} >
            <TextField id="outlined-read-only-input" label="Puntos Obtenidos" defaultValue={this.props.Propiedades.puntosTotales} 
            margin="normal" InputProps={{readOnly: true,}} variant="outlined" 
            style={{ marginLeft: "30px", marginTop: "90px", marginBottom: "85px"}}/>
            <br />
            <br />
            <br />
            <button className="button" onClick={this.ReinicieElJuego}>Reiniciar</button>
        </div>);
    }
}