import { MongoClient } from "mongodb";
import { Message } from './models/messages';
import { Action } from './models/activities';
import { userPreferences } from './models/user';

const mongoService = process.env.MONGO_SERVICE || "0.0.0.0";
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoUrl = `mongodb://${mongoService}:${mongoPort}/mini-message-board`;
const mongoClient = new MongoClient(mongoUrl);
const database = mongoClient.db('zoldweb');

export const messagesColl = database.collection<Message>('messages');
export const activitiesColl = database.collection('activities');
export const userPropsColl = database.collection('userprops');
