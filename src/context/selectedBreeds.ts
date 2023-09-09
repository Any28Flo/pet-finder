import { ActionMap } from "../types/typeContext";


export enum Types {
    SET_SELECTED_BREEDS = "SET_SELECTED_BREEDS",   
}
type SelectedBreedsPayload = {
    [Types.SET_SELECTED_BREEDS]: {
        breeds: string[];
    };
}

export type SelectedBreedsActions = ActionMap<SelectedBreedsPayload>[keyof ActionMap<SelectedBreedsPayload>];
export const selectedBreedReducer = (
    state:string[],
    action:SelectedBreedsActions
) => {
        switch (action.type){  
            
            default:
            return state;
    }
}
export default selectedBreedReducer