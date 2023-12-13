import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MUEBLES PERSONALIZADOS",
          "DURABILIDAD",
          "GARANTÍA",
          "BUENO BONITO BARATO",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
