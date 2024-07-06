import React from 'react';
import { FormFieldProps } from '../types';


const FormField: React.FC<FormFieldProps> = ({
  register,
  name,
  label,
  type = 'text',
  placeholder,
  options,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      {type === 'select' ? (
        <select
          {...register(name)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormField;