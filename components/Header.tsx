import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Calculator", href: "/calculator" },
];

const Header = () => {
  return (
    <nav className="fixed w-full p-5">
      <ul className="flex justify-between">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href} className="text-xl bg-white font-medium">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
