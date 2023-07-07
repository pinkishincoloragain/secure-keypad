import {USER_API_ENDPOINT, USERS_API_ENDPOINT} from "../constants/api";
import axios from "axios";

export const fetchAllUsers = async () => {
    const response = await axios.get(USERS_API_ENDPOINT);

    if (response.status !== 200) {
        throw new Error("Something went wrong");
    } else {
        return response.data;
    }
}

export const fetchUser = async (id: string) => {
    const response = await axios.get(`${USER_API_ENDPOINT}/${id}`);

    if (response.status !== 200) {
        throw new Error("Something went wrong");
    } else {
        return response.data;
    }

}