import {
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input,
  Textarea,
} from '@chakra-ui/react';
 
import {
  FieldError,
  UseFormRegister,
} from 'react-hook-form';

export type InputFieldProps = {
  type?: 'text' | 'email' | 'password' | 'textarea';
  label?: string;
  error?: FieldError;
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const InputField = forwardRef(
  (props: InputFieldProps, ref) => {
    const {
      type = 'text',
      label,
      error,
      ...inputProps
    } = props;

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        {type === 'textarea' ? (
          <Textarea
            bg="white"
            rows={8}
            {...inputProps}
            ref={ref}
          />
        ) : (
          <Input
            bg="white"
            type={type}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-lg;"
            {...inputProps}
            ref={ref}
          />
        )}
        {error && (
          <FormHelperText className="text-red-500 text-left text-xs mt-1">
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);