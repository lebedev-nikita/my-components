import React, { useState } from 'react';
import styled from 'styled-components';

// "@date-io/moment": "^1.3.13" - более поздние версии не подойдут
import MomentUtils from '@date-io/moment'; 
import moment from 'moment';
moment.locale('ru');

import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import { Typography } from '@material-ui/core';


const DateInput = styled(DatePicker)`
  width: 0;
  height: 0;
  position: absolute;
  margin-top: -25px;
`;

const DocsDate = styled(Typography)`
  text-decoration: underline;
  cursor: pointer;
`;

const PickableDate = ({ value, onChange, format = 'DD.MM.YYYY', dayEnd = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span>
      <DocsDate display="inline" onClick={() => setIsOpen(true)}>
        {moment(value).format(format)}
      </DocsDate>
      <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="ru">
        <DateInput
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          open={isOpen}
          InputLabelProps={{ shrink: true }}
          autoOk
          variant="inline"
          disableFuture={true}
          ampm={false}
          value={value}
          onChange={(date) => {
            const newValue = dayEnd
              ? moment(date).endOf('day').toDate()
              : moment(date).startOf('day').toDate();
            onChange(newValue);
          }}
        />
      </MuiPickersUtilsProvider>
    </span>
  );
}

export default PickableDate;
