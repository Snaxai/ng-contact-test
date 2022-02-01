export interface IContact {
  id: number;
  name: string;
  avatar: string;
  email: string;
  deleted: boolean;
  phone: string;
  createdAt: number;
  address: IAddress;
}

export interface IAddress {
  street: string;
  city: string;
  country: string;
}
