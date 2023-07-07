import {USER_API_ENDPOINT, USER_API_ENDPOINT_SLOW, USERS_API_ENDPOINT, USERS_API_ENDPOINT_SLOW} from "../constants/api";
import axios from "axios";
import {User, Users} from "../types/user";
import {useEffect, useState} from "react";
import fetchData from "../utils/fetchData";

export const useFetchAllUsers = () => {
    const [data, setData] = useState<Users | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        fetchData(USERS_API_ENDPOINT_SLOW, setIsLoading, setIsError, setData);
    }, [setIsLoading, setIsError, setData]);

    return {data, isError, isLoading};
}

export const useFetchUser = (id: string) => {
    const [data, setData] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        fetchData(`${USER_API_ENDPOINT}/${id}`, setIsLoading, setIsError, setData);
    }, [setIsLoading, setIsError, setData]);

    return {data, isError, isLoading};
}