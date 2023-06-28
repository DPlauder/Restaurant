'use strict';

import {HtmlTag} from '../modules/functions';

const createHome = () => {
    let home = new HtmlTag('div', 'container', ['tabcontent'], 'home');
    home.createHtmlElement();
    let ue2 = new HtmlTag('h2', 'home','','','WELCOME')
    ue2.createHtmlElement();
    let p1 = new HtmlTag('p', 'home','','','Happy to see you')
    p1.createHtmlElement();
}
const clickHome = (element) => {
    const btn1 = document.getElementById('btn_home');
    const btn2 = document.getElementById('btn_menu');
    const btn3 = document.getElementById('btn_res');

}


export {createHome};