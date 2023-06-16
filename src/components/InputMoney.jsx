const InputMoney = ({value, onChange}) => {
    return (
        <>
        <input placeholder="amount in €" value={value} onChange={onChange} type="number"/>
        </>
    );
}
 
export default InputMoney;