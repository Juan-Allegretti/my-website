import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const Help = () => {
  const helpTexts = textCommands.help.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < helpTexts.length; i++) {
            typewriter.typeString(helpTexts[i]);
            if (i < helpTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Help;
