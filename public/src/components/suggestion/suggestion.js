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
                <h4 class "user">${this.user}</h4>
                <h6 class="followers">${this.followers}</h6>
            </div>
        </div>
        `;
    }

}

customElements.define('my-profiles', Profiles);
export default Profiles;