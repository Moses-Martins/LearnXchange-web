import { Button } from '@/components/form/Button';
import { InputField } from '@/components/form/InputField';
import { useSignup } from '@/hooks/useSignup';
import { SignupData } from '@/types/auth';
import { Link } from 'lucide-react';
import { useForm } from 'react-hook-form';



export type SignupFormProps = {
    onSuccess: () => void;
};

export const SignupForm = ({
    onSuccess,
}: SignupFormProps) => {
    const signup = useSignup({ onSuccess });

    const { register, handleSubmit, formState, getValues } = useForm<SignupData>();

    const onSubmit = (data: SignupData) => {
        signup.submit(data);
    };

    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-purple-800">Create an Account</h1>
                <p className=" text-sm text-gray-700">Join thousands of learners and teachers</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="mt-1">
                    <InputField
                        label="Email"
                        type="email"
                        {...register('email')}
                        error={formState.errors['email']}
                    />
                </div>

                <div className="flex flex-row gap-4">

                <div className="flex-1 mt-1">
                    <InputField
                        label="Password"
                        type="password"
                        {...register('password1', {
                            required: 'Password field cannot be empty',
                        })}
                        error={formState.errors['password1']}
                    />
                </div>

                <div className="flex-1 mt-1">
                    <InputField
                        label="Confirm Password"
                        type="password"
                        {...register('password2', {
                            required: 'Confirm Password field cannot be empty',
                            validate: (value) =>
                                value === getValues('password1') || 'Passwords do not match',
                        })}
                        error={formState.errors['password2']}
                    />
                </div>
                </div>

                <div className="mt-1">
                    <InputField
                        label="Username"
                        type="text"
                        {...register('username', {
                            required: 'Username field cannot be empty',
                        })}
                        error={formState.errors['username']}
                    />
                </div>

                <div className="mt-9">
                    <Button
                        isLoading={signup.isPending}
                        isDisabled={signup.isPending}
                        type="submit"
                    >
                        Sign up
                    </Button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-900">
                        Already have an account?&nbsp;
                        <Link href="/login" className="font-medium text-red-500 hover:text-red-700">
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
};