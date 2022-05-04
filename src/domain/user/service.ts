const separateZip = (zip: string | undefined): number[] => {
  if (!zip) return [0, 0];
  const zips = zip.split('-');

  return zips.map((z) => Number(z));
};

export default separateZip;
