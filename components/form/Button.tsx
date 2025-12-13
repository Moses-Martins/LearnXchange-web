import { Button as ChakraButton } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: "w-1/3 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition duration-150 ease-in-out hover:scale-105",
  outline: "bg-white text-blue-500 border border-blue-500",
};

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // optional extra Tailwind classes
};

export const Button = ({
  variant = 'solid',
  type = 'button',
  children,
  className = "font-roboto",
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      type={type}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </ChakraButton>
  );
};
