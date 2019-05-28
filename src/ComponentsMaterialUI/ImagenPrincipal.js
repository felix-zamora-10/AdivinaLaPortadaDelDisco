import React from 'react';

export class ImagenPrincipal extends React.Component {

    render() {
        return (<div className="PrincipalImg" style={{ backgroundColor: this.props.Propiedades.colorInicial }} >
            <img src={this.props.Propiedades.imagenInicial} alt="Logo" />
        </div>);
    }
}