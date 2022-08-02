import React, { useState, useContext } from "react";
import { BsCaretDown } from "react-icons/bs";
import { TransactionContext } from "../contexts/TransactionContext";
const Networks = [
  {
    chainId: `0x${Number(3).toString(16)}`,
    chainName: "Ropsten",
    nativeCurrency: {
      name: "Ropsten Ether",
      symbol: "ROP",
      decimals: 18,
    },
    rpcUrls: [
      "https://ropsten.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
      "wss://ropsten.infura.io/ws/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
    ],
    blockExplorerUrls: ["https://ropsten.etherscan.io"],
  },
  {
    chainId: `0x${Number(4).toString(16)}`,
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "RIN",
      decimals: 18,
    },
    rpcUrls: [
      "https://rinkeby.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
      "wss://rinkeby.infura.io/ws/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
    ],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
  },
  {
    chainId: `0x${Number(42).toString(16)}`,
    chainName: "Kovan",
    nativeCurrency: {
      name: "Kovan Ether",
      symbol: "KOV",
      decimals: 18,
    },
    rpcUrls: [
      "https://kovan.poa.network",
      "http://kovan.poa.network:8545",
      "https://kovan.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
      "wss://kovan.infura.io/ws/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4",
      "ws://kovan.poa.network:8546",
    ],
    blockExplorerUrls: ["https://kovan.etherscan.io"],
  },

  {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "Binance Testnet",
    nativeCurrenc: {
      name: "Binance Chain Native Token",
      symbol: "tBNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545",
      "https://data-seed-prebsc-2-s2.binance.org:8545",
      "https://data-seed-prebsc-1-s3.binance.org:8545",
      "https://data-seed-prebsc-2-s3.binance.org:8545",
    ],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
];

const corectChainId = (_ChainId) => {
  if (_ChainId === 97 || _ChainId === 3 || _ChainId === 4 || _ChainId === 42) {
    return true;
  } else {
    return false;
  }
};

const chengNetwork = async (networkData) => {
 
    const { ethereum } = window;
  
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkData.chainId }],
    });
  } catch (switchError) {
    console.log(switchError);
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{ ...networkData }],
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

const SwitchNetwork = () => {
  let [showNetworks, setshowNetworks] = useState(false);
  const { ChainId } = useContext(TransactionContext);
  return (
    <>
      <div className="Switsh_Network_btn text-light pr rounded-10">
        <div
          className="btn_bg py-2 px-3 fw-bold d-flex justify-content-between rounded-10"
          onClick={() => {
            setshowNetworks(!showNetworks);
          }}
        >
          {Networks.map((network) => {
            return (
              <span
                key={network.chainId}
                className={Number(network.chainId) === ChainId ? "" : "d-none"}
              >
                {network.chainName}
              </span>
            );
          })}

          {corectChainId(ChainId) ? "" : "network error"}
          <BsCaretDown />
        </div>
        {showNetworks && (
          <div className="box btn_bg pat0l0 cp rounded-10">
            {Networks.map((network) => {
              return (
                <div
                  key={network.chainName}
                  className={
                    Number(network.chainId) === ChainId
                      ? "d-none py-2 px-3 fw-bold p-1 border-top rounded-10"
                      : "py-2 px-3 fw-bold p-1 border-top rounded-10"
                  }
                  onClick={() => {
                    chengNetwork(network);
                    setshowNetworks(!showNetworks);
                  }}
                >
                  {network.chainName}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SwitchNetwork;
