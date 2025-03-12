"use client";

import { ReactNode } from "react";
import { Zoom } from "react-awesome-reveal";

interface TitleSectionsProps {
  children: ReactNode;
}

const TitleSections: React.FC<TitleSectionsProps> = ({ children }) => {
  return (
    <Zoom triggerOnce>
      <h2 className="xl:text-6xl text-4xl font-bold font-title max-w-[800px]">
        {children}
      </h2>
    </Zoom>
  );
};

export default TitleSections;
