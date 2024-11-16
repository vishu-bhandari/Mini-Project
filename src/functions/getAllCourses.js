import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/config";

const getAllCourses = async() =>{
    try{
    // const provider = new ethers.BrowserProvider(window.ethereum);
    const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/ZMTUtU_F14w88nI9Dgp2ql5kA9gAi0Ts')
    const contract = new ethers.Contract(contractAddress, contractAbi, provider)
    // console.log(accountAddress);
    
    const courses = await contract.getAllCourses();
    
    return(courses);
    }
    catch(err){
        console.log(err);
        
    }
}

export default getAllCourses;