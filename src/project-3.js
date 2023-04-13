import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

const tv=new URL('../assets/tv.svg', import.meta.url).href;

class Project3 extends LitElement {
  static get properties() {
    return{
      photoDetails: {type: String},
      media: { type: String },
      name: {type: String}, 
      title: {type: String}, 
      company: {type: String}, 
      personalImage: {type: String}, 
      photoName: {type: String}, 
      
    }
   
  }

  static get styles(){
    return css`
    :host {
    }

    .container {
        width: 400px;
        height: 600px;
        border: 2px solid black;
        display: inline-flex; 
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        
        }

      

    .toppink{
      <path d="M809.494,254.982c-3.3-1.252-6.637-1.056-9.958-1.021-36.1.385-72.192.484-108.288.008-8.464-.112-16.925-.394-25.388-.615-3.281-.086-3.28-.108-6.7,2.287-1.362-1.86-1.5-3.919-1.548-6.134-1.128-49.456-.612-98.92-.6-148.379q.042-144.055.409-288.11c.046-22.727.382-45.453.577-68.18.018-2,.008-4.011-.041-6.015-.054-2.179-1.286-4.849.7-6.348,2.707-2.047,4.977-4.868,9.067-4.912,9.576-.1,19.145-.753,28.721-.98,18.265-.433,36.533-.736,54.8-1.073,12.475-.229,24.949-.536,37.425-.583,5.333-.02,10.677.425,16,.858,4.8.391,5.834,1.528,5.95,6.177.094,3.786-.018,7.576,0,11.363.311,55.927.813,111.853.9,167.78q.263,160.433.149,320.864,0,8.021-.175,16.041C811.455,250.2,811.655,252.487,809.494,254.982Z" fill="#bf00bf" data-v-b2c8125e="" data-v-a09c7bce=""></path>
      display: inline-flex;

     

    }


    .meow{
      


    }

    


    //something for media idk
    .name{

    }

    .title{

    }

    .company{

    }

    .personalImage{

    }
  `;
  
  } 

  constructor() {
    super();
    this.media = " ";
    this.photoName = "CHANGE PHOTO";
    this.name = "JOHN";
    this.title="media";
    this.company="uhhhh";
    this.personalImage="www.google.com";
    this.tv = tv;

  }

  render() {
    return html`

    <div class="container">
    <div xmlns="http://www.w3.org/1999/xhtml"
     contenteditable="true" 
     style="white-space:pre-wrap;text-align:center;border:0px solid #000000;padding-top:5px;width:100%;">MEDIA</div>
    
  
  
  
  </div>
               
       
    `;
  }
}

customElements.define('project-3', Project3);