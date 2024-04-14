import TerminalBreadcrumbs from "./TerminalBreadcrumbs";

const TerminalMessage = (props: any) => {
  return (
    <>
      <TerminalBreadcrumbs breadcrumb={props.children} />
      <div className="terminal-message">{props.children}</div>
    </>
  );
};

export default TerminalMessage;
