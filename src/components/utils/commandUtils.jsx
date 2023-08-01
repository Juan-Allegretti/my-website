import {
  functionCommandsList,
  printCommandsList,
  redirectCommands,
} from "../commands/commands";

export function isPrintCommand(command) {
  return printCommandsList.includes(command);
}

export function isFunctionCommand(command) {
  return functionCommandsList.includes(command);
}

export function isRedirectCommand(command) {
  return Object.keys(redirectCommands).includes(command);
}

export function isValidCommand(command) {
  return (
    isPrintCommand(command) ||
    isFunctionCommand(command) ||
    isRedirectCommand(command)
  );
}

export function autocompleteCommand(command) {
  const validCommands = [
    ...printCommandsList,
    ...functionCommandsList,
    ...Object.keys(redirectCommands),
  ];
  const matchedCommands = validCommands.filter((c) => c.startsWith(command));
  return matchedCommands;
}
