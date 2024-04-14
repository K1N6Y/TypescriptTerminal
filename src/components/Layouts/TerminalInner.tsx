import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import TerminalHeader from "../Terminal/TerminalHeader";

const TerminalInner = (props: any) => {
  return (
    <>
      <div className="terminal-grouped">
        <TerminalHeader
          title={
            <>
              <FontAwesomeIcon icon={faCrown} /> K1N6Y/TypescriptTerminal
            </>
          }
        />
        <div className="terminal-inner">{props.children}</div>
      </div>
    </>
  );
};

export default TerminalInner;
