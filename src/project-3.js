import { LitElement, html, css } from 'lit';

const meow=new URL('../assets/meow.jpeg', import.meta.url).href;

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
    .container{
      background-color: #808080;
      color: white;
      text-align: center-left;
      width: 500px;
      height: 100px;
      border-radius: 5px;
    }

   

    .wrapper{
      background-color: #3e98d3;
      color: white;
      text-align: center-left;
      width: 200px;
      height: 60px;
      border-radius: 5px;
     


    }
    .changeImgBtn{
      width: 100px;
      height: 50px;
      background-image: url(meow); //is this right

    }

    .meow{
      width: 10px;


    }

    .photoName{
      width: auto;
      font-size: 2em;

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

  }

  render() {
    return html`
      <div class="container">
        <div>${this.photoName}</div> 
        <div class="wrapper">
        
        </div> <!--wrapper-->
        </div><!--color options bar-->
        </div><!--container-->
    `;
  }
}

customElements.define('project-3', Project3);