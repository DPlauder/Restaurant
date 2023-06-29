'use strict';

import {HtmlTag} from '../modules/functions';

const createHome = () => {
    let home = new HtmlTag('div', 'container', ['tabcontent', 'showElement'], 'home');
    home.createHtmlElement();
    let ue2 = new HtmlTag('h2', 'home','','','WELCOME')
    ue2.createHtmlElement();
    let p1 = new HtmlTag('p', 'home','','','Happy to see you')
    p1.createHtmlElement();
}
const highlightHome = () => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

    btn1.classList.add('pick_one');
    btn2.classList.remove('pick_two');
    btn3.classList.remove('pick_three');
}
const showTextHome = () => {
    const txt1 = document.getElementById('home');
    const txt2 = document.getElementById('menu');
    const txt3 = document.getElementById('reservation');

    txt1.classList.add('showElement')
    txt2.classList.remove('showElement')
    txt3.classList.remove('showElement')
}

export {createHome, highlightHome, showTextHome};