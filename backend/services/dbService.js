import config from "config";
import 'dotenv/config';
import mongoose from 'mongoose';

const environment = config.get('ENVIRONMENT');
// const connectionString = process.env.ATLAS_CONT;
const localConnectionStr = process.env.LOCAL_CONT;

const connectToLocalDb = async () => {
  try {
    await mongoose.connect(localConnectionStr);
    console.log('Successfully connected to MongoDB locally');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
}

const connectToAtlasDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Successfully connected to MongoDB in Atlas');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
}

const connectToDb = async () => {
  if (environment === "development") {
    await connectToLocalDb();
  } else if (environment === "production") {
    await connectToAtlasDb();
  }
}

export default connectToDb;