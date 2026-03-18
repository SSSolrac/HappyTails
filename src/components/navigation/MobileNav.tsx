import { Link } from "react-router-dom";

interface MobileNavProps {
  links: Array<{ label: string; to: string }>;
}

export default function MobileNav({ links }: MobileNavProps) {
  return (
    <nav className="mobile-nav" aria-label="Dashboard quick navigation">
      {links.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
