import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import store from '../Store/ConfiguracionStore';
import { CambiarCategoria } from '../Store/Actions';

export class Categorias extends React.Component {

    CambiaElTab(value) {
        store.dispatch(CambiarCategoria(value))
    }

    render() {
        return (
            <Paper>
                <Tabs value={this.props.TabElegido} onChange={(event, value) => this.CambiaElTab(value)} 
                indicatorColor="primary" textColor="primary" centered >
                    {this.props.CategoriasDisponibles.map((categoria) => <Tab key={categoria.Categoria} label={categoria.Categoria} />)}
                </Tabs>
            </Paper>
        );
    };
}