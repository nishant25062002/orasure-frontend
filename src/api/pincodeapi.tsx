import axios from "axios";

export const getpincodebystate = async (pincode: string) => {
    const res = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
    );
    return res;
};
export const getIfsccodebybankname = async (ifsc: any) => {
    if (ifsc) {
        const res = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
        return res;
    }
};
