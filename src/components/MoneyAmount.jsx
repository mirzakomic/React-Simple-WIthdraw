import { useState } from "react";
import InputMoney from "./InputMoney";

const MoneyAmount = (props) => {

    const [inputed, setInputed] = useState("");
    
    const inputChange = (event) => {
        setInputed(event.target.value)
    };

    const increment = () => {
        props.setMoney(props.money + Number(inputed));
    };
    const decrement = () => {
        props.setMoney(props.money - Number(inputed));
    };

  return (
    <>
      <p className="standard-p">Balance:</p>
      <p className="money-amount">{props.money}€</p>
      <InputMoney value={inputed} onChange={inputChange}/><br/>
      <div className="flex-row">
      <button onClick={increment}>Add money</button>
      <button onClick={decrement}>Withdraw money</button>
      </div>
    </>
  );
};

export default MoneyAmount;
