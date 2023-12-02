import {
  Controller,
  Path,
  FieldValues,
  Control,
  FieldErrors,
} from 'react-hook-form';
import { FormHelperText, TextField, TextFieldProps } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  errors: FieldErrors;
  label: string;
  placeholder?: string;
  type?: TextFieldProps['type'];
  autoComplete?: TextFieldProps['autoComplete'];
}

export const TextInput = <T extends FieldValues>({
  control,
  name,
  errors,
  label,
  placeholder,
  type,
  autoComplete,
}: Props<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            label={label}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            {...field}
          />
        )}
      />
      {errors && (
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <FormHelperText error>{message}</FormHelperText>
          )}
        />
      )}
    </>
  );
};
