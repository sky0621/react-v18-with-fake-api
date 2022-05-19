import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';
import type { Control } from 'react-hook-form/dist/types/form';
import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { FieldPath } from 'react-hook-form/dist/types';
import { createConsoleLog } from '../../app/log';

const fp = 'ui/atoms/ControlledTextField.tsx';

type Props = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  defaultValue: string | number | undefined;
  // eslint-disable-next-line react/require-default-props
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

const ControlledTextField: React.FC<Props> = (props) => {
  console.log(createConsoleLog(fp)());

  const { control, name, label, defaultValue, rules } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <TextField
            id={name}
            type="text"
            label={label}
            required={!!rules?.required}
            fullWidth
            variant="standard"
            {...field}
          />
        )}
      />
    </>
  );
};

export default ControlledTextField;
