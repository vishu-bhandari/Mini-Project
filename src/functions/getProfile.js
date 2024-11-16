import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/config";

const getProfile = async() =>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const accountAddress = await signer.getAddress()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)
    console.log(accountAddress);
    
    const [user,email,exists] = await contract.getProfile(accountAddress);
    
    return([user, email, exists]);
    }
    catch(err){
        console.log(err);
        
    }
}

export default getProfile;