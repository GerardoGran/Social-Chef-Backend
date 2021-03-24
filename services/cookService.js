import { insertCook } from '../models/cookDb';

const createCook = async (name, lastName, username, email, password) => {
    try {
        return await insertCook(name, lastName, username, email, password)
    } catch (err) {
        throw new Error(err.mesage)
    }
}

export default createCook