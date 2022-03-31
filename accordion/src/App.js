import React from "react";
import Accordion from "./accordion";

function App() {
   return (
      <div className="accordions">
         {
            let i = 0;
            for (; i < 5 ; i++) {
               <Accordion accordionName={i} />
            }
         }
      </div>
   );
}

export default App;
