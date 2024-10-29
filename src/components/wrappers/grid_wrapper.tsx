import React, { FC, ReactNode } from "react";

interface Props {
  gap?: string;
  children: ReactNode;
}

const GridWrapper: FC<Props> = ({ gap = "4", children }) => {
  return (
    <div
      className={`grid gap-${gap} 
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
