import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const DivContainer = styled.div`
  display: flex;
  //   justify-content: center;
  align-item: center;
  //   flex-direction: column;
  background-color: black;
  height: 100vh;
`;
export const GridContainer = styled(Grid)`
  //  display:flex;
  //  justify-content:center;
  //  align-item:center;

  margin: 0 auto;
  margin-top: 5%;
`;
export const Gridbox = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 15% 0 15%;
`;

export const GridData = styled(Grid)`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.span`
  font-weight: 16px;
  font-size: 16px;
  align-self: center;
`;
