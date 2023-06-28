'use strict'

import {HtmlTag} from '../modules/functions';

const createHeader = () => {
    let header = new HtmlTag('header', 'content', ['kopf'], 'kopf');
    header.createHtmlElement();
    let ue1 = new HtmlTag('h1', 'kopf','','','RESTAURANT')
    ue1.createHtmlElement();
}

export {createHeader};