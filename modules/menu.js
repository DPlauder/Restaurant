'use strict';

import {HtmlTag} from '../modules/functions';

const createMenu = () => {
    let menu = new HtmlTag('div', 'container', ['tabcontent'], 'menu');
    menu.createHtmlElement();
    let ue3 = new HtmlTag('h2', 'menu','','','Menu')
    ue3.createHtmlElement();
    let p2 = new HtmlTag('p', 'menu','','','Good food here')
    p2.createHtmlElement();
}

export {createMenu};