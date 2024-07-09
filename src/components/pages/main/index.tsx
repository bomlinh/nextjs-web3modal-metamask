'use client'


import NavElement from "../../layouts/navbar";
import Footer from "@/components/layouts/footer";
import HeaderElement from "@/components/layouts/header";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ethers, parseUnits } from "ethers";
import Web3Modal from "web3modal";
import { CONTRACT_API, TOKEN_ADDRESS } from "@/utils/constants/sc_abi"

const MainPage = () => {
    const router = useRouter();
    let domain = process.env.NEXT_PUBLIC_API_URL_DEV
    if (typeof window !== 'undefined') {
        if (process.env.NODE_ENV == 'production') {
            domain = process.env.NEXT_PUBLIC_API_URL
        }
    }



    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    async function getWeb3Modal() {
        const web3Modal = new Web3Modal({
            cacheProvider: false,
            providerOptions: {
                // walletconnect: {
                //   package: WalletConnectProvider,
                //   options: {
                //     infuraId: "your-infura-id"
                //   },
                // },
            },
        })
        return web3Modal
    }
    const startPayment = async ({ setError, setTxs, ether, addr }:any) => {
        try {
            // if (!window.ethereum)
            //     throw new Error("No crypto wallet found. Please install it.");
            //
            // await window.ethereum.send("eth_requestAccounts");
            // const provider = new ethers.providers.Web3Provider(window.ethereum);

            const web3Modal = await getWeb3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.BrowserProvider(connection)
            const signer = await provider.getSigner();
            // const contract = new ethers.Contract(tokenAddress, contractABI)
            // let signature = await signer.signMessage(process.env.NEXT_PUBLIC_TRANSACTION_SIGNED_MESSAGE)
            const wallet = new ethers.Wallet('9d0bb6138a8504be8125432a14ef52a630e73f0be2e238e108b05e1ca61def8f', provider)
            const contract = new ethers.Contract(TOKEN_ADDRESS, CONTRACT_API, signer)

            const receiver = addr
            const tx = {
                to: receiver,
                from: signer,
                value: ethers.parseEther(ether),
                contract: contract,

            }
            // await ethers.Wallet.sendTransaction(tx)
            // await signer.sendTransaction(tx)
            const result = await contract.transfer(receiver, parseUnits(ether))

            // ethers.getAddress(addr);

            // const tx = await signer.sendTransaction({
            //     to: addr,
            //     value: ethers.utils.parseEther(ether)
            // });
            const block = await provider.waitForTransaction(result.hash, 1);
            console.log({ result, ether, addr, block });

            // console.log("tx", tx);
            setTxs([tx]);
        } catch (err:any) {
            setError(err.message);
        }
    };
    const ErrorMessage = ({message}:any) => {
        if (!message) return null;

        return (
            <div className="alert alert-error mt-5">
                <div className="flex-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mx-2 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        ></path>
                    </svg>
                    <label>{message}</label>
                </div>
            </div>
        );
    }
    const TxList = ({txs}: any) => {
        if (txs.length === 0) return null;

        return (
            <>
                {txs.map((item:any) => (
                    <div key={item} className="alert alert-info mt-5">
                        <div className="flex-1">
                            <label>{item.hash}</label>
                        </div>
                    </div>
                ))}
            </>
        );
    }
    const handleSubmit = async (formData: FormData) => {
        // e.preventDefault();
        // const data = new FormData(e.target);
        setError;
        await startPayment({
            setError,
            setTxs,
            ether: formData.get("ether"),
            addr: formData.get("addr")
        })
    }
    return (
        <div>
            <HeaderElement/>
            <NavElement/>
            <form className="m-4" action={handleSubmit}>
                <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl">
                    <main className="mt-4 p-4">
                        <h1 className="text-xl font-semibold text-white-700 text-center">
                            Send token payment
                        </h1>
                        <div className="">
                            <div className="my-3">
                                <input
                                    type="text"
                                    name="addr"
                                    className="input input-bordered block w-full focus:ring focus:outline-none bg-blue-950"
                                    placeholder="Recipient Address"
                                />
                            </div>
                            <div className="my-3">
                                <input
                                    name="ether"
                                    type="text"
                                    className="input input-bordered block w-full focus:ring focus:outline-none  bg-blue-950"
                                    placeholder="Amount in ETH"
                                />
                            </div>
                        </div>
                    </main>
                    <footer className="p-4">
                        <button
                            type="submit"
                            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                        >
                            Pay now
                        </button>
                        <ErrorMessage message={error}/>
                        <TxList txs={txs}/>
                    </footer>
                </div>
            </form>

        </div>
    )
}

export default MainPage