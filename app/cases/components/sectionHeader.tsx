// components/StartDateInput.tsx

import React from "react";

interface SectionHeaderProps {
  subTitle: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
      <div className="mx-auto max-w-[900px] space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
