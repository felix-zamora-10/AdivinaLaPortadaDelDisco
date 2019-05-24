import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Contenedor} from "./Components/Contenedor";
// import {Contenedor} from "./ComponentsRedux/Contenedor";
import IndexMaterialUI from "./indexMaterialUI";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Contenedor />, document.getElementById('root'));
ReactDOM.render(<IndexMaterialUI />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
