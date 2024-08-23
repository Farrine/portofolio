import FlipText from "@/components/magicui/flip-text";

export async function FlipTextDemo() {
  return (
    <FlipText
      className="text-5xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      word="The only website project I ever made was a landingpage website during a technical test. However, in the future I will try to make more websites."
    />
  );
}
 export default FlipTextDemo;