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
	| {
		type: 'setBreeds';
		payload: State;
	}
	| {
		type: 'setSelectedBreeds';
		payload: State;
	}
export interface State  {
	user: UserBase | null;
	breeds: string[];
	dogs : [];
	selectedBreeds: string[];
	
}

export type AppContextType = State & {
        dispatch: React.Dispatch<Action>;
    };
    
export type Props = {
        children: ReactNode;
};
    
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };