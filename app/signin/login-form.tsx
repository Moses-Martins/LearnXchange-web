import { Button } from '@/components/form/Button';
import { InputField } from '@/components/form/InputField';
import { useLogin } from '@/hooks/useLogin';
import { LoginData } from '@/types/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';



export type LoginFormProps = {
    onSuccess: () => void;
};

export const LoginForm = ({
    onSuccess,
}: LoginFormProps) => {
    const login = useLogin({ onSuccess });

    const { register, handleSubmit, formState } = useForm<LoginData>();

    const onSubmit = (data: LoginData) => {
        login.submit(data);
    };

    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-purple-800">Welcome Back</h1>
                <p className=" text-sm text-gray-700">Enter you credentials to access your account</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="mt-1">
                    <InputField
                        label="Email"
                        placeholder="doejohn@example.com"
                        type="email"
                        {...register('email')}
                        error={formState.errors['email']}
                    />
                </div>

                <div className="mt-1">
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="**************"
                        {...register('password', {
                            required: 'Password field cannot be empty',
                        })}
                        error={formState.errors['password']}
                    />
                </div>

                <div className="flex justify-end items-center">
                    <div className="flex items-center">
                        <Link href="#" className="ml-2 text-xs text-red-500 hover:text-red-700 cursor-pointer">
                            Forgot Password
                        </Link>
                    </div>
                </div>

                <div>
                    <Button
                        isLoading={login.isPending}
                        isDisabled={login.isPending}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </div>

                <div className="mt-7 text-center">
                    <p className="text-sm text-gray-900">
                        New to LearnXchange?&nbsp;
                        <Link href="/signup" className="font-medium text-red-500 hover:text-red-700">
                            Create an Account in
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
};