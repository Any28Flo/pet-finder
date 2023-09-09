import { ActionMap } from "../types/typeContext";


export enum Types {
    SET_DOGS_IDS = "SET_DOGS_IDS",   
}
type DogPayload = {
    [Types.SET_DOGS_IDS]: {
        dogsIds: string[];
        nextPage : string;
        total: number;
    };
}
type DogsState ={
    dogsIds: string[];
    dogs : string[];
    total: number,
    next: string
}
export type DogsActions = ActionMap<DogPayload>[keyof ActionMap<DogPayload>];
export const dogsReducer = (
    state:DogsState | null,
    action: DogsActions 
) => {
        switch (action.type){  
            case Types.SET_DOGS_IDS:
                console.log(2)
                return{
                    ...state,
                    dogsIds: action.payload.dogsIds,
                    total: action.payload.total,
                    nextPage:action.payload.nextPage
                }
            
            default:
            return state;
    }
}
export default dogsReducer