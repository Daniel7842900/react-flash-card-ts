"use client";

interface cardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: cardProps) {
  const cardClassName = `max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-200 w-80 h-96 ${className}`;
  return <div className={cardClassName}>{children}</div>;
}
