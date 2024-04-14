const TerminalHeader = (props: any) => {
  return (
    <>
      <div className="terminal-header">
        <div className="terminal-control-buttons">
          <div className="terminal-control-button red"></div>
          <div className="terminal-control-button yellow"></div>
          <div className="terminal-control-button green"></div>
        </div>
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default TerminalHeader;
