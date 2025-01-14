import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Vehicle from "./Components/Vehicle";
import InventoryButtons from "./Components/InventoryButtons";
import FilterData from "./Components/FilterData";
import Header from "./Components/Header";
import HistoryLog from "./Components/HistoryLog";

const App = () => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <Provider store={appStore}>
      <div className="w-screen h-full">
        <Header toggleButton={toggleButton} setToggleButton={setToggleButton} />
        <InventoryButtons />
        <Vehicle />
        {toggleButton ? <FilterData /> : <React.Fragment />}
        <HistoryLog />
      </div>
    </Provider>
  );
};

export default App;
