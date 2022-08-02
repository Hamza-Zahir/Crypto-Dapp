import React from 'react'
import UseFetch from "../hooks/useFetch";
import ShortAdress from "./shortAddress";

function transaction_card({ addressFrom, keyword, addressTo, amount, message, timestamp, id }) {


    const { gifUrl } = UseFetch(keyword)

    return (

        <div
            className="col-10 col-sm-6 col-md-4 col-lg-3 p-2 "
            style={{ maxWidth: "270px" }}
        >
            {id}
            <div className="Card bor-rud p-3 ">
                <div className="d-flex gap-2">
                    <h6
                        className="text-end text-secondary"
                        style={{ width: "65px" }}
                    >
                        From:{" "}
                    </h6>{" "}
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} className='text-light' target="_blank" rel="noreferrer"> {ShortAdress(addressFrom)}</a>
               
                </div>
                <div className="d-flex gap-2">
                    <h6
                        className="text-end text-secondary"
                        style={{ width: "65px" }}
                    >
                        To:{" "}
                    </h6>{" "}
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} className='text-light' target="_blank" rel="noreferrer"> {ShortAdress(addressTo)}</a>
                   
                </div>
                <div className="d-flex gap-2">
                    <h6
                        className="text-end text-secondary"
                        style={{ width: "65px" }}
                    >
                        Amount:{" "}
                    </h6>{" "}
                    {amount}
                </div>

                {message && (
                    <div className="d-flex gap-2">
                        {" "}
                        <h6
                            className="text-end text-secondary"
                            style={{ width: "65px" }}
                        >
                            Message:{" "}
                        </h6>
                        <span className="message">{message}</span>
                    </div>
                )}

                <div className="gif">
                    <img src={gifUrl} className="w-100" alt="gifImg" />
                    <div className="time border border-secondary rounded-pill p-2 px-3 text-center text-info">
                        {timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default transaction_card