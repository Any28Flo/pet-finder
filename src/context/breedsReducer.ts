import { ActionMap } from "../types/typeContext";


export enum Types {
    SET_BREEDS = "SET_BREEDS",   
}
type BreedsPayload = {
    [Types.SET_BREEDS]: {
        breeds: string[];
    };
}

export type BreedsActions = ActionMap<BreedsPayload>[keyof ActionMap<BreedsPayload>];
export const breedReducer = (
    state:string[],
    action:BreedsActions
) => {
        switch (action.type){  
            
            default:
            return state;
    }
}
export default breedReducer