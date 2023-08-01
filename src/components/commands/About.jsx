import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const About = () => {
  const aboutTexts = textCommands.about.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < aboutTexts.length; i++) {
            typewriter.typeString(aboutTexts[i]);
            if (i < aboutTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default About;
