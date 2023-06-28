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
export {createRes};