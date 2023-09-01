"use client";

import React from "react";

interface buttonProps {
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export default function Button({
  children,
  className,
  handleClick,
}: buttonProps) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
