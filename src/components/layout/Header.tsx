import Image from "next/image";
import Link from "next/link";

import Container from "../Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const actions = [
  { label: "Sign in", href: "/signin" },
  { label: "Join Us", href: "/signup" },
  { label: "Bag", href: "/bag" },
];

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 md">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" aria-label="ByteSpace home">
          <Image
            src="/images/logo.png"
            alt="ByteSpace"
            width={140}
            height={100}
            priority
          />
        </Link>

        {/* Main Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-surface hover:font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <nav aria-label="Account navigation">
          <ul className="flex items-center gap-4">
            {actions.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
