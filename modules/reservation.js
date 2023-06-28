'use strict';

import {HtmlTag} from '../modules/functions';

const createRes = () => {
    let reservation = new HtmlTag('div', 'container', ['tabcontent'], 'reservation');
    reservation.createHtmlElement();
    let ue4 = new HtmlTag('h2', 'reservation','','','RESERVATION')
    ue4.createHtmlElement();
    let p3 = new HtmlTag('p', 'reservation','','','Choose your table')
    p3.createHtmlElement();
}
const showRes = () => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

    const txt1 = document.getElementById('home');
    const txt2 = document.getElementById('menu');
    const txt3 = document.getElementById('reservation');

    btn1.classList.remove('pick_one');
    txt1.classList.remove('pick_one');
    btn2.classList.remove('pick_two');
    txt2.classList.remove('pick_two');
    btn3.classList.add('pick_three');
    txt3.classList.add('pick_three');
}
export {createRes, showRes};