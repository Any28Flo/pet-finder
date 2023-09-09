import { ActionMap } from "../types/typeContext";


export enum Types {
    GET_BREEDS = "GET_BREEDS",   
}
type DogPayload = {
    [Types.GET_BREEDS]: {
        breeds: string[];
    };
}
export type DogsActions = ActionMap<DogPayload>[keyof ActionMap<DogPayload>];
export const dogsReducer = (
    state:string[],
    action: DogsActions 
) => {
        switch (action.type){  
            
            default:
            return state;
    }
}
export default dogsReducer