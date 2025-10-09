export interface ReactSelectOptions {
  id: string;
  value: string;
  label?: string;
}
[];
export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  options: undefined | { id: string; value: string; label: string }[];
  className: string | undefined;
  defaultValue?: { id: string; value: string; label: string }[];
  getSelectedValue?: (value: any) => void;
}

export type BookVacationProps = {
  fullName: string | undefined;
  email: string | undefined;
  street: string | undefined;
  city: string | undefined;
  country: string | undefined;
  message: string | undefined;
  phoneNumber: string | undefined;
  honeypot: string;
  termsAccepted: boolean;
};
