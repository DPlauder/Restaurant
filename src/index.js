"use strict";

import './style.css';

import {createHeader} from '../modules/header'; 
import {createNav} from '../modules/nav';
import {createContainer} from '../modules/container'; 
import {createFooter} from '../modules/footer'; 
import {createMenu} from '../modules/menu'; 
import {createHome} from '../modules/home'; 
import {createRes} from '../modules/reservation'; 

createHeader();
createNav();
createContainer();
createFooter();
createHome();
createMenu();
createRes()

const btnClick = document.getElementById('nav_bar');
btnClick.addEventListener('click', (e) => {
    let targetElement = e.target;
    let auswahl = 0;
    console.log(targetElement);
    if (targetElement.innerHTML === 'HOME'){
        auswahl = 1;
    } else if(targetElement.innerHTML === 'MENU'){
        auswahl = 2;
    } else if(targetElement.innerHTML === 'RESERVATION'){
        auswahl = 3;
    }
    return auswahl
    
})

export default auswahl;



