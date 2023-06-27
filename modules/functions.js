'use strict';

function createTags(parent, childs, createParent = false){
    for(let item of childs){        
        if (createParent === false){            
            document.getElementById('content').appendChild(document.createElement(parent));
        }
        document.querySelector(parent).appendChild(document.createElement(item));          
    }
}


export {createTags};