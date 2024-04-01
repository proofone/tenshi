import { ObjectId } from "mongodb";
import { localityArea } from "./user";
interface BaseActivity {
    creator_id: number;
    parent_id?: ObjectId;
    title: string;
    status: "draft" | "cancelled" | string;
    created_date: Date;
    mod_date?: Date;
}
interface ActivityExtraProps {
    description: string;
    topics: string[];
    tags: string[];
    media_ids?: string[];
}
/**
 * The highest level activity. Parent_id can point to a parent {@link Project}.
*/
export interface Project extends BaseActivity, ActivityExtraProps {
    owner_id?: number;
}
/**
 * Activities, events that have a specific start and end time, and optional subtasks.
 * Parent_id can point to a {@link Project}.
*/
export interface Action extends BaseActivity, ActivityExtraProps {
    start: Date;
    end: Date;
    recurrence?: {
        interval_hrs?: number;
        day_of_week?: number;
        day_of_mon?: number;
    };
    location: string | localityArea;
    tasks?: Task[];
}
export interface Task extends BaseActivity {
    description?: string;
    deadline: Date;
    cost_est?: string;
    work_est?: string;
    responsible_id?: null | number;
    contributions?: Contribution[];
}
/**
 * To record contributions of Users to Tasks
*/
export interface Contribution {
    user_id: number;
    role?: string;
    result?: string;
}
export {};
