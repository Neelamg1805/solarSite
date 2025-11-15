export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
}

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: File[];
  restaurantName?: string;
  address?: string;
}

