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
    .h3{
      text-align: center;
      
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
    this.title="MEDIA";
    this.company="uhhhh";
    this.personalImage="www.google.com";
    this.tv = tv;

  }

  render() {
    return html`

    <div class="container">
    <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" style="white-space:pre-wrap;text-align:center;border:0px solid #000000;padding-top:5px;width:100%;">${this.title}</div>
    <img src="tv.svg" alt="TV"/>
    

  
  </div>
               
       
    `;
  }
}

customElements.define('project-3', Project3);