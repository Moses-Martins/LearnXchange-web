import { queryClient } from '@/lib/react-query';
import { signupService } from "@/services/auth-service";
import { authResponse, SignupData } from '@/types/auth';
import { UserData } from '@/types/user';
import { useMutation } from '@tanstack/react-query';

export const signup = (data: SignupData): Promise<authResponse> => {
    return signupService(data);
};

type UseSignupOptions = {
    onSuccess?: (user: UserData) => void;
};

export const useSignup = ({
    onSuccess,
}: UseSignupOptions = {}) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            queryClient.setQueryData(['auth-user'], data.user);
            onSuccess?.(data.user);
        },
    });
    return { submit, isPending };
}; 


