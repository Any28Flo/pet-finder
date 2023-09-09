import { ActionMap } from "../types/typeContext";


export enum Types {
    SET_BREEDS = "SET_BREEDS",
    SET_SELECTED_BREEDS = "SET_SELECTED_BREEDS",
    ADD_BREED = "ADD_BREED",
    REMOVE_BREED = "REMOVE_BREED"
}
type BreedsPayload = {
    [Types.SET_BREEDS]: string[];
    [Types.SET_SELECTED_BREEDS]: string[];
    [Types.ADD_BREED]: {newItem: string};
    [Types.REMOVE_BREED ]: {itemToRemove: string}
}
type BreedsState ={
    breedsOptions: string[];
    selectedBreeds : string[];
}

export type BreedsActions = ActionMap<BreedsPayload>[keyof ActionMap<BreedsPayload>];
export const breedReducer = (
    state:BreedsState,
    action:BreedsActions
) => {
        switch (action.type){  
            case Types.SET_BREEDS:
                return{
                    ...state,
                    breedsOptions:action.payload
                }
            case Types.SET_SELECTED_BREEDS:
                return{
                    ...state,
                    selectedBreeds:action.payload
                }
            case Types.ADD_BREED:
                return{
                    ...state,
                    selectedBreeds: [...state.selectedBreeds, action.payload.newItem],
                }
            case Types.REMOVE_BREED:
                return{
                    ...state,
                    selectedBreeds: state.selectedBreeds.filter((item) => item !== action.payload.itemToRemove),
                }    
            
            default:
            return state;
    }
}
export default breedReducer