import React, { useState } from 'react';
import styled from 'styled-components';

import { Input, Typography, Popover } from '@material-ui/core';

const StDiv = styled.div`
  padding: 10px;
  line-height: 0;
`;

const MyPopover = ({ btn, header, inputValue, disabled }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    if (disabled) return;
    setAnchorEl(event.currentTarget.querySelector('button'));
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const ignore = (event) => event.stopPropagation();
  const selectThis = (event) => event.target.select();
  const anchorOrigin = { vertical: 'bottom', horizontal: 'center' };
  const transformOrigin = { vertical: 'top', horizontal: 'center' };
  const open = Boolean(anchorEl);

  return (
    <div>
      <div onClick={handleClick}>
        {btn}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={ignore}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <StDiv>
          <Typography variant="h6">
            {header}
          </Typography><br />
          <Input fullWidth={true} autoFocus onFocus={selectThis} value={inputValue} multiline />
        </StDiv>
      </Popover>
    </div>
  );
};

export default MyPopover;
