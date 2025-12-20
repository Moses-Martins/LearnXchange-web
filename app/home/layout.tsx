import { ReactNode } from "react";
import WrapperLayout from "../../components/layouts/WrapperLayout";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <WrapperLayout>{children}</WrapperLayout>;
}