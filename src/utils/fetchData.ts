import axios from "axios";
import {BEARER_TOKEN} from "../constants/api";

const fetchData = async (
    url: string,
    setLoadingFnc: (isLoading: boolean) => void,
    setIsErrorFnc: (isError: boolean) => void,
    setDataFnc: (data: any) => void
) => {

    setLoadingFnc(true);
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
        }
    });

    if (response.status === 200) {
        setLoadingFnc(false);
        setDataFnc(response.data);
    } else {
        setIsErrorFnc(true);
        throw new Error("Something went wrong");
    }
}

export default fetchData;