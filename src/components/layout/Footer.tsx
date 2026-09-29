import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const footerLinks = [
  {
    title: "Column 1",
    links: [
      {
        label: "Featured Courses",
        href: "/courses/featured",
      },
      {
        label: "Featured Categories",
        href: "/categories/featured",
      },
      {
        label: "Business",
        href: "/business",
      },
      {
        label: "IT",
        href: "/it",
      },
      {
        label: "Design",
        href: "/design",
      },
    ],
  },
  {
    title: "Column 2",
    links: [
      {
        label: "Development",
        href: "/development",
      },
      {
        label: "Marketing",
        href: "/marketing",
      },
      {
        label: "Photography",
        href: "/photography",
      },
      {
        label: "Finance",
        href: "/finance",
      },
      {
        label: "Sport",
        href: "/sport",
      },
    ],
  },
  {
    title: "Column 3",
    links: [
      {
        label: "Become a Creator",
        href: "/become-creator",
      },
      {
        label: "Affiliate Program",
        href: "/affiliate",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Help",
        href: "/help",
      },
      {
        label: "About",
        href: "/about",
      },
    ],
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Cookies Settings",
    href: "/cookies",
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 items-end">
          {/* Brand & Search */}
          <div className="w-full max-w-xl">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/footer_logo.png"
                alt="ByteSpace"
                width={170}
                height={40}
                className="h-auto w-auto"
              />
            </Link>

            <p className="mt-4 lg:mb-12 lg:max-w-md text-body-s text-shuttlegray-950 satoshi-regular">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Search */}
            <form className="mt-6 flex w-full flex-col gap-3 sm:flex-row lg:max-w-126">
              <div className="relative min-w-0 flex-1">
                <input
                  type="search"
                  placeholder="Enter your email"
                  aria-label="Search for courses"
                  className="h-14 w-full rounded-full border border-border p-5 text-body-s text-shuttlegray-950 outline-none transition-all placeholder:text-muted focus:border-seconray focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <button
                type="submit"
                className="h-14 w-full shrink-0 cursor-pointer rounded-full bg-secondary-400 px-8 text-label-m font-medium text-gray-950 transition-all duration-200 hover:bg-secondary-500 hover-animation sm:w-auto"
              >
                Search
              </button>
            </form>

            <p className="mt-5 lg:max-w-126 text-body-xs text-shuttlegray-950 satoshi-regular">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <ul className="mt-5 space-y-3 md:space-y-4.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-s text-shuttlegray-950 satoshi-regular transition-all duration-200 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-shuttlegray-200 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-12.5">
          <p className="text-body-xs text-shuttlegray-950 satoshi-regular">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-xs text-shuttlegray-950 satoshi-regular transition-all duration-200 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
