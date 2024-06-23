import { MongoClient } from "mongodb";
import { Message, FeedItem } from './models/messages';
import { Project, Action } from './models/activities';
import { userPreferences } from './models/user';

const mongoService = process.env.MONGO_SERVICE || "0.0.0.0";
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoUrl = `mongodb://${mongoService}:${mongoPort}/mini-message-board`;
const mongoClient = new MongoClient(mongoUrl);
const database = mongoClient.db('zoldweb');

export const messagesColl = database.collection<Message>('messages');
export const feedColl = database.collection<FeedItem>('newsfeed');
export const projectsColl = database.collection<Project>('projects');
export const activitiesColl = database.collection<Action>('activities');
export const userPrefsColl = database.collection<userPreferences>('userprops');
