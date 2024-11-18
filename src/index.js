import _ from 'lodash';
import './styles.css';
// import Icono from './img/logo.png';
// import Datos from './assets/data.xml';
// import Notas from './assets/data.csv';
import {printMe} from './print.js';

const div = document.getElementById('div');

function componente(){
    const elemento = document.createElement('div');
    const btn = document.createElement('button');

    elemento.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elemento.classList.add('contenedor','centrar-texto','probando');
    
    // const miIcono = new Image();
    // miIcono.src = Icono;
    // miIcono.classList.add('imagen');

    btn.innerHTML = 'Clickeame y mira la consola!!';
    btn.onclick = printMe;

    // elemento.appendChild(miIcono);
    elemento.appendChild(btn);

    // console.log(Datos);
    // console.log(Notas);

    return elemento;
}

//document.body.appendChild(componente());
div.insertBefore(componente(),div.firstChild);