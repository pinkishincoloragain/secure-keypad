import {User, Users} from "../../types/user";
import styled from "@emotion/styled";

const TableRowWrapper = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const TableWrapper = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TableBody = styled.tbody`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const LongData = styled.td`
  flex: 2;
`;

const ShortData = styled.td`
  flex: 1;
`;


export default function Table({users}: { users: Users }) {
    return (
        <TableWrapper>
            <TableBody>
                {users?.map((user) => (
                    <TableRowWrapper key={user.userId}>
                        <ShortData>{user.name}</ShortData>
                        <LongData>{user.bankAccount}</LongData>
                        <LongData>{user.phoneNumber}</LongData>
                    </TableRowWrapper>
                ))}
            </TableBody>
        </TableWrapper>
    )
}

