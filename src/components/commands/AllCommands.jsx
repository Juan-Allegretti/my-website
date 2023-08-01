import React from "react";
import Typewriter from "typewriter-effect";
import { textCommands } from "./commands";

const AllCommands = () => {
  // avoid printing the "help", "banner" commands
  const allPrintCommands = Object.values(textCommands).filter(
    (command) => command.title !== "Help" && command.title !== "Banner"
  );

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          allPrintCommands.forEach((commandData, index) => {
            typewriter.typeString(`- ${commandData.title}`);
            typewriter.typeString("<br />");

            commandData.texts.forEach((text, i) => {
              typewriter.typeString(text);
              if (i < commandData.texts.length - 1) {
                typewriter.typeString("<br />");
              }
            });

            if (index < allPrintCommands.length - 1) {
              typewriter.typeString("<br /><br />"); // Add a new line to separate commands
            }
          });
          typewriter.start();
        }}
      />
    </div>
  );
};

export default AllCommands;
