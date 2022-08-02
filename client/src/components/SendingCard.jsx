import React, { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";



const SendingCard =  () => {
  const { formData, handleChange, sendTransaction, isLoding } = useContext(TransactionContext);
  const handleSubmit = async (e) => {
    const { addressTo, amount, keyoword, message } = formData;
    e.preventDefault();

    if (addressTo || amount || keyoword || message){
    await sendTransaction(); 
    }else{
      console.log("no data");
    }
      
  };

  return (
    <div className="bg-blue-dark p-3 mt-4 bor-rud">
      <input
        type="text"
        name="addressTo"
        placeholder="Address To"
        onChange={(e) => handleChange(e, "addressTo")}
        className="w-100 p-2 text-light mt-2 input"
        value={formData.addressTo}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount (ETH)"
        step="0.0001"
        onChange={(e) => handleChange(e, "amount")}
        className="w-100 p-2 text-light mt-2 input"
        value={formData.amount}
      />
      <input
        type="text"
        name="keyoword"
        placeholder="Keyword (Gif)"
        onChange={(e) => handleChange(e, "keyoword")}
        className="w-100 p-2 text-light mt-2 input"
        value={formData.keyoword}
      />
      <input
        type="text"
        name="message"
        placeholder="Enter Message"
        onChange={(e) => handleChange(e, "message")}
        className="w-100 p-2 text-light mt-2 input"
        value={formData.message}
      />

      <div className="bg-light w-100 border border-secondary mt-2"></div>

      {isLoding ? (
        <div className="loader text-center p-1 mt-2">
          <span> </span>
        </div>
      ) : (
        <div
          onClick={handleSubmit}
          className=" btn sed_btn p-1 fw-bold rounded-pill w-100 text-light  mt-2 input"
        >
          Send Now
        </div>
      )}
    </div>
  );
};

export default SendingCard;
