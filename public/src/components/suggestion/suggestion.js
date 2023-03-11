class Profiles extends HTMLElement{

    static get observedAttributes(){
        return ['icon', 'user', 'followers']
    }

constructor(){
    super();
    this.attachShadow({mode: 'open'});
}

connectedCallback(){
    this.render();
}


attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue;
    this.render();
}

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/suggestion/suggestion.css">
        <div class= "sugerencia">
            <img class="icon" src="${this.icon}"/>
            <div class"info">
                <p class= "user">${this.user}</p>
                <p class="followers">${this.followers}</p>
            </div>
            <button class="btnfollow">Follow</button>
        </div>
        `;
    }

}

customElements.define('my-profiles', Profiles);
export default Profiles;