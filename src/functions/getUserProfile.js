import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/config";

const getUserProfile = async(accountAddress) =>{
    try{
    const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/ZMTUtU_F14w88nI9Dgp2ql5kA9gAi0Ts')
        // const signer = await provider.getSigner();
    // const accountAddress = await signer.getAddress()
    const contract = new ethers.Contract(contractAddress, contractAbi, provider)
    // console.log(accountAddress);
    
    const [user,email,exists] = await contract.getProfile(accountAddress);
    
    return([user, email, exists]);
    }
    catch(err){
        console.log(err);
        
    }
}

export default getUserProfile;