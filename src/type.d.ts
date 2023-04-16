export interface ProductType {
  _id: string;
  title: string;
  description: string;
  price: number;
  color: string;
  img: string;
}

export interface DataType {
  products: ProductType[];
}

export interface FetchType {
  data: DataType;
  isLoading: boolean;
  error: boolean;
}

export interface UserInfo {
  _id: string;
  fullName: string;
  phone: string;
  enail: string;
  img: string;

  token: string;
}

export interface UserType {
  userInfo: UserInfo;
  token: string;
}

export interface UsersType {
  user: UserType;
}


export interface messageType {
  _id: string,
  senderId: string,
  conversationId: string
  message: string,
  createdAt: string,
  userName: string

}

export interface allType {
  openBody: boolean,
  setOpenBody: (open: boolean) => void;

}

export interface messageType {
  "_id": string,
  "senderId": string,
  "conversationId": string,
  "message": string,
  "userName": string,
  "createdAt": string
}

export type ActiveChatType = {

  openBody: boolean,
  setOpenBody: (open: boolean) => void;

}
export type RootState = ReturnType<typeof store.getState>;
