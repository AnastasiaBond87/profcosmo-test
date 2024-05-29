import { ReactElement } from 'react';
import { type FieldValues, type UseControllerProps, useController } from 'react-hook-form';
import { Input, type InputProps } from './input';

type FormInputProps<T extends FieldValues> = InputProps & UseControllerProps<T>;

export const FormInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormInputProps<T>): ReactElement => {
  const {
    field: { onBlur, onChange, value },
    fieldState,
  } = useController({ name, control });

  const { error } = fieldState;

  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      error={error?.message}
      {...props}
    />
  );
};
