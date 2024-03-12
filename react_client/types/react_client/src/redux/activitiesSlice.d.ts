import { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { Action } from '../../../node_server/models/activities';
export interface actionsState {
    actions: Action[];
}
export declare const actionsSlice: import("@reduxjs/toolkit").Slice<actionsState, {
    extend: (state: {
        actions: {
            start: Date;
            end: Date;
            location: string;
            tasks?: {
                deadline: Date;
                cost_est?: string | undefined;
                work_est?: string | undefined;
                responsible_id?: string | undefined;
                contributions?: {
                    user_id: string;
                    task_id: string;
                    role: string;
                    result: string;
                }[] | undefined;
                creator_id: string;
                parent_id?: string | undefined;
                title: string;
                description: string;
                status: string;
                created_date: Date;
                mod_date: Date;
                media_ids?: string[] | undefined;
            }[] | undefined;
            creator_id: string;
            parent_id?: string | undefined;
            title: string;
            description: string;
            status: string;
            created_date: Date;
            mod_date: Date;
            media_ids?: string[] | undefined;
        }[];
    }, action: PayloadAction<Action[]>) => void;
}, "actions", "actions", import("@reduxjs/toolkit").SliceSelectors<actionsState>>;
export declare const extend: import("@reduxjs/toolkit").ActionCreatorWithPayload<Action[], "actions/extend">;
export declare const selectActions: (state: RootState) => actionsState;
declare const _default: import("redux").Reducer<actionsState>;
export default _default;
