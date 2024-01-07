import { useNavigate } from "react-router-dom"
import axios from "axios"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"



const useAuthCall = () => {
    const navigate = useNavigate();

    const login = async (userInfo) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userInfo);
            toastSuccessNotify("Login successful.");
            navigate("/stock");
            console.log(data);
        } catch (error) {
            toastErrorNotify("Login failed!");
            console.log(error);
        }
    };

    return { login };
};

export default useAuthCall;

