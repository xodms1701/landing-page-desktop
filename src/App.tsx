import React from "react";
import { Footer, Header } from "./components";
import { Home, About, Service } from "./containers";
import "./assets/stylesheet/global.scss";

function App() {
  return (
    <React.Fragment>
      <Header
        menu={[
          { name: "home", src: "#home" },
          { name: "service", src: "#service" },
          { name: "about", src: "#about" },
        ]}
        locale={true}
      />
      <Home />
      <Service />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
