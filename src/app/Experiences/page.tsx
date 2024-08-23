"use client";
import { CardStack } from "@/components/magicui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Farrine Fadhirra",
    designation: "Practicum Assistant",
    content: (
      <p>
        I was an asssistant at, <Highlight>Daskom Laboratory</Highlight> from June 2023 until June 2024.
      </p>
    ),
  },
  {
    id: 1,
    name: "Farrine Fadhirra",
    designation: "Internal Team Member",
    content: (
      <p>
        I was an internal team member at, <Highlight>Korps Protokoler Mahasiswa</Highlight> from October 2022 until January 2024.
      </p>
    ),
  },
  {
    id: 2,
    name: "Farrine Fadhirra",
    designation: "Practicum Assistant",
    content: (
      <p>
        I am an asssistant at, <Highlight>Sisment Laboratory</Highlight> since  June 2024.
      </p>
    ),
  },
];

export default CardStackDemo;