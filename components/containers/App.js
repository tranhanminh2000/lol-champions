import React, { useState } from "react";

import Overlay from "../overlay/Overlay";
import Header from "./Header";
import Section from "./Section";

function App() {
  const sectionRef = React.useRef();

  const [utilitiesState, setUtilitiesState] = useState({
    darkMode: true,
    toggleUtilities: false,
  });

  const handleScrollToSection = () => {
    sectionRef.current.scrollToSection();
  };

  const handleScrollToTop = () => {
    window.scroll(0, 0);
    setUtilitiesState({
      ...utilitiesState,
      toggleUtilities: !utilitiesState.toggleUtilities,
    });

  };

  React.useEffect(()=>{
    if(utilitiesState.darkMode){
      document.documentElement.style.setProperty('--title-color', "#fff")
      document.documentElement.style.setProperty('--primary-color', "#e6b56d")
      return;
    }
    document.documentElement.style.setProperty('--title-color', "#fff")
    document.documentElement.style.setProperty('--primary-color'," #fff")
  },[utilitiesState.darkMode])

  const handleToggleDarkMode = () => {
    setUtilitiesState({
      ...utilitiesState,
      darkMode: !utilitiesState.darkMode,
    });
  };

  const handleToggleUtilities = ()=>{
    setUtilitiesState({
      ...utilitiesState,
      toggleUtilities: !utilitiesState.toggleUtilities,

    });
  }

  return (
    <div className="app">
      <div className="content">
        <Header
          handleScrollToSection={handleScrollToSection}
          darkMode={utilitiesState}
        />
        <Section ref={sectionRef} />
        <div className={`utilities ${utilitiesState.toggleUtilities && "active"}`} >
          <div
            className={`dark-mode ${utilitiesState.darkMode && "active"}`}
            onClick={handleToggleDarkMode}
          >
            <img id="dark" src="https://lienminh.garena.vn/images/icons/Nocturne.png" alt="" />
            <img id="light" src="https://www.mobafire.com/images/avatars/lux-classic.png" alt="" />
          </div>
          <div
            className="scroll-top"
            title="scroll to top"
            onClick={handleScrollToTop}
            style={{
              backgroundImage:
                "url(https://lienminh.garena.vn/images/icons/Poppy.png)",
            }}
          ></div>
          <div className="plus" onClick={handleToggleUtilities}>+</div>
        </div>
      </div>
      <Overlay darkMode={utilitiesState.darkMode} />
    </div>
  );
}

export default App;
