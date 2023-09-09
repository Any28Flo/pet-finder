import api from "../services/api";
import { UserBase } from "../types";

export const login = async (userData:UserBase) => {
	try {
		const response = await api.post('/auth/login', userData);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error)
		throw new Error(error?.response?.data);
		
	}
	
};
export const getDataWithHeaders = async (endpoint:string) => {
	try {
		const response = await api.get(
			endpoint,
			
	)
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error)
		throw new Error(error?.response?.data);
		
	}
	
};