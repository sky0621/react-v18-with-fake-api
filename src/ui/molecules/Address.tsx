import React from 'react';
import ZipCode from '../atoms/ZipCode';
import Geo from './Geo';

type Props = {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: string[];
};

const AddressMolecule: React.FC<Props> = (props) => {
  const { street, suite, city, zipCode, geo } = props;

  return (
    <>
      <div>Street: {street}</div>
      <div>Suite: {suite}</div>
      <div>City: {city}</div>
      <ZipCode val={zipCode} />
      <Geo lat={geo[0]} lng={geo[1]} />
    </>
  );
};

export default AddressMolecule;
