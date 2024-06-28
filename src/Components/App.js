import Editor from "./Editor";

function App() {

  return (
    <>
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor/> 
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-script"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}

export default App;
