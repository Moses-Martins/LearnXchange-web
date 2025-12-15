import { ReactNode } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}