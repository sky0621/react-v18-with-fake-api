import JsSHA from 'jssha';

const uniqueId = (target: string) => {
  const s = new JsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
  s.update(target);

  return (
    s.getHash('HEX') +
    new Date().getTime().toString() +
    Math.floor(Math.random() * 10).toString()
  );
};

export default uniqueId;
