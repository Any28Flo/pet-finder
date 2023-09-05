import { createContext, useContext, useReducer, ReactNode } from 'react';
import { User } from '../types';


type State = {
	user?: User | null;
	
};

const initialState: State = {
	user:null
	};

type Action =

	| {
		type: 'login';
		payload: State;
	}
	| {
		type: 'logout';
	}



function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'login':
            return state
		case 'logout':
          return state
		default:
			return state;
	}
}
type AppContextType = State & {
	dispatch: React.Dispatch<Action>;
};

type Props = {
	children: ReactNode;
};
export function AppProvider({ children }: Props) {

	const [{ user }, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ user, dispatch }} >
			{children}
		</AppContext.Provider>
	);
}

export const AppContext = createContext<AppContextType>({
	...initialState,
	dispatch: () => { },
});
