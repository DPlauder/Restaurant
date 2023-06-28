"use strict";

import './style.css';

import {createHeader} from '../modules/header'; 
import {createNav} from '../modules/nav';
import {createContainer} from '../modules/container'; 
import {createFooter} from '../modules/footer';
import {createHome, highlightHome, showTextHome} from '../modules/home';
import {createMenu, highlightMenu, showTextMenu} from '../modules/menu'; 
import {createRes,highlightRes, showTextRes} from '../modules/reservation'; 

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
    if (targetElement.innerHTML === 'HOME'){
        highlightHome();
        showTextHome();
    } else if(targetElement.innerHTML === 'MENU'){
        highlightMenu();
        showTextMenu();
    } else if(targetElement.innerHTML === 'RESERVATION'){
        highlightRes();
        showTextRes();
    }    
})




