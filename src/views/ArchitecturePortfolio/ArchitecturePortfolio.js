import React from "react";

import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js";


const architecturePortfolio = () => {

  let name = "Sophie"

  return (
    <div>
      <Header
        color="transparent"
        brand="Architecture Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        // {...rest}
      />
    <div> This is a test {name} </div>
    </div>
  );
  }

  export default architecturePortfolio;