import LoginPage from '@/app/signin/page';
import { appRender, screen, userEvent, waitFor } from '@/testing/test-utils';
import { describe, expect, it, vi } from 'vitest';

const mockPush = vi.fn();

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockPush, // if your page calls replace
  }),
}));

describe('Login Page', () => {
  it('should login the user into the dashboard', async () => {
    appRender(<LoginPage />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await userEvent.type(emailInput, 'user1@test.com');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});
