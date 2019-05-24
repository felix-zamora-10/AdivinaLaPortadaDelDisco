import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import store from '../Store/ConfiguracionStore';

export class Categorias extends React.Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        })
    }

    CambiaElTab(value) {
        store.dispatch({
            type: 'CambiarCategoria',
            data: value
        })
    }

    render() {
        return (
            <Paper>
                <Tabs value={store.getState().TabSeleccionada} onChange={(event, value) => this.CambiaElTab(value)} 
                indicatorColor="primary" textColor="primary" centered >
                    {store.getState().Categorias.map((categoria) => <Tab label={categoria.Categoria} />)}
                </Tabs>
            </Paper>
        );
    };
}