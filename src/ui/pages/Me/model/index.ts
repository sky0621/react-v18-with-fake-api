export type GeoInput = {
  lat: string;
  lng: string;
};

export type AddressInput = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInput;
};

export type CompanyInput = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserInput = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInput;
  phone: string;
  website: string;
  company: CompanyInput;
};
