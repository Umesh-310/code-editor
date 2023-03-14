import Editor from "@monaco-editor/react";
import { AnySrvRecord } from "dns";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [editorShow , setEditorShow] = useState('html')

  const onchangeHtmlHandler = (value: any) => {
    setHtmlCode(value);
  };
  const onchangeCssHandler = (value: any) => {
    setCssCode(value);
  };
  const onchangeJsHandler = (value: any) => {
    setJavascriptCode(value);
  };
  useEffect(() => {
    const text =
      "<html> <head> <style>" +
      cssCode +
      "</style>" +
      "<scri" +
      "pt>" +
      javascriptCode +
      "</scri" +
      "pt> </head> <body> " +
      htmlCode +
      "</body> </html>";

    let iframe = document.getElementById("viewer")!.contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  }, [htmlCode, cssCode, javascriptCode]);

  // useEffect(() => {
  //   const sheet = new CSSStyleSheet();
  //   sheet.replaceSync(cssCode);
  //   document.adoptedStyleSheets = [sheet];
  // }, [cssCode]);

  return (
    <>
      <div className='x-wrapper'>
        <div className='editor-side box'>
          <div className='lang-btn'>
            <button onClick={() => setEditorShow('html')}>Html</button>
            <button onClick={() => setEditorShow('css')}>Css</button>
            <button onClick={() => setEditorShow('javascript')}>JS</button>
          </div>
          <div className='editor-part'>
            <div className='editor'>
              {editorShow === 'html' && (
                <Editor
                  className='textarea'
                  width={`100%`}
                  language={"Html"}
                  theme={"cobalt"}
                  defaultValue={`<body>\n\n\n</body>`}
                  onChange={onchangeHtmlHandler}
                />
              )}
              {editorShow === 'css' && (
                <Editor
                  className='textarea'
                  width={`100%`}
                  language={"css"}
                  theme={"cobalt"}
                  defaultValue={`* {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}`}
                  onChange={onchangeCssHandler}
                />
              )}
              {editorShow === 'javascript' && (
                <Editor
                  className='textarea'
                  width={`100%`}
                  language={"javascript"}
                  value={""}
                  theme={"cobalt"}
                  defaultValue='console.log("hello World")'
                  onChange={onchangeJsHandler}
                />
              )}
            </div>
            <div className='error'>error</div>
          </div>
        </div>
        <div className='output-side box'>
          <iframe className='showRoot' id='viewer'></iframe>
        </div>
      </div>

    
    </>
  );
};

export default HomePage;
