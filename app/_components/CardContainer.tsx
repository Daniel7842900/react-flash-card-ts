import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return <>{children}</>;
};

export default CardContainer;
