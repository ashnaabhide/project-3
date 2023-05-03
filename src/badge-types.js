import { LitElement, html, css } from 'lit';
import "./project-3.js";


export class BadgeTypes extends LitElement {
    static get tag(){
        return 'badge-types';
    }

        static get properties(){
        return {
            badges: { type: Array },
            
        }
    }
    constructor() {
        super();
        this.badges=[
            {
                "cardborder": "black",
                "bgColor": "grey",
                "tvButtons": "white",
                "tvAntenna": "grey",
                "tvOutline": "white",
                "tvColor": "red",
                "upperBlock1": "grey",
                "upperBlock2": "yellow",
                "upperBlock3": "blue",
                "upperBlock4": "green",
                "upperBlock5": "purple",
                "upperBlock6": "red",
                "upperBlock7": "pink",
                "lowerBlock1": "blue",
                "lowerBlock3": "purple",
                "lowerBlock5": "green",
                "lowerBlock7": "grey",
                "badgeTitle": "MEDIA", 
                "badgeTitleColor": "white",
                "authorName": "Bryan Mathers",        
                "authorTitle": "CEO",
                "company": "Penn State",
                "logo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAE",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALEGO_logo.svg&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAJ",
                "sepia": false, 
                "grayscale": false
        
            },
            {
                "bgColor": "white",
                "tvButtons": "black",
                "cardborder": "white",
                "tvColor": "white",
                "tvOutline": "white",
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
                "authorName": "grah",        
                "authorTitle": "brah",
                "company": "omg",
                "logo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAE",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALEGO_logo.svg&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAJ",
                "sepia": false, 
                "grayscale": false
        
            },
            {
                "bgColor": "white",
                "tvButtons": "black",
                "cardborder": "black",
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
                "authorName": "grah",        
                "authorTitle": "brah",
                "company": "omg",
                "logo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAE",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALEGO_logo.svg&psig=AOvVaw1SEFnqBZqU_zEiWOZiEX9A&ust=1682988631218000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCI8q3z0v4CFQAAAAAdAAAAABAJ",
                "sepia": false, 
                "grayscale": false
        
            }
        
        ]
        
        
        ; 
        
        this.updateType();
      }

        
    static get styles() {
        return css`
        
        .item {
            display: inline-block;
        }
        
        
    .wrapper{
      width: 360px;
      height: 470px;
      position: relative;
    }


        `;
    }
    updateType() { 
        const address = '.../assets/badge-list.json';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
            console.log(data);
        });
    }


    
      

        
    render() {
        return html`
        <div class="wrapper">
        ${this.badges.map(badge => html`
        <div class="item">
        <project-3 
        bgColor="${badge.bgColor}", 
        tvButtons="${badge.tvButtons}", 
        cardborder="${badge.border}", 
        tvColor="${badge.tvColor}", 
        tvOutline="${badge.tvOutline}", 
        textColor="${badge.textColor}", 
        badgeColor="${badge.badgeColor}", 
        upperBlock1="${badge.upperBlock1}", 
        upperBlock2="${badge.upperBlock2}", 
        upperBlock3="${badge.upperBlock3}", 
        upperBlock4="${badge.upperBlock4}", 
        upperBlock5="${badge.upperBlock5}", 
        upperBlock6="${badge.upperBlock6}", 
        upperBlock7="${badge.upperBlock7}", 
        lowerBlock1="${badge.lowerBlock1}", 
        lowerBlock3="${badge.lowerBlock3}", 
        lowerBlock5="${badge.lowerBlock5}", 
        lowerBlock7="${badge.lowerBlock7}", 
        badgeTitle="${badge.badgeTitle}", 
        authorName="${badge.authorName}", 
        authorTitle="${badge.authorTitle}", 
        company="${badge.company}", 
        image="${badge.image}", 
        logo="${badge.logo}", 
        sepia="${badge.sepia}" , 
        grayscale="${badge.grayscale}"
        ></project-3>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(BadgeTypes.tag, BadgeTypes);