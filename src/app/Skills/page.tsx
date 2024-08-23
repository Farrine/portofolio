import BoxReveal from "@/components/magicui/boxreveal";

export async function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          These are my skills<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Programming Languange
            <span className="font-semibold text-[#5046e6]"> C</span>
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Softskill
            <span className="font-semibold text-[#5046e6]"> Event Management</span>
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Softskill
            <span className="font-semibold text-[#5046e6]"> Teaching</span>
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;