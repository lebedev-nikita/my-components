import React from 'react'; // eslint-disable-line
import styled from 'styled-components';

import { CircularProgress } from '@material-ui/core';


const CenteredCircularProgress = styled(CircularProgress)`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export default CenteredCircularProgress;
