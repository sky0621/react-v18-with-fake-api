import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEditMeSubmit, useInputs, useMe, useMeForm } from '../lib';
import InputGroup from '../../../molecules/InputGroup';
import InputFace from '../../../molecules/InputFace';
import BriefNotification from '../../../organisms/BriefNotification/ui/BriefNotification';

const Me: React.FC = () => {
  const { handleSubmit, control } = useMeForm();
  const { user, alert } = useMe();
  const { baseInputs, addressInputs, companyInputs } = useInputs(user);
  const { handleEditMe } = useEditMeSubmit(user ? user.id : 0);

  if (
    baseInputs.length === 0 ||
    addressInputs.length === 0 ||
    companyInputs.length === 0
  ) {
    return null;
  }

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      {alert != null && <BriefNotification log={alert} />}
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
