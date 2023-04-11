import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    media: { type: String },
    name: {type: String}, 
    title: {type: String}, 
    company: {type: String}, 
    personalImage: {type: String}, 
  }

  static styles = css`
    :host {
      
    }

    .wrapper{


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

  constructor() {
    super();
    this.media = " ";
    this.name = "JOHN";
    this.title="media";
    this.company="uhhhh";
    this.personalImage="www.google.com";

  }

  render() {
    return html`
      <div class="card">
        <div class="wrapper">
          <h3>Change Photo</h3>








        </div> <!--wrapper-->
      </div> <!--card-->
    `;
  }
}

customElements.define('project-3', Project3);