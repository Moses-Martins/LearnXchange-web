import { ReactNode } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <AuthLayout title="Sign In">{children}</AuthLayout>;
}