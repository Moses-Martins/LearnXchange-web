// NavBarMenuLinks.tsx
import Link from "next/link";
import AuthButton from "../AuthButton";


const navItems = ['Explore', 'Feed', 'Learn', 'Exchange', 'Community'];

export default function NavBarMenuLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="flex flex-col p-4 space-y-6">
      {navItems.map(item => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="text-gray-700 font-semibold hover:text-orange-600"
          onClick={closeMenu}
        >
          {item}
        </Link>
      ))}
      <AuthButton variant="mobile" />
    </div>
  );
}
