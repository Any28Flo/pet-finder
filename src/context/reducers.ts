type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };
// Product

type ProductType = {
    id: number;
    name: string;
    price: number;
};

export enum Types {
    Create = "CREATE_PRODUCT",
    Delete = "DELETE_PRODUCT",
    Add = "ADD_PRODUCT"
  }


type ProductPayload = {
    [Types.Create]: {
      id: number;
      name: string;
      price: number;
    };
    [Types.Delete]: {
      id: number;
    };
  };
// ShoppingCart

type ShoppingCartPayload = {
    [Types.Add]: undefined;
  };
 
export type ShoppingCartActions = ActionMap<
ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
    ProductPayload
  >];

  export const productReducer = (
    state: ProductType[],
    action: ProductActions | ShoppingCartActions
  ) => {
    switch (action.type) {
      case Types.Create:
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price
          }
        ];
      case Types.Delete:
        return [...state.filter(product => product.id !== action.payload.id)];
      default:
        return state;
    }
  };