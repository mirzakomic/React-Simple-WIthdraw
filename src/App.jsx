import { useState } from "react";
import "./App.css";
import MoneyAmount from "./components/MoneyAmount";

function App() {
  const [money, setMoney] = useState(0);

  return (
    <div className="flex-center">
      <div className="flex-inside">
        <MoneyAmount money={money} setMoney={setMoney} />
      </div>
    </div>
  );
}

export default App;
