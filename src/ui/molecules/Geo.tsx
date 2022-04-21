import React from 'react';

type Props = {
  lat: string;
  lng: string;
};

const GeoMolecule: React.FC<Props> = (props) => {
  const { lat, lng } = props;

  return (
    <>
      <div>Lat: {lat}</div>
      <div>Lng: {lng}</div>
    </>
  );
};

export default GeoMolecule;
