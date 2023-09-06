import { createContext, useReducer } from 'react';
import { State , Action, Props, AppContextType} from '../types/typeContext';


const initialState: State = {
	user:{name:"Batman", email:"batna"},
	dogs: [],
	breeds:[]
};



function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'login':
            return {...state, user: action.payload.user, breeds:[]}
		case 'logout':
          return {...initialState}
		case 'setBreeds':
			return {...state, breeds: action.payload.breeds }
		default:
			return state;
	}
}

export function AppProvider({ children }: Props) {

	const [{ user,dogs,breeds }, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ user,dogs,breeds, dispatch }} >
			{children}
		</AppContext.Provider>
	);
}

export const AppContext = createContext<AppContextType>({
	...initialState,
	dispatch: () => { },
});
