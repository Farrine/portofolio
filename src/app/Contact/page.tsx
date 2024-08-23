import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Instagram",
    username: "@farrinefsy",
    body: "Contact Me",
    url: "https://www.instagram.com/farrinefsy/",
    img: "https://images.app.goo.gl/ZVdeCTM8LUedoyrd6",
  },
  {
    name: "WhatsApp",
    username: "@Farrine",
    body: "Contact Me",
    url: "https://wa.me/6282127692615",
    img: "https://images.app.goo.gl/YXHjR49NGbrNktUN6",
  },
  {
    name: "Line",
    username: "@Rine",
    body: "Contact Me",
    url: "https://line.me/ti/p/UiwPCT1ABd",
    img: "https://images.app.goo.gl/zjzEtfJqLhdPRU197",
  },
  {
    name: "LinkedIn",
    username: "@Farrine",
    body: "Contact Me",
    url: "https://www.linkedin.com/in/farrine-fadhirra-fasya/",
    img: "https://images.app.goo.gl/V4HFc4PtMCh2tGCU9",
  },
  {
    name: "GitHub",
    username: "@Farrine",
    body: "Contact Me",
    url: "https://github.com/Farrine",
    img: "https://images.app.goo.gl/4shiEALsH3muXSsC8",
  },
  {
    name: "X",
    username: "@frndhrsy",
    body: "Contact Me",
    url: "https://x.com/frndhrsy",
    img: "https://images.app.goo.gl/URENpEMG1CSHJGAx5",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  url,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  url: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default MarqueeDemo;