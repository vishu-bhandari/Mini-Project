import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/config";

const uploadContent = async(price, title, description, thumbnail, video,) =>{
    try{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const accountAddress = await signer.getAddress()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    const tx = await contract.createCourse(price, title, description, video, thumbnail)
    return(tx)
    }
    catch(err){
        console.log(err);
    }
}

export default uploadContent;