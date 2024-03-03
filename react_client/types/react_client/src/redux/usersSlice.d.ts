import { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { brahmaUser } from '../../../node_server/models/user';
export interface usersState {
    users: brahmaUser[];
}
export declare const usersSlice: import("@reduxjs/toolkit").Slice<usersState, {
    extend: (state: {
        users: {
            pk: number;
            fields: {
                username: string;
                email: string;
                hometown: string;
            };
        }[];
    }, action: PayloadAction<brahmaUser[]>) => void;
}, "users", "users", import("@reduxjs/toolkit").SliceSelectors<usersState>>;
export declare const extend: import("@reduxjs/toolkit").ActionCreatorWithPayload<brahmaUser[], "users/extend">;
export declare const selectUsers: (state: RootState) => usersState;
declare const _default: import("redux").Reducer<usersState>;
export default _default;
