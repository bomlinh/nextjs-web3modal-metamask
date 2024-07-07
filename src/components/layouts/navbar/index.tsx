'use client'
import PAGE_ROUTES from "@/utils/constants/routes";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ethers, getAddress } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { AccountContext } from '@/context/context'
import AUTH_API from "@/services/api/auth";
import { authLoginTypeProps } from "@/services/api/auth/type";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/services/recoil/user";
import { isLoggedIn } from "@/utils/helper";


const NavElement = () => {
    /* create local state to save account information after signin */
    const [account, setAccount] = useState<string>('');
    const [accountData, setAccountData] = useState<authLoginTypeProps>();
    const setUserStateData = useSetRecoilState(userState)
    const userStateData = useRecoilValue(userState)

    const {mutate: mutateLogin} = useMutation(
        {
            mutationFn: AUTH_API.login,
            onSuccess: async (values: any) => {
                localStorage.setItem('accessToken', values.data.accessToken)
                setUserStateData({
                    avatar: '',
                    email: values.data.user.email,
                    id: values.data.user.id,
                    role: values.data.user.role,
                    address: values.data.user.address,
                    network: values.data.user.network,
                    chainId: values.data.chainId,
                    balance: values.data.user.balance,
                })
                setAccount(values.data.user.address)
            },
            onError: (error: any) => {
                const errorType = error.response.data.errors[0]
                console.log(error)
            }
        },
    )

    /* web3Modal configuration for enabling wallet access */
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

    /* the connect function uses web3 modal to connect to the user's wallet */
    async function connect() {
        try {
            const web3Modal = await getWeb3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.BrowserProvider(connection)
            const accounts = await provider.listAccounts()
            const address = accounts[0].address
            // setAccount(accounts[0].address)
            const balance = await provider.getBalance(accounts[0])
            const network = await provider.getNetwork()
            const signer = await new ethers.BrowserProvider(connection).getSigner();
            let signature = await signer.signMessage(process.env.NEXT_PUBLIC_SIGNED_MESSAGE)
            const account: authLoginTypeProps = {
                address: address,
                balance: Number(balance),
                chainId: Number(network.chainId),
                network: network.name,
                signature: signature,
            }
            console.log(account.address, account.balance, account.chainId, account.network)
            // localStorage.setItem('isWalletConnected', 'true');
            mutateLogin(account)
        } catch (err: any) {
            console.log('error:', err)
        }
    }

    return (

        <nav className="nav">
            <div className="header">
                {!isLoggedIn() ? (

                    !account ? (
                        <div className="accountInfo">
                            <button className='buttonStyle' onClick={connect}>Connect</button>
                        </div>
                    ):
                    account && <p className="accountInfo">{account}</p>

                ) :
                    (
                        <p className="accountInfo">{userStateData.address}</p>
                    )

                }
            </div>
        </nav>
    )
}

export default NavElement