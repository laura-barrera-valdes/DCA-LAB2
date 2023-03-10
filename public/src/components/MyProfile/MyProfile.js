class Myuser extends HTMLElement{

    static get observedAttributes(){
        return ['icon', 'user', 'name']
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
        <link rel="stylesheet" href="./src/components/MyProfile/Myprofile.css">
        <div class= "myprofile">
            <img class="proficon" src="./assets/profile/profile-img2.png"/>
            <div class="personalinfo">
                <h3 class "profuser">valdesing</h3>
                <h6 class="profname">Valentina</h6>
            </div>
        </div>
        <h4 class="title">You must know</h4>
        `;
    }

}

customElements.define('my-user', Myuser);
export default Myuser;