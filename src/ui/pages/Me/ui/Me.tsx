import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEditMeSubmit, useInputs, useMe, useMeForm } from '../lib';
import InputGroup from '../../../molecules/InputGroup';
import InputFace from '../../../molecules/InputFace';
import { createConsoleLog } from '../../../../app/log';

const fp = 'ui/pages/Me/ui/Me.tsx';

const Me: React.FC = () => {
  console.log(createConsoleLog(fp)());

  const { handleSubmit, control } = useMeForm();
  const { user } = useMe();
  const { baseInputs, addressInputs, companyInputs } = useInputs(user);
  const { handleEditMe } = useEditMeSubmit(user ? user.id : 0);

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(handleEditMe)}>
          <InputFace
            avatarIcon={<AccountCircleIcon />}
            titleLabel={`ID: ${user ? user.id : 0}`}
            submitLabel="EDIT"
          />
          {/* Basic */}
          <InputGroup control={control} inputs={baseInputs} />
          {/* Address */}
          <InputGroup control={control} inputs={addressInputs} />
          {/* Company */}
          <InputGroup control={control} inputs={companyInputs} />
        </form>
      </Paper>
    </Container>
  );
};

export default Me;
