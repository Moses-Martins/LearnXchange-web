import { ReactNode } from "react";
import WrapperLayout from "../../components/WrapperLayout";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <WrapperLayout>{children}</WrapperLayout>;
}