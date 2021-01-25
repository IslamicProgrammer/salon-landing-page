import HomePage from "./pages/HomePage";
// styles
import "./styles/App.scss";
import React, { useState } from "react";

function App() {
  const [openBar, setOpenBar] = useState(false);
  const [openoScial, setOpenSocial] = useState(false);
  return (
    <div className="App">
      <HomePage
        openBar={openBar}
        setOpenBar={setOpenBar}
        openoScial={openoScial}
        setOpenSocial={setOpenSocial}
      />
    </div>
  );
}

export default App;
