import React from 'react';

// "@date-io/moment": "^1.3.13" - более поздние версии не подойдут
import MomentUtils from '@date-io/moment'; 
import moment from 'moment';
moment.locale('ru');

import {
  DateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';


const InputDateTime = ({ label, value, onChange, name, format = 'DD.MM.yyyy HH:mm', ...otherProps }) => {
  /*
    Функция handleChange предоставляет удобный интерфейс для работы с Formik =>
    => Если Formik не используется, то можно ее удалить, передав в DateTimePicker 'onChange={onchange}' 

    Эта функция передает функции onChange объект, схожий по структуре с объектом 'event',
    что позволяет обработать изменение при помощи formik.handleChange (хук useFormik)
  */ 

  const handleChange = (val) => onChange({ target: { name, value: val } });
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="ru">
      <DateTimePicker
        ampm={false}
        fullWidth={true}
        inputVariant="filled"
        format={format}
        label={label}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </MuiPickersUtilsProvider>
  );
};

export default InputDateTime;
