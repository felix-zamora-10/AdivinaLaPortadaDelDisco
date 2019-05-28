import React from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
export class Cargando extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={100}
          color={'#B8C4CC'}
          loading={this.state.loading}
        />
        <p>Cargando...</p>
      </div>
    )
  }
}