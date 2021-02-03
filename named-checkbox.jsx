import React from 'react';
import styled from 'styled-components';

import { Checkbox, FormControlLabel } from '@material-ui/core';

const StFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    user-select: none;
  }
`;

const NamedCheckbox = ({ checked, onChange, label }) => {
  return (
    <StFormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default NamedCheckbox;
