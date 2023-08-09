import { AuthSlice } from "./redux/main/auth/auth";
import { stateSlice } from "./redux/main/state/state";

export const combineAction = {
    ...stateSlice,
    ...AuthSlice
}