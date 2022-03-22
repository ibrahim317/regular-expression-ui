import Header from "./components/Header.js";
import { useState } from "react";
import Basic from "./components/Basic.js";
import Advanced from "./components/Advanced.js";
function App() {
  const [isBasic, setIsBasic] = useState(false);

  const basicChecked = () => {
    setIsBasic(true);
  };
  const advancedChecked = () => {
    setIsBasic(false);
  };
  return (
    <div className="container">
      <Header
        onBasic={basicChecked}
        onAdvance={advancedChecked}
        Checked={isBasic}
      />
      {isBasic ? <Basic /> : <Advanced />}
    </div>
  );
}

export default App;
