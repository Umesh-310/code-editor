import React from "react";
import Editor from "@monaco-editor/react";
const DivCheck = () => {
  return (
    <div className='x-wrapper'>
      {/* <div className='partion'> */}
      <div className='editor-side box'>
        <div className='lang-btn'>
          <button>Html</button>
          <button>Css</button>
          <button>JS</button>
        </div>
        <div className='editor-part'>
          <div className='editor'>hello</div>
          <div className='eorror'>hello</div>
        </div>
      </div>
      <div className='output-side box'></div>
      {/* </div> */}
    </div>
  );
};

export default DivCheck;
