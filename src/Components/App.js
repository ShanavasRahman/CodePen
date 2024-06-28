import { useEffect, useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>
      ${html}
      </body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
  `)
    }, 250);
  })


  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          value={html}
          onChange={setHtml}
          language="xml"
        />
        <Editor
          displayName="Css"
          value={css}
          onChange={setCss}
          language="css"
        />
        <Editor
          displayName="JavaScript"
          value={js}
          onChange={setJs}
          language="javascript"
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
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
