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
        this.badges=[]; 
        
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