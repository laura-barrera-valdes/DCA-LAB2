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
            <link rel= "stylesheet" href= "./src/components/suggestion/suggestion.css" type"text/html">
            <link rel= "stylesheet" href= "./src/components/MyProfile/Myprofile.css" type"text/html">
            <my-profiles icon="${p.icon}"
            user= "${p.user}"
            followers="${p.followers}"></my-profiles>
            <follow-button></follow-button>
            `

        })
    }

}

customElements.define("suggestion-container", SuggestContainer);