export type PasswordHide = {
  password: boolean;
  confirmPassword: boolean;
};

export type Login = {
  status?: boolean;
  email: string;
  password: string;
};

export type Signup = {
  profilePicture: string,
  fullName: string,
  email: string,
  password: string,
  confirmPassword?: string,
  address: string,
  phoneNumber: string,
}

export type Header = {
  'Content-Type': string;
  Authorization?: string;
  AllowedOrigin: string;
};
