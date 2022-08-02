import React, { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

import Transaction_card from "./transaction_card";

const Transactions = () => {
  const { Transactoins } = useContext(TransactionContext);
  return (
    <div
      id="Transactions"
      className="Transactions text-light py-1 my-4 col-xl-11 mx-auto"
    >
      
<h1 className="text-center my-4 pb-2">Last Transactions</h1>

      {Transactoins.length ? (
        <div>
          <div className="row justify-content-center p-0 m-0 mt-2 ">
            {Transactoins.map((tra) => {
              return (
                <Transaction_card
                  key={tra.id}
                  addressFrom={tra.addressFrom}
                  addressTo={tra.addressTo}
                  amount={tra.amount}
                  message={tra.message}
                  timestamp={tra.timestamp}
                  keyword={tra.keyword}
                />
 
              );
            })}
          </div>
        </div>
      ) : (
        <div className="loader text-center p-1 my-4">
        <span> </span>
      </div>
      )}
    </div>
  );
};

export default Transactions;
