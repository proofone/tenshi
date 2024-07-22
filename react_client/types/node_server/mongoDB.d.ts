import { Message, FeedItem } from './models/messages';
import { Project, Action } from './models/activities';
import { userPreferences } from './models/user';
export declare const messagesColl: import("mongodb").Collection<Message>;
export declare const feedColl: import("mongodb").Collection<FeedItem>;
export declare const projectsColl: import("mongodb").Collection<Project>;
export declare const activitiesColl: import("mongodb").Collection<Action>;
export declare const userPrefsColl: import("mongodb").Collection<userPreferences>;
