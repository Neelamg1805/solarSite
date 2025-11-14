import { SelectOption } from './common';

export interface FormFieldProps {
  label?: string;
  name: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface SelectProps extends FormFieldProps {
  options: SelectOption[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

export interface UploadProps extends FormFieldProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  value?: File[];
  onChange?: (files: File[]) => void;
  preview?: boolean;
}

