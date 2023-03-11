class Post extends HTMLElement {

    constructor(){
        super(); 
        this.attachShadow({mode: 'open' })
    }

    connectedCallback() {
        console.log(this.nickname);
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return ['profph', 'nickname', 'post', 'likes', 'views', 'descr', 'comments', 'date']
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/post/post.css">
        <section class="cuadro">

            <div class="postinsta">
            
                <div class="div1">

                    <div class="div1_1">
                        <image class="profph" src="${this.profph}"></image>
                        <h1 class="nickname">${this.nickname}</h1>
                    </div>

                    <div class="div1_2">
                        <button class="buton_settings">
                            <div class="imag_boton_settings">
                            <image class="settingsicon" src="./assets/icons/Settings-icon.png"></image>
                            </div>
                        </button>
                    </div>

                </div>


                <div class="div2">
                <image class="thepost" src="${this.post}"></image>
                </div>

                <div class="div3">
                    <div class="div_izq">
                        <image class="likeicon" src="./assets/icons/Like-icon-off.png"></image>
                        <image class="commenticon" src="./assets/icons/Comment-icon.png"></image>
                        <image class="shareicon" src="./assets/icons/Share-icon.png"></image>
                    </div>

                    <div class="div_der">
                        <image class="saveicon" src="./assets/icons/Save-icon.png"></image>
                    </div>
                </div>

                <div class="div4">
                <h2 class="likes">${this.likes}</h2>
                <h2 class="views">${this.views}</h2>
                </div>

                <div class="div5">
                <h2 class="nicknamedescr">${this.nickname}</h2>
                <h2 class="descr">${this.descr}</h2>
                </div>

                <div class="div6">
                <h3 class="comments">${this.comments}</h3>
                <h4 class="date">${this.date}</h4>
                </div>

            </div>

        </section>` 
    }
}

customElements.define('my-post', Post);
export default Post;