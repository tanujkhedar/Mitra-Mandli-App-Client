import toast from "react-hot-toast"
import { api } from "../../app/Api"

export const getSearchedUser = async (userName) => {
    try {
        const response = await api.get(`/user/get/username/${userName}`);
        return response.data;
    } catch (error) {
       // toast.error(error.response?.data?.message)
        return error.response?.data
    }
}