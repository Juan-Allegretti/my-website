import { getAge, getYear } from "../utils/timeUtils";

export const redirectCommands = {
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/juan.allegretti",
  },
  twitter: { title: "Twitter", url: "https://www.twitter.com/juanallegretti" },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/juanallegretti",
  },
  github: { title: "GitHub", url: "https://www.github.com/juan-allegretti" },
  facebook: {
    title: "Facebook",
    url: "https://www.facebook.com/people/Juan-Allegretti/pfbid037TtX5Jrq2Yes3g8T9qxxoAHXJQETLz5RMXCGrwwUzvJ8PTnGF6Mw4b6DJ5xG3rmzl/",
  },
  threads: { title: "Threads", url: "https://www.threds.net/juan.allegretti" },
  email: { title: "Email", url: "mailto:juanm@mail.com" },
  x: { title: "X", url: "https://www.x.com/juanallegretti" },
  github: {
    title: "GitHub",
    url: "https://www.github.com/juan-allegretti",
  },
};

export const textCommands = {
  about: {
    title: "About",
    texts: [
      `I am a ` +
        getAge("1993-06-15") +
        `-year-old <span class="terminal-highlight">Computer Engineer</span> graduated from <a href="https://unlam.edu.ar">UNLaM</a> with a focus on backend development, specializing in <span class="terminal-highlight">Python</span>, `,
      `and a background in the <span class="terminal-highlight">cybersecurity</span> field. As well, I have a keen interest in crypto and blockchain technologies. `,
      `In 2020, I joined <span class="terminal-highlight">Mercado Libre</span>, one of the largest tech companies in Latin America, where I have the opportunity of sharpening `,
      `my backend development skills, honing my expertise in building applications. I also have the opportunity to apply my academic knowledge `,
      `in real-world scenarios, contributing to the company's success and security. `,
      `I am always open to new challenges that allow me to leverage my backend development skills, cybersecurity background, and enthusiasm `,
      `for crypto and blockchain.`,
    ],
  },
  projects: {
    title: "Projects",
    texts: [
      `Currently, my projects are confidential. You can also see my GitHub profile where you will mostly find repositories `,
      `with some practical exercises carried out in my university days.`,
      `<span class="command">github</span>       <a href="${redirectCommands.github.url}">github.com/Juan-Allegretti</a>`,
    ],
  },
  contact: {
    title: "Contact",
    texts: [
      `If you have any questions, interesting projects, or simply want to say hello, feel free to reach out to me`,
      `   <span class="command">email</span>          Write me at <a href="${redirectCommands.email.url}">juan@mail.com</a>`,
      `   <span class="command">linkedin</span>       Follow me on <a href="${redirectCommands.instagram.url}">linkedin.com/in/Juan-Allegretti</a>`,
      `You can also contact me on my social networks. Just type the command <span class="command">social</span> and start following me!`,
    ],
  },
  social: {
    title: "Social",
    texts: [
      `Here are my social media profiles. Feel free to follow me! You can type the command or click on the link.`,
      `   <span class="command">linkedin</span>       <a href="${redirectCommands.linkedin.url}">linkedin.com/in/juan-allegretti</a>`,
      `   <span class="command">twitter</span>        <a href="${redirectCommands.twitter.url}">twitter.com/juanallegretti</a>`,
      `   <span class="command">x</span>              <a href="${redirectCommands.x.url}">x.com/juanallegretti</a>`,
      `   <span class="command">instagram</span>      <a href="${redirectCommands.instagram.url}">instagram.com/juan.allegretti</a>`,
      `   <span class="command">threads</span>        <a href="${redirectCommands.threads.url}">threads.net/juan.allegretti</a>`,
      `   <span class="command">facebook</span>       <a href="${redirectCommands.facebook.url}">facebook.com/Juan-Allegretti</a>`,
    ],
  },
  help: {
    title: "Help",
    texts: [
      `Type one of the following commands. You can start typing some letters and then press the <span class="terminal-highlight">Tab</span> key to autocomplete the command. `,
      `Also you can use <span class="terminal-highlight">ArrowUp</span> and <span class="terminal-highlight">ArrowDown</span> to navigate through the history of commands.`,
      `   <span class="command">about</span>          About me`,
      `   <span class="command">social</span>         Social media profiles`,
      `   <span class="command">contact</span>        Contact information`,
      `   <span class="command">clear</span>          Clear the terminal`,
      `   <span class="command">help</span>           Show this help message`,
      `   <span class="command">projects</span>       My projects`,
    ],
  },
  banner: {
    title: "Banner",
    texts: [
      "   _                           _ _                     _   _   _ \n" +
        "  (_)_   _  __ _ _ __     __ _| | | ___  __ _ _ __ ___| |_| |_(_)\n" +
        "  | | | | |/ _` | '_ \\   / _` | | |/ _ \\/ _` | '__/ _ \\ __| __| |\n" +
        "  | | |_| | (_| | | | | | (_| | | |  __/ (_| | | |  __/ |_| |_| |\n" +
        " _/ |\\__,_|\\__,_|_| |_|  \\__,_|_|_|\\___|\\__, |_|  \\___|\\__|\\__|_|\n" +
        "|__/                                    |___/" +
        "\n" +
        "                                                        \u00A9 " +
        getYear(),
    ],
  },
};

export const printCommandsList = [...Object.keys(textCommands), "all"];

export const functionCommandsList = ["clear"];
