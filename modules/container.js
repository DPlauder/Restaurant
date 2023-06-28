'use strict';

import {HtmlTag} from '../modules/functions';

const createContainer = () => {
    let section = new HtmlTag('section', 'content', ['container'], 'container');
    section.createHtmlElement();
}

export {createContainer};