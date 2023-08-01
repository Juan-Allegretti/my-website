import React from "react";
import Typewriter from "typewriter-effect";

const CommandError = ({ commandName }) => {
  const errorTexts = [
    `<span class='terminal-error'>command not found: ${commandName}</span>`,
    `Type <span class='command'>help</span> to see the available commands.`,
  ];

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);
          typewriter.pasteString(errorTexts[0]);
          typewriter.pasteString("<br />");

          for (let i = 1; i < errorTexts.length; i++) {
            typewriter.typeString(errorTexts[i]);
            if (i < errorTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default CommandError;
