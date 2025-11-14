import React from 'react';
import { SelectProps } from '../types/form';

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  required,
  disabled,
  placeholder = 'Select an option',
  className = '',
}) => {
  const selectId = `select-${name}`;
  const hasError = !!error;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`
          w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors
          ${hasError
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
          }
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

