import { createContext, useReducer, Dispatch } from "react";
import userReducer, { UserActions } from './userReducer';
import dogsReducer, { DogsActions } from "./dogsReducer";
import breedsReducer, { BreedsActions } from "./breedsReducer";
import selectedBreedReducer, { SelectedBreedsActions } from "./selectedBreeds";
import { Props } from "../types/typeContext";


export type InitialStateType = {
	user: null,
	// dogs: string[],
	// breeds: string[],
	// selectedBreeds: string[],
}

const initialState = {
	user: null,
	// dogs: [],
	// breeds: [],
	// selectedBreeds: [],
};
const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<UserActions>;
  }>({
	state: initialState,
	dispatch: () => null
  });
  
const mainReducer = (
	//{ user,dogs,breeds, selectedBreeds }: InitialStateType,
	{ user }: InitialStateType,

	action: UserActions 
) => ({
	user: userReducer(user, action),
	// dogs: dogsReducer(dogs, action),
	// breeds: breedsReducer(breeds, action),
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