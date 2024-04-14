import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const TerminalBreadcrumbs = (props: any) => {
  return (
    <>
      <div className="terminal-breadcrumb-group">
        <div className="terminal-breadcrumb ">
          <FontAwesomeIcon icon={faCrown} /> K1N6Y / TypescriptTerminal
        </div>
        <div className="terminal-breadcrumb orange">commands</div>
        <div className="terminal-breadcrumb orange">{props.breadcrumb}</div>
      </div>
    </>
  );
};

export default TerminalBreadcrumbs;
