
import { api } from "../../app/Api";
import toast from "react-hot-toast";


export const updateFollow = async (user_id, thunkApi) => {
        try {
            const response = await api.patch(`/follow/update/`, {followedTo : user_id});
           // toast.success(response.data?.message);
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
}