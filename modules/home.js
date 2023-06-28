'use strict';

import {HtmlTag} from '../modules/functions';

const createHome = () => {
    let home = new HtmlTag('div', 'container', ['tabcontent', 'pick_one'], 'home');
    home.createHtmlElement();
    let ue2 = new HtmlTag('h2', 'home','','','WELCOME')
    ue2.createHtmlElement();
    let p1 = new HtmlTag('p', 'home','','','Happy to see you')
    p1.createHtmlElement();
}
const showHome = () => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

    const txt1 = document.getElementById('home');
    const txt2 = document.getElementById('menu');
    const txt3 = document.getElementById('reservation');

    btn1.classList.add('pick_one');
    txt1.classList.add('pick_one');
    btn2.classList.remove('pick_two');
    txt2.classList.remove('pick_two');
    btn3.classList.remove('pick_three');
    txt3.classList.remove('pick_three');
}

export {createHome, showHome};