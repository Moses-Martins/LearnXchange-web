import SignupPage from '@/app/signup/page';
import { appRender, screen, userEvent, waitFor } from '@/testing/test-utils';
import { describe, expect, it, vi } from 'vitest';

const mockPush = vi.fn();

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush,
        replace: mockPush,
    }),
}));

describe('Signup Page', () => {

    it('should sign up a new user and redirect to dashboard', async () => {
        appRender(<SignupPage />);

        // Find inputs
        const usernameInput = screen.getByRole('textbox', { name: /username/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/^Password$/i); // only matches "Password"
        const confirmPasswordInput = screen.getByLabelText(/Confirm Password/i); // matches the second
        const submitButton = screen.getByRole('button', { name: /sign up/i });

        // Fill form
        await userEvent.type(usernameInput, 'johndoe');
        await userEvent.type(emailInput, 'johndoe@test.com');
        await userEvent.type(passwordInput, 'password123');
        await userEvent.type(confirmPasswordInput, 'password123');

        // Submit form
        await userEvent.click(submitButton);

        // Wait for redirect
        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith('/confirm-email');
        });
    });
});
