import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const CustomHeader = styled.header`
  height: 100px;
  background-color: #838992;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export default function Header() {
  return (
    <CustomHeader>
      <Typography variant="h3" component="h1" sx={{ color: 'white' }}>
        LOGO
      </Typography>
    </CustomHeader>
  );
}
