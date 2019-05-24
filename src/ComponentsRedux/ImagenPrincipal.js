import React from 'react';
import store from '../Store/ConfiguracionStore'

export class ImagenPrincipal extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            Color: '#B3AD5F',
            Imagen: '/Imagenes/Logo.jpg'
         };
    }

    render() {
        return (<div className="ImagenPrincipal" style={{ backgroundColor: this.state.Color }} >
            <img src={store.getState().Imagen} alt="Logo" />
        </div>);
    }
}