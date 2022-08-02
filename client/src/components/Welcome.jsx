import React, { useContext } from "react";

import { FaEthereum } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../contexts/TransactionContext";
import ShortAdress from "./shortAddress";
import SwitchNetwork from "./SwitchNetwork";
import SendingCard from "./SendingCard";

const Welcome = () => {
  const { connectWallet, CurrentAccount } = useContext(TransactionContext);

  return (
    <div className="text-light m-0 mt-3 p-3 col-xl-10 mx-auto row align-items-center">
      <div className="my-2 col-12 col-sm-6 col-md-6 mx-auto">
        <h1>Send Crypto across the world</h1>
        <p className="fs-5">
          explore the crypto world. Buy and sell cryptocurrencies easily on
          krypto
        </p>
        {!CurrentAccount && (
          <div
            onClick={connectWallet}
            className="btn btn-primary text-light rounded-pill d-block  col-md-10 col-lg-8  mx-auto my-4"
          >
            Connect Wallet
          </div>
        )}

        {CurrentAccount && <SwitchNetwork />}
        <div></div>
        <div className="row m-0 my-3 border bor-rud text-center">
          <div className="col-4 border-bottom border-end px-0 py-3">
            Reliability
          </div>
          <div className="col-4 border border-top-0 px-0 py-3">Securty</div>
          <div className="col-4 border border-top-0 border-end-0 px-0 py-3">
            Ethereum
          </div>
          <div className="col-4 border border-bottom-0 border-start-0 px-0 py-3">
            Web 3.0
          </div>
          <div className="col-4 border border-bottom-0 py-3 px-0 ">
            Low fees
          </div>
          <div className="col-4 border border-bottom-0 border-end-0 py-3 px-0">
            Blockchain
          </div>
        </div>
      </div>
      <div className=" col-12 col-sm-6 col-md-6 mx-auto">
        <div className="eth-card bor-rud my-2 mx-auto p-2 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between ">
            <span className="etheIcon d-flex justify-content-center align-items-center rounded-circle">
              <FaEthereum fontSize={25} />
            </span>
            <BsInfoCircle />
          </div>
          <div>
            {CurrentAccount ? (
              <div className="">{ShortAdress(CurrentAccount)}</div>
            ) : (
              <h4>...</h4>
            )}
            <div className="fs-5">Ethereum</div>
          </div>
        </div>
        <SendingCard />
      </div>
    </div>
  );
};

export default Welcome;
