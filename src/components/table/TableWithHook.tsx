import {useState} from "react";
import styled from "@emotion/styled";
import {useFetchAllUsers} from "../../hooks/useFetch";
import {Users} from "../../types/user";
import Table from "./Table";
import Spinner from "../loading/Spinner";

function TableWithHook() {
    const {data, isError, isLoading} = useFetchAllUsers();

    return (
        <>
            {isError ? <div>Error</div> : null}
            {data ?
                <Table users={data}/>
                : <Spinner/>
            }
        </>
    );
}

export default TableWithHook;