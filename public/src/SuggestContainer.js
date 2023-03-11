import * as components from "./components/export.js";
import data from "./components/data.js"

class myuserContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML= `
        <my-user></my-user>`
    }

}

customElements.define('user-container', myuserContainer);

class SuggestContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((p)=>{
            this.shadowRoot.innerHTML += `
            <my-profiles icon="${p.icon}"
            user= "${p.user}"
            followers="${p.followers}"></my-profiles>
            
            `
        })
    
    }

}

customElements.define("suggestion-container", SuggestContainer);