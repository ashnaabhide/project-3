import { LitElement, html, css } from 'lit';
import "./project-3.js";


export class BadgeTypes extends LitElement {
    static get tag(){
        return 'bage-types';
    }

        static get properties(){
        return {
            types: {type: Array},
            header: {type: String}, 
            border: {type: String, reflect: true}, 
            bgColor: {type: String, reflect: true}, 
            tvButtons: {type: String, reflect: true}, 
            tvOutline: {type: String, reflect: true}, 
            tvColor: {type: String, reflect: true},
            text: {type: String, reflect: true}, 
            color: {type: String, reflect: true}, 
            
            upperBlock1: {type: String, reflect: true}, 
            upperBlock2: {type: String, reflect: true}, 
            upperBlock3: {type: String, reflect: true}, 
            upperBlock4: {type: String, reflect: true},  
            upperBlock5: {type: String, reflect: true}, 
            upperBlock6: {type: String, reflect: true},  
            upperBlock7: {type: String, reflect: true}, 
            lowerBlock1: {type: String, reflect: true}, 
            lowerBlock3: {type: String, reflect: true}, 
            lowerBlock5: {type: String, reflect: true}, 
            lowerBlock7: {type: String, reflect: true}, 
                    
            titleColor: {type: String, reflect: true}, 
            authorName: {type: String, reflect: true}, 
            authorTitle: {type: String, reflect: true}, 
            company: {type: String, reflect: true}, 
            image: {type: String, reflect: true}, 
            logo: {type: String, reflect: true},
        }
    }
    constructor() {
        super();
        this.types=[]; 
        this.tvColor = 'red';
        this.tvAntenna = 'grey';
        this.border = 'black';
        this.bgColor = 'white';
        this.tvOutline = 'black';
        this.color = 'white';

        this.upperBlock1 = 'grey';
        this.upperBlock2 = 'yellow';
        this.upperBlock3 = 'blue';
        this.upperBlock4 = 'green';
        this.upperBlock5 = 'purple';
        this.upperBlock6 = 'red';
        this.upperBlock7 = 'pink';
    
        this.lowerBlock1 = 'blue';
        this.lowerBlock3 = 'purple';
        this.lowerBlock5 = 'green';
        this.lowerBlock7 = 'grey';
        
        this.title = 'MEDIA';
        this.titleColor = 'white';
        this.authorName = 'Bryan Mathers';
        this.authorTitle = 'CEO';
        this.company = 'Penn State';

        this.image = new URL('../assets/borzoi.webp', import.meta.url).href;
        this.logo = new URL('../assets/smiley.jpeg', import.meta.url).href;


        this.updateType();
      }

        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        
        .item {
            display: inline-flex;
        }
        `;
    }
    updateType() { 
        const address = new URL('../assets/badgetypes.json', import.meta.url).href;
       fetch (address).then((response) => { 
        if (response.ok){
              return response.json()
        }
        return [];
         })
         .then((data) => {
                this.types = data;
                console.log(data);
            });


       }
    
      

        
    render() {
        return html`
        <div class="wrapper">
        ${this.types.map(type => html`
        <div class="item">
        <remixer-3 
        bgColor="${type.bgColor}"
        tvButtons="${type.tvButtons}"
        border1="${type.border1}"
        tvColor="${type.color}"
        tvOutline="${type.tvOutline}"
        color="${type.cardColor}"
        upperBlock1="${type.upperBlock1}"
        upperBlock2="${type.upperBlock2}"
        upperBlock3="${type.upperBlock3}"
        upperBlock4="${type.upperBlock4}"
        upperBlock5="${type.upperBlock5}"
        upperBlock6="${type.upperBlock6}"
        upperBlock7="${type.upperBlock7}"
        lowerBlock1="${type.lowerBlock1}"
        lowerBlock3="${type.lowerBlock3}"
        lowerBlock5="${type.lowerBlock5}"
        lowerBlock7="${type.lowerBlock7}"
        title="${type.title}"
        authorName="${type.authorName}"
        authorTitle="${type.authorTitle}"
        company="${type.company}"
        image="${type.image}"
        logo="${type.logo}"
        ></remixer-3>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(BadgeTypes.tag, BadgeTypes);