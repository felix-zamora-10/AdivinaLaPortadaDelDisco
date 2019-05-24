import React from 'react';
import food from '../comida.png';

export class ImagenPrincipal extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { Color: '#FFF' };
    }

    CambiaElColorActual = () => { 
        this.setState({ Color: 'Pink' });
        this.props.evento();
    }

    render() {
        return (<div className="ImagenPrincipal" style={{ backgroundColor: this.state.Color }} onClick = {this.CambiaElColorActual}>
            <img src={food} alt="Logo" />
        </div>);
    }
}