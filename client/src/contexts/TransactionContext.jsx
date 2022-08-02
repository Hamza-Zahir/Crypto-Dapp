import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../contracts/Transactions.json";

export const TransactionContext = React.createContext();
const contractAddress = {
  97: "0xe37533BD809335Ef571b8F1694e7c8613bD13e8f", //tbnb
  3: "0xCf81Ec8d10851EaF632Be446595fA0eA29BED8e6", // ropsten
  42: "0x9799b24318b5D62C317408E994b17716740897B8", // kovan
  4: "0x5Eb9Bd07EA0Eb86b771d45FA31EeFbfC0B72b6e6", // rinkeby
};

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [CurrentAccount, setCurrentAccount] = useState();
  const [ChainId, setChainId] = useState();
  const [chainLoder, setChainLoder] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyoword: "",
    message: "",
  });
  const [isLoding, setIsLoding] = useState(false);
  const [Transactoins, setTransactoins] = useState([]);

  const grtEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress[ChainId],
      contractABI.abi,
      signer
    );

    return transactionContract;
  };
  const checkWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("please install metamask");
      const accountes = await ethereum.request({ method: "eth_accounts" });

      if (accountes.length) {
        setCurrentAccount(accountes[0]);
      }
      await ethereum.request({ method: "eth_chainId" }).then((resalt) => {
        setChainId(Number(resalt));
        getAllTransactions();
      });

      // ................................................
      async function handleAccountsChanged() {
        window.location.reload();
      }
      async function handleChainChanged(_chainId) {
        window.location.reload();
      }
      const handleDisconnect = () => {
        window.location.reload();
      };
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("disconnect", handleDisconnect);
      // ......................................
    } catch (error) {
      console.log(error);
      throw new Error("no etherum object");
    }
  };

  const connectWallet = async () => {
    if (!ethereum) {
      window.open("https://metamask.io", "blank");
    } else {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);

      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${Number(97).toString(16)}` }],
        });
        await ethereum.request({ method: "eth_chainId" }).then((resalt) => {
          setChainId(Number(resalt));
        });
      } catch (switchError) {
        console.log(switchError);
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${Number(97).toString(16)}`,
                  chainName: "Binance Smart Chain Testnet",
                  nativeCurrency: {
                    name: "Binance Chain Native Token",
                    symbol: "BNB",
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
              ],
            });

            await ethereum.request({ method: "eth_chainId" }).then((resalt) => {
              setChainId(Number(resalt));
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };

  const getAllTransactions = async () => {
    if (ChainId && !chainLoder) {
      try {
        const transactionContract = grtEthereumContract();
        const availableTransactions =
          await transactionContract.getAllTransactions();
        if(availableTransactions.length){
        const structuredTransactions = availableTransactions.map(
          (transaction, index) => ({
            id: index + 1,
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
            message: transaction.message,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
          })
        );

        setTransactoins(structuredTransactions);
    }
        setChainLoder(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const corectChainId = () => {
    if (ChainId === 97 || ChainId === 3 || ChainId === 4 || ChainId === 42) {
      return true;
    } else {
      return false;
    }
  };
  const sendTransaction = async () => {
    try {
      if (!CurrentAccount) return alert("Please Conect Your Wallet");
      if (CurrentAccount && !corectChainId())
        return alert("Please Switch To Correct Network");
      const { addressTo, amount, keyoword, message } = formData;
      const transactionContract = grtEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        message,
        keyoword,
        {
          from: CurrentAccount,
          value: parsedAmount._hex,
        }
      );

      setIsLoding(true);
      console.log(`loading ${transactionHash.hash}`);
      await transactionHash.wait();
      setFormData({
        addressTo: "",
        amount: "",
        keyoword: "",
        message: "",
      });
      setIsLoding(false);
      console.log(`success ${transactionHash.hash}`);
      setChainLoder(false);
      getAllTransactions();
    } catch (error) {
      console.log(error);
      throw new Error("no etherum object");
    }
  };
  useEffect(() => {
    checkWalletIsConnected();
  });

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        CurrentAccount,
        formData,
        handleChange,
        sendTransaction,
        Transactoins,
        isLoding,
        ChainId,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

