import React from 'react';
import store from '../Store/ConfiguracionStore'

export class ImagenPrincipal extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            Color: '#FFFFE6',
            Imagen: '/Imagenes/Logo.jpg'
         };
    }

    render() {
        return (<div className="PrincipalImg" style={{ backgroundColor: this.state.Color }} >
            <img src={store.getState().Imagen} alt="Logo" />
        </div>);
    }
}