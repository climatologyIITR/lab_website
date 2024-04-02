import Image from "next/image";
function Hero() {
  return (
    <div className="flex container mx-auto mt-20 lg:p-[100px] py-[100px]">
      <div className=" flex flex-col gap-y-8">
        <h1 className="font-primary text-[48px] text-[#09539D] max-w-[800px] font-bold">
          “Embracing the challenge of climate change, we sculpt tomorrow's
          resilience through today's innovation”
        </h1>
        <p>Let’s take these small steps together one at a time.</p>
      </div>
      <div className="hidden lg:block">
        <Image
        src={"/Images/hero.png"}
        width={700}
        height={700}
        >
        </Image>
      </div>
    </div>
  );
}
export default Hero;
