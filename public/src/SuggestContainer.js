import * as components from "./components/export.js";
import data from "./components/data.js"

class PostContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open' })
    }

    connectedCallback(){/* recibe de Post */
        this.render();
    }

    render(){
        const compts = data.map (({profph, nickname, post, likes, views, descr, comments, date}) =>
        `<my-post
        profph="${profph}"
        nickname="${nickname}"
        post="${post}"
        likes="${likes}"
        views="${views}"
        descr="${descr}"
        comments="${comments}"
        date="${date}"
        ></my-post>`)//recibe las variables que le meti en post
        this.shadowRoot.innerHTML = compts.join("")//añade los elementos de mi data en este caso
    }
}

customElements.define('post-container', PostContainer);

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