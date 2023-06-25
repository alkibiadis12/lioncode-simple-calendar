import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

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

export default function HeaderEventDetails(props) {
  return (
    <CustomHeader>
      <ArrowBackIosNewOutlinedIcon
        sx={{ color: '#fff', cursor: 'pointer' }}
        onClick={() => props.onSendClickedEvent(null)}
      />
    </CustomHeader>
  );
}
