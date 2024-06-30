import { useEffect, useState } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
  const timeOut=  setTimeout(() => {
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
    
    return ()=> clearTimeout(timeOut);
  }, [html, css, js]);


  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          value={html}
          onChangeHandler={setHtml}
          language="xml"
        />
        <Editor
          displayName="Css"
          value={css}
          onChangeHandler={setCss}
          language="css"
        />
        <Editor
          displayName="JavaScript"
          value={js}
          onChangeHandler={setJs}
          language="javascript"
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}

export default App;
