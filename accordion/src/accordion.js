import React, { Component } from 'react';
import "./accordion.css";

class Accordion extends Component {
   toggleAccordion = (e) => {
      console.log(e);
      const content = e.nextElementSibling;
      if (content.style.maxHeight) content.style.maxHeight = null;
      else content.style.maxHeight = content.scrollHeight + "px";
   }

   render() {
      return (
         <React.Fragment>
            <div className="accordion" onClick={() => this.toggleAccordion()}>
               Accordion {this.props.accordionName}
            </div>
            <div className="content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit, tellus non posuere pretium, lorem libero gravida leo, id tempor metus sapien non nibh. Cras
            </div>
         </React.Fragment>
      );
   }
}

export default Accordion;
