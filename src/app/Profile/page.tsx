import BoxReveal from "@/components/magicui/boxreveal";

export async function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Farrine Fadhirra Fasya<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Student at{" "}
          <span className="text-[#5046e6]">Telkom University</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Major
            <span className="font-semibold text-[#5046e6]"> Physics Engineering</span>,
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;