import React from 'react';

export class InformacionDerecha extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { Color: '#FFF' };
        this.CambiaElColor = this.CambiaElColor.bind(this);
    }

    CambiaElColor(color) {
        this.setState({
            Color: color
        });
    }

    //CambiaElColor = () => { this.setState({ Color: 'Red' }) }

    render() {
        return (<div className="InformacionDerecha" style={{ backgroundColor: this.state.Color }} >
            <ul>
                {this.props.data.map((animal) =>
                    <li onClick={() => this.CambiaElColor(animal.color)}>{animal.nombre}</li>)}
            </ul>
        </div>);
    }
}