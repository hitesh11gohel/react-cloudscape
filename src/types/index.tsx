// import { Dispatch, SetStateAction } from "react";

export interface IUserAddress {
  location: string;
  city: string;
  state: string;
  country: string;
  pinCode: number | string;
}

export interface IUserInfo {
  name: string;
  age: number;
  address: IUserAddress;
  mobile: number;
}

export interface IProduct {
  product: string;
  productName: string;
  price: string;
  productDescription: string;
  productMaterial: string;
  productAdjective: string;
}

export interface IUser {
  name: string;
  bio: string;
  jobTitle: string;
  jobArea: string;
  jobDescription: string;
}

// export interface IAppContext {
//   products: IProduct[];
//   users: IUser[];
//   loading?: boolean;
//   inputText?: string;
//   setUsers: Dispatch<SetStateAction<IUser[]>>;
//   activeHref: string;
//   setActiveHref: Dispatch<SetStateAction<string>>;
//   comments: IComment[];
//   getData: string;
//   setData: Dispatch<SetStateAction<string>>;
//   vehicles: IVehicles[];
// }

// export interface IDashboardContext {
//   theme: string;
// }

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IVehicles {
  name: string;
  color: string;
  model: string;
  type: string;
  manufacturer: string;
}
