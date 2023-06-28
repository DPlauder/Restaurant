"use strict";

import './style.css';

import {createHeader} from '../modules/header'; 
import {createNav} from '../modules/nav';
import {createContainer} from '../modules/container'; 
import {createFooter} from '../modules/footer'; 
import {createMenu, showMenu} from '../modules/menu'; 
import {createHome, showHome} from '../modules/home'; 
import {createRes,showRes} from '../modules/reservation'; 

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
    console.log(targetElement);
    if (targetElement.innerHTML === 'HOME'){
        showHome();
    } else if(targetElement.innerHTML === 'MENU'){
        showMenu();
    } else if(targetElement.innerHTML === 'RESERVATION'){
        showRes();
    }    
})




