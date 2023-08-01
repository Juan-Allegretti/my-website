import React from "react";

const MapConsoleOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div ref={scrollRef}>
      {consoleOutput.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
};

export default MapConsoleOutput;
