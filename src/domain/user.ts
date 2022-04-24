import { getUser as getUserResource } from '../adapter/UserResource';

const getUser = async (id: number) => getUserResource(id);

export default getUser;
