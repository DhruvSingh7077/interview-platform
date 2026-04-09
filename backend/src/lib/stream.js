import {StreamChat} from "stream-chat"
import {ENV }from "./env.js"

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.log("Streamapi key is missing");
}
export const chatClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async(userData) => {
    try {
        await chatClient.upsertUsers([userData])
        return userData
    } catch (error) {
        console.log("Error upserting stream user:",error)
    }
}
