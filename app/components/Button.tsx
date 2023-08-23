"use client";

import React from "react";

interface buttonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: buttonProps) {
  return <button className={className}>{children}</button>;
}
