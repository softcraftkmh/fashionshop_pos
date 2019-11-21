export interface I_Item {
  id: string;
  name: string;
  price: string;
  sizes: string;
  colors: string;
  image: string;
}

export interface I_Info {
  desc: string;
  isShow: boolean;
}

export interface I_Customer {
  name?: string;
  password?: string;
  _id?: string;
  email?: string;
}
