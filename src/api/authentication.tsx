import api from "../helper/intercepter";

interface OtpData {
    mobileNumber: string;
}

interface UserData {
    mobileNumber: string;
    otp: string;
    password: string;
}

interface RegisterData {
    name: string;
    email: string;
    mobileNumber: string;
    gender: string;
    maritalStatus: string;
    nationality: string;
    bloodGroup: string;
    dob: string;
    aadhar: string;
    pan: string;
}

interface PasswordData {
    mobileNumber: string;
    password: string;
}

// send OTP
export const sendOtp = async (data: OtpData) => {
    const res = await api.post("/user/send-otp", data);
    return res.data;
};

// verify OTP
export const verifyOtp = async (data: UserData) => {
    const res = await api.post("/user/verify-otp", data);
    return res.data;
};


// update
export const updateUser = async (data: RegisterData) => {
    const res = await api.put(`/user/update`, data);
    return res.data;
};

// verify password 
export const verifyPassword = async (data: PasswordData) => {
    const res = await api.post(`/user/verify-password`, data);
    return res.data;
};

// upload document
export const uploadDocument = async (data: any) => {
    const res = await api.put(`/user/upload-document`, data);
    return res.data;
};
