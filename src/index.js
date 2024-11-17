// import {saludar} from './js/funciones.js'
// const nombre = 'Edward';
// saludar(nombre);
import _ from 'lodash';
import './styles.css';
import Icono from './img/logo.png';
import Datos from './assets/data.xml';
import Notas from './assets/data.csv';

function componente(){
    const elemento = document.createElement('div');

    elemento.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elemento.classList.add('contenedor','centrar-texto','probando');

    const miIcono = new Image();
    miIcono.src = Icono;
    miIcono.classList.add('imagen');

    elemento.appendChild(miIcono);

    console.log(Datos);
    console.log(Notas);

    return elemento;
}

document.body.appendChild(componente());