import { useState } from "react";
import TerminalBase from "./components/Layouts/TerminalBase";
import TerminalInner from "./components/Layouts/TerminalInner";
import TerminalMessage from "./components/Terminal/TerminalMessage";
import TerminalInput from "./components/Forms/TerminalInput";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleTerminalSubmit = (input: string) => {
    setMessages((prevMessages: string[]) => [...prevMessages, input]);
  };

  return (
    <>
      <TerminalBase>
        <TerminalInner>
          <h1 className="terminal-introduction">Welcome</h1>
          {messages.map((message, index) => (
            <TerminalMessage key={index}>{message}</TerminalMessage>
          ))}
        </TerminalInner>
        <TerminalInput onSubmit={handleTerminalSubmit} />
      </TerminalBase>
    </>
  );
}

export default App;
