
import { api } from "../../app/Api";
import toast from "react-hot-toast";


export const isFollowingByCurrentUser = async (user_id, thunkApi) => {
     try {
        const response = await api.get(`/follow/isfollow/${user_id}`);
       // toast.success(response.data?.message);
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message);
    }
}
