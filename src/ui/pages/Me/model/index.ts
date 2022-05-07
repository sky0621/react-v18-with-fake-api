import { FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { Address, User } from '../../../../domain/user/entity';

export type GeoInput = {
  lat: number;
  lng: number;
};

export type ZipInput = {
  first: number;
  second: number;
};

export type AddressInput = {
  street: string;
  suite: string;
  city: string;
  zipcode: ZipInput;
  geo: GeoInput;
};

export type CompanyInput = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserInput =
  | {
      id: number;
      name: string;
      username: string;
      email: string;
      address: AddressInput;
      phone: string;
      website: string;
      company: CompanyInput;
    }
  | FieldValues;

export const UserInputScheme = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required(),
});

export const toUser = (userId: number, ui: UserInput): User => {
  const address = ui.address as AddressInput;
  const { geo } = address;
  const company = ui.company as CompanyInput;

  return {
    id: userId,
    name: ui.name as string,
    username: ui.username as string,
    email: ui.email as string,
    phone: ui.phone as string,
    website: ui.website as string,
    address: {
      street: address.street,
      suite: address.suite,
      city: address.city,
      zipcode: address.zipcode,
      geo: {
        lat: geo.lat,
        lng: geo.lng,
      },
    } as unknown as Address,
    company: {
      name: company.name,
      catchPhrase: company.catchPhrase,
      bs: company.bs,
    },
  } as User;
};
