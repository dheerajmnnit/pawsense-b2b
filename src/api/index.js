import { get, patch, post } from "./config";
import endpoints from "./endpoints";

export const verifyOtp = (data) => {
    return get(endpoints.VERIFY_OTP, data);
};
