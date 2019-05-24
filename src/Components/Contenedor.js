import React from 'react';
import { InformacionDerecha } from './InformacionDerecha';
import { ImagenPrincipal } from './ImagenPrincipal';
import { animales } from '../VariablesGlobales';
import { PieDePagina } from "./PieDePagina";
import { Encabezado } from "./Encabezado";

export class Contenedor extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { Color: 'black' };
  }

  CambiaElColor = () => {
    this.setState((prevState) => {
      console.log(prevState);
      if(prevState.Color === 'Brown'){
        return {Color: 'Green'}
      }else{
        return {Color: 'Brown'}
      }
    });
  }

  // CambiaElColor = () => { this.setState({
  //   Color: 'Brown'
  // })}

  render() {
    return (<div style={{ backgroundColor: this.state.Color }}>
      <Encabezado />
      <ImagenPrincipal data={animales} evento={this.CambiaElColor}/>
      <InformacionDerecha data={animales} />
      <PieDePagina />
    </div>);
  }
}
