import { createContext, useReducer, Dispatch } from "react";
import userReducer, { UserActions } from './userReducer';
import dogsReducer, { DogsActions } from "./dogsReducer";
import breedsReducer, { BreedsActions } from "./breedsReducer";
import selectedBreedReducer, { SelectedBreedsActions } from "./selectedBreeds";
import { Props } from "../types/typeContext";


export type InitialStateType = {
	user: null,
	breeds: {breedsOptions: string[], selectedBreeds:string[]},
	dogs:  {dogs: string[], dogsIds:string[]}
	// selectedBreeds: string[],
}

const initialState = {
	user: null,
	breeds: {breedsOptions:[],selectedBreeds:[]},
	dogs: {dogs:[], dogsIds:[], }
	// dogs: [],
	// selectedBreeds: [],
};
const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<UserActions | BreedsActions | DogsActions>;
  }>({
	state: initialState,
	dispatch: () => null
  });
  
const mainReducer = (
	//{ user,dogs,breeds, selectedBreeds }: InitialStateType,
	{ user,breeds, dogs }: InitialStateType,
	action: UserActions | BreedsActions | DogsActions
) => ({
	user: userReducer(user, action),
	breeds: breedsReducer(breeds,action),
	dogs: dogsReducer(dogs,action),
	// selectedBreeds: selectedBreedReducer(selectedBreeds, action),
})

const AppProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
}
export { AppProvider, AppContext };