import React from "react";
import { Footer, Header } from "./components";
import { Home, About, Service, Career } from "./containers";
import "./assets/stylesheet/global.scss";

function App() {
  return (
    <React.Fragment>
      <Header
        menu={[
          { name: "home", src: "#home" },
          { name: "service", src: "#service" },
          { name: "about", src: "#about" },
          { name: "career", src: "#career" },
        ]}
        locale={true}
      />
      <Home />
      <Service />
      <About />
      <Career />
      <Footer />
    </React.Fragment>
  );
}

export default App;
