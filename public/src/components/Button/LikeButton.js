class FollowButton extends HTMLElement{
    static get observedAttributes(){
        return ["follow"];
    }

    attributeChangedCallback(propName, oldValue, newValue){
        console.log("changed");
        this[propName] = newValue;
        this.follow();
    }

    connectedCallback(){
        console.log("followed");
        this.follow();
    }

    disconnectedCallback(){
        console.log("unfollow");
        this.removeEventListener();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.onButtonclicked = this.onButtonclicked.bind(this);
    }

    follow(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners(){
        this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonclicked);

    }

    render(){
        console.log("render");
        this.shadowRoot.innerHTML = `
        <section>
            <h1>Follow</h1>
            <button>Follow</button>
        </section>`
    }

    removeEventListeners(){
        this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClick);
    }

    onButtonClicked(){
        console.log("clicked");
    }

}

customElements.define("follow-button", FollowButton);
export default FollowButton;