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
const highlightMenu = () => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

    btn1.classList.remove('pick_one');
    btn2.classList.add('pick_two');
    btn3.classList.remove('pick_three');
}
const showTextMenu = () => {
    const txt1 = document.getElementById('home');
    const txt2 = document.getElementById('menu');
    const txt3 = document.getElementById('reservation');

    txt1.classList.remove('showElement')
    txt2.classList.add('showElement')
    txt3.classList.remove('showElement')
}

export {createMenu, highlightMenu, showTextMenu};