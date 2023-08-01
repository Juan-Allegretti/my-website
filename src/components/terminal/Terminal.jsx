import React from "react";
import MapConsoleOutput from "./MapConsoleOutput";
import Prompt from "./Prompt";
import Contact from "../commands/Contact";
import Help from "../commands/Help";
import About from "../commands/About";
import Social from "../commands/Social";
import Banner from "../commands/Banner";
import Projects from "../commands/Projects";
import AllCommands from "../commands/AllCommands";
import CommandError from "../commands/CommandError";
import WelcomeMsg from "./WelcomeMsg";
import {
  isValidCommand,
  isPrintCommand,
  isFunctionCommand,
  isRedirectCommand,
  autocompleteCommand,
} from "../utils/commandUtils";
import { textCommands, redirectCommands } from "../commands/commands";

const Terminal = () => {
  const inputText = React.useRef();
  const scrollRef = React.useRef();

  const [input, setInput] = React.useState("");
  const [terminalOutput, setTerminalOutput] = React.useState([]);

  const [historyCommands, setHistoryCommands] = React.useState([]);
  const [historyCommandsPosition, setHistoryComandsPosition] =
    React.useState(0);

  const bannerText = textCommands.banner.texts[0];

  const commandsMap = {
    social: <Social />,
    contact: <Contact />,
    about: <About />,
    help: <Help />,
    banner: <Banner />,
    all: <AllCommands />,
    projects: <Projects />,
  };

  React.useEffect(() => {
    inputText.current.focus();
    inputText.current.selectionEnd = inputText.current.value.length;
    scrollRef.current?.scrollIntoView();
  });

  //Navigate through the history of commands
  const getCommandFromHistory = (key) => {
    if (key === "ArrowUp") {
      if (
        historyCommands.length > 0 &&
        historyCommands.length > historyCommandsPosition
      ) {
        setHistoryComandsPosition(historyCommandsPosition + 1);
        return historyCommands[
          historyCommands.length - historyCommandsPosition - 1
        ];
      } else {
        return historyCommands[
          historyCommands.length - historyCommandsPosition
        ];
      }
    } else if (key === "ArrowDown") {
      if (historyCommands.length > 0 && historyCommandsPosition > 1) {
        setHistoryComandsPosition(historyCommandsPosition - 1);
        return historyCommands[
          historyCommands.length - historyCommandsPosition + 1
        ];
      } else if (historyCommandsPosition <= 1) {
        setHistoryComandsPosition(0);
        return "";
      }
    }
  };

  const handleKeyDown = (value, e) => {
    const commandRecord = (
      <div
        ref={(element) => (scrollRef.current = element)}
        className="terminal-command-record"
      >
        <span className="terminal-prompt">
          <Prompt /> {value}
        </span>
      </div>
    );

    const handlePageRedirect = (p) => {
      setTerminalOutput([
        ...terminalOutput,
        commandRecord,
        `Redirecting to ${p.title}...`,
      ]);
      setInput("");
      setTimeout(() => {
        window.open(p.url, "_blank");
      }, 1000);
    };

    switch (e.key) {
      case "Tab":
        e.preventDefault();
        if (input.trim() !== "") {
          console.log("Value: ", value);
          const matchedCommands = autocompleteCommand(value);
          if (matchedCommands.length === 1) {
            setInput(matchedCommands[0]);
          }
          //If there are more than one matched commands, print in the console the matched commands. If there are no matched commands, do nothing
          else if (matchedCommands.length > 1 && matchedCommands != -1) {
            setTerminalOutput([
              ...terminalOutput,
              commandRecord,
              matchedCommands.join("     "),
            ]);
          }
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        const commandUp = getCommandFromHistory(e.key);
        setInput(commandUp);
        break;
      case "ArrowDown":
        e.preventDefault();
        const commandDown = getCommandFromHistory(e.key);
        setInput(commandDown);
        break;
      case "Enter":
        e.preventDefault();
        setHistoryComandsPosition(0);
        setInput("");
        if (value.trim() == "") {
          setTerminalOutput([...terminalOutput, commandRecord]);
          break;
        }
        setHistoryCommands([...historyCommands, value]);
        if (!isValidCommand(value)) {
          setTerminalOutput([
            ...terminalOutput,
            commandRecord,
            <CommandError commandName={value} />,
          ]);
          break;
        }
        if (isPrintCommand(value)) {
          setTerminalOutput([
            ...terminalOutput,
            commandRecord,
            commandsMap[value],
          ]);
          setInput("");
        } else if (isRedirectCommand(value)) {
          handlePageRedirect(redirectCommands[value]);
        } else if (isFunctionCommand(value)) {
          switch (value) {
            case "clear":
              setTerminalOutput([]);
              setInput("");
              break;
          }
        }
    }
  };

  return (
    <div
      className="terminal-container"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Tab") e.preventDefault();
      }}
    >
      <div className="terminal-content">
        <div className="terminal-banner">{bannerText}</div>
        <WelcomeMsg />
        <MapConsoleOutput consoleOutput={terminalOutput} />
        <div className="terminal-input-area">
          <Prompt />
          <input
            type="text"
            ref={inputText}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(input, e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
