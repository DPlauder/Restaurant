"use strict";

import './style.css';
import {createTags } from '../modules/functions'; 


const htmlFirstCHildHead = createTags('header', ['h1']);
const htmlFirstCHildNav = createTags('nav', ['ul']);
const htmlFirstCHildList = createTags('ul', ['li', 'li', 'li'], true);
const htmlFirstCHildContainer = createTags('section', ['h2', 'p']);
const htmlFirstCHildFoot = createTags('footer', ['p']);