import Image from "next/image";
import Container from "@/components/ui/container";
function Hero() {
  return (
    <div className="flex flex-col -mt-10 lg:p-[80px] gap-y-[72px] py-[60px]">
      <Container className="">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-1/2 font-secondary">
            <p className="text-[#EDD87D] whitespace-nowrap w-fit h-fit m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Research{" "}
            </p>
            <p className="text-[#0064C8] m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Educate{" "}
            </p>
            <p className="text-[#00C8A4] m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Consult{" "}
            </p>
          </div>
          <div></div>
        </div>
        <div className="mt-10">
          <h1 className="text-[#09539D] text-[32px] font-semibold">ABOUT</h1>
          <p className=" text-[18px] font-medium">
            Welcome to the Climatology Lab, a dynamic research hub dedicated to
            unraveling the mysteries of our changing climate. Our team of
            passionate researchers, led by Professor Mahua Mukherjee, explores
            various facets of climatology to understand and address the
            challenges posed by a rapidly evolving environment.
          </p>
        </div>
      </Container>
    </div>
  );
}
export default Hero;
