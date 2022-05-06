import { FieldValues } from 'react-hook-form';
import * as yup from 'yup';

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
