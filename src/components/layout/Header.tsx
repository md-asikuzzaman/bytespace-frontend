"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "../Container";
import clsx from "clsx";
import BagIcon from "../icons/BagIcon";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const actions = [
  { label: "Sign in", href: "/signin" },
  { label: "Join Us", href: "/signup" },
  { label: "Bag", href: "/cart" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-primary-800/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
        isOpen && "bg-primary-800 shadow-sm backdrop-blur-md",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" aria-label="ByteSpace home">
          <Image
            src="/images/logo.png"
            alt="ByteSpace"
            width={140}
            height={100}
            priority
            className="h-auto w-28 sm:w-32 md:w-35"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-surface transition-all duration-200 hover:font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <nav aria-label="Account navigation" className="hidden md:block">
          <ul className="flex items-center gap-4">
            {actions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-surface transition-all duration-200 hover:font-medium"
                >
                  {item.label === "Bag" ? <BagIcon /> : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="cursor-pointer text-surface md:hidden"
        >
          {isOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-surface/20 bg-primary-800 md:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-surface transition-colors hover:font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li className="my-1 h-px bg-surface/20" />

                {actions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-surface transition-colors hover:font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
