import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const Social = () => {
  const socialTexts = textCommands.social.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < socialTexts.length; i++) {
            typewriter.typeString(socialTexts[i]);
            if (i < socialTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Social;
