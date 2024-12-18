import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook


  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState('')
  


  useEffect(() => {
    checkMetaMask();
  }, []);


  const checkMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        const accounts = await provider.listAccounts();
        const signer = provider.getSigner()
        const wallet = await (await signer).getAddress()
        setSigner(wallet)
        if (accounts.length > 0) {
          setIsConnected(true);
          // console.log(accounts[0]);   
          const network = await provider.getNetwork();

      //     if(network.chainId !== BigInt(137)){

      //     await window.ethereum.request(
      //       {
      //           method: 'wallet_switchEthereumChain',
      //           params: [{ chainId: '0x89' }],
      //       }
      //   );
      // }
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
        setIsConnected(false);
      }
    } 
    else {
      setIsConnected(false);
    }
  };
  
  


  const connectWallet = async () => {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      checkMetaMask();
      setIsConnected(true)
    } catch (error) {
      console.error('Error connecting MetaMask:', error);
    }
  };


  return (
    <>
      <nav className=" pl-2 bg-white bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">EduBlocks</span>
          </a>

          {/* Button and Mobile Menu */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            {
              isConnected?
              (
                <button 
              type="button" 
              className="text-white bg-secondary hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
              onClick={() => navigate('/Dashboard')} // Navigate to /Dashboard on click
            >
                {`${signer.slice(0, 3)}....${signer.slice(-3)}`}
                </button>
              ) :
              (
                <button 
              type="button" 
              className="text-white bg-secondary hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
              onClick={connectWallet} // Navigate to /Dashboard on click
            >
              Connect Wallet
            </button>
              )
            }
            

            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="/" className="block py-2 px-3 text-white bg-secondary rounded md:bg-transparent md:text-secondary md:p-0">Home</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
