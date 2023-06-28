'use strict';

class HtmlTag{
    constructor(tagName, parent, className, id, text){
        this.tagName = tagName;
        this.parent = parent;
        this.className = className;
        this.id = id;
        this.text = text;
    }
    createHtmlElement(){
        const element = document.createElement(this.tagName);
        const par = document.getElementById(this.parent);
        par.appendChild(element);        
        if(this.className){
            for (let item of this.className){
                element.classList.add(item);
            }
        }
        if (this.id){
            element.id = this.id;
        }
        if (this.text){
            element.textContent = this.text;
        }
    }
}

export {HtmlTag};