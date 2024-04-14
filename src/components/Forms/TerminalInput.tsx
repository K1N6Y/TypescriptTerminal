import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const TerminalInput = ({ onSubmit }: { onSubmit: (input: string) => void }) => {
  const [terminalInput, setTerminalInput] = useState("");

  const terminalCommands = ["ls", "echo", "clear", "help"];

  const handleTerminalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (terminalCommands.includes(terminalInput)) {
      onSubmit(terminalInput);
    } else {
      onSubmit(`${terminalInput}: command not found`);
    }
    setTerminalInput("");
  };

  const handleTerminalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalInput(event.target.value);
  };

  return (
    <form onSubmit={handleTerminalSubmit} className="terminal-footer">
      <input
        type="text"
        value={terminalInput}
        name="Terminal"
        onChange={handleTerminalInput}
        placeholder="try 'ls', 'echo', 'clear', 'help'"
      />
      <button type="submit" className="terminal-submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default TerminalInput;
