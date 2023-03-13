import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  const onchangeHtmlHandler = (e: any) => {
    setHtmlCode(e.target.value);
  };
  const onchangeCssHandler = (e: any) => {
    if(e.target.value.includes('body')){
      console.log('yes');
    }else{
      console.log('no');
      
    }
    setCssCode(e.target.value);
  };
  useEffect(() => {
    const root = document.getElementById("showRoot")!;
    root.innerHTML = htmlCode;
  }, [htmlCode]);

  useEffect(() => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssCode);
    document.adoptedStyleSheets = [sheet];
  }, [cssCode]);

  return (
    <>
      <div className='box-wrapper'>
        <div className='middle-column'>
          {/* <label htmlFor='html'>HTML</label> */}
          <textarea
            name='html'
            onChange={onchangeHtmlHandler}
            id='html'
            className='box1'
          ></textarea>

          {/* <label htmlFor='html'>CSS</label> */}
          <textarea
            name='css'
            onChange={onchangeCssHandler}
            id='css'
            className='box2'
          ></textarea>
        </div>
        <div className='showRoot' id='showRoot'></div>
      </div>
    </>
  );
};

export default HomePage;
/*
 <div className='box-wrapper'>
      <div className='middle-column'>
        <textarea id='box5'>Box 5</textarea>
        <textarea id='box6'>Box 6</textarea>
      </div>
        <div id='box4'>Box 4</div>
    </div>
*/
