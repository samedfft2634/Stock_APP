import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
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

	return { login };
};

export default useAuthCall;
