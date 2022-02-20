import React from "react";
import Accordion from "./accordion";

function App() {
   return (
      <div className="accordions">
         <Accordion accordionName={1} />
         <Accordion accordionName={2} />
         <Accordion accordionName={3} />
      </div>
   );
}

export default App;
