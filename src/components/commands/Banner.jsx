import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const Banner = () => {
  const bannerTexts = textCommands.banner.texts;

  return (
    <div className="terminal-banner">
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < bannerTexts.length; i++) {
            typewriter.typeString(bannerTexts[i]);
            if (i < bannerTexts.length - 1) {
              typewriter.pasteString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Banner;
