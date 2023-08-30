import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardSkeleton = ({ children }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden w-80 h-96 rounded-lg shadow-lg bg-orange-200 justify-center items-center animate-pulse">
      {children}
    </div>
  );
};

export default CardSkeleton;
