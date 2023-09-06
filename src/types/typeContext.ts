import { ReactNode } from "react";
import { UserBase } from ".";

export type Action =

	| {
		type: 'login';
		payload: State;
	}
	| {
		type: 'logout';
	}

export type AppContextType = State & {
        dispatch: React.Dispatch<Action>;
    };
    
export type Props = {
        children: ReactNode;
};
    
export interface State  {
	user?: UserBase | null;
	breeds?: string[];
	dogs? : []
	
}
