import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { User } from '../../store/user';
import Id from '../atoms/Id';
import Typographies from '../molecules/Typographies';
import Email from '../atoms/Email';
import Name from '../atoms/Name';
import Address from '../molecules/Address';
import Phone from '../atoms/Phone';
import WebSite from '../atoms/WebSite';
import Company from '../molecules/Company';

type Props = {
  user: User;
};

const UserDetailOrganism: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={user.name} />
      <CardContent>
        <Typographies
          elements={[
            <Id label="ID" val={user.id} linkPath="" />,
            <Name label="UserName" val={user.username} />,
            <Email val={user.email} />,
          ]}
        />
        <Address
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipCode={user.address.zipcode}
          geo={[user.address.geo.lat, user.address.geo.lng]}
        />
        <Typographies
          elements={[
            <Phone label="Phone" val={user.phone} />,
            <WebSite label="WebSite" val={user.website} />,
          ]}
        />
        <Company
          name={user.company.name}
          catchPhrase={user.company.catchPhrase}
          bs={user.company.bs}
        />
      </CardContent>
    </Card>
  );
};

export default UserDetailOrganism;
