'use strict';

import {HtmlTag} from '../modules/functions';

const createMenu = () => {
    let menu = new HtmlTag('div', 'container', ['tabcontent'], 'menu');
    menu.createHtmlElement();
    let ue3 = new HtmlTag('h2', 'menu','','','MENU')
    ue3.createHtmlElement();
    let p2 = new HtmlTag('p', 'menu','','','Good food here')
    p2.createHtmlElement();
}
const showMenu = () => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

    const txt1 = document.getElementById('home');
    const txt2 = document.getElementById('menu');
    const txt3 = document.getElementById('reservation');

    btn1.classList.remove('pick_one');
    txt1.classList.remove('pick_one');
    btn2.classList.add('pick_two');
    txt2.classList.add('pick_two');
    btn3.classList.remove('pick_three');
    txt3.classList.remove('pick_three');
}

export {createMenu, showMenu};