import React from "react";

import {
  Navbar,
  Welcome,
  Services,
  Transactions,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App nav-bg">
      
      <div className="mx-auto p-2" style={{ maxWidth: "1500px" }}>
         <Navbar />
       <Welcome />
        <Services />
        <Transactions />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;