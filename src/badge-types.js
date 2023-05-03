import { LitElement, html, css } from 'lit';
import "./project-3.js";


export class BadgeTypes extends LitElement {
    static get tag(){
        return 'bage-types';
    }

        static get properties(){
        return {
            types: {type: Array},
            title: {type: String}, 
      border: {type: String, reflect: true}, 
      bgColor: {type: String, reflect: true}, 
      tvButtons: {type: String, reflect: true}, 
      tvOutline: {type: String, reflect: true}, 
      tvColor: {type: String, reflect: true},
      textColor: {type: String, reflect: true}, 
      badgeColor: {type: String, reflect: true}, 

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

      badgeTitleColor: {type: String, reflect: true}, 
      badgeTitle: {type: String, reflect: true}, 
      authorName: {type: String, reflect: true}, 
      authorTitle: {type: String, reflect: true}, 
      company: {type: String, reflect: true}, 
      image: {type: String, reflect: true}, 
      logo: {type: String, reflect: true},
        }
    }
    constructor() {
        super();
        this.types=[
            {
                "bgColor": "white",
                "tvButtons": "black",
                "border": "black",
                "tvColor": "white",
                "tvOutline": "black",
                "upperBlock1": "grey",
                "upperBlock2": "yellow",
                "upperBlock3": "blue",
                "upperBlock4": "green",
                "upperBlock5": "purple",
                "upperBlock6": "red",
                "upperBlock7": "pink",
                "lowerBlock1": "red",
                "lowerBlock3": "red",
                "lowerBlock5": "red",
                "lowerBlock7": "red",
                "badgeTitle": "white", 
                "badgeTitleColor": "black",
                "authorName": "grah",        
                "authorTitle": "brah",
                "company": "omg",
                "logo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAE",
                "image1": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALEGO_logo.svg&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAJ"
        
        
            }
            
        ]; 
        
        this.updateType();
      }

        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        
        
    .wrapper{
      width: 360px;
      height: 470px;
      position: relative;
    }


        `;
    }
    updateType() { 
        const address = new URL('../api/badgelist.js', import.meta.url).href;
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
        <project-3 
        bgColor="${type.bgColor}"
        tvButtons="${type.tvButtons}"
        border1="${type.border}"
        tvColor="${type.color}"
        tvOutline="${type.tvOutline}"
        textColor="${type.textColor}"
        badgeColor="${type.badgeColor}"
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
        badgeTitle="${type.title}"
        authorName="${type.authorName}"
        authorTitle="${type.authorTitle}"
        company="${type.company}"
        image="${type.image}"
        logo="${type.logo}"
        ></project-3>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(BadgeTypes.tag, BadgeTypes);