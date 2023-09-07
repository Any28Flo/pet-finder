import { UserBase } from "../types";
import { ActionMap } from "../types/typeContext";
import { InitialStateType } from "./appContext";

export enum Types {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",    
}

type UserPayload = {
    [Types.LOGIN]: {
        name: string;
        email: string;
    };
    [Types.LOGOUT]: InitialStateType;
}
export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (
    state : UserBase | null ,
    action: UserActions
) => {
    switch (action.type){
        case Types.LOGIN:
            console.log(action.payload)
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
            
        case Types.LOGOUT:
            return {
                ...state,
               user:null
            };
        default:
            return state;
    }
}
export default userReducer;