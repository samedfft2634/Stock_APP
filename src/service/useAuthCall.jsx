import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess,logoutSuccess,registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCall = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const login = async (userInfo) => {
		dispatch(fetchStart());
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/auth/login`,
				userInfo
			);
			dispatch(loginSuccess(data));
			toastSuccessNotify("Login successful.");
			navigate("/stock");
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify("Login failed!");
			console.log(error);
		}
	};
    const register = async (userInformations)=>{
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`,userInformations)
            dispatch(registerSuccess(data))
			toastSuccessNotify("Registered success!");
            navigate("/")
        } catch (error) {
            dispatch(fetchFail());
			toastErrorNotify("Registration failed!");
			console.log(error);
        }

    }
	const logout = async()=>{
		try {
			dispatch(logoutSuccess())
			toastSuccessNotify("Logged out successfully!");
			navigate("/")
			
		} catch (error) {
			console.log(error);
            dispatch(fetchFail());
			toastErrorNotify("Failed operation!")
		}
	}
	return { login , register,logout };
};

export default useAuthCall;
