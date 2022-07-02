import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { Gridbox, GridData, UserName } from './Main.styled.js';
import { Grid } from '@mui/material';
import { DivContainer } from './Main.styled.js';
import { GridContainer } from './Main.styled.js';
import './Main.styled.js';
const Main = () => {
  const [searchItem, setSearchItem] = useState('');
  return (
    <DivContainer>
      <GridData container style={{ border: '1px solid red' }}>
        <GridContainer item>
          <input
            label="fullWidth"
            id="fullWidth"
            type="text"
            style={{
              background: 'white',
              padding: 10,
              borderRadius: 10,
              outline: 'none',
            }}
          />
        </GridContainer>
        <Gridbox item>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <UserName style={{ color: 'white' }}>Hello</UserName>
        </Gridbox>
      </GridData>
    </DivContainer>
  );
};

export default Main;
