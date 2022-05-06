const uniqueId = () =>
  new Date().getTime().toString() + Math.floor(Math.random() * 10).toString();

export default uniqueId;
