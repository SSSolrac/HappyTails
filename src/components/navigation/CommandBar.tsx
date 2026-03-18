import type { ReactNode } from "react";

interface CommandBarProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function CommandBar({ title, subtitle, children }: CommandBarProps) {
  return (
    <header className="command-bar">
      <div>
        <h1>{title}</h1>
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      </div>
      {children}
    </header>
  );
}
