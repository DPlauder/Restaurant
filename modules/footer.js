'use strict';

import {HtmlTag} from '../modules/functions';

const createFooter = () => {
    let footer = new HtmlTag('footer', 'content', ['fuss'], 'fuss')
    footer.createHtmlElement();
}

export {createFooter};
