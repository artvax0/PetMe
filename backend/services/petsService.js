import config from 'config'
import Pet from '../models/collections/Pets.js'
import { createError } from '../utils/handleErrors.js';

const db = config.get('DB');

// [POST]
const addPet = async (name) => {
  if (db === 'mongodb') {
    try {
      let pet = new Pet(name);
      pet = await pet.save();
      return pet;
    } catch (error) {
      return createError('Mongoose', error);
    }
  }
  return configError('db');
}

export { addPet };