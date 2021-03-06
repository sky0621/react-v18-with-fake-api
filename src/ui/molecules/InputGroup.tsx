import React from 'react';
import type { Control } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form';
import type { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { FieldPath } from 'react-hook-form/dist/types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ControlledTextField from '../atoms/ControlledTextField';
import uniqueId from '../../domain/calc/id';
import { createConsoleLog } from '../../app/log';

const fp = 'ui/molecules/InputGroup.tsx';

export type Input = {
  name: string;
  label: string;
  defaultValue: string | number | undefined;
  // eslint-disable-next-line react/require-default-props
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  itemSize?: number;
};

type Props = {
  control: Control<FieldValues>;
  inputs: Input[];
};

const InputGroup: React.FC<Props> = (props) => {
  console.log(createConsoleLog(fp)());

  const { control, inputs } = props;

  return (
    <Paper sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
      <Grid container spacing={3}>
        {inputs.map((input) => (
          <Grid
            key={uniqueId(`${input.name}Grid`)}
            item
            xs={12}
            sm={input.itemSize ? input.itemSize : 6}
          >
            <ControlledTextField
              key={uniqueId(input.name)}
              control={control}
              name={input.name}
              label={input.label}
              defaultValue={input.defaultValue}
              rules={input.rules}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default InputGroup;
