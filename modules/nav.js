'use strict';

import {HtmlTag} from '../modules/functions';

const createNav = () => {
    let nav_class = new HtmlTag('nav', 'content', ['nav_bar'], 'nav_bar');
    nav_class.createHtmlElement();
    let ul1 = new HtmlTag('ul', 'nav_bar', ['nav_list'], 'nav_list')
    ul1.createHtmlElement();
    let btn1 = new HtmlTag('button', 'nav_list', ['btn', 'btn_one', 'tablink', 'pick_one'],'btn_home', 'HOME')
    btn1.createHtmlElement();
    let btn2 = new HtmlTag('button', 'nav_list', ['btn', 'btn_two', 'tablink'], 'btn_menu', 'MENU')
    btn2.createHtmlElement();
    let btn3 = new HtmlTag('button', 'nav_list', ['btn', 'btn_three', 'tablink'], 'btn_res', 'RESERVATION')
    btn3.createHtmlElement();
}


export {createNav};