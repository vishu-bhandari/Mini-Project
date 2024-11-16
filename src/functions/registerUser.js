import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/config";

const registerUser = async(userName, email) =>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const accountAddress = await signer.getAddress()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    const tx = await contract.registerProfile(userName, email)
    return(tx)
    }
    catch(err){
        console.log(err);
        
    }
}

export default registerUser;