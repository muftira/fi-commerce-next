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
  profilePicture: any;
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  address: string;
  phoneNumber: string;
};

export type Header = {
  'Content-Type': string;
  Authorization?: string;
  AllowedOrigin: string;
};

export type ModalProps = {
  className?: string;
  isModalOpen: boolean;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  validationData: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
