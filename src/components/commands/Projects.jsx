import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const Projects = () => {
  const contactTexts = textCommands.projects.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < contactTexts.length; i++) {
            typewriter.typeString(contactTexts[i]);
            if (i < contactTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Projects;
